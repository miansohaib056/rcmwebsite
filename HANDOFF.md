# HANDOFF — resume state

> A living "where we are / what's next" note so a new session, device, or
> account can pick up instantly. For stable project rules (V1/V2 split,
> deploy flow, design system) see [CLAUDE.md](./CLAUDE.md) — this file is
> just the current snapshot.

**Last updated:** 2026-07-14
**State at time of writing:** commit `6e5c71a` — clean working tree, all work on `origin/main`.

---

## TL;DR — how to resume

1. Clone / pull `github.com/miansohaib056/rcmwebsite`, check out `main`.
2. `npm install && npm run dev` → open `http://localhost:5173/v2`.
3. All active iteration is on **V2**. `/` (V1) is the frozen client showcase — don't touch it.
4. There is **no open task in flight** — the last run wrapped cleanly. Pick up wherever you like.

---

## Current V2 page (section order)

Rendered by [`src/components/V2Page.jsx`](./src/components/V2Page.jsx):

1. Hero — encounter card + circuit background
2. LogoMarquee
3. Solution — flow diagram
4. AIAgents — 7-agent grid
5. ConveyorSection — "Still stuck chasing payments?"
6. Problems — horizontal pinned scroll (4 cards)
7. ~~Showcase ("A neural network for revenue.")~~ — **hidden** (import + block commented out; uncomment to restore)
8. HowItWorks
9. Stats
10. Testimonials
11. CTA

## What was done in the last work run

Most recent first (all V2 unless noted):

- Hid the **Showcase** section in V2 (`6e5c71a`).
- **Hero polish:** floating cards now hang off the *encounter card's* corners
  (not the outer container), overhang tuned to 16px, overlap reduced so card
  content stays visible (`af35f49`, `fa83c98`, `9b39d95`).
- **Nav:** consistent 16px side padding on mobile + tablet (`2c777d9`);
  hamburger menu through tablet, conveyor cards kept inside body (`9bae098`, `93da23f`).
- Before that: full **responsive overhaul** of V2 (mobile/tablet/desktop)
  and the Vercel SPA rewrite so `/v2` resolves in production.

## Open threads / candidates for next session

Nothing is committed as "next." Known toggles / things left deliberately parked:

- **Showcase** is hidden, not deleted — re-enable in `V2Page.jsx` if the client wants it back.
- V1 (`/`) remains frozen — only touch on an explicit "edit V1" instruction.

## Delivery / deploy reminders (see CLAUDE.md for detail)

- `main` is wired to Vercel production — **don't push to main without explicit OK.**
- Default flow: push working branch → per-branch Vercel preview → PR → merge.
- Stakeholder preview: push to `rcm-preview` branch → StackBlitz link in CLAUDE.md.
