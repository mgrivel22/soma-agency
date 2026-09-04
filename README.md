# Soma Digital

Site vitrine de **Soma Digital**, agence spécialisée dans la création de sites web pour artisans, entreprises du BTP et entreprises de services locaux.

L’objectif du site est de générer des demandes d’audit gratuit et de contact. Les exemples de réalisations sont clairement indiqués comme **projets conceptuels**.

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

Par défaut, l’envoi du formulaire est validé côté serveur et journalisé en local. Pour recevoir les demandes en production, créez un fichier `.env.local` :

```bash
cp .env.example .env.local
```

Options prévues :

- `FORMSPREE_ENDPOINT` : URL Formspree (`https://formspree.io/f/xxxxxxxx`)
- `CONTACT_WEBHOOK_URL` : webhook personnalisé (Tally, Make, n8n, API interne…)
- `NEXT_PUBLIC_SITE_URL` : URL canonique du site (SEO, sitemap)

Sans ces variables, le formulaire affiche tout de même la confirmation après validation — pratique en local.

## Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui
- Framer Motion
