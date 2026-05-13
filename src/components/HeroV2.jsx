import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheck,
  FileCheck2,
  Code2,
  Search,
  Zap,
  Coins,
  CircleDollarSign,
  ArrowRight,
} from 'lucide-react';

/* ============================== STATIONS ============================== */
const STATIONS = [
  { name: 'ELIXA', role: 'Eligibility', icon: ShieldCheck, stamp: 'ELIGIBLE', stampColor: 'emerald' },
  { name: 'PRIA', role: 'Prior Auth', icon: FileCheck2, stamp: 'AUTH #', stampColor: 'emerald' },
  { name: 'CODIN', role: 'Coding', icon: Code2, stamp: '99214 + E11.9', stampColor: 'cyan' },
  { name: 'CLAIR', role: 'Claims', icon: Search, stamp: 'SCRUBBED', stampColor: 'cyan' },
  { name: 'DEXA', role: 'Denials', icon: Zap, stamp: 'NO DENIAL', stampColor: 'amber' },
  { name: 'ARIA', role: 'A/R', icon: Coins, stamp: 'CLEARED', stampColor: 'amber' },
  { name: 'REMITA', role: 'Posting', icon: CircleDollarSign, stamp: 'PAID', stampColor: 'lime' },
];

/* ============================== CLAIM SEEDS ============================== */
const CLAIM_SEEDS = [
  { id: 'PT-83491', payer: 'BCBS-IL', amount: '$1,247' },
  { id: 'PT-92210', payer: 'Aetna', amount: '$3,402' },
  { id: 'PT-77185', payer: 'United', amount: '$847' },
  { id: 'PT-65902', payer: 'Cigna', amount: '$2,180' },
  { id: 'PT-88341', payer: 'Humana', amount: '$520' },
  { id: 'PT-71028', payer: 'Medicare', amount: '$1,995' },
  { id: 'PT-44761', payer: 'BCBS-TX', amount: '$612' },
];

export default function HeroV2() {
  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-28 pb-16 md:pt-32 md:pb-20"
      style={{ backgroundColor: '#05060d' }}
    >
      {/* Ambient atmosphere */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/3 w-[900px] h-[600px] rounded-full opacity-[0.30] blur-[140px]"
        style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.55) 0%, transparent 70%)' }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 -right-20 w-[700px] h-[500px] rounded-full opacity-[0.18] blur-[140px]"
        style={{ background: 'radial-gradient(circle, rgba(34,211,238,0.6) 0%, transparent 70%)' }}
      />
      {/* Thin grid */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-30"
        style={{
          backgroundImage: 'linear-gradient(rgba(148,163,184,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.06) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse 90% 70% at 50% 40%, black 30%, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 70% at 50% 40%, black 30%, transparent 80%)',
        }}
      />

      <div className="container-prose relative z-10">
        {/* ============ COPY BLOCK ============ */}
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.2, 0.7, 0.2, 1] }}
            className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full border border-emerald-400/30 bg-emerald-400/[0.06] backdrop-blur-sm"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            <span className="text-[11.5px] font-mono tracking-[0.15em] uppercase text-emerald-300">
              Live Operations
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.2, 0.7, 0.2, 1] }}
            className="mt-7 font-display font-bold text-white leading-[1.02] tracking-[-0.025em]"
            style={{ fontSize: 'clamp(40px, 5.6vw, 76px)' }}
          >
            Seven agents.<br />
            One revenue cycle.<br />
            <span className="text-emerald-400">Zero touches.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.22, ease: [0.2, 0.7, 0.2, 1] }}
            className="mt-6 text-[17px] md:text-[18px] text-slate-300 leading-[1.55] max-w-2xl mx-auto"
          >
            Every claim flows through seven autonomous agents — verified, coded, scrubbed,
            and posted before your staff opens their inbox. Watch one move below.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.34, ease: [0.2, 0.7, 0.2, 1] }}
            className="mt-8 flex flex-wrap items-center justify-center gap-3"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-6 h-12 rounded-full bg-emerald-400 hover:bg-emerald-300 text-emerald-950 font-semibold tracking-tight text-[15px] transition-all duration-200 hover:-translate-y-px hover:shadow-[0_12px_30px_-10px_rgba(16,185,129,0.6)]"
            >
              Book a demo
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#agents"
              className="inline-flex items-center gap-2 px-6 h-12 rounded-full border border-white/15 text-slate-200 hover:text-white hover:border-white/30 hover:bg-white/[0.03] font-medium tracking-tight text-[15px] transition-all duration-200"
            >
              See an agent run
            </a>
          </motion.div>
        </div>

        {/* ============ THE CONVEYOR ============ */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
          className="mt-16 md:mt-20"
        >
          <Conveyor />
        </motion.div>
      </div>
    </section>
  );
}

/* ============================== CONVEYOR ============================== */
function Conveyor() {
  const trackRef = useRef(null);
  const [trackWidth, setTrackWidth] = useState(1200);
  const [activeStation, setActiveStation] = useState(0);

  // Measure track width for the moving claim animations
  useEffect(() => {
    const measure = () => {
      if (trackRef.current) setTrackWidth(trackRef.current.offsetWidth);
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  // Rotate which station is "currently processing" — visual pulse only
  useEffect(() => {
    const i = setInterval(() => setActiveStation((s) => (s + 1) % STATIONS.length), 1800);
    return () => clearInterval(i);
  }, []);

  return (
    <div
      className="relative rounded-3xl border border-white/[0.08] overflow-hidden"
      style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.025) 0%, rgba(255,255,255,0.01) 100%)' }}
    >
      {/* Top bar — operations heading */}
      <div className="flex items-center justify-between px-5 md:px-7 py-3.5 border-b border-white/[0.06] bg-black/30">
        <div className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-400/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-400/70" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/70" />
          </div>
          <span className="text-[11px] font-mono tracking-[0.18em] uppercase text-slate-400 hidden md:inline">
            rcm.console &middot; live conveyor
          </span>
        </div>
        <div className="flex items-center gap-2 text-[11px] font-mono tracking-[0.12em] uppercase text-emerald-400">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-70" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
          </span>
          Processing
        </div>
      </div>

      {/* Conveyor body */}
      <div ref={trackRef} className="relative h-[280px] md:h-[320px]">
        {/* Conveyor rail (the thin line claims travel along) */}
        <div className="absolute left-0 right-0 top-[58%] h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        {/* Tick marks under each station to suggest the belt */}
        <div className="absolute left-0 right-0 top-[58%] h-2 -translate-y-1/2 flex items-center px-[4%]">
          {Array.from({ length: 28 }).map((_, i) => (
            <span key={i} className="flex-1 flex justify-center">
              <span className="w-[1px] h-2 bg-white/10" />
            </span>
          ))}
        </div>

        {/* Stations row */}
        <div className="absolute inset-x-4 md:inset-x-7 top-0 grid grid-cols-7">
          {STATIONS.map((s, i) => (
            <Station key={s.name} station={s} index={i} active={i === activeStation} />
          ))}
        </div>

        {/* Moving claim cards */}
        <div className="absolute inset-0 pointer-events-none">
          {CLAIM_SEEDS.map((c, i) => (
            <ClaimCard key={c.id} seed={c} indexOffset={i} totalWidth={trackWidth} />
          ))}
        </div>
      </div>

      {/* Bottom strip — outcome counter */}
      <div className="grid grid-cols-3 divide-x divide-white/[0.06] border-t border-white/[0.06] bg-black/20">
        <BottomCell label="Claims this hour" value="847" delta="↑ live" tone="emerald" />
        <BottomCell label="Avg cycle time" value="4.2s" delta="end-to-end" tone="cyan" />
        <BottomCell label="Clean pass rate" value="99.4%" delta="↑ +0.6 vs 30d" tone="emerald" />
      </div>
    </div>
  );
}

/* ============================== STATION ============================== */
function Station({ station, index, active }) {
  const Icon = station.icon;
  return (
    <div className="flex flex-col items-center pt-5 md:pt-6 relative">
      {/* Pip number */}
      <div className="text-[9.5px] font-mono tracking-[0.16em] text-slate-500 mb-1.5">
        0{index + 1}
      </div>
      {/* Icon disc */}
      <div
        className={`relative w-9 h-9 md:w-11 md:h-11 rounded-xl grid place-items-center transition-all duration-500 ${
          active
            ? 'bg-emerald-400 text-emerald-950 shadow-[0_0_30px_-2px_rgba(16,185,129,0.6)] scale-105'
            : 'bg-white/[0.04] text-slate-400 border border-white/[0.08]'
        }`}
      >
        <Icon className="w-4 h-4 md:w-5 md:h-5" strokeWidth={active ? 2.5 : 1.8} />
        {active && (
          <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        )}
      </div>
      {/* Name */}
      <div className="mt-2 text-[11px] md:text-[12.5px] font-display font-bold text-white tracking-tight">
        {station.name}
      </div>
      <div className="text-[9.5px] md:text-[10.5px] text-slate-500 tracking-tight">
        {station.role}
      </div>

      {/* Vertical drop line down to the conveyor rail */}
      <div className="absolute top-[78px] md:top-[90px] left-1/2 -translate-x-1/2 w-px h-[14px] md:h-[18px] bg-gradient-to-b from-white/15 to-transparent" />
    </div>
  );
}

/* ============================== CLAIM CARD ============================== */
function ClaimCard({ seed, indexOffset, totalWidth }) {
  const [stageIdx, setStageIdx] = useState(-1);
  const stationCount = STATIONS.length;
  const cycleDuration = 14; // seconds for a full trip across
  const delay = (indexOffset * cycleDuration) / stationCount; // staggered offsets

  // Track which station this card has passed for state changes
  useEffect(() => {
    let raf;
    const start = performance.now() - delay * 1000;
    const tick = () => {
      const elapsed = ((performance.now() - start) / 1000) % cycleDuration;
      const progress = elapsed / cycleDuration;
      // station boundaries — each station occupies a slice
      const idx = Math.min(stationCount - 1, Math.floor(progress * stationCount));
      setStageIdx(idx);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [delay, cycleDuration, stationCount]);

  const current = STATIONS[Math.max(0, stageIdx)];
  const isFinal = stageIdx >= stationCount - 1;
  const isEarly = stageIdx < 2;

  // State tone — claim card shifts red→amber→cyan→green as it progresses
  const tone =
    stageIdx < 0
      ? 'border-white/10 bg-white/[0.03]'
      : isEarly
      ? 'border-rose-400/40 bg-rose-400/[0.06]'
      : isFinal
      ? 'border-emerald-400/50 bg-emerald-400/[0.08] shadow-[0_0_24px_-4px_rgba(16,185,129,0.4)]'
      : stageIdx >= 4
      ? 'border-amber-400/40 bg-amber-400/[0.06]'
      : 'border-cyan-400/40 bg-cyan-400/[0.05]';

  const stampTone =
    isFinal
      ? 'text-emerald-300 border-emerald-400/50 bg-emerald-400/10'
      : stageIdx >= 4
      ? 'text-amber-300 border-amber-400/40 bg-amber-400/10'
      : stageIdx >= 2
      ? 'text-cyan-300 border-cyan-400/40 bg-cyan-400/10'
      : 'text-rose-300 border-rose-400/40 bg-rose-400/10';

  return (
    <div
      className={`absolute top-[58%] -translate-y-1/2 rounded-xl border px-3.5 py-2.5 backdrop-blur-md transition-colors duration-500 ${tone}`}
      style={{
        width: 160,
        animation: `conveyorMove ${cycleDuration}s linear infinite`,
        animationDelay: `-${delay}s`,
        willChange: 'transform',
      }}
    >
      <div className="flex items-center justify-between mb-1">
        <span className="text-[10px] font-mono text-slate-300 tracking-tight">{seed.id}</span>
        <span className={`text-[9px] font-mono px-1.5 py-0.5 rounded border ${stampTone} tracking-[0.06em] uppercase`}>
          {isFinal ? 'PAID' : current?.stamp?.split(' ')[0] || 'NEW'}
        </span>
      </div>
      <div className="flex items-baseline justify-between">
        <span className={`font-display font-bold text-[15px] tabular-nums ${isFinal ? 'text-emerald-300' : 'text-white'}`}>
          {seed.amount}
        </span>
        <span className="text-[10px] text-slate-500 tracking-tight">{seed.payer}</span>
      </div>
      <div className="mt-1.5 h-[3px] rounded-full bg-white/[0.06] overflow-hidden">
        <div
          className={`h-full rounded-full transition-all duration-500 ${
            isFinal ? 'bg-emerald-400' : stageIdx >= 4 ? 'bg-amber-400' : stageIdx >= 2 ? 'bg-cyan-400' : 'bg-rose-400'
          }`}
          style={{ width: `${((stageIdx + 1) / stationCount) * 100}%` }}
        />
      </div>
    </div>
  );
}

/* ============================== BOTTOM CELL ============================== */
function BottomCell({ label, value, delta, tone = 'emerald' }) {
  const toneClass = tone === 'emerald' ? 'text-emerald-400' : tone === 'cyan' ? 'text-cyan-400' : 'text-slate-400';
  return (
    <div className="px-5 md:px-7 py-4 md:py-5">
      <div className="text-[10px] font-mono tracking-[0.2em] uppercase text-slate-500 mb-1.5">{label}</div>
      <div className="flex items-baseline gap-2">
        <span className="font-display font-bold text-xl md:text-2xl text-white tabular-nums">{value}</span>
        <span className={`text-[10.5px] font-mono uppercase tracking-[0.1em] ${toneClass}`}>{delta}</span>
      </div>
    </div>
  );
}
