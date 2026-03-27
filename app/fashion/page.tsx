import type { Metadata } from "next";

import { DiscoveryFeed } from "@/components/catalog/discovery-feed";
import { PageHero } from "@/components/ui/page-hero";
import { siteConfig } from "@/data/site";
import { getCollectionProducts } from "@/lib/products";

export const metadata: Metadata = {
  title: "Fashion",
  description: "Discover premium fashion edits across kurtas, sarees, co-ords, western wear, footwear, and bags.",
  alternates: {
    canonical: `${siteConfig.url}/fashion`
  }
};

export const revalidate = 900;

export default async function FashionPage() {
  const products = await getCollectionProducts("fashion");

  return (
    <>
      <PageHero
        eyebrow="Fashion"
        title="An editorial wardrobe of trending silhouettes and premium staples."
        description="Explore kurtas, sarees, co-ords, western wear, bags, and footwear inside a polished fashion-first browsing experience."
      />
      <DiscoveryFeed
        products={products}
        eyebrow="Fashion Discovery"
        title="Browse fashion categories with Pinterest-inspired flow."
        description="Every item in this feed is tailored to fashion-led discovery, affiliate shopping, and elegant high-intent browsing."
      />
    </>
  );
}
