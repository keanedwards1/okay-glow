use actix_web::{web, HttpResponse, post};
use bcrypt::{hash, verify, DEFAULT_COST};
use jsonwebtoken::{encode, EncodingKey, Header};
use serde::{Deserialize, Serialize};
use sqlx::PgPool;
use std::env;


#[derive(Deserialize)]
struct RegisterData {
    email: String,
    password: String,
}

#[derive(Deserialize)]
struct LoginData {
    email: String,
    password: String,
}

#[derive(Serialize)]
struct Claims {
    sub: String, // Subject: user ID
    exp: usize,  // Expiration time (UNIX timestamp)
}

#[post("/register")]
async fn register(
    pool: web::Data<PgPool>,
    data: web::Json<RegisterData>,
) -> HttpResponse {
    // Hash the password
    let hashed_password = match hash(&data.password, DEFAULT_COST) {
        Ok(hash) => hash,
        Err(_) => return HttpResponse::InternalServerError().body("Error hashing password"),
    };

    // Insert the new user into the database
    let result = sqlx::query!(
        "INSERT INTO users (id, email, password) VALUES ($1, $2, $3)",
        uuid::Uuid::new_v4(),
        data.email,
        hashed_password
    )
    .execute(pool.get_ref())
    .await;

    match result {
        Ok(_) => HttpResponse::Ok().json("User registered successfully"),
        Err(sqlx::Error::Database(err)) if err.code().unwrap_or_default() == "23505" => {
            // Unique violation error code
            HttpResponse::Conflict().json("Email is already registered")
        }
        Err(_) => HttpResponse::InternalServerError().body("Error registering user"),
    }
}

#[post("/login")]
async fn login(
    pool: web::Data<PgPool>,
    data: web::Json<LoginData>,
) -> HttpResponse {
    // Fetch the user by email
    let user = match sqlx::query!(
        "SELECT id, password FROM users WHERE email = $1",
        data.email
    )
    .fetch_one(pool.get_ref())
    .await
    {
        Ok(user) => user,
        Err(_) => return HttpResponse::Unauthorized().body("Invalid credentials"),
    };

    // Verify the password
    if let Err(_) | Ok(false) = verify(&data.password, &user.password) {
        return HttpResponse::Unauthorized().body("Invalid credentials");
    }

    // Create a JWT token
    let expiration = chrono::Utc::now()
        .checked_add_signed(chrono::Duration::hours(24))
        .expect("valid timestamp")
        .timestamp() as usize;

    let claims = Claims {
        sub: user.id.to_string(),
        exp: expiration,
    };

    let token = encode(
        &Header::default(),
        &claims,
        &EncodingKey::from_secret(env::var("JWT_SECRET").expect("JWT_SECRET must be set").as_ref()),
    ).unwrap();
    

    HttpResponse::Ok().json(token)
}
