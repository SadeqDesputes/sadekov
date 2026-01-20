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

export function ProcessFlow({ className = "" }: { className?: string }) {
  return (
    <div className={`${className}`}>
      {/* Desktop: Wavy roadmap left-to-right */}
      <div className="hidden md:block relative">
        {/* SVG Wavy Path with arrows */}
        <svg 
          className="absolute inset-0 w-full h-full pointer-events-none" 
          viewBox="0 0 900 200" 
          preserveAspectRatio="xMidYMid meet"
          fill="none"
        >
          {/* Main wavy dashed path */}
          <path
            d="M 80 100 
               C 150 40, 200 40, 270 100 
               C 340 160, 390 160, 460 100 
               C 530 40, 580 40, 650 100
               C 720 160, 770 160, 820 100"
            stroke="currentColor"
            className="text-beige"
            strokeWidth="3"
            strokeDasharray="8 6"
            fill="none"
          />
          {/* Arrowheads along the path */}
          <polygon points="175,58 188,68 178,78" fill="currentColor" className="text-beige" />
          <polygon points="365,142 378,132 368,122" fill="currentColor" className="text-beige" />
          <polygon points="555,58 568,68 558,78" fill="currentColor" className="text-beige" />
          <polygon points="745,142 758,132 748,122" fill="currentColor" className="text-beige" />
        </svg>

        {/* Nodes positioned along the wavy path */}
        <div className="relative flex justify-between items-center px-8 py-8" style={{ minHeight: '220px' }}>
          {/* Step 1 - Top position */}
          <div className="relative flex flex-col items-center" style={{ marginTop: '-30px' }}>
            {/* Start marker */}
            <span className="absolute -top-8 text-xs font-medium text-beige uppercase tracking-wider">
              Start
            </span>
            <StepNode step={steps[0]} index={0} />
          </div>

          {/* Step 2 - Bottom position */}
          <div className="relative flex flex-col items-center" style={{ marginTop: '50px' }}>
            <StepNode step={steps[1]} index={1} />
          </div>

          {/* Step 3 - Top position */}
          <div className="relative flex flex-col items-center" style={{ marginTop: '-30px' }}>
            <StepNode step={steps[2]} index={2} />
          </div>

          {/* Step 4 - Bottom position with Outcome emphasis */}
          <div className="relative flex flex-col items-center" style={{ marginTop: '50px' }}>
            <StepNode step={steps[3]} index={3} />
            {/* Outcome marker */}
            <span className="absolute -bottom-8 text-xs font-medium text-beige uppercase tracking-wider">
              Outcome
            </span>
          </div>
        </div>
      </div>

      {/* Mobile: Vertical wavy roadmap */}
      <div className="flex md:hidden relative">
        {/* SVG Vertical Wavy Path */}
        <svg 
          className="absolute left-1/2 -translate-x-1/2 h-full pointer-events-none" 
          width="120"
          height="100%"
          viewBox="0 0 120 500"
          preserveAspectRatio="xMidYMin meet"
          fill="none"
        >
          {/* Vertical wavy dashed path */}
          <path
            d="M 60 30 
               C 20 70, 20 100, 60 140 
               C 100 180, 100 210, 60 250
               C 20 290, 20 320, 60 360
               C 100 400, 100 430, 60 470"
            stroke="currentColor"
            className="text-beige"
            strokeWidth="3"
            strokeDasharray="8 6"
            fill="none"
          />
          {/* Arrowheads */}
          <polygon points="35,90 45,103 55,93" fill="currentColor" className="text-beige" />
          <polygon points="85,200 75,213 65,203" fill="currentColor" className="text-beige" />
          <polygon points="35,310 45,323 55,313" fill="currentColor" className="text-beige" />
          <polygon points="85,420 75,433 65,423" fill="currentColor" className="text-beige" />
        </svg>

        {/* Mobile nodes */}
        <div className="relative flex flex-col items-center w-full py-4">
          {steps.map((step, index) => (
            <div 
              key={step.title} 
              className={`relative flex items-center gap-4 w-full max-w-xs mb-16 last:mb-0 ${
                index % 2 === 0 ? 'mr-12 self-start ml-4' : 'ml-12 self-end mr-4'
              }`}
            >
              {/* Start/Outcome markers for mobile */}
              {index === 0 && (
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-medium text-beige uppercase tracking-wider">
                  Start
                </span>
              )}
              {index === 3 && (
                <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs font-medium text-beige uppercase tracking-wider">
                  Outcome
                </span>
              )}
              <MobileStepNode step={step} index={index} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

interface StepNodeProps {
  step: typeof steps[number];
  index: number;
}

function StepNode({ step, index }: StepNodeProps) {
  const isOutcome = step.isOutcome;
  
  return (
    <div 
      className={`group flex flex-col items-center gap-3 cursor-pointer transition-all duration-300 hover:-translate-y-1 ${
        isOutcome ? 'relative' : ''
      }`}
      tabIndex={0}
      role="listitem"
      aria-label={`Step ${index + 1}: ${step.title} - ${step.subtitle}`}
    >
      <div className="relative">
        {/* Step number badge */}
        <div className={`absolute -top-2 -left-2 w-6 h-6 rounded-full text-xs font-semibold flex items-center justify-center z-10 ${
          isOutcome ? 'bg-beige text-primary' : 'bg-beige text-primary'
        }`}>
          {index + 1}
        </div>
        
        {/* Icon circle - emphasized for outcome */}
        <div className={`w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 
          ${isOutcome 
            ? 'bg-primary border-[3px] border-beige shadow-[0_0_20px_rgba(201,175,129,0.3)] group-hover:shadow-[0_0_30px_rgba(201,175,129,0.5)]' 
            : 'bg-primary border-2 border-beige/40 group-hover:border-beige group-hover:shadow-lg group-hover:shadow-beige/20'
          }
          group-focus-visible:border-beige group-focus-visible:ring-2 group-focus-visible:ring-beige/50 group-focus-visible:ring-offset-2 group-focus-visible:ring-offset-muted`}
        >
          <step.icon className={`w-8 h-8 text-beige ${isOutcome ? 'w-9 h-9' : ''}`} />
        </div>
      </div>
      
      <div className="text-center">
        <p className={`font-semibold text-foreground ${isOutcome ? 'text-lg' : 'text-base'}`}>
          {step.title}
        </p>
        <p className="text-xs text-muted-foreground max-w-[130px]">{step.subtitle}</p>
      </div>
    </div>
  );
}

function MobileStepNode({ step, index }: StepNodeProps) {
  const isOutcome = step.isOutcome;
  
  return (
    <div 
      className="group flex items-center gap-4 cursor-pointer transition-all duration-300"
      tabIndex={0}
      role="listitem"
      aria-label={`Step ${index + 1}: ${step.title} - ${step.subtitle}`}
    >
      <div className="relative flex-shrink-0">
        {/* Step number badge */}
        <div className={`absolute -top-1 -left-1 w-5 h-5 rounded-full text-xs font-semibold flex items-center justify-center z-10 ${
          isOutcome ? 'bg-beige text-primary' : 'bg-beige text-primary'
        }`}>
          {index + 1}
        </div>
        
        {/* Icon circle */}
        <div className={`w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300
          ${isOutcome 
            ? 'bg-primary border-[3px] border-beige shadow-[0_0_15px_rgba(201,175,129,0.3)]' 
            : 'bg-primary border-2 border-beige/40 group-hover:border-beige'
          }
          group-focus-visible:border-beige group-focus-visible:ring-2 group-focus-visible:ring-beige/50`}
        >
          <step.icon className={`text-beige ${isOutcome ? 'w-7 h-7' : 'w-6 h-6'}`} />
        </div>
      </div>
      
      <div className="flex-1">
        <p className={`font-semibold text-foreground ${isOutcome ? 'text-base' : 'text-sm'}`}>
          {step.title}
        </p>
        <p className="text-xs text-muted-foreground">{step.subtitle}</p>
      </div>
    </div>
  );
}
