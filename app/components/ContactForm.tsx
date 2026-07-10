"use client";

import { useId, useState } from "react";
import { useLanguage } from "./LanguageProvider";
import { EMAIL } from "@/lib/i18n";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function ContactForm() {
  const { t } = useLanguage();
  const f = t.contact.form;
  const ids = useId();
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const set = (key: keyof typeof values) => (e: { target: { value: string } }) =>
    setValues((v) => ({ ...v, [key]: e.target.value }));

  const validate = (): Errors => {
    const next: Errors = {};
    if (!values.name.trim()) next.name = f.errorName;
    if (!EMAIL_RE.test(values.email.trim())) next.email = f.errorEmail;
    if (!values.message.trim()) next.message = f.errorMessage;
    return next;
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    const subject = `${values.name.trim()} — Zarcola`;
    const body = `${values.message.trim()}\n\n— ${values.name.trim()}\n${values.email.trim()}`;
    const href = `mailto:${EMAIL}?subject=${encodeURIComponent(
      subject,
    )}&body=${encodeURIComponent(body)}`;
    // Open the visitor's mail client with everything pre-filled.
    window.location.href = href;
    setSent(true);
  };

  if (sent) {
    return (
      <div
        className="border-t border-ink pt-8"
        role="status"
        aria-live="polite"
      >
        <p className="text-[1.25rem] font-medium leading-snug text-ink">
          {f.success}
        </p>
        <p className="mt-3 text-[1rem] leading-relaxed text-stone">
          {f.successHint}
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} noValidate className="w-full">
      <p className="eyebrow">{f.title}</p>
      <div className="mt-8 space-y-8">
        <Field
          id={`${ids}-name`}
          label={f.name}
          error={errors.name}
          value={values.name}
          onChange={set("name")}
          placeholder={f.namePlaceholder}
          autoComplete="name"
        />
        <Field
          id={`${ids}-email`}
          label={f.email}
          error={errors.email}
          value={values.email}
          onChange={set("email")}
          placeholder={f.emailPlaceholder}
          type="email"
          autoComplete="email"
          inputMode="email"
        />
        <div>
          <label
            htmlFor={`${ids}-message`}
            className="mb-2 block text-[0.8125rem] font-medium uppercase tracking-[0.14em] text-stone"
          >
            {f.message}
          </label>
          <textarea
            id={`${ids}-message`}
            className="field"
            rows={4}
            value={values.message}
            onChange={set("message")}
            placeholder={f.messagePlaceholder}
            aria-invalid={!!errors.message}
            aria-describedby={errors.message ? `${ids}-message-err` : undefined}
          />
          {errors.message && (
            <p id={`${ids}-message-err`} className="mt-2 text-[0.85rem] text-accent">
              {errors.message}
            </p>
          )}
        </div>
      </div>

      <button type="submit" className="btn btn-solid mt-10 w-full sm:w-auto">
        {f.submit}
      </button>
    </form>
  );
}

function Field({
  id,
  label,
  error,
  ...rest
}: {
  id: string;
  label: string;
  error?: string;
} & React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-2 block text-[0.8125rem] font-medium uppercase tracking-[0.14em] text-stone"
      >
        {label}
      </label>
      <input
        id={id}
        className="field"
        aria-invalid={!!error}
        aria-describedby={error ? `${id}-err` : undefined}
        {...rest}
      />
      {error && (
        <p id={`${id}-err`} className="mt-2 text-[0.85rem] text-accent">
          {error}
        </p>
      )}
    </div>
  );
}
