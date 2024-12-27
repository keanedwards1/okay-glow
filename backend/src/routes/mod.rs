pub mod auth;
pub mod email;
pub mod journal;

use actix_web::web;

pub fn init(cfg: &mut web::ServiceConfig) {
    cfg.service(auth::register)
       .service(auth::login)
       .configure(email::init_routes);
}

