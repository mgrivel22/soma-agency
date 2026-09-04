import { CtaButton } from "@/components/cta-button";
import { Container } from "@/components/ui-primitives";
import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-1 items-center py-24">
      <Container className="max-w-xl text-center">
        <p className="text-sm font-semibold tracking-[0.16em] text-emerald-400 uppercase">
          404
        </p>
        <h1 className="mt-3 text-3xl font-semibold text-zinc-50">
          Page introuvable
        </h1>
        <p className="mt-4 text-zinc-400">
          Cette page n’existe pas. Revenez à l’accueil pour demander un audit ou
          consulter les exemples de sites.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <CtaButton href="/">Retour à l’accueil</CtaButton>
          <Link
            href="/#contact"
            className="inline-flex h-12 items-center justify-center rounded-xl px-5 text-[15px] font-semibold text-zinc-200 ring-1 ring-white/10 transition hover:bg-white/5"
          >
            Demander un audit
          </Link>
        </div>
      </Container>
    </main>
  );
}
