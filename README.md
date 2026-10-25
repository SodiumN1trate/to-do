# To-do App

A simple full-stack task management application built as a technical assignment for the **Magebit recruitment process**.

The project consists of a React/Next.js frontend and a Laravel REST API. Users can create, view, update, complete, filter, and delete tasks.

## Tech stack

**Frontend**
- Next.js 15 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4

**Backend**
- PHP / Laravel 12
- Laravel Eloquent ORM
- PostgreSQL 17 (Docker setup)
- Laravel Sail / Docker Compose

## Features

- Create tasks with a title and description
- View a list of tasks
- Mark tasks as completed or incomplete
- Filter tasks by completion status
- Delete tasks
- Display feedback messages for user actions
- Communicate with the backend through a REST API

## Project structure

```text
.
├── app/    # Next.js frontend
└── api/    # Laravel REST API
```

## Getting started

### Requirements

- Docker and Docker Compose (for the Laravel Sail setup)
- Node.js and npm (for the frontend)
- Composer (to install Laravel dependencies before starting Sail)

### 1. Start the backend

From the `api` directory:

```bash
cd api
cp .env.example .env
composer install
```

Configure the PostgreSQL connection in `api/.env`:

```dotenv
DB_CONNECTION=pgsql
DB_HOST=pgsql
DB_PORT=5432
DB_DATABASE=laravel
DB_USERNAME=sail
DB_PASSWORD=password
```

Then start the containers and initialize Laravel:

```bash
./vendor/bin/sail up -d
./vendor/bin/sail artisan key:generate
./vendor/bin/sail artisan migrate
```

By default, the API is available at `http://localhost/api` (unless you change `APP_PORT`).

### 2. Start the frontend

Open another terminal:

```bash
cd app
cp .env.example .env.local
npm install
npm run dev
```

The frontend should be available at `http://localhost:3000`.

The frontend uses `NEXT_PUBLIC_API_URL` to locate the API. The included example points to:

```dotenv
NEXT_PUBLIC_API_URL=http://localhost/api
```

If your Laravel backend runs on a different host or port, update this value accordingly.

## API endpoints

| Method | Endpoint | Description |
| --- | --- | --- |
| `GET` | `/api/tasks` | List tasks |
| `GET` | `/api/tasks?completed=true` | List completed tasks |
| `GET` | `/api/tasks?completed=false` | List incomplete tasks |
| `GET` | `/api/tasks/{id}` | Get a task |
| `POST` | `/api/tasks` | Create a task |
| `PUT/PATCH` | `/api/tasks/{id}` | Update a task |
| `DELETE` | `/api/tasks/{id}` | Delete a task |

Task requests use `title` (required, maximum 100 characters), `description` (required), and an optional boolean `completed` field.

## About this project

This application was developed as part of the Magebit recruitment process to demonstrate full-stack development with React, TypeScript, and Laravel, including frontend state management, API integration, request validation, and database operations.

It is a technical assignment rather than a production-ready application.

