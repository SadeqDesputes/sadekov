import { useState } from 'react';
import { Building2, Landmark, Scale, Info, ChevronRight } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';

type ForumKey = 'difc' | 'adgm' | 'arbitration';

interface ForumData {
  name: string;
  icon: typeof Building2;
  whatItIs: string;
  whenItApplies: string;
  whyChosen: string;
}

interface ForumModalContent {
  title: string;
  summary: string;
  whatItIs: string[];
  whenApplies: string[];
  whyChosen: string[];
  pitfalls: string[];
  whatWeAssess: string[];
}

const forums: Record<ForumKey, ForumData> = {
  difc: {
    name: "DIFC Courts",
    icon: Building2,
    whatItIs: "An English-language common law court system based in the Dubai International Financial Centre (DIFC).",
    whenItApplies: "It may apply when contracts choose DIFC Courts, when relevant DIFC connections exist, or where specific jurisdictional gateways are met.",
    whyChosen: "Chosen for procedural clarity, international familiarity, and disputes with cross-border elements.",
  },
  adgm: {
    name: "ADGM Courts",
    icon: Landmark,
    whatItIs: "An English-language common law court system based in Abu Dhabi Global Market (ADGM).",
    whenItApplies: "It may apply where contracts choose ADGM Courts, where ADGM links exist, or where jurisdiction requirements are satisfied.",
    whyChosen: "Chosen for modern common law framework and strong fit for complex commercial disputes.",
  },
  arbitration: {
    name: "Arbitration (DIAC / ICC)",
    icon: Scale,
    whatItIs: "A private dispute resolution process that depends on a valid arbitration agreement.",
    whenItApplies: "It applies only where a valid arbitration clause exists (or parties agree later), and the clause scope covers the dispute.",
    whyChosen: "Chosen for confidentiality, flexibility, and enforceability strategies in international matters.",
  },
};

const modalContent: Record<ForumKey, ForumModalContent> = {
  difc: {
    title: "DIFC Courts",
    summary: "A standalone common law court system in Dubai, operating in English and applying English-based law.",
    whatItIs: [
      "The DIFC Courts are a judicial system located within the Dubai International Financial Centre, a financial free zone in Dubai, UAE. They operate independently from the Dubai Courts and apply common law principles derived from English law.",
      "Proceedings are conducted entirely in English, with judges drawn from leading common law jurisdictions including England, Singapore, and Australia. The courts handle civil and commercial disputes.",
      "The DIFC Courts have their own rules of procedure, enforcement mechanisms, and appellate structure. They are not part of the UAE's federal or local court systems."
    ],
    whenApplies: [
      "Contracts explicitly select DIFC Courts as the exclusive or non-exclusive jurisdiction",
      "One or more parties are registered or licensed in the DIFC",
      "The dispute relates to a transaction or relationship within the DIFC",
      "Parties 'opt in' to DIFC jurisdiction through a valid jurisdiction clause",
      "Specific 'gateway' conditions are met under DIFC Court rules"
    ],
    whyChosen: [
      "English-language proceedings and common law principles familiar to international parties",
      "Experienced judges from major common law jurisdictions",
      "Clear procedural rules and efficient case management",
      "Strong enforcement mechanisms within the UAE and internationally",
      "Suitable for cross-border commercial and financial disputes"
    ],
    pitfalls: [
      "Assuming DIFC Courts apply simply because a party does business in the UAE",
      "Confusing DIFC Courts with onshore Dubai Courts (they are separate systems)",
      "Believing a DIFC Courts clause is valid without checking if the contract was properly executed",
      "Overlooking that DIFC judgments may still require recognition steps outside the DIFC",
      "Filing claims without confirming the jurisdictional gateway actually applies"
    ],
    whatWeAssess: [
      "Whether the contract contains a valid DIFC Courts jurisdiction clause",
      "Whether the clause is exclusive, non-exclusive, or asymmetric",
      "The governing law of the contract and its relationship to DIFC law",
      "Whether jurisdictional gateways under DIFC rules are satisfied",
      "The location of the counterparty and key assets for enforcement purposes",
      "Potential challenges to jurisdiction and how to address them"
    ]
  },
  adgm: {
    title: "ADGM Courts",
    summary: "A modern common law court system in Abu Dhabi, designed for international commercial disputes.",
    whatItIs: [
      "The ADGM Courts operate within Abu Dhabi Global Market, a financial free zone on Al Maryah Island in Abu Dhabi. Like the DIFC Courts, they are a standalone common law system, independent from the Abu Dhabi and UAE federal courts.",
      "The ADGM Courts apply English common law as it stood in 2015, supplemented by ADGM regulations. Proceedings are in English, and the judiciary includes experienced common law judges.",
      "The court structure includes a Court of First Instance and a Court of Appeal, with clear procedural rules modeled on best practices from leading commercial courts."
    ],
    whenApplies: [
      "Contracts specify ADGM Courts as the chosen jurisdiction",
      "One or more parties are registered or licensed in ADGM",
      "The dispute arises out of operations or activities connected to ADGM",
      "Parties agree to submit an existing dispute to ADGM jurisdiction",
      "Specific jurisdictional requirements under ADGM regulations are met"
    ],
    whyChosen: [
      "English-language common law system with modern procedural rules",
      "Judges with significant commercial litigation experience",
      "Well-suited for complex financial, corporate, and commercial disputes",
      "Clear framework for enforcement of judgments within the UAE",
      "Growing body of case law addressing international commercial issues"
    ],
    pitfalls: [
      "Assuming ADGM Courts have jurisdiction simply because of an Abu Dhabi connection",
      "Confusing ADGM Courts with onshore Abu Dhabi Courts (they are different systems)",
      "Relying on informal references to ADGM without a properly drafted clause",
      "Failing to verify whether the ADGM Courts clause covers the specific type of dispute",
      "Overlooking enforcement considerations in other UAE emirates or abroad"
    ],
    whatWeAssess: [
      "Whether a valid ADGM Courts jurisdiction clause exists",
      "The scope of the clause (what types of disputes are covered)",
      "Governing law and its interaction with ADGM's legal framework",
      "Whether any party or asset connection to ADGM supports jurisdiction",
      "Practical enforcement routes for any judgment obtained",
      "Strategic considerations if multiple forums could potentially apply"
    ]
  },
  arbitration: {
    title: "Arbitration (DIAC / ICC)",
    summary: "Private dispute resolution through arbitration, commonly administered under DIAC or ICC rules.",
    whatItIs: [
      "Arbitration is a private method of resolving disputes outside the courts. Parties agree in advance (usually in their contract) to submit disputes to one or more arbitrators, whose decision is binding and enforceable.",
      "DIAC (Dubai International Arbitration Centre) is a regional arbitration institution based in Dubai. ICC (International Chamber of Commerce) is a global arbitration institution headquartered in Paris. Both provide procedural rules and administrative support for arbitrations.",
      "The choice between DIAC, ICC, or other rules affects procedural aspects, costs, and institutional support, but the fundamental mechanism remains the same: a private, binding decision by arbitrators chosen by or for the parties."
    ],
    whenApplies: [
      "The contract contains a valid arbitration clause specifying arbitration as the dispute resolution method",
      "The arbitration clause covers the type of dispute that has arisen",
      "The parties subsequently agree to arbitrate an existing dispute",
      "The seat (legal place) of arbitration and applicable rules are clearly identified",
      "No valid grounds exist to challenge the arbitration clause itself"
    ],
    whyChosen: [
      "Confidentiality: arbitration proceedings are typically private",
      "Flexibility: parties can choose arbitrators, language, seat, and procedural rules",
      "Neutrality: disputes can be resolved outside either party's home court system",
      "Enforceability: arbitral awards are widely enforceable under the New York Convention",
      "Expertise: arbitrators can be selected for relevant industry or legal knowledge"
    ],
    pitfalls: [
      "Assuming arbitration applies when there is no valid arbitration clause",
      "Confusing ICC (the institution) with a specific location — ICC arbitrations can be seated anywhere",
      "Failing to check whether the arbitration clause actually covers the dispute at hand",
      "Ignoring the distinction between the seat of arbitration and the venue of hearings",
      "Underestimating the importance of the seat for procedural law and enforcement"
    ],
    whatWeAssess: [
      "Whether a valid and enforceable arbitration agreement exists",
      "Which institution's rules apply (DIAC, ICC, or others)",
      "The seat of arbitration and its legal implications",
      "Whether the arbitration clause covers the specific claims in dispute",
      "Enforcement routes for any award, including relevant treaties",
      "Practical considerations such as language, number of arbitrators, and timelines"
    ]
  }
};

export function ForumsOverviewSection() {
  const [openModal, setOpenModal] = useState<ForumKey | null>(null);
  const forumKeys: ForumKey[] = ['difc', 'adgm', 'arbitration'];

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
          {forumKeys.map((key) => {
            const forum = forums[key];
            return (
              <button
                key={key}
                onClick={() => setOpenModal(key)}
                className="bg-background rounded-2xl border border-border overflow-hidden hover:shadow-xl hover:border-beige/40 hover:-translate-y-1 transition-all duration-300 group text-left cursor-pointer focus:outline-none focus:ring-2 focus:ring-beige focus:ring-offset-2"
                aria-label={`Learn more about ${forum.name}`}
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
                
                {/* Click indicator */}
                <div className="px-6 pb-4 flex items-center gap-2 text-beige opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-sm font-medium">Learn more</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
                
                {/* Bottom accent */}
                <div className="h-1 bg-gradient-to-r from-beige/0 via-beige/50 to-beige/0" />
              </button>
            );
          })}
        </div>

        {/* Info note */}
        <div className="mt-12 flex items-center justify-center gap-3 p-4 bg-background border border-border rounded-xl max-w-2xl mx-auto">
          <Info className="w-5 h-5 text-beige flex-shrink-0" />
          <p className="body-small text-muted-foreground italic">
            This section is a high-level guide. Correct forum selection requires reviewing the specific contract and facts.
          </p>
        </div>
      </div>

      {/* Modal Dialogs */}
      {forumKeys.map((key) => {
        const forum = forums[key];
        const content = modalContent[key];
        return (
          <Dialog key={key} open={openModal === key} onOpenChange={(open) => !open && setOpenModal(null)}>
            <DialogContent className="max-w-2xl max-h-[90vh] p-0 overflow-hidden">
              <ScrollArea className="max-h-[90vh]">
                <div className="p-6 md:p-8">
                  <DialogHeader className="mb-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-beige/10 border border-beige/20 flex items-center justify-center">
                        <forum.icon className="w-6 h-6 text-beige" />
                      </div>
                      <DialogTitle className="heading-card text-foreground">{content.title}</DialogTitle>
                    </div>
                    <DialogDescription className="text-base text-muted-foreground italic border-l-2 border-beige pl-4">
                      {content.summary}
                    </DialogDescription>
                  </DialogHeader>

                  <div className="space-y-8">
                    {/* What it is */}
                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-beige mb-3">
                        What it is
                      </h4>
                      <div className="space-y-3">
                        {content.whatItIs.map((paragraph, i) => (
                          <p key={i} className="body-small text-muted-foreground leading-relaxed">
                            {paragraph}
                          </p>
                        ))}
                      </div>
                    </div>

                    {/* When it typically applies */}
                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-beige mb-3">
                        When it typically applies
                      </h4>
                      <ul className="space-y-2">
                        {content.whenApplies.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-beige mt-2 flex-shrink-0" />
                            <span className="body-small text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Why parties choose it */}
                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-beige mb-3">
                        Why parties choose it
                      </h4>
                      <ul className="space-y-2">
                        {content.whyChosen.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-beige mt-2 flex-shrink-0" />
                            <span className="body-small text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Common pitfalls */}
                    <div className="bg-muted rounded-xl p-5">
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-beige mb-3">
                        Common pitfalls
                      </h4>
                      <ul className="space-y-2">
                        {content.pitfalls.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 flex-shrink-0" />
                            <span className="body-small text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* What we assess first */}
                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-beige mb-3">
                        What we assess first
                      </h4>
                      <ul className="space-y-2">
                        {content.whatWeAssess.map((item, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="w-1.5 h-1.5 rounded-full bg-beige mt-2 flex-shrink-0" />
                            <span className="body-small text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Disclaimer */}
                    <div className="pt-4 border-t border-border">
                      <p className="text-xs text-muted-foreground italic">
                        This is general information and not legal advice. Applicability depends on the contract and facts.
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollArea>
            </DialogContent>
          </Dialog>
        );
      })}
    </section>
  );
}
