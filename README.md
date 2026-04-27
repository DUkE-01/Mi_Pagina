# Joel Arístides Gil Jackson — Portfolio

> Front-End & Full Stack Developer · Santo Domingo, Dominican Republic

A modern, responsive personal portfolio built with **React 19**, **TypeScript**, **Vite 6**, and **Tailwind CSS v4**.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/YOUR_GITHUB_USERNAME/Mi_Pagina)

---

## 🚀 Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | React 19 + TypeScript |
| Build Tool | Vite 6 |
| Styling | Tailwind CSS v4 + shadcn/ui |
| Animation | Framer Motion |
| Routing | Wouter (client-side SPA) |
| Icons | Lucide React + React Icons |
| Theming | next-themes (dark / light) |
| Contact Form | FormSubmit.co (no backend required) |

---

## ⚠️ Before First Run — Add CV files

The CVs are **not committed to git** (they are large binary files). You must copy them manually into the right place:

```
Mi_Pagina/assets/                          ← original files (not tracked by Vite)
  CV-Joel_Aristides_Gil_Jackson.pdf
  CV-Joel Aristides Gil Jackson(inglés).pdf

↓  Copy to:

Mi_Pagina/portfolio/public/assets/
  CV-Joel_Aristides_Gil_Jackson.pdf        ← served at /assets/CV-Joel_Aristides_Gil_Jackson.pdf
  CV-Joel_Aristides_Gil_Jackson_EN.pdf     ← served at /assets/CV-Joel_Aristides_Gil_Jackson_EN.pdf
```

> **Tip for Vercel:** Upload the PDFs to your repo inside `portfolio/public/assets/` before deploying. GitHub will store them and Vercel will serve them as static files.

---

## 📦 Getting Started

### Prerequisites
- Node.js ≥ 18
- npm ≥ 9

### Install & Run

```bash
cd portfolio
npm install
npm run dev
```

The app will be available at `http://localhost:5173`.

### Build for Production

```bash
cd portfolio
npm run build
npm run preview   # preview the production build locally
```

---

## 🌐 Deployment on Vercel

Zero-config deployment — the `vercel.json` handles everything.

### Steps
1. Copy the PDF files into `portfolio/public/assets/` (see above).
2. Push this repository to GitHub.
3. Go to [vercel.com](https://vercel.com) → **Add New Project**.
4. Import the GitHub repository.
5. Set the **Root Directory** to `portfolio`.
6. Click **Deploy** — Vercel auto-detects Vite.

All client-side routes return `index.html` via the rewrite rule in `vercel.json`.

### Contact Form
The contact form sends emails via [FormSubmit.co](https://formsubmit.co) — no server needed. **The first submission will trigger a one-time confirmation email** to `Joel.Gil2025@hotmail.com`. Click the confirmation link once and subsequent submissions will arrive instantly.

---

## 📁 Project Structure

```
Mi_Pagina/
├── assets/                  # Original CV files (local only, not served by Vite)
├── .gitignore
├── README.md
└── portfolio/               # Main Vite + React application
    ├── public/
    │   ├── assets/          # ← Place PDF CVs here
    │   ├── favicon.svg
    │   └── opengraph.jpg
    ├── src/
    │   ├── components/
    │   │   ├── layout/      # Navbar, Footer
    │   │   ├── sections/    # Hero, About, Skills, Projects, Experience, WhyMe, Contact
    │   │   └── ui/          # shadcn/ui component library
    │   ├── hooks/
    │   ├── lib/
    │   ├── pages/           # Home, NotFound
    │   ├── App.tsx
    │   ├── main.tsx
    │   └── index.css
    ├── index.html
    ├── vite.config.ts
    ├── tsconfig.json
    ├── vercel.json
    └── package.json
```

---

## 📄 License

MIT © Joel Arístides Gil Jackson
