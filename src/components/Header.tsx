"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { ArrowRight, Menu, Search, X } from "lucide-react";
import { Logo } from "./Logo";

const nav = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/about#science", label: "Quality" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : !href.includes("#") && pathname.startsWith(href);

  return (
    <>
      <div className="border-b border-line bg-coal">
        <div className="mx-auto flex h-9 max-w-[1440px] items-center justify-center px-4 sm:justify-between sm:px-8">
          <p className="eyebrow truncate text-[0.6rem] tracking-[0.14em] text-mute sm:tracking-[0.22em]">
            Lab-tested formulas<span className="text-lime"> · </span>Trusted in 20+ countries
          </p>
          <Link href="/contact#wholesale" className="eyebrow hidden text-[0.6rem] tracking-[0.22em] text-lime hover:text-white sm:block">
            Become a distributor
          </Link>
        </div>
      </div>

      <header className="sticky top-0 z-40 border-b border-line bg-ink/85 backdrop-blur-md">
        <div className="mx-auto flex h-[74px] max-w-[1440px] items-center gap-6 px-4 sm:px-8">
          <Link href="/" aria-label="XGENS LABS home" className="text-[15px] sm:text-[17px]">
            <Logo />
          </Link>

          <nav className="mx-auto hidden lg:block" aria-label="Main">
            <ul className="flex items-center gap-9">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`eyebrow relative py-2 text-[0.72rem] tracking-[0.14em] transition-colors hover:text-lime ${
                      isActive(item.href) ? "text-white" : "text-white/75"
                    }`}
                  >
                    {item.label}
                    {isActive(item.href) && (
                      <span className="absolute inset-x-0 -bottom-1 h-[2px] bg-lime shadow-[0_0_12px_var(--color-lime)]" />
                    )}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="ml-auto flex items-center gap-1 sm:gap-3 lg:ml-0">
            <Link href="/products" aria-label="Browse products" className="grid h-10 w-10 place-items-center text-white/85 hover:text-lime">
              <Search className="h-5 w-5" />
            </Link>
            <div className="ml-2 hidden md:block">
              <Link href="/products" className="btn-lime !py-3 !text-[0.72rem]">
                Our products <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <button
              type="button"
              className="grid h-10 w-10 place-items-center text-white lg:hidden"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
            >
              {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {open && (
          <nav className="border-t border-line bg-ink lg:hidden" aria-label="Mobile">
            <ul className="mx-auto max-w-[1440px] px-4 py-4 sm:px-8">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={`display block border-b border-line py-4 text-lg ${
                      isActive(item.href) ? "text-lime" : "text-white"
                    }`}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </header>
    </>
  );
}
