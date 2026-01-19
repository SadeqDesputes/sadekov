import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const bullets = [
  "Avoid wasted time and costs caused by filing in the wrong place",
  "Reduce enforcement risk by structuring the dispute correctly from day one",
  "Get clarity on whether DIFC, ADGM, or arbitration truly governs your case",
];

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section-navy min-h-screen flex items-center pt-20">
      <div className="container-narrow py-20 md:py-28">
        <div className="max-w-4xl">
          {/* Headline */}
          <h1 className="heading-hero text-primary-foreground mb-6">
            Before you file or respond, confirm the right forum actually applies.
          </h1>

          {/* Subheading */}
          <p className="body-large text-primary-foreground/85 mb-10 max-w-3xl">
            DIFC Courts, ADGM Courts, or arbitration may all be relevant in the UAE, but applicability is never automatic. We help you identify the correct forum and the practical implications before you take action.
          </p>

          {/* Bullets */}
          <ul className="space-y-4 mb-10">
            {bullets.map((bullet, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="w-1.5 h-1.5 rounded-full bg-beige mt-2.5 flex-shrink-0" />
                <span className="body-base text-primary-foreground/90">{bullet}</span>
              </li>
            ))}
          </ul>

          {/* Micro-note */}
          <p className="body-small text-primary-foreground/60 mb-8 italic">
            Dispute-focused. Professional. No assumptions.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="xl" onClick={scrollToContact}>
              Request an initial forum assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="heroOutline" size="xl" onClick={scrollToContact}>
              Send a short summary of your dispute
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
