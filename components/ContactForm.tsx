"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { form, site } from "@/content/site";
import { telHref } from "@/lib/format";
import { isValidPhone } from "@/lib/validation";
import styles from "./ContactForm.module.css";

type Status = "idle" | "sending" | "success" | "error";
type FieldErrors = { phone?: string; consent?: string };

/**
 * Lead form. Posts JSON to /api/contact; without JavaScript it falls back to a
 * normal form POST to the same endpoint. Asks only for name and phone.
 */
export default function ContactForm({ idPrefix = "contact" }: { idPrefix?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<FieldErrors>({});
  const [serverError, setServerError] = useState("");
  const successRef = useRef<HTMLParagraphElement>(null);
  const id = (name: string) => `${idPrefix}-${name}`;

  // The form is replaced by the success message; move focus there so it isn't lost
  useEffect(() => {
    if (status === "success") successRef.current?.focus();
  }, [status]);

  function clearError(field: keyof FieldErrors) {
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    const formEl = e.currentTarget;
    const data = Object.fromEntries(new FormData(formEl).entries());

    const phone = String(data.phone ?? "").trim();
    const found: FieldErrors = {};
    if (!phone) found.phone = form.missingPhone;
    else if (!isValidPhone(phone)) found.phone = form.invalidPhone;
    if (!data.consent) found.consent = form.invalidConsent;

    setErrors(found);
    setServerError("");
    const first = (["phone", "consent"] as const).find((f) => found[f]);
    if (first) {
      formEl.querySelector<HTMLInputElement>(`[name="${first}"]`)?.focus();
      setStatus("idle");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (res.status === 400) {
        // The server rejected a field; show its message and let the visitor fix it
        const body = await res.json().catch(() => null);
        setServerError(typeof body?.message === "string" ? body.message : form.error);
        setStatus("idle");
        return;
      }
      if (!res.ok) throw new Error(String(res.status));
      setStatus("success");
      formEl.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p ref={successRef} className={styles.success} role="status" tabIndex={-1}>
        {form.success}
      </p>
    );
  }

  return (
    <form
      action="/api/contact"
      method="post"
      onSubmit={onSubmit}
      className={styles.form}
      noValidate
      aria-busy={status === "sending"}
    >
      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor={id("name")}>{form.name}</label>
          <input id={id("name")} name="name" type="text" autoComplete="name" maxLength={100} />
        </div>
        <div className={styles.field}>
          <label htmlFor={id("phone")}>
            {form.phone} <span className={styles.req}>{form.required}</span>
          </label>
          <input
            id={id("phone")}
            name="phone"
            type="tel"
            inputMode="tel"
            autoComplete="tel"
            required
            aria-required="true"
            aria-invalid={errors.phone ? true : undefined}
            aria-describedby={errors.phone ? `${id("phone-hint")} ${id("phone-error")}` : id("phone-hint")}
            onInput={() => clearError("phone")}
            maxLength={30}
            dir="ltr"
          />
          <p id={id("phone-hint")} className={styles.hint}>
            {form.phoneHint}
          </p>
          {errors.phone && (
            <p id={id("phone-error")} className={styles.fieldError}>
              {errors.phone}
            </p>
          )}
        </div>
      </div>

      {/* Honeypot: hidden from people, bots tend to fill it */}
      <div className={styles.hp} aria-hidden="true">
        <label htmlFor={id("website")}>Website</label>
        <input id={id("website")} name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className={styles.group}>
        <label className={styles.consent}>
          <input
            type="checkbox"
            name="consent"
            value="yes"
            required
            aria-required="true"
            aria-invalid={errors.consent ? true : undefined}
            aria-describedby={errors.consent ? id("consent-error") : undefined}
            onChange={() => clearError("consent")}
          />
          <span>
            {form.consent}
            <Link href="/privacy">{form.consentLink}</Link> <span className={styles.req}>{form.required}</span>
          </span>
        </label>
        {errors.consent && (
          <p id={id("consent-error")} className={styles.fieldError}>
            {errors.consent}
          </p>
        )}
      </div>

      <div aria-live="polite" className={styles.messages}>
        {serverError && <p className={styles.error}>{serverError}</p>}
        {status === "error" && (
          <p className={styles.error}>
            {form.error}{" "}
            <a href={telHref(site.phone)} className="ltr">
              {site.phone}
            </a>
          </p>
        )}
      </div>

      <button type="submit" className="btn btn-primary" disabled={status === "sending"}>
        {status === "sending" ? form.sending : form.submit}
      </button>
    </form>
  );
}
