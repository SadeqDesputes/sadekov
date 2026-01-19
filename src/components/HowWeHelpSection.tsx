import { CheckCircle2 } from 'lucide-react';

const services = [
  "Jurisdiction and forum assessment (DIFC / ADGM / arbitration)",
  "Strategic advice before filing a claim or responding to one",
  "Cross-border enforceability planning and dispute structuring",
];

export function HowWeHelpSection() {
  return (
    <section id="how-we-help" className="section-white py-20 md:py-28">
      <div className="container-narrow">
        <div className="max-w-3xl">
          <h2 className="heading-section text-foreground mb-8">
            How we help
          </h2>

          <p className="body-large text-muted-foreground mb-10">
            We support clients at the decision point—before they rely on a forum that may not apply. Our role is to assess jurisdiction and arbitration applicability, advise on strategy before filing or responding, and structure disputes with enforceability in mind.
          </p>

          <ul className="space-y-4 mb-10">
            {services.map((service, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-beige flex-shrink-0 mt-0.5" />
                <span className="body-base text-foreground">{service}</span>
              </li>
            ))}
          </ul>

          <p className="body-small text-muted-foreground italic border-l-2 border-beige pl-4">
            We provide legal analysis and strategy. Outcomes depend on facts, documents, and the actions of other parties and institutions.
          </p>
        </div>
      </div>
    </section>
  );
}
