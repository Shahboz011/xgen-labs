import { useId } from "react";

/**
 * XGENS LABS brand mark, redrawn in vector from the client's logo:
 * a white chevron and a lime chevron forming the X, metallic extended "GENS",
 * and lime spaced "LABS" between two rules.
 * TODO: replace with the official vector file once supplied (public/brand/logo.svg).
 */
export function XMark({ className = "" }: { className?: string }) {
  const id = useId();
  return (
    <svg viewBox="170 293 367 249" className={className} aria-hidden="true">
      <defs>
        <linearGradient id={`${id}-w`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#ffffff" />
          <stop offset="0.55" stopColor="#d9dcd7" />
          <stop offset="1" stopColor="#f3f4f2" />
        </linearGradient>
        <linearGradient id={`${id}-g`} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#d4ff1a" />
          <stop offset="1" stopColor="#7fc21b" />
        </linearGradient>
      </defs>
      {/* white ">" chevron */}
      <polygon points="172,295 270,295 393,418 268,540 172,540 296,418" fill={`url(#${id}-w)`} />
      {/* lime upper and lower arms */}
      <polygon points="450,295 535,295 412,418 372,395" fill={`url(#${id}-g)`} />
      <polygon points="372,462 412,423 535,540 450,540" fill={`url(#${id}-g)`} />
    </svg>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex flex-col leading-none select-none ${className}`} role="img" aria-label="XGENS LABS">
      <span className="flex items-end">
        <XMark className="h-[2.05em] w-auto" />
        <span
          aria-hidden="true"
          className="bg-[linear-gradient(180deg,#ffffff_0%,#eceee9_55%,#c9cdc6_100%)] bg-clip-text text-transparent -ml-[0.02em] mb-[0.06em] font-[family-name:var(--font-logo)] text-[1.62em] leading-none tracking-[0.03em] [-webkit-text-stroke:0.05em_#eceee9]"
        >
          GENS
        </span>
      </span>
      <span aria-hidden="true" className="mt-[0.4em] flex items-center gap-[0.55em]">
        <span className="h-[1.5px] flex-1 bg-lime" />
        <span className="font-[family-name:var(--font-logo)] text-[0.6em] tracking-[0.95em] -mr-[0.95em] text-lime">LABS</span>
        <span className="h-[1.5px] flex-1 bg-lime" />
      </span>
    </span>
  );
}
