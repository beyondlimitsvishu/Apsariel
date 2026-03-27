import type { Metadata } from "next";

import { DiscoveryFeed } from "@/components/catalog/discovery-feed";
import { PageHero } from "@/components/ui/page-hero";
import { siteConfig } from "@/data/site";
import { getAllProducts } from "@/lib/products";

export const metadata: Metadata = {
  title: "Shop",
  description: "Browse the full APSARIEL catalog with search, store filters, and premium Pinterest-style masonry discovery.",
  alternates: {
    canonical: `${siteConfig.url}/shop`
  }
};

export const revalidate = 900;

type ShopPageProps = {
  searchParams?: Promise<{
    search?: string;
  }>;
};

export default async function ShopPage({ searchParams }: ShopPageProps) {
  const products = await getAllProducts();
  const params = searchParams ? await searchParams : undefined;

  return (
    <>
      <PageHero
        eyebrow="Shop"
        title="Explore the full APSARIEL catalog."
        description="Filter by category, browse by store, and discover luxury women’s fashion through a responsive masonry feed designed for long sessions."
      />
      <DiscoveryFeed
        products={products}
        eyebrow="Full Catalog"
        title="Search-driven discovery with editorial polish."
        description="The shop view surfaces the complete product library with search, category pills, store filters, and infinite scroll."
        initialSearch={params?.search ?? ""}
      />
    </>
  );
}
