use actix_web::{dev::ServiceRequest, dev::ServiceResponse, Error, FromRequest};
use futures_util::future::{ready, Ready};
use jsonwebtoken::{decode, Validation, DecodingKey};
use serde::Deserialize;
use uuid::Uuid;

#[derive(Deserialize)]
struct Claims {
    sub: String, // User ID
    exp: usize,  // Expiration timestamp
}

pub struct AuthenticatedUser(pub Uuid);

impl FromRequest for AuthenticatedUser {
    type Error = Error;
    type Future = Ready<Result<Self, Self::Error>>;

    fn from_request(req: &ServiceRequest, _: &mut actix_web::dev::Payload) -> Self::Future {
        let header = req.headers().get("Authorization");
        if let Some(header_value) = header {
            if let Ok(auth_str) = header_value.to_str() {
                if let Some(token) = auth_str.strip_prefix("Bearer ") {
                    let key = std::env::var("JWT_SECRET").expect("JWT_SECRET must be set");
                    if let Ok(data) = decode::<Claims>(
                        &token,
                        &DecodingKey::from_secret(key.as_ref()),
                        &Validation::default(),
                    ) {
                        if let Ok(user_id) = Uuid::parse_str(&data.claims.sub) {
                            return ready(Ok(AuthenticatedUser(user_id)));
                        }
                    }
                }
            }
        }

        ready(Err(actix_web::error::ErrorUnauthorized("Invalid token")))
    }
}
