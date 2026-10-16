import { basename } from "node:path";
import { ImageResponse } from "next/og";
import { getProduct, products } from "@/lib/products";
import { LIME, OgLogo, ogFonts, ogImageData } from "../../_og/shared";

export const alt = "XGENS LABS product";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductOgImage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = getProduct(slug) ?? products[0];
  const [shot, fonts] = await Promise.all([ogImageData(basename(product.image).replace(/\.webp$/, ".jpg")), ogFonts()]);

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#070807", position: "relative" }}>
        {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse renders plain <img> */}
        <img src={shot} alt="" width={640} height={630} style={{ position: "absolute", right: 0, top: 0, width: 640, height: 630, objectFit: "cover", objectPosition: "60% 50%" }} />
        <div style={{ position: "absolute", left: 560, top: 0, width: 220, height: 630, display: "flex", backgroundImage: "linear-gradient(90deg, #070807 0%, rgba(7,8,7,0) 100%)" }} />

        <div style={{ position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 0 0 64px", width: 580 }}>
          <div style={{ display: "flex", width: 240 }}>
            <OgLogo scale={0.6} />
          </div>

          <div style={{ display: "flex", flexDirection: "column", fontFamily: "Russo One", lineHeight: 1, marginTop: 44 }}>
            <div style={{ fontSize: 64, color: "#ffffff" }}>{product.name.split(" ")[0].toUpperCase()}</div>
            <div style={{ fontSize: 64, color: "#ff2a1f" }}>{product.name.split(" ").slice(1).join(" ").toUpperCase()}</div>
          </div>
          <div style={{ display: "flex", fontFamily: "Michroma", fontSize: 17, color: LIME, marginTop: 18, letterSpacing: 3 }}>
            {product.line.toUpperCase()}
          </div>

          <div style={{ display: "flex", marginTop: 40 }}>
            {product.stats.map((s) => (
              <div key={s.label} style={{ display: "flex", flexDirection: "column", marginRight: 16, paddingLeft: 10, borderLeft: `3px solid ${LIME}` }}>
                <div style={{ fontFamily: "Russo One", fontSize: 29, color: "#ffffff" }}>{s.value}</div>
                <div style={{ fontSize: 13, color: "#9aa197", textTransform: "uppercase", letterSpacing: 0.5, marginTop: 4 }}>{s.label}</div>
              </div>
            ))}
          </div>

          <div style={{ display: "flex", fontSize: 18, color: "#9aa197", marginTop: 34 }}>
            Per serving · {product.size}
          </div>
        </div>
      </div>
    ),
    { ...size, fonts },
  );
}
