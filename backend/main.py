from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, EmailStr
import sqlalchemy
import databases
import os
from dotenv import load_dotenv

# Load environment variables from .env
load_dotenv()

# Use DATABASE_URL from .env; fallback to SQLite if not set
DATABASE_URL = os.getenv("DATABASE_URL", "sqlite+aiosqlite:///./test.db")
database = databases.Database(DATABASE_URL)
metadata = sqlalchemy.MetaData()

# --- User Table ---
users = sqlalchemy.Table(
    "users",
    metadata,
    sqlalchemy.Column("id", sqlalchemy.Integer, primary_key=True),
    sqlalchemy.Column("username", sqlalchemy.String, unique=True, index=True),
    sqlalchemy.Column("password", sqlalchemy.String),
)

# --- ContactMessage Table ---
contact_messages = sqlalchemy.Table(
    "contact_messages",
    metadata,
    sqlalchemy.Column("id", sqlalchemy.Integer, primary_key=True),
    sqlalchemy.Column("name", sqlalchemy.String(100), nullable=False),
    sqlalchemy.Column("email", sqlalchemy.String(120), nullable=False),
    sqlalchemy.Column("message", sqlalchemy.Text, nullable=False),
)

# --- Engine Setup ---
if DATABASE_URL.startswith("sqlite"):
    engine = sqlalchemy.create_engine(
        DATABASE_URL.replace("aiosqlite", "pysqlite"), connect_args={"check_same_thread": False}
    )
else:
    sync_db_url = DATABASE_URL.replace("asyncpg", "psycopg2")
    engine = sqlalchemy.create_engine(sync_db_url)
metadata.create_all(engine)
   
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# --- Schemas ---
class User(BaseModel):
    username: str
    password: str

class ContactMessage(BaseModel):
    name: str
    email: EmailStr
    message: str

# --- Events ---
@app.on_event("startup")
async def startup():
    await database.connect()

@app.on_event("shutdown")
async def shutdown():
    await database.disconnect()

# --- Auth Endpoints ---
@app.post("/signup")
async def signup(user: User):
    query = users.select().where(users.c.username == user.username)
    existing = await database.fetch_one(query)
    if existing:
        raise HTTPException(status_code=400, detail="Username already exists")
    query = users.insert().values(username=user.username, password=user.password)
    await database.execute(query)
    return {"message": "User registered successfully!"}

@app.post("/signin")
async def signin(user: User):
    query = users.select().where(users.c.username == user.username)
    existing = await database.fetch_one(query)
    if not existing or existing["password"] != user.password:
        raise HTTPException(status_code=401, detail="Invalid credentials")
    return {"message": "Login successful!"}

# --- Contact Endpoint ---
@app.post("/contact")
async def create_contact_message(contact: ContactMessage):
    query = contact_messages.insert().values(
        name=contact.name,
        email=contact.email,
        message=contact.message,
    )
    await database.execute(query)
    return {"message": "Contact form submitted successfully!"}