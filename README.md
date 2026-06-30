# Engineering Portfolio — Herron Hà-Vi Nguyen

Personal portfolio for robotics, control, and mechanical engineering work. Two frontends share the same project narrative: a zero-build static site for quick demos, and a Next.js app for a full interactive experience.

**Live profile:** [github.com/herronoui](https://github.com/herronoui) · [LinkedIn](https://www.linkedin.com/in/herronnguyen)

---

## Quick start (static site — recommended for demos)

No install or build step. Open the split project viewer in any browser:

```bash
open index.html
```

Or serve locally:

```bash
python3 -m http.server 8080
# → http://localhost:8080
```

**Edit project content:** `content/projects-data.js` — sections, metrics, embedded PDFs, and HTML write-ups load immediately on refresh.

---

## Next.js app (optional)

Modern React portfolio with Framer Motion animations, typed data layer, and Tailwind CSS v4.

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # production build
npm run lint   # ESLint
```

**Edit structured data:** `src/data/portfolio.ts` — profile, projects, experience, and skills.

---

## Repository structure

```
engineering-portfolio/
├── index.html              # Static portfolio (self-contained UI + styles)
├── js/app.js               # Project picker, filters, embedded viewer logic
├── content/
│   ├── projects-data.js    # Rich project content for static site
│   └── README.md           # Content authoring guide
├── public/
│   └── projects/           # Project hero SVGs
├── src/                    # Next.js app
│   ├── app/                # App Router layout, page, global styles
│   ├── components/         # Header, Hero, About, Projects, Experience, Skills, Contact, Footer
│   └── data/portfolio.ts   # Typed profile & project data
├── package.json
├── next.config.ts
├── tsconfig.json
└── eslint.config.mjs
```

---

## Featured work

| Project | Focus | Context |
| --- | --- | --- |
| **Magic Chair** | Soft pneumatic patient-transfer robot | CHARM Lab — fabrication, instrumentation, pressure characterization |
| **TouchWorld** | Haptic exploration of AI-generated 3D worlds | ME327 — dual-mesh architecture, 1 kHz haptic loop |
| **Bayesian Multi-Object Tracking** | UKF + Hungarian association under uncertainty | AA 273 — autonomous racing, Monte Carlo chance constraints |
| **Leadscrew Lifting Machine** | Motor-driven lift rated 275 N @ 6 mm/s | ME Design — FEA-validated 150:1 drivetrain |
| **GaN MEMS Characterization** | Process parameter sweeps & nonlinear effects | ISEP Paris research internship |
| **GD&T QC Pipeline** | Manufacturing inspection at scale | TBrain AI — 550+ drawings, 40% misclassification reduction |

---

## Tech stack

| Layer | Static site | Next.js app |
| --- | --- | --- |
| UI | Vanilla HTML/CSS/JS | React 19, Tailwind CSS 4 |
| Motion | CSS transitions | Framer Motion |
| Icons | Inline SVG | Lucide React |
| Framework | — | Next.js 15 (App Router) |
| Language | JavaScript | TypeScript |

---

## Content authoring

### Static site (`content/projects-data.js`)

Each entry in `window.PORTFOLIO_PROJECTS` supports:

- `sections` — titled blocks with `body` and/or `items`
- `embed.type: "pdf"` — inline PDF (place files under `public/docs/`)
- `embed.type: "html"` — embedded technical write-ups
- `metrics`, `tags`, `team`, `category`, `image`

See `content/README.md` for the full schema.

### Next.js app (`src/data/portfolio.ts`)

Exports typed `profile`, `projects`, `experience`, and `skills` arrays consumed by React components. Keep highlights concise and metrics quantified where possible.

---

## Assets

- **Project images:** `public/projects/*.svg`
- **PDF decks:** `public/docs/` (e.g. Magic Chair deck)
- **Resume:** `public/resume/Herron_Nguyen_Resume.pdf` (referenced by Next.js app)

Add binary assets locally; large PDFs may be gitignored if you prefer Git LFS or external hosting.

---

## License

Private portfolio — all rights reserved unless otherwise noted for third-party assets (fonts, embedded project links).
