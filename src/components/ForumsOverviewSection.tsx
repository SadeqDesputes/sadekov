const forums = [
  {
    name: "DIFC Courts",
    whatItIs: "An English-language common law court system based in the Dubai International Financial Centre (DIFC).",
    whenItApplies: "It may apply when contracts choose DIFC Courts, when relevant DIFC connections exist, or where specific jurisdictional gateways are met.",
    whyChosen: "Chosen for procedural clarity, international familiarity, and disputes with cross-border elements.",
  },
  {
    name: "ADGM Courts",
    whatItIs: "An English-language common law court system based in Abu Dhabi Global Market (ADGM).",
    whenItApplies: "It may apply where contracts choose ADGM Courts, where ADGM links exist, or where jurisdiction requirements are satisfied.",
    whyChosen: "Chosen for modern common law framework and strong fit for complex commercial disputes.",
  },
  {
    name: "Arbitration (DIAC / ICC)",
    whatItIs: "A private dispute resolution process that depends on a valid arbitration agreement.",
    whenItApplies: "It applies only where a valid arbitration clause exists (or parties agree later), and the clause scope covers the dispute.",
    whyChosen: "Chosen for confidentiality, flexibility, and enforceability strategies in international matters.",
  },
];

export function ForumsOverviewSection() {
  return (
    <section id="forums-overview" className="bg-beige-light py-20 md:py-28">
      <div className="container-narrow">
        <h2 className="heading-section text-foreground mb-12 text-center">
          A practical overview of the main forums
        </h2>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {forums.map((forum, index) => (
            <div
              key={index}
              className="bg-background p-6 lg:p-8 border border-border"
            >
              <h3 className="heading-card text-foreground mb-6 pb-4 border-b border-border">
                {forum.name}
              </h3>

              <div className="space-y-5">
                <div>
                  <p className="font-body text-xs font-semibold uppercase tracking-wider text-beige mb-2">
                    What it is
                  </p>
                  <p className="body-small text-muted-foreground">
                    {forum.whatItIs}
                  </p>
                </div>

                <div>
                  <p className="font-body text-xs font-semibold uppercase tracking-wider text-beige mb-2">
                    When it may apply
                  </p>
                  <p className="body-small text-muted-foreground">
                    {forum.whenItApplies}
                  </p>
                </div>

                <div>
                  <p className="font-body text-xs font-semibold uppercase tracking-wider text-beige mb-2">
                    Why parties choose it
                  </p>
                  <p className="body-small text-muted-foreground">
                    {forum.whyChosen}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="body-small text-muted-foreground text-center mt-10 italic">
          This section is a high-level guide. Correct forum selection requires reviewing the specific contract and facts.
        </p>
      </div>
    </section>
  );
}
