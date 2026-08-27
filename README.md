# Asmit Shrestha — Portfolio

A React + Vite + Tailwind portfolio built from real certificates, event photos, and
achievements (robo-football, science exhibitions, STEM Aroma leadership).

## Run locally

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually http://localhost:5173).

## Build for production

```bash
npm run build
npm run preview   # sanity-check the production build locally
```

## Deploy to Vercel

**Option A — Vercel CLI (fastest)**
```bash
npm install -g vercel
vercel login
vercel        # first deploy, follow the prompts
vercel --prod # promote to production
```

**Option B — GitHub + Vercel dashboard (recommended)**
1. Push this folder to a new GitHub repo:
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/<your-username>/<repo-name>.git
   git push -u origin main
   ```
2. Go to https://vercel.com/new, import the repo.
3. Framework preset: **Vite** (auto-detected). Build command `npm run build`,
   output directory `dist` (Vercel fills these in automatically).
4. Click Deploy.

## Before you deploy — things to update

- **Contact section** (`src/App.jsx`, near the bottom): replace the placeholder
  email (`asmit.shrestha@example.com`) and phone number with your real ones.
- **Contact form**: the form is currently static (front-end only). Wire it up to
  a service like [Formspree](https://formspree.io) (free tier, no backend needed)
  or your own API endpoint before relying on it.
- **GitHub / LinkedIn links** in the Contact section currently point to `#` —
  add your real profile URLs.
- **Resume**: if you want a downloadable resume/CV, drop a PDF into `public/`
  (e.g. `public/asmit-shrestha-resume.pdf`) and link to it from the hero or
  contact section.

## Project structure

```
src/
  App.jsx        All page sections (Hero, About, Build Log, Components, Field Tests, Contact)
  index.css      Global styles + PCB-grid background + trace/node animations
  main.jsx       React entry point
public/images/   Real certificate scans and event photos used across the site
```

## Design notes

The visual language is a "robotics build log / PCB" theme — deep green board
color, copper and gold trace accents, a stencil display face for the name (like
equipment nameplates), and monospace labels styled like schematic/BOM text.
All achievements, dates, and photos are sourced directly from your certificates
and event photos — nothing fabricated.
