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
} from 'lucide-react';

const STATIONS = [
  { name: 'ELIXA', role: 'Eligibility', icon: ShieldCheck, stamp: 'ELIGIBLE' },
  { name: 'PRIA', role: 'Prior Auth', icon: FileCheck2, stamp: 'AUTH' },
  { name: 'CODIN', role: 'Coding', icon: Code2, stamp: '99214' },
  { name: 'CLAIR', role: 'Claims', icon: Search, stamp: 'SCRUBBED' },
  { name: 'DEXA', role: 'Denials', icon: Zap, stamp: 'NO' },
  { name: 'ARIA', role: 'A/R', icon: Coins, stamp: 'CLEARED' },
  { name: 'REMITA', role: 'Posting', icon: CircleDollarSign, stamp: 'PAID' },
];

const CLAIM_SEEDS = [
  { id: 'PT-83491', payer: 'BCBS-IL', amount: '$1,247' },
  { id: 'PT-92210', payer: 'Aetna', amount: '$3,402' },
  { id: 'PT-77185', payer: 'United', amount: '$847' },
  { id: 'PT-65902', payer: 'Cigna', amount: '$2,180' },
  { id: 'PT-88341', payer: 'Humana', amount: '$520' },
  { id: 'PT-71028', payer: 'Medicare', amount: '$1,995' },
  { id: 'PT-44761', payer: 'BCBS-TX', amount: '$612' },
];

export default function ConveyorSection() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] rounded-full bg-emerald-500/[0.05] blur-[100px]" />

      <div className="container-prose relative">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
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
            See it in action
          </motion.span>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="mt-5 font-display text-[26px] leading-[36px] md:text-[34px] md:leading-[44px] font-bold tracking-tight text-gradient"
          >
            Still Stuck Chasing Payments and<br className="hidden md:block" /> Fixing Rejected Claims?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-5 text-slate-300 text-base md:text-lg leading-relaxed"
          >
            Let RCM Automation take over your billing and turn delays into dependable revenue.
          </motion.p>
        </div>

        {/* Conveyor */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 1, delay: 0.3, ease: [0.2, 0.7, 0.2, 1] }}
          className="mt-12 md:mt-16"
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

  useEffect(() => {
    const measure = () => {
      if (trackRef.current) setTrackWidth(trackRef.current.offsetWidth);
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  useEffect(() => {
    const i = setInterval(() => setActiveStation((s) => (s + 1) % STATIONS.length), 1800);
    return () => clearInterval(i);
  }, []);

  return (
    <div
      className="relative rounded-3xl border border-white/[0.08] overflow-hidden"
      style={{ background: 'linear-gradient(180deg, rgba(255,255,255,0.025) 0%, rgba(255,255,255,0.01) 100%)' }}
    >
      {/* Top bar */}
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
      <div ref={trackRef} className="relative h-[230px] sm:h-[260px] md:h-[290px]">
        <div className="absolute left-0 right-0 top-[68%] h-px bg-gradient-to-r from-transparent via-white/15 to-transparent" />
        <div className="absolute left-0 right-0 top-[68%] h-2 -translate-y-1/2 flex items-center px-[4%]">
          {Array.from({ length: 28 }).map((_, i) => (
            <span key={i} className="flex-1 flex justify-center">
              <span className="w-[1px] h-2 bg-white/10" />
            </span>
          ))}
        </div>

        <div className="absolute inset-x-2 sm:inset-x-4 md:inset-x-7 top-0 grid grid-cols-7">
          {STATIONS.map((s, i) => (
            <Station key={s.name} station={s} index={i} active={i === activeStation} />
          ))}
        </div>

        <div className="absolute inset-0 pointer-events-none">
          {CLAIM_SEEDS.map((c, i) => (
            <ClaimCard key={c.id} seed={c} indexOffset={i} totalWidth={trackWidth} />
          ))}
        </div>
      </div>

      {/* Bottom strip */}
      <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/[0.06] border-t border-white/[0.06] bg-black/20">
        <BottomCell label="Claims this hour" value="847" delta="↑ live" tone="emerald" />
        <BottomCell label="Avg cycle time" value="4.2s" delta="end-to-end" tone="cyan" />
        <BottomCell label="Clean pass rate" value="99.4%" delta="↑ +0.6 vs 30d" tone="emerald" />
      </div>
    </div>
  );
}

function Station({ station, index, active }) {
  const Icon = station.icon;
  return (
    <div className="flex flex-col items-center pt-4 md:pt-6 relative px-0.5">
      <div className="hidden sm:block text-[9.5px] font-mono tracking-[0.16em] text-slate-500 mb-1.5">0{index + 1}</div>
      <div
        className={`relative w-8 h-8 sm:w-9 sm:h-9 md:w-11 md:h-11 rounded-lg sm:rounded-xl grid place-items-center transition-all duration-500 ${
          active
            ? 'bg-emerald-400 text-emerald-950 shadow-[0_0_30px_-2px_rgba(16,185,129,0.6)] scale-105'
            : 'bg-white/[0.04] text-slate-400 border border-white/[0.08]'
        }`}
      >
        <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" strokeWidth={active ? 2.5 : 1.8} />
        {active && (
          <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
        )}
      </div>
      <div className="mt-1.5 sm:mt-2 text-[10px] sm:text-[11px] md:text-[12.5px] font-display font-bold text-white tracking-tight text-center leading-tight">{station.name}</div>
      <div className="hidden sm:block text-[9.5px] md:text-[10.5px] text-slate-500 tracking-tight text-center leading-tight">{station.role}</div>
      <div className="absolute top-[60px] sm:top-[78px] md:top-[90px] left-1/2 -translate-x-1/2 w-px h-[14px] md:h-[18px] bg-gradient-to-b from-white/15 to-transparent" />
    </div>
  );
}

function ClaimCard({ seed, indexOffset, totalWidth }) {
  const [stageIdx, setStageIdx] = useState(-1);
  const [cardWidth, setCardWidth] = useState(160);
  const stationCount = STATIONS.length;
  const cycleDuration = 14;
  const delay = (indexOffset * cycleDuration) / stationCount;

  // Responsive card width: 130px on mobile, 160px on tablet+
  useEffect(() => {
    const update = () => setCardWidth(window.innerWidth < 640 ? 130 : 160);
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  useEffect(() => {
    let raf;
    const start = performance.now() - delay * 1000;
    const tick = () => {
      const elapsed = ((performance.now() - start) / 1000) % cycleDuration;
      const progress = elapsed / cycleDuration;
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

  const stampTone = isFinal
    ? 'text-emerald-300 border-emerald-400/50 bg-emerald-400/10'
    : stageIdx >= 4
    ? 'text-amber-300 border-amber-400/40 bg-amber-400/10'
    : stageIdx >= 2
    ? 'text-cyan-300 border-cyan-400/40 bg-cyan-400/10'
    : 'text-rose-300 border-rose-400/40 bg-rose-400/10';

  return (
    <div
      className={`absolute top-[68%] -translate-y-1/2 rounded-xl border px-2.5 sm:px-3.5 py-2 sm:py-2.5 backdrop-blur-md transition-colors duration-500 ${tone}`}
      style={{
        width: cardWidth,
        animation: `conveyorMove ${cycleDuration}s linear infinite`,
        animationDelay: `-${delay}s`,
        willChange: 'transform',
        // Travel from off-screen-left of conveyor to off-screen-right of conveyor.
        // Using the measured trackWidth keeps cards inside the conveyor at all viewport sizes.
        '--conveyor-start': `${-cardWidth - 20}px`,
        '--conveyor-end': `${totalWidth + 20}px`,
      }}
    >
      <div className="flex items-center justify-between gap-1 mb-1">
        <span className="text-[9px] sm:text-[10px] font-mono text-slate-300 tracking-tight truncate">{seed.id}</span>
        <span className={`text-[8px] sm:text-[9px] font-mono px-1 sm:px-1.5 py-0.5 rounded border ${stampTone} tracking-[0.06em] uppercase shrink-0`}>
          {isFinal ? 'PAID' : current?.stamp?.split(' ')[0] || 'NEW'}
        </span>
      </div>
      <div className="flex items-baseline justify-between gap-1">
        <span className={`font-display font-bold text-[13px] sm:text-[15px] tabular-nums ${isFinal ? 'text-emerald-300' : 'text-white'}`}>
          {seed.amount}
        </span>
        <span className="text-[9px] sm:text-[10px] text-slate-500 tracking-tight truncate">{seed.payer}</span>
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
