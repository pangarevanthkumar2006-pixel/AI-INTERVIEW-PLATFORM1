# AI Interview Preparation Platform

Full stack React, Node.js, Express, MongoDB, and AI interview preparation platform.

## Features

- User registration and login with JWT
- Timed aptitude tests with scoring
- DSA coding questions with solutions
- AI-generated interview questions through OpenAI or Gemini
- Resume analyzer using AI
- Performance dashboard with charts

## Folder Structure

~~~text
AI-INTERVIEW-PLATFORM/
  client/                 React frontend
  server/                 Express backend
~~~

## Run Locally

1. Run npm run install:all
2. Copy server/.env.example to server/.env and client/.env.example to client/.env
3. Update MongoDB and AI keys in server/.env
4. Run npm run dev

Frontend: http://localhost:5173
Backend: http://localhost:5000

The AI endpoints return demo data if no API key is configured.
