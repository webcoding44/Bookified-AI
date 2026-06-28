````markdown
# 📚 Bookified – AI Voice Book Companion

<div align="center">

![Bookified Banner](/public/assets/images/banner.png)

![Next.js](https://img.shields.io/badge/Next.js-FullStack-black?style=for-the-badge&logo=next.js)
![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb)
![Vapi AI](https://img.shields.io/badge/Vapi-Voice_AI-blue?style=for-the-badge)
![ElevenLabs](https://img.shields.io/badge/ElevenLabs-Voice_Synthesis-8B5CF6?style=for-the-badge)
![Clerk](https://img.shields.io/badge/Clerk-Authentication-orange?style=for-the-badge)
![Shadcn UI](https://img.shields.io/badge/Shadcn-UI-black?style=for-the-badge)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38BDF8?style=for-the-badge&logo=tailwind-css)

### 🎙️ Talk with Your Books Using AI Voice Conversations

An AI-powered platform that transforms PDFs into interactive companions, enabling natural voice conversations, intelligent summaries, and personalized reading experiences.

</div>

---

# 📖 Overview

**Bookified** is a modern **AI-powered SaaS platform** that redefines the reading experience through conversational AI.

Instead of passively reading documents, users can upload PDF books and engage in **real-time voice conversations** powered by **Vapi** and **ElevenLabs**. The platform intelligently processes each document using vector embeddings and Retrieval-Augmented Generation (RAG), allowing users to ask questions, request summaries, and explore complex topics naturally.

Built with **Next.js 16**, **MongoDB**, **Clerk**, **Tailwind CSS**, and **shadcn/ui**, Bookified delivers a fast, scalable, and production-ready reading experience.

---

# ✨ Key Features

## 📄 AI-Powered PDF Processing

Upload books and let AI prepare them for intelligent conversations.

- PDF upload & storage
- Automatic text extraction
- Smart document chunking
- High-dimensional vector embeddings
- Semantic context retrieval (RAG)

---

## 🎙️ Real-Time Voice Conversations

Interact naturally with your books.

- Real-time AI voice conversations
- Ask questions verbally
- Discuss chapters and concepts
- Low-latency voice interaction
- Powered by **Vapi AI**

---

## 🗣️ AI Voice Personas

Choose the perfect AI companion for your reading sessions.

- Multiple AI personalities
- High-quality voice synthesis
- Instant voice previews
- Human-like conversations
- Powered by **ElevenLabs**

---

## 🧠 Smart Summaries & Insights

Understand books faster.

- Chapter summaries
- Topic explanations
- Deep-dive insights
- Key takeaways
- Context-aware responses

---

## 📝 Session Transcripts

Keep every conversation.

- Automatic transcript generation
- Search previous conversations
- Save important insights
- Review learning history

---

## 📚 Library Management

Organize your growing AI library.

- Personal book collection
- Browse global library
- Powerful search interface
- Fast document discovery

---

## 🔐 Authentication & Subscription

Secure and scalable user management.

- Clerk Authentication
- Email & Social Login
- Protected Routes
- Subscription Plans
- Premium Features

---

## 📱 Modern Responsive UI

Beautiful experience across every device.

- Mobile-first design
- Tailwind CSS
- shadcn/ui components
- Smooth animations
- Accessible interface

---

# 🛠️ Tech Stack

## ⚛️ Frontend

- Next.js 16
- React
- TypeScript
- Tailwind CSS
- shadcn/ui

## 🗄️ Backend & Database

- MongoDB
- Mongoose
- Next.js Server Actions

## 🤖 AI & Voice

- OpenAI
- Vapi AI
- ElevenLabs
- Vector Embeddings
- Retrieval-Augmented Generation (RAG)

## 🔐 Authentication

- Clerk

---

# 🚀 Getting Started

## 1️⃣ Clone repository

```bash
git clone https://github.com/your-username/bookified.git
cd bookified
```

---

## 2️⃣ Install dependencies

```bash
npm install
```

---

## 3️⃣ Setup environment variables

```env
# Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

# MongoDB
MONGODB_URI=

# OpenAI
OPENAI_API_KEY=

# Vapi
VAPI_API_KEY=

# ElevenLabs
ELEVENLABS_API_KEY=
```

---

## 4️⃣ Run development server

```bash
npm run dev
```

---

# 🏗️ System Architecture

```text
                User
                  │
                  ▼
      Next.js 16 Frontend (App Router)
                  │
                  ▼
      Server Actions / API Routes
                  │
      ┌───────────┴───────────┐
      ▼                       ▼
 MongoDB                 Clerk Auth
      │
      ▼
PDF Processing Pipeline
      │
      ▼
Text Extraction
      │
      ▼
Chunking & Embeddings
      │
      ▼
Retrieval-Augmented Generation (RAG)
      │
      ▼
 OpenAI + Vapi + ElevenLabs
      │
      ▼
Real-Time Voice Conversation
```

---

# 🌟 Highlights

✔ AI Voice Conversations with Books  
✔ Intelligent PDF Processing  
✔ Retrieval-Augmented Generation (RAG)  
✔ High-Quality AI Voice Personas  
✔ Live Conversation Transcripts  
✔ Semantic Book Search  
✔ Clerk Authentication  
✔ Subscription-Ready Architecture  
✔ Modern UI with Tailwind & shadcn/ui  
✔ Production-Ready Next.js 16 Application

---

# 💡 What This Project Demonstrates

This project showcases skills in:

- Full-stack SaaS Development
- Conversational AI Systems
- Voice AI Integration
- Retrieval-Augmented Generation (RAG)
- PDF Processing Pipelines
- Vector Embedding Search
- Modern Authentication
- MongoDB Data Modeling
- Responsive UI Development
- Production-Ready Next.js Architecture

---

# 🚀 Future Improvements

- EPUB & DOCX support
- AI-generated flashcards
- Reading progress tracking
- AI reading recommendations
- Multi-language conversations
- Collaborative reading sessions
- Mobile application
- Offline AI synchronization

---

# ❤️ Final Note

**Bookified** transforms static books into intelligent AI companions by combining **voice conversations**, **semantic search**, and **modern AI technologies** into a seamless reading experience.

---

<div align="center">

## 📚 The Future of Reading is Conversational

Built with **Next.js 16 • MongoDB • OpenAI • Vapi • ElevenLabs • Clerk** 🚀

</div>
````
