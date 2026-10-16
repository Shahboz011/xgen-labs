import type { MetadataRoute } from "next";
import { absoluteUrl, SITE } from "@/lib/site";

export default function robots(): MetadataRoute.Robots {
  // Keep preview/staging deployments out of search results.
  const isProduction = process.env.VERCEL_ENV ? process.env.VERCEL_ENV === "production" : true;

  return {
    rules: isProduction ? { userAgent: "*", allow: "/" } : { userAgent: "*", disallow: "/" },
    sitemap: absoluteUrl("/sitemap.xml"),
    host: SITE.url,
  };
}
