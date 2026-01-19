import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { label: 'Why It Matters', href: '#why-forum-matters' },
  { label: 'Forums', href: '#forums-overview' },
  { label: 'Misconceptions', href: '#misconceptions' },
  { label: 'How We Help', href: '#how-we-help' },
  { label: 'Contact', href: '#contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-primary shadow-lg py-3'
          : 'bg-primary/95 py-4'
      }`}
    >
      <div className="container-narrow flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <span className="font-heading text-xl md:text-2xl font-semibold text-primary-foreground tracking-tight">
            Sadekov Law Firm
          </span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => scrollToSection(link.href)}
              className="font-body text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
            >
              {link.label}
            </button>
          ))}
          <Button
            variant="hero"
            size="sm"
            onClick={() => scrollToSection('#contact')}
          >
            Request Assessment
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-primary-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-primary border-t border-white/10">
          <nav className="container-narrow py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollToSection(link.href)}
                className="font-body text-base text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200 text-left py-2"
              >
                {link.label}
              </button>
            ))}
            <Button
              variant="hero"
              className="mt-2 w-full"
              onClick={() => scrollToSection('#contact')}
            >
              Request Assessment
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
