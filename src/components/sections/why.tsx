import { Container, FadeIn, SectionEyebrow } from "@/components/ui-primitives";
import { Handshake, MapPin, Palette, Gauge } from "lucide-react";

const reasons = [
  {
    icon: MapPin,
    title: "Pensé pour le local",
    text: "Nous concevons des sites adaptés aux entreprises qui travaillent avec des clients dans leur zone géographique.",
  },
  {
    icon: Palette,
    title: "Design premium",
    text: "Votre site doit refléter la qualité de votre travail.",
  },
  {
    icon: Gauge,
    title: "Performance",
    text: "Un site rapide et parfaitement utilisable sur smartphone.",
  },
  {
    icon: Handshake,
    title: "Accompagnement humain",
    text: "Un interlocuteur unique pour suivre votre projet.",
  },
];

export function WhySection() {
  return (
    <section className="border-t border-white/6 py-20 sm:py-28">
      <Container>
        <FadeIn className="max-w-2xl">
          <SectionEyebrow>Pourquoi Soma Digital</SectionEyebrow>
          <h2 className="text-3xl font-semibold text-zinc-50 sm:text-4xl">
            Une agence de taille humaine, spécialisée dans le local.
          </h2>
        </FadeIn>
        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {reasons.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.06}>
              <article className="h-full rounded-2xl border border-white/8 bg-zinc-900/70 p-6">
                <div className="mb-4 flex size-10 items-center justify-center rounded-xl bg-white/4 text-emerald-400 ring-1 ring-white/8">
                  <item.icon className="size-5" aria-hidden />
                </div>
                <h3 className="text-lg font-semibold text-zinc-50">{item.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-zinc-400">{item.text}</p>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
