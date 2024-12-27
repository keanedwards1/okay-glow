use serde::{Deserialize, Serialize};
use uuid::Uuid;

#[derive(Debug, Serialize, Deserialize)]
pub struct JournalEntry {
    pub id: Uuid,
    pub user_id: Uuid,
    pub content: String,
    pub mood: Option<String>,
    pub created_at: chrono::NaiveDateTime,
}
