import { Search, MessageSquare, FileCheck } from 'lucide-react';

export function ProcessFlow({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-4 md:gap-8 ${className}`}>
      {/* Step 1 - Assess */}
      <div className="flex flex-col items-center gap-2">
        <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-beige/20 border border-beige/30 flex items-center justify-center">
          <Search className="w-6 h-6 md:w-7 md:h-7 text-beige" />
        </div>
        <span className="text-sm font-medium text-foreground">Assess</span>
      </div>
      
      {/* Connector */}
      <div className="flex items-center gap-1">
        <div className="w-8 md:w-12 h-px bg-beige/40" />
        <div className="w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-6 border-l-beige/40" />
      </div>
      
      {/* Step 2 - Advise */}
      <div className="flex flex-col items-center gap-2">
        <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-beige/20 border border-beige/30 flex items-center justify-center">
          <MessageSquare className="w-6 h-6 md:w-7 md:h-7 text-beige" />
        </div>
        <span className="text-sm font-medium text-foreground">Advise</span>
      </div>
      
      {/* Connector */}
      <div className="flex items-center gap-1">
        <div className="w-8 md:w-12 h-px bg-beige/40" />
        <div className="w-0 h-0 border-t-4 border-t-transparent border-b-4 border-b-transparent border-l-6 border-l-beige/40" />
      </div>
      
      {/* Step 3 - Structure */}
      <div className="flex flex-col items-center gap-2">
        <div className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-beige/20 border border-beige/30 flex items-center justify-center">
          <FileCheck className="w-6 h-6 md:w-7 md:h-7 text-beige" />
        </div>
        <span className="text-sm font-medium text-foreground">Structure</span>
      </div>
    </div>
  );
}
