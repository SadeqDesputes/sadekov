import { Search, MessageSquare, FileCheck, CheckCircle2 } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: "Assess",
    subtitle: "Review clause & facts"
  },
  {
    icon: MessageSquare,
    title: "Advise",
    subtitle: "Explain your options"
  },
  {
    icon: FileCheck,
    title: "Structure",
    subtitle: "Plan the approach"
  },
  {
    icon: CheckCircle2,
    title: "Proceed",
    subtitle: "Act with clarity in the right forum",
    isOutcome: true
  }
];

// Desktop: Node positions on the wavy path (calculated from path equation)
// Path: M 60 100 C 130 30, 200 30, 270 100 C 340 170, 410 170, 480 100 C 550 30, 620 30, 690 100 C 760 170, 830 170, 900 100
// These are approximate midpoints of each curve segment
const desktopPositions = [
  { x: 60, y: 100 },   // Start of path
  { x: 270, y: 100 },  // End of first curve (midpoint)
  { x: 480, y: 100 },  // End of second curve (midpoint)
  { x: 690, y: 100 },  // End of third curve (midpoint)
];

export function ProcessFlow({ className = "" }: { className?: string }) {
  return (
    <div className={`${className}`}>
      {/* Desktop: Wavy roadmap */}
      <div className="hidden md:block">
        <div className="relative w-full" style={{ height: '280px' }}>
          {/* SVG with wavy path */}
          <svg 
            className="absolute inset-0 w-full h-full"
            viewBox="0 0 960 280"
            preserveAspectRatio="xMidYMid meet"
            fill="none"
          >
            {/* Main wavy dashed path - sine wave pattern */}
            <path
              d="M 60 140 
                 C 130 60, 200 60, 270 140 
                 C 340 220, 410 220, 480 140 
                 C 550 60, 620 60, 690 140
                 C 760 220, 830 220, 900 140"
              stroke="currentColor"
              className="text-beige"
              strokeWidth="3"
              strokeDasharray="10 8"
              fill="none"
            />
            {/* Arrowheads along the path */}
            <polygon points="160,85 175,100 160,115" fill="currentColor" className="text-beige" />
            <polygon points="375,195 390,180 375,165" fill="currentColor" className="text-beige" />
            <polygon points="580,85 595,100 580,115" fill="currentColor" className="text-beige" />
            <polygon points="795,195 810,180 795,165" fill="currentColor" className="text-beige" />
          </svg>

          {/* Step 1 - positioned at path start (60, 140) */}
          <div className="absolute" style={{ left: '6.25%', top: '50%', transform: 'translate(-50%, -50%)' }}>
            <span className="absolute -top-16 left-1/2 -translate-x-1/2 text-xs font-medium text-beige uppercase tracking-wider whitespace-nowrap">
              Start
            </span>
            <DesktopNode step={steps[0]} index={0} />
          </div>

          {/* Step 2 - positioned at first curve end (270, 140) */}
          <div className="absolute" style={{ left: '28.125%', top: '50%', transform: 'translate(-50%, -50%)' }}>
            <DesktopNode step={steps[1]} index={1} />
          </div>

          {/* Step 3 - positioned at second curve end (480, 140) */}
          <div className="absolute" style={{ left: '50%', top: '50%', transform: 'translate(-50%, -50%)' }}>
            <DesktopNode step={steps[2]} index={2} />
          </div>

          {/* Step 4 - positioned at third curve end (690, 140) */}
          <div className="absolute" style={{ left: '71.875%', top: '50%', transform: 'translate(-50%, -50%)' }}>
            <DesktopNode step={steps[3]} index={3} />
            <span className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-xs font-medium text-beige uppercase tracking-wider whitespace-nowrap">
              Outcome
            </span>
          </div>
        </div>
      </div>

      {/* Mobile: Vertical roadmap */}
      <div className="flex md:hidden">
        <div className="relative w-full" style={{ minHeight: '520px' }}>
          {/* SVG Vertical path */}
          <svg 
            className="absolute left-1/2 -translate-x-1/2 h-full w-16"
            viewBox="0 0 64 520"
            preserveAspectRatio="xMidYMin meet"
            fill="none"
          >
            {/* Vertical dashed path */}
            <path
              d="M 32 50 L 32 470"
              stroke="currentColor"
              className="text-beige"
              strokeWidth="3"
              strokeDasharray="10 8"
              fill="none"
            />
            {/* Arrowheads */}
            <polygon points="32,140 24,125 40,125" fill="currentColor" className="text-beige" />
            <polygon points="32,260 24,245 40,245" fill="currentColor" className="text-beige" />
            <polygon points="32,380 24,365 40,365" fill="currentColor" className="text-beige" />
          </svg>

          {/* Mobile nodes - centered on the vertical path */}
          {steps.map((step, index) => (
            <div 
              key={step.title}
              className="absolute left-1/2 -translate-x-1/2"
              style={{ top: `${50 + index * 130}px` }}
            >
              {index === 0 && (
                <span className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-medium text-beige uppercase tracking-wider">
                  Start
                </span>
              )}
              {index === 3 && (
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs font-medium text-beige uppercase tracking-wider">
                  Outcome
                </span>
              )}
              <MobileNode step={step} index={index} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

interface NodeProps {
  step: typeof steps[number];
  index: number;
}

function DesktopNode({ step, index }: NodeProps) {
  const isOutcome = step.isOutcome;
  
  return (
    <div 
      className="group flex flex-col items-center cursor-pointer transition-all duration-300 hover:-translate-y-1"
      tabIndex={0}
      role="listitem"
      aria-label={`Step ${index + 1}: ${step.title} - ${step.subtitle}`}
    >
      <div className="relative">
        {/* Step number badge */}
        <div className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-beige text-primary text-xs font-semibold flex items-center justify-center z-10">
          {index + 1}
        </div>
        
        {/* Icon circle */}
        <div className={`w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 
          ${isOutcome 
            ? 'bg-primary border-[3px] border-beige shadow-[0_0_20px_rgba(201,175,129,0.3)] group-hover:shadow-[0_0_30px_rgba(201,175,129,0.5)]' 
            : 'bg-primary border-2 border-beige/40 group-hover:border-beige group-hover:shadow-lg group-hover:shadow-beige/20'
          }
          group-focus-visible:border-beige group-focus-visible:ring-2 group-focus-visible:ring-beige/50 group-focus-visible:ring-offset-2 group-focus-visible:ring-offset-muted`}
        >
          <step.icon className={`text-beige ${isOutcome ? 'w-9 h-9' : 'w-8 h-8'}`} />
        </div>
      </div>
      
      <div className="text-center mt-3">
        <p className={`font-semibold text-foreground ${isOutcome ? 'text-lg' : 'text-base'}`}>
          {step.title}
        </p>
        <p className="text-xs text-muted-foreground max-w-[140px]">{step.subtitle}</p>
      </div>
    </div>
  );
}

function MobileNode({ step, index }: NodeProps) {
  const isOutcome = step.isOutcome;
  
  return (
    <div 
      className="group flex flex-col items-center cursor-pointer"
      tabIndex={0}
      role="listitem"
      aria-label={`Step ${index + 1}: ${step.title} - ${step.subtitle}`}
    >
      <div className="relative">
        {/* Step number badge */}
        <div className="absolute -top-1 -left-1 w-5 h-5 rounded-full bg-beige text-primary text-xs font-semibold flex items-center justify-center z-10">
          {index + 1}
        </div>
        
        {/* Icon circle */}
        <div className={`w-14 h-14 rounded-full flex items-center justify-center
          ${isOutcome 
            ? 'bg-primary border-[3px] border-beige shadow-[0_0_15px_rgba(201,175,129,0.3)]' 
            : 'bg-primary border-2 border-beige/40'
          }`}
        >
          <step.icon className={`text-beige ${isOutcome ? 'w-6 h-6' : 'w-5 h-5'}`} />
        </div>
      </div>
      
      <div className="text-center mt-2">
        <p className={`font-semibold text-foreground ${isOutcome ? 'text-sm' : 'text-sm'}`}>
          {step.title}
        </p>
        <p className="text-[11px] text-muted-foreground max-w-[120px] leading-tight">{step.subtitle}</p>
      </div>
    </div>
  );
}
