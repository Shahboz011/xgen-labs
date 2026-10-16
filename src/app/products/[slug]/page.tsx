import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { ArrowRight, Building2, Check, ChevronRight, FlaskConical, Globe, Leaf, ShieldCheck } from "lucide-react";
import { getCategory, getProduct, products, seoDescription } from "@/lib/products";
import { ProductCard } from "@/components/ProductCard";
import { JsonLd } from "@/components/JsonLd";
import { absoluteUrl, pageMetadata, SITE } from "@/lib/site";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: PageProps<"/products/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const p = getProduct(slug);
  if (!p) return {};
  return pageMetadata({
    title: `${p.name} ${p.size} — ${p.line}`,
    description: seoDescription(p),
    path: `/products/${p.slug}`,
    image: { url: `/products/${p.slug}/opengraph-image`, width: 1200, height: 630, alt: `XGENS LABS ${p.name} ${p.size}` },
  });
}

export default function ProductPage({ params }: PageProps<"/products/[slug]">) {
  return (
    <Suspense fallback={<ProductSkeleton />}>
      <ProductDetail params={params} />
    </Suspense>
  );
}

function ProductSkeleton() {
  return (
    <section className="mx-auto grid max-w-[1440px] animate-pulse gap-10 px-4 py-16 sm:px-8 lg:grid-cols-2 lg:gap-16">
      <div className="aspect-square rounded-md bg-panel" />
      <div className="space-y-5">
        <div className="h-4 w-24 rounded bg-panel" />
        <div className="h-12 w-3/4 rounded bg-panel" />
        <div className="h-8 w-32 rounded bg-panel" />
        <div className="h-24 rounded bg-panel" />
      </div>
    </section>
  );
}

async function ProductDetail({ params }: { params: PageProps<"/products/[slug]">["params"] }) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const category = getCategory(product.category);
  const related = products.filter((p) => p.slug !== product.slug).slice(0, 4);

  const url = absoluteUrl(`/products/${product.slug}`);

  return (
    <>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "Product",
            "@id": `${url}#product`,
            name: `${SITE.name} ${product.name}`,
            description: product.description,
            image: absoluteUrl(product.image),
            url,
            sku: product.slug,
            category: `Sports nutrition > ${category.name}`,
            brand: { "@type": "Brand", name: SITE.name },
            manufacturer: { "@id": absoluteUrl("/#organization") },
            size: product.size,
            additionalProperty: product.stats.map((s) => ({ "@type": "PropertyValue", name: s.label, value: s.value })),
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
              { "@type": "ListItem", position: 2, name: "Products", item: absoluteUrl("/products") },
              { "@type": "ListItem", position: 3, name: product.name, item: url },
            ],
          },
        ]}
      />
      <nav aria-label="Breadcrumb" className="mx-auto max-w-[1440px] px-4 pt-8 sm:px-8">
        <ol className="flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-mute">
          <li><Link href="/" className="hover:text-white">Home</Link></li>
          <li aria-hidden="true"><ChevronRight className="h-3 w-3" /></li>
          <li><Link href={`/products?category=${category.id}`} className="hover:text-white">{category.name}</Link></li>
          <li aria-hidden="true"><ChevronRight className="h-3 w-3" /></li>
          <li className="text-white" aria-current="page">{product.name}</li>
        </ol>
      </nav>

      <section className="mx-auto grid max-w-[1440px] gap-10 px-4 py-10 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:py-14">
        <div className="relative aspect-[1500/1049] overflow-hidden rounded-md border border-line bg-black lg:sticky lg:top-28 lg:self-start">
          <div className="relative h-full w-full">
            <Image src={product.image} alt={`XGENS LABS ${product.name} ${product.line} ${product.size} box`} fill priority sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
          </div>
          {product.badge && (
            <span className="eyebrow absolute left-4 top-4 rounded-sm bg-lime px-3 py-1.5 text-[0.62rem] tracking-[0.18em] text-black">{product.badge}</span>
          )}
        </div>

        <div>
          <p className="eyebrow text-lime">{category.name}</p>
          <h1 className="display mt-3 text-[clamp(2.2rem,4vw,3.4rem)]">{product.name}</h1>
          <p className="mt-2 text-sm uppercase tracking-[0.16em] text-mute">
            {product.line} · {product.size}
          </p>

          <p className="eyebrow mt-8 text-[0.68rem] tracking-[0.2em] text-mute">Per serving</p>
          <dl
            className={`mt-3 grid gap-px overflow-hidden rounded-md border border-line bg-line ${product.stats.length === 4 ? "grid-cols-2 sm:grid-cols-4" : "grid-cols-3"}`}
          >
            {product.stats.map((s) => (
              <div key={s.label} className="flex flex-col items-center bg-panel px-2 py-5 text-center">
                <dt className="order-2 mt-1 text-[0.65rem] uppercase tracking-[0.16em] text-mute">{s.label}</dt>
                <dd className="display order-1 text-2xl">{s.value}</dd>
              </div>
            ))}
          </dl>

          <p className="mt-8 leading-relaxed text-white/80">{product.description}</p>

          <ul className="mt-8 flex flex-wrap gap-2" aria-label="Highlights">
            {product.highlights.map((h) => (
              <li key={h} className="flex items-center gap-2 rounded border border-lime/40 px-4 py-2.5 text-sm text-white/85">
                <Check className="h-4 w-4 text-lime" /> {h}
              </li>
            ))}
          </ul>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/contact" className="btn-lime justify-center">
              Where to buy <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/contact#wholesale" className="btn-ghost justify-center !py-[0.95rem]">
              <Building2 className="h-4 w-4" /> Become a distributor
            </Link>
          </div>

          <ul className="mt-8 grid grid-cols-2 gap-4 border-y border-line py-6 text-xs text-white/80">
            <li className="flex items-center gap-3"><Leaf className="h-5 w-5 text-lime" /> Premium ingredients</li>
            <li className="flex items-center gap-3"><ShieldCheck className="h-5 w-5 text-lime" /> Third-party lab tested</li>
            <li className="flex items-center gap-3"><FlaskConical className="h-5 w-5 text-lime" /> Clinically dosed</li>
            <li className="flex items-center gap-3"><Globe className="h-5 w-5 text-lime" /> Trusted in 20+ countries</li>
          </ul>

          <div className="mt-8 space-y-3">
            <details open className="group rounded-md border border-line bg-panel p-5">
              <summary className="eyebrow -my-2 cursor-pointer list-none py-2 text-white">Key benefits</summary>
              <ul className="mt-4 space-y-2.5">
                {product.benefits.map((b) => (
                  <li key={b} className="flex gap-3 text-sm text-white/80">
                    <Check className="h-4 w-4 shrink-0 text-lime" /> {b}
                  </li>
                ))}
              </ul>
            </details>
            <details className="rounded-md border border-line bg-panel p-5">
              <summary className="eyebrow -my-2 cursor-pointer list-none py-2 text-white">How to use</summary>
              <p className="mt-4 text-sm leading-relaxed text-white/80">{product.usage}</p>
            </details>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] border-t border-line px-4 py-16 sm:px-8 lg:py-20">
        <h2 className="display text-3xl">
          More from <span className="text-lime">XGENS</span>
        </h2>
        <div className="mt-8 grid max-w-3xl gap-5 sm:grid-cols-2">
          {related.map((p) => (
            <ProductCard key={p.slug} product={p} />
          ))}
        </div>
      </section>
    </>
  );
}
