import {
  labelForOption,
  validateContactPayload,
  type ContactPayload,
} from "@/lib/contact";
import { siteConfig } from "@/lib/site";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

// Boîte de réception Formspree du compte Soma Digital. Surchargée par
// FORMSPREE_ENDPOINT si un autre formulaire doit recevoir les demandes.
const DEFAULT_FORMSPREE_ENDPOINT = "https://formspree.io/f/xaeylybo";

function asAbsoluteUrl(website?: string) {
  if (!website) return undefined;
  return website.startsWith("http") ? website : `https://${website}`;
}

async function postToFormspree(endpoint: string, body: unknown) {
  const response = await fetch(endpoint, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });
  if (!response.ok) {
    throw new Error(`Formspree error ${response.status}`);
  }
}

async function deliver(payload: Omit<ContactPayload, "honeypot">) {
  const formspree = process.env.FORMSPREE_ENDPOINT;
  const webhook = process.env.CONTACT_WEBHOOK_URL;

  const labeled = {
    ...payload,
    website: asAbsoluteUrl(payload.website),
    goal: labelForOption("goals", payload.goal),
    budget: labelForOption("budgets", payload.budget),
    timeline: labelForOption("timelines", payload.timeline),
    _subject: `Audit gratuit — ${payload.company ?? payload.name}`,
  };

  if (formspree) {
    await postToFormspree(formspree, labeled);
    return;
  }

  if (webhook) {
    const response = await fetch(webhook, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        source: "soma-digital",
        to: siteConfig.email,
        ...labeled,
      }),
    });
    if (!response.ok) {
      throw new Error(`Webhook error ${response.status}`);
    }
    return;
  }

  await postToFormspree(DEFAULT_FORMSPREE_ENDPOINT, labeled);
}

export async function POST(request: Request) {
  let json: unknown;
  try {
    json = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, message: "Requête invalide." },
      { status: 400 },
    );
  }

  const { data, errors } = validateContactPayload(json);
  if (!data || errors) {
    return NextResponse.json(
      { ok: false, errors, message: "Vérifiez les champs du formulaire." },
      { status: 400 },
    );
  }

  if (data.honeypot) {
    return NextResponse.json({ ok: true });
  }

  try {
    const { honeypot, ...payload } = data;
    void honeypot;
    await deliver(payload);
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("[contact] Envoi impossible", error);
    return NextResponse.json(
      {
        ok: false,
        message: `L’envoi a échoué. Appelez-nous au ${siteConfig.phone.display} ou réessayez dans quelques minutes.`,
      },
      { status: 502 },
    );
  }
}
