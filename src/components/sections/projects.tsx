import { ProjectImagePreview, ProjectMockup } from "@/components/mockups";
import { Container } from "@/components/ui-primitives";
import { projectBadge, projects } from "@/lib/projects";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function ProjectsSection() {
  return (
    <section id="realisations" className="scroll-mt-24 border-t border-border bg-card py-14 sm:py-28">
      <Container>
        <div className="max-w-2xl">
          <h2 className="font-heading text-3xl font-semibold text-foreground sm:text-4xl">
            Quelques exemples de sites
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Des interfaces pensées pour inspirer confiance et faciliter la prise de
            contact. Ces sites sont des projets de démonstration, réalisés pour
            illustrer mon approche métier par métier.
          </p>
        </div>
        <p className="mt-6 flex items-center gap-1.5 text-sm text-muted-foreground md:hidden" aria-hidden>
          Faites glisser pour voir les {projects.length} exemples
          <ArrowRight className="size-4 text-copper-dark" />
        </p>
        <div className="-mx-5 mt-3 flex snap-x snap-mandatory scroll-px-5 gap-4 overflow-x-auto px-5 pb-2 sm:-mx-6 sm:scroll-px-6 sm:px-6 md:mx-0 md:mt-12 md:grid md:grid-cols-2 md:gap-8 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.slug} className="flex h-full w-[86%] shrink-0 snap-start flex-col border border-border bg-background md:w-auto">
              {project.previews ? (
                <ProjectImagePreview
                  desktop={project.previews.desktop}
                  mobile={project.previews.mobile}
                  alt={`Aperçu du site ${project.name}`}
                />
              ) : project.theme ? (
                <ProjectMockup theme={project.theme} />
              ) : null}
              <div className="flex flex-1 flex-col space-y-4 p-6">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="border border-border px-2.5 py-1 text-xs font-medium text-muted-foreground">
                    {project.sector}
                  </span>
                  <span className="border border-copper-dark/30 bg-primary/10 px-2.5 py-1 text-xs font-medium text-copper-dark">
                    {projectBadge(project)}
                  </span>
                </div>
                <div className="flex-1">
                  <h3 className="font-heading text-xl font-semibold text-foreground">{project.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    <span className="font-medium text-foreground">Objectif. </span>
                    {project.objective}
                  </p>
                </div>
                <ul className="flex flex-wrap gap-2">
                  {project.features.map((feature) => (
                    <li
                      key={feature}
                      className="border border-border px-2 py-1 text-xs text-muted-foreground"
                    >
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/projets/${project.slug}`}
                  className="text-sm font-semibold text-copper-dark underline decoration-copper-dark/30 underline-offset-4 transition-colors hover:text-foreground"
                >
                  Voir le projet
                </Link>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
