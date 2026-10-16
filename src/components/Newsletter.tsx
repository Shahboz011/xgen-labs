"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

export function NewsletterForm() {
  const [done, setDone] = useState(false);

  if (done) {
    return (
      <p className="flex items-center gap-3 rounded border border-lime/50 px-5 py-4 text-sm text-lime">
        <Check className="h-5 w-5" /> Welcome to the XGENS family. Check your inbox.
      </p>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // TODO: connect to the email marketing provider
        setDone(true);
      }}
      className="flex w-full max-w-lg overflow-hidden rounded border border-lime/60 focus-within:border-lime"
    >
      <label htmlFor="newsletter-email" className="sr-only">
        Email address
      </label>
      <input
        id="newsletter-email"
        type="email"
        required
        placeholder="Your email address"
        className="min-w-0 flex-1 bg-black/40 px-5 py-4 text-sm text-white placeholder:text-white/50 outline-none"
      />
      <button type="submit" className="btn-lime !rounded-none !px-6">
        Subscribe <ArrowRight className="h-4 w-4" />
      </button>
    </form>
  );
}
