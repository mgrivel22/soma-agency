import { CtaButton } from "@/components/cta-button";
import {
  LaptopFrame,
  MiniSite,
  PhoneFrame,
  ProjectImagePreview,
} from "@/components/mockups";
import { Container } from "@/components/ui-primitives";
import { getProject, projectBadge, projects } from "@/lib/projects";
import { ExternalLink } from "lucide-react";
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
    title: project.demonstration
      ? `${project.name} — projet de démonstration`
      : project.conceptual
        ? `${project.name} — projet conceptuel`
        : `${project.name} — réalisation`,
    description: project.objective,
    robots:
      project.conceptual || project.demonstration
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
          className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
        >
          Retour aux réalisations
        </Link>
        <div className="mt-8 grid items-start gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <div>
            <div className="flex flex-wrap gap-2">
              <span className="border border-border px-2.5 py-1 text-xs font-medium text-muted-foreground">
                {project.sector}
              </span>
              <span className="border border-copper-dark/30 bg-primary/10 px-2.5 py-1 text-xs font-medium text-copper-dark">
                {projectBadge(project)}
              </span>
            </div>
            <h1 className="mt-4 font-heading text-3xl font-semibold text-foreground sm:text-5xl">
              {project.name}
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              {project.summary}
            </p>
            <div className="mt-8 space-y-6">
              <div>
                <h2 className="font-heading text-sm font-semibold text-foreground">Objectif</h2>
                <p className="mt-2 text-[15px] leading-relaxed text-muted-foreground">
                  {project.objective}
                </p>
              </div>
              <div>
                <h2 className="font-heading text-sm font-semibold text-foreground">
                  Fonctionnalités
                </h2>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="border border-border px-3 py-1.5 text-sm text-muted-foreground"
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
                  className="inline-flex h-12 min-h-12 items-center justify-center gap-2 bg-primary px-5 text-[15px] font-semibold tracking-tight text-primary-foreground transition-colors hover:bg-[#c9964a]"
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
            {project.demonstration || project.conceptual ? (
              <p className="mt-4 max-w-md text-sm text-muted-foreground">
                Ceci est un projet de démonstration, pas un site client publié sous
                ce nom. Il illustre le type de parcours que nous concevons pour ce
                métier.
              </p>
            ) : (
              <p className="mt-4 max-w-md text-sm text-muted-foreground">
                Site conçu pour une entreprise locale, avec un parcours pensé
                pour générer des demandes de devis.
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
