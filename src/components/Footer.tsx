import Link from "next/link";
import { categories } from "@/lib/products";
import { Logo } from "./Logo";
import { NewsletterForm } from "./Newsletter";
import { SocialIcon, socials } from "./SocialIcons";

const columns = [
  {
    title: "Products",
    links: [{ href: "/products", label: "All products" }, ...categories.map((c) => ({ href: `/products?category=${c.id}`, label: c.name }))],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About us" },
      { href: "/about#science", label: "Quality & testing" },
      { href: "/contact", label: "Contact" },
      { href: "/contact#wholesale", label: "Wholesale & distributors" },
    ],
  },
  {
    title: "Help",
    links: [
      { href: "/contact#faq", label: "FAQ" },
      { href: "/contact", label: "Where to buy" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="mt-auto border-t border-line bg-coal">
      <section className="relative overflow-hidden border-b border-line">
        <div className="stripes absolute inset-0 opacity-60" />
        <div className="relative mx-auto flex max-w-[1440px] flex-col gap-8 px-4 py-14 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="display text-3xl sm:text-4xl">
              Join the <span className="text-lime">XGENS</span> family
            </h2>
            <p className="mt-3 text-white/70">Be stronger. Be better. Be XGENS. Drops, training tips and members-only offers.</p>
          </div>
          <NewsletterForm />
        </div>
      </section>

      <div className="mx-auto grid max-w-[1440px] gap-12 px-4 py-14 sm:px-8 md:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <Link href="/" aria-label="XGENS LABS home" className="text-[18px]">
            <Logo />
          </Link>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-mute">
            Premium sports nutrition designed for real performance. Science-based formulas, lab-tested quality, trusted worldwide.
          </p>
          <ul className="mt-6 flex gap-3">
            {socials.map((s) => (
              <li key={s.name}>
                <a
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.name}
                  className="grid h-10 w-10 place-items-center rounded border border-line text-white/80 transition-colors hover:border-lime hover:text-lime"
                >
                  <SocialIcon name={s.name} />
                </a>
              </li>
            ))}
          </ul>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="eyebrow text-lime">{col.title}</h3>
            <ul className="mt-5 space-y-3">
              {col.links.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="text-sm text-white/75 hover:text-white">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-[1440px] flex-col gap-4 px-4 py-6 text-xs text-mute sm:px-8 md:flex-row md:items-center md:justify-between">
          <p>© 2026 XGENS LABS. All rights reserved.</p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            <li><Link href="/contact#faq" className="hover:text-white">Privacy Policy</Link></li>
            <li><Link href="/contact#faq" className="hover:text-white">Terms & Conditions</Link></li>
          </ul>
          <p className="display text-sm text-lime">#XGENSLABS</p>
        </div>
        <p className="mx-auto max-w-[1440px] px-4 pb-6 text-[11px] leading-relaxed text-white/35 sm:px-8">
          These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure or prevent any disease. Food supplements should not be used as a substitute for a varied and balanced diet and a healthy lifestyle.
        </p>
      </div>
    </footer>
  );
}
