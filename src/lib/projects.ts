export type ProjectTheme = "plumber" | "electrician";

export type Project = {
  slug: string;
  name: string;
  sector: string;
  objective: string;
  summary: string;
  features: string[];
  conceptual: boolean;
  theme?: ProjectTheme;
  url?: string;
  previews?: {
    desktop: string;
    mobile: string;
  };
};

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
    url: "https://plombier-toulouse.netlify.app/",
    previews: {
      desktop: "/projets/plombier-toulouse/desktop.jpg",
      mobile: "/projets/plombier-toulouse/mobile.jpg",
    },
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

export function getConceptualProjects() {
  return projects.filter((project) => project.conceptual && project.theme);
}
