import { CtaButton } from "@/components/cta-button";
import { Container } from "@/components/ui-primitives";
import { excluded, followUp, included, launchOffer } from "@/lib/offer";
import { Check, ShieldCheck } from "lucide-react";

export function OfferSection() {
  return (
    <section id="offre" className="scroll-mt-24 border-t border-border py-14 sm:py-28">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
          <div>
            <h2 className="font-heading text-3xl font-semibold text-foreground sm:text-4xl">
              Un prix, tout compris.
            </h2>
            <p className="mt-4 max-w-md text-base leading-relaxed text-muted-foreground">
              Un site clair, pensé pour le téléphone, qui donne envie à vos clients
              de vous appeler. Pas de formule à choisir, pas de surprise.
            </p>
          </div>
          <div>
            <article className="border border-border bg-card p-6 sm:p-8">
              <div className="flex flex-wrap items-end justify-between gap-4">
                <div>
                  <h3 className="font-heading text-2xl font-semibold text-foreground">
                    {launchOffer.title}
                  </h3>
                  <p className="mt-2 text-sm text-muted-foreground">{launchOffer.audience}</p>
                </div>
                <p className="font-heading text-5xl font-semibold tracking-tight text-foreground">
                  {launchOffer.price}
                </p>
              </div>
              <p className="mt-6 flex items-start gap-3 bg-primary/10 p-4 text-sm font-medium leading-relaxed text-foreground">
                <ShieldCheck className="mt-0.5 size-5 shrink-0 text-copper-dark" aria-hidden />
                {launchOffer.guarantee}
              </p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {included.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
                    <Check className="mt-0.5 size-4 shrink-0 text-copper-dark" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm font-medium text-foreground">{launchOffer.delivery}</p>
              <p className="mt-1 text-sm text-muted-foreground">{launchOffer.payment}</p>
              <CtaButton href="/#contact" className="mt-6 w-full sm:w-auto">
                Recevoir mon audit gratuit
              </CtaButton>
              <div className="mt-6 space-y-3 border-t border-border pt-5 text-sm leading-relaxed">
                <p className="text-foreground">{followUp.text}</p>
                <p className="text-muted-foreground">{launchOffer.exchange}</p>
                <p className="text-muted-foreground">
                  <span className="font-medium text-foreground">Non inclus : </span>
                  {excluded.join(", ")}.
                </p>
              </div>
            </article>
          </div>
        </div>
      </Container>
    </section>
  );
}
