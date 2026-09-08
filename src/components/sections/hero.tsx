"use client";

import { CtaButton } from "@/components/cta-button";
import { HeroDevices } from "@/components/mockups";
import { Container } from "@/components/ui-primitives";
import { siteConfig } from "@/lib/site";
import { motion, useReducedMotion } from "framer-motion";
import { Smartphone, Sparkles, Zap } from "lucide-react";

const reassurances = [
  { icon: Sparkles, label: "Design sur mesure" },
  { icon: Smartphone, label: "Optimisé mobile" },
  { icon: Zap, label: "Mise en ligne rapide" },
];

export function HeroSection() {
  const reduce = useReducedMotion();

  return (
    <section className="relative overflow-hidden pb-16 pt-10 sm:pb-24 sm:pt-16 lg:pb-28 lg:pt-20">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-70" />
      <div className="pointer-events-none absolute inset-0 bg-noise opacity-[0.07] mix-blend-overlay" />
      <div className="pointer-events-none absolute -top-32 left-1/2 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
      <Container className="relative">
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-10">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-2xl"
          >
            <p className="mb-5 inline-flex items-center rounded-full border border-emerald-400/20 bg-emerald-400/8 px-3 py-1 text-[11px] font-semibold tracking-[0.16em] text-emerald-300 uppercase">
              Sites web pour entreprises locales
            </p>
            <h1 className="text-[2rem] leading-[1.12] font-semibold text-zinc-50 sm:text-5xl lg:text-[3.35rem]">
              Un site qui transforme vos visiteurs en demandes de devis.
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
              Nous créons des sites web modernes, rapides et conçus pour aider les
              artisans et entreprises locales à générer davantage de contacts.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <CtaButton href="/#contact" className="w-full sm:w-auto">
                Obtenir mon audit gratuit
              </CtaButton>
              <CtaButton
                href="/#realisations"
                variant="secondary"
                className="w-full sm:w-auto"
              >
                Voir nos réalisations
              </CtaButton>
            </div>
            <p className="mt-4 text-sm text-zinc-400">
              Ou appelez-nous directement au{" "}
              <a
                href={siteConfig.phone.href}
                className="font-semibold text-zinc-100 transition-colors hover:text-emerald-300"
              >
                {siteConfig.phone.display}
              </a>
            </p>
            <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
              {reassurances.map((item) => (
                <li
                  key={item.label}
                  className="flex items-center gap-2.5 text-sm font-medium text-zinc-300"
                >
                  <item.icon className="size-4 shrink-0 text-emerald-400" aria-hidden />
                  {item.label}
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="pb-10 sm:pb-6 lg:pb-4"
          >
            <HeroDevices />
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
