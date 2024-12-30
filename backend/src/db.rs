// backend/src/db.rs

use sqlx::{postgres::PgPoolOptions, PgPool};

pub async fn init_pool() -> Result<PgPool, sqlx::Error> {
    let database_url = std::env::var("DATABASE_URL").expect("DATABASE_URL must be set");
    PgPoolOptions::new()
        .max_connections(5)
        .connect(&database_url)
        .await
}
