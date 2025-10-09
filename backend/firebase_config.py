import os
import json
import firebase_admin
from firebase_admin import credentials, firestore, auth

cred_path = os.getenv("GOOGLE_APPLICATION_CREDENTIALS", "firebase-key.json")

# инициализируем (если ещё не инициализировано)
try:
    firebase_admin.get_app()
except ValueError:
    firebase_admin.initialize_app(cred)

db = firestore.client()
firebase_auth = auth