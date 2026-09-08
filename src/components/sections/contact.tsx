import { ContactForm } from "@/components/contact-form";
import { Container, FadeIn, SectionEyebrow } from "@/components/ui-primitives";
import { siteConfig } from "@/lib/site";
import { Phone } from "lucide-react";

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 border-t border-white/6 py-20 sm:py-28">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
          <FadeIn>
            <SectionEyebrow>Contact</SectionEyebrow>
            <h2 className="text-3xl font-semibold text-zinc-50 sm:text-4xl">
              Parlez-nous de votre projet
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-zinc-400">
              Trois informations suffisent pour démarrer. Nous revenons vers vous
              sous 24 h ouvrées avec un premier regard sur votre présence en ligne.
            </p>
            <a
              href={siteConfig.phone.href}
              className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-zinc-900/70 px-5 py-4 transition-colors hover:border-emerald-400/30 hover:bg-zinc-900"
            >
              <span className="flex size-10 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-400 ring-1 ring-emerald-400/15">
                <Phone className="size-5" aria-hidden />
              </span>
              <span className="flex flex-col">
                <span className="text-xs text-zinc-400">Appeler directement</span>
                <span className="text-lg font-semibold text-zinc-50">
                  {siteConfig.phone.display}
                </span>
              </span>
            </a>
            <p className="mt-4 text-sm text-zinc-500">
              Du lundi au vendredi. Sans engagement.
            </p>
          </FadeIn>
          <FadeIn delay={0.08}>
            <div className="rounded-2xl border border-white/8 bg-zinc-900/80 p-5 sm:p-8">
              <ContactForm />
            </div>
          </FadeIn>
        </div>
      </Container>
    </section>
  );
}
