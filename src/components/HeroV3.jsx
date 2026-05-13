import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

/*  V3 — Anatomical Cutaway
 *  Vintage technical illustration of the revenue-cycle "engine."
 *  Each of the 7 agents is a labeled component with thin callout lines and serif labels.
 *  Cursor proximity (or auto-cycle on touch devices) highlights one agent at a time.
 */

const PARTS = [
  {
    id: 'elixa',
    name: 'ELIXA',
    role: 'Eligibility',
    note: 'Real-time payer probes. Verifies coverage before the encounter ends.',
    // Position on the diagram (% of 1000x640 viewBox)
    cx: 200, cy: 230,
    // Callout end point
    lx: 80, ly: 110,
    side: 'left',
  },
  {
    id: 'pria',
    name: 'PRIA',
    role: 'Prior Auth',
    note: 'Files and chases auth packets. 80% faster than human turnaround.',
    cx: 320, cy: 160,
    lx: 220, ly: 50,
    side: 'top',
  },
  {
    id: 'codin',
    name: 'CODIN',
    role: 'Coding',
    note: 'Applies CPT + ICD-10 from the note. Compliance updates ship weekly.',
    cx: 500, cy: 200,
    lx: 500, ly: 50,
    side: 'top',
  },
  {
    id: 'clair',
    name: 'CLAIR',
    role: 'Claims',
    note: 'Scrubs against NCCI, LCD, and payer rules. 99.99% clean rate.',
    cx: 660, cy: 260,
    lx: 800, ly: 90,
    side: 'top',
  },
  {
    id: 'dexa',
    name: 'DEXA',
    role: 'Denials',
    note: 'Reads CARC codes, drafts appeals, prevents repeat denials.',
    cx: 720, cy: 420,
    lx: 920, ly: 470,
    side: 'right',
  },
  {
    id: 'aria',
    name: 'ARIA',
    role: 'A/R Follow-up',
    note: 'Prioritizes by recovery value. Works the queue, not the alphabet.',
    cx: 500, cy: 470,
    lx: 540, ly: 590,
    side: 'bottom',
  },
  {
    id: 'remita',
    name: 'REMITA',
    role: 'Posting',
    note: 'Reconciles 835s, posts adjustments, flags variances in real time.',
    cx: 300, cy: 420,
    lx: 160, ly: 540,
    side: 'left',
  },
];

export default function HeroV3() {
  const containerRef = useRef(null);
  const [activeId, setActiveId] = useState('codin'); // default highlight in center
  const [mouseInside, setMouseInside] = useState(false);

  // Cursor proximity highlight
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const handle = (e) => {
      const rect = el.getBoundingClientRect();
      const mx = ((e.clientX - rect.left) / rect.width) * 1000;
      const my = ((e.clientY - rect.top) / rect.height) * 640;
      let closest = PARTS[0];
      let min = Infinity;
      for (const p of PARTS) {
        const d = (p.cx - mx) ** 2 + (p.cy - my) ** 2;
        if (d < min) { min = d; closest = p; }
      }
      setActiveId(closest.id);
    };
    const enter = () => setMouseInside(true);
    const leave = () => setMouseInside(false);
    el.addEventListener('mousemove', handle);
    el.addEventListener('mouseenter', enter);
    el.addEventListener('mouseleave', leave);
    return () => {
      el.removeEventListener('mousemove', handle);
      el.removeEventListener('mouseenter', enter);
      el.removeEventListener('mouseleave', leave);
    };
  }, []);

  // Auto-cycle when not hovering
  useEffect(() => {
    if (mouseInside) return;
    let idx = PARTS.findIndex((p) => p.id === activeId);
    const interval = setInterval(() => {
      idx = (idx + 1) % PARTS.length;
      setActiveId(PARTS[idx].id);
    }, 2200);
    return () => clearInterval(interval);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [mouseInside]);

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-28 pb-16 md:pt-32 md:pb-20"
      style={{ backgroundColor: '#f6f1e7' }}
    >
      {/* Paper / blueprint texture overlay */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.35] mix-blend-multiply"
        style={{
          backgroundImage: `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='240' height='240'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/><feColorMatrix values='0 0 0 0 0.35 0 0 0 0 0.30 0 0 0 0 0.22 0 0 0 0.55 0'/></filter><rect width='100%' height='100%' filter='url(%23n)'/></svg>")`,
        }}
      />
      {/* Light ageing vignette */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ background: 'radial-gradient(ellipse 80% 60% at 50% 50%, transparent 50%, rgba(120,90,55,0.18) 100%)' }}
      />

      <div className="container-prose relative z-10">
        {/* ===== TOP RULE — like a museum plate ===== */}
        <div className="flex items-center justify-between gap-4 pb-5 border-b border-stone-800/15">
          <div className="flex items-center gap-3 text-stone-700">
            <span className="font-mono text-[10.5px] tracking-[0.24em] uppercase">Plate 07 &middot; Revenue Cycle</span>
          </div>
          <div className="hidden md:flex items-center gap-3 text-stone-600 text-[10.5px] font-mono tracking-[0.18em] uppercase">
            <span>Fig. III</span>
            <span className="w-px h-3 bg-stone-700/30" />
            <span>Cutaway view</span>
          </div>
        </div>

        {/* ===== HEADLINE + BODY ===== */}
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-16 items-end pt-10 md:pt-14">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
              className="text-[11px] font-mono tracking-[0.28em] uppercase text-stone-600 mb-4"
            >
              An anatomy of revenue
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.2, 0.7, 0.2, 1] }}
              className="font-display font-normal italic text-stone-900 leading-[0.95] tracking-[-0.015em]"
              style={{ fontSize: 'clamp(44px, 5.8vw, 80px)' }}
            >
              The machinery of
              <br />
              getting <span className="not-italic font-bold text-stone-900 underline decoration-[6px] underline-offset-[10px] decoration-amber-700/70">paid</span>.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.25, ease: [0.2, 0.7, 0.2, 1] }}
              className="mt-7 text-[16.5px] md:text-[17.5px] leading-[1.55] text-stone-700 max-w-[440px]"
            >
              An exploded view of the revenue cycle &mdash; rebuilt from seven autonomous components.
              <span className="block mt-2 text-stone-600 italic">
                Hover any part to learn what it does.
              </span>
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.4, ease: [0.2, 0.7, 0.2, 1] }}
              className="mt-8 flex flex-wrap items-center gap-3"
            >
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 px-6 h-12 rounded-full bg-stone-900 hover:bg-stone-800 text-amber-50 font-semibold tracking-tight text-[15px] transition-all duration-200 hover:-translate-y-px"
              >
                Book a demo
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="#agents"
                className="inline-flex items-center gap-2 px-6 h-12 rounded-full border border-stone-900/20 text-stone-800 hover:bg-stone-900/[0.04] font-medium tracking-tight text-[15px] transition-all duration-200"
              >
                See the schematic
              </a>
            </motion.div>
          </div>

          {/* Floating index card on right — active part description */}
          <motion.div
            initial={{ opacity: 0, x: 16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.55, ease: [0.2, 0.7, 0.2, 1] }}
            className="relative justify-self-end max-w-[400px] w-full"
          >
            <ActiveCard part={PARTS.find((p) => p.id === activeId) || PARTS[0]} />
          </motion.div>
        </div>

        {/* ===== THE CUTAWAY DIAGRAM ===== */}
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
          className="mt-12 md:mt-16 relative aspect-[1000/640] w-full"
        >
          <svg viewBox="0 0 1000 640" className="w-full h-full" preserveAspectRatio="xMidYMid meet">
            <defs>
              <pattern id="paperHatch" x="0" y="0" width="6" height="6" patternUnits="userSpaceOnUse">
                <path d="M0 6 L6 0" stroke="rgba(120,80,40,0.18)" strokeWidth="0.5" />
              </pattern>
              <filter id="paperShadow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
                <feOffset dx="0" dy="1" />
                <feComponentTransfer><feFuncA type="linear" slope="0.18" /></feComponentTransfer>
                <feMerge><feMergeNode /><feMergeNode in="SourceGraphic" /></feMerge>
              </filter>
              <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#fbbf24" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#fbbf24" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Title plate (top-left of plate) */}
            <g transform="translate(40, 24)" className="font-mono">
              <text x="0" y="0" fontSize="9" fill="rgba(60,40,20,0.55)" letterSpacing="2">REVENUE.AI / OPS</text>
              <text x="0" y="14" fontSize="9" fill="rgba(60,40,20,0.45)" letterSpacing="2">SCHEMATIC 2026.05 / FIG. III</text>
            </g>

            {/* Concentric guide rings — engine housing */}
            <circle cx="500" cy="320" r="280" fill="none" stroke="rgba(80,55,30,0.18)" strokeWidth="0.8" strokeDasharray="4 6" />
            <circle cx="500" cy="320" r="200" fill="none" stroke="rgba(80,55,30,0.22)" strokeWidth="0.8" />
            <circle cx="500" cy="320" r="120" fill="url(#paperHatch)" stroke="rgba(80,55,30,0.45)" strokeWidth="1" />
            <circle cx="500" cy="320" r="120" fill="url(#coreGlow)" />

            {/* Center label */}
            <g className="font-display">
              <text x="500" y="316" textAnchor="middle" fontSize="13" fontStyle="italic" fill="rgba(60,40,20,0.7)">the cycle</text>
              <text x="500" y="338" textAnchor="middle" fontSize="22" fontWeight="bold" fill="rgba(40,25,10,0.85)">$ → $$</text>
            </g>

            {/* Radial spokes from center to each part */}
            {PARTS.map((p) => (
              <line key={`spoke-${p.id}`} x1="500" y1="320" x2={p.cx} y2={p.cy} stroke="rgba(80,55,30,0.18)" strokeWidth="0.8" strokeDasharray="3 4" />
            ))}

            {/* Parts */}
            {PARTS.map((p) => (
              <Part key={p.id} part={p} active={p.id === activeId} onActivate={() => setActiveId(p.id)} />
            ))}

            {/* Corner registration marks (like blueprint corners) */}
            <RegMark x={20} y={20} />
            <RegMark x={980} y={20} flipX />
            <RegMark x={20} y={620} flipY />
            <RegMark x={980} y={620} flipX flipY />

            {/* Scale ruler bottom-left */}
            <g transform="translate(40, 600)" className="font-mono">
              <line x1="0" y1="0" x2="100" y2="0" stroke="rgba(60,40,20,0.55)" strokeWidth="1" />
              <line x1="0" y1="-3" x2="0" y2="3" stroke="rgba(60,40,20,0.55)" strokeWidth="1" />
              <line x1="50" y1="-2" x2="50" y2="2" stroke="rgba(60,40,20,0.55)" strokeWidth="1" />
              <line x1="100" y1="-3" x2="100" y2="3" stroke="rgba(60,40,20,0.55)" strokeWidth="1" />
              <text x="50" y="14" textAnchor="middle" fontSize="8" fill="rgba(60,40,20,0.55)" letterSpacing="1.5">SCALE 1:1</text>
            </g>
          </svg>
        </motion.div>
      </div>
    </section>
  );
}

/* ============================== ACTIVE CARD ============================== */
function ActiveCard({ part }) {
  return (
    <div className="relative border border-stone-900/15 bg-amber-50/60 backdrop-blur-sm rounded-sm p-5 shadow-[4px_6px_0_rgba(80,55,30,0.1)]">
      <div className="flex items-center justify-between mb-3">
        <span className="text-[10px] font-mono tracking-[0.22em] uppercase text-stone-500">Component</span>
        <span className="text-[10px] font-mono tracking-[0.18em] uppercase text-amber-800 bg-amber-100/70 px-2 py-0.5 rounded">{part.role}</span>
      </div>
      <div className="font-display text-2xl md:text-3xl font-bold text-stone-900 leading-none tracking-tight">{part.name}</div>
      <p className="mt-3 text-[14px] leading-[1.55] text-stone-700 italic">{part.note}</p>
      <div className="mt-4 flex items-center gap-1.5">
        {[...Array(7)].map((_, i) => {
          const idx = PARTS.findIndex((p) => p.id === part.id);
          return (
            <span key={i} className={`w-2 h-2 rounded-full transition-colors ${i === idx ? 'bg-amber-700' : 'bg-stone-900/15'}`} />
          );
        })}
      </div>
    </div>
  );
}

/* ============================== PART ============================== */
function Part({ part, active, onActivate }) {
  const stroke = active ? 'rgba(180,83,9,0.9)' : 'rgba(80,55,30,0.55)';
  const fill = active ? 'rgba(251,191,36,0.18)' : 'rgba(245,235,220,0.7)';
  return (
    <g
      onMouseEnter={onActivate}
      onClick={onActivate}
      className="cursor-pointer"
    >
      {/* Callout line from part to label */}
      <line x1={part.cx} y1={part.cy} x2={part.lx} y2={part.ly} stroke={stroke} strokeWidth={active ? 1.4 : 0.9} strokeLinecap="round" />
      {/* Component circle */}
      <circle cx={part.cx} cy={part.cy} r={active ? 26 : 22} fill={fill} stroke={stroke} strokeWidth={active ? 1.6 : 1} filter="url(#paperShadow)" />
      <circle cx={part.cx} cy={part.cy} r={active ? 6 : 4} fill={active ? 'rgba(180,83,9,0.9)' : 'rgba(80,55,30,0.55)'} />
      {/* Index pip on the part */}
      <text x={part.cx} y={part.cy + 38} textAnchor="middle" fontSize="9" className="font-mono" fill="rgba(60,40,20,0.55)" letterSpacing="1.5">
        {String(PARTS.findIndex((p) => p.id === part.id) + 1).padStart(2, '0')}
      </text>
      {/* Label */}
      <g transform={`translate(${part.lx}, ${part.ly})`}>
        <line
          x1={part.side === 'left' ? 0 : part.side === 'right' ? 0 : -30}
          y1={part.side === 'top' || part.side === 'bottom' ? 0 : 0}
          x2={part.side === 'left' ? -50 : part.side === 'right' ? 50 : 30}
          y2={0}
          stroke={stroke}
          strokeWidth={active ? 1.4 : 0.9}
          strokeLinecap="round"
        />
        <text
          x={part.side === 'left' ? -56 : part.side === 'right' ? 56 : 0}
          y={part.side === 'top' ? -8 : part.side === 'bottom' ? 16 : 4}
          textAnchor={part.side === 'left' ? 'end' : part.side === 'right' ? 'start' : 'middle'}
          fontSize="13"
          fontWeight={active ? 'bold' : 'normal'}
          fill={active ? 'rgba(40,25,10,0.95)' : 'rgba(60,40,20,0.75)'}
          className="font-display"
        >
          {part.name}
        </text>
        <text
          x={part.side === 'left' ? -56 : part.side === 'right' ? 56 : 0}
          y={part.side === 'top' ? -22 : part.side === 'bottom' ? 30 : 18}
          textAnchor={part.side === 'left' ? 'end' : part.side === 'right' ? 'start' : 'middle'}
          fontSize="9"
          fill="rgba(60,40,20,0.6)"
          className="font-mono"
          letterSpacing="2"
        >
          {part.role.toUpperCase()}
        </text>
      </g>
    </g>
  );
}

/* ============================== REG MARK ============================== */
function RegMark({ x, y, flipX, flipY }) {
  const sx = flipX ? -1 : 1;
  const sy = flipY ? -1 : 1;
  return (
    <g transform={`translate(${x}, ${y}) scale(${sx}, ${sy})`}>
      <line x1="0" y1="0" x2="14" y2="0" stroke="rgba(60,40,20,0.5)" strokeWidth="1" />
      <line x1="0" y1="0" x2="0" y2="14" stroke="rgba(60,40,20,0.5)" strokeWidth="1" />
    </g>
  );
}
