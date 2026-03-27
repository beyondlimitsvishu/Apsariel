"use client";

import Image from "next/image";
import Link from "next/link";

import { StoreBadge } from "@/components/ui/store-badge";
import { SectionHeading } from "@/components/ui/section-heading";
import { formatPrice } from "@/lib/utils";
import type { Product } from "@/types/product";

type TrendingSectionProps = {
  products: Product[];
};

export function TrendingSection({ products }: TrendingSectionProps) {
  const marqueeProducts = [...products, ...products];

  return (
    <section id="trending" className="overflow-hidden px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Trending Now"
          title="An auto-moving rail of luxury edits gaining saves, clicks, and shopping momentum."
          description="The trending carousel uses a continuous marquee motion, pauses on hover, and keeps discovery feeling alive without overwhelming the page."
        />

        <div className="group mt-10 overflow-hidden">
          <div className="flex w-max gap-6 animate-marquee group-hover:[animation-play-state:paused]">
            {marqueeProducts.map((product, index) => (
              <article
                key={`${product.id}-${index}`}
                className="group/card min-w-[320px] max-w-[320px] overflow-hidden rounded-[2rem] border border-black/5 bg-white/92 shadow-luxe dark:border-white/10 dark:bg-white/5"
              >
                <Link href={`/product/${product.slug}`} className="block">
                  <div className="relative aspect-[4/5] overflow-hidden">
                    <Image
                      src={product.image}
                      alt={product.alt}
                      fill
                      sizes="320px"
                      className="object-cover transition duration-700 group-hover/card:scale-105"
                    />
                  </div>
                </Link>
                <div className="p-5">
                  <div className="flex items-center justify-between gap-3">
                    <p className="text-xs uppercase tracking-[0.25em] text-cocoa">{product.category}</p>
                    <StoreBadge store={product.store} />
                  </div>
                  <h3 className="mt-3 font-serif text-2xl text-ink dark:text-white">{product.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-black/60 dark:text-white/65">
                    {product.description}
                  </p>
                  <div className="mt-5 flex items-center justify-between">
                    <p className="text-lg font-medium text-ink dark:text-white">
                      {formatPrice(product.price, product.currency)}
                    </p>
                    <Link
                      href={`/product/${product.slug}`}
                      className="text-sm font-medium text-ink transition hover:text-cocoa dark:text-white"
                    >
                      View product
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
