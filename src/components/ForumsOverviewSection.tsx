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

type ForumKey = 'difc' | 'adgm' | 'arbitration_diac' | 'arbitration_icc';

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
  whenAppliesSecondary?: string[];
  whenAppliesIntro?: string;
  whenAppliesSecondaryIntro?: string;
  whenAppliesOutro?: string;
  whenAppliesCallout?: boolean;
  whyChosenParagraphs?: string[];
  whyChosenIntro?: string;
  pitfallsParagraphs?: string[];
  pitfallsOutro?: string;
  whatWeAssessIntro?: string;
  whatWeAssessOutro?: string;
  whatWeAssessParagraphs?: string[];
  leadParagraphs?: string[];
  sectionLabels?: {
    whatItIs?: string;
    whenApplies?: string;
    whyChosen?: string;
    pitfalls?: string;
    whatWeAssess?: string;
  };
  additionalSection?: {
    title: string;
    paragraphs: string[];
  };
  additionalSectionCallout?: boolean;
  additionalSectionPosition?: 'before' | 'after';
  pitfallsAfterWhatWeAssess?: boolean;
  disclaimer?: string;
}

const forums: Record<ForumKey, ForumData> = {
  difc: {
    name: "DIFC Courts",
    icon: Building2,
    whatItIs: "The Dubai International Financial Centre (DIFC) offers a globally recognised, English-language common-law forum for resolving international commercial disputes. We represent clients in DIFC-related arbitration and court matters across contractual, corporate, banking, employment, and cross-border disputes. DIFC arbitration allows parties to appoint international or local counsel of their choice, providing flexibility and neutrality. Where court proceedings are required, representation before the DIFC Courts is conducted in accordance with DIFC practitioner registration requirements.",
    whenItApplies: "It may apply when contracts choose DIFC Courts, when relevant DIFC connections exist, or where specific jurisdictional gateways are met.",
    whyChosen: "Chosen for procedural clarity, international familiarity, and disputes with cross-border elements.",
  },
  adgm: {
    name: "ADGM Courts",
    icon: Landmark,
    whatItIs: "Abu Dhabi Global Market (ADGM) is a leading common-law financial free zone with its own independent court system and arbitration framework. We represent clients in ADGM-related arbitration and court proceedings under a legal system based on the common law of England and Wales. ADGM Courts operate in English and apply English case law and selected statutes directly, offering a familiar forum for international disputes. International lawyers with sufficient experience may appear before ADGM Courts, allowing flexible and cross-border representation.",
    whenItApplies: "It may apply where contracts choose ADGM Courts, where ADGM links exist, or where jurisdiction requirements are satisfied.",
    whyChosen: "Chosen for modern common law framework and strong fit for complex commercial disputes.",
  },
  arbitration_diac: {
    name: "Arbitration (DIAC)",
    icon: Scale,
    whatItIs: "The Dubai International Arbitration Centre (DIAC) is Dubai's principal arbitration institution and a leading dispute resolution forum in the Middle East. We represent clients in DIAC-administered arbitrations across construction, energy, finance, real estate, logistics, and complex commercial disputes. DIAC arbitrations are conducted under modern rules aligned with international best practices and the UNCITRAL Model Law. Parties are free to appoint international or local counsel, with no local bar licence required to act in the arbitration itself.",
    whenItApplies: "It applies only where a valid arbitration clause exists (or parties agree later), and the clause scope covers the dispute.",
    whyChosen: "Chosen for confidentiality, flexibility, and enforceability strategies in international matters.",
  },
  arbitration_icc: {
    name: "Arbitration (ICC)",
    icon: Scale,
    whatItIs: "The International Court of Arbitration of the International Chamber of Commerce (ICC) is the world's leading institution for resolving international commercial disputes. Established in 1923, ICC arbitration is widely used for complex, high-value cross-border matters. We represent clients in ICC-administered arbitrations across multiple industries and jurisdictions. ICC arbitration allows parties to appoint counsel of their choice, with no institutional licensing or bar admission requirements imposed by the ICC itself.",
    whenItApplies: "It applies only where a valid arbitration clause exists (or parties agree later), and the clause scope covers the dispute.",
    whyChosen: "Chosen for confidentiality, flexibility, and enforceability strategies in international matters.",
  },
};
const modalContent: Record<ForumKey, ForumModalContent> = {
  difc: {
    title: "DIFC Courts",
    summary: "Before relying on DIFC jurisdiction, make sure it actually applies.",
    leadParagraphs: [
      "Jurisdiction in the DIFC is not automatic and should never be taken for granted. Whether your contract refers to DIFC Courts, your business operates within the DIFC, or a dispute involves cross-border elements linked to the UAE, a precise jurisdictional assessment is essential.",
      "Whether you are considering initiating proceedings before the DIFC Courts, have already encountered a DIFC-related dispute, or are unsure whether DIFC is the right forum for your case, jurisdiction should never be assumed.",
      "We assist clients in verifying whether DIFC Courts have jurisdiction, assessing procedural and strategic risks, and determining the most effective course of action at an early stage. Where jurisdiction is properly established, DIFC Court judgments may be recognised and enforced not only in Dubai or the UAE, but internationally, through applicable conventions or local recognition mechanisms in the relevant jurisdiction. Early, precise analysis ensures that your dispute strategy is legally sound, enforceable, and commercially effective.",
      "We help clients verify whether DIFC Courts have jurisdiction, identify potential procedural risks, and structure a legally sound strategy before any claim is filed or defended. This early clarity allows our clients to avoid costly mistakes and proceed with confidence in complex DIFC-related disputes."
    ],
    whatItIs: [
      "The DIFC is a financial free zone in Dubai with its own independent common-law judicial system, separate from the UAE’s onshore civil  courts. DIFC Courts operate in English and are designed to meet the expectations of international businesses and investors."
    ],
    whenAppliesIntro: "The DIFC Courts consist of:",
    whenApplies: [
      "Court of First Instance, which hears civil and commercial disputes at first instance",
      "Court of Appeal, which hears appeals and interprets DIFC laws and regulations",
      "Small Claims Tribunal, designed for lower-value disputes and simplified procedures"
    ],
    whenAppliesSecondaryIntro: "The Court of First Instance generally has jurisdiction where:",
    whenAppliesSecondary: [
      "Parties have expressly opted into DIFC Courts in their contract",
      "The dispute involves a DIFC-established entity",
      "The dispute arises out of activities conducted within the DIFC"
    ],
    whenAppliesOutro: "Parties are free to choose the governing law of their contract. If no governing law is specified, DIFC law applies by default.",
    whyChosen: [],
    whyChosenParagraphs: [
      "DIFC-seated arbitration is designed to be efficient, flexible, and business-focused. Parties typically agree on arbitration rules in advance and retain significant control over procedure, timelines, and tribunal composition. Arbitration awards are generally final, with limited grounds for challenge, allowing for faster resolution and enforcement."
    ],
    pitfalls: [],
    pitfallsParagraphs: [
      "In DIFC arbitration, parties may appoint any lawyer, whether local or international, as arbitration counsel. However, appearances before the DIFC Courts, including enforcement, interim relief, or related court proceedings, require lawyers to be registered on the DIFC Courtsâ€™ Register of Legal Practitioners."
    ],
    whatWeAssess: [
      "Select arbitrators",
      "Define procedural timelines",
      "Determine document disclosure processes",
      "Choose applicable arbitration rules"
    ],
    whatWeAssessIntro: "Parties in DIFC arbitration have wide discretion to:",
    whatWeAssessOutro: "This flexibility allows disputes to be resolved in a manner aligned with commercial realities rather than rigid court procedures.",
    additionalSection: {
      title: "Confidentiality and Privacy",
      paragraphs: [
        "DIFC arbitration proceedings are private and confidential, making them particularly attractive for sensitive commercial and financial disputes. This confidentiality is a key reason why multinational companies frequently choose DIFC-based dispute resolution."
      ]
    },
    additionalSectionCallout: true,
    additionalSectionPosition: 'before',
    sectionLabels: {
      whatItIs: "What is the DIFC?",
      whenApplies: "Jurisdiction and Court Structure",
      whyChosen: "DIFC Arbitration",
      pitfalls: "Legal Representation",
      whatWeAssess: "Procedural Flexibility"
    },
    disclaimer: "Sadekov Law Firm is an independent Estonian law firm based in Tallinn, with more than 25 years of experience and membership in the Estonian Bar Association since 2006. Our core services include criminal law, law of obligations, commercial law, family law, enforcement proceedings, and labour law, alongside international legal services in International Criminal Defence & Cross-Border Legal Protection, International Arbitration & Cross-Border Commercial Disputes, Strategic Legal Defence in Sanctions, Tax, and Cross-Border Investigations, and Personal Legal Advisor for HNWI and VHNWI. We represent clients across Europe and the MENA region in complex criminal, private, and cross-border legal matters under Estonian and EU law."
  },
  adgm: {
    title: "ADGM Courts",
    summary: "Why ADGM jurisdiction may matter for your business.",
    leadParagraphs: [
      "If your transaction, corporate structure, or dispute has a connection to the Abu Dhabi Global Market, the choice of ADGM jurisdiction can have a decisive impact on how your rights are protected and enforced. ADGM offers a common law framework, an independent court system, and procedures designed for complex cross-border matters. For businesses operating in or through the UAE, selecting or properly assessing ADGM jurisdiction can mean greater predictability, procedural clarity, and internationally enforceable outcomes. Understanding whether ADGM law and courts apply to your situation is not a formality; it is a strategic decision that directly affects risk, timing, and results."
    ],
    whatItIs: [
      "Abu Dhabi Global Market (ADGM) is an international financial free zone with a fully independent legal and judicial system, separate from the UAE federal and emirate-level courts. Its legal framework is expressly based on the common law of England and Wales, providing certainty and predictability for international businesses."
    ],
    whenAppliesIntro: "ADGM applies:",
    whenAppliesCallout: true,
    whenApplies: [
      "English common law principles",
      "English case law directly",
      "Selected English statutes as part of its legal framework"
    ],
    whenAppliesOutro: "Proceedings before ADGM Courts are conducted entirely in English, and judgments are published in English. Court procedures closely follow the English Civil Procedure Rules (CPR), ensuring a familiar and transparent litigation process for international parties.",
    whyChosen: [
      "Court of First Instance",
      "Court of Appeal"
    ],
    whyChosenIntro: "The ADGM Courts consist of:",
    whyChosenParagraphs: [
      "The Court of First Instance, which includes three divisions, is the designated court for all arbitration-related matters in the ADGM, including enforcement, interim measures, and challenges to arbitral awards.",
      "The Court of Appeal (consisting of three judges) has exclusive competence to hear and settle appeals against judgments or orders issued by the Court of First Instance."
    ],
    pitfalls: [
      "Full alignment with the UNCITRAL Model Law, including grounds for setting aside arbitral awards",
      "Provisions distinguishing ADGM law from the DIFC framework",
      "Additional rules governing the proper conduct of parties and their representatives during arbitration proceedings"
    ],
    pitfallsParagraphs: [
      "In addition to its court system, ADGM has adopted Arbitration Regulations based on the UNCITRAL Model Law, making it an attractive seat for international arbitration. Parties may choose ADGM as the seat of arbitration regardless of where the underlying dispute arises.",
      "Key features of the ADGM Arbitration Regulations include:"
    ],
    whatWeAssess: [
      "UAE federal courts",
      "Abu Dhabi courts",
      "Ras Al Khaimah courts"
    ],
    whatWeAssessIntro: "ADGM court judgments benefit from a broader and more streamlined recognition regime within the UAE. ADGM judgments may be recognised under simplified procedures in:",
    whatWeAssessOutro: "This provides a faster mechanism for enforcing court orders, including interim measures in support of arbitration, compared to other free-zone courts.",
    additionalSection: {
      title: "Representation Before ADGM Courts",
      paragraphs: [
        "Proceedings before ADGM Courts are designed to be efficient and accessible. Any lawyer from any jurisdiction with at least five years of continuous legal experience may appear before ADGM Courts, including in arbitration-related court proceedings. This flexibility allows parties to be represented by trusted counsel from their home jurisdictions while benefiting from ADGMâ€™s common-law framework."
      ]
    },
    additionalSectionCallout: true,
    additionalSectionPosition: 'after',
    sectionLabels: {
      whatItIs: "What is ADGM?",
      whenApplies: "Legal System and Court Procedure",
      whyChosen: "Structure of the ADGM Courts",
      pitfalls: "ADGM Arbitration Framework",
      whatWeAssess: "Recognition and Enforcement Advantages"
    },
    disclaimer: "Sadekov Law Firm is an independent Estonian law firm based in Tallinn, with more than 25 years of experience and membership in the Estonian Bar Association since 2006. Our core services include criminal law, law of obligations, commercial law, family law, enforcement proceedings, and labour law, alongside international legal services in International Criminal Defence & Cross-Border Legal Protection, International Arbitration & Cross-Border Commercial Disputes, Strategic Legal Defence in Sanctions, Tax, and Cross-Border Investigations, and Personal Legal Advisor for HNWI and VHNWI. We represent clients across Europe and the MENA region in complex criminal, private, and cross-border legal matters."
  },
  arbitration_diac: {
    title: "Arbitration (DIAC)",
    summary: "Before relying on DIAC arbitration, make sure it actually applies.",
    leadParagraphs: [
      "Whether you are considering commencing arbitration under the DIAC Rules, have already encountered a dispute involving a DIAC clause, or are unsure whether arbitration is available in your case, the existence and scope of the arbitration agreement must be verified first. We assist clients in confirming whether DIAC arbitration is validly triggered, assessing procedural and strategic risks, and structuring an effective dispute strategy at an early stage. Where a valid DIAC arbitration agreement exists, arbitral awards may be recognised and enforced internationally under the New York Convention, through local recognition procedures in the jurisdiction where the counterparty’s assets are located. Early legal clarity ensures enforceability, efficiency, and control over cross-border disputes."
    ],
    whatItIs: [
      "The Dubai International Arbitration Centre (DIAC) is an independent, neutral arbitration institution that administers both domestic and international commercial arbitrations. Following its restructuring, DIAC has been established as the primary arbitration forum in Dubai, serving parties from across the Middle East and beyond."
    ],
    whenAppliesIntro: "DIAC administers arbitrations across a broad range of industries, including:",
    whenApplies: [
      "Construction and infrastructure",
      "Energy and natural resources",
      "Banking and finance",
      "Real estate and development",
      "Logistics and transportation",
      "General commercial and cross-border disputes"
    ],
    whenAppliesOutro: "DIAC arbitrations are suitable for high-value, technically complex, and multi-party disputes.",
    whyChosenIntro: "Proceedings are conducted under the DIAC Arbitration Rules, which provide a comprehensive procedural framework governing:",
    whyChosen: [
      "Commencement of arbitration",
      "Appointment and challenge of arbitrators",
      "Case management and timelines",
      "Emergency arbitration and interim measures",
      "Costs and fees",
      "Issuance of final awards"
    ],
    whyChosenParagraphs: [
      "The Rules are designed to align with international arbitration standards and reflect principles found in the UNCITRAL Model Law, ensuring predictability and enforceability."
    ],
    pitfalls: [
      "Administers the arbitration process",
      "Confirm or appoint arbitrators where necessary",
      "Oversee procedural compliance",
      "Manage arbitration costs and deposits",
      "Provide institutional supervision and administrative support"
    ],
    pitfallsParagraphs: [
      "DIAC role is to:"
    ],
    pitfallsOutro: "The arbitral tribunal remains fully independent and responsible for deciding the merits of the dispute.",
    whatWeAssess: [],
    whatWeAssessParagraphs: [
      "There is no special licensing or bar admission requirement to act as counsel in DIAC arbitration proceedings. Parties may freely appoint international or local lawyers of their choosing, reflecting the principle of party autonomy and international arbitration practice.",
      "Where court involvement is required — such as interim measures or enforcement of an award — representation must comply with the requirements of the relevant supervising court, depending on the seat of arbitration."
    ],
    additionalSection: {
      title: "Neutrality and Efficiency",
      paragraphs: [
        "DIAC operates as a neutral and independent institution, ensuring procedural fairness, confidentiality, and efficiency. Its rules allow parties and tribunals to tailor procedures to the needs of the dispute, making DIAC a business-friendly forum for dispute resolution."
      ]
    },
    additionalSectionCallout: false,
    additionalSectionPosition: 'after',
    sectionLabels: {
      whatItIs: "What is DIAC?",
      whenApplies: "Scope of Disputes",
      whyChosen: "DIAC Arbitration Rules",
      pitfalls: "Role of DIAC",
      whatWeAssess: "Legal Representation"
    },
    disclaimer: "Sadekov Law Firm is an independent Estonian law firm based in Tallinn, with more than 25 years of experience and membership in the Estonian Bar Association since 2006. Our core services include criminal law, law of obligations, commercial law, family law, enforcement proceedings, and labour law, alongside international legal services in International Criminal Defence & Cross-Border Legal Protection, International Arbitration & Cross-Border Commercial Disputes, Strategic Legal Defence in Sanctions, Tax, and Cross-Border Investigations, and Personal Legal Advisor for HNWI and VHNWI. We represent clients across Europe and the MENA region in complex criminal, private, and cross-border legal matters under Estonian and EU law."
  },
  arbitration_icc: {
    title: "Arbitration (ICC)",
    summary: "Why ICC arbitration in the UAE may be the right choice for you.",
    leadParagraphs: [
      "If your contract involves international counterparties, cross-border investments, or assets located in multiple jurisdictions, ICC arbitration seated in the UAE can offer a strategically neutral and enforceable dispute resolution framework. Choosing International Chamber of Commerce arbitration allows parties to avoid national courts, rely on a globally respected arbitral process, and secure awards that may be recognised and enforced worldwide under the New York Convention. When structured correctly, an ICC arbitration seated in Dubai, DIFC, or ADGM combines international neutrality with procedural efficiency and strong enforcement prospects, making it a practical solution for complex, high-value disputes where predictability and global reach matter."
    ],
    whatItIs: [
      "The International Court of Arbitration is the flagship dispute resolution body of the International Chamber of Commerce (ICC). Although referred to as a ‘court,’ it does not decide disputes itself. Instead, it administers arbitration proceedings under the ICC Rules of Arbitration, ensuring that each arbitration is conducted efficiently, neutrally, and in accordance with international standards.",
      "The ICC Court is composed of members from jurisdictions around the world, reinforcing its global neutrality and credibility."
    ],
    whenAppliesIntro: "When an ICC arbitration is commenced, the ICC Secretariat manages and supervises the day-to-day administration of the case. The ICC Court exercises oversight and decision-making authority on key procedural and administrative matters to safeguard the integrity of the arbitration process.",
    whenApplies: [],
    whyChosenIntro: "The ICC Court’s responsibilities include:",
    whyChosen: [
      "Fixing the place (seat) of arbitration where parties have not agreed",
      "Assessing the existence of a prima facie ICC arbitration agreement",
      "Making decisions in complex multi-party or multi-contract arbitrations",
      "Confirming, appointing, and replacing arbitrators",
      "Deciding on challenges to arbitrators",
      "Monitoring the progress of the arbitral proceedings",
      "Scrutinising and approving all arbitral awards before issuance",
      "Setting, managing, and adjusting arbitration costs and fees",
      "Overseeing emergency arbitrator proceedings"
    ],
    whyChosenParagraphs: [
      "While the ICC Court supervises the process, the arbitral tribunal alone decides the merits of the dispute."
    ],
    whatWeAssess: [],
    whatWeAssessParagraphs: [
      "ICC arbitrations are conducted under the ICC Rules of Arbitration, which provide a comprehensive and flexible procedural framework. The Rules are recognised globally for balancing party autonomy with institutional oversight and are regularly updated to reflect developments in international arbitration practice."
    ],
    pitfalls: [],
    pitfallsParagraphs: [
      "There is no separate licensing or bar admission requirement imposed by the ICC for counsel to act in an ICC arbitration. Parties may appoint any lawyer or qualified legal representative, regardless of jurisdiction, provided they are authorised to act on the party’s behalf.",
      "Where court proceedings are required, such as interim measures, enforcement, or annulment, representation must comply with the rules of the courts at the seat of arbitration or where enforcement is sought."
    ],
    additionalSection: {
      title: "Global Reach and Enforceability",
      paragraphs: [
        "ICC arbitral awards are enforceable in over 170 jurisdictions worldwide under the New York Convention, making ICC arbitration one of the most effective mechanisms for resolving international commercial disputes."
      ]
    },
    additionalSectionCallout: false,
    additionalSectionPosition: 'after',
    pitfallsAfterWhatWeAssess: true,
    sectionLabels: {
      whatItIs: "What is the ICC Court of Arbitration?",
      whenApplies: "Role of the ICC Court and Secretariat",
      whyChosen: "Key Functions of the ICC Court",
      pitfalls: "Legal Representation",
      whatWeAssess: "ICC Arbitration Rules"
    },
    disclaimer: "Sadekov Law Firm is an independent Estonian law firm based in Tallinn, with more than 25 years of experience and membership in the Estonian Bar Association since 2006. Our core services include criminal law, law of obligations, commercial law, family law, enforcement proceedings, and labour law, alongside international legal services in International Criminal Defence & Cross-Border Legal Protection, International Arbitration & Cross-Border Commercial Disputes, Strategic Legal Defence in Sanctions, Tax, and Cross-Border Investigations, and Personal Legal Advisor for HNWI and VHNWI. We represent clients across Europe and the MENA region in complex criminal, private, and cross-border legal matters under Estonian and EU law."
  }
};

export function ForumsOverviewSection() {
  const [openModal, setOpenModal] = useState<ForumKey | null>(null);
  const forumKeys: ForumKey[] = ['difc', 'adgm', 'arbitration_diac', 'arbitration_icc'];

  return (
    <section id="forums-overview" className="bg-muted py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-beige uppercase tracking-widest mb-4 block">
            Jurisdiction Overview
          </span>
          <h2 className="heading-section text-foreground">
            A practical overview of the main jurisdictions
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
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
                  <div className="p-4 bg-muted rounded-lg min-h-[200px]">
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

                  {content.leadParagraphs && (
                    <div className="space-y-3 mb-8">
                      {content.leadParagraphs.map((paragraph, i) => (
                        <p key={i} className="body-small text-muted-foreground leading-relaxed">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  )}

                  <div className="space-y-8">
                    {/* What it is */}
                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-beige mb-3">
                        {content.sectionLabels?.whatItIs || "What it is"}
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
                        {content.sectionLabels?.whenApplies || "When it typically applies"}
                      </h4>
                      <div className={content.whenAppliesCallout ? "bg-muted rounded-xl p-5" : undefined}>
                        {content.whenAppliesIntro && (
                          <p className="body-small text-muted-foreground mb-3">
                            {content.whenAppliesIntro}
                          </p>
                        )}
                        {content.whenApplies.length > 0 && (
                          <ul className="space-y-2">
                            {content.whenApplies.map((item, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-beige mt-2 flex-shrink-0" />
                                <span className="body-small text-muted-foreground">{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                        {content.whenAppliesSecondaryIntro && (
                          <p className="body-small text-muted-foreground mt-4 mb-3">
                            {content.whenAppliesSecondaryIntro}
                          </p>
                        )}
                        {content.whenAppliesSecondary && (
                          <ul className="space-y-2">
                            {content.whenAppliesSecondary.map((item, i) => (
                              <li key={i} className="flex items-start gap-3">
                                <span className="w-1.5 h-1.5 rounded-full bg-beige mt-2 flex-shrink-0" />
                                <span className="body-small text-muted-foreground">{item}</span>
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                      {content.whenAppliesOutro && (
                        <p className="body-small text-muted-foreground mt-4">
                          {content.whenAppliesOutro}
                        </p>
                      )}
                    </div>

                    {/* Why parties choose it */}
                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-beige mb-3">
                        {content.sectionLabels?.whyChosen || "Why parties choose it"}
                      </h4>
                      {content.whyChosenIntro && (
                        <p className="body-small text-muted-foreground mb-3">
                          {content.whyChosenIntro}
                        </p>
                      )}
                      {content.whyChosen.length > 0 && (
                        <ul className="space-y-2">
                          {content.whyChosen.map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                              <span className="w-1.5 h-1.5 rounded-full bg-beige mt-2 flex-shrink-0" />
                              <span className="body-small text-muted-foreground">{item}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      {content.whyChosenParagraphs && (
                        <div className="space-y-3 mt-4">
                          {content.whyChosenParagraphs.map((paragraph, i) => (
                            <p key={i} className="body-small text-muted-foreground leading-relaxed">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      )}
                    </div>

                    {(() => {
                      const renderPitfalls = (
                        <div className="bg-muted rounded-xl p-5">
                          <h4 className="text-sm font-semibold uppercase tracking-wider text-beige mb-3">
                            {content.sectionLabels?.pitfalls || "Common pitfalls"}
                          </h4>
                          {content.pitfallsParagraphs && (
                            <div className="space-y-3">
                              {content.pitfallsParagraphs.map((paragraph, i) => (
                                <p key={i} className="body-small text-muted-foreground leading-relaxed">
                                  {paragraph}
                                </p>
                              ))}
                            </div>
                          )}
                          {content.pitfalls.length > 0 && (
                            <ul className="space-y-2">
                              {content.pitfalls.map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                  <span className="w-1.5 h-1.5 rounded-full bg-destructive mt-2 flex-shrink-0" />
                                  <span className="body-small text-muted-foreground">{item}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                          {content.pitfallsOutro && (
                            <p className="body-small text-muted-foreground mt-4">
                              {content.pitfallsOutro}
                            </p>
                          )}
                        </div>
                      );

                      const renderAdditionalBefore = content.additionalSection && content.additionalSectionPosition !== 'after' ? (
                        <div className={content.additionalSectionCallout ? "bg-muted rounded-xl p-5" : undefined}>
                          <h4 className="text-sm font-semibold uppercase tracking-wider text-beige mb-3">
                            {content.additionalSection.title}
                          </h4>
                          <div className="space-y-3">
                            {content.additionalSection.paragraphs.map((paragraph, i) => (
                              <p key={i} className="body-small text-muted-foreground leading-relaxed">
                                {paragraph}
                              </p>
                            ))}
                          </div>
                        </div>
                      ) : null;

                      const renderWhatWeAssess = (
                        <div>
                          <h4 className="text-sm font-semibold uppercase tracking-wider text-beige mb-3">
                            {content.sectionLabels?.whatWeAssess || "What we assess first"}
                          </h4>
                          {content.whatWeAssessIntro && (
                            <p className="body-small text-muted-foreground mb-3">
                              {content.whatWeAssessIntro}
                            </p>
                          )}
                          {content.whatWeAssessParagraphs && (
                            <div className="space-y-3">
                              {content.whatWeAssessParagraphs.map((paragraph, i) => (
                                <p key={i} className="body-small text-muted-foreground leading-relaxed">
                                  {paragraph}
                                </p>
                              ))}
                            </div>
                          )}
                          {content.whatWeAssess.length > 0 && (
                            <ul className="space-y-2">
                              {content.whatWeAssess.map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                  <span className="w-1.5 h-1.5 rounded-full bg-beige mt-2 flex-shrink-0" />
                                  <span className="body-small text-muted-foreground">{item}</span>
                                </li>
                              ))}
                            </ul>
                          )}
                          {content.whatWeAssessOutro && (
                            <p className="body-small text-muted-foreground mt-4">
                              {content.whatWeAssessOutro}
                            </p>
                          )}
                        </div>
                      );

                      const renderAdditionalAfter = content.additionalSection && content.additionalSectionPosition === 'after' ? (
                        <div className={content.additionalSectionCallout ? "bg-muted rounded-xl p-5" : undefined}>
                          <h4 className="text-sm font-semibold uppercase tracking-wider text-beige mb-3">
                            {content.additionalSection.title}
                          </h4>
                          <div className="space-y-3">
                            {content.additionalSection.paragraphs.map((paragraph, i) => (
                              <p key={i} className="body-small text-muted-foreground leading-relaxed">
                                {paragraph}
                              </p>
                            ))}
                          </div>
                        </div>
                      ) : null;

                      if (content.pitfallsAfterWhatWeAssess) {
                        return (
                          <>
                            {renderAdditionalBefore}
                            {renderWhatWeAssess}
                            {renderPitfalls}
                            {renderAdditionalAfter}
                          </>
                        );
                      }

                      return (
                        <>
                          {renderPitfalls}
                          {renderAdditionalBefore}
                          {renderWhatWeAssess}
                          {renderAdditionalAfter}
                        </>
                      );
                    })()}

                    {/* Disclaimer */}
                    <div className="pt-4 border-t border-border">
                      <p className="text-xs text-muted-foreground italic">
                        {content.disclaimer || "This is general information and not legal advice. Applicability depends on the contract and facts."}
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





