import type { Metadata } from "next";

import { DiscoveryFeed } from "@/components/catalog/discovery-feed";
import { PageHero } from "@/components/ui/page-hero";
import { siteConfig } from "@/data/site";
import { getCollectionProducts } from "@/lib/products";

export const metadata: Metadata = {
  title: "Beauty",
  description: "Explore beauty products, jewelry, and accessories with the APSARIEL luxury editorial aesthetic.",
  alternates: {
    canonical: `${siteConfig.url}/beauty`
  }
};

export const revalidate = 900;

export default async function BeautyPage() {
  const products = await getCollectionProducts("beauty");

  return (
    <>
      <PageHero
        eyebrow="Beauty"
        title="Glow rituals, jewelry, and finishing touches with editorial softness."
        description="This collection brings together beauty products, accessories, and jewelry for the softer half of the APSARIEL moodboard."
      />
      <DiscoveryFeed
        products={products}
        eyebrow="Beauty Discovery"
        title="Beauty-led curation with the same premium grid system."
        description="Filter through soft-glam kits, jewelry accents, and finishing pieces with infinite scroll and elegant card motion."
      />
    </>
  );
}
