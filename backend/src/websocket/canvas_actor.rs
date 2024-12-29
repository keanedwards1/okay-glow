use actix::prelude::*;
use actix_web_actors::ws;
use std::collections::HashSet;

pub struct PixelCanvasSocket {
    sessions: HashSet<Addr<Self>>,
}

impl PixelCanvasSocket {
    fn broadcast(&self, message: String) {
        for session in &self.sessions {
            session.do_send(ws::Message::Text(message.clone()));
        }
    }
}
