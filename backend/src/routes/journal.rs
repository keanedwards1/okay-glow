use actix_web::{delete, get, post, put, web, HttpRequest, HttpResponse};
use serde::{Deserialize, Serialize};
use sqlx::PgPool;
use uuid::Uuid;
use chrono::{Utc, TimeZone, DateTime};

#[derive(Serialize)]
struct SerializableJournalEntry {
    id: Uuid,
    content: String,
    mood: Option<String>,
    #[serde(with = "chrono::serde::ts_seconds")]
    created_at: DateTime<Utc>,
}

#[derive(Deserialize)]
struct JournalEntry {
    content: String,
    mood: Option<String>,
}

async fn get_user_id(_req: HttpRequest) -> Option<Uuid> {
    // Mock user_id for testing
    Some(Uuid::parse_str("69d2f9b1-6005-4198-8cbf-530412a33aa6").unwrap()) // Replace with real extraction logic
}

#[post("/journal")]
async fn create_journal_entry(
    pool: web::Data<PgPool>,
    req: HttpRequest,
    data: web::Json<JournalEntry>,
) -> HttpResponse {
    let user_id = match get_user_id(req).await {
        Some(id) => id,
        None => return HttpResponse::Unauthorized().body("User ID not found"),
    };

    let result = sqlx::query!(
        "INSERT INTO journal_entries (id, user_id, content, mood) VALUES ($1, $2, $3, $4)",
        Uuid::new_v4(),
        user_id,
        data.content,
        data.mood
    )
    .execute(pool.get_ref())
    .await;

    match result {
        Ok(_) => HttpResponse::Created().body("Journal entry created"),
        Err(_) => HttpResponse::InternalServerError().body("Failed to create journal entry"),
    }
}

#[get("/journal")]
async fn get_journal_entries(
    pool: web::Data<PgPool>,
    req: HttpRequest,
) -> HttpResponse {
    let user_id = match get_user_id(req).await {
        Some(id) => id,
        None => return HttpResponse::Unauthorized().body("User ID not found"),
    };

    let result = sqlx::query!(
        r#"
        SELECT id, content, mood, created_at
        FROM journal_entries
        WHERE user_id = $1
        "#,
        user_id
    )
    .fetch_all(pool.get_ref())
    .await;

    match result {
        Ok(entries) => {
            let serialized_entries: Vec<SerializableJournalEntry> = entries
                .into_iter()
                .map(|entry| SerializableJournalEntry {
                    id: entry.id,
                    content: entry.content,
                    mood: entry.mood,
                    created_at: Utc.from_utc_datetime(&entry.created_at.unwrap()),
                })
                .collect();
            HttpResponse::Ok().json(serialized_entries)
        }
        Err(_) => HttpResponse::InternalServerError().body("Failed to retrieve journal entries"),
    }
}

#[put("/journal/{id}")]
async fn update_journal_entry(
    pool: web::Data<PgPool>,
    req: HttpRequest,
    entry_id: web::Path<Uuid>,
    data: web::Json<JournalEntry>,
) -> HttpResponse {
    let user_id = match get_user_id(req).await {
        Some(id) => id,
        None => return HttpResponse::Unauthorized().body("User ID not found"),
    };

    let result = sqlx::query!(
        "UPDATE journal_entries SET content = $1, mood = $2 WHERE id = $3 AND user_id = $4",
        data.content,
        data.mood,
        *entry_id,
        user_id
    )
    .execute(pool.get_ref())
    .await;

    match result {
        Ok(_) => HttpResponse::Ok().body("Journal entry updated"),
        Err(_) => HttpResponse::InternalServerError().body("Failed to update journal entry"),
    }
}

#[delete("/journal/{id}")]
async fn delete_journal_entry(
    pool: web::Data<PgPool>,
    req: HttpRequest,
    entry_id: web::Path<Uuid>,
) -> HttpResponse {
    let user_id = match get_user_id(req).await {
        Some(id) => id,
        None => return HttpResponse::Unauthorized().body("User ID not found"),
    };

    let result = sqlx::query!(
        "DELETE FROM journal_entries WHERE id = $1 AND user_id = $2",
        *entry_id,
        user_id
    )
    .execute(pool.get_ref())
    .await;

    match result {
        Ok(_) => HttpResponse::Ok().body("Journal entry deleted"),
        Err(_) => HttpResponse::InternalServerError().body("Failed to delete journal entry"),
    }
}

pub fn init_routes(cfg: &mut web::ServiceConfig) {
    cfg.service(create_journal_entry)
        .service(get_journal_entries)
        .service(update_journal_entry)
        .service(delete_journal_entry);
}
