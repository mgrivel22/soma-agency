import { Container, FadeIn, SectionEyebrow } from "@/components/ui-primitives";
import { MonitorSmartphone, MousePointerClick, Smartphone } from "lucide-react";

const problems = [
  {
    icon: MonitorSmartphone,
    title: "Site vieillissant",
    text: "Votre site donne une mauvaise première impression et ne reflète pas la qualité de votre entreprise.",
  },
  {
    icon: MousePointerClick,
    title: "Peu de demandes",
    text: "Les visiteurs trouvent vos informations mais ne passent pas facilement à l’action.",
  },
  {
    icon: Smartphone,
    title: "Mobile insuffisant",
    text: "La majorité des visiteurs consultent votre site depuis leur téléphone. L’expérience doit être parfaite.",
  },
];

export function ProblemsSection() {
  return (
    <section className="border-t border-white/6 py-20 sm:py-28">
      <Container>
        <FadeIn className="mx-auto max-w-2xl text-center">
          <SectionEyebrow>Le constat</SectionEyebrow>
          <h2 className="text-3xl font-semibold text-zinc-50 sm:text-4xl">
            Votre site doit travailler pour votre entreprise.
          </h2>
        </FadeIn>
        <div className="mt-12 grid gap-4 md:grid-cols-3">
          {problems.map((item, index) => (
            <FadeIn key={item.title} delay={index * 0.08}>
              <article className="h-full rounded-2xl border border-white/8 bg-zinc-900/70 p-6 shadow-[0_8px_40px_-24px_rgba(0,0,0,0.8)]">
                <div className="mb-4 flex size-10 items-center justify-center rounded-xl bg-emerald-400/10 text-emerald-400 ring-1 ring-emerald-400/15">
                  <item.icon className="size-5" aria-hidden />
                </div>
                <h3 className="text-lg font-semibold text-zinc-50">{item.title}</h3>
                <p className="mt-2 text-[15px] leading-relaxed text-zinc-400">{item.text}</p>
              </article>
            </FadeIn>
          ))}
        </div>
        <FadeIn className="mx-auto mt-12 max-w-2xl text-center">
          <p className="text-base leading-relaxed text-zinc-300 sm:text-lg">
            Soma Digital transforme ces problèmes en une présence en ligne claire,
            professionnelle et orientée conversion.
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
