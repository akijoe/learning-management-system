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
| `canvas_server_pocketbase/` | PocketBase migrations (collections: courses, course instances, exams, exam results, users), API routes (`pb_hooks/`), demo data and its course materials (`pb_seed/`) |

## Running locally

1. Download [PocketBase](https://pocketbase.io/docs/) into `canvas_server_pocketbase/` and start it **from that folder** — the migrations, including the demo data, run automatically, and the routes in `pb_hooks/` are picked up:
   ```bash
   cd canvas_server_pocketbase
   GEMINI_API_KEY=your-key ./pocketbase serve        # http://127.0.0.1:8090
   ```
   Log in to the admin UI (http://127.0.0.1:8090/_/) with the demo superuser below. New accounts can only be created there.
2. Start the client:
   ```bash
   cd canvas_client_react_router
   npm install
   npm run dev              # http://localhost:5173
   ```

### AI features (Google Gemini)

The course summary and flashcard buttons call a PocketBase route (`pb_hooks/ai.pb.js`), which sends the course files to the Gemini API. The API key stays on the server, the browser never sees it.

1. Create a free API key at https://aistudio.google.com/apikey.
2. Pass it to PocketBase in the `GEMINI_API_KEY` environment variable, as above. Optionally set `GEMINI_MODEL` (default: `gemini-flash-latest`).

Everything else works without a key.

### Access control

Collection API rules (`pb_migrations/1746100002_access_rules.js`) require a login for everything:

| Collection | Read | Write through the records API |
|---|---|---|
| `users` | yourself and teachers; teachers read everyone | superusers only |
| `courses` | logged in users | superusers only |
| `course_instance` | list: logged in users; details and files: its teacher and students | its teacher: description and files |
| `exams` | logged in users | superusers only |
| `exam_results` | the student and the judge of the result | superusers only |

Joining a course group, signing up for an exam and grading can't be expressed as rules, so they go through routes in `pb_hooks/`, which do their own checks. Course files are protected: opening one needs a short-lived file token.

### Demo data

The demo users, grades and exams are fictional; the course materials in `pb_seed/` are ELTE IK lecture notes (each file names its authors). Exam dates are set relative to the first start, so there are always upcoming exams.

| Role | Email | Password |
|---|---|---|
| Superuser (admin UI) | `admin@example.com` | `admin12345` |
| Teacher | `teacher@example.com`, `teacher2@example.com` | `asdf1234` |
| Student | `test@example.com`, `test2@example.com`, `test3@example.com` | `asdf1234` |

To start over with fresh demo data, stop PocketBase and delete `canvas_server_pocketbase/pb_data/`.

A Docker image for the client can be built from `canvas_client_react_router/Dockerfile`.
