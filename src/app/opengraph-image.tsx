import { ImageResponse } from "next/og";
import { LIME, OgLogo, ogFonts, ogImageData } from "./_og/shared";

export const alt = "XGENS LABS — Premium sports nutrition. Fuel your next level.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const [hero, fonts] = await Promise.all([ogImageData("hero.jpg"), ogFonts()]);

  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", background: "#070807", position: "relative" }}>
        {/* eslint-disable-next-line @next/next/no-img-element -- ImageResponse renders plain <img> */}
        <img src={hero} alt="" width={720} height={630} style={{ position: "absolute", right: 0, top: 0, width: 720, height: 630, objectFit: "cover", objectPosition: "30% 30%" }} />
        <div style={{ position: "absolute", left: 480, top: 0, width: 300, height: 630, display: "flex", backgroundImage: "linear-gradient(90deg, #070807 0%, rgba(7,8,7,0) 100%)" }} />

        <div style={{ position: "relative", display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 0 0 72px", width: 560 }}>
          <div style={{ display: "flex", width: 330 }}>
            <OgLogo scale={0.85} />
          </div>
          <div style={{ display: "flex", flexDirection: "column", marginTop: 54, fontFamily: "Russo One" }}>
            <div style={{ fontSize: 66, color: "#ffffff", lineHeight: 1.05 }}>FUEL YOUR</div>
            <div style={{ fontSize: 66, color: LIME, lineHeight: 1.05 }}>NEXT LEVEL</div>
          </div>
          <div style={{ fontSize: 25, color: "#c9cdc6", marginTop: 24, lineHeight: 1.4 }}>
            Premium sports nutrition. Lab-tested formulas trusted in 20+ countries.
          </div>
          <div style={{ display: "flex", marginTop: 30, fontFamily: "Michroma", fontSize: 13, letterSpacing: 5, color: "#9aa197" }}>
            SCIENCE / PERFORMANCE / RESULTS
          </div>
        </div>
      </div>
    ),
    { ...size, fonts },
  );
}
