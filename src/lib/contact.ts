import { formOptions } from "@/lib/site";

export type ContactFormValues = {
  name: string;
  company: string;
  activity: string;
  city: string;
  phone: string;
  email: string;
  website: string;
  goal: string;
  budget: string;
  timeline: string;
  message: string;
  honeypot: string;
};

export type ContactPayload = {
  name: string;
  phone: string;
  email: string;
  company?: string;
  activity?: string;
  city?: string;
  website?: string;
  goal?: string;
  budget?: string;
  timeline?: string;
  message?: string;
  honeypot?: string;
};

export type FieldErrors = Partial<Record<keyof ContactFormValues, string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const goalValues: readonly string[] = formOptions.goals.map((item) => item.value);
const budgetValues: readonly string[] = formOptions.budgets.map((item) => item.value);
const timelineValues: readonly string[] = formOptions.timelines.map(
  (item) => item.value,
);

function isPresent(value: unknown): value is string {
  return typeof value === "string" && value.trim().length > 0;
}

function read(body: Record<string, unknown>, key: string) {
  return isPresent(body[key]) ? (body[key] as string).trim() : "";
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

  const name = read(body, "name");
  const company = read(body, "company");
  const activity = read(body, "activity");
  const city = read(body, "city");
  const phone = read(body, "phone");
  const email = read(body, "email");
  const website = read(body, "website");
  const goal = read(body, "goal");
  const budget = read(body, "budget");
  const timeline = read(body, "timeline");
  const message = read(body, "message");
  const honeypot = read(body, "honeypot");

  if (name.length < 2) errors.name = "Indiquez votre prénom et nom.";
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
  if (goal && !goalValues.includes(goal)) {
    errors.goal = "Choisissez un objectif dans la liste.";
  }
  if (budget && !budgetValues.includes(budget)) {
    errors.budget = "Choisissez une fourchette dans la liste.";
  }
  if (timeline && !timelineValues.includes(timeline)) {
    errors.timeline = "Choisissez un délai dans la liste.";
  }

  if (Object.keys(errors).length > 0) {
    return { errors };
  }

  return {
    data: {
      name,
      phone,
      email,
      company: company || undefined,
      activity: activity || undefined,
      city: city || undefined,
      website: website || undefined,
      goal: goal || undefined,
      budget: budget || undefined,
      timeline: timeline || undefined,
      message: message || undefined,
      honeypot,
    },
  };
}

export function labelForOption(
  group: "goals" | "budgets" | "timelines",
  value?: string,
) {
  if (!value) return undefined;
  const option = formOptions[group].find((item) => item.value === value);
  return option?.label ?? value;
}
