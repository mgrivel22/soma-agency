export const launchOffer = {
  badge: "Offre de lancement — 5 places",
  usualPrice: "1 190 €",
  price: "490 €",
  tax: "HT",
  title: "Site vitrine sur mesure",
  audience: "Pour artisans et entreprises locales.",
  exchange:
    "Tarif réduit en contrepartie de votre témoignage et du droit de présenter votre site dans mes réalisations.",
  caveat: "Le prix final dépend du contenu et des fonctionnalités du projet.",
  delivery: "Livraison en 7 jours à partir de la validation du projet.",
  payment: "50 % au démarrage, 50 % à la livraison.",
  guarantee:
    "Vous validez la maquette avant de payer le solde. Si elle ne vous convient pas, vous ne payez rien de plus.",
} as const;

export const included = [
  "Design personnalisé",
  "4 à 6 pages",
  "Adapté mobile",
  "Formulaire de contact / demande de devis",
  "Bouton d’appel",
  "Google Maps",
  "Optimisation technique SEO de base",
  "Création ou optimisation de votre fiche Google",
  "1re année de nom de domaine et d’hébergement",
  "Livraison en 7 jours",
  "Mise en ligne et accompagnement",
] as const;

export const excluded = [
  "Publicité Google Ads ou réseaux sociaux",
  "Photographie professionnelle de chantier",
  "Boutique en ligne / espace client",
] as const;

export const retainers = [
  {
    name: "Sérénité",
    price: "39 € HT / mois",
    recommended: true,
    detail:
      "Vos modifications sous 24 h ouvrées (par SMS ou e-mail), sauvegardes et sécurité. Domaine et hébergement inclus après la 1re année.",
  },
  {
    name: "Essentiel",
    price: "19 € HT / mois",
    recommended: false,
    detail:
      "Sauvegardes et sécurité. Domaine et hébergement inclus après la 1re année. Modifications à la demande.",
  },
  {
    name: "Autonome",
    price: "0 € / mois",
    recommended: false,
    detail:
      "Vous gérez seul. Après la 1re année, le domaine est à renouveler (~15 € / an) : je vous préviens avant.",
  },
] as const;

export const retainerNote =
  "Le suivi Sérénité est recommandé : votre site reste à jour sans que vous ayez à y penser.";
