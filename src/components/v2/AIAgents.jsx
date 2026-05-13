import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';
import {
  ShieldCheck,
  FileCheck2,
  Code2,
  Search,
  Zap,
  Coins,
  CircleDollarSign,
  Phone,
  Sparkles,
} from 'lucide-react';
import AgentDashboard from '../AgentDashboard';
import AgentElixaPanel from '../AgentElixaPanel';

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
  {
    name: 'AVA',
    role: 'Voice Agent',
    desc: 'Automates patient and payer calls — verifying eligibility, checking auth status, and chasing A/R by voice.',
    icon: Phone,
    accent: 'from-rose-400 to-pink-500',
    metric: { label: 'Calls / day', value: '8,200' },
  },
];

export default function AIAgents() {
  const [activeIdx, setActiveIdx] = useState(0);
  const activeAgent = agents[activeIdx];

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

        <div className="mt-12 grid lg:grid-cols-[280px_minmax(0,1fr)] gap-5">
          {/* Tabs — horizontal scroll on mobile, vertical column on lg+ */}
          <div
            role="tablist"
            aria-label="AI agents"
            className="flex lg:flex-col gap-3 lg:gap-3.5 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 -mx-6 px-6 lg:mx-0 lg:px-0 snap-x snap-mandatory lg:snap-none"
            style={{ scrollbarWidth: 'none' }}
          >
            {agents.map((a, i) => (
              <AgentTab
                key={a.name}
                agent={a}
                isActive={i === activeIdx}
                onClick={() => setActiveIdx(i)}
              />
            ))}
          </div>

          {/* Active agent's dashboard */}
          <div className="min-w-0 max-w-full">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeAgent.name}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                className="min-w-0 gpu"
              >
                {activeAgent.name === 'ELIXA' ? (
                  <AgentElixaPanel agent={activeAgent} />
                ) : (
                  <AgentDashboard agent={activeAgent} />
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function AgentTab({ agent, isActive, onClick }) {
  const Icon = agent.icon;
  return (
    <button
      type="button"
      role="tab"
      aria-selected={isActive}
      onClick={onClick}
      className={`group relative shrink-0 lg:shrink min-w-[220px] lg:min-w-0 snap-start flex items-center gap-3 p-3.5 rounded-2xl text-left transition-all duration-300 ${
        isActive
          ? 'bg-white/[0.05] ring-1 ring-cyan-400/30 shadow-[0_8px_30px_-12px_rgba(34,211,238,0.4)]'
          : 'bg-white/[0.02] ring-1 ring-white/5 hover:bg-white/[0.04] hover:ring-white/10'
      }`}
    >
      {/* active accent strip on the left edge */}
      <span
        className={`absolute left-0 top-3 bottom-3 w-1 rounded-full bg-gradient-to-b ${agent.accent} transition-opacity duration-300 ${
          isActive ? 'opacity-100' : 'opacity-0'
        }`}
      />

      <div
        className={`relative w-10 h-10 rounded-xl bg-gradient-to-br ${agent.accent} grid place-items-center shadow-lg shrink-0`}
      >
        <Icon className="w-5 h-5 text-white" />
        <div className="absolute inset-0 rounded-xl ring-1 ring-white/20" />
      </div>
      <div className="flex-1 min-w-0">
        <div
          className={`font-display font-bold tracking-tight transition-colors ${
            isActive ? 'text-white' : 'text-slate-200 group-hover:text-white'
          }`}
        >
          {agent.name}
        </div>
        <div className="font-mono text-[11px] text-cyan-300/80 uppercase tracking-wider truncate">
          {agent.role}
        </div>
      </div>
      {isActive && (
        <span className="hidden lg:flex items-center gap-1 text-[10px] uppercase tracking-wider text-emerald-300">
          <span className="relative flex h-1.5 w-1.5">
            <span className="animate-ping absolute h-full w-full rounded-full bg-emerald-400 opacity-75" />
            <span className="relative rounded-full h-1.5 w-1.5 bg-emerald-400" />
          </span>
          Live
        </span>
      )}
    </button>
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
