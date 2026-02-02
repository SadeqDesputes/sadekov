import freezoneImg from "@/assets/freezone.jpg";
import { Button } from "@/components/ui/button";

export function AboutSadeqDisputesSection() {
  const scrollToRequestForm = () => {
    const element = document.querySelector('#request-assessment');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="section-white pt-5 pb-24 md:pt-7 md:pb-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start lg:items-stretch">
          <div>
            <img
              src={freezoneImg}
              alt="UAE Free Zone"
              className="w-full aspect-square object-cover rounded-2xl border border-border"
            />
          </div>
          <div className="flex flex-col h-full">
            <h2 className="heading-section text-foreground mb-8">
              About Sadeq Disputes
            </h2>
            <div className="space-y-6">
              <p className="body-large text-muted-foreground">
                Sadekov Law Firm is an independent Estonian law firm based in Tallinn, with over 25 years of experience and membership in the Estonian Bar Association since 2006. Our core practice covers criminal law, law of obligations, commercial law, family law, enforcement proceedings, and labour law. We also advise on complex cross-border matters, including international criminal defence and legal protection, international arbitration and commercial disputes, sanctions and tax-related investigations, and personal legal advisory for HNWI and VHNWI clients.
              </p>
              <p className="body-large text-muted-foreground">
                In the UAE Free Zones, we operate under the <span className="font-semibold text-foreground">Sadeq Disputes</span> brand, focusing on disputes connected with DIFC, ADGM, and arbitration frameworks commonly used in the UAE. We represent clients across Europe and the MENA region in sensitive criminal, private, and cross-border cases under Estonian and EU law.
              </p>
            </div>

            <div className="mt-10 flex flex-col sm:flex-row gap-4 lg:mt-auto">
              <Button asChild variant="hero" size="xl" className="w-full sm:w-auto">
                <a href="https://sadekov.ee/en/contacts">Contact us</a>
              </Button>
              <Button
                variant="outline"
                size="xl"
                onClick={scrollToRequestForm}
                className="w-full sm:w-auto border-beige text-beige hover:bg-beige/10 hover:text-beige"
              >
                Legal Consult
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

