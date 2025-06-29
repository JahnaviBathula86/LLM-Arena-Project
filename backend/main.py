from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
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

users = sqlalchemy.Table(
    "users",
    metadata,
    sqlalchemy.Column("id", sqlalchemy.Integer, primary_key=True),
    sqlalchemy.Column("username", sqlalchemy.String, unique=True, index=True),
    sqlalchemy.Column("password", sqlalchemy.String),
)

# For SQLAlchemy engine, handle both SQLite and PostgreSQL
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

class User(BaseModel):
    username: str
    password: str

@app.on_event("startup")
async def startup():
    await database.connect()

@app.on_event("shutdown")
async def shutdown():
    await database.disconnect()

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