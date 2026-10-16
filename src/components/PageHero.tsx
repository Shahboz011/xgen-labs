export function PageHero({ eyebrow, title, accent, children }: { eyebrow: string; title: string; accent?: string; children?: React.ReactNode }) {
  return (
    <section className="relative overflow-hidden border-b border-line bg-coal">
      <div className="stripes absolute inset-y-0 right-0 w-2/3 opacity-70 [mask-image:linear-gradient(to_left,black,transparent)]" />
      <div className="relative mx-auto max-w-[1440px] px-4 py-16 sm:px-8 lg:py-20">
        <p className="eyebrow text-lime">{eyebrow}</p>
        <h1 className="display mt-4 text-[clamp(2.4rem,5vw,4.2rem)]">
          <span className="chrome">{title}</span>
          {accent && <span className="text-glow block text-lime">{accent}</span>}
        </h1>
        {children && <div className="mt-5 max-w-xl leading-relaxed text-white/75">{children}</div>}
      </div>
    </section>
  );
}
