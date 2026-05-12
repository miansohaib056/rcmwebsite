import { motion } from 'framer-motion';
import {
  Sparkles,
  Inbox,
  FileText,
  ClipboardCheck,
  AlertCircle,
  DollarSign,
  TrendingUp,
  BarChart3,
  Network,
  Building2,
  Activity,
  ShieldCheck,
} from 'lucide-react';

const leftItems = [
  { icon: Inbox, label: 'Eligibility' },
  { icon: FileText, label: 'Claims' },
  { icon: ClipboardCheck, label: 'Authorizations' },
  { icon: AlertCircle, label: 'Denials' },
];

const rightItems = [
  { icon: DollarSign, label: 'Payments' },
  { icon: TrendingUp, label: 'Recovery' },
  { icon: BarChart3, label: 'Reports' },
  { icon: Network, label: 'API' },
];

const centerIcons = [Building2, Activity, ShieldCheck];

// Vertical positions of the 4 pills on each side: top group is 9% + 25%,
// bottom group is 60% + 76%, with a big middle gap behind the center cluster.
const pillTops = ['9%', '25%', '60%', '76%'];
// Same positions expressed in viewBox y-units (viewBox height = 440).
const pillY = [60, 130, 284, 354];
// Center boxes are vertically centered with labels below. Box-center y in viewBox.
const BOX_Y = 200;
const LEFT_BOX_EDGE = 320; // left edge of first RCM box in viewBox x
const RIGHT_BOX_EDGE = 680; // right edge of last RCM box in viewBox x
const PILL_END_X = 210; // right edge of left pills (line start)
const PILL_START_X = 790; // left edge of right pills (line end)

export default function Solution() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      {/* Background glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[1000px] h-[600px] rounded-full bg-cyan-500/[0.04] blur-[100px]" />

      <div className="container-prose relative">
        {/* Top brand stack */}
        <div className="flex flex-col items-center">
          <div className="relative w-14 h-14 rounded-2xl overflow-hidden">
            <div className="absolute inset-0 ring-gradient animate-spin-slow" />
            <div className="absolute inset-[2px] rounded-[14px] bg-ink-950 grid place-items-center">
              <Sparkles className="w-5 h-5 text-cyan-300" />
            </div>
          </div>

          <motion.span
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="mt-5 px-4 py-1 rounded-md bg-violet-500/10 text-violet-200 text-sm font-mono ring-1 ring-violet-500/30"
          >
            Solution
          </motion.span>

          <span className="mt-5 w-px h-12 bg-gradient-to-b from-violet-400/50 via-cyan-400/40 to-transparent" />

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="mt-2 text-center text-3xl md:text-5xl lg:text-6xl font-bold font-display text-white max-w-4xl leading-[1.1] tracking-tight"
          >
            That's why we built RCM Automation,
            <br className="hidden md:block" /> the autonomous AI engine for medical billing
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-center text-slate-300 max-w-2xl mx-auto mt-6 text-base md:text-lg leading-relaxed"
          >
            RCM Automation brings autonomous AI processing to revenue cycle management — verifying
            every eligibility check, automating coding and prior auth, and recovering revenue in
            real time.
          </motion.p>
        </div>

        {/* Flow diagram — md+ only */}
        <div className="hidden md:block relative mt-16 max-w-5xl mx-auto">
          <FlowDiagram />
        </div>

        {/* Mobile compact view */}
        <MobileFlow />
      </div>
    </section>
  );
}

function FlowDiagram() {
  return (
    <div className="relative h-[440px]">
      {/* Center glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-cyan-500/20 blur-[80px]" />

      {/* SVG: lines + traveling dots */}
      <svg
        viewBox="0 0 1000 440"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full pointer-events-none"
      >
        <defs>
          <linearGradient id="solLineLeft" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" stopColor="rgba(34,211,238,0)" />
            <stop offset="0.3" stopColor="rgba(34,211,238,0.35)" />
            <stop offset="1" stopColor="rgba(139,92,246,0.55)" />
          </linearGradient>
          <linearGradient id="solLineRight" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" stopColor="rgba(139,92,246,0.55)" />
            <stop offset="0.7" stopColor="rgba(34,211,238,0.35)" />
            <stop offset="1" stopColor="rgba(34,211,238,0)" />
          </linearGradient>
          <filter id="solDotGlow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="2.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Left side: each pill → first RCM box */}
        {pillY.map((y, i) => {
          const id = `sol-l-${i}`;
          // S-curve: leaves pill horizontally, bends toward box center smoothly, enters box horizontally
          const d = `M ${PILL_END_X} ${y} C ${PILL_END_X + 50} ${y}, ${LEFT_BOX_EDGE - 50} ${BOX_Y}, ${LEFT_BOX_EDGE} ${BOX_Y}`;
          return (
            <g key={id}>
              <motion.path
                id={id}
                d={d}
                fill="none"
                stroke="url(#solLineLeft)"
                strokeWidth="1.2"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 1, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              />
              <circle r="2.5" fill="#67e8f9" filter="url(#solDotGlow)">
                <animateMotion
                  dur="3s"
                  begin={`${i * 0.75}s`}
                  repeatCount="indefinite"
                  rotate="auto"
                >
                  <mpath href={`#${id}`} />
                </animateMotion>
              </circle>
            </g>
          );
        })}

        {/* Right side: last RCM box → each pill */}
        {pillY.map((y, i) => {
          const id = `sol-r-${i}`;
          const d = `M ${RIGHT_BOX_EDGE} ${BOX_Y} C ${RIGHT_BOX_EDGE + 50} ${BOX_Y}, ${PILL_START_X - 50} ${y}, ${PILL_START_X} ${y}`;
          return (
            <g key={id}>
              <motion.path
                id={id}
                d={d}
                fill="none"
                stroke="url(#solLineRight)"
                strokeWidth="1.2"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 1, delay: 0.45 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              />
              <circle r="2.5" fill="#c4b5fd" filter="url(#solDotGlow)">
                <animateMotion
                  dur="3s"
                  begin={`${0.35 + i * 0.75}s`}
                  repeatCount="indefinite"
                  rotate="auto"
                >
                  <mpath href={`#${id}`} />
                </animateMotion>
              </circle>
            </g>
          );
        })}
      </svg>

      {/* Left pills — absolute positioned, grouped 2/2 */}
      {leftItems.map((item, i) => (
        <Pill
          key={item.label}
          icon={item.icon}
          label={item.label}
          delay={i * 0.08}
          className="absolute left-0"
          style={{ top: pillTops[i], transform: 'translateY(-50%)' }}
        />
      ))}

      {/* Center cluster */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-end gap-3 z-10">
        <CenterColumn label="RCM" delay={0.2}>
          <RcmLogo />
        </CenterColumn>
        <CenterColumn label="Payers" delay={0.3}>
          <PayersBox />
        </CenterColumn>
        <CenterColumn label="RCM" delay={0.4}>
          <RcmLogo />
        </CenterColumn>
      </div>

      {/* Right pills — absolute positioned, grouped 2/2 */}
      {rightItems.map((item, i) => (
        <Pill
          key={item.label}
          icon={item.icon}
          label={item.label}
          delay={0.4 + i * 0.08}
          className="absolute right-0 justify-start"
          style={{ top: pillTops[i], transform: 'translateY(-50%)' }}
        />
      ))}
    </div>
  );
}

function Pill({ icon: Icon, label, delay = 0, className = '', style }) {
  return (
    <motion.div
      style={style}
      initial={{ opacity: 0, scale: 0.94 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.45, delay, ease: [0.22, 1, 0.36, 1] }}
      className={`flex items-center gap-3 px-4 py-2.5 rounded-full bg-ink-900/80 ring-1 ring-cyan-400/20 hover:ring-cyan-400/40 transition-colors gpu shadow-[0_4px_20px_-8px_rgba(0,0,0,0.6)] min-w-[180px] backdrop-blur-sm ${className}`}
    >
      <Icon className="w-4 h-4 text-cyan-300/90 shrink-0" />
      <span className="text-sm text-slate-200 font-medium">{label}</span>
    </motion.div>
  );
}

function CenterColumn({ children, label, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center gap-3"
    >
      {children}
      <span className="text-xs font-mono uppercase tracking-[0.2em] text-slate-400">
        {label}
      </span>
    </motion.div>
  );
}

function RcmLogo() {
  return (
    <div className="w-20 h-20 rounded-xl bg-ink-900/80 ring-1 ring-cyan-400/40 grid place-items-center shadow-[0_0_30px_rgba(34,211,238,0.25)] gpu backdrop-blur-sm">
      <div className="relative w-10 h-10 rounded-md overflow-hidden">
        <div className="absolute inset-0 ring-gradient" />
        <div className="absolute inset-[2px] rounded-[4px] bg-ink-950 grid place-items-center">
          <Sparkles className="w-4 h-4 text-cyan-300" />
        </div>
      </div>
    </div>
  );
}

function PayersBox() {
  return (
    <div className="h-20 px-2 rounded-xl bg-ink-900/80 ring-1 ring-cyan-400/40 flex items-center gap-1.5 shadow-[0_0_30px_rgba(34,211,238,0.25)] gpu backdrop-blur-sm">
      {centerIcons.map((Icon, i) => (
        <div
          key={i}
          className="w-12 h-12 rounded-lg ring-1 ring-cyan-400/30 bg-ink-950/60 grid place-items-center"
        >
          <Icon className="w-4 h-4 text-cyan-300" />
        </div>
      ))}
    </div>
  );
}

function MobileFlow() {
  return (
    <div className="md:hidden mt-12 grid grid-cols-2 gap-2.5">
      {[...leftItems, ...rightItems].map((item, i) => (
        <Pill key={item.label} icon={item.icon} label={item.label} delay={i * 0.04} />
      ))}
    </div>
  );
}
