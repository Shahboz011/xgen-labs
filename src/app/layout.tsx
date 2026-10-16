import type { Metadata, Viewport } from "next";
import { Michroma, Montserrat, Permanent_Marker, Saira } from "next/font/google";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { JsonLd } from "@/components/JsonLd";
import { absoluteUrl, SITE } from "@/lib/site";
import "./globals.css";

const display = Saira({
  variable: "--font-display",
  subsets: ["latin", "latin-ext"],
  axes: ["wdth"],
});

const body = Montserrat({
  variable: "--font-body",
  subsets: ["latin", "latin-ext", "cyrillic"],
});

// Extended rounded face that matches the "GENS / LABS" lettering in the brand logo
const logo = Michroma({
  variable: "--font-logo",
  weight: "400",
  subsets: ["latin"],
});

const brush = Permanent_Marker({
  variable: "--font-brush",
  weight: "400",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SITE.title,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  applicationName: SITE.name,
  keywords: [...SITE.keywords],
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  category: "Sports nutrition",
  alternates: { canonical: "/" },
  formatDetection: { telephone: false, address: false, email: false },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 },
  },
  openGraph: {
    type: "website",
    siteName: SITE.name,
    locale: SITE.locale,
    url: "/",
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} — ${SITE.tagline}`,
    description: SITE.description,
  },
  // Search Console / Bing verification tokens, set via environment variables when available.
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
    other: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION
      ? { "msvalidate.01": process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION }
      : undefined,
  },
};

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": absoluteUrl("/#organization"),
  name: SITE.name,
  url: SITE.url,
  logo: absoluteUrl("/icon-512.png"),
  description: SITE.description,
  email: SITE.email,
  ...(SITE.sameAs.length > 0 && { sameAs: SITE.sameAs }),
  contactPoint: [
    { "@type": "ContactPoint", contactType: "customer support", email: SITE.email, availableLanguage: ["English"] },
    { "@type": "ContactPoint", contactType: "sales", email: SITE.wholesaleEmail, availableLanguage: ["English"] },
  ],
};

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": absoluteUrl("/#website"),
  name: SITE.name,
  url: SITE.url,
  inLanguage: "en",
  publisher: { "@id": absoluteUrl("/#organization") },
};

export const viewport: Viewport = {
  themeColor: "#070807",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${display.variable} ${body.variable} ${brush.variable} ${logo.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <JsonLd data={[organizationLd, websiteLd]} />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
