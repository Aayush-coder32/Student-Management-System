# EduTrack Student Management System

A production-oriented MERN student management system with an Express/MongoDB API and a responsive React/Vite admin dashboard.

## Features

- Secure administrator login with bcrypt password hashing, JWT in an HTTP-only cookie, role checks, and login rate limiting.
- Student directory with server-side search, pagination, status, course, and CRUD operations.
- Daily attendance recording backed by MongoDB.
- Examination result entry, score validation, and result listing.
- Dashboard statistics and charts sourced from API data.
- Responsive layout for desktop and mobile screens.

## Prerequisites

- Node.js 18 or newer
- A MongoDB Atlas connection string

## Local setup on Windows

1. Copy `backend\.env.example` to `backend\.env` and set `MONGODB_URI`, `JWT_SECRET`, and `CLIENT_ORIGIN`.
2. Copy `frontend\.env.example` to `frontend\.env` if the API is not running on `http://localhost:5000/api`.
3. Install and start the API:

   ```powershell
   cd backend
   npm install
   npm run seed:admin
   npm run dev
   ```

4. In another terminal, install and start the frontend:

   ```powershell
   cd frontend
   npm install
   npm run dev
   ```

5. Open the Vite URL shown in the terminal and sign in with the administrator created by the seed script.

The API exposes `GET /api/health` for a basic health check. Administrator creation is intentionally a local command rather than a public endpoint.
