import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { ArrowRight, CheckCircle2, Shield, Send, Clock, MessageCircle } from 'lucide-react';
import { toast } from 'sonner';

const forumOptions = [
  { value: 'difc', label: 'DIFC Courts' },
  { value: 'adgm', label: 'ADGM Courts' },
  { value: 'arbitration', label: 'Arbitration (DIAC/ICC)' },
  { value: 'not-sure', label: 'Not sure' },
];

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    forum: '',
    description: '',
    disclaimer: false,
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.forum || !formData.description) {
      toast.error('Please fill in all required fields');
      return;
    }
    
    if (!formData.disclaimer) {
      toast.error('Please accept the disclaimer to continue');
      return;
    }

    setIsSubmitted(true);
    toast.success('Your request has been submitted');
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="section-navy py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 rounded-full bg-beige/20 border border-beige/30 flex items-center justify-center mx-auto mb-8">
              <CheckCircle2 className="w-10 h-10 text-beige" />
            </div>
            <h2 className="heading-section text-primary-foreground mb-4">
              Request Received
            </h2>
            <p className="body-large text-primary-foreground/80">
              Thank you for reaching out. We will review your submission and respond within one business day.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="section-navy py-24 md:py-32 relative overflow-hidden" aria-label="Request assessment" >
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-beige/5 rounded-full blur-3xl -translate-y-1/2" />
      </div>
      
      <div id="request-assessment" className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 overflow-x-hidden">
        <div className="grid lg:grid-cols-2 gap-16 items-start lg:items-stretch">
          {/* Left - CTA Content */}
          <div className="flex flex-col h-full min-w-0">
            <div>
              <span className="text-sm font-semibold text-beige uppercase tracking-widest mb-4 block">
                Get Started
              </span>
              <h2 className="heading-section text-primary-foreground mb-6">
                Before relying on a UAE forum, make sure it actually applies.
              </h2>

              <div className="mb-6">
                <p className="text-beige uppercase font-heading text-2xl md:text-3xl tracking-widest leading-tight">
                  <span className="block">SADEQ DISPUTES</span>
                  <span className="block">NOT JUST TO Contest. TO PREVAIL!</span>
                </p>
              </div>

              <p className="body-large text-primary-foreground/80 mb-6 break-words">
                If you are in a dispute, facing one, or uncertain which forum governs your case, we can review the clause and the key facts and explain the options clearly. You can also request a private consultation with our experienced team. We advise on dispute strategy and forum selection across UAE free zones.
              </p>
            </div>
            
            {/* Trust indicators */}
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="w-10 h-10 rounded-lg bg-beige/10 flex items-center justify-center">
                  <Shield className="w-5 h-5 text-beige" />
                </div>
                <p className="body-small text-primary-foreground/70">
                  Confidentiality respected
                </p>
              </div>
              <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl border border-white/10">
                <div className="w-10 h-10 rounded-lg bg-beige/10 flex items-center justify-center">
                  <Clock className="w-5 h-5 text-beige" />
                </div>
                <p className="body-small text-primary-foreground/70">
                  Initial information helps us assess the next step
                </p>
              </div>
            </div>

            <div className="mt-10 lg:mt-auto lg:mb-8 w-full lg:px-8">
              <Button
                asChild
                variant="hero"
                size="xl"
                className="w-full group flex items-center justify-center gap-3 text-center leading-tight whitespace-normal break-words sm:whitespace-nowrap"
              >
                <a href="https://sadekov.ee/en/online-booking">
                  <span className="flex items-center justify-center gap-3 w-full flex-wrap">
                    <MessageCircle className="w-5 h-5 text-primary flex-shrink-0 hidden sm:inline-flex" />
                    <span className="block min-w-0 text-center break-words">
                      Online consultation with our legal team
                    </span>
                  </span>
                </a>
              </Button>
            </div>
          </div>

          {/* Right - Form */}
          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 min-w-0">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 rounded-lg bg-beige/20 flex items-center justify-center">
                <Send className="w-5 h-5 text-beige" />
              </div>
              <h3 className="font-heading text-xl font-semibold text-primary-foreground">
                Request an Assessment
              </h3>
            </div>
            
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-primary-foreground text-sm">
                    Name <span className="text-beige">*</span>
                  </Label>
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-beige focus:ring-beige/20 rounded-lg h-11"
                    placeholder="Your name"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="company" className="text-primary-foreground text-sm">
                    Company <span className="text-primary-foreground/50">(optional)</span>
                  </Label>
                  <Input
                    id="company"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-beige focus:ring-beige/20 rounded-lg h-11"
                    placeholder="Your company"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-primary-foreground text-sm">
                  Email <span className="text-beige">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-beige focus:ring-beige/20 rounded-lg h-11"
                  placeholder="your@email.com"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="forum" className="text-primary-foreground text-sm">
                  What does your contract mention? <span className="text-beige">*</span>
                </Label>
                <Select
                  value={formData.forum}
                  onValueChange={(value) => setFormData({ ...formData, forum: value })}
                >
                  <SelectTrigger className="bg-white/10 border-white/20 text-primary-foreground focus:border-beige focus:ring-beige/20 rounded-lg h-11 [&>span]:text-primary-foreground [&>span[data-placeholder]]:text-primary-foreground/40">
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent className="bg-primary border-white/20 rounded-lg">
                    {forumOptions.map((option) => (
                      <SelectItem
                        key={option.value}
                        value={option.value}
                        className="text-primary-foreground focus:bg-white/10 focus:text-primary-foreground rounded-md"
                      >
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="description" className="text-primary-foreground text-sm">
                  Short description <span className="text-beige">*</span>
                </Label>
                <Textarea
                  id="description"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/40 focus:border-beige focus:ring-beige/20 min-h-[100px] rounded-lg"
                  placeholder="Briefly describe your dispute or situation"
                />
              </div>

              <div className="flex items-start gap-3 p-4 bg-white/5 rounded-lg border border-white/10">
                <Checkbox
                  id="disclaimer"
                  checked={formData.disclaimer}
                  onCheckedChange={(checked) =>
                    setFormData({ ...formData, disclaimer: checked as boolean })
                  }
                  className="border-white/40 data-[state=checked]:bg-beige data-[state=checked]:border-beige mt-0.5"
                />
                <Label
                  htmlFor="disclaimer"
                  className="text-sm text-primary-foreground/70 font-normal cursor-pointer leading-relaxed"
                >
                  I understand this is not legal advice and does not create a lawyer-client relationship.
                </Label>
              </div>

              <Button
                variant="hero"
                size="xl"
                type="submit"
                className="w-full group text-center leading-snug whitespace-normal break-words h-auto py-3 sm:h-14 sm:py-0 sm:leading-normal sm:whitespace-nowrap"
              >
                <span className="flex items-center justify-center gap-2 w-full flex-wrap">
                  <span className="block min-w-0 text-center break-words overflow-hidden [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical] sm:[display:block] sm:[-webkit-line-clamp:unset] sm:[-webkit-box-orient:unset]">
                    Request a Jurisdiction Assessment
                  </span>
                  <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1 flex-shrink-0 hidden sm:inline-flex" />
                </span>
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
