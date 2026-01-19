import logo from '@/assets/logo.png';

export function Footer() {
  return (
    <footer className="bg-primary border-t border-white/10">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-4">
            <img 
              src={logo} 
              alt="Sadekov Law Firm" 
              className="h-8 w-auto opacity-80"
            />
            <p className="body-small text-primary-foreground/50">
              Disputes | Cross-border enforcement | Forum assessment
            </p>
          </div>

          <div className="flex items-center gap-8">
            <a
              href="#"
              className="body-small text-primary-foreground/50 hover:text-primary-foreground transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="body-small text-primary-foreground/50 hover:text-primary-foreground transition-colors"
            >
              Disclaimer
            </a>
          </div>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10 text-center">
          <p className="body-small text-primary-foreground/30">
            © {new Date().getFullYear()} Sadekov Law Firm. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
