export type ProjectTheme = "plumber" | "renovation" | "landscaper" | "electrician";

export type Project = {
  slug: string;
  name: string;
  sector: string;
  objective: string;
  summary: string;
  features: string[];
  conceptual: true;
  theme: ProjectTheme;
};

export const projects: Project[] = [
  {
    slug: "artisan-plombier",
    name: "Artisan plombier",
    sector: "Plomberie",
    objective:
      "Inspirer confiance dès la première visite et rendre l’appel ou la demande de devis immédiats.",
    summary:
      "Interface claire, numéro visible, zones d’intervention et parcours pensé pour un visiteur qui a un problème à résoudre maintenant.",
    features: [
      "Bouton d’appel",
      "Formulaire de devis",
      "Pages services",
      "Affichage mobile prioritaire",
    ],
    conceptual: true,
    theme: "plumber",
  },
  {
    slug: "entreprise-renovation",
    name: "Entreprise de rénovation",
    sector: "Rénovation",
    objective:
      "Présenter le savoir-faire avec clarté et faciliter la prise de contact pour un projet de travaux.",
    summary:
      "Mise en avant des types de chantiers, d’une galerie de réalisations et d’un formulaire de demande d’étude.",
    features: [
      "Galerie de chantiers",
      "Demande d’étude",
      "Présentation de l’équipe",
      "Parcours mobile fluide",
    ],
    conceptual: true,
    theme: "renovation",
  },
  {
    slug: "paysagiste",
    name: "Paysagiste",
    sector: "Paysage",
    objective:
      "Montrer le style de l’entreprise et convertir les visites en demandes de rendez-vous.",
    summary:
      "Direction artistique végétale, photos mises en valeur et prise de contact simple pour un devis d’aménagement.",
    features: [
      "Portfolio visuel",
      "Demande de rendez-vous",
      "Prestations détaillées",
      "Carte d’intervention",
    ],
    conceptual: true,
    theme: "landscaper",
  },
  {
    slug: "electricien",
    name: "Électricien",
    sector: "Électricité",
    objective:
      "Rendre les urgences et les demandes de devis accessibles en quelques secondes, surtout sur téléphone.",
    summary:
      "Hiérarchie nette entre dépannage, installation et mise aux normes, avec un accès direct au contact.",
    features: [
      "Appel d’urgence",
      "Devis en ligne",
      "Mise aux normes",
      "Optimisation mobile",
    ],
    conceptual: true,
    theme: "electrician",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
