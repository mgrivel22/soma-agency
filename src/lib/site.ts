function resolveSiteUrl() {
  const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (configured) return configured.replace(/\/$/, "");

  const vercelProduction = process.env.VERCEL_PROJECT_PRODUCTION_URL?.trim();
  if (vercelProduction) {
    return vercelProduction.startsWith("http")
      ? vercelProduction.replace(/\/$/, "")
      : `https://${vercelProduction.replace(/\/$/, "")}`;
  }

  const vercelUrl = process.env.VERCEL_URL?.trim();
  if (vercelUrl) {
    return vercelUrl.startsWith("http")
      ? vercelUrl.replace(/\/$/, "")
      : `https://${vercelUrl.replace(/\/$/, "")}`;
  }

  return "https://www.soma-digital.com";
}

export const siteConfig = {
  name: "Soma Digital",
  founder: "Mathieu",
  tagline: "Création de sites web pour artisans, entreprises du BTP et entreprises locales.",
  url: resolveSiteUrl(),
  email: "mgrivel22@gmail.com",
  phone: {
    display: "07 45 13 58 91",
    href: "tel:+33745135891",
    e164: "+33745135891",
  },
  title:
    "Soma Digital | Création de sites web pour artisans et entreprises locales",
  description:
    "Soma Digital crée des sites web modernes, rapides et orientés conversion pour les artisans, entreprises du BTP et entreprises locales. Site vitrine tout compris à 199 €, en ligne en 7 jours.",
  analyticsId: "G-S0W0Y826NZ",
  nav: [
    { href: "/#realisations", label: "Réalisations" },
    { href: "/#methode", label: "Ma méthode" },
    { href: "/#offre", label: "Offre" },
    { href: "/#faq", label: "FAQ" },
  ],
} as const;

export const formOptions = {
  goals: [
    { value: "plus-de-devis", label: "Obtenir plus de demandes de devis" },
    { value: "refaire-site", label: "Refaire mon site actuel" },
    { value: "premier-site", label: "Créer mon premier site" },
    { value: "seo-local", label: "Améliorer mon référencement local" },
    { value: "autre", label: "Autre" },
  ],
  budgets: [
    { value: "lancement", label: "Site pro à 199 €" },
    { value: "sur-mesure", label: "Projet plus complet (à discuter)" },
    { value: "inconnu", label: "Je ne sais pas encore" },
  ],
  timelines: [
    { value: "asap", label: "Dès que possible" },
    { value: "mois", label: "Dans le mois" },
    { value: "1-3-mois", label: "Dans les 1–3 mois" },
    { value: "indefini", label: "Pas encore défini" },
  ],
} as const;
