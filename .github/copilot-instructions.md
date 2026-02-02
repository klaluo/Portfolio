# Copilot Instructions for this repository

Quick context

- This is a small Next.js (App Router) portfolio site. Key folders: `app/`, `components/`, `data/`, `public/images/`, and `styles/`.
- `app/layout.jsx` mounts `Navbar` and `Footer` globally; routes are file-based under `app/`.

How the app is structured (big picture)

- App Router: pages live in `app/` (e.g. `app/projects/page.jsx` renders project list).
- Global layout: see `app/layout.jsx` which imports `../styles/globals.css` and renders `Navbar`/`Footer`.
- UI components: reusable pieces are in `components/` (e.g. `components/ProjectCard.jsx`, `components/Navbar.jsx`).
- Local data: `data/projects.js` is imported directly by pages (no backend/API currently).
- Static assets: `public/images/projects/*` — reference with `/images/projects/...` in markup.

Important patterns & gotchas (discoverable in code)

- Client components: files that use browser hooks include a top-line `"use client"` (example: `components/Navbar.jsx`).
- Data shape mismatch: `data/projects.js` objects include a `tools` array, while `components/ProjectCard.jsx` attempts to read `project.tags`. Be careful when editing or adding projects — keep property names consistent.
- Empty TypeScript file: `app/page.tsx` exists but is empty. The project uses mostly `.jsx` files; treat TypeScript cautiously and prefer mirroring existing patterns.
- Styling: global CSS lives in `styles/globals.css` (imported from `app/layout.jsx`). There is also an `app/globals.css` file in the tree — confirm which stylesheet you intend to edit.

> How data flows for the Projects page (example)

- `app/projects/page.jsx` imports `data/projects.js` and maps items to `<ProjectCard project={p} />`.
- `ProjectCard` renders `project.title`, `project.description` and expects `project.tags`.

Developer workflows

- Install: `npm install` (or `yarn`/`pnpm`).
- Dev server: `npm run dev` (starts Next.js on http://localhost:3000).
- Build: `npm run build` and `npm run start` for production preview.
- Lint: `npm run lint` (uses `next lint`/ESLint).
- No test runner found in repository — add tests if needed and document their invocation.

Conventions to follow

- Keep route components under `app/` and simple; use `components/` for shared UI.
- Preserve `"use client"` for components that use React state/hooks or browser APIs.
- When adding project entries, match the shape used by UI components (use `tags` if you update `ProjectCard`, or change `ProjectCard` to use `tools`).
- Use image paths under `public/images/` and reference them as `/images/...` from components/pages.

Integration points & external deps

- No external API integrations present in the codebase; `data/projects.js` is local.
- Dependencies are minimal: `next`, `react`, `react-dom`. Dev tooling uses `eslint` and `eslint-config-next`.

Where to look for edits

- Layout and global wrappers: `app/layout.jsx` and `components/Navbar.jsx`.
- Projects data: `data/projects.js` and display logic in `app/projects/page.jsx` + `components/ProjectCard.jsx`.
- Styles: `styles/globals.css` (imported in layout).

If you need to make changes

- Confirm property names between `data/projects.js` and `ProjectCard.jsx` before changing either.
- When adding routes, follow file-based routing under `app/` (e.g. `app/<route>/page.jsx`).

Questions for the repo owner

- Do you prefer `tools` or `tags` as the canonical property name for project entries? (I noticed the inconsistency.)
- Which global CSS file should be authoritative: `styles/globals.css` or `app/globals.css`?

If anything above is outdated or you want more detail (routing edge cases, image-processing setup, TypeScript migration), tell me which area to expand.
