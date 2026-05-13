# RCM Automation — Redesign

Premium dark-themed marketing site for **RCM Automation**, an AI-agent
platform for medical billing. Seven specialist agents working a single
revenue cycle end-to-end.

Built with **React + Vite + Tailwind CSS + Framer Motion**.

> **Working on this repo?** Read [CONTRIBUTING.md](./CONTRIBUTING.md) first.
> If you're an AI agent (Claude / Cursor / etc.), read [CLAUDE.md](./CLAUDE.md).

---

## Quick start

```bash
npm install        # Node 18+
npm run dev        # http://localhost:5173
```

That's it. Hot reload, no env vars, no backend.

## Routes

| Route | What it is | When to edit |
|-------|------------|--------------|
| `/`   | **V1 — Showcase** (frozen for client demos) | Don't edit unless explicitly told. |
| `/v2` | **V2 — Working copy** | Active iteration target. |

Toggle between them via the **Versions** dropdown in the top nav.

## File map

```
src/
├── App.jsx                    # Routing — V1 vs V2 branch
├── main.jsx                   # React root
├── index.css                  # Tailwind layers + tokens + keyframes
└── components/
    ├── Navbar.jsx             # Shared — nav + Versions dropdown
    ├── Footer.jsx             # Shared
    ├── CircuitBackground.jsx  # Shared — animated SVG circuit board
    │
    ├── # V1 (frozen showcase)
    ├── Hero.jsx, Solution.jsx, AIAgents.jsx, ConveyorSection.jsx,
    ├── Problems.jsx, Showcase.jsx, HowItWorks.jsx, Stats.jsx,
    ├── Testimonials.jsx, CTA.jsx, LogoMarquee.jsx
    │
    ├── V2Page.jsx             # V2 layout wrapper
    └── v2/                    # V2 working copy — mirror of V1
        ├── Hero.jsx, Solution.jsx, AIAgents.jsx, ...
```

## Tech stack

- **React 18** + **Vite 5** (SPA, no SSR)
- **Tailwind 3** (JIT)
- **Framer Motion 11**
- **Lucide React** for icons

No router library (single-pathname check in `App.jsx`).
No state management library (component-local state only).

## Design system

| Token | Use |
|-------|-----|
| `text-gradient` | All section h2 headings (white → slate → cyan → violet) |
| `text-gradient-cv` | Inline accent (cyan → violet) |
| `chip` | Eyebrow pill with pinging cyan dot |
| `glass`, `glass-strong` | Frosted-glass surfaces |
| `container-prose` | Page-width wrapper |
| `cv-auto` | Lazy-render wrapper for offscreen sections |

Fonts: **Inter** body, **Space Grotesk** display, **JetBrains Mono** for data.

## Available scripts

```bash
npm run dev        # Dev server with hot reload
npm run build      # Production bundle to ./dist
npm run preview    # Serve the production build locally
```

## Sharing a live preview

Push to the `rcm-preview` branch (single-segment alias of the working
branch — StackBlitz can't parse slashed branch names):

```bash
git push origin claude/elastic-turing-110c06:rcm-preview
```

Then share:

**[stackblitz.com/github/miansohaib056/rcmwebsite/tree/rcm-preview](https://stackblitz.com/github/miansohaib056/rcmwebsite/tree/rcm-preview)**

The recipient opens it in their browser — no install, no setup, fully
interactive app.

For a permanent `*.vercel.app` URL, connect the repo at
[vercel.com/new](https://vercel.com/new). Auto-deploys on every push.

## Performance & accessibility

- Sections below the fold lazy-load via React `Suspense` + `cv-auto`.
- All scroll reveals use Framer Motion's `viewport={{ once: true }}`.
- All visuals are SVG / CSS / Lucide — no rasters, no fonts beyond Google Fonts.
- `prefers-reduced-motion` honored globally via `@media` rule in `index.css`.
- Semantic landmarks, real `<a>`/`<button>`, WCAG-AA text contrast.

## Project conventions

See [CONTRIBUTING.md](./CONTRIBUTING.md) for:

- Git workflow & branch strategy
- Commit message style (atomic, conventional)
- Section / component patterns
- Where to add keyframes
- What never to touch

---

**Original site**: [rcmautomation.ai](https://rcmautomation.ai/) — this
repo is the redesign.
