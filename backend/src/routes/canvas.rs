use actix_web::{post, get, web, HttpResponse};
use serde::{Deserialize, Serialize};
use sqlx::PgPool;

#[derive(Deserialize)]
struct PixelUpdate {
    x: i32,
    y: i32,
    color: String, // HEX color code
}

#[derive(Serialize)]
struct CanvasPixel {
    x: i32,
    y: i32,
    color: String,
}

// POST /canvas/pixel - Update a pixel
#[post("/canvas/pixel")]
async fn update_pixel(
    pool: web::Data<PgPool>,
    pixel: web::Json<PixelUpdate>,
) -> HttpResponse {
    let result = sqlx::query!(
        "INSERT INTO canvas_pixels (x, y, color) 
         VALUES ($1, $2, $3)
         ON CONFLICT (x, y) DO UPDATE 
         SET color = $3",
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

// GET /canvas/state - Fetch the entire canvas
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
