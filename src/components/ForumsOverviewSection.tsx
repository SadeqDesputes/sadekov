import { Building2, Landmark, Scale, Info } from 'lucide-react';

const forums = [
  {
    name: "DIFC Courts",
    icon: Building2,
    whatItIs: "An English-language common law court system based in the Dubai International Financial Centre (DIFC).",
    whenItApplies: "It may apply when contracts choose DIFC Courts, when relevant DIFC connections exist, or where specific jurisdictional gateways are met.",
    whyChosen: "Chosen for procedural clarity, international familiarity, and disputes with cross-border elements.",
  },
  {
    name: "ADGM Courts",
    icon: Landmark,
    whatItIs: "An English-language common law court system based in Abu Dhabi Global Market (ADGM).",
    whenItApplies: "It may apply where contracts choose ADGM Courts, where ADGM links exist, or where jurisdiction requirements are satisfied.",
    whyChosen: "Chosen for modern common law framework and strong fit for complex commercial disputes.",
  },
  {
    name: "Arbitration (DIAC / ICC)",
    icon: Scale,
    whatItIs: "A private dispute resolution process that depends on a valid arbitration agreement.",
    whenItApplies: "It applies only where a valid arbitration clause exists (or parties agree later), and the clause scope covers the dispute.",
    whyChosen: "Chosen for confidentiality, flexibility, and enforceability strategies in international matters.",
  },
];

export function ForumsOverviewSection() {
  return (
    <section id="forums-overview" className="bg-muted py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-beige uppercase tracking-widest mb-4 block">
            Forum Overview
          </span>
          <h2 className="heading-section text-foreground">
            A practical overview of the main forums
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {forums.map((forum, index) => (
            <div
              key={index}
              className="bg-background rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:border-beige/40 transition-all duration-300 group"
            >
              {/* Header with icon */}
              <div className="p-6 pb-0">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-xl bg-beige/10 border border-beige/20 flex items-center justify-center group-hover:bg-beige/20 transition-colors">
                    <forum.icon className="w-7 h-7 text-beige" />
                  </div>
                  <h3 className="heading-card text-foreground">
                    {forum.name}
                  </h3>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 pt-0 space-y-5">
                <div className="p-4 bg-muted rounded-lg">
                  <p className="font-body text-xs font-semibold uppercase tracking-wider text-beige mb-2">
                    What it is
                  </p>
                  <p className="body-small text-foreground">
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
              
              {/* Bottom accent */}
              <div className="h-1 bg-gradient-to-r from-beige/0 via-beige/50 to-beige/0" />
            </div>
          ))}
        </div>

        {/* Info note */}
        <div className="mt-12 flex items-center justify-center gap-3 p-4 bg-background border border-border rounded-xl max-w-2xl mx-auto">
          <Info className="w-5 h-5 text-beige flex-shrink-0" />
          <p className="body-small text-muted-foreground italic">
            This section is a high-level guide. Correct forum selection requires reviewing the specific contract and facts.
          </p>
        </div>
      </div>
    </section>
  );
}
