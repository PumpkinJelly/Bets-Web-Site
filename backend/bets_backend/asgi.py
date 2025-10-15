import os
import django
from django.core.asgi import get_asgi_application
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from firebase_admin import credentials, firestore, initialize_app
from fastapi.middleware.wsgi import WSGIMiddleware
from fastapi.responses import JSONResponse
import firebase_admin

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "bets_backend.settings")
django.setup()

# Django ASGI
django_app = get_asgi_application()

# FastAPI app
fastapi_app = FastAPI(title="Bets API")

# CORS middleware
fastapi_app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Firebase init
if not firebase_admin._apps:
    cred_path = os.path.join(os.path.dirname(__file__), "..", "firebase-key.json")
    if os.path.exists(cred_path):
        cred = credentials.Certificate(cred_path)
        initialize_app(cred)
        print("✅ Firebase initialized successfully.")
    else:
        print("⚠️ Firebase key not found! Place firebase-key.json in the backend folder.")

db = firestore.client()

@fastapi_app.post("/api/place_bet")
async def place_bet(data: dict):
    try:
        print("📩 Incoming bet:", data)
        db.collection("bets").add(data)
        return JSONResponse({"success": True, "message": "Bet placed successfully"})
    except Exception as e:
        print("🔥 Error:", e)
        return JSONResponse({"success": False, "error": str(e)})

# Combine FastAPI + Django
from starlette.middleware.wsgi import WSGIMiddleware
fastapi_app.mount("/", WSGIMiddleware(django_app))

app = fastapi_app
