import { motion } from 'framer-motion';
import {
  ShieldCheck,
  FileCheck2,
  Code2,
  Search,
  Zap,
  Coins,
  CircleDollarSign,
  Sparkles,
} from 'lucide-react';

const agents = [
  {
    name: 'ELIXA',
    role: 'Eligibility Agent',
    desc: 'Real-time patient eligibility and insurance verification — eliminating rejections before claims are sent.',
    icon: ShieldCheck,
    accent: 'from-cyan-400 to-blue-500',
    metric: { label: 'Verifications / hr', value: '12,400' },
  },
  {
    name: 'PRIA',
    role: 'Prior-Auth Agent',
    desc: 'Automates prior-authorization requests and payer follow-ups with 97% accuracy.',
    icon: FileCheck2,
    accent: 'from-blue-500 to-indigo-500',
    metric: { label: 'Auth turnaround', value: '–80%' },
  },
  {
    name: 'CODIN',
    role: 'Coding Agent',
    desc: 'Applies CPT and ICD-10 coding rules with continuous compliance updates.',
    icon: Code2,
    accent: 'from-indigo-500 to-violet-500',
    metric: { label: 'Coding accuracy', value: '99.6%' },
  },
  {
    name: 'CLAIR',
    role: 'Claims Agent',
    desc: 'Handles claim creation, scrubbing, and submission with automated error detection.',
    icon: Search,
    accent: 'from-violet-500 to-fuchsia-500',
    metric: { label: 'Clean claim rate', value: '99.99%' },
  },
  {
    name: 'DEXA',
    role: 'Denials Agent',
    desc: 'Analyzes denial patterns, generates appeals, and prevents repeat denials.',
    icon: Zap,
    accent: 'from-fuchsia-500 to-pink-500',
    metric: { label: 'Rejection cuts', value: '18–50%' },
  },
  {
    name: 'ARIA',
    role: 'A/R Agent',
    desc: 'Automates A/R follow-ups and prioritizes high-value claims for recovery.',
    icon: Coins,
    accent: 'from-emerald-400 to-cyan-500',
    metric: { label: 'A/R recovery', value: '+15%' },
  },
  {
    name: 'REMITA',
    role: 'Posting Agent',
    desc: 'Posts payments, reconciles remittances, and flags discrepancies in real-time.',
    icon: CircleDollarSign,
    accent: 'from-amber-400 to-orange-500',
    metric: { label: 'Reconciliation', value: 'Real-time' },
  },
];

export default function AIAgents() {
  return (
    <section id="agents" className="relative py-16 md:py-24 overflow-x-hidden">
      <div className="absolute inset-0 -z-10 grid-bg opacity-60" />

      <div className="container-prose">
        <div className="grid lg:grid-cols-[minmax(0,1fr)_auto] gap-10 items-center">
          <div className="max-w-3xl">
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
              className="chip"
            >
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-300" />
              </span>
              Meet the AI Workforce
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7 }}
              className="mt-5 font-display text-[26px] leading-[36px] md:text-[34px] md:leading-[44px] font-bold tracking-tight text-gradient"
            >
              Which AI Agents has RCM Automation Developer<br className="hidden md:block" /> to Automate Medical Billing?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-5 text-lg text-slate-300 max-w-2xl"
            >
              RCM Automation brings together medical billing specialists and AI engineers to build
              7 powerful AI agents for RCM. Each AI RCM agent is designed to take over a repetitive
              billing task, so your staff can spend less time on paperwork.
            </motion.p>
          </div>
          {/* AI orbital emblem — right side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block justify-self-end"
          >
            <AiOrbit />
          </motion.div>
        </div>

        {/* Agent cards — 3-col grid on desktop, 2-col on tablet, 1-col on mobile */}
        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {agents.map((a, i) => (
            <AgentCard
              key={a.name}
              agent={a}
              index={i}
              isLastOrphan={i === agents.length - 1 && agents.length % 3 !== 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function AgentCard({ agent, index, isLastOrphan }) {
  const Icon = agent.icon;
  // When the final card lands alone in a row, span both tablet cols (capped width,
  // auto-centered) and shift to the middle column on desktop.
  const orphanClasses = isLastOrphan
    ? 'sm:col-span-2 sm:justify-self-center sm:w-full sm:max-w-[calc(50%-10px)] lg:col-span-1 lg:col-start-2 lg:max-w-none'
    : '';
  return (
    <motion.article
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className={`card-glow group relative glass rounded-3xl p-6 md:p-7 overflow-hidden ${orphanClasses}`}
    >
      {/* gradient hover halo */}
      <div
        className={`pointer-events-none absolute -top-20 -right-20 w-56 h-56 rounded-full bg-gradient-to-br ${agent.accent} opacity-0 group-hover:opacity-30 blur-3xl transition-opacity duration-700`}
      />

      <div className="relative flex items-start justify-between">
        <div
          className={`relative w-12 h-12 rounded-2xl bg-gradient-to-br ${agent.accent} grid place-items-center shadow-lg`}
        >
          <Icon className="w-5 h-5 text-white" />
          <div className="absolute inset-0 rounded-2xl ring-1 ring-white/20" />
        </div>
        <div className="text-right">
          <div className="text-[10px] uppercase tracking-widest text-slate-400">
            {agent.metric.label}
          </div>
          <div className="font-display text-lg font-bold text-white">{agent.metric.value}</div>
        </div>
      </div>

      <div className="mt-6">
        <div className="flex items-baseline gap-3">
          <h3 className="font-display text-2xl font-bold text-white tracking-tight">
            {agent.name}
          </h3>
          <span className="font-mono text-[11px] text-cyan-300/80 uppercase tracking-wider">
            {agent.role}
          </span>
        </div>
        <p className="mt-3 text-slate-300/90 text-[15px] leading-relaxed">{agent.desc}</p>
      </div>

      <div className="mt-6 flex items-center justify-between border-t border-white/5 pt-4">
        <span className="text-[11px] text-slate-500 uppercase tracking-wider flex items-center gap-2">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative rounded-full h-1.5 w-1.5 bg-emerald-400" />
          </span>
          Active
        </span>
        <span className="text-xs text-slate-400 group-hover:text-white transition-colors flex items-center gap-1">
          Learn more
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </span>
      </div>
    </motion.article>
  );
}

/* ============================== AI ORBIT ==============================
 * Animated AI emblem: glowing core + 3 counter-rotating orbital rings with
 * traveling nodes. Inspired by neural-network / atomic orbital aesthetics.
 */
function AiOrbit() {
  return (
    <div className="relative w-[320px] h-[320px] grid place-items-center">
      {/* Ambient glow */}
      <div className="absolute inset-8 rounded-full bg-cyan-400/10 blur-[60px]" />
      <div className="absolute inset-12 rounded-full bg-violet-400/10 blur-[50px]" />

      <svg viewBox="0 0 320 320" className="absolute inset-0 w-full h-full">
        <defs>
          <linearGradient id="ai-ring-1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.85" />
            <stop offset="60%" stopColor="#22d3ee" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="ai-ring-2" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#a78bfa" stopOpacity="0.85" />
            <stop offset="60%" stopColor="#a78bfa" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#a78bfa" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="ai-ring-3" x1="0" y1="1" x2="1" y2="0">
            <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#a78bfa" stopOpacity="0.7" />
          </linearGradient>
          <radialGradient id="ai-core">
            <stop offset="0%" stopColor="#67e8f9" stopOpacity="1" />
            <stop offset="40%" stopColor="#22d3ee" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#0e7490" stopOpacity="0" />
          </radialGradient>
          <filter id="ai-glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Outer ring — rotates clockwise slowly */}
        <g style={{ transformOrigin: '160px 160px' }} className="animate-[aiSpin_22s_linear_infinite]">
          <circle cx="160" cy="160" r="140" fill="none" stroke="url(#ai-ring-1)" strokeWidth="1.2" strokeDasharray="2 5" />
          <circle cx="160" cy="20" r="3" fill="#67e8f9" filter="url(#ai-glow)" />
          <circle cx="300" cy="160" r="2" fill="#67e8f9" />
        </g>

        {/* Middle ring — rotates counter-clockwise */}
        <g style={{ transformOrigin: '160px 160px' }} className="animate-[aiSpinRev_16s_linear_infinite]">
          <ellipse cx="160" cy="160" rx="110" ry="40" fill="none" stroke="url(#ai-ring-2)" strokeWidth="1.4" transform="rotate(35 160 160)" />
          <circle cx="270" cy="160" r="3.5" fill="#c4b5fd" filter="url(#ai-glow)" transform="rotate(35 160 160)" />
        </g>

        {/* Tilted ring — opposite tilt */}
        <g style={{ transformOrigin: '160px 160px' }} className="animate-[aiSpin_18s_linear_infinite]">
          <ellipse cx="160" cy="160" rx="110" ry="40" fill="none" stroke="url(#ai-ring-3)" strokeWidth="1.4" transform="rotate(-35 160 160)" />
          <circle cx="50" cy="160" r="3.5" fill="#67e8f9" filter="url(#ai-glow)" transform="rotate(-35 160 160)" />
        </g>

        {/* Inner ring — fast clockwise */}
        <g style={{ transformOrigin: '160px 160px' }} className="animate-[aiSpinRev_10s_linear_infinite]">
          <circle cx="160" cy="160" r="78" fill="none" stroke="rgba(34,211,238,0.3)" strokeWidth="1" strokeDasharray="1 4" />
        </g>


        {/* Constellation dots — quietly twinkling */}
        {[
          { x: 80, y: 80, d: '0s' },
          { x: 240, y: 90, d: '0.4s' },
          { x: 250, y: 240, d: '0.8s' },
          { x: 70, y: 230, d: '1.2s' },
          { x: 160, y: 40, d: '1.6s' },
          { x: 280, y: 160, d: '2s' },
        ].map((p, i) => (
          <circle
            key={i}
            cx={p.x}
            cy={p.y}
            r="1.5"
            fill="#67e8f9"
            opacity="0.4"
            className="animate-[aiTwinkle_3s_ease-in-out_infinite]"
            style={{ animationDelay: p.d }}
          />
        ))}
      </svg>

      {/* Central AI sparkle icon — filled, no background */}
      <Sparkles
        className="relative z-10 w-14 h-14 text-cyan-200 drop-shadow-[0_0_18px_rgba(34,211,238,0.8)]"
        fill="currentColor"
        strokeWidth={1.2}
      />
    </div>
  );
}
