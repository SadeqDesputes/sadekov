import { AlertCircle } from 'lucide-react';

const misconceptions = [
  "Assets in the UAE do not automatically mean UAE court jurisdiction.",
  "Being registered in a Free Zone does not automatically give that Free Zone court competence.",
  "Arbitration applies only if a valid clause exists and actually covers the dispute.",
  "The forum in emails or invoices is not a substitute for a properly drafted clause.",
];

export function MisconceptionsSection() {
  return (
    <section id="misconceptions" className="section-navy py-20 md:py-28">
      <div className="container-narrow">
        <h2 className="heading-section text-primary-foreground mb-12 text-center">
          Common misconceptions that cause expensive mistakes
        </h2>

        <div className="grid sm:grid-cols-2 gap-4 lg:gap-6 max-w-4xl mx-auto">
          {misconceptions.map((misconception, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 p-6 flex items-start gap-4"
            >
              <AlertCircle className="w-5 h-5 text-beige flex-shrink-0 mt-0.5" />
              <p className="body-base text-primary-foreground/90">
                {misconception}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
