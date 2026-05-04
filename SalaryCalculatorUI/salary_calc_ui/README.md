# Salary Calculator UI

A small React + TypeScript UI built with Vite that provides a front-end for the Salary Calculator project. It includes the core UI components, styles, and build setup to run the app locally or produce a production build.

## Features

- Interactive salary input form
- Displays breakdowns (net pay, tax deductions, benefits)
- Responsive layout for desktop and mobile
- Built with React, TypeScript, and Vite for fast development

## UI Screenshot
<img width="881" height="1064" alt="image" src="https://github.com/user-attachments/assets/659ae156-0251-4a42-b13c-e9abd74ea6c1" />



## Tech Stack

- React 18
- TypeScript
- Vite
- CSS (plain or framework if added)

## Prerequisites

- Node.js v16+ and npm or yarn

## Getting Started

1. Install dependencies

```bash
npm install
# or
pnpm install
```

2. Run the development server

```bash
npm run dev
# or
pnpm dev
```

Open http://localhost:5173 (or the URL shown in the terminal).

## Build

Create a production build:

```bash
npm run build
# or
pnpm build
```

## Project Structure

- `src/` — application source
  - `App.tsx` — root component
  - `main.tsx` — client entry
  - `components/` — reusable UI components (add as needed)
  - `assets/` — images and static assets

## Environment & API

If this UI connects to a backend Salary Calculator API, add any required environment variables to a `.env` file at the project root. Example:

```
VITE_API_BASE_URL=https://api.example.com
```

Access `import.meta.env.VITE_API_BASE_URL` from the client code.



