import { Container } from "@/components/ui-primitives";

const steps = [
  {
    step: "01",
    title: "Audit",
    text: "Nous analysons votre site actuel et votre présence en ligne — ou, si vous n’avez pas encore de site, vos besoins et votre zone d’intervention.",
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
    <section id="methode" className="scroll-mt-24 border-t border-border py-20 sm:py-28">
      <Container>
        <div className="max-w-2xl">
          <h2 className="font-heading text-3xl font-semibold text-foreground sm:text-4xl">
            Simple pour vous. Efficace pour votre entreprise.
          </h2>
        </div>
        <ol className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0">
          {steps.map((item, index) => (
            <li
              key={item.step}
              className={
                index === 0
                  ? "lg:pr-6"
                  : "border-t border-border pt-8 sm:border-t-0 sm:pt-0 lg:border-l lg:px-6"
              }
            >
              <span className="font-heading text-sm font-semibold text-copper-dark">{item.step}</span>
              <h3 className="mt-3 font-heading text-lg font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </li>
          ))}
        </ol>
        <p className="mt-10 text-sm font-medium text-muted-foreground">
          Objectif : vous faire gagner du temps, pas vous ajouter du travail.
        </p>
      </Container>
    </section>
  );
}
