# Liam Pham Portfolio

This is a personal portfolio website built with Next.js.

Live site: [https://liamvietpham.github.io](https://liamvietpham.github.io)

## Features

- Responsive portfolio layout
- Smooth scroll navigation
- Skills tabs with simple animation
- Project carousel
- Contact form with validation
- Resume view/download
- SEO metadata, sitemap, robots.txt, and structured data
- Accessibility improvements (landmarks, labels, heading order, contrast fixes)

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS v4
- Embla Carousel
- React Icons

## Project Structure

```text
src/
  app/          # App Router pages, layout, global styles, SEO routes
  sections/     # Page sections (Hero, Navbar, Projects, etc.)
  components/   # Reusable UI components
  utils/        # Static data and helpers
public/         # Images, favicon, resume PDF
.github/workflows/deploy-pages.yml  # GitHub Pages CI/CD
```

## Local Development

### Requirements

- Node.js 20.9+ (recommended: latest Node 20 LTS)
- Yarn

### Run

```bash
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

```bash
yarn dev    # Run local dev server
yarn build  # Create production build (static export)
yarn start  # Start production server
yarn lint   # Run ESLint
```

## Deployment (GitHub Pages)

This project is configured for static export:

- `output: "export"` in `next.config.ts`
- GitHub Actions workflow builds and deploys from `out/`

Workflow file:

- `.github/workflows/deploy-pages.yml`

### Base Path Behavior

The workflow sets `BASE_PATH` automatically:

- If repository is `username.github.io`: base path is empty
- If repository is `project-name`: base path is `/project-name`

## Notes

- `next/image` runs in unoptimized mode because GitHub Pages has no Next image server.
- Static content is managed in `src/utils/data.ts`.
