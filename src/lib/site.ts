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

  return "https://somadigital.fr";
}

export const siteConfig = {
  name: "Soma Digital",
  tagline: "Création de sites web pour artisans, entreprises du BTP et entreprises locales.",
  url: resolveSiteUrl(),
  email: "contact@somadigital.fr",
  phone: {
    display: "07 45 13 58 91",
    href: "tel:+33745135891",
    e164: "+33745135891",
  },
  title:
    "Soma Digital | Création de sites web pour artisans et entreprises locales",
  description:
    "Soma Digital crée des sites web modernes, rapides et orientés conversion pour les artisans, entreprises du BTP et entreprises locales.",
  nav: [
    { href: "/#realisations", label: "Réalisations" },
    { href: "/#methode", label: "Notre méthode" },
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
    { value: "moins-1000", label: "Moins de 1 000 €" },
    { value: "1000-1500", label: "1 000–1 500 €" },
    { value: "1500-2500", label: "1 500–2 500 €" },
    { value: "2500-plus", label: "2 500 €+" },
    { value: "inconnu", label: "Je ne sais pas encore" },
  ],
  timelines: [
    { value: "asap", label: "Dès que possible" },
    { value: "mois", label: "Dans le mois" },
    { value: "1-3-mois", label: "Dans les 1–3 mois" },
    { value: "indefini", label: "Pas encore défini" },
  ],
} as const;
