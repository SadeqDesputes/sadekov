import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { WhyForumMattersSection } from '@/components/WhyForumMattersSection';
import { ForumsOverviewSection } from '@/components/ForumsOverviewSection';
import { MisconceptionsSection } from '@/components/MisconceptionsSection';
import { HowWeHelpSection } from '@/components/HowWeHelpSection';
import { AboutSadeqDisputesSection } from '@/components/AboutSadeqDisputesSection';
import { ContactSection } from '@/components/ContactSection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <WhyForumMattersSection />
        <ForumsOverviewSection />
        <MisconceptionsSection />
        <HowWeHelpSection />
        <AboutSadeqDisputesSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
