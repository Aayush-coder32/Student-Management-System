# EduTrack - Student Management System

![Status](https://img.shields.io/badge/status-active%20development-orange)
![Frontend](https://img.shields.io/badge/frontend-React%2018%20%2B%20Vite-61dafb)
![Backend](https://img.shields.io/badge/backend-Node.js%20%2B%20Express-339933)
![Database](https://img.shields.io/badge/database-MongoDB-47A248)
![License](https://img.shields.io/badge/license-not%20specified-lightgrey)

EduTrack is a full-stack student administration platform for managing student records, attendance, examination results, fees, library circulation, support requests, and role-based institutional workflows.

The application is intended for local development, learning, demonstration, and further customization. Before using it with real student data, review the security, privacy, retention, backup, deployment, and licensing requirements that apply to your organization.

## Contents

- [Highlights](#highlights)
- [Application roles](#application-roles)
- [Technology stack](#technology-stack)
- [Architecture](#architecture)
- [Project structure](#project-structure)
- [Requirements](#requirements)
- [Getting started](#getting-started)
- [Environment configuration](#environment-configuration)
- [Administrator setup](#administrator-setup)
- [API overview](#api-overview)
- [Security and privacy](#security-and-privacy)
- [Validation and build checks](#validation-and-build-checks)
- [Contributing](#contributing)
- [Pull request checklist](#pull-request-checklist)
- [Copyright and attribution](#copyright-and-attribution)
- [License](#license)
- [Disclaimer](#disclaimer)

## Highlights

- Admin and faculty authentication with JWT-based sessions and HTTP-only cookies.
- Optional OAuth sign-in integrations for Google, Microsoft, and GitHub.
- Role-protected workflows for administrators and faculty members.
- Student search, filtering, pagination, profile editing, and ID-card views.
- Attendance recording with student-level status tracking.
- Examination result entry and bulk result import support.
- Dashboard summaries for students, attendance, and examinations.
- Fee records, payment status updates, and fee summaries.
- Library catalogue and book circulation management.
- Public admissions and support-message forms with request validation.
- Responsive React interface with reusable layouts and status feedback.
- API hardening with Helmet, credentialed CORS, Zod validation, centralized errors, and rate limiting.

## Application roles

| Role | Primary responsibilities |
| --- | --- |
| Administrator | Manage students, attendance, results, fees, library records, and dashboard data. |
| Faculty / Teacher | Access faculty workspace and perform permitted teaching-related student operations. |
| Public visitor | View the landing and admissions pages, submit an admissions inquiry, and send a support message. |

Authorization is enforced by the backend. The visible frontend routes are not a substitute for server-side access control.

## Technology stack

| Layer | Technologies |
| --- | --- |
| Frontend | React 18, Vite, React Router, Axios, React Hook Form, Zod, Lucide React |
| Backend | Node.js, Express 4, Mongoose, Zod |
| Database | MongoDB |
| Authentication | JSON Web Token, bcryptjs, HTTP-only cookies, optional OAuth |
| Security | Helmet, CORS, express-rate-limit, request validation |

## Architecture

```text
Browser
  |
  | React SPA, cookie credentials, JSON requests
  v
frontend/ (Vite development server or static production build)
  |
  | VITE_API_URL
  v
backend/ (Express REST API)
  |
  | Mongoose
  v
MongoDB (users and institutional records)
```

The frontend normally runs on `http://localhost:5173`. The backend normally runs on `http://localhost:5000` and exposes routes below `/api`.

## Project structure

```text
.
├── backend/
│   ├── config/          # Database connection
│   ├── controllers/     # Request handlers and business operations
│   ├── middleware/      # Authentication, validation, and error handling
│   ├── models/          # Mongoose models
│   ├── routes/          # Express route definitions
│   ├── scripts/         # Local administration scripts
│   ├── validators/      # Zod request schemas
│   ├── server.js        # API entry point
│   └── package.json
├── frontend/
│   ├── src/components/  # Shared UI and layouts
│   ├── src/context/     # Authentication and application context
│   ├── src/pages/       # Application screens
│   ├── src/services/    # API client
│   ├── src/App.jsx      # Route composition
│   └── package.json
└── README.md
```

## Requirements

- Node.js 18 or newer
- npm
- MongoDB 6 or newer, local or hosted (for example, MongoDB Atlas)
- Git

Check your installed versions:

```bash
node --version
npm --version
```

## Getting started

### 1. Clone the repository

```bash
git clone https://github.com/Aayush-coder32/Student-Management-System.git
cd Student-Management-System
```

### 2. Configure and start the backend

Create `backend/.env` using the variables in [Environment configuration](#environment-configuration):

```bash
cd backend
npm install
npm run dev
```

The API connects to MongoDB before listening on the configured port.

### 3. Create an administrator

Open a second terminal:

```bash
cd backend
npm run seed:admin
```

The script asks for an administrator name, email, and password. Use a unique password with at least eight characters.

### 4. Configure and start the frontend

Create `frontend/.env` when the API URL differs from the default:

```dotenv
VITE_API_URL=http://localhost:5000/api
```

Then run:

```bash
cd frontend
npm install
npm run dev
```

Open the URL printed by Vite and sign in with the administrator account.

### Useful commands

| Directory | Command | Purpose |
| --- | --- | --- |
| `backend/` | `npm run dev` | Start the API with Node watch mode |
| `backend/` | `npm start` | Start the API normally |
| `backend/` | `npm run seed:admin` | Create an administrator interactively |
| `frontend/` | `npm run dev` | Start the Vite development server |
| `frontend/` | `npm run build` | Create a production frontend build |
| `frontend/` | `npm run preview` | Preview the production build locally |

## Environment configuration

### Backend: `backend/.env`

| Variable | Required | Description |
| --- | --- | --- |
| `MONGODB_URI` | Yes | MongoDB connection URI |
| `JWT_SECRET` | Yes | Long, random secret used to sign sessions and OAuth state |
| `CLIENT_ORIGIN` | Recommended | Exact frontend origin allowed by CORS |
| `PORT` | No | API port; defaults to `5000` |
| `COOKIE_SECURE` | Production | Set to `true` when HTTPS is used |
| `JWT_EXPIRES_IN` | No | JWT lifetime; defaults to `8h` |
| `FRONTEND_URL` | OAuth | Public frontend URL used after OAuth callbacks |
| `API_PUBLIC_URL` | OAuth | Public API URL used to construct callback URLs |
| `GOOGLE_CLIENT_ID` / `GOOGLE_CLIENT_SECRET` | Optional | Google OAuth credentials |
| `MICROSOFT_CLIENT_ID` / `MICROSOFT_CLIENT_SECRET` | Optional | Microsoft OAuth credentials |
| `MICROSOFT_TENANT_ID` | Optional | Microsoft tenant; defaults to `common` |
| `GITHUB_CLIENT_ID` / `GITHUB_CLIENT_SECRET` | Optional | GitHub OAuth credentials |

Example:

```dotenv
MONGODB_URI=mongodb+srv://<user>:<password>@<cluster>/<database>
JWT_SECRET=<long-random-secret>
CLIENT_ORIGIN=http://localhost:5173
PORT=5000
COOKIE_SECURE=false
JWT_EXPIRES_IN=8h
```

For OAuth, register callback URLs in each provider using:

```text
https://<api-host>/api/auth/oauth/google/callback
https://<api-host>/api/auth/oauth/microsoft/callback
https://<api-host>/api/auth/oauth/github/callback
```

### Frontend: `frontend/.env`

| Variable | Required | Description |
| --- | --- | --- |
| `VITE_API_URL` | No | API base URL; defaults to `http://localhost:5000/api` |

Never put passwords, private keys, database credentials, or JWT secrets in frontend variables. Vite exposes `VITE_` variables to browser code.

## Administrator setup

The `seed:admin` script is the recommended first-account workflow for local development. Protect database access in shared or hosted environments. Anyone with sufficient database access may be able to create or alter application accounts.

The public registration route exists for development and product customization. Review whether it should remain enabled before exposing the API to the public internet.

## API overview

All paths below are relative to `/api`. Authentication and role checks are enforced by the backend.

| Method | Path | Purpose |
| --- | --- | --- |
| `GET` | `/health` | API process health response |
| `GET` | `/auth/oauth/providers` | List configured OAuth providers |
| `GET` | `/auth/oauth/:provider` | Start OAuth sign-in |
| `GET` | `/auth/oauth/:provider/callback` | Complete OAuth sign-in |
| `POST` | `/auth/register` | Register an account |
| `POST` | `/auth/login` | Sign in; rate limited |
| `POST` | `/auth/logout` | Clear the auth cookie |
| `GET` | `/auth/me` | Return the current authenticated user |
| `GET` / `POST` | `/students` | List or create student records |
| `GET` / `PUT` / `DELETE` | `/students/:id` | Read, update, or delete a student |
| `GET` / `POST` | `/attendance` | List or record attendance |
| `GET` / `POST` / `DELETE` | `/results` and `/results/:id` | Manage examination results |
| `POST` | `/results/import` | Import validated result data |
| `GET` | `/dashboard` | Read dashboard summary data |
| `GET` / `POST` | `/fees` | List or create fee records |
| `GET` | `/fees/summary` | Read fee summary data |
| `PATCH` | `/fees/:id/status` | Update a fee status |
| `GET` / `POST` | `/library` | List or create library books |
| `PATCH` | `/library/:id/circulation` | Check out or return a book |
| `POST` | `/support` | Submit a support message; rate limited |

For exact request fields, consult the schemas in `backend/validators/schemas.js`.

## Security and privacy

- Keep `.env` files, database URIs, tokens, credentials, and personal data out of Git.
- Use HTTPS in production and set `COOKIE_SECURE=true` when the deployment requires secure cookies.
- Set `CLIENT_ORIGIN` to an exact trusted origin; do not use a permissive wildcard with credentialed cookies.
- Use least-privilege MongoDB users and restrict database network access.
- Rotate any secret that has been exposed and invalidate affected sessions.
- Review the account registration and OAuth policies before production use.
- Establish retention, backup, deletion, audit, and access-review procedures for student records.
- Follow applicable education-data and privacy laws in the deployment jurisdiction.
- The health endpoint confirms an HTTP response; it is not a complete database readiness or dependency check.

## Validation and build checks

Run the smallest relevant check before opening a pull request:

```bash
cd frontend
npm run build
```

For backend changes, start the API with a test database and manually verify the affected endpoint, validation errors, authorization behavior, and error responses. The repository currently does not define an automated test script.

## Contributing

Contributions, improvements, bug reports, and documentation updates are welcome.

1. Fork the repository and create a focused branch from the default branch.
2. Keep changes scoped to one feature, bug, security fix, or documentation improvement.
3. Do not commit credentials, private data, generated build output, or local environment files.
4. Follow existing React, Express, validation, and error-handling patterns.
5. Update the README or related documentation when behavior, configuration, or setup changes.
6. Run the relevant build or manual verification checks.
7. Open a pull request with context, screenshots for UI changes, testing evidence, and migration notes.

### Commit guidance

Use clear, imperative commit messages, for example:

```text
feat: add attendance export
fix: validate result import rows
docs: clarify production cookie setup
```

### Reporting security issues

Do not disclose exploitable vulnerabilities in a public issue. Contact the repository maintainer privately with a description, reproduction steps, affected component, and suggested mitigation. Do not include real student data or secrets in the report.

## Pull request checklist

- [ ] The change is focused and does not include unrelated formatting churn.
- [ ] No secrets, credentials, or personal data are included.
- [ ] Backend input validation and authorization are preserved or improved.
- [ ] UI changes work for loading, empty, success, and error states.
- [ ] Relevant build or manual checks were run.
- [ ] Documentation and environment instructions are updated when needed.
- [ ] Any database, API, or migration impact is described in the PR.

## Copyright and attribution

Copyright and ownership should be confirmed by the project rights holder. The repository currently identifies the project with **Aditya Yadav** and records that **Aayush Sharma contributed to Aditya Yadav's project**. This attribution is informational and does not, by itself, determine ownership, joint copyright, assignment of rights, or permission to reuse the work.

Unless a file states otherwise, third-party packages, fonts, icons, images, and other assets remain subject to their own licenses and notices. Contributors must have the right to submit their work and must not add material that infringes another party's rights.

## License

**No open-source license is currently declared in this repository.**

Until the copyright holder adds a `LICENSE` file and selects license terms, the default copyright rules apply. You should not assume that the code may be copied, modified, redistributed, sublicensed, or used commercially merely because it is publicly visible on GitHub.

If the owner intends to permit reuse, add a license file (for example, MIT, Apache-2.0, or GPL-3.0) after confirming that the owner has authority to license all included code and assets. The README license badge and this section should then be updated to match the selected license exactly.

## Disclaimer

This project is provided for educational and development purposes. It is not a substitute for institutional security review, legal advice, accessibility testing, data-protection compliance, disaster recovery planning, or production readiness assessment. Use with real student data only after appropriate technical, organizational, and legal controls are in place.
