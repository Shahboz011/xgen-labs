import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Atom,
  BicepsFlexed,
  FlaskConical,
  Globe,
  Leaf,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { categories, products } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";

const features = [
  { icon: FlaskConical, title: "Science based", sub: "Research-backed formulas" },
  { icon: Leaf, title: "Premium ingredients", sub: "Only the best sources" },
  { icon: BicepsFlexed, title: "Muscle support", sub: "Build & recover faster" },
  { icon: Zap, title: "Energy & focus", sub: "Clean, no crash" },
  { icon: ShieldCheck, title: "Quality trusted", sub: "Third-party lab tested" },
  { icon: Globe, title: "Global presence", sub: "Trusted in 20+ countries" },
];

const heroStats = [
  { icon: BicepsFlexed, value: "25g", label: "Protein" },
  { icon: Atom, value: "25g", label: "Amino acids" },
  { icon: Zap, value: "6.6g", label: "BCAAs" },
];

const banners: { image: string; href: string; label: string; overlay?: [string, string, string] }[] = [
  { image: "/img/banner-protein.webp", href: "/products/muscle-protein", label: "25g protein per serving — Muscle Protein 100% Whey" },
  { image: "/img/banner-bcaa.webp", href: "/products/muscle-protein", label: "6.6g BCAAs per serving — Muscle Protein 100% Whey" },
  { image: "/img/banner-creatine.webp", href: "/products/muscle-gainer", label: "1000 calories per serving — Muscle Gainer", overlay: ["1000", "Calories", "Per serving"] },
];

const marquee = ["Strength", "Energy", "Focus", "Discipline", "Results"];

export default function Home() {
  const featured = products;

  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="relative flex flex-col overflow-hidden border-b border-line bg-ink">
        <div className="relative -order-1 aspect-[993/612] lg:absolute lg:inset-y-0 lg:right-0 lg:order-none lg:aspect-auto lg:w-[62%] xl:w-[64%]">
          <Image
            src="/img/hero-boxes.webp"
            alt="XGENS LABS Muscle Gainer and Muscle Protein 100% Whey boxes"
            fill
            priority
            sizes="(min-width: 1024px) 64vw, 100vw"
            className="object-cover object-[70%_center]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent lg:bg-gradient-to-r lg:from-ink lg:via-ink/20 lg:via-25%" />
          <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-ink to-transparent" />
        </div>

        <div className="relative mx-auto w-full max-w-[1440px] lg:flex lg:min-h-[620px] lg:items-center xl:min-h-[660px]">
          <div className="relative px-4 pb-12 pt-6 sm:px-8 lg:z-10 lg:max-w-[600px] lg:py-16">
            <p className="eyebrow rise -rotate-3 text-[0.78rem] tracking-[0.28em] text-white sm:text-sm">Premium sports nutrition</p>
            <h1 className="hero-title rise mt-4 -rotate-3" style={{ animationDelay: "80ms" }}>
              <span className="chrome block">Muscle</span>
              <span className="block">
                <span className="red-hot">Protein</span> <span className="text-lime">&amp;</span>
              </span>
              <span className="red-hot block">Gainer</span>
            </h1>
            <p className="display rise mt-5 -rotate-3 text-[clamp(1.05rem,2vw,1.6rem)] [font-stretch:85%]" style={{ animationDelay: "160ms" }}>
              Real nutrition. Real results.
            </p>
            <div className="rise mt-8" style={{ animationDelay: "240ms" }}>
              <Link href="/products" className="btn-lime !px-7 !py-4 !text-base">
                Our products <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
            <dl className="rise mt-10 grid max-w-md grid-cols-3 divide-x divide-white/15" style={{ animationDelay: "320ms" }}>
              {heroStats.map(({ icon: Icon, value, label }) => (
                <div key={label} className="flex flex-col items-center px-2 text-center first:pl-0">
                  <span className="grid h-14 w-14 place-items-center rounded-full border-2 border-lime text-lime shadow-[0_0_18px_rgb(196_240_0/0.25)]">
                    <Icon className="h-7 w-7" strokeWidth={1.8} />
                  </span>
                  <dd className="display order-2 mt-3 text-2xl [font-stretch:90%]">{value}</dd>
                  <dt className="order-3 text-[0.68rem] font-bold uppercase leading-tight tracking-wide">
                    {label}
                    <span className="block text-[0.58rem] font-semibold text-white/60">Per serving</span>
                  </dt>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ---------- FEATURE STRIP ---------- */}
      <section className="border-b border-line bg-coal">
        <ul className="mx-auto grid max-w-[1440px] grid-cols-2 gap-y-8 px-4 py-9 sm:grid-cols-3 sm:px-8 lg:grid-cols-6">
          {features.map(({ icon: Icon, title, sub }) => (
            <li key={title} className="flex items-center gap-4 lg:justify-center">
              <Icon className="h-8 w-8 shrink-0 text-lime" strokeWidth={1.6} />
              <div>
                <p className="eyebrow text-[0.68rem] tracking-[0.14em] text-white">{title}</p>
                <p className="mt-1 text-xs text-mute">{sub}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* ---------- PER-SERVING BANNERS ---------- */}
      <section className="mx-auto grid max-w-[1440px] gap-3 px-4 pt-6 sm:px-8 md:grid-cols-3">
        {banners.map((b) => (
          <Link
            key={b.image}
            href={b.href}
            aria-label={b.label}
            className="group relative block aspect-[459/170] overflow-hidden border border-line transition-colors hover:border-lime/70"
          >
            <Image src={b.image} alt="" fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover transition-transform duration-500 group-hover:scale-[1.03]" />
            {b.overlay && (
              <span className="absolute left-[7%] top-1/2 -translate-y-1/2 -rotate-6 leading-none">
                <span className="display block text-[clamp(1.8rem,3.4vw,2.8rem)] [font-stretch:90%]">{b.overlay[0]}</span>
                <span className="display block text-[clamp(1.4rem,2.6vw,2.2rem)] text-lime [font-stretch:90%]">{b.overlay[1]}</span>
                <span className="display block text-[clamp(0.9rem,1.5vw,1.2rem)] [font-stretch:90%]">{b.overlay[2]}</span>
              </span>
            )}
          </Link>
        ))}
      </section>

      {/* ---------- CHOOSE YOUR GOAL ---------- */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-[1440px] gap-12 px-4 py-20 sm:px-8 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,2fr)] lg:items-center lg:py-28">
          <div>
            <p className="eyebrow flex items-center gap-4 text-lime">
              Our products <span className="h-px w-24 bg-lime/60" />
            </p>
            <h2 className="display mt-4 text-[clamp(2.2rem,4vw,3.4rem)]">
              Choose your <span className="block text-lime">goal</span>
            </h2>
            <p className="mt-5 max-w-sm leading-relaxed text-white/75">
              Building lean muscle or packing on size — pick the formula made for your goal.
            </p>
            <Link href="/products" className="btn-ghost mt-8">
              All products <ArrowRight className="h-4 w-4" />
            </Link>
          </div>

          <ul className="grid gap-4 sm:grid-cols-2 lg:gap-6">
            {categories.map((c) => (
              <li key={c.id}>
                <Link
                  href={`/products?category=${c.id}`}
                  className="group relative flex flex-col overflow-hidden border border-lime/50 bg-black transition-colors hover:border-lime lg:-skew-x-6"
                >
                  <div className="relative aspect-[1500/1049] overflow-hidden">
                    <div className="absolute inset-0 lg:skew-x-6 lg:scale-110">
                      <Image
                        src={c.image}
                        alt={`${c.name} by XGENS LABS`}
                        fill
                        sizes="(min-width: 1024px) 35vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover opacity-90 grayscale-[25%] transition duration-500 group-hover:scale-105 group-hover:opacity-100 group-hover:grayscale-0"
                      />
                    </div>
                    <div className="absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-t from-black to-transparent" />
                  </div>
                  <div className="relative px-5 pb-5 pt-3 lg:skew-x-6">
                    <p className="text-[0.7rem] text-mute">{c.tagline}</p>
                    <p className="display mt-1 flex items-center gap-2 text-lg transition-colors group-hover:text-lime">
                      {c.name}
                      <ArrowRight className="h-4 w-4 text-lime transition-transform group-hover:translate-x-1" />
                    </p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ---------- MARQUEE ---------- */}
      <div className="overflow-hidden border-y border-lime/40 bg-lime py-3 text-black" aria-hidden="true">
        <div className="marquee flex w-max">
          {[0, 1].map((k) => (
            <div key={k} className="flex shrink-0">
              {Array.from({ length: 4 }).flatMap((_, r) =>
                marquee.map((w) => (
                  <span key={`${k}-${r}-${w}`} className="display flex items-center px-6 text-xl">
                    {w} <span className="ml-12 inline-block h-2 w-2 rotate-45 bg-black" />
                  </span>
                )),
              )}
            </div>
          ))}
        </div>
      </div>

      {/* ---------- BESTSELLERS ---------- */}
      <section className="mx-auto max-w-[1440px] px-4 py-20 sm:px-8 lg:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <p className="eyebrow text-lime">Signature range</p>
            <h2 className="display mt-3 text-[clamp(2rem,3.6vw,3rem)]">Featured products</h2>
          </div>
          <Link href="/products" className="group flex items-center gap-2 py-2 text-sm font-semibold uppercase tracking-[0.14em] text-white/80 hover:text-lime">
            View all <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="mt-10 grid max-w-5xl gap-5 sm:grid-cols-2">
          {featured.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>

      {/* ---------- MORE THAN SUPPLEMENTS ---------- */}
      <section className="relative overflow-hidden border-y border-line bg-coal">
        <div className="mx-auto grid max-w-[1440px] lg:grid-cols-2">
          <div className="relative z-10 px-4 py-16 sm:px-8 lg:py-24">
            <p className="eyebrow text-white/80">
              Science <span className="mx-3 text-lime">/</span> Performance <span className="mx-3 text-lime">/</span> You
            </p>
            <h2 className="display mt-6 text-[clamp(2.4rem,5vw,4.4rem)]">
              <span className="chrome">More than</span>
              <span className="block text-lime text-glow">supplements</span>
            </h2>
            <p className="mt-6 max-w-lg leading-relaxed text-white/75">
              XGENS LABS is more than sports nutrition. It&apos;s your tool for reaching new heights — engineered in the lab,
              proven in the gym and trusted by athletes in over 20 countries.
            </p>
            <div className="mt-10 grid max-w-lg grid-cols-2 gap-6">
              {[
                { icon: ShieldCheck, t: "Safe & clean", s: "No banned substances" },
                { icon: Globe, t: "Global standards", s: "International quality" },
              ].map(({ icon: Icon, t, s }) => (
                <div key={t} className="flex gap-3">
                  <Icon className="h-7 w-7 shrink-0 text-lime" strokeWidth={1.6} />
                  <div>
                    <p className="eyebrow text-[0.68rem] tracking-[0.14em]">{t}</p>
                    <p className="mt-1 text-xs text-mute">{s}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link href="/about" className="btn-lime mt-10">
              Discover XGENS <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="relative aspect-[16/9] lg:aspect-auto">
            <Image
              src="/img/products/muscle-protein.webp"
              alt="XGENS LABS Muscle Protein 100% Whey box"
              fill
              sizes="(min-width: 1024px) 50vw, 100vw"
              className="object-cover object-[60%_center]"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-coal via-transparent to-transparent lg:bg-gradient-to-r lg:from-coal lg:via-coal/20" />
          </div>
        </div>
      </section>

      {/* ---------- REAL PEOPLE ---------- */}
      <section className="relative overflow-hidden border-t border-line">
        <div className="mx-auto grid max-w-[1440px] lg:grid-cols-[1fr_1.4fr]">
          <div className="relative min-h-[280px] lg:min-h-[420px]">
            <Image src="/img/athlete-back.webp" alt="Athlete back muscles in the gym" fill sizes="(min-width: 1024px) 40vw, 100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-transparent lg:bg-gradient-to-l lg:from-ink lg:via-transparent" />
            <p className="eyebrow absolute left-6 top-6 leading-loose text-white/80">
              Discipline
              <br />
              builds
              <br />
              freedom
            </p>
          </div>
          <div className="flex flex-col justify-center gap-12 px-4 py-16 sm:px-8 lg:py-20">
            <div>
              <h2 className="display text-[clamp(2rem,3.4vw,2.9rem)]">
                Real people.
                <span className="block text-lime">Real results.</span>
              </h2>
              <p className="mt-5 max-w-md text-white/75">
                Join thousands who choose <span className="text-lime">XGENS LABS</span> for a stronger, healthier, better version of themselves.
              </p>
              <Link href="/about" className="btn-lime mt-8">
                Our story <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <dl className="grid max-w-xl grid-cols-3 divide-x divide-line">
              {[
                { v: "10K", l: "Happy customers" },
                { v: "50", l: "Premium products" },
                { v: "20", l: "Countries" },
              ].map((s) => (
                <div key={s.l} className="flex min-w-0 flex-col px-3 first:pl-0 sm:px-4">
                  <dt className="eyebrow order-2 mt-2 text-[0.62rem] leading-relaxed tracking-[0.08em] text-white/80 sm:text-[0.65rem] sm:tracking-[0.16em]">{s.l}</dt>
                  <dd className="display order-1 text-[clamp(1.8rem,3vw,2.6rem)] text-lime">
                    {s.v}
                    <span className="text-white">+</span>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </>
  );
}
