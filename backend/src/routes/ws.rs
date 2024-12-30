// backend/src/routes/ws.rs

use actix_web::{HttpRequest, HttpResponse, web, Error};
use actix_web_actors::ws;
use sqlx::PgPool;
use crate::websocket::websocket_actor::WebSocketActor;

pub async fn ws_index(
    req: HttpRequest,
    stream: web::Payload,
    pool: web::Data<PgPool>, // Accept the database pool
) -> Result<HttpResponse, Error> {
    ws::start(WebSocketActor::new(pool.get_ref().clone()), &req, stream) // Pass the pool
}

