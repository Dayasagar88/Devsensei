# DevSensei Backend 🚀

DevSensei is an AI-powered developer platform built using the MERN stack.
This backend handles authentication, database management, and AI-powered features
such as code review and interview simulation.

---

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT Authentication
- Google Gemini AI
- dotenv

---

## 📁 Project Structure

backend/
├── src/
│ ├── ai/ # AI providers and prompts
│ ├── controllers/ # Route controllers
│ ├── models/ # Mongoose schemas
│ ├── routes/ # API routes
│ ├── middlewares/ # Auth middleware
│ ├── utils/ # DB and helper utilities
│ ├── app.js # Express app
│ └── server.js # Server entry point
│
├── .env # Environment variables
├── package.json
└── README.md


---

## 🔐 Authentication

- JWT based authentication
- Secure password hashing using bcrypt
- Protected routes using middleware

### Auth Routes
POST /api/auth/signup
POST /api/auth/login
GET /api/auth/protected

---

## 🤖 AI Features

### AI Code Reviewer
- Accepts source code as input
- Uses Google Gemini AI for analysis
- Returns structured feedback:
  - Summary
  - Issues
  - Improvements
  - Best practices
  - Improved code version

### Endpoint

POST /api/ai/review
---

## 🧠 AI Architecture

The AI layer is designed to be provider-agnostic.
Gemini is currently used, but the architecture supports
easy switching to other AI providers like OpenAI.

---

## 🗄 Database

- MongoDB Atlas
- Mongoose ODM
- Centralized database connection
- Single connection enforced at server startup

---

## ▶️ How to Run Backend

### 1. Install dependencies

npm install

### 2. Setup environment variables
Create a `.env` file in the backend folder:

PORT=5000
MONGO_URI=your_mongodb_uri
JWT_SECRET=your_jwt_secret
GEMINI_API_KEY=your_gemini_key
AI_PROVIDER=gemini


### 3. Start server


Server will run on:

http://localhost:5000

Health check:
GET /health


---

## 📌 Current Status

- Authentication implemented
- MongoDB connected
- AI Code Reviewer working
- Clean and scalable architecture

---

## 📈 Upcoming Features

- AI Interview Simulator
- Frontend integration (React)
- AI response history
- Performance analytics

---

## 👨‍💻 Author

Built by Sagar  
DevSensei – AI Powered Developer Platform

