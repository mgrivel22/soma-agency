import { Container, FadeIn, SectionEyebrow } from "@/components/ui-primitives";

const steps = [
  {
    step: "01",
    title: "Audit",
    text: "Nous analysons votre site actuel et votre présence en ligne.",
  },
  {
    step: "02",
    title: "Conception",
    text: "Nous concevons une interface moderne adaptée à votre activité et à votre clientèle.",
  },
  {
    step: "03",
    title: "Production",
    text: "Le site est développé, optimisé pour mobile et préparé pour la mise en ligne.",
  },
  {
    step: "04",
    title: "Lancement",
    text: "Votre nouveau site est mis en ligne et prêt à recevoir vos visiteurs.",
  },
];

export function MethodSection() {
  return (
    <section id="methode" className="scroll-mt-24 border-t border-white/6 py-20 sm:py-28">
      <Container>
        <FadeIn className="max-w-2xl">
          <SectionEyebrow>Notre méthode</SectionEyebrow>
          <h2 className="text-3xl font-semibold text-zinc-50 sm:text-4xl">
            Simple pour vous. Efficace pour votre entreprise.
          </h2>
        </FadeIn>
        <ol className="relative mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((item, index) => (
            <FadeIn key={item.step} delay={index * 0.07}>
              <li className="relative h-full rounded-2xl border border-white/8 bg-zinc-900/70 p-6">
                <span className="text-xs font-semibold tracking-[0.18em] text-emerald-400">
                  {item.step}
                </span>
                <h3 className="mt-3 text-lg font-semibold text-zinc-50">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">{item.text}</p>
              </li>
            </FadeIn>
          ))}
        </ol>
        <FadeIn className="mt-10">
          <p className="text-sm font-medium text-zinc-400">
            Objectif : vous faire gagner du temps, pas vous ajouter du travail.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
