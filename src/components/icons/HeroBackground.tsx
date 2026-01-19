export function HeroBackground({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 800 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid slice"
    >
      {/* Subtle grid pattern */}
      <defs>
        <pattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse">
          <path
            d="M 60 0 L 0 0 0 60"
            fill="none"
            stroke="white"
            strokeWidth="0.3"
            strokeOpacity="0.05"
          />
        </pattern>
        <linearGradient id="fade" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="white" stopOpacity="0.03" />
          <stop offset="100%" stopColor="white" stopOpacity="0" />
        </linearGradient>
      </defs>
      
      <rect width="800" height="600" fill="url(#grid)" />
      
      {/* Abstract geometric lines */}
      <line x1="0" y1="150" x2="400" y2="150" stroke="white" strokeWidth="0.5" strokeOpacity="0.05" />
      <line x1="0" y1="300" x2="600" y2="300" stroke="white" strokeWidth="0.5" strokeOpacity="0.05" />
      <line x1="0" y1="450" x2="350" y2="450" stroke="white" strokeWidth="0.5" strokeOpacity="0.05" />
      
      {/* Diagonal accent lines */}
      <line x1="600" y1="0" x2="800" y2="200" stroke="#c9af81" strokeWidth="0.5" strokeOpacity="0.1" />
      <line x1="650" y1="0" x2="800" y2="150" stroke="#c9af81" strokeWidth="0.5" strokeOpacity="0.08" />
      <line x1="700" y1="0" x2="800" y2="100" stroke="#c9af81" strokeWidth="0.5" strokeOpacity="0.06" />
      
      {/* Corner accent */}
      <circle cx="750" cy="50" r="100" fill="url(#fade)" />
      
      {/* Bottom decorative elements */}
      <path
        d="M 0 580 Q 200 560 400 580 T 800 580"
        stroke="white"
        strokeWidth="0.5"
        strokeOpacity="0.05"
        fill="none"
      />
    </svg>
  );
}
