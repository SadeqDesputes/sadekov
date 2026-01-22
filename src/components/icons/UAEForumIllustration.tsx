export function UAEForumIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 400 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        <linearGradient id="cardGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="0.12" />
          <stop offset="100%" stopColor="white" stopOpacity="0.04" />
        </linearGradient>
        <linearGradient id="accentGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#c9af81" />
          <stop offset="100%" stopColor="#a08960" />
        </linearGradient>
        <filter id="softShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="8" stdDeviation="16" floodColor="#000" floodOpacity="0.25"/>
        </filter>
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="2" result="blur"/>
          <feMerge>
            <feMergeNode in="blur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
      </defs>

      {/* Central decision point */}
      <g transform="translate(200, 60)">
        <circle r="8" fill="#c9af81" opacity="0.15">
          <animate attributeName="r" values="8;14;8" dur="3s" repeatCount="indefinite"/>
          <animate attributeName="opacity" values="0.15;0.05;0.15" dur="3s" repeatCount="indefinite"/>
        </circle>
        <circle r="4" fill="#c9af81"/>
        <text y="-20" textAnchor="middle" fill="#c9af81" fontSize="10" fontFamily="Inter" fontWeight="600" letterSpacing="1.5">YOUR DISPUTE</text>
      </g>

      {/* Connection lines from center */}
      <path d="M200 68 L200 120" stroke="#c9af81" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6"/>
      <path d="M200 120 L100 180" stroke="#c9af81" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6"/>
      <path d="M200 120 L300 180" stroke="#c9af81" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6"/>
      <path d="M200 120 L200 320" stroke="#c9af81" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.6"/>
      
      {/* Branch node */}
      <circle cx="200" cy="120" r="6" fill="url(#accentGradient)"/>

      {/* DIFC Card - Right */}
      <g filter="url(#softShadow)" transform="translate(230, 160)">
        <rect width="150" height="130" rx="12" fill="url(#cardGradient)" stroke="white" strokeOpacity="0.2" strokeWidth="1"/>
        
        {/* Icon */}
        <g transform="translate(55, 25)">
          <rect x="0" y="30" width="40" height="4" rx="1" fill="white" opacity="0.9"/>
          <rect x="4" y="12" width="5" height="18" rx="1" fill="white" opacity="0.7"/>
          <rect x="13" y="12" width="5" height="18" rx="1" fill="white" opacity="0.7"/>
          <rect x="22" y="12" width="5" height="18" rx="1" fill="white" opacity="0.7"/>
          <rect x="31" y="12" width="5" height="18" rx="1" fill="white" opacity="0.7"/>
          <path d="M0 12 L20 0 L40 12" stroke="white" strokeWidth="2" fill="none" opacity="0.9"/>
        </g>
        
        <text x="75" y="80" textAnchor="middle" fill="white" fontSize="18" fontFamily="Inter" fontWeight="700">DIFC</text>
        <text x="75" y="98" textAnchor="middle" fill="white" opacity="0.6" fontSize="12" fontFamily="Inter">Courts</text>
        
        {/* Location badge */}
        <rect x="22" y="108" width="106" height="18" rx="9" fill="#c9af81" opacity="0.15"/>
        <text x="75" y="120" textAnchor="middle" fill="#c9af81" fontSize="10" fontFamily="Inter" fontWeight="500">Dubai, UAE</text>
      </g>

      {/* ADGM Card - Left */}
      <g filter="url(#softShadow)" transform="translate(20, 160)">
        <rect width="150" height="130" rx="12" fill="url(#cardGradient)" stroke="white" strokeOpacity="0.2" strokeWidth="1"/>
        
        {/* Icon */}
        <g transform="translate(55, 25)">
          <rect x="0" y="30" width="40" height="4" rx="1" fill="white" opacity="0.9"/>
          <rect x="4" y="12" width="5" height="18" rx="1" fill="white" opacity="0.7"/>
          <rect x="13" y="12" width="5" height="18" rx="1" fill="white" opacity="0.7"/>
          <rect x="22" y="12" width="5" height="18" rx="1" fill="white" opacity="0.7"/>
          <rect x="31" y="12" width="5" height="18" rx="1" fill="white" opacity="0.7"/>
          <path d="M0 12 L20 0 L40 12" stroke="white" strokeWidth="2" fill="none" opacity="0.9"/>
        </g>
        
        <text x="75" y="80" textAnchor="middle" fill="white" fontSize="18" fontFamily="Inter" fontWeight="700">ADGM</text>
        <text x="75" y="98" textAnchor="middle" fill="white" opacity="0.6" fontSize="12" fontFamily="Inter">Courts</text>
        
        {/* Location badge */}
        <rect x="17" y="108" width="116" height="18" rx="9" fill="#c9af81" opacity="0.15"/>
        <text x="75" y="120" textAnchor="middle" fill="#c9af81" fontSize="10" fontFamily="Inter" fontWeight="500">Abu Dhabi, UAE</text>
      </g>

      {/* Arbitration Card - Bottom Center */}
      <g filter="url(#softShadow)" transform="translate(100, 330)">
        <rect width="200" height="130" rx="12" fill="url(#cardGradient)" stroke="#c9af81" strokeOpacity="0.3" strokeWidth="1.5"/>
        
        {/* Scales of Justice Icon */}
        <g transform="translate(80, 20)">
          <line x1="20" y1="8" x2="20" y2="38" stroke="white" strokeWidth="2" opacity="0.9"/>
          <line x1="4" y1="14" x2="36" y2="14" stroke="white" strokeWidth="2" opacity="0.9"/>
          <circle cx="20" cy="6" r="5" fill="#c9af81"/>
          
          {/* Left pan */}
          <line x1="6" y1="14" x2="6" y2="22" stroke="white" strokeWidth="1.5" opacity="0.7"/>
          <path d="M0 22 L6 32 L12 22 Z" fill="white" opacity="0.5"/>
          
          {/* Right pan */}
          <line x1="34" y1="14" x2="34" y2="22" stroke="white" strokeWidth="1.5" opacity="0.7"/>
          <path d="M28 22 L34 32 L40 22 Z" fill="white" opacity="0.5"/>
          
          {/* Base */}
          <rect x="10" y="38" width="20" height="4" rx="2" fill="white" opacity="0.7"/>
        </g>
        
        <text x="100" y="80" textAnchor="middle" fill="white" fontSize="18" fontFamily="Inter" fontWeight="700">Arbitration</text>
        <text x="100" y="98" textAnchor="middle" fill="white" opacity="0.6" fontSize="12" fontFamily="Inter">DIAC / ICC</text>
        
        {/* Note badge */}
        <rect x="35" y="108" width="130" height="18" rx="9" fill="#c9af81" opacity="0.15"/>
        <text x="100" y="120" textAnchor="middle" fill="#c9af81" fontSize="10" fontFamily="Inter" fontStyle="italic">If valid clause exists</text>
      </g>

      {/* Small connection dots */}
      <circle cx="100" cy="180" r="4" fill="#c9af81" opacity="0.8"/>
      <circle cx="300" cy="180" r="4" fill="#c9af81" opacity="0.8"/>
      <circle cx="200" cy="320" r="4" fill="#c9af81" opacity="0.8"/>

      {/* Decorative elements */}
      <circle cx="50" cy="80" r="2" fill="white" opacity="0.1"/>
      <circle cx="350" cy="100" r="2" fill="white" opacity="0.1"/>
      <circle cx="380" cy="400" r="3" fill="#c9af81" opacity="0.2"/>
      <circle cx="20" cy="420" r="2" fill="white" opacity="0.1"/>
    </svg>
  );
}