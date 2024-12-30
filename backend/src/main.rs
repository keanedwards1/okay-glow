use actix_web::{web, App, HttpServer};
use dotenvy::dotenv;
use env_logger;
mod config;
mod db;
mod routes; // Import the routes module
mod services;
mod websocket;
mod types;

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    dotenv().ok(); // Load environment variables
    env_logger::init(); // Initialize logging

    // Initialize the database connection pool
    let pool = db::init_pool().await.expect("Failed to create database pool");

    // Start the Actix Web server
    HttpServer::new(move || {
        App::new()
            .app_data(web::Data::new(pool.clone())) // Pass the database pool to the app
            .configure(routes::init) // Use centralized route configuration
    })
    .bind("127.0.0.1:8080")? // Bind the server to localhost:8080
    .run()
    .await
}
