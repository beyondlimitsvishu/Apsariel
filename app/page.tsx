import { AboutSection } from "@/sections/about-section";
import { CategoryShowcase } from "@/sections/category-showcase";
import { DiscoverySection } from "@/sections/discovery-section";
import { HeroSection } from "@/sections/hero-section";
import { TrendingSection } from "@/sections/trending-section";
import {
  getAllProducts,
  getCatalogStats,
  getFeaturedProducts,
  getTrendingProducts
} from "@/lib/products";

export const revalidate = 900;

export default async function HomePage() {
  const [products, featured, trending, stats] = await Promise.all([
    getAllProducts(),
    getFeaturedProducts(),
    getTrendingProducts(),
    getCatalogStats()
  ]);

  return (
    <>
      <HeroSection products={featured} />
      <CategoryShowcase />
      <TrendingSection products={trending} />
      <DiscoverySection products={products} />
      <AboutSection stats={stats} />
    </>
  );
}
