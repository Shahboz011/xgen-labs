import type { Metadata } from "next";
import { Building2, Mail, MessageCircle } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { JsonLd } from "@/components/JsonLd";
import { absoluteUrl, pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Contact & Where to Buy",
  description:
    "Contact XGENS LABS to find where to buy our sports nutrition in your country, ask a product question or become an official distributor.",
  path: "/contact",
});

const faq = [
  { q: "Where can I buy XGENS LABS products?", a: "XGENS LABS is available through partner gyms, sports nutrition stores and official distributors. Send us a message with your country and city and we’ll point you to the nearest partner." },
  { q: "Can I order directly from this website?", a: "Not at the moment — this site is our product catalog. Please contact us or one of our official partners to purchase." },
  { q: "Which countries are you available in?", a: "Our products are available in more than 20 countries across Europe, the Middle East, Central Asia and North America, and we are expanding." },
  { q: "Are your products tested?", a: "Every batch is tested in-house and by independent third-party labs for purity, potency and banned substances." },
  { q: "Do you work with distributors?", a: "Yes. We partner with gyms, retailers and distributors worldwide. Choose “Wholesale / distribution” in the form above." },
];

export default function ContactPage() {
  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact XGENS LABS",
            url: absoluteUrl("/contact"),
            about: { "@id": absoluteUrl("/#organization") },
          },
          {
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faq.map((f) => ({
              "@type": "Question",
              name: f.q,
              acceptedAnswer: { "@type": "Answer", text: f.a },
            })),
          },
        ]}
      />
      <PageHero eyebrow="Contact" title="Let's" accent="talk">
        Looking for where to buy, have a product question or want to become a distributor? Our team is here to help.
      </PageHero>

      <section className="mx-auto grid max-w-[1440px] gap-10 px-4 py-16 sm:px-8 lg:grid-cols-[1fr_1.6fr] lg:py-24">
        <ul className="space-y-4">
          {[
            { icon: Mail, t: "Customer support", d: "support@xgenslabs.com" },
            { icon: MessageCircle, t: "Chat with us", d: "Telegram & WhatsApp, 9:00–21:00" },
            { icon: Building2, t: "Wholesale", d: "partners@xgenslabs.com", id: "wholesale" },
          ].map(({ icon: Icon, t, d, id }) => (
            <li key={t} id={id} className="flex scroll-mt-28 gap-5 rounded-md border border-line bg-panel p-6">
              <Icon className="h-7 w-7 shrink-0 text-lime" strokeWidth={1.6} />
              <div>
                <h2 className="eyebrow text-[0.72rem] tracking-[0.14em]">{t}</h2>
                <p className="mt-2 text-sm text-white/75">{d}</p>
              </div>
            </li>
          ))}
        </ul>
        <ContactForm />
      </section>

      <section id="faq" className="scroll-mt-28 border-t border-line bg-coal">
        <div className="mx-auto max-w-[1000px] px-4 py-16 sm:px-8 lg:py-24">
          <h2 className="display text-center text-[clamp(2rem,3.4vw,3rem)]">
            Frequently <span className="text-lime">asked</span>
          </h2>
          <div className="mt-10 divide-y divide-line border-y border-line">
            {faq.map((f) => (
              <details key={f.q} className="group py-3">
                <summary className="flex min-h-11 cursor-pointer list-none items-center justify-between gap-4 py-2 font-semibold">
                  {f.q}
                  <span className="text-2xl leading-none text-lime transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 leading-relaxed text-white/70">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
