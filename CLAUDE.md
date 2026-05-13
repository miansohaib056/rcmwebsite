# CLAUDE.md — Project context for Claude Code

> Auto-loaded by Claude Code when working in this repo. Read this first.

## What this is

A premium dark-themed marketing site for **RCM Automation** — an AI-agent
platform for medical billing (eligibility, prior auth, coding, claims,
denials, A/R, posting). Seven specialist agents.

The live production site (not this repo) is rcmautomation.ai. This repo
is the **redesign** being iterated on.

## ⚠️ The V1 / V2 convention — read before editing anything

The site has **two parallel versions** living in the same codebase:

| Route   | Status                | Edit it? |
|---------|-----------------------|----------|
| `/`     | **V1 — Showcase**     | ❌ **FROZEN.** This is what the client shows to other people. Do NOT modify these files unless the user explicitly says "edit V1" or "edit the showcase". |
| `/v2`   | **V2 — Working Copy** | ✅ **All active iteration happens here.** |

**File mapping:**

- V1 components → `src/components/*.jsx` (e.g. `Hero.jsx`, `Solution.jsx`, `Problems.jsx`)
- V2 components → `src/components/v2/*.jsx` (mirror copies — same filenames)
- V2 page wrapper → `src/components/V2Page.jsx`

**When the user asks to change something:**
1. Default assumption: they mean V2. Edit files in `src/components/v2/`.
2. If they're on `/` (the homepage) and ask for a change, *still* edit V2
   unless they explicitly say "change V1" or "change the showcase".
3. Shared components (`Navbar.jsx`, `Footer.jsx`, `CircuitBackground.jsx`,
   `AgentDashboard.jsx`, `AgentElixaPanel.jsx`) live at the root of
   `src/components/` — editing them affects both V1 and V2. Mention this
   to the user before editing if it could regress V1.

## Tech stack

- **React 18** + **Vite 5** (no SSR, SPA only)
- **Tailwind CSS 3** (JIT, content scanned from `index.html` + `src/**/*.jsx`)
- **Framer Motion 11** for animations
- **Lucide React** for icons
- No state management library, no router library — routing is a single
  `window.location.pathname` check in `src/App.jsx` (`isV2` branch).

## File map

```
src/
├── App.jsx                   # Top-level router (V1 vs V2 branch)
├── main.jsx                  # React root
├── index.css                 # Tailwind layers + design tokens + all keyframes
└── components/
    │
    ├── Navbar.jsx            # SHARED — sticky nav, Versions dropdown
    ├── Footer.jsx            # SHARED
    ├── CircuitBackground.jsx # SHARED — animated SVG circuits for hero
    ├── AgentDashboard.jsx    # SHARED — used by AIAgents
    ├── AgentDashboardModal.jsx
    ├── AgentElixaPanel.jsx
    ├── ParticleField.jsx     # SHARED legacy (unused since circuit BG)
    │
    ├── V2Page.jsx            # V2 layout — imports everything from ./v2/
    │
    ├── # ─── V1 (frozen) ─────────────────────────────────────
    ├── Hero.jsx              # V1 hero — encounter card + circuit BG
    ├── LogoMarquee.jsx
    ├── Solution.jsx          # Flow diagram with refs-aligned SVG paths
    ├── AIAgents.jsx          # 7-agent grid + AI orbit emblem
    ├── ConveyorSection.jsx   # "Still stuck chasing payments?" conveyor
    ├── Problems.jsx          # 4-card horizontal-scroll problems
    ├── Showcase.jsx
    ├── HowItWorks.jsx
    ├── Stats.jsx
    ├── Testimonials.jsx
    ├── CTA.jsx
    │
    └── v2/                   # V2 (working copy) — mirror of V1, edit here
        ├── Hero.jsx
        ├── LogoMarquee.jsx
        ├── Solution.jsx
        ├── AIAgents.jsx
        ├── ConveyorSection.jsx
        ├── Problems.jsx
        ├── Showcase.jsx
        ├── HowItWorks.jsx
        ├── Stats.jsx
        ├── Testimonials.jsx
        └── CTA.jsx
```

## Dev commands

```bash
npm install          # First-time setup (Node 18+)
npm run dev          # Vite dev server on http://localhost:5173
npm run build        # Production build to dist/
npm run preview      # Serve production build locally
```

Hot-reload works for both V1 and V2.

## Design system at a glance

- **Background**: `bg-ink-950` (#03050d) with radial gradients in `index.css`
- **Accent palette**: cyan-400 → blue-500 → violet-500 → fuchsia-500
- **Heading style**: `.text-gradient` (white → slate → cyan → violet)
- **Inline accent**: `.text-gradient-cv` (cyan → violet)
- **Glass surface**: `.glass` and `.glass-strong` in `index.css`
- **Eyebrow chip**: `.chip` (cyan pill) + leading pinging dot pattern
- **Body font**: Inter; **display font**: Space Grotesk; **mono**: JetBrains Mono
- **Section h2**: 32px (`text-[32px]`), bold, `text-gradient`
- **Container**: `.container-prose` = `max-w-[88rem] mx-auto px-5 md:px-6 lg:px-8`

## Conventions worth knowing

- **Eyebrow chip pattern** (use this on every section heading):
  ```jsx
  <span className="chip">
    <span className="relative flex h-1.5 w-1.5">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-300" />
    </span>
    Section label
  </span>
  ```

- **Section heading pattern**:
  ```jsx
  <h2 className="mt-5 font-display text-[32px] font-bold tracking-tight text-gradient">
    Headline here
  </h2>
  ```

- **All keyframes** live in `src/index.css` under `@layer utilities`.
  Named conventions: `heroFloat`, `heroFill`, `conveyorMove`, `aiSpin`,
  `aiSpinRev`, `aiPulse`, `aiTwinkle`, `heroActIn`.

- **Lazy-loaded sections** use `cv-auto` wrapper (content-visibility) to
  skip rendering when offscreen. Don't wrap `Problems` in `cv-auto` —
  its pinned-scroll height math breaks.

## Recent decisions / context for next Claude

Capturing the *why* behind structural choices so future sessions don't
re-litigate them:

- **Why V1 + V2 split?** The user shows V1 to clients/stakeholders. V2 is
  the iteration target. Both must render correctly at all times. We
  duplicate files instead of feature-flagging because the user wants
  changes to V2 to be guaranteed not to bleed into V1.

- **Why pathname routing instead of react-router?** Keeps deps minimal.
  Vite's dev server serves `index.html` for any path; the SPA reads
  `window.location.pathname` once in `App.jsx`. No need for full router.

- **Why dropdown hover-driven, solid bg (not glassmorphism)?** User
  requested it explicitly. See Navbar.jsx — `onMouseEnter`/`onMouseLeave`
  on the `<li>`, solid `bg-ink-900 border-white/10`.

- **Solution flow diagram** uses a fixed 1200×520 viewBox so SVG line
  endpoints and absolute-positioned pills share one coordinate system —
  changing one without the other will desync them.

- **Problems section** uses horizontal pinned scroll (4 cards). The
  section height is `100vh + shift` where `shift = trackWidth - viewportWidth`,
  recomputed on resize via `ResizeObserver`.

## Branch / commit conventions

- Working branch: `claude/elastic-turing-110c06`
- Mirror branch (shared with stakeholders): `rcm-preview` (push to both)
- Commits: conventional-ish (`feat:`, `refactor:`, `chore:`, `fix:`)
- Keep commits **atomic** per section/concern — user has emphasized this
  ("if I want to revert one section it should not affect others").

## Shareable preview link (StackBlitz)

`https://stackblitz.com/github/miansohaib056/rcmwebsite/tree/rcm-preview`

Push to the `rcm-preview` branch to update what stakeholders see:

```bash
git push origin <current-branch>:rcm-preview
```

## When the user asks vague things

- "the section" / "this section" → look at the most recent screenshot or
  scroll context. If unclear, read the open `/v2` page and infer from
  what's visible.
- "make it match" with a reference image → copy structural layout, not
  literal pixels. Prefer Tailwind utilities over inline styles.
- "revert my last command" → use `git diff HEAD` to find unstaged edits
  and undo them. Don't reset committed work.

## Don'ts

- ❌ Don't edit V1 files (`src/components/*.jsx`, excluding `v2/`) unless
  explicitly told.
- ❌ Don't add new top-level deps without checking with the user.
- ❌ Don't introduce a router library — pathname check is sufficient.
- ❌ Don't add testing infra unless asked.
- ❌ Don't commit `.claude/` (it's worktree state — already in .gitignore).
