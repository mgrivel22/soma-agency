import { ProjectImagePreview, ProjectMockup } from "@/components/mockups";
import { Container } from "@/components/ui-primitives";
import { projectBadge, projects } from "@/lib/projects";
import Link from "next/link";

export function ProjectsSection() {
  return (
    <section id="realisations" className="scroll-mt-24 border-t border-border bg-card py-20 sm:py-28">
      <Container>
        <div className="max-w-2xl">
          <h2 className="font-heading text-3xl font-semibold text-foreground sm:text-4xl">
            Quelques exemples de sites
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground sm:text-lg">
            Des interfaces pensées pour inspirer confiance et faciliter la prise de
            contact. Ces sites sont des projets de démonstration, réalisés pour
            illustrer notre approche métier par métier.
          </p>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.slug} className="flex h-full flex-col border border-border bg-background">
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
