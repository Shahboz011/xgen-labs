import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, FlaskConical, Globe, Microscope, ShieldCheck } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "About Us — Science-Based Sports Nutrition",
  description:
    "Meet XGENS LABS: science-first sports nutrition, clean ingredients and third-party lab testing. Learn how we develop and test every formula.",
  path: "/about",
});

const values = [
  { n: "01", t: "Science first", d: "Every formula starts with published research and clinically effective doses — never pixie-dusted proprietary blends." },
  { n: "02", t: "Clean ingredients", d: "Premium raw materials from audited suppliers. No banned substances, no unnecessary fillers." },
  { n: "03", t: "Tested twice", d: "Batches are tested in-house and by independent third-party labs for purity, potency and contaminants." },
  { n: "04", t: "Built for athletes", d: "Developed with coaches and competitive athletes, refined by real training feedback." },
];

const quality = [
  { icon: Microscope, t: "Third-party lab testing", d: "Independent analysis of every production batch." },
  { icon: ShieldCheck, t: "Banned-substance screened", d: "Safe for tested athletes and competitive sport." },
  { icon: FlaskConical, t: "Full label transparency", d: "Every ingredient and dose disclosed on the label." },
  { icon: Globe, t: "International standards", d: "Produced in GMP-certified facilities." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero eyebrow="Science / Performance / You" title="More than" accent="supplements">
        XGENS LABS was built for people who refuse to settle. We combine sports science with uncompromising quality to make nutrition that delivers real, measurable results.
      </PageHero>

      <section className="mx-auto grid max-w-[1440px] gap-12 px-4 py-20 sm:px-8 lg:grid-cols-2 lg:items-center lg:py-28">
        <div className="relative aspect-[16/10] overflow-hidden rounded-md border border-line">
          <Image src="/img/products/muscle-gainer.webp" alt="XGENS LABS Muscle Gainer Max Mass Formula box" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
        </div>
        <div>
          <p className="eyebrow text-lime">Our mission</p>
          <h2 className="display mt-4 text-[clamp(2rem,3.4vw,3rem)]">
            Discipline builds <span className="text-lime">freedom</span>
          </h2>
          <p className="mt-6 leading-relaxed text-white/75">
            We started XGENS LABS in the gym, not the boardroom. Frustrated by underdosed products and empty marketing, we set out to create
            sports nutrition we would trust ourselves — formulas that respect the science and the athlete.
          </p>
          <p className="mt-4 leading-relaxed text-white/75">
            Today, athletes in more than 20 countries fuel their training with XGENS. Our promise hasn&apos;t changed: stronger formulas, honest labels, real results.
          </p>
        </div>
      </section>

      <section className="border-y border-line bg-coal">
        <ol className="mx-auto grid max-w-[1440px] gap-px bg-line sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <li key={v.n} className="bg-coal p-8 lg:p-10">
              <span className="display text-4xl text-lime">{v.n}</span>
              <h3 className="display mt-5 text-xl">{v.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">{v.d}</p>
            </li>
          ))}
        </ol>
      </section>

      <section id="science" className="mx-auto max-w-[1440px] scroll-mt-28 px-4 py-20 sm:px-8 lg:py-28">
        <p className="eyebrow text-lime">Quality</p>
        <h2 className="display mt-4 text-[clamp(2rem,3.4vw,3rem)]">
          Lab-tested. <span className="text-lime">Athlete-proven.</span>
        </h2>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {quality.map(({ icon: Icon, t, d }) => (
            <div key={t} className="rounded-md border border-line bg-panel p-7 transition-colors hover:border-lime/60">
              <Icon className="h-9 w-9 text-lime" strokeWidth={1.5} />
              <h3 className="eyebrow mt-6 text-[0.72rem] tracking-[0.14em]">{t}</h3>
              <p className="mt-3 text-sm text-white/70">{d}</p>
            </div>
          ))}
        </div>
        <Link href="/products" className="btn-lime mt-12">
          Explore the range <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </>
  );
}
