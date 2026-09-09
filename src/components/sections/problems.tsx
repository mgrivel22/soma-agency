import { Container } from "@/components/ui-primitives";
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
    <section className="border-t border-border py-20 sm:py-28">
      <Container>
        <div className="max-w-2xl">
          <h2 className="font-heading text-3xl font-semibold text-foreground sm:text-4xl">
            Votre site doit travailler pour votre entreprise.
          </h2>
        </div>
        <div className="mt-12 grid gap-px bg-border md:grid-cols-3">
          {problems.map((item) => (
            <article key={item.title} className="bg-background p-6 sm:p-8">
              <item.icon className="size-5 text-copper-dark" aria-hidden />
              <h3 className="mt-5 font-heading text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{item.text}</p>
            </article>
          ))}
        </div>
        <p className="mt-12 max-w-2xl text-base leading-relaxed text-foreground sm:text-lg">
          Soma Digital transforme ces problèmes en une présence en ligne claire,
          professionnelle et orientée conversion.
        </p>
      </Container>
    </section>
  );
}
