import { DollarSign, FileWarning, Compass, ShieldCheck } from 'lucide-react';

const reasons = [
  {
    icon: DollarSign,
    title: "Cost and time",
    description: "Restarting proceedings can be expensive and slow",
    color: "bg-red-50",
  },
  {
    icon: FileWarning,
    title: "Enforceability",
    description: "A decision may be difficult to enforce if the forum was wrong",
    color: "bg-amber-50",
  },
  {
    icon: Compass,
    title: "Strategy",
    description: "The forum can shape leverage, timelines, and available remedies",
    color: "bg-blue-50",
  },
  {
    icon: ShieldCheck,
    title: "Risk control",
    description: "Early clarity prevents avoidable procedural disputes",
    color: "bg-green-50",
  },
];

export function WhyForumMattersSection() {
  return (
    <section id="why-forum-matters" className="section-white py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left - Content */}
          <div>
            <span className="text-sm font-semibold text-beige uppercase tracking-widest mb-4 block">
              Understanding the Stakes
            </span>
            <h2 className="heading-section text-foreground mb-8">
              Why forum choice matters
            </h2>
            <p className="body-large text-muted-foreground">
              In UAE-connected disputes, jurisdiction and arbitration are legal questions, not formalities. Choosing the wrong forum can delay outcomes, increase costs, and weaken your position—especially when enforcement across borders is needed.
            </p>
          </div>

          {/* Right - Cards Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="group p-6 bg-background border border-border rounded-xl hover:shadow-lg hover:border-beige/30 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-lg ${reason.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <reason.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-foreground mb-2">
                  {reason.title}
                </h3>
                <p className="body-small text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
