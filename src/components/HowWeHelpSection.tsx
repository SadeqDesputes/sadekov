import { CheckCircle2, Gavel, MessageSquareText, Globe } from 'lucide-react';
import { ProcessFlow } from './icons/ProcessFlow';

const services = [
  {
    icon: Gavel,
    text: "Jurisdiction and forum assessment (DIFC / ADGM / arbitration)",
  },
  {
    icon: MessageSquareText,
    text: "Strategic advice before filing a claim or responding to one",
  },
  {
    icon: Globe,
    text: "Cross-border enforceability planning and dispute structuring",
  },
];

export function HowWeHelpSection() {
  return (
    <section id="how-we-help" className="section-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Process Flow */}
        <div className="mb-20 p-8 bg-muted rounded-2xl border border-border">
          <p className="text-center text-sm font-semibold text-beige uppercase tracking-widest mb-8">
            Our Approach
          </p>
          <ProcessFlow />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Content */}
          <div>
            <span className="text-sm font-semibold text-beige uppercase tracking-widest mb-4 block">
              Our Services
            </span>
            <h2 className="heading-section text-foreground mb-8">
              How we help
            </h2>
            <p className="body-large text-muted-foreground mb-8">
              We support clients at the decision point—before they rely on a forum that may not apply. Our role is to assess jurisdiction and arbitration applicability, advise on strategy before filing or responding, and structure disputes with enforceability in mind.
            </p>
            
            {/* Disclaimer */}
            <div className="p-5 bg-beige/10 border-l-4 border-beige rounded-r-lg">
              <p className="body-small text-muted-foreground italic">
                We provide legal analysis and strategy. Outcomes depend on facts, documents, and the actions of other parties and institutions.
              </p>
            </div>
          </div>

          {/* Right - Services */}
          <div className="space-y-4">
            {services.map((service, index) => (
              <div
                key={index}
                className="group flex items-start gap-5 p-6 bg-background border border-border rounded-xl hover:shadow-lg hover:border-beige/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-beige/10 border border-beige/20 flex items-center justify-center flex-shrink-0 group-hover:bg-beige/20 transition-colors">
                  <service.icon className="w-6 h-6 text-beige" />
                </div>
                <div className="flex-1 pt-1">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-beige flex-shrink-0 mt-0.5" />
                    <span className="body-base text-foreground font-medium">{service.text}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
