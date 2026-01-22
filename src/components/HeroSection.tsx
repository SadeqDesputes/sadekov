import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, Shield, Target } from 'lucide-react';
import { HeroBackground } from './icons/HeroBackground';
import { UAEForumIllustration } from './icons/UAEForumIllustration';

const bullets = [
  {
    icon: Clock,
    text: "Avoid wasted time and costs caused by filing in the wrong place",
  },
  {
    icon: Shield,
    text: "Reduce enforcement risk by structuring the dispute correctly from day one",
  },
  {
    icon: Target,
    text: "Get clarity on whether DIFC, ADGM, or arbitration truly governs your case",
  },
];

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.querySelector('#contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="section-navy min-h-screen flex items-center pt-20 relative overflow-hidden">
      {/* Background Pattern */}
      <HeroBackground className="absolute inset-0 w-full h-full" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 md:py-24 relative z-10">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="lg:col-span-5 max-w-xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-beige/15 border border-beige/30 mb-8">
              <span className="w-2 h-2 rounded-full bg-beige" />
              <span className="text-sm font-medium text-beige">
                Dispute-focused. Professional. No assumptions.
              </span>
            </div>

            {/* Headline */}
            <h1 className="heading-hero text-primary-foreground mb-6">
              Before you file or respond, confirm the right forum actually applies!
            </h1>

            {/* Subheading */}
            <p className="body-large text-primary-foreground/80 mb-8">
              DIFC Courts, ADGM Courts, or arbitration may all be relevant in the UAE, but applicability is never automatic. We help you identify the correct forum and the practical implications before you take action.
            </p>

            {/* Bullets with Icons */}
            <ul className="space-y-4 mb-8">
              {bullets.map((bullet, index) => (
                <li key={index} className="flex items-start gap-3 group">
                  <div className="w-9 h-9 rounded-lg bg-beige/10 border border-beige/20 flex items-center justify-center flex-shrink-0 group-hover:bg-beige/20 transition-colors">
                    <bullet.icon className="w-4 h-4 text-beige" />
                  </div>
                  <span className="body-base text-primary-foreground/85 pt-1.5">{bullet.text}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" onClick={scrollToContact} className="group">
                Request an initial forum assessment
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="heroOutline" size="xl" onClick={scrollToContact}>
                Send a short summary of your dispute
              </Button>
            </div>
          </div>

          {/* Right Column - UAE Forum Illustration */}
          <div className="lg:col-span-7 flex items-center justify-center">
            <div className="w-full max-w-2xl">
              <UAEForumIllustration className="w-full h-auto" />
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background/10 to-transparent" />
    </section>
  );
}
