import os
import django
from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

# Настраиваем Django окружение
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "bets_backend.settings")
django.setup()

# Создаём FastAPI-приложение
app = FastAPI(title="Bets API (FastAPI)")

# Разрешаем фронтенду обращаться (например, localhost:3000)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# Пример модели запроса
class JoinRequest(BaseModel):
    username: str
    match_id: int


# Пример ручки
@app.post("/api/join/")
def join_match(data: JoinRequest):
    # Можно тут вызвать Django ORM, Firestore и т.д.
    print(f"✅ {data.username} joined match {data.match_id}")
    return {"status": "success", "user": data.username, "match_id": data.match_id}


# Пример проверки
@app.get("/api/ping/")
def ping():
    return {"message": "FastAPI connected with Django!"}
