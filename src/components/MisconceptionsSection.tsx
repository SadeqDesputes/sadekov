import { XCircle, MapPin, Building, FileText, Mail } from 'lucide-react';

const misconceptions = [
  {
    icon: MapPin,
    text: "Assets in the UAE do not automatically mean UAE court jurisdiction.",
  },
  {
    icon: Building,
    text: "Being registered in a Free Zone does not automatically give that Free Zone court competence.",
  },
  {
    icon: FileText,
    text: "Arbitration applies only if a valid clause exists and actually covers the dispute.",
  },
  {
    icon: Mail,
    text: "The forum in emails or invoices is not a substitute for a properly drafted clause.",
  },
];

export function MisconceptionsSection() {
  return (
    <section id="misconceptions" className="section-navy py-24 md:py-32 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-beige/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-beige/5 rounded-full blur-3xl" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-beige uppercase tracking-widest mb-4 block">
            Critical Awareness
          </span>
          <h2 className="heading-section text-primary-foreground">
            Common misconceptions that cause expensive mistakes
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {misconceptions.map((misconception, index) => (
            <div
              key={index}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-beige/30 transition-all duration-300"
            >
              {/* Icon with X indicator */}
              <div className="flex items-start gap-4">
                <div className="relative flex-shrink-0">
                  <div className="w-12 h-12 rounded-xl bg-beige/10 border border-beige/20 flex items-center justify-center">
                    <misconception.icon className="w-6 h-6 text-beige" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500/20 border border-red-400/30 flex items-center justify-center">
                    <XCircle className="w-3.5 h-3.5 text-red-400" />
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-xs font-semibold text-red-400/80 uppercase tracking-wider">≠ Common Assumption</span>
                  </div>
                  <p className="body-base text-primary-foreground/90 font-medium">
                    {misconception.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
