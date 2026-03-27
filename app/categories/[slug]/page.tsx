import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { DiscoveryFeed } from "@/components/catalog/discovery-feed";
import { PageHero } from "@/components/ui/page-hero";
import { siteConfig } from "@/data/site";
import { getCategoryBySlug, getProductsForCategorySlug } from "@/lib/products";

type CategoryPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const revalidate = 900;

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    return {};
  }

  return {
    title: category.name,
    description: category.description,
    alternates: {
      canonical: `${siteConfig.url}/categories/${category.slug}`
    }
  };
}

export async function generateStaticParams() {
  return siteConfig.categories.map((category) => ({
    slug: category.slug
  }));
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const category = getCategoryBySlug(slug);

  if (!category) {
    notFound();
  }

  const products = await getProductsForCategorySlug(slug);

  return (
    <>
      <PageHero
        eyebrow="Category"
        title={category.name}
        description={category.description}
        kicker="Category pages use the same masonry engine as the homepage, so scaling to hundreds or thousands of products stays consistent and manageable."
      />
      <DiscoveryFeed
        products={products}
        eyebrow={`${category.shortLabel} Edit`}
        title={`Discover premium ${category.name.toLowerCase()} in a Pinterest-style grid.`}
        description="Scroll through a curated vertical feed optimized for premium fashion imagery, product search, and fast affiliate navigation."
        initialCategory={category.name}
      />
    </>
  );
}
