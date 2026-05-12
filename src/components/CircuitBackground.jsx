export default function CircuitBackground({ className = '' }) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none opacity-30 ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
      >
        <defs>
          <filter id="glow-cyan" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#22d3ee" floodOpacity="0.7" />
          </filter>
          <filter id="glow-violet" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="0" stdDeviation="3" floodColor="#8b5cf6" floodOpacity="0.7" />
          </filter>
        </defs>

        {/* Static circuit lines — horizontal */}
        <path d="M 0 150 L 400 150 L 460 210 L 800 210 L 860 150 L 1200 150" stroke="rgba(148,163,184,0.25)" strokeWidth="1" fill="none" />
        <path d="M 0 400 L 320 400 L 380 460 L 680 460 L 740 400 L 1200 400" stroke="rgba(148,163,184,0.2)" strokeWidth="1" fill="none" />
        <path d="M 0 620 L 250 620 L 310 680 L 700 680 L 760 620 L 1200 620" stroke="rgba(148,163,184,0.18)" strokeWidth="1" fill="none" />

        {/* Static circuit lines — vertical */}
        <path d="M 200 0 L 200 200 L 260 260 L 260 800" stroke="rgba(148,163,184,0.22)" strokeWidth="1" fill="none" />
        <path d="M 960 0 L 960 350 L 900 410 L 900 800" stroke="rgba(148,163,184,0.18)" strokeWidth="1" fill="none" />

        {/* Junction nodes */}
        <circle cx="200" cy="150" r="3" fill="rgba(139,92,246,0.5)" />
        <circle cx="260" cy="260" r="2.5" fill="rgba(139,92,246,0.4)" />
        <circle cx="740" cy="400" r="3" fill="rgba(139,92,246,0.5)" />
        <circle cx="900" cy="410" r="2.5" fill="rgba(139,92,246,0.4)" />

        {/* Animated pulse traces */}
        <path
          d="M 0 150 L 400 150 L 460 210 L 800 210 L 860 150 L 1200 150"
          stroke="#22d3ee" strokeWidth="2" fill="none"
          strokeDasharray="60 1500" strokeDashoffset="0"
          filter="url(#glow-cyan)"
        >
          <animate attributeName="stroke-dashoffset" from="0" to="-1560" dur="6s" repeatCount="indefinite" />
        </path>
        <path
          d="M 0 400 L 320 400 L 380 460 L 680 460 L 740 400 L 1200 400"
          stroke="#8b5cf6" strokeWidth="2" fill="none"
          strokeDasharray="50 1500" strokeDashoffset="0"
          filter="url(#glow-violet)"
        >
          <animate attributeName="stroke-dashoffset" from="0" to="-1550" dur="5s" repeatCount="indefinite" />
        </path>
        <path
          d="M 200 0 L 200 200 L 260 260 L 260 800"
          stroke="#22d3ee" strokeWidth="2" fill="none"
          strokeDasharray="40 1100" strokeDashoffset="0"
          filter="url(#glow-cyan)"
        >
          <animate attributeName="stroke-dashoffset" from="0" to="-1140" dur="4.5s" repeatCount="indefinite" />
        </path>
        <path
          d="M 960 0 L 960 350 L 900 410 L 900 800"
          stroke="#8b5cf6" strokeWidth="2" fill="none"
          strokeDasharray="40 1300" strokeDashoffset="0"
          filter="url(#glow-violet)"
        >
          <animate attributeName="stroke-dashoffset" from="0" to="-1340" dur="6.5s" repeatCount="indefinite" />
        </path>
      </svg>
    </div>
  );
}
