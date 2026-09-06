import { CtaButton } from "@/components/cta-button";
import {
  LaptopFrame,
  MiniSite,
  PhoneFrame,
  ProjectImagePreview,
} from "@/components/mockups";
import { Container } from "@/components/ui-primitives";
import { getProject, projects } from "@/lib/projects";
import { ArrowLeft, ExternalLink } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.conceptual
      ? `${project.name} — projet conceptuel`
      : `${project.name} — réalisation`,
    description: project.objective,
    robots: project.conceptual
      ? { index: false, follow: true }
      : { index: true, follow: true },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <main className="pb-20">
      <Container className="pt-10 sm:pt-14">
        <Link
          href="/#realisations"
          className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-400 transition-colors hover:text-white"
        >
          <ArrowLeft className="size-4" />
          Retour aux réalisations
        </Link>
        <div className="mt-8 grid items-start gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <div>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-white/5 px-2.5 py-1 text-xs font-medium text-zinc-300 ring-1 ring-white/8">
                {project.sector}
              </span>
              <span className="rounded-full bg-emerald-400/10 px-2.5 py-1 text-xs font-medium text-emerald-300 ring-1 ring-emerald-400/20">
                {project.conceptual ? "Projet conceptuel" : "Site en ligne"}
              </span>
            </div>
            <h1 className="mt-4 text-3xl font-semibold text-zinc-50 sm:text-5xl">
              {project.name}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-zinc-400 sm:text-lg">
              {project.summary}
            </p>
            <div className="mt-8 space-y-6">
              <div>
                <h2 className="text-sm font-semibold tracking-wide text-zinc-200 uppercase">
                  Objectif
                </h2>
                <p className="mt-2 text-[15px] leading-relaxed text-zinc-400">
                  {project.objective}
                </p>
              </div>
              <div>
                <h2 className="text-sm font-semibold tracking-wide text-zinc-200 uppercase">
                  Fonctionnalités
                </h2>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="rounded-md bg-zinc-900 px-3 py-1.5 text-sm text-zinc-300 ring-1 ring-white/8"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              {project.url ? (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex h-12 min-h-12 items-center justify-center gap-2 rounded-xl bg-emerald-400 px-5 text-[15px] font-semibold tracking-tight text-zinc-950 shadow-[0_0_0_1px_rgba(52,211,153,0.25),0_10px_30px_-12px_rgba(52,211,153,0.55)] transition-all duration-200 hover:bg-emerald-300"
                >
                  Visiter le site
                  <ExternalLink className="size-4" aria-hidden />
                </a>
              ) : null}
              <CtaButton
                href="/#contact"
                variant={project.url ? "secondary" : "primary"}
              >
                Obtenir mon audit gratuit
              </CtaButton>
            </div>
            {project.conceptual ? (
              <p className="mt-4 max-w-md text-sm text-zinc-500">
                Ceci est un exemple d’interface, pas un site client publié. Il
                illustre le type de parcours que nous concevons pour ce métier.
              </p>
            ) : (
              <p className="mt-4 max-w-md text-sm text-zinc-500">
                Site conçu pour une entreprise locale de rénovation, avec un
                parcours pensé pour générer des demandes de devis.
              </p>
            )}
          </div>
          <div className="relative">
            {project.previews ? (
              <ProjectImagePreview
                desktop={project.previews.desktop}
                mobile={project.previews.mobile}
                alt={`Aperçu du site ${project.name}`}
              />
            ) : project.theme ? (
              <>
                <LaptopFrame>
                  <MiniSite theme={project.theme} density="desktop" />
                </LaptopFrame>
                <div className="mt-6 flex justify-center sm:absolute sm:-bottom-6 sm:-left-4 sm:mt-0">
                  <PhoneFrame>
                    <MiniSite theme={project.theme} density="mobile" />
                  </PhoneFrame>
                </div>
              </>
            ) : null}
          </div>
        </div>
      </Container>
    </main>
  );
}
