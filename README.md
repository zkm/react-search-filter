# React Search Filter (Next.js)

A simple search-and-filter app built with Next.js (App Router) and Tailwind CSS. You can add items to a list and filter them live by typing in the search box. The app includes linting and tests with Jest and React Testing Library.

## Tech Stack

- Next.js 15 (App Router)
- React 19
- Tailwind CSS v4
- ESLint (with `eslint-config-next`)
- Jest + React Testing Library

## Requirements

- Node.js 18.18+ or 20+

## Getting Started (Development)

1. Install dependencies:
   - npm install
2. Start the dev server:
   - npm run dev
3. Open http://localhost:3000

You can start editing the UI in `src/app/page.js`. Tailwind styles live in `src/app/globals.css`.

## Scripts

- npm run dev: Start Next.js in development
- npm run build: Create a production build
- npm run start: Serve the production build
- npm run test: Run unit/integration tests (Jest + RTL)
- npm run lint: Lint the codebase with ESLint

## VS Code Tasks

This repo includes a task to run the dev server. In VS Code:

- Terminal → Run Task… → Start Dev Server

## Testing

- Uses Jest (jsdom) and React Testing Library
- Tests are in the `__tests__` directory
- Run with: npm run test

## Linting

- ESLint is configured via `eslint-config-next`
- Run with: npm run lint

## Deploy

Build and serve locally:

- npm run build
- npm run start

Static routes are pre-rendered during `next build`.

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.
