import { Instagram, Pin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/data/site";
import { getCategoryHref } from "@/lib/utils";
import type { Product } from "@/types/product";

type FooterProps = {
  products: Product[];
};

export function Footer({ products }: FooterProps) {
  const pinterestPreview = products.slice(0, 3);
  const instagramPreview = products.slice(3, 6);

  return (
    <footer className="border-t border-black/5 bg-[#f5efe0] dark:border-white/10 dark:bg-[#120f0e]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:px-6 lg:grid-cols-[1.1fr_0.7fr_0.7fr_1fr] lg:px-8">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-cocoa">About Apsariel</p>
          <h2 className="mt-4 font-serif text-3xl text-ink dark:text-white">
            A luxury fashion discovery platform built for modern moodboard shopping.
          </h2>
          <p className="mt-4 max-w-md text-sm leading-7 text-black/60 dark:text-white/60">
            Browse elegant fashion, beauty, and accessory edits with Pinterest-aware publishing and affiliate-ready product journeys.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <Link
              href={siteConfig.social.pinterest}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-sm text-ink transition hover:border-rose dark:border-white/10 dark:text-white"
            >
              <Pin className="h-4 w-4" />
              Pinterest
            </Link>
            <Link
              href={siteConfig.social.instagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-sm text-ink transition hover:border-rose dark:border-white/10 dark:text-white"
            >
              <Instagram className="h-4 w-4" />
              Instagram
            </Link>
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-cocoa">Trending Categories</p>
          <div className="mt-5 grid gap-3 text-sm text-black/65 dark:text-white/65">
            {siteConfig.trendingCategories.map((category) => (
              <Link
                key={category.slug}
                href={getCategoryHref(category.name)}
                className="transition hover:text-cocoa"
              >
                {category.name}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-cocoa">Quick Links</p>
          <div className="mt-5 grid gap-3 text-sm">
            {siteConfig.navigation.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-black/65 transition hover:text-cocoa dark:text-white/65 dark:hover:text-rose"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="grid gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-cocoa">Pinterest Preview</p>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {pinterestPreview.map((item) => (
                <Link
                  key={item.id}
                  href={`/product/${item.slug}`}
                  className="relative aspect-[2/3] overflow-hidden rounded-[1.25rem]"
                >
                  <Image src={item.image} alt={item.alt} fill className="object-cover" sizes="120px" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-cocoa">Instagram Preview</p>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {instagramPreview.map((item) => (
                <Link
                  key={item.id}
                  href={`/product/${item.slug}`}
                  className="relative aspect-square overflow-hidden rounded-[1.25rem]"
                >
                  <Image src={item.image} alt={item.alt} fill className="object-cover" sizes="120px" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-cocoa">Newsletter Signup</p>
            <form className="mt-4 flex flex-col gap-3">
              <input
                type="email"
                placeholder="Your email for curated drops"
                className="rounded-full border border-black/10 bg-white/90 px-5 py-3 text-sm outline-none transition focus:border-rose dark:border-white/10 dark:bg-white/5 dark:text-white"
              />
              <button
                type="button"
                className="rounded-full bg-ink px-5 py-3 text-sm font-medium text-white transition hover:bg-cocoa dark:bg-white dark:text-ink"
              >
                Join the Edit
              </button>
            </form>
          </div>
        </div>
      </div>

      <div className="border-t border-black/5 px-4 py-5 text-center text-sm text-black/50 dark:border-white/10 dark:text-white/50">
        © Apsariel
      </div>
    </footer>
  );
}
