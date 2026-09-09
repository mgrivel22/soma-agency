export const launchOffer = {
  badge: "Offre de lancement — 5 places",
  usualPrice: "1 190 €",
  price: "490 €",
  tax: "HT",
  title: "Site vitrine sur mesure",
  audience: "Pour artisans et entreprises locales.",
  exchange:
    "Tarif réduit en contrepartie de votre témoignage et du droit de présenter votre site dans nos réalisations.",
  caveat: "Le prix final dépend du contenu et des fonctionnalités du projet.",
  payment: "50 % au démarrage, 50 % à la livraison de la maquette validée.",
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
  "Mise en ligne et accompagnement",
] as const;

export const excluded = [
  "Publicité Google Ads ou réseaux sociaux",
  "Photographie professionnelle de chantier",
  "Boutique en ligne / espace client",
] as const;

export const retainers = [
  {
    name: "Autonome",
    price: "0 € / mois",
    detail:
      "Vous gérez le renouvellement du domaine (~15 € / an). On vous prévient avant l’échéance.",
  },
  {
    name: "Renouvellement Simple",
    price: "19 € HT / mois",
    detail:
      "Domaine, hébergement, sauvegardes et mises de sécurité pris en charge.",
  },
  {
    name: "Sérénité",
    price: "39 € HT / mois",
    detail:
      "Tout ce qui précède, plus les modifications de contenu traitées sous 24 h ouvrées.",
  },
] as const;
