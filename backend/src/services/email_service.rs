// backend/src/services/email_service.rs

use lettre::message::{header, Message};
use lettre::{SmtpTransport, Transport};

pub fn send_email(recipient: &str, subject: &str, body: &str) -> Result<(), lettre::transport::smtp::Error> {
    let sender_email = std::env::var("EMAIL_SENDER").expect("EMAIL_SENDER must be set");
    let smtp_server = std::env::var("SMTP_SERVER").expect("SMTP_SERVER must be set");
    let smtp_username = std::env::var("SMTP_USERNAME").expect("SMTP_USERNAME must be set");
    let smtp_password = std::env::var("SMTP_PASSWORD").expect("SMTP_PASSWORD must be set");

    let email = Message::builder()
        .from(sender_email.parse().unwrap())
        .to(recipient.parse().unwrap())
        .subject(subject)
        .header(header::ContentType::TEXT_HTML)
        .body(format!(
            r#"
            <html>
                <body>
                    <h1>{}</h1>
                    <p>{}</p>
                </body>
            </html>
            "#,
            subject, body
        ))
        .unwrap();

    let transport = SmtpTransport::relay(&smtp_server)
        .unwrap()
        .credentials((smtp_username, smtp_password).into())
        .build();

    transport.send(&email).map(|_| ())
}
