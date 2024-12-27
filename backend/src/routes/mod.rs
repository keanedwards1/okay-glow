pub mod email; // Expose email module

use actix_web::web;

/// Initialize all routes in the application
pub fn init(cfg: &mut web::ServiceConfig) {
    email::init_routes(cfg); // Add email routes

    // Uncomment these lines when `auth` and `journal` modules are implemented
    // auth::init_routes(cfg);
    // journal::init_routes(cfg);
}
