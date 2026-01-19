const reasons = [
  {
    title: "Cost and time",
    description: "Restarting proceedings can be expensive and slow",
  },
  {
    title: "Enforceability",
    description: "A decision may be difficult to enforce if the forum was wrong",
  },
  {
    title: "Strategy",
    description: "The forum can shape leverage, timelines, and available remedies",
  },
  {
    title: "Risk control",
    description: "Early clarity prevents avoidable procedural disputes",
  },
];

export function WhyForumMattersSection() {
  return (
    <section id="why-forum-matters" className="section-white py-20 md:py-28">
      <div className="container-narrow">
        <div className="max-w-3xl">
          <h2 className="heading-section text-foreground mb-8">
            Why forum choice matters
          </h2>

          <p className="body-large text-muted-foreground mb-12">
            In UAE-connected disputes, jurisdiction and arbitration are legal questions, not formalities. Choosing the wrong forum can delay outcomes, increase costs, and weaken your position—especially when enforcement across borders is needed.
          </p>

          <ul className="space-y-6">
            {reasons.map((reason, index) => (
              <li key={index} className="flex items-start gap-4">
                <span className="w-2 h-2 rounded-full bg-beige mt-2.5 flex-shrink-0" />
                <div>
                  <span className="font-body font-semibold text-foreground">
                    {reason.title}:
                  </span>{' '}
                  <span className="body-base text-muted-foreground">
                    {reason.description}
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
