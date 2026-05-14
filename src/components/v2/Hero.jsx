import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, CheckCircle2, Sparkles, Zap, Check } from 'lucide-react';
import CircuitBackground from '../CircuitBackground';

const ENTRIES = [
  { cls: 'text-emerald-400 bg-emerald-400/10', tag: 'ELIG', text: 'Eligibility verified', code: 'BCBS-IL', desc: '· copay $30', time: '12s ago' },
  { cls: 'text-emerald-400 bg-emerald-400/10', tag: 'COD', text: 'CODIN', code: '99214 + E11.9', desc: '→ proposed', time: '8s ago' },
  { cls: 'text-emerald-400 bg-emerald-400/10', tag: 'COD', text: 'CODIN', code: '-25', desc: '→ modifier applied', time: '7s ago' },
  { cls: 'text-amber-400 bg-amber-400/10', tag: 'SCR', text: 'Scrubber', code: 'passed', desc: '→ NCCI pair check', time: '4s ago' },
  { cls: 'text-amber-400 bg-amber-400/10', tag: 'SCR', text: 'Scrubber', code: 'BCBS-IL ok', desc: '→ payer LCD', time: '3s ago' },
  { cls: 'text-amber-400 bg-amber-400/10', tag: 'SCR', text: 'Scrubber', code: '96 / 100', desc: '→ risk score', time: '2s ago' },
  { cls: 'text-rose-400 bg-rose-400/10', tag: 'CLA', text: 'CLAIR', code: 'CARC-197', desc: 'queuing appeal pattern', time: 'now' },
];

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
      className="relative isolate min-h-[92svh] flex items-center pt-24 pb-12 md:pt-28 md:pb-16 overflow-hidden"
    >
      {/* Background layers */}
      <CircuitBackground />
      <div className="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[1200px] h-[600px] bg-hero-glow blur-2xl" />
      <div className="pointer-events-none absolute top-1/3 -left-32 w-[420px] h-[420px] rounded-full bg-cyan-500/15 blur-[90px]" />
      <div className="pointer-events-none absolute bottom-0 -right-24 w-[480px] h-[480px] rounded-full bg-violet-500/15 blur-[90px]" />

      <div className="container-prose relative z-10 grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
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
            className="mt-6 font-display text-[28px] leading-[1.2] sm:text-[34px] sm:leading-[1.18] md:text-[40px] md:leading-[1.15] font-bold tracking-tight text-gradient"
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
            className="mt-5 md:mt-7 text-base sm:text-lg md:text-xl text-slate-300/90 max-w-2xl lg:mx-0 mx-auto"
          >
            RCM Automation uses powerful AI agents for medical billing to replace manual billing
            tasks. These AI RCM agents automate eligibility verification, coding, denial follow-ups,
            and other such tasks to help providers capture up to{' '}
            <span className="text-white font-semibold">20% more of their earned revenue</span>.
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={3}
            className="mt-7 md:mt-9 flex flex-col sm:flex-row sm:flex-wrap items-stretch sm:items-center gap-3 lg:justify-start justify-center"
          >
            <a href="#contact" className="btn-primary group w-full sm:w-auto">
              Book Your Free Consultation
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="#agents" className="btn-ghost group w-full sm:w-auto">
              Meet the AI Agents
              <Sparkles className="w-4 h-4 text-cyan-300 transition-transform group-hover:rotate-12" />
            </a>
          </motion.div>

          <motion.ul
            variants={fadeUp}
            initial="hidden"
            animate="show"
            custom={4}
            className="mt-8 md:mt-10 grid sm:grid-cols-3 gap-3 max-w-2xl lg:mx-0 mx-auto"
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
          <HeroVisual />
        </motion.div>
      </div>
    </section>
  );
}

function HeroVisual() {
  const containerRef = useRef(null);
  const cardRef = useRef(null);
  const riskRef = useRef(null);
  const codesRef = useRef(null);
  const listRef = useRef(null);
  const [riskScore, setRiskScore] = useState(96);
  const [stageIndex, setStageIndex] = useState(0);
  const cursorRef = useRef(5);
  const widthPerStage = 76 / 4;

  // Mouse parallax — three layers at different rates, opposing directions
  useEffect(() => {
    const container = containerRef.current;
    const card = cardRef.current;
    const risk = riskRef.current;
    const codes = codesRef.current;
    if (!container || !card || !risk || !codes) return;
    if (!window.matchMedia('(hover: hover)').matches) return;

    const onMove = (e) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      card.style.transform = `translate(${x * 6}px, ${y * 6}px)`;
      risk.style.transform = `translate(${x * 14}px, ${y * 14}px)`;
      codes.style.transform = `translate(${x * -12}px, ${y * -12}px)`;
    };
    const onLeave = () => {
      card.style.transform = risk.style.transform = codes.style.transform = '';
    };
    container.addEventListener('mousemove', onMove, { passive: true });
    container.addEventListener('mouseleave', onLeave);
    return () => {
      container.removeEventListener('mousemove', onMove);
      container.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  // Activity log — vanilla DOM, matching the reference exactly
  useEffect(() => {
    const list = listRef.current;
    if (!list) return;

    function pushEntry(e, delay = 0) {
      const el = document.createElement('div');
      el.className = 'hero-activity-item';
      el.style.animationDelay = `${delay}ms`;
      el.innerHTML = `
        <span class="hero-act-icon ${e.cls}">${e.tag}</span>
        <div class="hero-act-meta">
          <span class="hero-act-name">${e.text}</span>
          <span class="hero-act-desc">${e.desc}</span>
          <code class="hero-act-code">${e.code}</code>
        </div>
        <div class="hero-act-time">${e.time}</div>
      `;
      list.appendChild(el);
      while (list.children.length > 5) {
        const first = list.firstChild;
        first.style.transition = 'opacity .35s ease, transform .35s ease';
        first.style.opacity = '0';
        first.style.transform = 'translateY(-4px)';
        setTimeout(() => first.remove(), 350);
        break;
      }
    }

    ENTRIES.slice(0, 5).forEach((e, i) => pushEntry(e, 1400 + i * 220));
    const interval = setInterval(() => {
      pushEntry({ ...ENTRIES[cursorRef.current % ENTRIES.length], time: 'now' });
      cursorRef.current++;
    }, 3200);
    return () => clearInterval(interval);
  }, []);

  // Stage cycling — start at Eligibility, progress through to Paid, then reset
  useEffect(() => {
    let idx = 0;
    setStageIndex(0);
    const interval = setInterval(() => {
      if (idx < 4) {
        idx++;
        setStageIndex(idx);
      } else {
        idx = 0;
        setStageIndex(0);
      }
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  // Risk score jitter
  useEffect(() => {
    const interval = setInterval(() => {
      setRiskScore(96 - Math.floor(Math.random() * 3));
    }, 1800);
    return () => clearInterval(interval);
  }, []);

  return (
    <div ref={containerRef} className="relative h-[520px] sm:h-[560px] md:h-[580px] mx-auto max-w-[480px] lg:max-w-none">
      {/* Decorative grid — context layer */}
      <div
        className="absolute -inset-10 opacity-50 pointer-events-none"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '32px 32px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black 30%, transparent 70%)',
        }}
      />

      {/* Floating: Risk score (Scrubber) — breaks frame top-right */}
      <div
        ref={riskRef}
        className="absolute -top-2 right-0 sm:-right-2 lg:-right-6 z-10 glass rounded-xl p-3 sm:p-3.5 shadow-lg border border-white/10 w-[150px] sm:w-[168px] opacity-0 animate-[heroFloat_0.7s_cubic-bezier(.2,.7,.2,1)_1.1s_forwards]"
        style={{ transition: 'transform 0.15s ease-out' }}
      >
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10.5px] uppercase tracking-[0.08em] text-slate-400 font-medium">Risk score</span>
          <span className="text-[9px] font-mono text-amber-400 bg-amber-400/10 px-1.5 py-0.5 rounded">Scrubber</span>
        </div>
        <div className="flex items-baseline gap-1 mb-2">
          <span className="font-display text-4xl text-white leading-none">{riskScore}</span>
          <span className="text-xs font-mono text-slate-500">/ 100</span>
        </div>
        <div className="h-[5px] bg-white/5 rounded-full overflow-hidden mb-2">
          <div className="h-full bg-gradient-to-r from-emerald-400 to-emerald-500 rounded-full w-0 animate-[heroFill_2.4s_cubic-bezier(.2,.7,.2,1)_1.6s_forwards]" />
        </div>
        <div className="flex items-center gap-1.5 text-[11px] text-emerald-400">
          <span className="w-[5px] h-[5px] rounded-full bg-emerald-400" />
          Clean — auto-submit
        </div>
      </div>

      {/* Floating: Code set (CODIN) — breaks frame bottom-left */}
      <div
        ref={codesRef}
        className="absolute -bottom-2 left-0 sm:-left-2 lg:-left-6 z-10 glass rounded-xl p-3 sm:p-3.5 shadow-lg border border-white/10 w-[170px] sm:w-[200px] opacity-0 animate-[heroFloat_0.7s_cubic-bezier(.2,.7,.2,1)_1.3s_forwards]"
        style={{ transition: 'transform 0.15s ease-out' }}
      >
        <div className="flex items-center justify-between mb-2.5">
          <span className="text-[10.5px] uppercase tracking-[0.08em] text-slate-400 font-medium">Code set</span>
          <span className="text-[9px] font-mono text-emerald-400 bg-emerald-400/10 px-1.5 py-0.5 rounded">CODIN</span>
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
                <span className="w-3 h-3 rounded-full bg-emerald-400 text-white grid place-items-center text-[7px] font-bold">✓</span>
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Main encounter card — the subject */}
      <div
        ref={cardRef}
        className="absolute top-[90px] sm:top-[110px] md:top-[116px] left-[6%] right-[6%] z-[2] glass-strong rounded-2xl border border-white/10 shadow-2xl overflow-hidden"
        style={{ transition: 'transform 0.15s ease-out' }}
      >
        {/* Header */}
        <div className="flex items-center justify-between gap-2 px-3 sm:px-[18px] py-3 sm:py-3.5 border-b border-white/10 bg-white/[0.02]">
          <div className="flex items-center gap-2 sm:gap-2.5 text-[12px] sm:text-[13px] text-slate-300 min-w-0">
            <span className="font-mono text-[11px] sm:text-[12px] text-white bg-white/10 px-1.5 sm:px-2 py-0.5 rounded tracking-[-0.01em] shrink-0">PT-83491</span>
            <span className="truncate">Established · Internal Med · 22 min</span>
          </div>
          <div className="flex items-center gap-1.5 text-[11px] text-emerald-400 font-medium uppercase tracking-[0.04em] shrink-0">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Live
          </div>
        </div>

        {/* Pipeline stages */}
        <div className="relative px-3 sm:px-[18px] py-4 sm:py-[22px]">
          <div className="absolute top-[36px] left-[12%] right-[12%] h-[1.5px] bg-white/10" />
          <div
            className="absolute top-[36px] left-[12%] h-[1.5px] bg-emerald-400"
            style={{
              width: `${stageIndex * widthPerStage}%`,
              transition: stageIndex === 0 ? 'none' : 'width 1.5s cubic-bezier(.2,.7,.2,1)',
            }}
          />
          <div className="grid grid-cols-5 relative z-[1]">
            {['Eligibility', 'Coding', 'Scrub', 'Submit', 'Paid'].map((label, i) => {
              const done = i < stageIndex;
              const active = i === stageIndex;
              return (
                <div key={label} className="flex flex-col items-center gap-2">
                  <div className={`w-7 h-7 rounded-full grid place-items-center border-[1.5px] transition-all duration-500 ${
                    done ? 'bg-emerald-400 border-emerald-400 text-white'
                      : active ? 'bg-transparent border-emerald-400 text-emerald-400 shadow-[0_0_0_3px_rgba(52,211,153,0.15)]'
                        : 'bg-white/5 border-white/15 text-slate-500'
                  }`}>
                    {done ? (
                      <Check className="w-3.5 h-3.5" strokeWidth={3} />
                    ) : (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" className="w-3.5 h-3.5">
                        {i === 0 && <path d="M5 13l4 4L19 7" />}
                        {i === 1 && <path d="M5 13l4 4L19 7" />}
                        {i === 2 && <><circle cx="12" cy="12" r="3" /><path d="M12 3v3M12 18v3M3 12h3M18 12h3" /></>}
                        {i === 3 && <path d="M5 12h14M13 6l6 6-6 6" />}
                        {i === 4 && <path d="M12 1v22M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />}
                      </svg>
                    )}
                  </div>
                  <span className={`text-[10.5px] font-medium uppercase tracking-[0.02em] transition-colors ${done || active ? 'text-white' : 'text-slate-500'}`}>
                    {label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Activity log */}
        <div className="px-3 sm:px-[18px] pb-3 sm:pb-4">
          <div className="border-t border-white/10 pt-3 sm:pt-3.5">
            <div className="flex justify-between items-center mb-2.5 sm:mb-3">
              <span className="text-[11px] uppercase tracking-[0.08em] text-slate-500 font-medium">Agent activity</span>
              <span className="text-[11px] font-mono text-slate-500 tracking-tight">last 60s</span>
            </div>
            <div ref={listRef} className="flex flex-col gap-[9px] h-[110px] sm:h-[125px] md:h-[140px] overflow-hidden" />
          </div>
        </div>
      </div>
    </div>
  );
}
