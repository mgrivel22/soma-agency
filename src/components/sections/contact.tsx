import { ContactForm } from "@/components/contact-form";
import { Container } from "@/components/ui-primitives";
import { siteConfig } from "@/lib/site";
import { Phone } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-border py-20 sm:py-28">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
          <div>
            <h2 className="font-heading text-3xl font-semibold text-foreground sm:text-4xl">
              Parlez-nous de votre projet
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
              Trois informations suffisent pour démarrer. Nous revenons vers vous
              sous 24 h ouvrées avec un premier regard sur votre présence en ligne
              — ou une proposition de maquette si vous n’avez pas encore de site.
            </p>
            <a
              href={siteConfig.phone.href}
              className="mt-8 inline-flex items-center gap-3 border border-border bg-card px-5 py-4 transition-colors hover:border-copper-dark/40"
            >
              <span className="flex size-10 items-center justify-center bg-primary/15 text-copper-dark">
                <Phone className="size-5" aria-hidden />
              </span>
              <span className="flex flex-col">
                <span className="text-xs text-muted-foreground">Appeler directement</span>
                <span className="text-lg font-semibold text-foreground">
                  {siteConfig.phone.display}
                </span>
              </span>
            </a>
            <p className="mt-4 text-sm text-muted-foreground">
              Du lundi au vendredi. Sans engagement.
            </p>
          </div>
          <div className="border border-border bg-card p-5 sm:p-8">
            <ContactForm />
          </div>
        </div>
      </Container>
    </section>
  );
}
