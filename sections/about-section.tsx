"use client";

import { motion } from "framer-motion";

import { SectionHeading } from "@/components/ui/section-heading";

type AboutSectionProps = {
  stats: {
    totalProducts: number;
    pinterestProducts: number;
    categories: number;
    stores: number;
  };
};

export function AboutSection({ stats }: AboutSectionProps) {
  return (
    <section id="about" className="px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <SectionHeading
          eyebrow="About"
          title="APSARIEL turns trend discovery into a refined editorial shopping ritual."
          description="Curated for women who love fashion editorials, Pinterest boards, and premium browsing, the platform pairs scalable catalog architecture with a polished, high-intent user experience."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.5 }}
          className="grid gap-5 sm:grid-cols-2"
        >
          {[
            {
              title: `${stats.totalProducts}+ Curated Products`,
              description: "A large local catalog keeps the storefront launch-ready while leaving room for Pinterest-fed freshness."
            },
            {
              title: `${stats.categories} Style Categories`,
              description: "Every category shares the same scalable discovery feed, so new collections slot in without new templates."
            },
            {
              title: `${stats.stores} Affiliate Destinations`,
              description: "Amazon, Flipkart, Myntra, Ajio, and Meesho are built into the product model from day one."
            },
            {
              title: `${stats.pinterestProducts} Live Synced Pins`,
              description: "When Pinterest sync is configured, fresh pins merge into the catalog automatically with cached server fetching."
            }
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-[1.75rem] border border-black/5 bg-white/85 p-6 shadow-luxe dark:border-white/10 dark:bg-white/5"
            >
              <h3 className="font-serif text-2xl text-ink dark:text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-black/60 dark:text-white/65">{item.description}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
