export function Footer() {
  return (
    <footer className="bg-primary border-t border-white/10 py-10">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <p className="font-heading text-lg font-semibold text-primary-foreground mb-1">
              Sadekov Law Firm
            </p>
            <p className="body-small text-primary-foreground/60">
              Disputes | Cross-border enforcement | Forum assessment
            </p>
          </div>

          <div className="flex items-center gap-6">
            <a
              href="#"
              className="body-small text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="body-small text-primary-foreground/60 hover:text-primary-foreground transition-colors"
            >
              Disclaimer
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-white/10 text-center">
          <p className="body-small text-primary-foreground/40">
            © {new Date().getFullYear()} Sadekov Law Firm. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
