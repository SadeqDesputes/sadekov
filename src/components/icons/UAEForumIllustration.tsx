export function UAEForumIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 520 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <defs>
        {/* Gradients */}
        <linearGradient id="uaeMapGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#c9af81" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#c9af81" stopOpacity="0.08" />
        </linearGradient>
        <linearGradient id="goldGlow" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#c9af81" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#c9af81" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient id="courtGradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="0.15" />
          <stop offset="100%" stopColor="white" stopOpacity="0.05" />
        </linearGradient>
        <linearGradient id="arbGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#c9af81" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#c9af81" stopOpacity="0.1" />
        </linearGradient>
        
        {/* Glow filter */}
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
          <feMerge>
            <feMergeNode in="coloredBlur"/>
            <feMergeNode in="SourceGraphic"/>
          </feMerge>
        </filter>
        
        {/* Shadow filter */}
        <filter id="cardShadow" x="-20%" y="-20%" width="140%" height="140%">
          <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#000" floodOpacity="0.3"/>
        </filter>
        
        {/* Arrow marker */}
        <marker id="arrowGold" markerWidth="10" markerHeight="8" refX="8" refY="4" orient="auto">
          <polygon points="0 0, 10 4, 0 8" fill="#c9af81" />
        </marker>
      </defs>

      {/* Background decorative circles */}
      <circle cx="260" cy="220" r="200" fill="white" fillOpacity="0.02" />
      <circle cx="260" cy="220" r="160" stroke="white" strokeOpacity="0.03" strokeWidth="1" fill="none" />
      <circle cx="260" cy="220" r="120" stroke="white" strokeOpacity="0.02" strokeWidth="1" fill="none" />

      {/* Title Badge - UAE FREE ZONES */}
      <g filter="url(#cardShadow)">
        <rect x="175" y="25" width="170" height="32" rx="16" fill="#c9af81" fillOpacity="0.15" stroke="#c9af81" strokeWidth="1" />
        <text x="260" y="46" textAnchor="middle" fill="#c9af81" fontSize="12" fontFamily="Inter" fontWeight="600" letterSpacing="2">UAE FREE ZONES</text>
      </g>

      {/* UAE Map - Stylized elegant shape */}
      <g transform="translate(80, 100)">
        {/* Map shadow */}
        <path
          d="M20 100 
             C30 70, 70 50, 120 45
             L180 40
             C220 38, 260 40, 300 50
             L340 60
             C370 70, 385 90, 390 115
             L395 145
             C398 175, 385 200, 360 215
             L310 235
             C270 245, 220 250, 170 245
             L110 235
             C70 225, 40 200, 30 170
             L22 140
             C18 115, 18 105, 20 100Z"
          fill="black"
          fillOpacity="0.2"
          transform="translate(4, 6)"
        />
        
        {/* Main map shape */}
        <path
          d="M20 100 
             C30 70, 70 50, 120 45
             L180 40
             C220 38, 260 40, 300 50
             L340 60
             C370 70, 385 90, 390 115
             L395 145
             C398 175, 385 200, 360 215
             L310 235
             C270 245, 220 250, 170 245
             L110 235
             C70 225, 40 200, 30 170
             L22 140
             C18 115, 18 105, 20 100Z"
          fill="url(#uaeMapGradient)"
          stroke="#c9af81"
          strokeWidth="2"
        />
        
        {/* Map inner details - coastline hints */}
        <path
          d="M340 80 Q360 100, 370 130 Q375 160, 360 190"
          stroke="white"
          strokeWidth="0.5"
          strokeOpacity="0.2"
          fill="none"
        />
        <path
          d="M60 130 Q80 145, 100 155 Q140 175, 180 180"
          stroke="white"
          strokeWidth="0.5"
          strokeOpacity="0.15"
          fill="none"
        />
        
        {/* Emirates divider lines - subtle */}
        <path d="M150 60 L130 200" stroke="white" strokeWidth="0.5" strokeOpacity="0.1" strokeDasharray="4 4" />
        <path d="M250 55 L270 210" stroke="white" strokeWidth="0.5" strokeOpacity="0.1" strokeDasharray="4 4" />
      </g>

      {/* Abu Dhabi Location Pin */}
      <g className="abu-dhabi-pin" filter="url(#glow)">
        {/* Pulse rings */}
        <circle cx="175" cy="245" r="25" fill="#c9af81" fillOpacity="0.1">
          <animate attributeName="r" values="20;30;20" dur="2.5s" repeatCount="indefinite" />
          <animate attributeName="fill-opacity" values="0.15;0.03;0.15" dur="2.5s" repeatCount="indefinite" />
        </circle>
        <circle cx="175" cy="245" r="15" fill="#c9af81" fillOpacity="0.15">
          <animate attributeName="r" values="12;18;12" dur="2.5s" repeatCount="indefinite" begin="0.3s" />
          <animate attributeName="fill-opacity" values="0.2;0.05;0.2" dur="2.5s" repeatCount="indefinite" begin="0.3s" />
        </circle>
        
        {/* Location pin shape */}
        <path
          d="M175 260 L165 245 C160 238, 160 228, 168 222 C176 216, 186 218, 190 225 C194 232, 192 240, 185 245 Z"
          fill="url(#goldGlow)"
          stroke="#c9af81"
          strokeWidth="1.5"
        />
        <circle cx="175" cy="235" r="5" fill="white" />
        
        {/* Label */}
        <text x="175" y="282" textAnchor="middle" fill="white" fontSize="13" fontFamily="Inter" fontWeight="600">Abu Dhabi</text>
      </g>

      {/* Dubai Location Pin */}
      <g className="dubai-pin" filter="url(#glow)">
        {/* Pulse rings */}
        <circle cx="345" cy="205" r="25" fill="#c9af81" fillOpacity="0.1">
          <animate attributeName="r" values="20;30;20" dur="2.5s" repeatCount="indefinite" begin="0.5s" />
          <animate attributeName="fill-opacity" values="0.15;0.03;0.15" dur="2.5s" repeatCount="indefinite" begin="0.5s" />
        </circle>
        <circle cx="345" cy="205" r="15" fill="#c9af81" fillOpacity="0.15">
          <animate attributeName="r" values="12;18;12" dur="2.5s" repeatCount="indefinite" begin="0.8s" />
          <animate attributeName="fill-opacity" values="0.2;0.05;0.2" dur="2.5s" repeatCount="indefinite" begin="0.8s" />
        </circle>
        
        {/* Location pin shape */}
        <path
          d="M345 220 L335 205 C330 198, 330 188, 338 182 C346 176, 356 178, 360 185 C364 192, 362 200, 355 205 Z"
          fill="url(#goldGlow)"
          stroke="#c9af81"
          strokeWidth="1.5"
        />
        <circle cx="345" cy="195" r="5" fill="white" />
        
        {/* Label */}
        <text x="345" y="242" textAnchor="middle" fill="white" fontSize="13" fontFamily="Inter" fontWeight="600">Dubai</text>
      </g>

      {/* Connection paths to court cards */}
      {/* Abu Dhabi to ADGM */}
      <path
        d="M175 285 C175 310, 140 330, 100 350"
        stroke="#c9af81"
        strokeWidth="2"
        strokeDasharray="6 4"
        fill="none"
        markerEnd="url(#arrowGold)"
      />
      
      {/* Dubai to DIFC */}
      <path
        d="M345 250 C345 280, 380 310, 420 340"
        stroke="#c9af81"
        strokeWidth="2"
        strokeDasharray="6 4"
        fill="none"
        markerEnd="url(#arrowGold)"
      />

      {/* ADGM Courts Card */}
      <g filter="url(#cardShadow)">
        <rect x="20" y="350" width="160" height="75" rx="8" fill="url(#courtGradient)" stroke="white" strokeWidth="1.5" />
        
        {/* Courthouse icon - detailed */}
        <g transform="translate(35, 362)">
          {/* Base */}
          <rect x="0" y="38" width="50" height="6" rx="1" fill="white" fillOpacity="0.8" />
          {/* Columns */}
          <rect x="5" y="18" width="6" height="20" rx="1" fill="white" fillOpacity="0.6" />
          <rect x="17" y="18" width="6" height="20" rx="1" fill="white" fillOpacity="0.6" />
          <rect x="29" y="18" width="6" height="20" rx="1" fill="white" fillOpacity="0.6" />
          <rect x="41" y="18" width="6" height="20" rx="1" fill="white" fillOpacity="0.6" />
          {/* Roof */}
          <path d="M0 18 L25 2 L50 18 Z" fill="white" fillOpacity="0.8" />
          {/* Top decoration */}
          <circle cx="25" cy="6" r="3" fill="#c9af81" />
        </g>
        
        {/* Text */}
        <text x="105" y="382" fill="white" fontSize="16" fontFamily="Inter" fontWeight="700">ADGM</text>
        <text x="105" y="400" fill="white" fillOpacity="0.7" fontSize="12" fontFamily="Inter">Courts</text>
        <text x="105" y="416" fill="#c9af81" fontSize="10" fontFamily="Inter" fontStyle="italic">Abu Dhabi</text>
      </g>

      {/* DIFC Courts Card */}
      <g filter="url(#cardShadow)">
        <rect x="340" y="340" width="160" height="75" rx="8" fill="url(#courtGradient)" stroke="white" strokeWidth="1.5" />
        
        {/* Courthouse icon - detailed */}
        <g transform="translate(355, 352)">
          {/* Base */}
          <rect x="0" y="38" width="50" height="6" rx="1" fill="white" fillOpacity="0.8" />
          {/* Columns */}
          <rect x="5" y="18" width="6" height="20" rx="1" fill="white" fillOpacity="0.6" />
          <rect x="17" y="18" width="6" height="20" rx="1" fill="white" fillOpacity="0.6" />
          <rect x="29" y="18" width="6" height="20" rx="1" fill="white" fillOpacity="0.6" />
          <rect x="41" y="18" width="6" height="20" rx="1" fill="white" fillOpacity="0.6" />
          {/* Roof */}
          <path d="M0 18 L25 2 L50 18 Z" fill="white" fillOpacity="0.8" />
          {/* Top decoration */}
          <circle cx="25" cy="6" r="3" fill="#c9af81" />
        </g>
        
        {/* Text */}
        <text x="425" y="372" fill="white" fontSize="16" fontFamily="Inter" fontWeight="700">DIFC</text>
        <text x="425" y="390" fill="white" fillOpacity="0.7" fontSize="12" fontFamily="Inter">Courts</text>
        <text x="425" y="406" fill="#c9af81" fontSize="10" fontFamily="Inter" fontStyle="italic">Dubai</text>
      </g>

      {/* Arbitration - Third path (international, not geographic) */}
      {/* Decision node in center top */}
      <g filter="url(#glow)">
        <circle cx="260" cy="75" r="20" fill="#c9af81" fillOpacity="0.1" stroke="#c9af81" strokeWidth="1" />
        <circle cx="260" cy="75" r="12" fill="#c9af81" fillOpacity="0.3" />
        <circle cx="260" cy="75" r="6" fill="#c9af81" />
      </g>

      {/* Path from decision to map (courts route) */}
      <path
        d="M260 95 L260 120"
        stroke="white"
        strokeWidth="1.5"
        strokeOpacity="0.3"
        strokeDasharray="4 4"
        fill="none"
      />
      <text x="260" y="138" textAnchor="middle" fill="white" fillOpacity="0.4" fontSize="9" fontFamily="Inter" letterSpacing="1">COURTS PATH</text>

      {/* Arbitration path - curves to right side */}
      <path
        d="M278 70 Q350 50, 420 40 L460 32"
        stroke="#c9af81"
        strokeWidth="2"
        strokeDasharray="6 4"
        fill="none"
        markerEnd="url(#arrowGold)"
      />
      
      {/* OR label */}
      <g transform="translate(305, 48)">
        <rect x="-15" y="-10" width="30" height="20" rx="10" fill="#171648" stroke="#c9af81" strokeWidth="1" />
        <text x="0" y="4" textAnchor="middle" fill="#c9af81" fontSize="10" fontFamily="Inter" fontWeight="600">OR</text>
      </g>

      {/* Arbitration Card - Premium floating card */}
      <g filter="url(#cardShadow)">
        <rect x="400" y="8" width="115" height="80" rx="8" fill="url(#arbGradient)" stroke="#c9af81" strokeWidth="1.5" />
        
        {/* Scales of Justice icon */}
        <g transform="translate(415, 18)">
          {/* Center pole */}
          <rect x="11" y="8" width="3" height="35" rx="1" fill="white" fillOpacity="0.8" />
          {/* Balance beam */}
          <rect x="0" y="12" width="25" height="3" rx="1" fill="white" fillOpacity="0.9" />
          {/* Left pan */}
          <path d="M2 15 L-2 28 L6 28 Z" fill="white" fillOpacity="0.6" stroke="white" strokeWidth="0.5" />
          <line x1="2" y1="15" x2="2" y2="20" stroke="white" strokeWidth="1" />
          {/* Right pan */}
          <path d="M23 15 L19 28 L27 28 Z" fill="white" fillOpacity="0.6" stroke="white" strokeWidth="0.5" />
          <line x1="23" y1="15" x2="23" y2="20" stroke="white" strokeWidth="1" />
          {/* Top ornament */}
          <circle cx="12.5" cy="6" r="4" fill="#c9af81" />
          <circle cx="12.5" cy="6" r="2" fill="white" fillOpacity="0.8" />
        </g>
        
        {/* Text */}
        <text x="467" y="32" fill="white" fontSize="11" fontFamily="Inter" fontWeight="700">Arbitration</text>
        <text x="467" y="48" fill="white" fillOpacity="0.8" fontSize="10" fontFamily="Inter">DIAC / ICC</text>
        
        {/* Clause note */}
        <rect x="408" y="60" width="100" height="20" rx="4" fill="white" fillOpacity="0.1" />
        <text x="458" y="74" textAnchor="middle" fill="#c9af81" fontSize="9" fontFamily="Inter" fontStyle="italic">If clause exists</text>
      </g>

      {/* Decorative elements */}
      <circle cx="40" cy="80" r="3" fill="#c9af81" fillOpacity="0.3" />
      <circle cx="490" cy="420" r="2" fill="white" fillOpacity="0.2" />
      <circle cx="30" cy="380" r="2" fill="#c9af81" fillOpacity="0.2" />
      
      {/* Subtle grid lines for premium feel */}
      <line x1="0" y1="220" x2="20" y2="220" stroke="white" strokeOpacity="0.1" strokeWidth="0.5" />
      <line x1="500" y1="220" x2="520" y2="220" stroke="white" strokeOpacity="0.1" strokeWidth="0.5" />
    </svg>
  );
}