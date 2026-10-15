"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { form, site } from "@/content/site";
import { telHref } from "@/lib/format";
import styles from "./ContactForm.module.css";

type Status = "idle" | "sending" | "success" | "error";

/**
 * Lead form. Posts JSON to /api/contact; without JavaScript it falls back to a
 * normal form POST to the same endpoint.
 */
export default function ContactForm({ idPrefix = "contact" }: { idPrefix?: string }) {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const id = (name: string) => `${idPrefix}-${name}`;

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formEl = e.currentTarget;
    const data = Object.fromEntries(new FormData(formEl).entries());

    const phoneDigits = String(data.phone ?? "").replace(/\D/g, "");
    if (phoneDigits.length < 9 || phoneDigits.length > 15) {
      setError(form.invalidPhone);
      setStatus("idle");
      return;
    }
    if (!data.consent) {
      setError(form.invalidConsent);
      setStatus("idle");
      return;
    }

    setError("");
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("success");
      formEl.reset();
    } catch {
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <p className={styles.success} role="status">
        {form.success}
      </p>
    );
  }

  return (
    <form action="/api/contact" method="post" onSubmit={onSubmit} className={styles.form} noValidate>
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
            maxLength={30}
            dir="ltr"
          />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.field}>
          <label htmlFor={id("city")}>{form.city}</label>
          <input id={id("city")} name="city" type="text" autoComplete="address-level2" maxLength={100} />
        </div>
        <div className={styles.field}>
          <label htmlFor={id("apartments")}>{form.apartments}</label>
          <input id={id("apartments")} name="apartments" type="number" min={1} max={999} inputMode="numeric" />
        </div>
      </div>

      <fieldset className={styles.fieldset}>
        <legend>{form.residence}</legend>
        <label className={styles.inline}>
          <input type="radio" name="residence" value="israel" defaultChecked /> {form.residenceIsrael}
        </label>
        <label className={styles.inline}>
          <input type="radio" name="residence" value="abroad" /> {form.residenceAbroad}
        </label>
      </fieldset>

      <div className={styles.field}>
        <label htmlFor={id("message")}>{form.message}</label>
        <textarea id={id("message")} name="message" rows={3} maxLength={2000} />
      </div>

      {/* Honeypot: hidden from people, bots tend to fill it */}
      <div className={styles.hp} aria-hidden="true">
        <label htmlFor={id("website")}>Website</label>
        <input id={id("website")} name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <label className={styles.consent}>
        <input type="checkbox" name="consent" value="yes" required aria-required="true" />
        <span>
          {form.consent}
          <Link href="/privacy">{form.consentLink}</Link> <span className={styles.req}>{form.required}</span>
        </span>
      </label>

      <div aria-live="polite" className={styles.messages}>
        {error && <p className={styles.error}>{error}</p>}
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
