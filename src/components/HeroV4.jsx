import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

/* V4 — Receipt Stack
 * The hero IS a tall pile of EOB / claim receipt strips spilling down the right half.
 * Top strips are messy/scribbled (denials, missing codes, in red ink).
 * As they fall (or auto-animate), they get stamped PAID and turn clean.
 */

const RECEIPTS = [
  // top = newest / messy
  {
    state: 'denied',
    patient: 'PT-44761',
    payer: 'BCBS-TX',
    cpt: '99213',
    icd: 'I10',
    amount: '$612.00',
    reason: 'CARC-197: Auth required',
    age: '02:14',
  },
  {
    state: 'flagged',
    patient: 'PT-71028',
    payer: 'Medicare',
    cpt: '99214',
    icd: 'E11.9',
    amount: '$1,995.00',
    reason: 'Missing modifier -25',
    age: '01:50',
  },
  {
    state: 'pending',
    patient: 'PT-88341',
    payer: 'Humana',
    cpt: '93000',
    icd: 'R07.9',
    amount: '$520.00',
    reason: 'Eligibility verified · queued',
    age: '01:22',
  },
  {
    state: 'paid',
    patient: 'PT-65902',
    payer: 'Cigna',
    cpt: '99214 + 90471',
    icd: 'E11.9, Z23',
    amount: '$2,180.00',
    reason: 'Auto-submitted · accepted',
    age: '00:48',
  },
  {
    state: 'paid',
    patient: 'PT-77185',
    payer: 'United',
    cpt: '93000',
    icd: 'R07.9',
    amount: '$847.00',
    reason: 'Clean claim · 0 rework',
    age: '00:34',
  },
  {
    state: 'paid',
    patient: 'PT-92210',
    payer: 'Aetna',
    cpt: '99215',
    icd: 'M54.5',
    amount: '$3,402.00',
    reason: 'Appeal won · CARC-197 reversed',
    age: '00:21',
  },
  {
    state: 'paid',
    patient: 'PT-83491',
    payer: 'BCBS-IL',
    cpt: '99214 + E11.9',
    icd: 'E11.9, I10',
    amount: '$1,247.00',
    reason: 'Posted to A/R · clean',
    age: 'just now',
  },
];

export default function HeroV4() {
  // Rotating "currently being processed" — drives a subtle pulse on the active receipt
  const [activeIdx, setActiveIdx] = useState(0);
  useEffect(() => {
    const i = setInterval(() => setActiveIdx((v) => (v + 1) % RECEIPTS.length), 1600);
    return () => clearInterval(i);
  }, []);

  return (
    <section
      id="top"
      className="relative isolate overflow-hidden pt-28 pb-20 md:pt-32 md:pb-24 min-h-[100svh]"
      style={{ backgroundColor: '#0b0a08' }}
    >
      {/* Warm spotlight wash */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-0 w-[700px] h-[600px] rounded-full opacity-[0.16] blur-[140px]"
        style={{ background: 'radial-gradient(circle, rgba(217,119,6,0.7) 0%, transparent 70%)' }}
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 right-0 w-[900px] h-[800px] rounded-full opacity-[0.18] blur-[160px]"
        style={{ background: 'radial-gradient(circle, rgba(16,185,129,0.55) 0%, transparent 70%)' }}
      />

      {/* Faint horizontal rule pattern — like a ledger */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none opacity-[0.08]"
        style={{
          backgroundImage: 'linear-gradient(to bottom, rgba(217,178,128,0.4) 1px, transparent 1px)',
          backgroundSize: '100% 32px',
        }}
      />

      <div className="container-prose relative z-10 grid lg:grid-cols-[1fr_1fr] gap-12 lg:gap-20 items-start pt-4">
        {/* ============ LEFT: COPY ============ */}
        <div className="lg:sticky lg:top-32 lg:self-start">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.2, 0.7, 0.2, 1] }}
            className="inline-flex items-center gap-2 text-amber-200/80 text-[11px] font-mono tracking-[0.22em] uppercase"
          >
            <span className="w-6 h-px bg-amber-400/40" />
            Ch. IV &middot; The end of paperwork
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.2, 0.7, 0.2, 1] }}
            className="mt-6 font-display font-bold leading-[0.95] tracking-[-0.025em]"
            style={{ fontSize: 'clamp(48px, 6.4vw, 96px)' }}
          >
            <span className="block text-stone-100">Paperwork,</span>
            <span className="block italic font-normal text-amber-300/95">ended.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.22, ease: [0.2, 0.7, 0.2, 1] }}
            className="mt-7 text-[17px] md:text-[18.5px] leading-[1.55] text-stone-300 max-w-[480px]"
          >
            Every claim that used to wait in a drawer &mdash; eligibility issues, missing modifiers,
            denials going stale &mdash; seven autonomous agents work them while your team sleeps.
            <span className="block mt-3 text-stone-400 italic">
              The stack to the right is your real workday. Watch it clear.
            </span>
          </motion.p>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.2, 0.7, 0.2, 1] }}
            className="mt-9 grid grid-cols-3 gap-4 max-w-md"
          >
            <Stat label="Touched per claim" value="0" />
            <Stat label="Clean rate" value="99.4%" />
            <Stat label="Days in A/R" value="12.3" />
          </motion.div>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.4, ease: [0.2, 0.7, 0.2, 1] }}
            className="mt-9 flex flex-wrap items-center gap-3"
          >
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 px-6 h-12 rounded-full bg-amber-300 hover:bg-amber-200 text-stone-900 font-semibold tracking-tight text-[15px] transition-all duration-200 hover:-translate-y-px hover:shadow-[0_12px_30px_-10px_rgba(252,211,77,0.5)]"
            >
              Book a demo
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#agents"
              className="inline-flex items-center gap-2 px-6 h-12 rounded-full border border-stone-300/15 text-stone-200 hover:text-white hover:border-stone-300/30 hover:bg-white/[0.03] font-medium tracking-tight text-[15px] transition-all duration-200"
            >
              See the agents
            </a>
          </motion.div>

          {/* Quiet attribution */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 1 }}
            className="mt-10 max-w-[420px] text-[12.5px] text-stone-500 italic leading-[1.55] border-l-2 border-amber-700/40 pl-4"
          >
            &ldquo;We had a denial stack three feet tall. After six weeks, the desk was empty.&rdquo;
            <div className="not-italic mt-1.5 font-mono text-[10.5px] tracking-[0.16em] uppercase text-stone-600">
              &mdash; RCM director, 312-bed system
            </div>
          </motion.div>
        </div>

        {/* ============ RIGHT: RECEIPT STACK ============ */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.45, ease: [0.2, 0.7, 0.2, 1] }}
          className="relative"
        >
          {/* Faint "spike" — like the paper spike that holds receipts in a diner */}
          <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-px h-12 bg-amber-200/30" />
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-amber-200/50" />

          <div className="flex flex-col items-center gap-[14px] pt-10">
            {RECEIPTS.map((r, i) => (
              <Receipt
                key={r.patient}
                receipt={r}
                index={i}
                active={i === activeIdx}
              />
            ))}
          </div>

          {/* Tray under the stack */}
          <div className="mt-6 mx-auto max-w-[420px] h-1 rounded-full bg-gradient-to-r from-transparent via-amber-300/30 to-transparent" />
          <div className="mt-2 text-center text-[10.5px] font-mono tracking-[0.22em] uppercase text-stone-500">
            &mdash; tray empty &mdash;
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ============================== STAT ============================== */
function Stat({ label, value }) {
  return (
    <div>
      <div className="font-display font-bold text-2xl md:text-3xl text-amber-200/95 tabular-nums tracking-tight">{value}</div>
      <div className="text-[10.5px] font-mono tracking-[0.18em] uppercase text-stone-500 mt-1">{label}</div>
    </div>
  );
}

/* ============================== RECEIPT ============================== */
function Receipt({ receipt, index, active }) {
  const isDenied = receipt.state === 'denied';
  const isFlagged = receipt.state === 'flagged';
  const isPending = receipt.state === 'pending';
  const isPaid = receipt.state === 'paid';

  // Slight random rotation seeded by index — gives the stack a real "thrown" feel
  const rot = ((index * 7) % 5) - 2; // -2 .. +2 degrees
  const offsetX = ((index * 13) % 11) - 5; // -5 .. +5 px

  const tone = isPaid
    ? 'bg-amber-50 text-stone-900 border-stone-900/10'
    : isPending
    ? 'bg-amber-50/95 text-stone-800 border-stone-900/10'
    : isFlagged
    ? 'bg-amber-100/80 text-stone-800 border-amber-800/20'
    : 'bg-rose-50/90 text-stone-800 border-rose-900/15';

  const stampColor = isPaid
    ? 'text-emerald-600 border-emerald-600/60'
    : isPending
    ? 'text-amber-700 border-amber-700/50'
    : isFlagged
    ? 'text-amber-700 border-amber-700/60'
    : 'text-rose-600 border-rose-600/60';

  const stampText = isPaid ? 'PAID' : isPending ? 'IN QUEUE' : isFlagged ? 'FIX' : 'DENIED';

  return (
    <motion.div
      initial={{ opacity: 0, y: -14 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.5 + index * 0.08, ease: [0.2, 0.7, 0.2, 1] }}
      className={`relative w-[88%] sm:w-[420px] border ${tone} px-5 py-4 rounded-[2px] font-mono shadow-[0_4px_12px_-4px_rgba(0,0,0,0.4)] ${
        active ? 'ring-2 ring-amber-300/60 ring-offset-2 ring-offset-stone-950' : ''
      }`}
      style={{
        transform: `rotate(${rot}deg) translateX(${offsetX}px)`,
        backgroundImage: 'linear-gradient(to bottom, rgba(120,90,55,0) 0%, rgba(120,90,55,0) 96%, rgba(120,90,55,0.18) 100%)',
      }}
    >
      {/* Perforated top edge */}
      <div className="absolute -top-[1px] left-2 right-2 flex justify-between opacity-50">
        {Array.from({ length: 30 }).map((_, i) => (
          <span key={i} className="w-[2px] h-[2px] rounded-full bg-stone-900/30" />
        ))}
      </div>

      {/* Top row: patient + payer + stamp */}
      <div className="flex items-start justify-between gap-3 mb-2">
        <div>
          <div className="text-[10.5px] tracking-[0.12em] uppercase text-stone-500">{receipt.payer}</div>
          <div className="text-[13px] font-bold tracking-tight text-stone-900">{receipt.patient}</div>
        </div>
        {/* Stamp */}
        <div
          className={`shrink-0 rotate-[-8deg] border-2 ${stampColor} px-2 py-0.5 text-[11px] font-bold tracking-[0.16em] uppercase ${
            isDenied || isFlagged ? 'opacity-80' : ''
          }`}
          style={{ borderRadius: '2px' }}
        >
          {stampText}
        </div>
      </div>

      {/* Body — itemized lines */}
      <div className="grid grid-cols-2 gap-x-3 gap-y-[2px] text-[11px] leading-[1.4] text-stone-700">
        <span className="text-stone-500">CPT</span>
        <span className="text-right text-stone-800">{receipt.cpt}</span>
        <span className="text-stone-500">DX</span>
        <span className="text-right text-stone-800">{receipt.icd}</span>
        <span className="text-stone-500">ALLOWED</span>
        <span className="text-right font-bold text-stone-900">{receipt.amount}</span>
      </div>

      {/* Reason / agent note (handwritten feel via italic + serif) */}
      <div className={`mt-2 pt-2 border-t border-stone-900/[0.08] text-[11px] italic ${
        isDenied ? 'text-rose-700 line-through decoration-rose-600/50 decoration-[1.5px]' : 'text-stone-600'
      }`}>
        {receipt.reason}
      </div>

      {/* Bottom row: time + agent badge */}
      <div className="mt-2 flex items-center justify-between text-[10px] tracking-[0.08em] text-stone-500">
        <span>{receipt.age}</span>
        <span className="text-stone-400">CLAIM #{(78340 + index).toString()}</span>
      </div>

      {/* Red "denial" hand annotation for top of stack */}
      {isDenied && (
        <svg aria-hidden className="absolute -top-2 -right-2 text-rose-600 opacity-90" width="48" height="48" viewBox="0 0 48 48">
          <path d="M8 12 Q24 8, 40 14 M10 22 Q22 26, 38 22 M12 34 L24 24 M26 24 L40 34"
            stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none" />
        </svg>
      )}
    </motion.div>
  );
}
