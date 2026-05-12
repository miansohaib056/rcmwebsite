import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';
import {
  ShieldAlert,
  Ban,
  Rocket,
  Check,
  AlertTriangle,
  ThumbsUp,
} from 'lucide-react';

const problems = [
  {
    icon: ShieldAlert,
    title: 'Hidden Denials',
    description:
      '62% of denials never get reworked. Manual A/R teams lose track of recoverable revenue, and small leaks compound into millions over a quarter.',
    visualKey: 'rain',
  },
  {
    icon: Ban,
    title: 'Probabilistic Coding',
    description:
      '32% of claims hit edits at submission. Static rule engines miss the payer-specific context that drives modern denials.',
    visualKey: 'pills',
  },
  {
    icon: Rocket,
    title: 'Payer Velocity',
    description:
      "Every payer rewrites its rules faster than your team can audit them. Spreadsheets can't keep up — your clean-claim rate quietly slips every month.",
    visualKey: 'bars',
  },
];

export default function Problems() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  // Start with a sensible default so the section has pinning runway on first paint.
  // Recalculated precisely once the track mounts.
  const [shift, setShift] = useState(1200);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

  // Measure the horizontal track so we know exactly how far to translate.
  useEffect(() => {
    const update = () => {
      if (!trackRef.current) return;
      const trackWidth = trackRef.current.scrollWidth;
      const visibleWidth = window.innerWidth;
      setShift(Math.max(400, trackWidth - visibleWidth));
    };
    update();
    window.addEventListener('resize', update);
    const ro = new ResizeObserver(update);
    if (trackRef.current) ro.observe(trackRef.current);
    return () => {
      window.removeEventListener('resize', update);
      ro.disconnect();
    };
  }, []);

  const x = useTransform(scrollYProgress, [0, 1], [0, -shift]);

  return (
    <section
      ref={sectionRef}
      className="relative"
      // Section height = one viewport (for the pinned content) + enough vertical scroll runway
      // to fully translate the horizontal track. Falls back to 100vh if shift hasn't measured yet.
      style={{ height: `calc(100vh + ${shift}px)` }}
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden py-12 md:py-16">
        {/* Header */}
        <div className="container-prose text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="font-display text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-4xl mx-auto leading-[1.1]"
          >
            Manual billing is{' '}
            <span className="text-gradient-cv">outpacing recovery</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 text-slate-300 max-w-2xl mx-auto text-base md:text-lg"
          >
            The revenue cycle is leaking — silently and structurally. Here are the three
            failure modes draining every provider today.
          </motion.p>
        </div>

        {/* Pinned horizontal track */}
        <div className="mt-10 md:mt-14 overflow-hidden">
          <motion.div
            ref={trackRef}
            style={{ x }}
            className="flex gap-5 md:gap-6 px-6 md:px-12 lg:px-20 will-change-transform gpu"
          >
            {problems.map((p, i) => (
              <ProblemCard key={p.title} problem={p} index={i} />
            ))}
            {/* Trailing spacer so the last card has matching right padding when fully exposed */}
            <div className="shrink-0 w-2 md:w-6 lg:w-10" aria-hidden="true" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ProblemCard({ problem, index }) {
  const { icon: Icon, title, description, visualKey } = problem;
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="shrink-0 w-[88vw] sm:w-[78vw] md:w-[62vw] lg:w-[640px] rounded-3xl bg-ink-900/60 ring-1 ring-cyan-400/15 overflow-hidden relative shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)] gpu"
    >
      {/* subtle inner glow */}
      <div className="pointer-events-none absolute -top-32 -left-32 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative grid md:grid-cols-[1fr_45%] min-h-[320px] md:min-h-[360px]">
        {/* Text */}
        <div className="p-6 md:p-8 flex flex-col justify-center">
          <div className="w-10 h-10 rounded-xl ring-1 ring-cyan-400/30 bg-cyan-500/10 grid place-items-center">
            <Icon className="w-5 h-5 text-cyan-300" />
          </div>
          <h3 className="mt-5 font-display text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight">
            {title}
          </h3>
          <p className="mt-3 text-slate-300/90 text-[15px] md:text-base leading-relaxed">
            {description}
          </p>
        </div>

        {/* Visual */}
        <div className="relative overflow-hidden border-t md:border-t-0 md:border-l border-white/5 min-h-[180px] md:min-h-0">
          <Visual visualKey={visualKey} />
        </div>
      </div>
    </motion.article>
  );
}

function Visual({ visualKey }) {
  if (visualKey === 'rain') return <RainVisual />;
  if (visualKey === 'pills') return <PillsVisual />;
  if (visualKey === 'bars') return <BarsVisual />;
  return null;
}

/* ─── Visual 1: Matrix-style code rain (denials hidden in the noise) ──────── */
function RainVisual() {
  const grid = useMemo(() => {
    const rows = 18;
    const cols = 22;
    return Array.from({ length: rows }, () =>
      Array.from({ length: cols }, () => {
        const r = Math.random();
        if (r < 0.18) return '0';
        if (r < 0.32) return '1';
        if (r < 0.48) return String.fromCharCode(0x10a0 + Math.floor(Math.random() * 80));
        return ' ';
      }).join(''),
    );
  }, []);

  return (
    <div className="absolute inset-0 grid place-items-center bg-ink-950/30">
      <pre className="font-mono text-[10px] leading-[14px] text-cyan-400/30 select-none whitespace-pre m-0">
        {grid.join('\n')}
      </pre>
      <div className="absolute inset-0 bg-gradient-to-r from-ink-900/80 via-transparent to-ink-900/40 pointer-events-none" />
    </div>
  );
}

/* ─── Visual 2: Floating verdict pills (some good, some bad) ──────────────── */
const verdictPills = [
  { label: 'Denied', tone: 'bad', top: '6%', left: '8%' },
  { label: 'Approved', tone: 'good', top: '8%', left: '54%' },
  { label: 'Edit', tone: 'warn', top: '24%', left: '24%' },
  { label: 'Approved', tone: 'good', top: '26%', left: '62%' },
  { label: 'Denied', tone: 'bad', top: '42%', left: '12%' },
  { label: 'Edit', tone: 'warn', top: '44%', left: '52%' },
  { label: 'Approved', tone: 'good', top: '60%', left: '8%' },
  { label: 'Denied', tone: 'bad', top: '62%', left: '48%' },
  { label: 'Approved', tone: 'good', top: '78%', left: '20%' },
  { label: 'Edit', tone: 'warn', top: '80%', left: '58%' },
];

function PillsVisual() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent" />
      {verdictPills.map((p, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
          style={{ top: p.top, left: p.left }}
          className={`absolute inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-medium backdrop-blur-sm gpu ${
            p.tone === 'good'
              ? 'bg-emerald-500/12 text-emerald-200 ring-1 ring-emerald-400/30'
              : p.tone === 'bad'
              ? 'bg-rose-500/15 text-rose-200 ring-1 ring-rose-400/30'
              : 'bg-amber-500/12 text-amber-200 ring-1 ring-amber-400/30'
          }`}
        >
          {p.tone === 'good' ? (
            <ThumbsUp className="w-3 h-3" />
          ) : p.tone === 'bad' ? (
            <AlertTriangle className="w-3 h-3" />
          ) : (
            <Check className="w-3 h-3" />
          )}
          {p.label}
        </motion.div>
      ))}
    </div>
  );
}

/* ─── Visual 3: Falling/rising bars representing rule drift ──────────────── */
function BarsVisual() {
  const bars = [62, 48, 71, 35, 58, 80, 42, 66, 55, 73, 38, 64];
  return (
    <div className="absolute inset-0 grid place-items-end pb-6 px-5">
      <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-transparent" />
      <div className="relative flex items-end gap-1.5 w-full h-[70%]">
        {bars.map((h, i) => (
          <motion.div
            key={i}
            initial={{ height: 0, opacity: 0 }}
            whileInView={{ height: `${h}%`, opacity: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="flex-1 rounded-t-md bg-gradient-to-t from-violet-500/50 via-cyan-400/40 to-cyan-300/70 gpu"
          />
        ))}
      </div>
      <div className="absolute bottom-3 left-5 right-5 flex justify-between text-[10px] font-mono text-slate-500 uppercase tracking-wider">
        <span>Q1</span>
        <span>Q2</span>
        <span>Q3</span>
        <span>Q4</span>
      </div>
    </div>
  );
}
