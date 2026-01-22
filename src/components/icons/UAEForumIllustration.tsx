export function UAEForumIllustration({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Subtle Gulf region background context */}
      <ellipse cx="240" cy="200" rx="220" ry="180" fill="white" fillOpacity="0.02" />
      <ellipse cx="240" cy="200" rx="180" ry="140" fill="white" fillOpacity="0.03" />
      
      {/* UAE Map Shape - Simplified outline */}
      <path
        d="M80 180 
           C90 160, 120 140, 160 135
           L200 130
           C230 128, 260 125, 300 130
           L360 140
           C400 150, 420 170, 430 190
           L440 220
           C445 250, 430 280, 400 295
           L340 310
           C300 320, 260 325, 220 320
           L160 310
           C120 300, 90 280, 80 250
           L75 220
           C70 200, 75 185, 80 180Z"
        fill="white"
        fillOpacity="0.08"
        stroke="#c9af81"
        strokeWidth="1.5"
        strokeOpacity="0.6"
      />
      
      {/* Inner subtle texture lines */}
      <path
        d="M120 200 Q200 190, 280 195 Q360 200, 400 220"
        stroke="white"
        strokeWidth="0.5"
        strokeOpacity="0.1"
        fill="none"
      />
      <path
        d="M140 240 Q220 235, 300 240 Q380 245, 410 260"
        stroke="white"
        strokeWidth="0.5"
        strokeOpacity="0.1"
        fill="none"
      />
      
      {/* Abu Dhabi location - Western UAE */}
      <g className="abu-dhabi-group">
        {/* Location pulse ring */}
        <circle cx="180" cy="220" r="20" fill="#c9af81" fillOpacity="0.1">
          <animate attributeName="r" values="18;24;18" dur="3s" repeatCount="indefinite" />
          <animate attributeName="fill-opacity" values="0.15;0.05;0.15" dur="3s" repeatCount="indefinite" />
        </circle>
        {/* Location marker */}
        <circle cx="180" cy="220" r="8" fill="#c9af81" />
        <circle cx="180" cy="220" r="4" fill="white" />
        {/* Abu Dhabi label */}
        <text x="180" y="252" textAnchor="middle" fill="white" fontSize="11" fontFamily="Inter" fontWeight="500">Abu Dhabi</text>
      </g>
      
      {/* Dubai location - Eastern UAE coast */}
      <g className="dubai-group">
        {/* Location pulse ring */}
        <circle cx="320" cy="185" r="20" fill="#c9af81" fillOpacity="0.1">
          <animate attributeName="r" values="18;24;18" dur="3s" repeatCount="indefinite" begin="0.5s" />
          <animate attributeName="fill-opacity" values="0.15;0.05;0.15" dur="3s" repeatCount="indefinite" begin="0.5s" />
        </circle>
        {/* Location marker */}
        <circle cx="320" cy="185" r="8" fill="#c9af81" />
        <circle cx="320" cy="185" r="4" fill="white" />
        {/* Dubai label */}
        <text x="320" y="217" textAnchor="middle" fill="white" fontSize="11" fontFamily="Inter" fontWeight="500">Dubai</text>
      </g>
      
      {/* Connection lines from locations to court boxes */}
      {/* Abu Dhabi to ADGM */}
      <path
        d="M180 220 L180 280 L120 320"
        stroke="#c9af81"
        strokeWidth="1.5"
        strokeDasharray="4 3"
        fill="none"
        markerEnd="url(#arrowhead)"
      />
      
      {/* Dubai to DIFC */}
      <path
        d="M320 185 L320 280 L360 320"
        stroke="#c9af81"
        strokeWidth="1.5"
        strokeDasharray="4 3"
        fill="none"
        markerEnd="url(#arrowhead)"
      />
      
      {/* ADGM Courts Box */}
      <g className="adgm-box">
        <rect x="60" y="320" width="120" height="50" rx="6" fill="white" fillOpacity="0.1" stroke="white" strokeWidth="1" />
        {/* Court icon */}
        <path d="M100 332 L85 340 L85 358 L115 358 L115 340 Z" stroke="white" strokeWidth="1" fill="none" />
        <rect x="90" y="346" width="4" height="12" fill="white" fillOpacity="0.4" />
        <rect x="106" y="346" width="4" height="12" fill="white" fillOpacity="0.4" />
        <line x1="85" y1="340" x2="100" y2="332" stroke="white" strokeWidth="1" />
        <line x1="115" y1="340" x2="100" y2="332" stroke="white" strokeWidth="1" />
        <text x="155" y="350" fill="white" fontSize="12" fontFamily="Inter" fontWeight="500">ADGM</text>
        <text x="155" y="363" fill="white" fillOpacity="0.7" fontSize="10" fontFamily="Inter">Courts</text>
      </g>
      
      {/* DIFC Courts Box */}
      <g className="difc-box">
        <rect x="300" y="320" width="120" height="50" rx="6" fill="white" fillOpacity="0.1" stroke="white" strokeWidth="1" />
        {/* Court icon */}
        <path d="M340 332 L325 340 L325 358 L355 358 L355 340 Z" stroke="white" strokeWidth="1" fill="none" />
        <rect x="330" y="346" width="4" height="12" fill="white" fillOpacity="0.4" />
        <rect x="346" y="346" width="4" height="12" fill="white" fillOpacity="0.4" />
        <line x1="325" y1="340" x2="340" y2="332" stroke="white" strokeWidth="1" />
        <line x1="355" y1="340" x2="340" y2="332" stroke="white" strokeWidth="1" />
        <text x="395" y="350" fill="white" fontSize="12" fontFamily="Inter" fontWeight="500">DIFC</text>
        <text x="395" y="363" fill="white" fillOpacity="0.7" fontSize="10" fontFamily="Inter">Courts</text>
      </g>
      
      {/* Arbitration - Third Path (not location-based) */}
      {/* Central decision node */}
      <circle cx="240" cy="100" r="16" fill="#c9af81" fillOpacity="0.15" stroke="#c9af81" strokeWidth="1" />
      <circle cx="240" cy="100" r="8" fill="#c9af81" />
      
      {/* "OR" / Decision label */}
      <text x="240" y="75" textAnchor="middle" fill="#c9af81" fontSize="10" fontFamily="Inter" fontWeight="600" letterSpacing="0.5">FORUM CHOICE</text>
      
      {/* Lines from decision node to UAE (courts path) */}
      <path
        d="M240 116 L240 150"
        stroke="white"
        strokeWidth="1"
        strokeOpacity="0.3"
        strokeDasharray="3 3"
        fill="none"
      />
      
      {/* Arbitration path - branches off to the side */}
      <path
        d="M256 100 L380 80 L420 60"
        stroke="#c9af81"
        strokeWidth="1.5"
        strokeDasharray="4 3"
        fill="none"
        markerEnd="url(#arrowhead)"
      />
      
      {/* Arbitration Box - floating, not tied to geography */}
      <g className="arbitration-box">
        <rect x="380" y="20" width="95" height="55" rx="6" fill="#c9af81" fillOpacity="0.15" stroke="#c9af81" strokeWidth="1" />
        {/* Scales icon */}
        <line x1="405" y1="35" x2="405" y2="52" stroke="white" strokeWidth="1.5" />
        <line x1="392" y1="40" x2="418" y2="40" stroke="white" strokeWidth="1.5" />
        <path d="M392 40 L388 50 L396 50 Z" stroke="white" strokeWidth="1" fill="white" fillOpacity="0.3" />
        <path d="M418 40 L414 50 L422 50 Z" stroke="white" strokeWidth="1" fill="white" fillOpacity="0.3" />
        <circle cx="405" cy="33" r="2.5" fill="#c9af81" />
        {/* Label */}
        <text x="450" y="42" fill="white" fontSize="10" fontFamily="Inter" fontWeight="500">Arbitration</text>
        <text x="450" y="54" fill="white" fillOpacity="0.7" fontSize="9" fontFamily="Inter">DIAC / ICC</text>
        <text x="450" y="66" fill="#c9af81" fillOpacity="0.8" fontSize="8" fontFamily="Inter" fontStyle="italic">If clause exists</text>
      </g>
      
      {/* "Courts" label for geographic path */}
      <text x="240" y="165" textAnchor="middle" fill="white" fillOpacity="0.5" fontSize="9" fontFamily="Inter" fontWeight="400" letterSpacing="1">COURTS</text>
      
      {/* Arrow marker definition */}
      <defs>
        <marker
          id="arrowhead"
          markerWidth="8"
          markerHeight="6"
          refX="6"
          refY="3"
          orient="auto"
          markerUnits="strokeWidth"
        >
          <polygon points="0 0, 8 3, 0 6" fill="#c9af81" />
        </marker>
      </defs>
      
      {/* Subtle decorative elements */}
      <circle cx="60" cy="120" r="2" fill="white" fillOpacity="0.2" />
      <circle cx="440" cy="280" r="2" fill="white" fillOpacity="0.2" />
      <circle cx="50" cy="280" r="1.5" fill="#c9af81" fillOpacity="0.3" />
    </svg>
  );
}