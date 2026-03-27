"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { PinterestSaveButton } from "@/components/ui/pinterest-save-button";
import { StoreBadge } from "@/components/ui/store-badge";
import { formatPrice, getCategoryHref } from "@/lib/utils";
import type { Product } from "@/types/product";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <motion.article
      layout
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.18 }}
      transition={{ duration: 0.45, ease: "easeOut" }}
      className="group mb-6 break-inside-avoid overflow-hidden rounded-[2rem] border border-black/6 bg-white/92 p-3 shadow-sm transition hover:-translate-y-1 hover:shadow-float dark:border-white/10 dark:bg-white/5"
    >
      <div className="relative overflow-hidden rounded-[1.6rem]">
        <div className="absolute right-3 top-3 z-20">
          <PinterestSaveButton
            url={`https://apsariel.vercel.app/product/${product.slug}`}
            media={product.image}
            description={product.title}
          />
        </div>

        <Link href={`/product/${product.slug}`} className="block">
          <div className="relative aspect-[2/3] overflow-hidden rounded-[1.6rem] bg-[#ede6d8]">
            <Image
              src={product.image}
              alt={product.alt}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
              className="object-cover transition duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-80" />
          </div>
        </Link>
      </div>

      <div className="px-1 pb-1 pt-4">
        <div className="mb-3 flex items-center justify-between gap-3">
          <Link
            href={getCategoryHref(product.category)}
            className="text-xs uppercase tracking-[0.26em] text-cocoa transition hover:text-ink dark:hover:text-white"
          >
            {product.category}
          </Link>
          <StoreBadge store={product.store} />
        </div>

        <div className="mb-3 flex items-center gap-2 text-[11px] uppercase tracking-[0.24em] text-black/45 dark:text-white/45">
          <span className="inline-flex items-center gap-1">
            <Sparkles className="h-3.5 w-3.5" />
            {product.source === "pinterest" ? "Pinterest sync" : "Local edit"}
          </span>
        </div>

        <h3 className="font-serif text-[1.8rem] leading-tight text-ink dark:text-white">{product.title}</h3>
        <p className="mt-2 text-sm leading-6 text-black/[0.62] dark:text-white/65">{product.description}</p>

        <div className="mt-5 flex items-end justify-between gap-3">
          <div>
            <p className="text-lg font-medium text-ink dark:text-white">
              {formatPrice(product.price, product.currency)}
            </p>
            <p className="text-sm text-black/[0.38] line-through dark:text-white/35">
              {formatPrice(product.originalPrice, product.currency)}
            </p>
          </div>

          <Link
            href={`/product/${product.slug}`}
            className="inline-flex items-center gap-2 rounded-full border border-black/10 bg-[#f5ecdf] px-4 py-2 text-sm font-medium text-ink transition duration-300 group-hover:translate-x-1 group-hover:border-rose group-hover:bg-rose/20 dark:border-white/10 dark:bg-white/10 dark:text-white"
          >
            View Product
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
