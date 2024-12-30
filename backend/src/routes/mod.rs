pub mod auth;
pub mod email;
pub mod journal;
pub mod ws;
pub mod canvas;

use actix_web::web;

pub fn init(cfg: &mut web::ServiceConfig) {
    cfg.service(auth::register)
        .service(auth::login)
        .configure(email::init_routes)
        .configure(journal::init_routes)
        .configure(canvas::init_routes) // Use the centralized canvas routes
        .route("/ws", web::get().to(ws::ws_index));
}
