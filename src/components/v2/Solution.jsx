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

/* ============================== LAYOUT CONSTANTS ==============================
 * All positions live in a single coordinate system (1200x520 viewBox).
 * Pills and SVG lines use these exact coordinates so they always align.
 */
const VB_W = 1200;
const VB_H = 520;

const PILL_W = 220;
const PILL_H = 56;
const PILL_X_LEFT = 0;
const PILL_X_RIGHT = VB_W - PILL_W;
const PILL_EDGE_LEFT = PILL_W; // right edge of left pills (line start x)
const PILL_EDGE_RIGHT = PILL_X_RIGHT; // left edge of right pills (line end x)

// Y positions for each of the 4 pills (center-y)
const PILL_Y = [60, 170, 350, 460];

// Center engine cluster — sized to fit content exactly so logos don't overflow.
// Content: RCM logo (88) + gap-2 (8) + Payers box (184) + gap-2 (8) + RCM logo (88) = 376
const ENGINE_H = 88;
const ENGINE_W = 376;
const ENGINE_LEFT = (VB_W - ENGINE_W) / 2; // 412
const ENGINE_RIGHT = ENGINE_LEFT + ENGINE_W; // 788
const ENGINE_Y = VB_H / 2; // 260
// Ports land exactly on the center of each RCM logo
const RCM_LOGO_W = 88;
const ENGINE_LEFT_PORT = ENGINE_LEFT + RCM_LOGO_W / 2; // 456 — center of left RCM
const ENGINE_RIGHT_PORT = ENGINE_RIGHT - RCM_LOGO_W / 2; // 744 — center of right RCM

export default function Solution() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/3 w-[1000px] h-[600px] rounded-full bg-cyan-500/[0.04] blur-[100px]" />

      <div className="container-prose relative">
        {/* Top brand stack */}
        <div className="flex flex-col items-center">
          <motion.span
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="chip"
          >
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan-300" />
            </span>
            Solution
          </motion.span>

          <span className="mt-5 w-px h-12 bg-gradient-to-b from-violet-400/50 via-cyan-400/40 to-transparent" />

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7 }}
            className="mt-2 text-center text-[26px] leading-[36px] md:text-[34px] md:leading-[44px] font-bold font-display text-gradient max-w-4xl tracking-tight"
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
        <div className="hidden md:block relative mt-16">
          <FlowDiagram />
        </div>

        {/* Mobile compact view */}
        <MobileFlow />
      </div>
    </section>
  );
}

/* ============================== FLOW DIAGRAM ============================== */
function FlowDiagram() {
  return (
    <div
      className="relative mx-auto"
      style={{
        maxWidth: VB_W,
        aspectRatio: `${VB_W} / ${VB_H}`,
      }}
    >
      {/* Soft center glow */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[520px] h-[420px] rounded-full bg-cyan-500/20 blur-[100px]" />

      {/* SVG: connecting lines + animated dots */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox={`0 0 ${VB_W} ${VB_H}`}
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="sol-line-l" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="rgba(34,211,238,0)" />
            <stop offset="20%" stopColor="rgba(34,211,238,0.5)" />
            <stop offset="100%" stopColor="rgba(139,92,246,0.9)" />
          </linearGradient>
          <linearGradient id="sol-line-r" x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="rgba(139,92,246,0.9)" />
            <stop offset="80%" stopColor="rgba(34,211,238,0.5)" />
            <stop offset="100%" stopColor="rgba(34,211,238,0)" />
          </linearGradient>
          <filter id="sol-glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="2.5" result="b" />
            <feMerge>
              <feMergeNode in="b" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Left side: pill right-edge → engine left port */}
        {PILL_Y.map((y, i) => {
          const id = `sol-l-${i}`;
          const x1 = PILL_EDGE_LEFT;
          const y1 = y;
          const x2 = ENGINE_LEFT_PORT;
          const y2 = ENGINE_Y;
          const d = `M ${x1} ${y1} C ${x1 + 110} ${y1}, ${x2 - 110} ${y2}, ${x2} ${y2}`;
          return (
            <g key={id}>
              <motion.path
                id={id}
                d={d}
                fill="none"
                stroke="url(#sol-line-l)"
                strokeWidth="1.6"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 1.1, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              />
              <circle r="3" fill="#67e8f9" filter="url(#sol-glow)">
                <animateMotion dur="3.4s" begin={`${i * 0.85}s`} repeatCount="indefinite">
                  <mpath href={`#${id}`} />
                </animateMotion>
              </circle>
            </g>
          );
        })}

        {/* Right side: engine right port → pill left-edge */}
        {PILL_Y.map((y, i) => {
          const id = `sol-r-${i}`;
          const x1 = ENGINE_RIGHT_PORT;
          const y1 = ENGINE_Y;
          const x2 = PILL_EDGE_RIGHT;
          const y2 = y;
          const d = `M ${x1} ${y1} C ${x1 + 110} ${y1}, ${x2 - 110} ${y2}, ${x2} ${y2}`;
          return (
            <g key={id}>
              <motion.path
                id={id}
                d={d}
                fill="none"
                stroke="url(#sol-line-r)"
                strokeWidth="1.6"
                strokeLinecap="round"
                initial={{ pathLength: 0, opacity: 0 }}
                whileInView={{ pathLength: 1, opacity: 1 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 1.1, delay: 0.45 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              />
              <circle r="3" fill="#c4b5fd" filter="url(#sol-glow)">
                <animateMotion dur="3.4s" begin={`${0.4 + i * 0.85}s`} repeatCount="indefinite">
                  <mpath href={`#${id}`} />
                </animateMotion>
              </circle>
            </g>
          );
        })}
      </svg>

      {/* Pills + engine — positioned in same coordinate system as SVG (percentage-based) */}
      {leftItems.map((item, i) => (
        <PillAbsolute
          key={item.label}
          icon={item.icon}
          label={item.label}
          delay={i * 0.08}
          style={{
            position: 'absolute',
            left: `${(PILL_X_LEFT / VB_W) * 100}%`,
            top: `calc(${(PILL_Y[i] / VB_H) * 100}% - ${PILL_H / 2}px)`,
            width: `${(PILL_W / VB_W) * 100}%`,
          }}
        />
      ))}

      {rightItems.map((item, i) => (
        <PillAbsolute
          key={item.label}
          icon={item.icon}
          label={item.label}
          delay={0.4 + i * 0.08}
          align="right"
          style={{
            position: 'absolute',
            left: `${(PILL_X_RIGHT / VB_W) * 100}%`,
            top: `calc(${(PILL_Y[i] / VB_H) * 100}% - ${PILL_H / 2}px)`,
            width: `${(PILL_W / VB_W) * 100}%`,
          }}
        />
      ))}

      {/* Center engine cluster — logo's vertical center sits exactly on ENGINE_Y */}
      <div
        className="absolute z-10"
        style={{
          left: `${(ENGINE_LEFT / VB_W) * 100}%`,
          top: `calc(${(ENGINE_Y / VB_H) * 100}% - 44px)`,
          width: `${(ENGINE_W / VB_W) * 100}%`,
        }}
      >
        <div className="flex items-end justify-between gap-2">
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
      </div>
    </div>
  );
}

/* ============================== PILL (ABSOLUTE) ============================== */
function PillAbsolute({ icon: Icon, label, delay = 0, style, align = 'left' }) {
  return (
    <motion.div
      style={style}
      initial={{ opacity: 0, scale: 0.94 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      <div
        className={`flex items-center gap-3 px-3.5 py-2.5 rounded-2xl bg-ink-900/90 ring-1 ring-white/[0.06] hover:ring-cyan-400/40 transition-all duration-300 hover:-translate-y-[1px] hover:shadow-[0_8px_30px_-12px_rgba(34,211,238,0.4)] backdrop-blur-sm group ${
          align === 'right' ? 'flex-row-reverse text-right' : ''
        }`}
      >
        <div className="w-8 h-8 rounded-lg bg-cyan-400/[0.08] ring-1 ring-cyan-400/20 grid place-items-center shrink-0 transition-colors duration-300 group-hover:bg-cyan-400/[0.18] group-hover:ring-cyan-400/50">
          <Icon className="w-4 h-4 text-cyan-300" strokeWidth={1.8} />
        </div>
        <span className="text-[14px] text-slate-100 font-medium tracking-tight truncate">{label}</span>
      </div>
    </motion.div>
  );
}

/* ============================== CENTER COLUMN ============================== */
function CenterColumn({ children, label, delay }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.55, delay }}
      className="flex flex-col items-center gap-3"
    >
      {children}
      <span className="text-[10.5px] font-mono uppercase tracking-[0.22em] text-slate-400">
        {label}
      </span>
    </motion.div>
  );
}

/* ============================== RCM LOGO ============================== */
function RcmLogo() {
  return (
    <div className="relative w-[88px] h-[88px] rounded-2xl bg-ink-900/90 ring-1 ring-cyan-400/40 grid place-items-center shadow-[0_0_40px_rgba(34,211,238,0.28)] backdrop-blur-sm">
      <div className="absolute inset-[6px] rounded-xl border border-cyan-400/15" />
      <div className="relative w-11 h-11 rounded-lg overflow-hidden">
        <div className="absolute inset-0 ring-gradient animate-spin-slow" />
        <div className="absolute inset-[2px] rounded-[6px] bg-ink-950 grid place-items-center">
          <Sparkles className="w-5 h-5 text-cyan-300" />
        </div>
      </div>
    </div>
  );
}

/* ============================== PAYERS BOX ============================== */
function PayersBox() {
  return (
    <div className="h-[88px] px-3 rounded-2xl bg-ink-900/90 ring-1 ring-cyan-400/40 flex items-center gap-2 shadow-[0_0_40px_rgba(34,211,238,0.28)] backdrop-blur-sm">
      {centerIcons.map((Icon, i) => (
        <div
          key={i}
          className="w-12 h-12 rounded-xl ring-1 ring-cyan-400/30 bg-ink-950/60 grid place-items-center hover:ring-cyan-400/60 transition-colors"
        >
          <Icon className="w-4 h-4 text-cyan-300" strokeWidth={1.8} />
        </div>
      ))}
    </div>
  );
}

/* ============================== MOBILE FLOW ============================== */
function MobileFlow() {
  return (
    <div className="md:hidden mt-12 grid grid-cols-2 gap-2.5">
      {[...leftItems, ...rightItems].map((item, i) => (
        <PillAbsolute
          key={item.label}
          icon={item.icon}
          label={item.label}
          delay={i * 0.04}
          style={{ position: 'static' }}
        />
      ))}
    </div>
  );
}
