"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

const field =
  "w-full rounded border border-line bg-ink px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-mute focus:border-lime";

export function ContactForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="flex flex-col items-start gap-4 rounded-md border border-lime/50 bg-panel p-8">
        <Check className="h-10 w-10 text-lime" />
        <h3 className="display text-2xl">Message sent</h3>
        <p className="text-white/75">Thanks for reaching out — our team replies within one business day.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // TODO: send to support inbox / CRM
        setSent(true);
      }}
      className="grid gap-5 rounded-md border border-line bg-panel p-6 sm:grid-cols-2 sm:p-8"
    >
      <label className="grid gap-2 text-xs uppercase tracking-[0.14em] text-mute">
        Name
        <input required name="name" autoComplete="name" className={field} />
      </label>
      <label className="grid gap-2 text-xs uppercase tracking-[0.14em] text-mute">
        Email
        <input required type="email" name="email" autoComplete="email" className={field} />
      </label>
      <label className="grid gap-2 text-xs uppercase tracking-[0.14em] text-mute">
        Country
        <input name="country" autoComplete="country-name" className={field} />
      </label>
      <label className="grid gap-2 text-xs uppercase tracking-[0.14em] text-mute">
        Topic
        <select name="topic" className={field} defaultValue="where-to-buy">
          <option value="where-to-buy">Where to buy</option>
          <option value="product">Product question</option>
          <option value="wholesale">Wholesale / distribution</option>
          <option value="other">Other</option>
        </select>
      </label>
      <label className="grid gap-2 text-xs uppercase tracking-[0.14em] text-mute sm:col-span-2">
        Message
        <textarea required name="message" rows={5} className={field} />
      </label>
      <button type="submit" className="btn-lime justify-self-start">
        Send message <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  );
}
