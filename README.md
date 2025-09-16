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
- Yarn 1.x

## Getting Started (Development)

1. Install dependencies:
   - yarn install
2. Start the dev server:
   - yarn dev
3. Open http://localhost:3000

You can start editing the UI in `src/app/page.js`. Tailwind styles live in `src/app/globals.css`.

## Scripts

- yarn dev: Start Next.js in development
- yarn build: Create a production build
- yarn start: Serve the production build
- yarn test: Run unit/integration tests (Jest + RTL)
- yarn lint: Lint the codebase with ESLint

## VS Code Tasks

This repo includes a task to run the dev server. In VS Code:
- Terminal → Run Task… → Start Dev Server (yarn)

## Testing

- Uses Jest (jsdom) and React Testing Library
- Tests are in the `__tests__` directory
- Run with: yarn test

## Linting

- ESLint is configured via `eslint-config-next`
- Run with: yarn lint

## Styling (Tailwind CSS)

- Tailwind v4 with PostCSS configured via `@tailwindcss/postcss`
- Config files: `tailwind.config.js`, `postcss.config.mjs`

## Troubleshooting

- Builds require Next.js to use SWC (no project-level `.babelrc`). Babel is scoped to Jest via the `transform` setting in `jest.config.js`.
- If you see PostCSS/Tailwind plugin errors, ensure `@tailwindcss/postcss` is listed in `postcss.config.mjs` and Tailwind is v4.

## Deploy

Build and serve locally:
- yarn build
- yarn start

Static routes are pre-rendered during `next build`.

## GitHub Pages

This repo is configured to deploy to GitHub Pages at:
- https://zkm.github.io/react-search-filter/

How it works:
- next.config.mjs uses `output: 'export'`, and sets `basePath` and `assetPrefix` to `/react-search-filter` in production.
- A GitHub Actions workflow (`.github/workflows/deploy.yml`) builds and uploads the `out/` directory to Pages.

Manual trigger or on push to `main`:
- Push to `main`, or run the workflow from the Actions tab.

Notes:
- Don’t add a project-level `.babelrc` (Next needs SWC). Babel is scoped to Jest transforms only.
- If assets don’t load on Pages, confirm basePath/assetPrefix match the repo name.
