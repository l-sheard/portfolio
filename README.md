# Portfolio Website

Personal portfolio built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
content/
  blog/*.mdx        # blog posts
  projects/*.mdx     # project write-ups
src/
  app/               # routes (pages)
  components/
    layout/          # Header, Footer, Container
    ui/              # reusable primitives (Button, Card, Badge, Timeline, ...)
    sections/        # page sections built from ui/ + data
  data/              # experience.ts, education.ts, awards.ts, skills.ts, site.ts
  lib/               # filesystem helpers for reading content/
  types/             # shared TypeScript types
```

## Updating content

**Personal details, experience, education, awards, skills** — edit the arrays in `src/data/*.ts`. Each file is a typed array of objects; add a new entry and TypeScript will flag anything missing.

**Add a blog post** — create a new file in `content/blog/`, e.g. `content/blog/my-new-post.mdx`:

```mdx
---
title: "My New Post"
date: "2026-07-01"
excerpt: "One or two sentence summary shown on the blog list."
tags: ["Career"]
---

Write the post in Markdown/MDX here.
```

It appears automatically on `/blog`, sorted by date — no code changes needed.

**Add a project** — create a new file in `content/projects/`, e.g. `content/projects/my-project.mdx`:

```mdx
---
title: "My Project"
description: "One sentence description shown on cards."
tech: ["TypeScript", "React"]
repoUrl: "https://github.com/you/repo"
liveUrl: ""
featured: true
date: "2026-07-01"
---

Write the full project write-up here.
```

Set `featured: true` to have it show on the homepage (only the first 3 featured projects are typically highlighted there — keep this list short).

**Site-wide details** (name, tagline, email, socials) — edit `src/data/site.ts`. The CV itself is intentionally not published as a downloadable file on the site — contact details and socials are the entry point instead.

## Design system

Colors, fonts, and dark mode are defined via CSS custom properties in `src/app/globals.css` (Tailwind v4's CSS-based theme config — there's no separate `tailwind.config.js`). Dark mode is class-based and handled by `next-themes`, with a toggle in the header.

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build (also validates all MDX content parses correctly)
- `npm run lint` — run ESLint
- `npm run format` — run Prettier

## Deployment

This is a standard Next.js app with no required backend, so it deploys cleanly to Vercel, Netlify, or any Node-capable host. If you want a fully static export (e.g. GitHub Pages), you can add `output: "export"` to `next.config.ts` — the site doesn't use any Next.js server-only features.
