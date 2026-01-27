import { Search, MessageSquare, FileCheck, ArrowRight } from 'lucide-react';

const steps = [
  {
    icon: Search,
    title: "Assessment",
    subtitle: "Check clause & facts"
  },
  {
    icon: MessageSquare,
    title: "Advice",
    subtitle: "Map your options"
  },
  {
    icon: FileCheck,
    title: "Proceedings",
    subtitle: "File in the right forum"
  },
  {
    icon: ArrowRight,
    title: "Enforcement",
    subtitle: "Enforce the outcome"
  }
];

export function ProcessFlow({ className = "" }: { className?: string }) {
  return (
    <div className={`${className}`}>
      {/* Desktop: Horizontal flow */}
      <div className="hidden md:flex items-center justify-center">
        {steps.map((step, index) => (
          <div key={step.title} className="flex items-center">
            {/* Step node */}
            <div className="group flex flex-col items-center gap-3 px-4">
              <div className="relative">
                {/* Step number badge */}
                <div className="absolute -top-2 -left-2 w-6 h-6 rounded-full bg-beige text-primary text-xs font-semibold flex items-center justify-center z-10">
                  {index + 1}
                </div>
                {/* Icon circle */}
                <div className="w-20 h-20 rounded-full bg-primary border-2 border-beige/40 flex items-center justify-center transition-all duration-300 group-hover:border-beige group-hover:shadow-lg group-hover:shadow-beige/20 group-focus-within:border-beige group-focus-within:ring-2 group-focus-within:ring-beige/50">
                  <step.icon className="w-8 h-8 text-beige" />
                </div>
              </div>
              <div className="text-center">
                <p className="text-base font-semibold text-foreground">{step.title}</p>
                <p className="text-xs text-muted-foreground max-w-[120px]">{step.subtitle}</p>
              </div>
            </div>
            
            {/* Connector arrow (not after last step) */}
            {index < steps.length - 1 && (
              <div className="flex items-center mx-2">
                <svg width="60" height="24" viewBox="0 0 60 24" fill="none" className="text-beige">
                  {/* Dashed line */}
                  <line 
                    x1="0" 
                    y1="12" 
                    x2="48" 
                    y2="12" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeDasharray="6 4"
                  />
                  {/* Arrowhead */}
                  <polygon 
                    points="48,6 60,12 48,18" 
                    fill="currentColor"
                  />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Mobile: Vertical flow */}
      <div className="flex md:hidden flex-col items-center">
        {steps.map((step, index) => (
          <div key={step.title} className="flex flex-col items-center">
            {/* Step node */}
            <div className="group flex items-center gap-4 w-full max-w-xs">
              <div className="relative flex-shrink-0">
                {/* Step number badge */}
                <div className="absolute -top-1 -left-1 w-5 h-5 rounded-full bg-beige text-primary text-xs font-semibold flex items-center justify-center z-10">
                  {index + 1}
                </div>
                {/* Icon circle */}
                <div className="w-16 h-16 rounded-full bg-primary border-2 border-beige/40 flex items-center justify-center transition-all duration-300 group-hover:border-beige">
                  <step.icon className="w-6 h-6 text-beige" />
                </div>
              </div>
              <div className="flex-1">
                <p className="text-base font-semibold text-foreground">{step.title}</p>
                <p className="text-xs text-muted-foreground">{step.subtitle}</p>
              </div>
            </div>
            
            {/* Connector arrow (not after last step) */}
            {index < steps.length - 1 && (
              <div className="flex justify-center my-3 ml-[-80px]">
                <svg width="24" height="40" viewBox="0 0 24 40" fill="none" className="text-beige">
                  {/* Dashed line */}
                  <line 
                    x1="12" 
                    y1="0" 
                    x2="12" 
                    y2="28" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeDasharray="6 4"
                  />
                  {/* Arrowhead */}
                  <polygon 
                    points="6,28 12,40 18,28" 
                    fill="currentColor"
                  />
                </svg>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
