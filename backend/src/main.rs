use actix_web::{web, App, HttpServer};
mod config;
mod db;
mod routes;
pub mod services;

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    dotenvy::dotenv().ok(); // Load .env variables
    env_logger::init(); // Initialize logging

    let pool = db::init_pool().await.expect("Failed to create database pool");

    HttpServer::new(move || {
        App::new()
            .app_data(web::Data::new(pool.clone())) // Share DB pool
            .configure(routes::init) // Initialize routes
    })
    .bind("127.0.0.1:8080")?
    .run()
    .await
}
