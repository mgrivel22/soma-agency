"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { type ContactPayload, type FieldErrors } from "@/lib/contact";
import { formOptions } from "@/lib/site";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { CheckCircle2, LoaderCircle } from "lucide-react";
import { useMemo, useState } from "react";

const emptyForm: ContactPayload = {
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

function Field({
  id,
  label,
  error,
  children,
  hint,
}: {
  id: string;
  label: string;
  error?: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id} className="text-sm text-zinc-200">
        {label}
      </Label>
      {children}
      {hint && !error ? <p className="text-xs text-zinc-500">{hint}</p> : null}
      {error ? (
        <p id={`${id}-error`} className="text-xs text-red-400">
          {error}
        </p>
      ) : null}
    </div>
  );
}

const fieldClass =
  "h-12 rounded-xl border-white/10 bg-zinc-950/50 px-3.5 text-base text-zinc-100 md:text-[15px] placeholder:text-zinc-500";

const selectClass = cn(
  fieldClass,
  "w-full appearance-none bg-[length:16px] bg-[right_12px_center] bg-no-repeat pr-10",
  "bg-[url('data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%2716%27 height=%2716%27 fill=%27none%27 viewBox=%270 0 24 24%27%3E%3Cpath stroke=%27%23a1a1aa%27 stroke-linecap=%27round%27 stroke-linejoin=%27round%27 stroke-width=%272%27 d=%27m6 9 6 6 6-6%27/%3E%3C/svg%3E')]",
);

export function ContactForm() {
  const [form, setForm] = useState<ContactPayload>(emptyForm);
  const [errors, setErrors] = useState<FieldErrors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [serverError, setServerError] = useState("");

  const describedBy = useMemo(
    () => (id: keyof ContactPayload) => (errors[id] ? `${id}-error` : undefined),
    [errors],
  );

  function update<K extends keyof ContactPayload>(key: K, value: ContactPayload[K]) {
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
        setErrors(payload.errors ?? {});
        setServerError(payload.message ?? "Impossible d’envoyer la demande. Réessayez.");
        setStatus("error");
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
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center rounded-2xl border border-emerald-400/25 bg-emerald-400/8 px-6 py-14 text-center"
        role="status"
        aria-live="polite"
      >
        <CheckCircle2 className="size-10 text-emerald-400" aria-hidden />
        <h3 className="mt-4 text-xl font-semibold text-zinc-50">Demande reçue</h3>
        <p className="mt-3 max-w-md text-[15px] leading-relaxed text-zinc-300">
          Merci ! Votre demande a bien été reçue. Nous revenons vers vous sous 24 h
          ouvrées.
        </p>
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
        <Field id="company" label="Nom de l’entreprise" error={errors.company}>
          <Input
            id="company"
            name="company"
            autoComplete="organization"
            required
            value={form.company}
            aria-invalid={Boolean(errors.company)}
            aria-describedby={describedBy("company")}
            className={fieldClass}
            onChange={(event) => update("company", event.target.value)}
          />
        </Field>
        <Field id="activity" label="Activité" error={errors.activity}>
          <Input
            id="activity"
            name="activity"
            required
            placeholder="Plombier, électricien, paysagiste…"
            value={form.activity}
            aria-invalid={Boolean(errors.activity)}
            aria-describedby={describedBy("activity")}
            className={fieldClass}
            onChange={(event) => update("activity", event.target.value)}
          />
        </Field>
        <Field id="city" label="Ville" error={errors.city}>
          <Input
            id="city"
            name="city"
            autoComplete="address-level2"
            required
            value={form.city}
            aria-invalid={Boolean(errors.city)}
            aria-describedby={describedBy("city")}
            className={fieldClass}
            onChange={(event) => update("city", event.target.value)}
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
      </div>
      <Field
        id="website"
        label="Site actuel (optionnel)"
        error={errors.website}
        hint="Laissez vide si vous n’avez pas encore de site."
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
      <div className="grid gap-5 sm:grid-cols-3">
        <Field id="goal" label="Objectif principal" error={errors.goal}>
          <select
            id="goal"
            name="goal"
            required
            value={form.goal}
            aria-invalid={Boolean(errors.goal)}
            aria-describedby={describedBy("goal")}
            className={cn(selectClass, !form.goal && "text-zinc-500")}
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
        <Field id="budget" label="Budget approximatif" error={errors.budget}>
          <select
            id="budget"
            name="budget"
            required
            value={form.budget}
            aria-invalid={Boolean(errors.budget)}
            aria-describedby={describedBy("budget")}
            className={cn(selectClass, !form.budget && "text-zinc-500")}
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
        <Field id="timeline" label="Délai souhaité" error={errors.timeline}>
          <select
            id="timeline"
            name="timeline"
            required
            value={form.timeline}
            aria-invalid={Boolean(errors.timeline)}
            aria-describedby={describedBy("timeline")}
            className={cn(selectClass, !form.timeline && "text-zinc-500")}
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
      <Field id="message" label="Message" error={errors.message}>
        <Textarea
          id="message"
          name="message"
          rows={5}
          placeholder="Décrivez votre activité, votre site actuel et ce que vous souhaitez améliorer."
          value={form.message}
          className="min-h-32 rounded-xl border-white/10 bg-zinc-950/50 px-3.5 py-3 text-base text-zinc-100 md:text-[15px] placeholder:text-zinc-500"
          onChange={(event) => update("message", event.target.value)}
        />
      </Field>
      {serverError ? (
        <p className="text-sm text-red-400" role="alert">
          {serverError}
        </p>
      ) : null}
      <Button
        type="submit"
        disabled={status === "loading"}
        className="h-12 w-full rounded-xl bg-emerald-400 px-6 text-[15px] font-semibold text-zinc-950 hover:bg-emerald-300 sm:w-auto"
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
    </form>
  );
}
