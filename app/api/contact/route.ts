import { Resend } from "resend";
import { form, labels, site } from "@/content/site";
import { telHref } from "@/lib/format";
import { isValidPhone } from "@/lib/validation";

type Lead = {
  name: string;
  phone: string;
  city: string;
  apartments: string;
  residence: string;
  message: string;
  consent: string;
  website: string; // honeypot
};

const LIMITS: Record<keyof Lead, number> = {
  name: 100,
  phone: 30,
  city: 100,
  apartments: 5,
  residence: 10,
  message: 2000,
  consent: 10,
  website: 200,
};

async function readLead(req: Request): Promise<{ lead: Lead; isJson: boolean }> {
  const isJson = (req.headers.get("content-type") ?? "").includes("application/json");
  const raw: Record<string, unknown> = isJson
    ? await req.json().catch(() => ({}))
    : Object.fromEntries((await req.formData().catch(() => new FormData())).entries());

  const lead = {} as Lead;
  for (const key of Object.keys(LIMITS) as (keyof Lead)[]) {
    lead[key] = typeof raw[key] === "string" ? (raw[key] as string).trim().slice(0, LIMITS[key]) : "";
  }
  return { lead, isJson };
}

function validate(lead: Lead): string | null {
  if (!lead.phone) return form.missingPhone;
  if (!isValidPhone(lead.phone)) return form.invalidPhone;
  if (!lead.consent) return form.invalidConsent;
  return null;
}

/** Plain HTML reply for browsers that posted the form without JavaScript. */
function htmlReply(ok: boolean, message: string, status: number) {
  const body = `<!doctype html><html lang="he" dir="rtl"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${site.nameHe}</title></head>
<body style="font-family:Arial,sans-serif;max-width:40rem;margin:3rem auto;padding:0 1rem;line-height:1.7;color:#1c2a30">
<p style="font-size:1.25rem;font-weight:700">${message}</p>
${ok ? "" : `<p><a href="${telHref(site.phone)}" dir="ltr">${site.phone}</a></p>`}
<p><a href="/">${labels.backHome}</a></p></body></html>`;
  return new Response(body, { status, headers: { "Content-Type": "text/html; charset=utf-8" } });
}

export async function POST(req: Request) {
  const { lead, isJson } = await readLead(req);

  const reply = (ok: boolean, message: string, status: number) =>
    isJson ? Response.json({ ok, message }, { status }) : htmlReply(ok, message, status);

  // Honeypot filled → pretend success, send nothing
  if (lead.website) return reply(true, form.success, 200);

  const invalid = validate(lead);
  if (invalid) return reply(false, invalid, 400);

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_EMAIL_TO;
  if (!apiKey || !to) {
    console.error("Contact form: RESEND_API_KEY or LEAD_EMAIL_TO is not set");
    return reply(false, form.error, 500);
  }

  // The short home-page form has no residence field, so it can be empty
  const residence =
    lead.residence === "abroad" ? form.residenceAbroad : lead.residence === "israel" ? form.residenceIsrael : "-";
  const text = [
    `${form.name}: ${lead.name || "-"}`,
    `${form.phone}: ${lead.phone}`,
    `${form.city}: ${lead.city || "-"}`,
    `${form.apartments}: ${lead.apartments || "-"}`,
    `${form.residence}: ${residence}`,
    "",
    `${form.message}:`,
    lead.message || "-",
  ].join("\n");

  try {
    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: process.env.RESEND_FROM || `${site.name} <onboarding@resend.dev>`,
      to: to.split(",").map((s) => s.trim()),
      subject: `פנייה חדשה מהאתר: ${lead.name || lead.phone}`,
      text,
    });
    if (error) throw new Error(error.message);
  } catch (err) {
    console.error("Contact form: sending failed", err);
    return reply(false, form.error, 502);
  }

  return reply(true, form.success, 200);
}
