# Adham Reda — Data Analyst Portfolio

Production-ready personal portfolio built with Next.js 14 (App Router), TypeScript, and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Project structure

- `src/app` — pages (home, dynamic project case studies, sitemap, robots, 404)
- `src/components` — reusable UI components (Navbar, Hero, Projects, etc.)
- `src/lib/data.ts` — all portfolio content in one place (edit this file to update projects, skills, experience, certifications)
- `public/images` — dashboard screenshots

## Notes

- All project metrics come directly from the provided dashboards — nothing was invented.
- The contact form opens the visitor's email client (`mailto:`) since no backend/email service is connected yet. To wire up real submissions, add an API route or a service like Formspree/Resend and update `src/components/Contact.tsx`.
- GitHub links show "Link coming soon" until real repository URLs are added in `src/lib/data.ts`.
- Update `siteUrl` in `src/app/layout.tsx`, `sitemap.ts`, and `robots.ts` once the site has a real domain.
- Resume button currently links to `#` — replace `resumeUrl` in `src/lib/data.ts` with a hosted PDF link.
