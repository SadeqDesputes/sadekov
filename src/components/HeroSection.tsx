import { Button } from '@/components/ui/button';
import { ArrowRight, Clock, Shield, Target } from 'lucide-react';
import { HeroBackground } from './icons/HeroBackground';
import { UAEForumIllustration } from './icons/UAEForumIllustration';
import vladimirImage from '@/assets/vladimir.png';

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
    <section className="section-navy min-h-screen flex flex-col pt-20 relative overflow-x-hidden">
      {/* Background Pattern */}
      <HeroBackground className="absolute inset-0 w-full h-full" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-16 md:pt-20 pb-0 relative z-10 w-full flex-1">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start lg:items-stretch h-full">
          {/* Left Column - Content */}
          <div className="max-w-lg min-w-0 break-words pb-10 lg:pb-12">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-beige/10 border border-beige/25 mb-8">
              <span className="w-2 h-2 rounded-full bg-beige" />
              <span className="text-sm font-medium text-beige">
                Dispute-focused. Professional. No assumptions.
              </span>
            </div>

            {/* Headline */}
            <h1 className="heading-hero text-primary-foreground mb-6 leading-tight">
              UAE Free Zone dispute? Start by confirming the forum.
            </h1>

            {/* Subheading */}
            <p className="body-large text-primary-foreground/75 mb-10 leading-relaxed">
              DIFC Courts, ADGM Courts, or arbitration may all be relevant in the UAE, but applicability is never automatic. We help you identify the correct forum and the practical implications before you take action.
            </p>

            {/* Bullets with Icons */}
            <ul className="space-y-4 mb-10">
              {bullets.map((bullet, index) => (
                <li key={index} className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-beige/10 border border-beige/20 flex items-center justify-center flex-shrink-0 group-hover:bg-beige/15 transition-colors">
                    <bullet.icon className="w-5 h-5 text-beige" />
                  </div>
                  <span className="body-base text-primary-foreground/80 pt-2">{bullet.text}</span>
                </li>
              ))}
            </ul>

            {/* CTAs */}
            <div className="flex flex-col gap-4 w-full max-w-sm">
              <Button variant="hero" size="xl" onClick={scrollToContact} className="group w-full">
                Request an initial forum assessment
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button variant="heroOutline" size="xl" onClick={scrollToContact} className="w-full">
                Send a short summary of your dispute
              </Button>
            </div>
          </div>

          {/* Right Column - Clean Forum Illustration */}
          <div className="relative flex flex-col items-center mt-10 lg:mt-0 h-full self-stretch">
            <UAEForumIllustration className="w-full max-w-sm sm:max-w-md lg:max-w-md h-auto" />
            <div className="mt-8 lg:mt-auto w-full flex justify-center">
              <img
                src={vladimirImage}
                alt="Vladimir"
                className="w-full max-w-[485px] sm:max-w-[560px] lg:max-w-[700px] xl:max-w-[800px] h-auto object-contain"
              />
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-background/5 to-transparent" />
    </section>
  );
}
