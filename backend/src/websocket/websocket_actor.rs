use actix::{Actor, Handler, Message, StreamHandler};
use actix_web_actors::ws;
use serde::Deserialize;
use sqlx::PgPool;
use std::collections::HashMap;

pub struct WebSocketActor {
    pub pool: PgPool, // Database connection pool
    pub sessions: HashMap<usize, actix::Addr<WebSocketActor>>,
}

impl WebSocketActor {
    pub fn new(pool: PgPool) -> Self {
        Self {
            pool,
            sessions: HashMap::new(),
        }
    }

    fn broadcast_message(&self, message: String) {
        for session in self.sessions.values() {
            let _ = session.do_send(WebSocketMessage(message.clone()));
        }
    }

    /// Example usage of `pool`: Log the broadcasted message to the database
    fn log_message(&self, message: &str) {
        let pool = self.pool.clone();
        let message = message.to_string();
        actix::spawn(async move {
            let _ = sqlx::query!(
                "INSERT INTO websocket_logs (message) VALUES ($1)",
                message
            )
            .execute(&pool)
            .await;
        });
    }
}

#[derive(Message)]
#[rtype(result = "()")]
pub struct WebSocketMessage(pub String);

impl Actor for WebSocketActor {
    type Context = ws::WebsocketContext<Self>;
}

impl StreamHandler<Result<ws::Message, ws::ProtocolError>> for WebSocketActor {
    fn handle(&mut self, msg: Result<ws::Message, ws::ProtocolError>, ctx: &mut Self::Context) {
        if let Ok(ws::Message::Text(text)) = msg {
            // Add debug logging here
            println!("Raw message received: {}", text);
            match serde_json::from_str::<PixelUpdate>(&text) {
                Ok(pixel_update) => {
                    println!("Deserialized successfully: {:?}", pixel_update);
                    self.broadcast_message(format!(
                        r#"{{"x":{}, "y":{}, "color":"{}"}}"#,
                        pixel_update.x, pixel_update.y, pixel_update.color
                    ));
                    self.log_message(&text); // Log the message to the database
                }
                Err(err) => {
                    println!("Deserialization error: {}", err);
                    ctx.text("Invalid update format");
                }
            }
        } else {
            println!("Non-text WebSocket message received: {:?}", msg);
        }
    }
}


#[derive(Deserialize, Debug)]
pub struct PixelUpdate {
    pub x: i32,
    pub y: i32,
    pub color: String,
}


impl Handler<WebSocketMessage> for WebSocketActor {
    type Result = ();

    fn handle(&mut self, msg: WebSocketMessage, ctx: &mut Self::Context) {
        ctx.text(msg.0);
    }
}
