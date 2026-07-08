# Engineering Portfolio | Herron Hà-Vi Nguyen

My personal portfolio showcasing robotics, control systems, and mechanical engineering projects. There are two ways to view it: a simple static site you can open instantly, and a full Next.js app with animations and interactivity.

**Find me:** [github.com/herronoui](https://github.com/herronoui) · [LinkedIn](https://www.linkedin.com/in/herronnguyen) · [Reading list & robotics news](https://herronoui.github.io/reading-resources)

---

## Quick start (static site, best for demos)

No install needed. Just open the project viewer in your browser:

```bash
open index.html
```

Or spin up a local server:

```bash
python3 -m http.server 8080
# visit http://localhost:8080
```

**Want to edit projects?** Update `content/projects-data.js` and refresh. Sections, metrics, PDFs, and write-ups all load automatically.

---

## Next.js app (optional)

A React-powered version of the portfolio with Framer Motion animations, a typed data layer, and Tailwind CSS v4.

```bash
npm install
npm run dev    # http://localhost:3000
npm run build  # production build
npm run lint   # ESLint
```

**Edit structured data** in `src/data/portfolio.ts` (profile, projects, experience, and skills).

---

## Repo structure

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

| Project | What it is | Where / When |
| --- | --- | --- |
| **Magic Chair** | Soft pneumatic patient-transfer robot | CHARM Lab (fabrication, instrumentation, pressure characterization) |
| **TouchWorld** | Haptic exploration of AI-generated 3D worlds | ME327 (dual-mesh architecture, 1 kHz haptic loop) |
| **Bayesian Multi-Object Tracking** | UKF + Hungarian association under uncertainty | AA 273 (autonomous racing, Monte Carlo chance constraints) |
| **Leadscrew Lifting Machine** | Motor-driven lift rated 275 N @ 6 mm/s | ME Design (FEA-validated 150:1 drivetrain) |
| **GaN MEMS Characterization** | Process parameter sweeps and nonlinear effects | ISEP Paris research internship |
| **GD&T QC Pipeline** | Manufacturing inspection at scale | TBrain AI (550+ drawings, 40% misclassification reduction) |

---

## Tech stack

| Layer | Static site | Next.js app |
| --- | --- | --- |
| UI | Vanilla HTML/CSS/JS | React 19, Tailwind CSS 4 |
| Motion | CSS transitions | Framer Motion |
| Icons | Inline SVG | Lucide React |
| Framework | None | Next.js 15 (App Router) |
| Language | JavaScript | TypeScript |

---

## Content authoring

### Static site (`content/projects-data.js`)

Each entry in `window.PORTFOLIO_PROJECTS` supports:

- `sections`: titled blocks with `body` and/or `items`
- `embed.type: "pdf"`: inline PDF (put files in `public/docs/`)
- `embed.type: "html"`: embedded technical write-ups
- `metrics`, `tags`, `team`, `category`, `image`

Check out `content/README.md` for the full schema.

### Next.js app (`src/data/portfolio.ts`)

Exports typed `profile`, `projects`, `experience`, and `skills` arrays used by the React components. Keep highlights short and quantify metrics when you can.

---

## Assets

- **Project images:** `public/projects/*.svg`
- **PDF decks:** `public/docs/` (e.g. Magic Chair deck)
- **Resume:** `public/resume/Herron_Nguyen_Resume.pdf` (used by the Next.js app)

You can add binary assets locally. For large PDFs, consider Git LFS or external hosting.

---

## License

Private portfolio. All rights reserved unless otherwise noted for third-party assets (fonts, embedded project links).
