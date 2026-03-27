"use client";

import { motion } from "framer-motion";
import Link from "next/link";

import { siteConfig } from "@/data/site";
import { getCategoryHref } from "@/lib/utils";

export function CategoryShowcase() {
  const fashionCategories = siteConfig.categories.filter((category) =>
    ["Kurtas", "Sarees", "Co-ords", "Western wear"].includes(category.name)
  );
  const beautyCategories = siteConfig.categories.filter((category) =>
    ["Beauty products", "Accessories", "Jewelry"].includes(category.name)
  );

  return (
    <section className="px-4 py-10 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-2">
        {[
          {
            id: "fashion",
            eyebrow: "Fashion",
            title: "Modern silhouettes, dramatic drapes, and high-save wardrobe edits.",
            description:
              "From elegant kurtas to Western wear and elevated co-ords, the fashion side of APSARIEL is built for long-form discovery.",
            items: fashionCategories
          },
          {
            id: "beauty",
            eyebrow: "Beauty",
            title: "Soft-glam beauty, jewelry, and finishing touches with editorial polish.",
            description:
              "Beauty products, accessories, and high-shine jewelry bring the second half of the moodboard into focus.",
            items: beautyCategories
          }
        ].map((column, index) => (
          <motion.div
            key={column.id}
            id={column.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            className="rounded-[2.25rem] border border-black/5 bg-white/82 p-8 shadow-luxe dark:border-white/10 dark:bg-white/5"
          >
            <p className="text-xs uppercase tracking-[0.35em] text-cocoa">{column.eyebrow}</p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-ink dark:text-white">{column.title}</h2>
            <p className="mt-4 text-base leading-7 text-black/60 dark:text-white/65">{column.description}</p>

            <div className="mt-6 grid gap-3">
              {column.items.map((item) => (
                <Link
                  key={item.slug}
                  href={getCategoryHref(item.name)}
                  className="rounded-[1.25rem] border border-black/10 bg-[#f4ecdf] px-4 py-4 text-sm text-ink transition hover:-translate-y-0.5 hover:border-rose dark:border-white/10 dark:bg-white/10 dark:text-white"
                >
                  <p className="font-medium">{item.name}</p>
                  <p className="mt-1 text-black/55 dark:text-white/55">{item.description}</p>
                </Link>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
