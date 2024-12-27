// src/models/subscriber.rs

use serde::{Deserialize, Serialize};
use uuid::Uuid;

#[derive(sqlx::FromRow, Serialize, Deserialize)]
pub struct Subscriber {
    pub id: Uuid,
    pub email: String,
    pub subscribed_at: chrono::NaiveDateTime,
}
