# React Search Filter (Next.js)

[![Deploy to GitHub Pages](https://github.com/zkm/react-search-filter/actions/workflows/deploy.yml/badge.svg)](https://github.com/zkm/react-search-filter/actions/workflows/deploy.yml)
[![live demo](https://img.shields.io/website?url=https%3A%2F%2Fzkm.github.io%2Freact-search-filter%2F&label=live%20demo)](https://zkm.github.io/react-search-filter/)
[![License: MIT](https://img.shields.io/badge/license-MIT-blue)](LICENSE)

![Next.js 16](https://img.shields.io/badge/Next.js-16-000000?logo=nextdotjs&logoColor=white)
![React 19](https://img.shields.io/badge/React-19-149ECA?logo=react&logoColor=white)
![Tailwind CSS 4](https://img.shields.io/badge/Tailwind%20CSS-4-06B6D4?logo=tailwindcss&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-C21325?logo=jest&logoColor=white)
![Yarn 4](https://img.shields.io/badge/Yarn-4-2C8EBB?logo=yarn&logoColor=white)
![Node.js 24](https://img.shields.io/badge/Node.js-24-5FA04E?logo=nodedotjs&logoColor=white)

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
