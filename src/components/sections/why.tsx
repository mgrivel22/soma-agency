import { Container } from "@/components/ui-primitives";
import { siteConfig } from "@/lib/site";
import { Gauge, Handshake, MapPin, Palette } from "lucide-react";

const reasons = [
  {
    icon: MapPin,
    title: "Pensé pour le local",
    text: "Nous concevons des sites adaptés aux entreprises qui travaillent avec des clients dans leur zone géographique.",
  },
  {
    icon: Palette,
    title: "Design à votre image",
    text: "Votre site doit refléter la qualité de votre travail, pas celle d’un modèle générique.",
  },
  {
    icon: Gauge,
    title: "Le téléphone qui sonne",
    text: "Bouton d’appel, formulaire, fiche Google : chaque page est faite pour déclencher une demande.",
  },
  {
    icon: Handshake,
    title: "Un seul interlocuteur",
    text: "Vous parlez à Mathieu, pas à un standard. Du premier échange jusqu’à la mise en ligne.",
  },
];

export function WhySection() {
  return (
    <section className="border-t border-border py-20 sm:py-28">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <div className="max-w-xl">
            <h2 className="font-heading text-3xl font-semibold text-foreground sm:text-4xl">
              Une agence de taille humaine, spécialisée dans le local.
            </h2>
            <p className="mt-6 text-[15px] leading-relaxed text-muted-foreground">
              Je m’appelle {siteConfig.founder}. J’ai créé Soma Digital pour les
              artisans et les entreprises locales qui ont besoin d’un site clair,
              sérieux, et qui ramène des demandes — pas d’une plateforme à
              administrer le dimanche soir.
            </p>
            <p className="mt-4 text-[15px] leading-relaxed text-muted-foreground">
              Pas de discours marketing, pas de faux chiffres. Un échange, un
              audit concret, puis un site que vous comprenez.
            </p>
          </div>
          <div className="grid gap-px bg-border sm:grid-cols-2">
            {reasons.map((item) => (
              <article key={item.title} className="bg-background p-6">
                <item.icon className="size-5 text-copper-dark" aria-hidden />
                <h3 className="mt-4 font-heading text-lg font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
