import { DiscoveryFeed } from "@/components/catalog/discovery-feed";
import type { Product } from "@/types/product";

type DiscoverySectionProps = {
  products: Product[];
};

export function DiscoverySection({ products }: DiscoverySectionProps) {
  return (
    <DiscoveryFeed
      products={products}
      eyebrow="Discovery Feed"
      title="Pinterest-style masonry discovery with luxury spacing, premium motion, and real catalog depth."
      description="Browse the full APSARIEL feed with category filters, store filters, search, lazy-loaded cards, and a responsive masonry layout tailored for high-save fashion imagery."
    />
  );
}
