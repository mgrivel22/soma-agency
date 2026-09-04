import { ContactForm } from "@/components/contact-form";
import { Container, FadeIn, SectionEyebrow } from "@/components/ui-primitives";

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
              Décrivez votre activité en quelques lignes. Nous revenons vers vous
              sous 24 h ouvrées avec un premier regard sur votre présence en ligne.
            </p>
            <p className="mt-6 text-sm text-zinc-500">Sans engagement.</p>
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
