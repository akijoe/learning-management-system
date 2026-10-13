# Learning Management System

A web-based learning management system for students and teachers. Course
registration, course materials, exam sign-up, grading and study progress live
in one place, with an AI assistant that summarizes course materials and turns
them into flashcards.

## Features

- Course and course-group registration and withdrawal
- Course materials: browse, upload and manage files per course instance
- Exam sign-up, results and grading
- Study progress and a curriculum roadmap
- AI course summaries and flashcard generation (Google Gemini)
- Role-based views for students, teachers and admins

## Tech stack

- **Client:** React, React Router 7, TypeScript, Tailwind CSS, shadcn/ui
- **Backend:** PocketBase (auth, database, file storage)
- **Tests:** Playwright

## Structure

| Folder | Contents |
|---|---|
| `canvas_client_react_router/` | React Router client app |
| `canvas_server_pocketbase/` | PocketBase migrations (collections: courses, course instances, exams, exam results, users) |

## Running locally

1. Download [PocketBase](https://pocketbase.io/docs/) into `canvas_server_pocketbase/` and start it — the migrations run automatically:
   ```bash
   cd canvas_server_pocketbase
   ./pocketbase serve        # http://127.0.0.1:8090
   ```
   Create a superuser in the admin UI, then add users there (only admins can create accounts).
2. Start the client:
   ```bash
   cd canvas_client_react_router
   npm install
   GEMINI_API_KEY=<your key> npm run dev   # http://localhost:5173
   ```
   The AI features need a Gemini API key; everything else works without it.

A Docker image for the client can be built from `canvas_client_react_router/Dockerfile`.
