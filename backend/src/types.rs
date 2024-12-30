use serde::{Deserialize};
use actix::Message;

#[derive(Deserialize)]
#[allow(dead_code)]
pub struct PixelUpdate {
    pub x: i32,
    pub y: i32,
    pub color: String,
}

#[derive(Message)]
#[rtype(result = "()")]
pub struct WebSocketMessage(pub String);
