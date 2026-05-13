import { motion, useScroll, useTransform } from 'framer-motion';
import { useEffect, useMemo, useRef, useState } from 'react';
import {
  ClipboardList,
  Code2,
  Clock,
  FileX2,
  Check,
  AlertTriangle,
  ThumbsUp,
  X,
} from 'lucide-react';

const problems = [
  {
    icon: ClipboardList,
    title: 'Front-End Errors',
    description:
      'Almost 60 to 70% of registration-related denials come from eligibility and benefit errors, which AI verification tools can reduce in real time.',
    stat: '60–70%',
    statLabel: 'denials from intake errors',
    visualKey: 'form',
  },
  {
    icon: Code2,
    title: 'Manual Coding Mistakes',
    description:
      'Up to 80% of medical bills contain errors, so AI can dramatically reduce these errors through automated coding checks.',
    stat: '80%',
    statLabel: 'bills contain coding errors',
    visualKey: 'code',
  },
  {
    icon: Clock,
    title: 'Prior Authorization Delays',
    description:
      'Manual authorizations take significant staff hours each week, which RCM automation can reduce by up to 80%, freeing teams to focus on patient care.',
    stat: '−80%',
    statLabel: 'authorization turnaround',
    visualKey: 'queue',
  },
  {
    icon: FileX2,
    title: 'Claim Rejections',
    description:
      'Integrated AI RCM agents that scrub claims for payer rules can cut rejection rates by up to 18 to 50%, turning more claims into paid revenue faster.',
    stat: '18–50%',
    statLabel: 'lower rejection rates',
    visualKey: 'pills',
  },
];

export default function Problems() {
  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const [shift, setShift] = useState(1200);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start start', 'end end'],
  });

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
      style={{ height: `calc(100vh + ${shift}px)` }}
    >
      <div className="sticky top-0 h-screen flex flex-col justify-center overflow-hidden py-12 md:py-16">
        {/* Header */}
        <div className="container-prose text-center">
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="chip"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-300" />
            </span>
            The Problem
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 font-display text-[26px] leading-[36px] md:text-[34px] md:leading-[44px] font-bold tracking-tight text-gradient max-w-4xl mx-auto"
          >
            Why Do Medical Practices Need AI Agents for RCM Automation?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 text-slate-300 max-w-2xl mx-auto text-base md:text-lg"
          >
            Here's why your practice needs them:
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
            <div className="shrink-0 w-2 md:w-6 lg:w-10" aria-hidden="true" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function ProblemCard({ problem, index }) {
  const { icon: Icon, title, description, stat, statLabel, visualKey } = problem;
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="shrink-0 w-[88vw] sm:w-[78vw] md:w-[62vw] lg:w-[640px] rounded-3xl bg-ink-900/60 ring-1 ring-cyan-400/15 overflow-hidden relative shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)] gpu hover:ring-cyan-400/30 transition-colors"
    >
      <div className="pointer-events-none absolute -top-32 -left-32 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="relative grid md:grid-cols-[1fr_45%] min-h-[340px] md:min-h-[380px]">
        {/* Text */}
        <div className="p-6 md:p-8 flex flex-col">
          <div className="w-10 h-10 rounded-xl ring-1 ring-cyan-400/30 bg-cyan-500/10 grid place-items-center">
            <Icon className="w-5 h-5 text-cyan-300" strokeWidth={1.8} />
          </div>
          <h3 className="mt-5 font-display text-2xl md:text-[26px] font-bold text-white tracking-tight leading-[1.2]">
            {title}
          </h3>
          <p className="mt-3 text-slate-300/90 text-[14.5px] md:text-[15px] leading-relaxed">
            {description}
          </p>
          {/* Stat callout — anchors the bottom of the card */}
          <div className="mt-auto pt-5 border-t border-white/[0.06]">
            <div className="font-display font-bold text-[34px] md:text-[40px] text-gradient-cv tabular-nums tracking-tight leading-none">
              {stat}
            </div>
            <div className="mt-1.5 text-[11px] uppercase tracking-[0.16em] text-slate-500 font-mono">
              {statLabel}
            </div>
          </div>
        </div>

        {/* Visual */}
        <div className="relative overflow-hidden border-t md:border-t-0 md:border-l border-white/5 min-h-[200px] md:min-h-0">
          <Visual visualKey={visualKey} />
        </div>
      </div>
    </motion.article>
  );
}

function Visual({ visualKey }) {
  if (visualKey === 'form') return <FormVisual />;
  if (visualKey === 'code') return <CodeVisual />;
  if (visualKey === 'queue') return <QueueVisual />;
  if (visualKey === 'pills') return <PillsVisual />;
  return null;
}

/* ─── V1: Patient intake form with red X errors ─────────────────────── */
function FormVisual() {
  const fields = [
    { label: 'Member ID', value: 'BCBS-29841', valid: false },
    { label: 'Date of Birth', value: '1981-04-12', valid: true },
    { label: 'Payer Network', value: 'PPO · Tier 2', valid: false },
    { label: 'Group Number', value: '—', valid: false },
    { label: 'Subscriber', value: 'Self', valid: true },
    { label: 'Effective Date', value: '2024-01-01', valid: false },
  ];
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-rose-500/[0.06] to-transparent grid place-items-center p-5 md:p-6">
      <div className="w-full max-w-[260px] space-y-2">
        {fields.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: 0.08 * i }}
            className={`grid grid-cols-[1fr_auto] items-center gap-2 px-3 h-[42px] rounded-lg border text-[11px] font-mono ${
              f.valid
                ? 'border-emerald-400/20 bg-emerald-500/[0.04]'
                : 'border-rose-400/30 bg-rose-500/[0.06]'
            }`}
          >
            <div className="flex flex-col min-w-0">
              <span className="text-[9px] uppercase tracking-[0.12em] text-slate-500 leading-tight">{f.label}</span>
              <span className={`leading-tight truncate ${f.valid ? 'text-slate-200' : 'text-rose-200'}`}>{f.value}</span>
            </div>
            <div className={`w-5 h-5 rounded-full grid place-items-center ${
              f.valid ? 'bg-emerald-400/20 text-emerald-300' : 'bg-rose-400/20 text-rose-300'
            }`}>
              {f.valid ? <Check className="w-3 h-3" strokeWidth={3} /> : <X className="w-3 h-3" strokeWidth={3} />}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ─── V2: CPT/ICD code lines with strike-throughs ─────────────────────── */
function CodeVisual() {
  const lines = [
    { code: '99214', label: 'OFFICE VISIT', ok: true },
    { code: 'E11.9', label: 'DM TYPE II', ok: true },
    { code: '93000', label: 'EKG', ok: false, note: 'missing modifier' },
    { code: 'I10', label: 'HYPERTENSION', ok: true },
    { code: '36415', label: 'VENIPUNCTURE', ok: false, note: 'NCCI conflict' },
    { code: '99213-25', label: 'MOD MISMATCH', ok: false, note: 'invalid pairing' },
  ];
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-amber-500/[0.06] to-transparent grid place-items-center p-5 md:p-6">
      <div className="w-full font-mono text-[11px] space-y-2">
        {lines.map((l, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.35, delay: 0.06 * i }}
            className="grid grid-cols-[20px_72px_1fr_auto] items-center gap-2.5 h-6"
          >
            <span className="text-slate-600 text-[10px] tabular-nums text-right pr-0.5">
              {(i + 1).toString().padStart(2, '0')}
            </span>
            <span className={`font-bold tabular-nums ${l.ok ? 'text-cyan-300' : 'text-rose-300 line-through decoration-rose-400/70'}`}>
              {l.code}
            </span>
            <span className={`text-[10px] uppercase tracking-[0.1em] truncate ${l.ok ? 'text-slate-400' : 'text-rose-200/70'}`}>
              {l.label}
            </span>
            <span className={`text-[9px] px-1.5 py-0.5 rounded border whitespace-nowrap leading-tight ${
              l.ok
                ? 'text-transparent border-transparent select-none'
                : 'text-amber-300 bg-amber-400/10 border-amber-400/30'
            }`}>
              {l.note || 'ok'}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ─── V3: Pending authorization queue with growing timers ─────────────── */
function QueueVisual() {
  const items = [
    { id: 'PA-8841', payer: 'Aetna', age: '4d 12h', tone: 'critical' },
    { id: 'PA-7720', payer: 'BCBS-IL', age: '3d 06h', tone: 'critical' },
    { id: 'PA-5390', payer: 'United', age: '2d 18h', tone: 'warn' },
    { id: 'PA-4128', payer: 'Cigna', age: '1d 22h', tone: 'warn' },
    { id: 'PA-2987', payer: 'Humana', age: '12h 04m', tone: 'normal' },
  ];
  return (
    <div className="absolute inset-0 bg-gradient-to-br from-violet-500/[0.06] to-transparent grid place-items-center p-5 md:p-6">
      <div className="w-full space-y-2">
        <div className="grid grid-cols-[1fr_auto] items-center text-[9px] font-mono uppercase tracking-[0.18em] text-slate-500 pb-2 border-b border-white/5">
          <span>Pending Authorizations</span>
          <span className="text-amber-300">5 / 247 today</span>
        </div>
        {items.map((it, i) => (
          <motion.div
            key={it.id}
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.4, delay: 0.07 * i }}
            className="grid grid-cols-[14px_64px_1fr_auto] items-center gap-2.5 px-3 h-9 rounded-lg bg-ink-950/40 ring-1 ring-white/[0.05]"
          >
            <Clock
              className={`w-3.5 h-3.5 ${
                it.tone === 'critical' ? 'text-rose-300' : it.tone === 'warn' ? 'text-amber-300' : 'text-slate-400'
              }`}
              strokeWidth={2}
            />
            <span className="font-mono text-[11px] text-slate-300 tabular-nums">{it.id}</span>
            <span className="text-[10px] uppercase tracking-[0.1em] text-slate-500 truncate">{it.payer}</span>
            <span
              className={`font-mono text-[11px] tabular-nums text-right ${
                it.tone === 'critical'
                  ? 'text-rose-300'
                  : it.tone === 'warn'
                  ? 'text-amber-300'
                  : 'text-slate-400'
              }`}
            >
              {it.age}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ─── V4: Verdict pills (claim rejections) ─────────────────────────────── */
const verdictPills = [
  { label: 'Denied', tone: 'bad', top: '6%', left: '8%' },
  { label: 'Approved', tone: 'good', top: '8%', left: '54%' },
  { label: 'Edit', tone: 'warn', top: '24%', left: '24%' },
  { label: 'Denied', tone: 'bad', top: '26%', left: '62%' },
  { label: 'Denied', tone: 'bad', top: '42%', left: '12%' },
  { label: 'Edit', tone: 'warn', top: '44%', left: '52%' },
  { label: 'Approved', tone: 'good', top: '60%', left: '8%' },
  { label: 'Denied', tone: 'bad', top: '62%', left: '48%' },
  { label: 'Edit', tone: 'warn', top: '78%', left: '20%' },
  { label: 'Denied', tone: 'bad', top: '80%', left: '58%' },
];

function PillsVisual() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-rose-500/[0.08] to-transparent" />
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
