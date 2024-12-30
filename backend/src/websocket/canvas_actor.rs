// backend/src/websocket/canvas_actor.rs

use actix::prelude::*;
use crate::types::WebSocketMessage;
use actix_web_actors::ws; // Import WebSocket context
use std::collections::HashSet;

pub struct PixelCanvasActor {
    sessions: HashSet<Addr<Self>>, // Maintain active sessions
}

impl PixelCanvasActor {
    pub fn new() -> Self {
        Self {
            sessions: HashSet::new(),
        }
    }

    fn broadcast_message(&self, message: String) {
        for session in &self.sessions {
            session.do_send(WebSocketMessage(message.clone()));
        }
    }
}

impl Actor for PixelCanvasActor {
    type Context = ws::WebsocketContext<Self>;
}

impl StreamHandler<Result<ws::Message, ws::ProtocolError>> for PixelCanvasActor {
    fn handle(&mut self, msg: Result<ws::Message, ws::ProtocolError>, _ctx: &mut Self::Context) {
        match msg {
            Ok(ws::Message::Text(text)) => {
                self.broadcast_message(text.to_string()); // Broadcast incoming message
            }
            _ => (),
        }
    }
}

impl Handler<WebSocketMessage> for PixelCanvasActor {
    type Result = ();

    fn handle(&mut self, msg: WebSocketMessage, ctx: &mut Self::Context) {
        ctx.text(msg.0); // Send the message to the WebSocket
    }
}
