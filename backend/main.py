from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

# CORS for React
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# In-memory user store
users = {}

class User(BaseModel):
    username: str
    password: str

@app.post("/signup")
def signup(user: User):
    if user.username in users:
        raise HTTPException(status_code=400, detail="Username already exists")
    users[user.username] = user.password
    return {"message": "User registered successfully!"}

@app.post("/signin")
def signin(user: User):
    if user.username not in users or users[user.username] != user.password:
        raise HTTPException(status_code=401, detail="Invalid credentials")
    return {"message": "Login successful!"}