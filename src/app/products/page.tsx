import type { Metadata } from "next";
import { Suspense } from "react";
import { products } from "@/lib/products";
import { PageHero } from "@/components/PageHero";
import { ProductCard } from "@/components/ProductCard";
import { ProductFilters } from "@/components/ProductFilters";
import { JsonLd } from "@/components/JsonLd";
import { absoluteUrl, pageMetadata } from "@/lib/site";

export const metadata: Metadata = pageMetadata({
  title: "Products — Whey Protein, Mass Gainers & Creatine",
  description:
    "Explore XGENS LABS sports nutrition: Muscle Protein 100% Whey, Muscle Gainer, Whey Protein X, Mass Gainer X and Creatine X micronized creatine monohydrate.",
  path: "/products",
});

export default function ProductsPage() {
  const cards = Object.fromEntries(products.map((p) => [p.slug, <ProductCard key={p.slug} product={p} />]));

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "XGENS LABS Products",
          url: absoluteUrl("/products"),
          mainEntity: {
            "@type": "ItemList",
            itemListElement: products.map((p, i) => ({
              "@type": "ListItem",
              position: i + 1,
              url: absoluteUrl(`/products/${p.slug}`),
              name: p.name,
            })),
          },
        }}
      />
      <PageHero eyebrow="Our products" title="Fuel every" accent="goal">
        Science-based formulas for strength, size, energy and recovery. Lab-tested, honestly dosed and trusted by athletes in over 20 countries.
      </PageHero>
      <section className="mx-auto max-w-[1440px] px-4 py-12 sm:px-8 lg:py-16">
        <Suspense
          fallback={
            <div className="grid max-w-5xl gap-5 pt-20 sm:grid-cols-2">
              {products.map((p) => (
                <div key={p.slug}>{cards[p.slug]}</div>
              ))}
            </div>
          }
        >
          <ProductFilters cards={cards} />
        </Suspense>
      </section>
    </>
  );
}
