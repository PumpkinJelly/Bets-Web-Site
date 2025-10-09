# 🎯 Bets Web Site — Backend (FastAPI + Django + Firebase)

This is the **backend** part of the Bets Web Site project built for the *Web Technologies* course at **IITU** 🇰🇿.  
It combines **FastAPI**, **Django**, and **Firebase** to create a modern, flexible API for your frontend (Next.js).

---

## ⚙️ Project Overview

The backend provides REST API endpoints for the frontend.  
It uses **Firebase Firestore** to store event and user data and can be extended with Django’s ORM for complex logic.

---

## 🧩 Installation Guide

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/PumpkinJelly/Bets-Web-Site.git
cd Bets-Web-Site/backend
```
2️⃣ Create and Activate Virtual Environment
```bash
python -m venv .venv
.venv\Scripts\activate
(If PowerShell blocks activation, run once:)
```
```bash
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```
3️⃣ Install Dependencies
Make sure your requirements.txt contains:

```nginx
fastapi
uvicorn
django
firebase-admin
python-dotenv
```
Then install:

```bash
pip install -r requirements.txt
```
🔑 
Firebase Setup

Go to Firebase Console

Create a project (e.g., bets-backend)

Go to Project Settings → Service Accounts → Generate new private key

Download the JSON file and place it in:

```bash
backend/firebase-key.json
```
🚀 Run the Backend Server
Start the development server with:

```bash
uvicorn bets_backend.asgi:app --reload --port 8000
```
Then open your browser:

```arduino
http://127.0.0.1:8000/home
```

```json
{"message": "Hello from Django backend!"}
```
🔗 Frontend Integration (Next.js)

When your frontend (React/Next.js) wants to send or receive data, use simple fetch calls:

📤 Example: Send Data (POST)
```js
await fetch("http://localhost:8000/api/join/", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({
    name: "Timur",
    email: "timur@example.com",
  }),
});
```
📥 Example: Get Data (GET)
```js
const res = await fetch("http://localhost:8000/api/events/");
const data = await res.json();
console.log(data);
```
💡 If running on another device, replace localhost with your PC IP (e.g., http://192.168.0.103:8000).

📚 Available API Endpoints

Endpoint	Method	Description

/home	GET	Test endpoint

/api/join/	POST	Submit participation form

/api/events/	GET	Retrieve events

/api/firebase-test/	GET	Firebase Firestore test

💾 Git Commands
To push backend changes to GitHub:

```bash
cd backend
git add .
git commit -m "Add backend with FastAPI and Firebase"
git push origin dev-branch
🧰 Useful Commands
Action	Command
Run server	uvicorn bets_backend.asgi:app --reload --port 8000
Stop server	CTRL + C
Deactivate environment	deactivate
```
🧠 Notes
⚠️ If you see “Firebase key not found!”, ensure firebase-key.json is inside the backend folder.

The backend still runs without Firebase (you’ll just see warnings).

FastAPI serves your REST endpoints, Django is used for admin panel or additional logic.

👨‍💻 Author
Timur Baigashev
Software Engineering Student @ IITU
Course: Web Technologies
Project: Bets Web Site

