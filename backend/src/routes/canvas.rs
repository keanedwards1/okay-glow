// backend/src/routes/canvas.rs

use actix_web::{post, get, web, HttpResponse};
use serde::{Deserialize, Serialize};
use sqlx::PgPool;

#[derive(Deserialize)]
pub struct PixelUpdate {
    pub x: i32,
    pub y: i32,
    pub color: String,
}

#[derive(Serialize)]
pub struct CanvasPixel {
    pub x: i32,
    pub y: i32,
    pub color: String,
}

// POST /canvas/pixel - Update a pixel in the database
#[post("/canvas/pixel")]
async fn update_pixel(
    pool: web::Data<PgPool>,
    pixel: web::Json<PixelUpdate>,
) -> HttpResponse {
    let result = sqlx::query!(
        "INSERT INTO canvas_pixels (x, y, color) VALUES ($1, $2, $3)
         ON CONFLICT (x, y) DO UPDATE SET color = $3",
        pixel.x,
        pixel.y,
        pixel.color
    )
    .execute(pool.get_ref())
    .await;

    match result {
        Ok(_) => HttpResponse::Ok().body("Pixel updated"),
        Err(_) => HttpResponse::InternalServerError().body("Failed to update pixel"),
    }
}

// GET /canvas/state - Fetch the entire canvas state
#[get("/canvas/state")]
async fn get_canvas_state(pool: web::Data<PgPool>) -> HttpResponse {
    let result = sqlx::query_as!(
        CanvasPixel,
        "SELECT x, y, color FROM canvas_pixels"
    )
    .fetch_all(pool.get_ref())
    .await;

    match result {
        Ok(pixels) => HttpResponse::Ok().json(pixels),
        Err(_) => HttpResponse::InternalServerError().body("Failed to fetch canvas"),
    }
}

// Initialize the canvas-related routes
pub fn init_routes(cfg: &mut web::ServiceConfig) {
    cfg.service(update_pixel)
       .service(get_canvas_state);
}
