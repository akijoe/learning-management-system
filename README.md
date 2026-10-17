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
| `canvas_server_pocketbase/` | PocketBase migrations (collections: courses, course instances, exams, exam results, users), demo data and its course materials (`pb_seed/`) |

## Running locally

1. Download [PocketBase](https://pocketbase.io/docs/) into `canvas_server_pocketbase/` and start it **from that folder** — the migrations, including the demo data, run automatically:
   ```bash
   cd canvas_server_pocketbase
   ./pocketbase serve        # http://127.0.0.1:8090
   ```
   Log in to the admin UI (http://127.0.0.1:8090/_/) with the demo superuser below. New accounts can only be created there.
2. Start the client:
   ```bash
   cd canvas_client_react_router
   npm install
   cp .env.example .env     # then put your Gemini API key in .env
   npm run dev              # http://localhost:5173
   ```

### AI features (Google Gemini)

The course summary and flashcard buttons call the Gemini API straight from the browser.

1. Create a free API key at https://aistudio.google.com/apikey.
2. Set it in `canvas_client_react_router/.env`:
   ```
   VITE_GEMINI_API_KEY=your-key
   ```
   Optionally set `VITE_GEMINI_MODEL` (default: `gemini-flash-latest`).
3. Restart `npm run dev` — Vite reads `.env` only on start.

Everything else works without a key. Because the key is bundled into the client, use a key restricted to the Gemini API (and to your domain, if deployed), and never commit `.env`.

### Demo data

The demo users, grades and exams are fictional; the course materials in `pb_seed/` are ELTE IK lecture notes (each file names its authors). Exam dates are set relative to the first start, so there are always upcoming exams.

| Role | Email | Password |
|---|---|---|
| Superuser (admin UI) | `admin@example.com` | `admin12345` |
| Teacher | `teacher@example.com`, `teacher2@example.com` | `asdf1234` |
| Student | `test@example.com`, `test2@example.com`, `test3@example.com` | `asdf1234` |

To start over with fresh demo data, stop PocketBase and delete `canvas_server_pocketbase/pb_data/`.

A Docker image for the client can be built from `canvas_client_react_router/Dockerfile`.
