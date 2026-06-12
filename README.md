# 📚 Bookified AI

<div align="center">

![Bookified AI](/bgf.png)

![Next.js](https://img.shields.io/badge/Next.js-FullStack-black?style=for-the-badge&logo=next.js)
![Vapi](https://img.shields.io/badge/Vapi-Voice_AI-blue?style=for-the-badge)
![ElevenLabs](https://img.shields.io/badge/ElevenLabs-AI_Voices-purple?style=for-the-badge)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-green?style=for-the-badge)
![Clerk](https://img.shields.io/badge/Clerk-Authentication-orange?style=for-the-badge)
![Shadcn UI](https://img.shields.io/badge/Shadcn-UI_Framework-black?style=for-the-badge)

### 🎙️ AI-Powered Voice Conversations With Your Books

Transform static PDFs into intelligent AI companions and have real-time voice conversations with your personal library.

</div>

---

# 📖 Overview

Bookified AI is a modern voice-first learning platform that transforms traditional books into interactive AI companions.

Instead of passively reading content, users can upload PDF books and engage in natural voice conversations, ask questions, request summaries, and explore concepts through intelligent AI-generated responses.

Built with:

- Next.js 16
- Vapi Voice AI
- ElevenLabs
- MongoDB
- Clerk Authentication
- Shadcn UI
- Tailwind CSS

Bookified creates a unique reading experience where every book becomes a conversational partner.

---

# ✨ Core Features

## 📄 Smart PDF Processing

Upload any PDF book and instantly transform it into a searchable AI knowledge base.

### Features

- PDF upload system
- Automatic text extraction
- Intelligent document chunking
- Vector embeddings generation
- Context-aware retrieval

This allows the AI to understand the content of each book and provide accurate responses.

---

## 🎙️ Real-Time Voice Conversations

The heart of the platform.

Users can talk directly with their books through natural voice interactions.

### Capabilities

- Real-time voice communication
- Natural language understanding
- Instant spoken responses
- Conversational learning experience
- Low-latency interactions via Vapi

Making learning feel like a real discussion instead of reading static text.

---

## 🧠 AI Voice Personas

Every conversation can have its own personality.

### Features

- Multiple AI voice companions
- Distinct speaking styles
- High-quality voice synthesis
- Instant voice previews
- Powered by ElevenLabs

Choose the perfect AI mentor for your reading journey.

---

## 📚 Interactive Knowledge Retrieval

Books become intelligent knowledge systems.

### Features

- Ask questions about any chapter
- Explore complex concepts
- Context-aware responses
- Deep content understanding
- Semantic search capabilities

No more endless scrolling through pages.

---

## 📖 AI Summaries & Insights

Extract the most valuable information instantly.

### Features

- Chapter summaries
- Topic breakdowns
- Concept explanations
- Learning insights
- Quick content digestion

Perfect for revision and accelerated learning.

---

## 📝 Live Conversation Transcripts

Never lose an important insight.

### Features

- Automatic transcript generation
- Full conversation history
- Searchable discussions
- Persistent records
- Learning review system

---

## 📚 Personal Library Management

Manage your growing collection of books efficiently.

### Features

- Personal book library
- Search and filtering
- Collection organization
- Fast content access
- Scalable storage structure

---

## 🔐 Authentication & User Accounts

Secure access powered by Clerk.

### Features

- Email authentication
- Social login support
- Protected routes
- Session management
- User profile handling

---

# ⚡ AI Architecture

The platform combines Retrieval-Augmented Generation (RAG) with voice AI technologies.

### Workflow

1. User uploads a PDF
2. Content is extracted and processed
3. Embeddings are generated
4. Knowledge is stored in MongoDB
5. User starts a voice conversation
6. Relevant context is retrieved
7. AI generates an answer
8. ElevenLabs synthesizes speech
9. Response is streamed back to the user

---

# 🛠️ Tech Stack

## ⚛️ Frontend

- Next.js 16
- React
- TypeScript
- Tailwind CSS
- Shadcn UI

---

## 🎙️ Voice AI

- Vapi
- ElevenLabs

---

## 🗄️ Database

- MongoDB

---

## 🔐 Authentication

- Clerk

---

## 🧠 AI Layer

- Retrieval-Augmented Generation (RAG)
- Semantic Search
- Context Retrieval
- Voice Synthesis

---

# 🚀 Getting Started

## 1️⃣ Clone the project

```bash
git clone https://github.com/yourusername/bookified-ai.git
cd bookified-ai
```

## 2️⃣ Install dependencies

```bash
npm install
```

## 3️⃣ Configure environment variables

```env
NODE_ENV='development'
NEXT_PUBLIC_BASE_URL=localhost:3000

# CLERK
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/
NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/


# VERCEL BLOB
BLOB_STORE_ID=
BLOB_READ_WRITE_TOKEN=

# MONGODB
MONGODB_URI=

# VAPI
NEXT_PUBLIC_VAPI_API_KEY=
VAPI_SERVER_SECRET=

# Google Gemini API for embeddings
GOOGLE_GEMINI_API_KEY=

# ELEVENLABS
ELEVENLABS_API_KEY=
```

## 4️⃣ Run the application

```bash
npm run dev
```

---

# 🔄 System Architecture

```text
User Voice
      ↓
Vapi Voice Agent
      ↓
Next.js Backend
      ↓
Knowledge Retrieval Layer
      ↓
MongoDB + Embeddings
      ↓
AI Response Generation
      ↓
ElevenLabs Voice Synthesis
      ↓
Real-Time Audio Response
```

---

# 🌟 Key Highlights

✅ Voice-first learning experience

✅ AI-powered conversational books

✅ Real-time speech interactions

✅ Custom AI voice personas

✅ Smart PDF understanding

✅ Chapter summaries & insights

✅ Live conversation transcripts

✅ Modern scalable architecture

✅ Beautiful UI with Shadcn

✅ Production-ready authentication

---

# 💡 What This Project Demonstrates

This project showcases expertise in:

- AI Application Development
- Voice AI Integration
- RAG Architecture
- Full-Stack Next.js Development
- MongoDB Data Modeling
- Authentication Systems
- Modern UI/UX Design
- Real-Time Experiences
- AI Product Engineering

---

# 🚀 Future Improvements

- Multi-language conversations
- Mobile application
- Collaborative reading sessions
- AI-generated study notes
- Advanced knowledge graphs
- Book recommendation engine
- Learning analytics dashboard

---

# ❤️ Final Note

Bookified AI reimagines how people interact with books.

Instead of reading information passively, users can engage in meaningful conversations, ask questions naturally, and learn through intelligent voice interactions powered by AI.

---

<div align="center">

## 📚 The Future of Reading is Conversational

**Voice AI + Books + Knowledge Retrieval 🚀**

</div>