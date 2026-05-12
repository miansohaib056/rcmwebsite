import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ShieldCheck, CheckCircle2, Activity, Sparkles, Zap, Check, DollarSign, Search, Send, CircleDot } from 'lucide-react';
import CircuitBackground from './CircuitBackground';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 },
  }),
};

export default function Hero() {
  return (
    <section
      id="top"
      className="relative isolate min-h-[92svh] flex items-center pt-24 pb-10 md:pt-28 md:pb-16 overflow-hidden"
    >
      {/* Background layers */}
      <CircuitBackground />
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-hero-glow blur-2xl" />
      <div className="pointer-events-none absolute top-1/3 -left-32 w-[420px] h-[420px] rounded-full bg-cyan-500/15 blur-[90px]" />
      <div className="pointer-events-none absolute bottom-0 -right-24 w-[480px] h-[480px] rounded-full bg-violet-500/15 blur-[90px]" />

      <div className="container-prose relative z-10 grid lg:grid-cols-12 gap-14 items-center">
        {/* Copy */}
        <div className="lg:col-span-7 text-center lg:text-left">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={0}
            className="inline-flex items-center gap-2 chip"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-300" />
            </span>
            HIPAA-compliant · Live AI agents
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={1}
            className="mt-6 font-display text-[40px] leading-[1.2] font-bold tracking-tight text-white"
          >
            RCM Automation with Advanced AI Agents{' '}
            <span className="font-light text-slate-500/70 mx-1">|</span>{' '}
            <span className="text-gradient-cv">Secure 99% Clean Claims</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={2}
            className="mt-7 text-lg md:text-xl text-slate-300/90 max-w-2xl lg:mx-0 mx-auto"
          >
            Replace manual billing with a fleet of AI agents that automate eligibility, coding,
            prior authorizations, and denial follow-ups — capturing up to{' '}
            <span className="text-white font-semibold">20% more earned revenue</span>.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-9 flex flex-wrap items-center gap-3 lg:justify-start justify-center"
          >
            <a href="#contact" className="btn-primary group">
              Book Your Free Consultation
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#agents" className="btn-ghost group">
              Meet the AI Agents
              <Sparkles className="w-4 h-4 text-cyan-300 transition-transform group-hover:rotate-12" />
            </a>
          </motion.div>

          <motion.ul
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-10 grid sm:grid-cols-3 gap-3 max-w-2xl lg:mx-0 mx-auto"
          >
            {[
              { icon: CheckCircle2, label: 'Instant Coding Validation' },
              { icon: Zap, label: 'Faster Payer Approvals' },
              { icon: ShieldCheck, label: 'Smart Denial Prioritization' },
            ].map((f) => (
              <li
                key={f.label}
                className="glass rounded-2xl px-4 py-3 flex items-center gap-3 text-sm"
              >
                <f.icon className="w-4 h-4 text-cyan-300 shrink-0" />
                <span className="text-slate-200">{f.label}</span>
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Visual */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="lg:col-span-5 relative"
        >
          <HeroDashboard />
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-slate-500 text-xs uppercase tracking-[0.2em]"
      >
        Scroll
        <span className="w-px h-10 bg-gradient-to-b from-cyan-400/60 to-transparent animate-pulse-slow" />
      </motion.div>
    </section>
  );
}

const STAGES = [
  { label: 'Eligibility', icon: CheckCircle2 },
  { label: 'Coding', icon: CheckCircle2 },
  { label: 'Scrub', icon: Search },
  { label: 'Submit', icon: Send },
  { label: 'Paid', icon: DollarSign },
];

const ACTIVITY_ENTRIES = [
  { cls: 'text-cyan-400 bg-cyan-400/10', tag: 'ELIG', text: 'Eligibility verified', code: 'BCBS-IL', desc: 'copay $30', time: '12s ago' },
  { cls: 'text-cyan-400 bg-cyan-400/10', tag: 'COD', text: 'CODIN', code: '99214 + E11.9', desc: 'proposed', time: '8s ago' },
  { cls: 'text-cyan-400 bg-cyan-400/10', tag: 'COD', text: 'CODIN', code: '-25', desc: 'modifier applied', time: '7s ago' },
  { cls: 'text-amber-400 bg-amber-400/10', tag: 'SCR', text: 'Scrubber', code: 'passed', desc: 'NCCI pair check', time: '4s ago' },
  { cls: 'text-amber-400 bg-amber-400/10', tag: 'SCR', text: 'Scrubber', code: 'BCBS-IL ok', desc: 'payer LCD', time: '3s ago' },
  { cls: 'text-amber-400 bg-amber-400/10', tag: 'SCR', text: 'Scrubber', code: '96 / 100', desc: 'risk score', time: '2s ago' },
  { cls: 'text-rose-400 bg-rose-400/10', tag: 'CLA', text: 'CLAIR', code: 'CARC-197', desc: 'queuing appeal', time: 'now' },
];

function HeroDashboard() {
  const [activeStage, setActiveStage] = useState(2);
  const [visibleEntries, setVisibleEntries] = useState([]);
  const [riskScore, setRiskScore] = useState(96);
  const cursorRef = useRef(5);

  useEffect(() => {
    const initial = ACTIVITY_ENTRIES.slice(0, 5);
    initial.forEach((entry, i) => {
      setTimeout(() => {
        setVisibleEntries((prev) => [...prev.slice(-4), { ...entry, id: i }]);
      }, 1400 + i * 220);
    });

    const interval = setInterval(() => {
      const entry = ACTIVITY_ENTRIES[cursorRef.current % ACTIVITY_ENTRIES.length];
      setVisibleEntries((prev) => [...prev.slice(-4), { ...entry, time: 'now', id: Date.now() }]);
      cursorRef.current++;
    }, 3200);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveStage((prev) => {
        if (prev < STAGES.length - 1) return prev + 1;
        setTimeout(() => setActiveStage(2), 1800);
        return prev;
      });
    }, 2800);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setRiskScore(96 - Math.floor(Math.random() * 3));
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  const progressWidth = `${(activeStage / (STAGES.length - 1)) * 100}%`;

  return (
    <div className="relative" style={{ minHeight: 520 }}>
      {/* Decorative grid behind */}
      <div
        className="absolute -inset-10 opacity-40 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
        }}
      />

      {/* Floating: Risk score card */}
      <motion.div
        initial={{ opacity: 0, y: 14, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, delay: 1.1, ease: [0.2, 0.7, 0.2, 1] }}
        className="absolute -top-2 -right-4 z-10 glass rounded-xl p-3.5 shadow-lg border border-white/10 w-[168px]"
      >
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] uppercase tracking-[0.08em] text-slate-400 font-medium">Risk score</span>
          <span className="text-[9px] font-mono text-amber-400 bg-amber-400/10 px-1.5 py-0.5 rounded">Scrubber</span>
        </div>
        <div className="flex items-baseline gap-1 mb-2">
          <span className="text-3xl font-semibold text-white tracking-tight">{riskScore}</span>
          <span className="text-xs font-mono text-slate-500">/ 100</span>
        </div>
        <div className="h-[5px] bg-white/5 rounded-full overflow-hidden mb-2">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '96%' }}
            transition={{ duration: 2.4, delay: 1.6, ease: [0.2, 0.7, 0.2, 1] }}
            className="h-full bg-gradient-to-r from-cyan-400 to-cyan-500 rounded-full"
          />
        </div>
        <div className="flex items-center gap-1.5 text-[11px] text-cyan-400">
          <span className="w-[5px] h-[5px] rounded-full bg-cyan-400" />
          Clean — auto-submit
        </div>
      </motion.div>

      {/* Floating: Code set card */}
      <motion.div
        initial={{ opacity: 0, y: 14, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, delay: 1.3, ease: [0.2, 0.7, 0.2, 1] }}
        className="absolute bottom-6 -left-7 z-10 glass rounded-xl p-3.5 shadow-lg border border-white/10 w-[200px]"
      >
        <div className="flex items-center justify-between mb-2.5">
          <span className="text-[10px] uppercase tracking-[0.08em] text-slate-400 font-medium">Code set</span>
          <span className="text-[9px] font-mono text-cyan-400 bg-cyan-400/10 px-1.5 py-0.5 rounded">CODIN</span>
        </div>
        <div className="flex flex-col gap-[7px]">
          {[
            { k: 'CPT', v: '99214' },
            { k: 'ICD-10', v: 'E11.9' },
            { k: 'ICD-10', v: 'I10' },
            { k: 'Modifier', v: '-25' },
          ].map((row) => (
            <div key={row.v} className="flex justify-between items-center font-mono text-[11.5px]">
              <span className="text-slate-500">{row.k}</span>
              <span className="text-white font-medium flex items-center gap-1.5">
                {row.v}
                <span className="w-3 h-3 rounded-full bg-cyan-400 text-white grid place-items-center text-[7px] font-bold">✓</span>
              </span>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Main encounter card */}
      <div className="relative z-[2] glass-strong rounded-2xl border border-white/10 shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-4 py-3 border-b border-white/10 bg-white/[0.02]">
          <div className="flex items-center gap-2.5 text-[13px] text-slate-300">
            <span className="font-mono text-[12px] text-white bg-white/10 px-2 py-0.5 rounded">PT-83491</span>
            <span>Established · Internal Med · 22 min</span>
          </div>
          <div className="flex items-center gap-1.5 text-[11px] text-cyan-400 font-medium uppercase tracking-[0.04em]">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
            Live
          </div>
        </div>

        {/* Pipeline stages */}
        <div className="relative px-4 py-5">
          {/* Progress line */}
          <div className="absolute top-[34px] left-[12%] right-[12%] h-[1.5px] bg-white/10" />
          <motion.div
            className="absolute top-[34px] left-[12%] h-[1.5px] bg-cyan-400"
            animate={{ width: progressWidth }}
            transition={{ duration: 0.8, ease: [0.2, 0.7, 0.2, 1] }}
            style={{ maxWidth: '76%' }}
          />

          <div className="grid grid-cols-5 relative z-[1]">
            {STAGES.map((stage, i) => {
              const done = i < activeStage;
              const active = i === activeStage;
              const Icon = stage.icon;
              return (
                <div key={stage.label} className="flex flex-col items-center gap-2">
                  <div
                    className={`w-7 h-7 rounded-full grid place-items-center border-[1.5px] transition-all duration-400 ${
                      done
                        ? 'bg-cyan-400 border-cyan-400 text-white'
                        : active
                          ? 'bg-transparent border-cyan-400 text-cyan-400 shadow-[0_0_0_3px_rgba(34,211,238,0.15)]'
                          : 'bg-white/5 border-white/15 text-slate-500'
                    }`}
                  >
                    {done ? (
                      <Check className="w-3.5 h-3.5" strokeWidth={3} />
                    ) : (
                      <Icon className="w-3.5 h-3.5" />
                    )}
                  </div>
                  <span
                    className={`text-[10.5px] font-medium uppercase tracking-[0.02em] transition-colors ${
                      done || active ? 'text-white' : 'text-slate-500'
                    }`}
                  >
                    {stage.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Activity log */}
        <div className="px-4 pb-4">
          <div className="border-t border-white/10 pt-3">
            <div className="flex justify-between items-center mb-3">
              <span className="text-[11px] uppercase tracking-[0.08em] text-slate-500 font-medium">Agent activity</span>
              <span className="text-[11px] font-mono text-slate-500 tracking-tight">last 60s</span>
            </div>
            <div className="flex flex-col gap-2 min-h-[130px]">
              <AnimatePresence initial={false}>
                {visibleEntries.map((entry) => (
                  <motion.div
                    key={entry.id}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.35 }}
                    className="grid items-center gap-2.5 text-[12.5px] text-slate-300"
                    style={{ gridTemplateColumns: '22px 1fr auto' }}
                  >
                    <span className={`w-[22px] h-[22px] rounded-[5px] grid place-items-center font-mono text-[9px] font-medium ${entry.cls}`}>
                      {entry.tag}
                    </span>
                    <div className="flex items-center gap-1.5 min-w-0">
                      <span className="text-white font-medium">{entry.text}</span>
                      <span className="text-slate-500">{entry.desc}</span>
                      <span className="font-mono text-[11px] text-slate-400 bg-white/5 px-1.5 py-px rounded">{entry.code}</span>
                    </div>
                    <span className="font-mono text-[10.5px] text-slate-600 tracking-tight">{entry.time}</span>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
