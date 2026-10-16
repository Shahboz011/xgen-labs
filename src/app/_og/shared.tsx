import { readFile } from "node:fs/promises";
import { join } from "node:path";

/** Shared pieces for the generated share images (opengraph-image.tsx files). */

export const LIME = "#c4f000";
const dir = join(process.cwd(), "src/app/_og");

async function readBase64(name: string) {
  "use cache";
  return (await readFile(join(dir, name))).toString("base64");
}

/** JPEG in src/app/_og as a data URL (Satori can't read WebP). */
export async function ogImageData(name: string) {
  return `data:image/jpeg;base64,${await readBase64(name)}`;
}

/** Michroma (logo wordmark) and Russo One (headlines), both SIL Open Font License. */
export async function ogFonts() {
  const [michroma, russo] = await Promise.all([readBase64("Michroma-Regular.ttf"), readBase64("RussoOne-Regular.ttf")]);
  return [
    { name: "Michroma", data: Buffer.from(michroma, "base64"), weight: 400 as const, style: "normal" as const },
    { name: "Russo One", data: Buffer.from(russo, "base64"), weight: 400 as const, style: "normal" as const },
  ];
}

export function OgLogo({ scale = 1 }: { scale?: number }) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ display: "flex", alignItems: "flex-end" }}>
        <svg width={96 * scale} height={65 * scale} viewBox="170 293 367 249">
          <polygon points="172,295 270,295 393,418 268,540 172,540 296,418" fill="#ececec" />
          <polygon points="450,295 535,295 412,418 372,395" fill={LIME} />
          <polygon points="372,462 412,423 535,540 450,540" fill={LIME} />
        </svg>
        <div style={{ fontFamily: "Michroma", fontSize: 50 * scale, color: "#f2f4f0", marginLeft: 2, lineHeight: 1, marginBottom: 4 * scale }}>
          GENS
        </div>
      </div>
      <div style={{ display: "flex", alignItems: "center", marginTop: 12 * scale }}>
        <div style={{ flex: 1, height: 2, background: LIME }} />
        <div style={{ fontFamily: "Michroma", color: LIME, fontSize: 17 * scale, letterSpacing: 16 * scale, margin: `0 ${2 * scale}px 0 ${26 * scale}px` }}>
          LABS
        </div>
        <div style={{ flex: 1, height: 2, background: LIME }} />
      </div>
    </div>
  );
}
