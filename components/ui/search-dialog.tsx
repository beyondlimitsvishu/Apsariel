"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Search, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useDeferredValue, useMemo, useState } from "react";

import { StoreBadge } from "@/components/ui/store-badge";
import { formatPrice } from "@/lib/utils";
import type { Product } from "@/types/product";

type SearchDialogProps = {
  products: Product[];
};

export function SearchDialog({ products }: SearchDialogProps) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);

  const filtered = useMemo(() => {
    const normalized = deferredQuery.trim().toLowerCase();

    if (!normalized) {
      return products.slice(0, 6);
    }

    return products
      .filter((product) =>
        [product.title, product.category, product.description, product.store, ...product.tags]
          .join(" ")
          .toLowerCase()
          .includes(normalized)
      )
      .slice(0, 8);
  }, [deferredQuery, products]);

  return (
    <>
      <button
        type="button"
        aria-label="Open search"
        onClick={() => setOpen(true)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/80 text-ink transition duration-300 hover:-translate-y-0.5 hover:border-rose hover:text-cocoa dark:border-white/10 dark:bg-white/10 dark:text-white"
      >
        <Search className="h-4 w-4" />
      </button>

      <AnimatePresence>
        {open ? (
          <motion.div
            className="fixed inset-0 z-[70] bg-black/40 px-4 py-8 backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="mx-auto mt-8 max-w-4xl rounded-[2rem] border border-white/20 bg-white/95 p-6 shadow-float dark:border-white/10 dark:bg-[#161211]/95"
            >
              <div className="mb-5 flex items-start justify-between gap-4">
                <div>
                  <p className="font-serif text-3xl text-ink dark:text-white">Search the editorial catalog</p>
                  <p className="mt-2 text-sm text-black/55 dark:text-white/60">
                    Search by product title, category, store, or trend keywords.
                  </p>
                </div>
                <button
                  type="button"
                  aria-label="Close search"
                  onClick={() => setOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-ink transition hover:border-rose dark:border-white/10 dark:text-white"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="flex items-center gap-3 rounded-full border border-black/10 bg-[#f4ecdf] px-5 py-3 dark:border-white/10 dark:bg-white/5">
                <Search className="h-4 w-4 text-black/45 dark:text-white/45" />
                <input
                  autoFocus
                  type="search"
                  placeholder="Try: sarees, Meesho, rose gold, beauty..."
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  className="w-full bg-transparent text-sm text-ink outline-none placeholder:text-black/40 dark:text-white dark:placeholder:text-white/35"
                />
              </div>

              <div className="mt-6 grid gap-3">
                {filtered.length ? (
                  filtered.map((product) => (
                    <Link
                      key={product.id}
                      href={`/product/${product.slug}`}
                      onClick={() => setOpen(false)}
                      className="group flex items-center gap-4 rounded-[1.5rem] border border-black/5 bg-white p-3 transition hover:-translate-y-0.5 hover:border-rose/50 hover:shadow-luxe dark:border-white/10 dark:bg-white/5"
                    >
                      <div className="relative h-24 w-20 overflow-hidden rounded-[1.25rem]">
                        <Image
                          src={product.image}
                          alt={product.alt}
                          fill
                          className="object-cover transition duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="truncate text-xs uppercase tracking-[0.22em] text-cocoa">{product.category}</p>
                        <p className="mt-1 truncate font-medium text-ink dark:text-white">{product.title}</p>
                        <p className="mt-1 text-sm text-black/55 dark:text-white/60">
                          {formatPrice(product.price, product.currency)}
                        </p>
                      </div>
                      <StoreBadge store={product.store} className="hidden md:inline-flex" />
                    </Link>
                  ))
                ) : (
                  <div className="rounded-[1.5rem] border border-dashed border-black/10 px-5 py-8 text-center text-sm text-black/55 dark:border-white/10 dark:text-white/55">
                    No products matched that search yet. Try category names, stores, or softer style keywords.
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
