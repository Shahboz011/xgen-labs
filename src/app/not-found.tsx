import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-[1440px] flex-col items-center px-4 py-32 text-center sm:px-8">
      <p className="display text-8xl text-lime text-glow">404</p>
      <h1 className="display mt-6 text-3xl">Off the program</h1>
      <p className="mt-4 text-white/70">This page doesn&apos;t exist. Let&apos;s get you back to training.</p>
      <Link href="/products" className="btn-lime mt-10">
        View products <ArrowRight className="h-4 w-4" />
      </Link>
    </section>
  );
}
