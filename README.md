# Sathwik | AI & Full Stack Developer Portfolio

Premium personal portfolio website for **Konijeti Venkata Sai Pavan Sathwik** — B.Tech Computer Science (AI & ML) student.

Built with **React + Vite + Tailwind CSS v4**. Dark-first design with light mode support, fully responsive, accessible, and deployment-ready.

## Features

- Sticky navigation with smooth scroll & mobile hamburger menu
- Dark / light theme toggle (persisted in `localStorage`)
- Hero, About, Skills, Projects (with detail modals), Experience, Education, Certifications, Contact
- Project detail modals (Escape key + click-outside to close)
- Semantic HTML, focus states, reduced-motion support
- SEO meta tags & Open Graph
- Resume PDF available at `/resume.pdf`

## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
sathwik-portfolio/
├── public/
│   ├── favicon.svg
│   └── resume.pdf
├── src/
│   ├── components/     # All UI sections
│   ├── data/
│   │   └── portfolio.js  # ← Edit content here
│   ├── hooks/
│   │   └── useTheme.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Editing Content

All portfolio text lives in **`src/data/portfolio.js`**.

Update:
- Personal info, email, links
- Project descriptions & technologies
- Experience, education, certifications

**Placeholders to replace:**
- Project GitHub links (`github: null` → your repo URL)
- Project live demo links (`live: null` → deployed URL if any)

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. Go to [vercel.com](https://vercel.com) → New Project → Import the repo.
3. Framework Preset: **Vite**
4. Build Command: `npm run build`
5. Output Directory: `dist`
6. Deploy.

Or via CLI:

```bash
npm i -g vercel
vercel
```

## Notes

- Theme preference is stored in `localStorage` under key `theme`.
- No external icon library is required (icons are inline SVGs).
- The site is mobile-first and tested for common breakpoints.
- Academic scores and experience details are taken directly from the provided resume.

---

© 2026 Sathwik
