"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronRight, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { formatPrice } from "@/lib/utils";
import type { Product } from "@/types/product";

type HeroSectionProps = {
  products: Product[];
};

export function HeroSection({ products }: HeroSectionProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 110]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % products.length);
    }, 4500);

    return () => clearInterval(timer);
  }, [products.length]);

  const activeProduct = products[activeIndex];

  return (
    <section id="top" className="relative overflow-hidden px-4 pb-10 pt-8 sm:px-6 lg:px-8">
      <div className="absolute inset-0 bg-hero-glow" />
      <div className="absolute inset-0 bg-[url('/images/noise.svg')] opacity-35 mix-blend-multiply" />

      <div className="relative mx-auto grid max-w-7xl gap-8 lg:grid-cols-[1.18fr_0.82fr]">
        <motion.div
          style={{ y }}
          className="relative min-h-[640px] overflow-hidden rounded-[2.75rem] border border-white/40 bg-[#f7efe1] shadow-float dark:border-white/10 dark:bg-[#1a1513]"
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={false}
              animate={{ opacity: index === activeIndex ? 1 : 0, scale: index === activeIndex ? 1 : 1.05 }}
              transition={{ duration: 0.85, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <Image
                src={product.image}
                alt={product.alt}
                fill
                priority={index === 0}
                sizes="(max-width: 1200px) 100vw, 65vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-transparent" />
            </motion.div>
          ))}

          <div className="relative z-10 flex h-full flex-col justify-between p-8 sm:p-10">
            <div className="flex flex-wrap gap-3">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.32em] text-white backdrop-blur-md">
                <Sparkles className="h-3.5 w-3.5" />
                Premium fashion discovery
              </span>
              <span className="rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs uppercase tracking-[0.32em] text-white/80 backdrop-blur-md">
                Pinterest synced
              </span>
            </div>

            <motion.div
              key={activeProduct.id}
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="max-w-2xl"
            >
              <p className="text-xs uppercase tracking-[0.35em] text-white/75">Luxury fashion editorial</p>
              <h1 className="mt-5 font-serif text-5xl leading-[0.95] text-white sm:text-6xl lg:text-7xl">
                Discover trending women&apos;s fashion with a collector&apos;s eye.
              </h1>
              <p className="mt-5 max-w-xl text-base leading-7 text-white/82">
                APSARIEL blends Pinterest-style discovery, Vogue-inspired layout, and affiliate-ready shopping across Amazon, Flipkart, Myntra, Ajio, and Meesho.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/shop"
                  className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-ink transition hover:-translate-y-0.5"
                >
                  Explore Trends
                  <ChevronRight className="h-4 w-4" />
                </Link>
                <Link
                  href={`/product/${activeProduct.slug}`}
                  className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/[0.15]"
                >
                  Shop the hero edit
                </Link>
              </div>
            </motion.div>

            <div className="flex flex-wrap items-end gap-4">
              <div className="rounded-[1.75rem] border border-white/[0.18] bg-white/10 px-5 py-4 text-white backdrop-blur-md">
                <p className="text-xs uppercase tracking-[0.24em] text-white/70">{activeProduct.title}</p>
                <p className="mt-2 font-serif text-2xl">{formatPrice(activeProduct.price, activeProduct.currency)}</p>
              </div>
              <div className="flex gap-2">
                {products.map((product, index) => (
                  <button
                    key={product.id}
                    type="button"
                    onClick={() => setActiveIndex(index)}
                    className={`h-2.5 rounded-full transition ${index === activeIndex ? "w-10 bg-white" : "w-2.5 bg-white/45"}`}
                    aria-label={`Show ${product.title}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        <div className="grid gap-6">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
            className="rounded-[2rem] border border-black/5 bg-white/80 p-6 shadow-luxe backdrop-blur dark:border-white/10 dark:bg-white/5"
          >
            <p className="text-xs uppercase tracking-[0.35em] text-cocoa">Editor&apos;s Pick</p>
            <h2 className="mt-4 font-serif text-3xl text-ink dark:text-white">{activeProduct.title}</h2>
            <p className="mt-3 text-sm leading-7 text-black/60 dark:text-white/65">{activeProduct.description}</p>
            <div className="mt-6 flex items-center justify-between">
              <div>
                <p className="text-lg font-medium text-ink dark:text-white">
                  {formatPrice(activeProduct.price, activeProduct.currency)}
                </p>
                <p className="text-sm text-black/40 line-through dark:text-white/35">
                  {formatPrice(activeProduct.originalPrice, activeProduct.currency)}
                </p>
              </div>
              <Link
                href={`/product/${activeProduct.slug}`}
                className="rounded-full border border-black/10 px-4 py-2 text-sm font-medium text-ink transition hover:border-rose hover:text-cocoa dark:border-white/10 dark:text-white"
              >
                Shop Edit
              </Link>
            </div>
          </motion.div>

          <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
            {products.map((product, index) => (
              <motion.button
                key={product.id}
                type="button"
                onClick={() => setActiveIndex(index)}
                whileHover={{ y: -4 }}
                className={`rounded-[1.75rem] border p-4 text-left transition ${
                  index === activeIndex
                    ? "border-rose bg-rose/[0.15] shadow-luxe"
                    : "border-black/5 bg-white/70 dark:border-white/10 dark:bg-white/5"
                }`}
              >
                <p className="text-xs uppercase tracking-[0.25em] text-cocoa">{product.category}</p>
                <p className="mt-2 font-serif text-xl text-ink dark:text-white">{product.title}</p>
                <p className="mt-2 text-sm text-black/55 dark:text-white/60">{product.store}</p>
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
