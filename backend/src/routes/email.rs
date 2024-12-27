use actix_web::{post, web, HttpResponse};
use serde::Deserialize;
use crate::services::email_service;

#[derive(Deserialize)]
struct ContactFormData {
    name: String,
    email: String,
    subject: String,
    message: String,
}

#[post("/contact")]
async fn contact_form(data: web::Json<ContactFormData>) -> HttpResponse {
    let recipient = "okayglow1@gmail.com";
    let subject = format!("Contact Form: {}", data.subject);
    let body = format!(
        "You have received a message from {}\n\nEmail: {}\n\nMessage:\n{}",
        data.name, data.email, data.message
    );

    match email_service::send_email(recipient, &subject, &body) {
        Ok(_) => HttpResponse::Ok().json("Message sent successfully!"),
        Err(err) => HttpResponse::InternalServerError().body(format!("Error sending message: {:?}", err)),
    }
}

#[derive(Deserialize)]
struct SubscribeData {
    email: String,
}

#[post("/subscribe")]
async fn subscribe(data: web::Json<SubscribeData>, pool: web::Data<sqlx::PgPool>) -> HttpResponse {
    let result = sqlx::query!(
        "INSERT INTO subscribers (email) VALUES ($1) ON CONFLICT DO NOTHING",
        data.email
    )
    .execute(pool.get_ref())
    .await;

    match result {
        Ok(_) => HttpResponse::Ok().json("Subscribed successfully"),
        Err(_) => HttpResponse::InternalServerError().body("Error subscribing"),
    }
}

/// Register the email-related routes with the Actix web server.
pub fn init_routes(cfg: &mut web::ServiceConfig) {
    cfg.service(contact_form)
       .service(subscribe);
}
