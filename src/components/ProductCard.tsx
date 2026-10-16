import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Product } from "@/lib/products";

export function ProductCard({ product }: { product: Product }) {
  const href = `/products/${product.slug}`;
  return (
    <article className="group relative flex min-w-0 flex-col overflow-hidden rounded-md border border-line bg-panel transition-colors hover:border-lime/60">
      <Link href={href} className="relative block aspect-[1500/1049] overflow-hidden bg-black">
        <Image
          src={product.image}
          alt={`XGENS LABS ${product.name} ${product.line} box`}
          fill
          sizes="(min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
        />
        {product.badge && (
          <span className="eyebrow absolute left-3 top-3 rounded-sm bg-lime px-2.5 py-1 text-[0.6rem] tracking-[0.18em] text-black">
            {product.badge}
          </span>
        )}
      </Link>
      <div className="flex flex-1 flex-col gap-2 p-3.5 sm:gap-3 sm:p-5">
        <p className="text-[0.7rem] text-mute sm:text-xs">
          {product.size} · {product.stats.slice(0, 2).map((s) => `${s.value} ${s.label.toLowerCase()}`).join(" · ")}
        </p>
        <h3 className="display text-[0.95rem] leading-tight [overflow-wrap:anywhere] sm:text-lg">
          <Link href={href} className="hover:text-lime">
            {product.name}
          </Link>
        </h3>
        <p className="text-[0.65rem] uppercase tracking-[0.12em] text-mute sm:text-xs sm:tracking-[0.15em]">{product.line}</p>
        <Link
          href={href}
          aria-label={`View ${product.name} details`}
          className="eyebrow mt-auto flex items-center gap-2 py-2 text-[0.68rem] tracking-[0.14em] text-lime"
        >
          View details <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </article>
  );
}
