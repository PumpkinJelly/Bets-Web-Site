import os
import django
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from firebase_admin import credentials, firestore
import firebase_admin
from django.core.asgi import get_asgi_application

# Указываем настройки Django
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "bets_backend.settings")
django.setup()

# Инициализация Firebase
cred_path = os.path.join(os.path.dirname(__file__), "..", "firebase-key.json")
if not firebase_admin._apps:
    if os.path.exists(cred_path):
        cred = credentials.Certificate(cred_path)
        firebase_admin.initialize_app(cred)
        print("✅ Firebase initialized successfully.")
    else:
        print("⚠️ Firebase key not found!")
db = firestore.client()

# --- Создаем FastAPI ---
app = FastAPI(title="Django + FastAPI Unified Server")

# --- Разрешаем доступ фронтенду (Next.js) ---
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# --- Роуты FastAPI ---
@app.get("/api/ping/")
def ping():
    return {"message": "✅ Django + FastAPI running together!"}


@app.post("/api/join/")
def join_user(user: dict):
    db.collection("participants").add(user)
    return {"status": "success", "user": user}


@app.get("/api/participants/")
def get_participants():
    docs = db.collection("participants").stream()
    return [doc.to_dict() for doc in docs]


# --- Django ASGI (монтируем напрямую) ---
django_app = get_asgi_application()
app.mount("/django", django_app)
