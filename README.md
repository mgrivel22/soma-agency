# Soma Digital

Site vitrine de **Soma Digital**, agence spécialisée dans la création de sites web pour artisans, entreprises du BTP et entreprises de services locaux.

L’objectif du site est de générer des demandes d’audit gratuit et de contact. Les exemples de réalisations sont indiqués comme **projets de démonstration**.

Offre de lancement : site vitrine à **490 € HT** (tarif habituel 1 190 € HT), 5 places, en contrepartie d’un témoignage.

## Lancer le projet

Prérequis : Node.js 20+.

```bash
npm install
npm run dev
```

Le site est servi sur [http://127.0.0.1:43123](http://127.0.0.1:43123).

```bash
npm run build
npm start
```

## Formulaire de contact

Les demandes sont validées côté serveur (route `/api/contact`) puis envoyées au formulaire Formspree de Soma Digital. Aucune configuration n’est nécessaire pour que le formulaire fonctionne, en local comme en production.

Pour rediriger les demandes ailleurs, créez un fichier `.env.local` :

```bash
cp .env.example .env.local
```

- `FORMSPREE_ENDPOINT` : autre formulaire Formspree (`https://formspree.io/f/xxxxxxxx`)
- `CONTACT_WEBHOOK_URL` : webhook personnalisé (Tally, Make, n8n, API interne…)
- `NEXT_PUBLIC_SITE_URL` : URL canonique du site (SEO, sitemap)

Si l’envoi échoue, le visiteur voit un message d’erreur avec le numéro de téléphone : aucune demande n’est perdue en silence.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion
