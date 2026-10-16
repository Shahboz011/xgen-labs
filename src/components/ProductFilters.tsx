"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { Search } from "lucide-react";
import { categories, products, type CategoryId, type Product } from "@/lib/products";

/** Category tabs and search for the product catalog. Cards are rendered on the server and passed in by slug. */
export function ProductFilters({ cards }: { cards: Record<string, React.ReactNode> }) {
  const params = useSearchParams();
  const router = useRouter();
  const active = (params.get("category") as CategoryId | null) ?? "all";
  const [query, setQuery] = useState("");
  const tabsRef = useRef<HTMLDivElement>(null);

  // Keep the selected category visible in the horizontally scrolling tab row on phones.
  useEffect(() => {
    const row = tabsRef.current;
    const tab = row?.querySelector<HTMLElement>("[aria-selected=true]");
    if (!row || !tab) return;
    const offset = tab.getBoundingClientRect().left - row.getBoundingClientRect().left + row.scrollLeft;
    row.scrollTo({ left: offset - (row.clientWidth - tab.clientWidth) / 2 });
  }, [active]);

  const list = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter(
      (p: Product) =>
        (active === "all" || p.category === active) &&
        (!q || `${p.name} ${p.line} ${p.highlights.join(" ")}`.toLowerCase().includes(q)),
    );
  }, [active, query]);

  const setCategory = (id: string) => {
    router.replace(id === "all" ? "/products" : `/products?category=${id}`, { scroll: false });
  };

  const tabs = [{ id: "all", name: "All" }, ...categories];

  return (
    <>
      <div className="flex flex-col gap-4 border-b border-line pb-6 lg:flex-row lg:items-center lg:justify-between">
        <div ref={tabsRef} className="-mx-4 flex gap-2 overflow-x-auto px-4 [scrollbar-width:none] sm:mx-0 sm:flex-wrap sm:px-0" role="tablist" aria-label="Categories">
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={active === t.id}
              onClick={() => setCategory(t.id)}
              className={`eyebrow shrink-0 rounded border px-4 py-2.5 text-[0.68rem] tracking-[0.14em] transition-colors ${
                active === t.id ? "border-lime bg-lime text-black" : "border-line text-white/80 hover:border-lime/60 hover:text-white"
              }`}
            >
              {t.name}
            </button>
          ))}
        </div>
        <label className="flex min-w-0 items-center gap-2 rounded border border-line px-3 focus-within:border-lime lg:w-72">
          <Search className="h-4 w-4 text-mute" />
          <span className="sr-only">Search products</span>
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products…"
            className="min-w-0 flex-1 bg-transparent py-2.5 text-sm outline-none placeholder:text-mute"
          />
        </label>
      </div>

      <p className="mt-6 text-sm text-mute">
        {list.length} {list.length === 1 ? "product" : "products"}
      </p>

      {list.length === 0 ? (
        <p className="py-24 text-center text-white/70">No products match your search.</p>
      ) : (
        <div className="mt-6 grid max-w-5xl gap-5 sm:grid-cols-2">
          {list.map((p) => (
            <div key={p.slug}>{cards[p.slug]}</div>
          ))}
        </div>
      )}
    </>
  );
}
