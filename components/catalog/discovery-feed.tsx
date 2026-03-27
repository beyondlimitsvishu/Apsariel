"use client";

import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { startTransition, useDeferredValue, useEffect, useMemo, useRef, useState } from "react";

import { ProductCard } from "@/components/ui/product-card";
import { ProductSkeleton } from "@/components/ui/product-skeleton";
import { SectionHeading } from "@/components/ui/section-heading";
import { siteConfig } from "@/data/site";
import { cn } from "@/lib/utils";
import type { Product, ProductCategory, StoreName } from "@/types/product";
import { STORES } from "@/types/product";

type DiscoveryFeedProps = {
  products: Product[];
  eyebrow: string;
  title: string;
  description: string;
  enableFilters?: boolean;
  initialSearch?: string;
  initialCategory?: ProductCategory | "All categories";
  initialStore?: StoreName | "All stores";
  emptyMessage?: string;
};

const PAGE_SIZE = 12;

export function DiscoveryFeed({
  products,
  eyebrow,
  title,
  description,
  enableFilters = true,
  initialSearch = "",
  initialCategory = "All categories",
  initialStore = "All stores",
  emptyMessage = "No products match this edit yet. Try another category, store, or search term."
}: DiscoveryFeedProps) {
  const [search, setSearch] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] =
    useState<ProductCategory | "All categories">(initialCategory);
  const [selectedStore, setSelectedStore] = useState<StoreName | "All stores">(initialStore);
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [loadingMore, setLoadingMore] = useState(false);
  const sentinelRef = useRef<HTMLDivElement | null>(null);
  const deferredSearch = useDeferredValue(search);

  const categoryOptions = useMemo(
    () => ["All categories", ...siteConfig.categories.map((item) => item.name)] as Array<
      ProductCategory | "All categories"
    >,
    []
  );
  const storeOptions = useMemo(() => ["All stores", ...STORES] as Array<StoreName | "All stores">, []);

  const filteredProducts = useMemo(() => {
    const normalized = deferredSearch.trim().toLowerCase();

    return products.filter((product) => {
      const matchesSearch =
        !normalized ||
        [product.title, product.description, product.category, product.store, ...product.tags]
          .join(" ")
          .toLowerCase()
          .includes(normalized);

      const matchesCategory =
        selectedCategory === "All categories" || product.category === selectedCategory;

      const matchesStore = selectedStore === "All stores" || product.store === selectedStore;

      return matchesSearch && matchesCategory && matchesStore;
    });
  }, [deferredSearch, products, selectedCategory, selectedStore]);

  useEffect(() => {
    setVisibleCount(PAGE_SIZE);
  }, [deferredSearch, selectedCategory, selectedStore]);

  useEffect(() => {
    const target = sentinelRef.current;

    if (!target) {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];

        if (!entry?.isIntersecting || visibleCount >= filteredProducts.length) {
          return;
        }

        setLoadingMore(true);

        window.setTimeout(() => {
          setVisibleCount((current) => Math.min(current + PAGE_SIZE, filteredProducts.length));
          setLoadingMore(false);
        }, 450);
      },
      { rootMargin: "420px" }
    );

    observer.observe(target);

    return () => observer.disconnect();
  }, [filteredProducts.length, visibleCount]);

  const visibleProducts = filteredProducts.slice(0, visibleCount);
  const pinterestCount = filteredProducts.filter((product) => product.source === "pinterest").length;

  return (
    <section id="shop" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow={eyebrow} title={title} description={description} />

        <div className="mt-8 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.28em] text-cocoa">
          <span className="rounded-full border border-black/10 bg-white/75 px-4 py-2 dark:border-white/10 dark:bg-white/5">
            {filteredProducts.length} products
          </span>
          <span className="rounded-full border border-black/10 bg-white/75 px-4 py-2 dark:border-white/10 dark:bg-white/5">
            {pinterestCount} synced from Pinterest
          </span>
          <span className="rounded-full border border-black/10 bg-white/75 px-4 py-2 dark:border-white/10 dark:bg-white/5">
            Infinite discovery enabled
          </span>
        </div>

        {enableFilters ? (
          <div className="mt-8 rounded-[2rem] border border-black/[0.08] bg-white/75 p-4 shadow-sm backdrop-blur-xl dark:border-white/10 dark:bg-white/5">
            <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr_0.8fr]">
              <label className="flex items-center gap-3 rounded-full border border-black/10 bg-[#f7f1e4] px-5 py-3 dark:border-white/10 dark:bg-[#1d1714]">
                <Search className="h-4 w-4 text-black/40 dark:text-white/45" />
                <input
                  type="search"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  placeholder="Search dresses, sarees, jewelry, beauty..."
                  className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-black/45 dark:text-white dark:placeholder:text-white/40"
                />
              </label>

              <select
                value={selectedCategory}
                onChange={(event) =>
                  startTransition(() =>
                    setSelectedCategory(event.target.value as ProductCategory | "All categories")
                  )
                }
                className="rounded-full border border-black/10 bg-white px-5 py-3 text-sm text-ink outline-none dark:border-white/10 dark:bg-[#1d1714] dark:text-white"
              >
                {categoryOptions.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>

              <select
                value={selectedStore}
                onChange={(event) =>
                  startTransition(() => setSelectedStore(event.target.value as StoreName | "All stores"))
                }
                className="rounded-full border border-black/10 bg-white px-5 py-3 text-sm text-ink outline-none dark:border-white/10 dark:bg-[#1d1714] dark:text-white"
              >
                {storeOptions.map((store) => (
                  <option key={store} value={store}>
                    {store}
                  </option>
                ))}
              </select>
            </div>

            <div className="mt-4 flex flex-wrap gap-2">
              {categoryOptions.map((category) => (
                <button
                  key={category}
                  type="button"
                  onClick={() =>
                    startTransition(() => setSelectedCategory(category as ProductCategory | "All categories"))
                  }
                  className={cn(
                    "rounded-full px-4 py-2 text-xs font-medium uppercase tracking-[0.2em] transition",
                    selectedCategory === category
                      ? "bg-ink text-white dark:bg-white dark:text-ink"
                      : "border border-black/10 bg-white/70 text-ink hover:border-rose dark:border-white/10 dark:bg-white/5 dark:text-white"
                  )}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        ) : null}

        {visibleProducts.length ? (
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.5 }}
            className="mt-10 columns-1 gap-6 md:columns-2 xl:columns-4"
          >
            {visibleProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}

            {loadingMore
              ? Array.from({ length: 4 }).map((_, index) => <ProductSkeleton key={`skeleton-${index}`} />)
              : null}
          </motion.div>
        ) : (
          <div className="mt-10 rounded-[2rem] border border-dashed border-black/[0.15] bg-white/65 px-6 py-16 text-center text-sm text-black/60 dark:border-white/10 dark:bg-white/5 dark:text-white/60">
            {emptyMessage}
          </div>
        )}

        <div ref={sentinelRef} className="h-10 w-full" />
      </div>
    </section>
  );
}
