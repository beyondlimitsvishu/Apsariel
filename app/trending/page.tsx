import type { Metadata } from "next";

import { DiscoveryFeed } from "@/components/catalog/discovery-feed";
import { PageHero } from "@/components/ui/page-hero";
import { siteConfig } from "@/data/site";
import { getTrendingProducts } from "@/lib/products";
import { TrendingSection } from "@/sections/trending-section";

export const metadata: Metadata = {
  title: "Trending",
  description: "See the APSARIEL trending edit with animated product rails and a premium discovery grid.",
  alternates: {
    canonical: `${siteConfig.url}/trending`
  }
};

export const revalidate = 900;

export default async function TrendingPage() {
  const trendingProducts = await getTrendingProducts(24);

  return (
    <>
      <PageHero
        eyebrow="Trending"
        title="What’s moving fastest across the APSARIEL moodboard."
        description="This view highlights the products currently leading on visual impact, save potential, and luxury styling presence."
      />
      <TrendingSection products={trendingProducts.slice(0, 12)} />
      <DiscoveryFeed
        products={trendingProducts}
        eyebrow="Trending Grid"
        title="The top-performing styles, all in one place."
        description="From statement sarees to beauty essentials, the trending grid captures the catalog’s most compelling products."
        enableFilters={false}
      />
    </>
  );
}
