import { formOptions } from "@/lib/site";

export type ContactPayload = {
  name: string;
  company: string;
  activity: string;
  city: string;
  phone: string;
  email: string;
  website?: string;
  goal: string;
  budget: string;
  timeline: string;
  message?: string;
  honeypot?: string;
};

export type FieldErrors = Partial<Record<keyof ContactPayload, string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const goalValues = formOptions.goals.map((item) => item.value);
const budgetValues = formOptions.budgets.map((item) => item.value);
const timelineValues = formOptions.timelines.map((item) => item.value);

function isPresent(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

export function validateContactPayload(input: unknown): {
  data?: ContactPayload;
  errors?: FieldErrors;
} {
  if (!input || typeof input !== "object") {
    return { errors: { name: "Requête invalide." } };
  }

  const body = input as Record<string, unknown>;
  const errors: FieldErrors = {};

  const name = isPresent(body.name) ? body.name.trim() : "";
  const company = isPresent(body.company) ? body.company.trim() : "";
  const activity = isPresent(body.activity) ? body.activity.trim() : "";
  const city = isPresent(body.city) ? body.city.trim() : "";
  const phone = isPresent(body.phone) ? body.phone.trim() : "";
  const email = isPresent(body.email) ? body.email.trim() : "";
  const website = isPresent(body.website) ? body.website.trim() : "";
  const goal = isPresent(body.goal) ? body.goal.trim() : "";
  const budget = isPresent(body.budget) ? body.budget.trim() : "";
  const timeline = isPresent(body.timeline) ? body.timeline.trim() : "";
  const message = isPresent(body.message) ? body.message.trim() : "";
  const honeypot = isPresent(body.honeypot) ? body.honeypot.trim() : "";

  if (name.length < 2) errors.name = "Indiquez votre prénom et nom.";
  if (company.length < 2) errors.company = "Indiquez le nom de votre entreprise.";
  if (activity.length < 2) errors.activity = "Indiquez votre activité.";
  if (city.length < 2) errors.city = "Indiquez votre ville.";
  if (phone.replace(/\D/g, "").length < 10) {
    errors.phone = "Indiquez un numéro de téléphone valide.";
  }
  if (!emailPattern.test(email)) errors.email = "Indiquez une adresse e-mail valide.";
  if (website) {
    try {
      const parsed = new URL(website.startsWith("http") ? website : `https://${website}`);
      if (!["http:", "https:"].includes(parsed.protocol)) {
        errors.website = "Indiquez une URL valide, ou laissez ce champ vide.";
      }
    } catch {
      errors.website = "Indiquez une URL valide, ou laissez ce champ vide.";
    }
  }
  if (!goalValues.includes(goal as (typeof goalValues)[number])) {
    errors.goal = "Choisissez un objectif.";
  }
  if (!budgetValues.includes(budget as (typeof budgetValues)[number])) {
    errors.budget = "Choisissez une fourchette de budget.";
  }
  if (!timelineValues.includes(timeline as (typeof timelineValues)[number])) {
    errors.timeline = "Choisissez un délai.";
  }

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  return {
    data: {
      name,
      company,
      activity,
      city,
      phone,
      email,
      website: website || undefined,
      goal,
      budget,
      timeline,
      message: message || undefined,
      honeypot,
    },
  };
}

export function labelForOption(
  group: "goals" | "budgets" | "timelines",
  value: string,
) {
  const option = formOptions[group].find((item) => item.value === value);
  return option?.label ?? value;
}
