import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/Sadeg_logo_tr.png';
const navLinks = [{
  label: 'Why It Matters',
  href: '#why-forum-matters'
}, {
  label: 'Forums',
  href: '#forums-overview'
}, {
  label: 'Misconceptions',
  href: '#misconceptions'
}, {
  label: 'How We Help',
  href: '#how-we-help'
}, {
  label: 'Contact',
  href: '#contact'
}];
export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
    setIsMobileMenuOpen(false);
  };
  return <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-sm border-b border-black/5 shadow-sm text-primary py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <img alt="Sadekov Law Firm" className="h-10 md:h-12 w-auto" src={logo} />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          {navLinks.map(link => <button key={link.href} onClick={() => scrollToSection(link.href)} className={`font-body text-sm transition-colors duration-200 relative group ${isScrolled ? 'text-primary/80 hover:text-primary' : 'text-primary-foreground/70 hover:text-primary-foreground'}`}>
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-beige transition-all duration-200 group-hover:w-full" />
            </button>)}
          <Button variant="hero" size="sm" onClick={() => scrollToSection('#contact')} className="ml-4">
            Request Assessment
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button className={`lg:hidden p-2 rounded-lg transition-colors ${isScrolled ? 'text-primary hover:bg-black/5' : 'text-primary-foreground hover:bg-white/10'}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && <div className={`lg:hidden backdrop-blur-sm border-t animate-in slide-in-from-top-2 duration-200 ${isScrolled ? 'bg-white/95 border-black/10' : 'bg-primary/98 border-white/10'}`}>
          <nav className="max-w-7xl mx-auto px-6 py-6 flex flex-col gap-1">
            {navLinks.map(link => <button key={link.href} onClick={() => scrollToSection(link.href)} className={`font-body text-base transition-colors duration-200 text-left py-3 px-4 rounded-lg ${isScrolled ? 'text-primary/80 hover:text-primary hover:bg-black/5' : 'text-primary-foreground/80 hover:text-primary-foreground hover:bg-white/5'}`}>
                {link.label}
              </button>)}
            <Button variant="hero" className="mt-4 w-full" onClick={() => scrollToSection('#contact')}>
              Request Assessment
            </Button>
          </nav>
        </div>}
    </header>;
}
