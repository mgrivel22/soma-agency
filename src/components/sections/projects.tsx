"use client";

import { ProjectMockup } from "@/components/mockups";
import { Container, FadeIn, SectionEyebrow } from "@/components/ui-primitives";
import { projects } from "@/lib/projects";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function ProjectsSection() {
  return (
    <section id="realisations" className="scroll-mt-24 border-t border-white/6 py-20 sm:py-28">
      <Container>
        <FadeIn className="max-w-2xl">
          <SectionEyebrow>Réalisations</SectionEyebrow>
          <h2 className="text-3xl font-semibold text-zinc-50 sm:text-4xl">
            Quelques exemples de sites
          </h2>
          <p className="mt-4 text-base leading-relaxed text-zinc-400 sm:text-lg">
            Des interfaces pensées pour inspirer confiance et faciliter la prise de contact.
          </p>
        </FadeIn>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => (
            <FadeIn key={project.slug} delay={index * 0.06}>
              <article className="group overflow-hidden rounded-2xl border border-white/8 bg-zinc-900/80 shadow-[0_12px_40px_-28px_rgba(0,0,0,0.9)] transition-all duration-300 hover:-translate-y-1 hover:border-emerald-400/25 hover:shadow-[0_24px_50px_-28px_rgba(16,185,129,0.25)]">
                <ProjectMockup theme={project.theme} />
                <div className="space-y-4 p-6">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-white/5 px-2.5 py-1 text-xs font-medium text-zinc-300 ring-1 ring-white/8">
                      {project.sector}
                    </span>
                    <span className="rounded-full bg-emerald-400/10 px-2.5 py-1 text-xs font-medium text-emerald-300 ring-1 ring-emerald-400/20">
                      Projet conceptuel
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-zinc-50">{project.name}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                      <span className="font-medium text-zinc-200">Objectif. </span>
                      {project.objective}
                    </p>
                  </div>
                  <ul className="flex flex-wrap gap-2">
                    {project.features.map((feature) => (
                      <li
                        key={feature}
                        className="rounded-md bg-zinc-950/60 px-2 py-1 text-xs text-zinc-400 ring-1 ring-white/6"
                      >
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/projets/${project.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-400 transition-colors hover:text-emerald-300"
                  >
                    Voir le projet
                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
