import { CtaButton } from "@/components/cta-button";
import { Container } from "@/components/ui-primitives";
import { excluded, included, launchOffer, retainers } from "@/lib/offer";
import { Check } from "lucide-react";

export function OfferSection() {
  return (
    <section id="offre" className="scroll-mt-24 border-t border-border py-20 sm:py-28">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <div>
            <h2 className="font-heading text-3xl font-semibold text-foreground sm:text-4xl">
              Tout ce qu’il faut pour une présence web professionnelle.
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
              Un site vitrine clair, utilisable sur téléphone, et conçu pour que vos
              visiteurs vous contactent sans friction.
            </p>
          </div>
          <div>
            <article className="border border-border bg-card p-6 sm:p-8">
              <p className="text-sm font-medium text-copper-dark">{launchOffer.badge}</p>
              <div className="mt-4 flex flex-wrap items-end justify-between gap-4 border-b border-border pb-6">
                <div>
                  <h3 className="font-heading text-2xl font-semibold text-foreground">
                    {launchOffer.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{launchOffer.audience}</p>
                </div>
                <p className="text-right">
                  <span className="block text-xs text-muted-foreground">
                    Tarif habituel {launchOffer.usualPrice} HT
                  </span>
                  <span className="text-3xl font-semibold tracking-tight text-foreground">
                    {launchOffer.price}
                  </span>
                  <span className="ml-1 text-sm text-muted-foreground">{launchOffer.tax}</span>
                </p>
              </div>
              <p className="mt-5 text-sm leading-relaxed text-foreground">{launchOffer.exchange}</p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-copper-dark" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6 border-t border-border pt-5">
                <p className="text-sm font-medium text-foreground">Ce qui n’est pas inclus</p>
                <ul className="mt-2 space-y-1.5 text-sm text-muted-foreground">
                  {excluded.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
              <p className="mt-5 text-sm text-muted-foreground">{launchOffer.caveat}</p>
              <p className="mt-2 text-sm text-muted-foreground">{launchOffer.payment}</p>
              <p className="mt-2 text-sm font-medium text-foreground">{launchOffer.guarantee}</p>
              <CtaButton href="/#contact" className="mt-6 w-full sm:w-auto">
                Demander mon audit gratuit
              </CtaButton>
            </article>
            <div className="mt-8 border-t border-border pt-6">
              <h3 className="font-heading text-lg font-semibold text-foreground">
                Après la 1re année, restez tranquille (facultatif)
              </h3>
              <ul className="mt-4 divide-y divide-border border-y border-border">
                {retainers.map((item) => (
                  <li key={item.name} className="grid gap-1 py-4 sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] sm:gap-6">
                    <p className="text-sm font-semibold text-foreground">
                      {item.name}{" "}
                      <span className="font-medium text-muted-foreground">({item.price})</span>
                    </p>
                    <p className="text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-muted-foreground">
                Sans engagement, résiliable à tout moment. Vous restez propriétaire à 100 %
                de votre nom de domaine dans tous les cas.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
