from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from firebase_admin import firestore
import firebase_admin
from firebase_admin import credentials
import os

app = FastAPI()

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Firebase init
if not firebase_admin._apps:
    cred_path = os.path.join(os.path.dirname(__file__), "firebase-key.json")
    if os.path.exists(cred_path):
        cred = credentials.Certificate(cred_path)
        firebase_admin.initialize_app(cred)
        print("✅ Firebase initialized successfully.")
    else:
        print("⚠️ Firebase key not found! Place firebase-key.json in backend folder.")

db = firestore.client()

@app.post("/api/place_bet")
async def place_bet(request: Request):
    try:
        data = await request.json()
        print("📩 Incoming bet:", data)

        team = data.get("team")
        amount = data.get("amount")
        comment = data.get("comment")

        if not team or not amount:
            return {"success": False, "error": "Missing fields"}

        db.collection("bets").add({
            "team": team,
            "amount": amount,
            "comment": comment,
        })
        print("✅ Bet saved in Firestore.")

        return {"success": True, "message": "Bet placed successfully."}
    except Exception as e:
        print("🔥 Error in /api/place_bet:", e)
        return {"success": False, "error": str(e)}
