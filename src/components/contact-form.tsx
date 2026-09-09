"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { type ContactFormValues, type FieldErrors } from "@/lib/contact";
import { formOptions, siteConfig } from "@/lib/site";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, ChevronDown, LoaderCircle, Phone } from "lucide-react";
import { useMemo, useState } from "react";

const emptyForm: ContactFormValues = {
  name: "",
  company: "",
  activity: "",
  city: "",
  phone: "",
  email: "",
  website: "",
  goal: "",
  budget: "",
  timeline: "",
  message: "",
  honeypot: "",
};

const detailFields: (keyof ContactFormValues)[] = [
  "company",
  "activity",
  "city",
  "budget",
  "timeline",
  "message",
];

function Field({
  id,
  label,
  error,
  children,
  hint,
  optional,
}: {
  id: string;
  label: string;
  error?: string;
  hint?: string;
  optional?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="text-sm text-foreground">
        {label}
        {optional ? (
          <span className="ml-1.5 text-xs font-normal text-muted-foreground">optionnel</span>
        ) : null}
      </Label>
      {children}
      {hint && !error ? <p className="text-xs text-muted-foreground">{hint}</p> : null}
      {error ? (
        <p id={`${id}-error`} className="text-xs text-destructive">
          {error}
        </p>
      ) : null}
    </div>
  );
}

const fieldClass =
  "h-12 rounded-md border-border bg-background px-3.5 text-base text-foreground md:text-[15px] placeholder:text-muted-foreground";

const selectClass = cn(
  fieldClass,
  "w-full appearance-none bg-[length:16px] bg-[right_12px_center] bg-no-repeat pr-10",
  "bg-[url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2716%27 height=%2716%27 fill=%27none%27 viewBox=%270 0 24 24%27%3E%3Cpath stroke=%27%235a6874%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m6 9 6 6 6-6%27/%3E%3C/svg%3E')]",
);

export function ContactForm() {
  const [form, setForm] = useState<ContactFormValues>(emptyForm);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [serverError, setServerError] = useState("");
  const [detailsOpen, setDetailsOpen] = useState(false);
  const reduce = useReducedMotion();

  const describedBy = useMemo(
    () => (id: keyof ContactFormValues) => (errors[id] ? `${id}-error` : undefined),
    [errors],
  );

  function update<K extends keyof ContactFormValues>(
    key: K,
    value: ContactFormValues[K],
  ) {
    setForm((prev) => ({ ...prev, [key]: value }));
    if (errors[key]) {
      setErrors((prev) => ({ ...prev, [key]: undefined }));
    }
  }

  async function onSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setServerError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const payload = (await response.json()) as {
        ok?: boolean;
        errors?: FieldErrors;
        message?: string;
      };

      if (!response.ok) {
        const nextErrors = payload.errors ?? {};
        setErrors(nextErrors);
        setServerError(payload.message ?? "Impossible d’envoyer la demande. Réessayez.");
        setStatus("error");
        if (detailFields.some((field) => nextErrors[field])) {
          setDetailsOpen(true);
        }
        return;
      }

      setStatus("success");
      setErrors({});
    } catch {
      setServerError("Impossible d’envoyer la demande. Vérifiez votre connexion.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <motion.div
        initial={reduce ? false : { opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center border border-primary/30 bg-primary/8 px-6 py-12 text-center"
        role="status"
        aria-live="polite"
      >
        <CheckCircle2 className="size-10 text-copper-dark" aria-hidden />
        <h3 className="mt-4 font-heading text-xl font-semibold text-foreground">Demande reçue</h3>
        <p className="mt-3 max-w-md text-[15px] leading-relaxed text-muted-foreground">
          Merci ! Votre demande a bien été reçue. Nous revenons vers vous sous 24 h
          ouvrées.
        </p>
        <p className="mt-6 text-sm text-muted-foreground">Vous préférez en parler tout de suite ?</p>
        <a
          href={siteConfig.phone.href}
          className="mt-2 inline-flex items-center gap-2 text-base font-semibold text-copper-dark transition-colors hover:text-foreground"
        >
          <Phone className="size-4" aria-hidden />
          {siteConfig.phone.display}
        </a>
      </motion.div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate>
      <input
        type="text"
        name="company_website"
        tabIndex={-1}
        autoComplete="off"
        value={form.honeypot}
        onChange={(event) => update("honeypot", event.target.value)}
        className="absolute -left-[9999px] h-0 w-0 opacity-0"
        aria-hidden="true"
      />
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="name" label="Prénom et nom" error={errors.name}>
          <Input
            id="name"
            name="name"
            autoComplete="name"
            required
            value={form.name}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={describedBy("name")}
            className={fieldClass}
            onChange={(event) => update("name", event.target.value)}
          />
        </Field>
        <Field id="phone" label="Téléphone" error={errors.phone}>
          <Input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            inputMode="tel"
            required
            value={form.phone}
            aria-invalid={Boolean(errors.phone)}
            aria-describedby={describedBy("phone")}
            className={fieldClass}
            onChange={(event) => update("phone", event.target.value)}
          />
        </Field>
      </div>
      <Field id="email" label="E-mail" error={errors.email}>
        <Input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={form.email}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={describedBy("email")}
          className={fieldClass}
          onChange={(event) => update("email", event.target.value)}
        />
      </Field>
      <Field
        id="website"
        label="Site actuel"
        optional
        error={errors.website}
        hint="Avec votre adresse, l’audit est plus précis. Laissez vide si vous n’avez pas encore de site — on vous proposera une maquette."
      >
        <Input
          id="website"
          name="website"
          type="text"
          inputMode="url"
          placeholder="https://"
          value={form.website}
          aria-invalid={Boolean(errors.website)}
          aria-describedby={describedBy("website")}
          className={fieldClass}
          onChange={(event) => update("website", event.target.value)}
        />
      </Field>
      <Field id="goal" label="Objectif principal" optional error={errors.goal}>
        <select
          id="goal"
          name="goal"
          value={form.goal}
          aria-invalid={Boolean(errors.goal)}
          aria-describedby={describedBy("goal")}
          className={cn(selectClass, !form.goal && "text-muted-foreground")}
          onChange={(event) => update("goal", event.target.value)}
        >
          <option value="">Sélectionner</option>
          {formOptions.goals.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </Field>

      <div className="border border-border bg-background">
        <button
          type="button"
          onClick={() => setDetailsOpen((open) => !open)}
          aria-expanded={detailsOpen}
          aria-controls="details-projet"
          className="flex w-full items-center justify-between gap-3 px-4 py-3.5 text-left text-sm font-medium text-foreground transition-colors hover:bg-muted"
        >
          Préciser mon projet (budget, délai, message)
          <ChevronDown
            className={cn(
              "size-4 shrink-0 text-muted-foreground transition-transform duration-200",
              detailsOpen && "rotate-180",
            )}
            aria-hidden
          />
        </button>
        <AnimatePresence initial={false}>
          {detailsOpen ? (
            <motion.div
              id="details-projet"
              initial={reduce ? false : { height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={reduce ? undefined : { height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="space-y-5 border-t border-border p-4 sm:p-5">
                <div className="grid gap-5 sm:grid-cols-2">
                  <Field
                    id="company"
                    label="Nom de l’entreprise"
                    optional
                    error={errors.company}
                  >
                    <Input
                      id="company"
                      name="company"
                      autoComplete="organization"
                      value={form.company}
                      aria-invalid={Boolean(errors.company)}
                      aria-describedby={describedBy("company")}
                      className={fieldClass}
                      onChange={(event) => update("company", event.target.value)}
                    />
                  </Field>
                  <Field id="activity" label="Activité" optional error={errors.activity}>
                    <Input
                      id="activity"
                      name="activity"
                      placeholder="Plombier, électricien, paysagiste…"
                      value={form.activity}
                      aria-invalid={Boolean(errors.activity)}
                      aria-describedby={describedBy("activity")}
                      className={fieldClass}
                      onChange={(event) => update("activity", event.target.value)}
                    />
                  </Field>
                  <Field id="city" label="Ville" optional error={errors.city}>
                    <Input
                      id="city"
                      name="city"
                      autoComplete="address-level2"
                      value={form.city}
                      aria-invalid={Boolean(errors.city)}
                      aria-describedby={describedBy("city")}
                      className={fieldClass}
                      onChange={(event) => update("city", event.target.value)}
                    />
                  </Field>
                  <Field id="timeline" label="Délai souhaité" optional error={errors.timeline}>
                    <select
                      id="timeline"
                      name="timeline"
                      value={form.timeline}
                      aria-invalid={Boolean(errors.timeline)}
                      aria-describedby={describedBy("timeline")}
                      className={cn(selectClass, !form.timeline && "text-muted-foreground")}
                      onChange={(event) => update("timeline", event.target.value)}
                    >
                      <option value="">Sélectionner</option>
                      {formOptions.timelines.map((option) => (
                        <option key={option.value} value={option.value}>
                          {option.label}
                        </option>
                      ))}
                    </select>
                  </Field>
                </div>
                <Field
                  id="budget"
                  label="Budget approximatif"
                  optional
                  error={errors.budget}
                  hint="Une fourchette suffit. Nous en reparlons ensemble."
                >
                  <select
                    id="budget"
                    name="budget"
                    value={form.budget}
                    aria-invalid={Boolean(errors.budget)}
                    aria-describedby={describedBy("budget")}
                    className={cn(selectClass, !form.budget && "text-muted-foreground")}
                    onChange={(event) => update("budget", event.target.value)}
                  >
                    <option value="">Sélectionner</option>
                    {formOptions.budgets.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field id="message" label="Message" optional error={errors.message}>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    placeholder="Ce que vous souhaitez améliorer sur votre présence en ligne."
                    value={form.message}
                    className="min-h-28 rounded-md border-border bg-background px-3.5 py-3 text-base text-foreground md:text-[15px] placeholder:text-muted-foreground"
                    onChange={(event) => update("message", event.target.value)}
                  />
                </Field>
              </div>
            </motion.div>
          ) : null}
        </AnimatePresence>
      </div>

      {serverError ? (
        <p className="text-sm text-destructive" role="alert">
          {serverError}
        </p>
      ) : null}
      <div className="space-y-3">
        <Button
          type="submit"
          disabled={status === "loading"}
          className="h-12 w-full rounded-md bg-primary px-6 text-[15px] font-semibold text-primary-foreground hover:bg-[#c9964a]"
        >
          {status === "loading" ? (
            <>
              <LoaderCircle className="size-4 animate-spin" aria-hidden />
              Envoi en cours…
            </>
          ) : (
            "Demander mon audit gratuit"
          )}
        </Button>
        <p className="text-center text-xs text-muted-foreground">
          Réponse sous 24 h ouvrées · Sans engagement · Aucun démarchage
        </p>
      </div>
      <div className="flex flex-col items-center gap-1 border-t border-border pt-5 text-center">
        <p className="text-sm text-muted-foreground">Vous préférez appeler ?</p>
        <a
          href={siteConfig.phone.href}
          className="inline-flex items-center gap-2 text-base font-semibold text-copper-dark transition-colors hover:text-foreground"
        >
          <Phone className="size-4" aria-hidden />
          {siteConfig.phone.display}
        </a>
      </div>
    </form>
  );
}
