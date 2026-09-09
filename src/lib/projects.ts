export type ProjectTheme = "plumber" | "electrician";

export type Project = {
  slug: string;
  name: string;
  sector: string;
  objective: string;
  summary: string;
  features: string[];
  conceptual: boolean;
  demonstration: boolean;
  theme?: ProjectTheme;
  url?: string;
  previews?: {
    desktop: string;
    mobile: string;
  };
};

export function projectBadge(project: Pick<Project, "conceptual" | "demonstration">) {
  if (project.demonstration) return "Projet de démonstration";
  if (project.conceptual) return "Projet conceptuel";
  return "Site client";
}

export const projects: Project[] = [
  {
    slug: "apex-renovation",
    name: "Apex Rénovation",
    sector: "Rénovation",
    objective:
      "Générer des demandes de devis pour une entreprise de rénovation globale et second œuvre dans le Gard et l’Hérault.",
    summary:
      "Site vitrine orienté conversion pour Apex Rénovation : hero fort, preuves de confiance (décennale, RGE, avis Google) et prise de contact rapide sur mobile comme sur desktop.",
    features: [
      "Demande de devis",
      "Zones d’intervention",
      "Preuves de confiance",
      "Optimisation mobile",
    ],
    conceptual: false,
    demonstration: true,
    url: "https://apex-renov.netlify.app/",
    previews: {
      desktop: "/projets/apex-renovation/desktop.jpg",
      mobile: "/projets/apex-renovation/mobile.jpg",
    },
  },
  {
    slug: "plombier-toulouse",
    name: "Urg’Eau Toulouse",
    sector: "Plomberie",
    objective:
      "Capter les demandes de dépannage urgent à Toulouse et transformer chaque visite en appel ou en demande de devis.",
    summary:
      "Site vitrine pour un plombier chauffagiste : numéro visible en permanence, promesse d’intervention claire et parcours pensé pour un visiteur pressé, souvent sur téléphone.",
    features: [
      "Bouton d’appel permanent",
      "Devis en ligne",
      "Zone d’intervention",
      "Optimisation mobile",
    ],
    conceptual: false,
    demonstration: true,
    url: "https://plombier-toulouse.netlify.app/",
    previews: {
      desktop: "/projets/plombier-toulouse/desktop.jpg",
      mobile: "/projets/plombier-toulouse/mobile.jpg",
    },
  },
  {
    slug: "verdure-design",
    name: "Verdure & Design",
    sector: "Paysagiste",
    objective:
      "Valoriser le savoir-faire d’un paysagiste à Aix-en-Provence et déclencher des demandes de devis pour des projets d’aménagement extérieur.",
    summary:
      "Direction artistique végétale et haut de gamme : photos de chantiers mises en valeur, prestations lisibles et prise de contact directe par téléphone ou devis en ligne.",
    features: [
      "Bouton d’appel",
      "Devis gratuit sous 48h",
      "Galerie de réalisations",
      "Zone d’intervention",
    ],
    conceptual: false,
    demonstration: true,
    url: "https://verdure-design.netlify.app/",
    previews: {
      desktop: "/projets/verdure-design/desktop.jpg",
      mobile: "/projets/verdure-design/mobile.jpg",
    },
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}