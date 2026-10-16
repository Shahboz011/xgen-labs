import type { MetadataRoute } from "next";
import { products } from "@/lib/products";
import { absoluteUrl, SITE } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = SITE.updated;

  return [
    { url: absoluteUrl("/"), lastModified, changeFrequency: "weekly", priority: 1, images: [absoluteUrl("/img/hero-boxes.webp")] },
    { url: absoluteUrl("/products"), lastModified, changeFrequency: "weekly", priority: 0.9 },
    ...products.map((p) => ({
      url: absoluteUrl(`/products/${p.slug}`),
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      images: [absoluteUrl(p.image)],
    })),
    { url: absoluteUrl("/about"), lastModified, changeFrequency: "monthly", priority: 0.6 },
    { url: absoluteUrl("/contact"), lastModified, changeFrequency: "yearly", priority: 0.5 },
  ];
}
