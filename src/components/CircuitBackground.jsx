export default function CircuitBackground({ className = '' }) {
  return (
    <div
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        className="w-full h-full"
      >
        <defs>
          <filter id="glow-cyan" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#22d3ee" />
          </filter>
          <filter id="glow-violet" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow dx="0" dy="0" stdDeviation="4" floodColor="#8b5cf6" />
          </filter>
        </defs>

        {/* Static circuit lines — horizontal */}
        <path d="M 0 120 L 350 120 L 410 180 L 750 180 L 810 120 L 1200 120" stroke="rgba(34,211,238,0.2)" strokeWidth="1" fill="none" />
        <path d="M 0 280 L 180 280 L 240 340 L 560 340 L 620 280 L 880 280 L 940 220 L 1200 220" stroke="rgba(34,211,238,0.2)" strokeWidth="1" fill="none" />
        <path d="M 0 440 L 320 440 L 380 500 L 680 500 L 740 440 L 1200 440" stroke="rgba(139,92,246,0.2)" strokeWidth="1" fill="none" />
        <path d="M 0 600 L 220 600 L 280 660 L 680 660 L 740 600 L 1200 600" stroke="rgba(139,92,246,0.2)" strokeWidth="1" fill="none" />
        <path d="M 0 720 L 400 720 L 460 660 L 1200 660" stroke="rgba(34,211,238,0.12)" strokeWidth="1" fill="none" />

        {/* Static circuit lines — vertical */}
        <path d="M 180 0 L 180 180 L 240 240 L 240 800" stroke="rgba(34,211,238,0.18)" strokeWidth="1" fill="none" />
        <path d="M 580 0 L 580 230 L 640 290 L 640 580 L 700 640 L 700 800" stroke="rgba(34,211,238,0.18)" strokeWidth="1" fill="none" />
        <path d="M 980 0 L 980 320 L 920 380 L 920 800" stroke="rgba(139,92,246,0.18)" strokeWidth="1" fill="none" />
        <path d="M 400 0 L 400 400 L 460 460 L 460 800" stroke="rgba(139,92,246,0.12)" strokeWidth="1" fill="none" />

        {/* Junction nodes */}
        <circle cx="180" cy="120" r="3.5" fill="rgba(34,211,238,0.5)" />
        <circle cx="240" cy="240" r="3" fill="rgba(34,211,238,0.45)" />
        <circle cx="580" cy="280" r="3.5" fill="rgba(34,211,238,0.5)" />
        <circle cx="880" cy="280" r="3" fill="rgba(34,211,238,0.45)" />
        <circle cx="400" cy="400" r="3" fill="rgba(139,92,246,0.45)" />
        <circle cx="640" cy="640" r="3.5" fill="rgba(139,92,246,0.5)" />
        <circle cx="920" cy="440" r="3.5" fill="rgba(139,92,246,0.5)" />
        <circle cx="700" cy="640" r="3" fill="rgba(139,92,246,0.45)" />

        {/* Animated pulse traces — horizontal */}
        <path
          d="M 0 120 L 350 120 L 410 180 L 750 180 L 810 120 L 1200 120"
          stroke="#22d3ee" strokeWidth="2" fill="none"
          strokeDasharray="60 1500" strokeDashoffset="0"
          filter="url(#glow-cyan)"
        >
          <animate attributeName="stroke-dashoffset" from="0" to="-1560" dur="6s" repeatCount="indefinite" />
        </path>
        <path
          d="M 0 280 L 180 280 L 240 340 L 560 340 L 620 280 L 880 280 L 940 220 L 1200 220"
          stroke="#22d3ee" strokeWidth="2" fill="none"
          strokeDasharray="80 1700" strokeDashoffset="0"
          filter="url(#glow-cyan)"
        >
          <animate attributeName="stroke-dashoffset" from="0" to="-1780" dur="8s" repeatCount="indefinite" />
        </path>
        <path
          d="M 0 440 L 320 440 L 380 500 L 680 500 L 740 440 L 1200 440"
          stroke="#8b5cf6" strokeWidth="2" fill="none"
          strokeDasharray="50 1500" strokeDashoffset="0"
          filter="url(#glow-violet)"
        >
          <animate attributeName="stroke-dashoffset" from="0" to="-1550" dur="5s" repeatCount="indefinite" />
        </path>
        <path
          d="M 0 600 L 220 600 L 280 660 L 680 660 L 740 600 L 1200 600"
          stroke="#8b5cf6" strokeWidth="2" fill="none"
          strokeDasharray="60 1600" strokeDashoffset="0"
          filter="url(#glow-violet)"
        >
          <animate attributeName="stroke-dashoffset" from="0" to="-1660" dur="7s" repeatCount="indefinite" />
        </path>

        {/* Animated pulse traces — vertical */}
        <path
          d="M 180 0 L 180 180 L 240 240 L 240 800"
          stroke="#22d3ee" strokeWidth="2" fill="none"
          strokeDasharray="40 1100" strokeDashoffset="0"
          filter="url(#glow-cyan)"
        >
          <animate attributeName="stroke-dashoffset" from="0" to="-1140" dur="4.5s" repeatCount="indefinite" />
        </path>
        <path
          d="M 580 0 L 580 230 L 640 290 L 640 580 L 700 640 L 700 800"
          stroke="#22d3ee" strokeWidth="2" fill="none"
          strokeDasharray="50 1400" strokeDashoffset="0"
          filter="url(#glow-cyan)"
        >
          <animate attributeName="stroke-dashoffset" from="0" to="-1450" dur="7s" repeatCount="indefinite" />
        </path>
        <path
          d="M 980 0 L 980 320 L 920 380 L 920 800"
          stroke="#8b5cf6" strokeWidth="2" fill="none"
          strokeDasharray="40 1300" strokeDashoffset="0"
          filter="url(#glow-violet)"
        >
          <animate attributeName="stroke-dashoffset" from="0" to="-1340" dur="6.5s" repeatCount="indefinite" />
        </path>
        <path
          d="M 400 0 L 400 400 L 460 460 L 460 800"
          stroke="#8b5cf6" strokeWidth="2" fill="none"
          strokeDasharray="45 1200" strokeDashoffset="0"
          filter="url(#glow-violet)"
        >
          <animate attributeName="stroke-dashoffset" from="0" to="-1245" dur="5.5s" repeatCount="indefinite" />
        </path>
      </svg>
    </div>
  );
}
