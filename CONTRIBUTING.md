# Contributing

Quick reference for anyone — human or AI — picking up work on this repo.

## TL;DR

1. Clone, `npm install`, `npm run dev` → [http://localhost:5173](http://localhost:5173).
2. Edit files in **`src/components/v2/`** for the working copy (`/v2` route).
3. Leave files in **`src/components/`** alone — that's the V1 showcase
   the client uses to demo to others.
4. Commit atomically, push to `rcm-preview` to update the StackBlitz preview.

## The V1 / V2 mental model

| Route | Folder | Role |
|-------|--------|------|
| `/`   | `src/components/*.jsx`     | **V1 — Showcase.** Frozen demo for stakeholders. |
| `/v2` | `src/components/v2/*.jsx`  | **V2 — Working copy.** All active iteration. |

Shared (touches both): `Navbar.jsx`, `Footer.jsx`, `CircuitBackground.jsx`,
`AgentDashboard*`, `AgentElixaPanel.jsx`, `index.css`, `tailwind.config.js`.
Edit these carefully — they affect both versions.

## Local development

```bash
# First time
npm install          # Node 18+ required

# Daily
npm run dev          # http://localhost:5173 — hot reload
npm run build        # ./dist — production bundle
npm run preview      # Serve production build locally
```

## Tech stack

- **React 18** + **Vite 5**
- **Tailwind CSS 3** (JIT)
- **Framer Motion 11** for animations
- **Lucide React** for icons
- No router lib — pathname check in `App.jsx`
- No state mgmt lib — component-local state only

## Code conventions

### Section structure

Every marketing section follows this skeleton:

```jsx
<section id="section-id" className="relative py-12 md:py-20">
  <div className="container-prose">
    {/* Eyebrow chip with pinging dot */}
    <motion.span className="chip">
      <span className="relative flex h-1.5 w-1.5">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-300" />
      </span>
      Section label
    </motion.span>

    {/* H2 heading */}
    <motion.h2 className="mt-5 font-display text-[32px] font-bold tracking-tight text-gradient">
      Headline
    </motion.h2>

    {/* Body */}
  </div>
</section>
```

### Design tokens

| Token | Use |
|-------|-----|
| `text-gradient`     | All section h2 headings |
| `text-gradient-cv`  | Inline accent within headings or stat numbers |
| `glass`             | Standard frosted card |
| `glass-strong`      | Heavier frosted surface |
| `chip`              | Eyebrow pill |
| `container-prose`   | Page-width wrapper (max-w-[88rem]) |
| `cv-auto`           | Wrap lazy-loaded sections (skip render offscreen) |

### Animations

- All keyframes live in `src/index.css` under `@layer utilities`.
- Existing keyframes: `heroFloat`, `heroFill`, `conveyorMove`, `aiSpin`,
  `aiSpinRev`, `aiPulse`, `aiTwinkle`, `heroActIn`.
- Use Framer Motion `whileInView={{ ... }} viewport={{ once: true }}` for
  reveal animations so they fire once and stop observing.

### Files to never touch without intent

- `tailwind.config.js` — design tokens shared everywhere
- `index.html` — fonts and meta
- `src/index.css` — base styles, keyframes
- Shared components (`Navbar`, `Footer`, `CircuitBackground`)

## Git workflow

### Branches

- `main` — official trunk (don't push here directly)
- `claude/elastic-turing-110c06` — current working branch
- `rcm-preview` — single-segment alias of the working branch, used for
  StackBlitz sharing (StackBlitz can't parse slashed branch names)

### Pushing

```bash
# Push working branch
git push origin claude/elastic-turing-110c06

# Mirror to preview branch (updates the StackBlitz link)
git push origin claude/elastic-turing-110c06:rcm-preview

# Both at once
git push origin claude/elastic-turing-110c06 claude/elastic-turing-110c06:rcm-preview
```

### Commit style

Conventional-ish, atomic per concern:

```
feat: ...           New feature or section
refactor: ...       Restructure without behavior change
chore: ...          Tooling, config, gitignore, deps
fix: ...            Bug fix
style: ...          Visual tweaks only
docs: ...           README / CLAUDE / CONTRIBUTING changes
```

**Atomic = one logical change per commit.** If you redesign two sections,
that's two commits. The owner wants to be able to revert one without
affecting the other.

## Sharing previews

Live preview (no setup for recipient):
**https://stackblitz.com/github/miansohaib056/rcmwebsite/tree/rcm-preview**

Push to `rcm-preview` to update what stakeholders see.

For a permanent `*.vercel.app` URL, connect the repo at
[vercel.com/new](https://vercel.com/new) — auto-deploys on every push.

## Picking up cold (new dev or new Claude session)

1. Read **`CLAUDE.md`** at repo root — covers the V1/V2 split and
   architecture decisions.
2. `git log --oneline -20` — see recent commits for context.
3. `npm install && npm run dev` — verify local boots.
4. Visit `/v2` to see the active state.
5. Ask the user what section they're iterating on.
