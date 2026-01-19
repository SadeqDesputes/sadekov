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
import { ArrowRight, CheckCircle2 } from 'lucide-react';
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

    // Simulate form submission
    setIsSubmitted(true);
    toast.success('Your request has been submitted');
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="section-navy py-20 md:py-28">
        <div className="container-narrow">
          <div className="max-w-2xl mx-auto text-center">
            <CheckCircle2 className="w-16 h-16 text-beige mx-auto mb-6" />
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
    <section id="contact" className="section-navy py-20 md:py-28">
      <div className="container-narrow">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="heading-section text-primary-foreground mb-6">
              Before relying on a UAE forum, make sure it actually applies.
            </h2>
            <p className="body-large text-primary-foreground/80">
              If you are in a dispute, facing one, or uncertain which forum governs your case, we can review the clause and the key facts and explain the options clearly.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-primary-foreground">
                  Name <span className="text-beige">*</span>
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-beige"
                  placeholder="Your name"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="company" className="text-primary-foreground">
                  Company <span className="text-primary-foreground/50">(optional)</span>
                </Label>
                <Input
                  id="company"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-beige"
                  placeholder="Your company"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-primary-foreground">
                Email <span className="text-beige">*</span>
              </Label>
              <Input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-beige"
                placeholder="your@email.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="forum" className="text-primary-foreground">
                What does your contract mention? <span className="text-beige">*</span>
              </Label>
              <Select
                value={formData.forum}
                onValueChange={(value) => setFormData({ ...formData, forum: value })}
              >
                <SelectTrigger className="bg-white/10 border-white/20 text-primary-foreground focus:border-beige [&>span]:text-primary-foreground [&>span[data-placeholder]]:text-primary-foreground/50">
                  <SelectValue placeholder="Select an option" />
                </SelectTrigger>
                <SelectContent className="bg-primary border-white/20">
                  {forumOptions.map((option) => (
                    <SelectItem
                      key={option.value}
                      value={option.value}
                      className="text-primary-foreground focus:bg-white/10 focus:text-primary-foreground"
                    >
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="description" className="text-primary-foreground">
                Short description <span className="text-beige">*</span>
              </Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                className="bg-white/10 border-white/20 text-primary-foreground placeholder:text-primary-foreground/50 focus:border-beige min-h-[120px]"
                placeholder="Briefly describe your dispute or situation"
              />
            </div>

            <div className="flex items-start gap-3">
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
                className="text-sm text-primary-foreground/70 font-normal cursor-pointer"
              >
                I understand this is not legal advice and does not create a lawyer-client relationship.
              </Label>
            </div>

            <Button variant="hero" size="xl" type="submit" className="w-full">
              Request an initial forum assessment
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <p className="body-small text-primary-foreground/50 text-center">
              Confidentiality respected. Initial information helps us assess the next step.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}
