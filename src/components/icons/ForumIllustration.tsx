export function ForumIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Central decision point */}
      <circle cx="200" cy="160" r="24" fill="#c9af81" fillOpacity="0.2" />
      <circle cx="200" cy="160" r="16" fill="#c9af81" />
      
      {/* Three paths branching out */}
      {/* Left path - DIFC */}
      <path
        d="M176 160 L80 100"
        stroke="#c9af81"
        strokeWidth="2"
        strokeDasharray="4 4"
      />
      <rect x="40" y="60" width="80" height="80" rx="4" fill="white" fillOpacity="0.1" stroke="white" strokeWidth="1.5" />
      {/* Courthouse icon */}
      <path d="M80 76 L60 88 L60 120 L100 120 L100 88 Z" stroke="white" strokeWidth="1.5" fill="none" />
      <rect x="66" y="96" width="8" height="24" fill="white" fillOpacity="0.3" />
      <rect x="86" y="96" width="8" height="24" fill="white" fillOpacity="0.3" />
      <path d="M60 88 L80 76 L100 88" stroke="white" strokeWidth="1.5" fill="none" />
      <text x="80" y="150" textAnchor="middle" fill="white" fontSize="11" fontFamily="Inter">DIFC</text>
      
      {/* Right path - ADGM */}
      <path
        d="M224 160 L320 100"
        stroke="#c9af81"
        strokeWidth="2"
        strokeDasharray="4 4"
      />
      <rect x="280" y="60" width="80" height="80" rx="4" fill="white" fillOpacity="0.1" stroke="white" strokeWidth="1.5" />
      {/* Modern court building */}
      <rect x="296" y="82" width="48" height="38" stroke="white" strokeWidth="1.5" fill="none" />
      <path d="M296 82 L320 70 L344 82" stroke="white" strokeWidth="1.5" fill="none" />
      <line x1="308" y1="82" x2="308" y2="120" stroke="white" strokeWidth="1" />
      <line x1="320" y1="82" x2="320" y2="120" stroke="white" strokeWidth="1" />
      <line x1="332" y1="82" x2="332" y2="120" stroke="white" strokeWidth="1" />
      <text x="320" y="150" textAnchor="middle" fill="white" fontSize="11" fontFamily="Inter">ADGM</text>
      
      {/* Bottom path - Arbitration */}
      <path
        d="M200 184 L200 260"
        stroke="#c9af81"
        strokeWidth="2"
        strokeDasharray="4 4"
      />
      <rect x="160" y="260" width="80" height="50" rx="4" fill="white" fillOpacity="0.1" stroke="white" strokeWidth="1.5" />
      {/* Scales of justice */}
      <line x1="200" y1="272" x2="200" y2="290" stroke="white" strokeWidth="1.5" />
      <line x1="180" y1="278" x2="220" y2="278" stroke="white" strokeWidth="1.5" />
      <path d="M180 278 L175 290 L185 290 Z" stroke="white" strokeWidth="1" fill="white" fillOpacity="0.3" />
      <path d="M220 278 L215 290 L225 290 Z" stroke="white" strokeWidth="1" fill="white" fillOpacity="0.3" />
      <circle cx="200" cy="270" r="3" fill="#c9af81" />
      
      {/* Connecting nodes */}
      <circle cx="176" cy="160" r="4" fill="white" fillOpacity="0.5" />
      <circle cx="224" cy="160" r="4" fill="white" fillOpacity="0.5" />
      <circle cx="200" cy="184" r="4" fill="white" fillOpacity="0.5" />
      
      {/* Decision label */}
      <text x="200" y="48" textAnchor="middle" fill="#c9af81" fontSize="12" fontFamily="Inter" fontWeight="500">FORUM SELECTION</text>
      <path d="M140 54 L260 54" stroke="#c9af81" strokeWidth="0.5" strokeOpacity="0.5" />
    </svg>
  );
}
