import type { MetadataRoute } from "next";

import { siteConfig } from "@/data/site";
import { getAllProducts } from "@/lib/products";
import { getCategoryHref } from "@/lib/utils";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const products = await getAllProducts();

  const staticRoutes = siteConfig.navigation.map((item) => ({
    url: `${siteConfig.url}${item.href}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: item.href === "/" ? 1 : 0.8
  }));

  const categoryRoutes = siteConfig.categories.map((category) => ({
    url: `${siteConfig.url}${getCategoryHref(category.name)}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.76
  }));

  const productRoutes = products.map((product) => ({
    url: `${siteConfig.url}/product/${product.slug}`,
    lastModified: new Date(product.publishedAt),
    changeFrequency: "weekly" as const,
    priority: 0.72
  }));

  return [...staticRoutes, ...categoryRoutes, ...productRoutes];
}
