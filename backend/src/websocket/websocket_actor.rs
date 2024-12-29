use actix::prelude::*;
use actix_web_actors::ws;
use std::collections::HashMap;

// Struct to represent a WebSocket actor
pub struct WebSocketActor {
    pub sessions: HashMap<usize, Addr<WebSocketActor>>,
    pub current_id: usize,
}

impl WebSocketActor {
    pub fn new() -> Self {
        Self {
            sessions: HashMap::new(),
            current_id: 0,
        }
    }

    pub fn broadcast_message(&self, message: String) {
        for session in self.sessions.values() {
            session.do_send(WebSocketMessage(message.clone()));
        }
    }
}

// Message to send to WebSocket clients
#[derive(Message)]
#[rtype(result = "()")]
pub struct WebSocketMessage(pub String);

// Implement WebSocketActor as an Actor
impl Actor for WebSocketActor {
    type Context = ws::WebsocketContext<Self>;
}

// Handle incoming WebSocket messages
impl StreamHandler<Result<ws::Message, ws::ProtocolError>> for WebSocketActor {
    fn handle(&mut self, msg: Result<ws::Message, ws::ProtocolError>, ctx: &mut Self::Context) {
        match msg {
            Ok(ws::Message::Text(text)) => {
                // Broadcast received message to all clients
                self.broadcast_message(format!("Broadcast: {}", text));
            }
            Ok(ws::Message::Binary(bin)) => ctx.binary(bin),
            _ => (),
        }
    }
}

// Implement handler for WebSocketMessage
impl Handler<WebSocketMessage> for WebSocketActor {
    type Result = ();

    fn handle(&mut self, msg: WebSocketMessage, ctx: &mut Self::Context) {
        ctx.text(msg.0);
    }
}
