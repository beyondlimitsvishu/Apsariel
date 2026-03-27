import { cache } from "react";

import { categoryDefinitions, siteConfig } from "@/data/site";
import productData from "@/data/products.json";
import { fetchPinterestProducts } from "@/lib/pinterest";
import { slugify } from "@/lib/utils";
import type { Product, ProductCategory, ProductFilterState, StoreName } from "@/types/product";
import { STORES } from "@/types/product";

const localProducts = productData as Product[];

function sortProducts(products: Product[]) {
  return [...products].sort((a, b) => {
    if (b.trendingScore !== a.trendingScore) {
      return b.trendingScore - a.trendingScore;
    }

    return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
  });
}

function dedupeProducts(products: Product[]) {
  const seen = new Set<string>();

  return products.filter((product) => {
    const key = product.slug;

    if (seen.has(key)) {
      return false;
    }

    seen.add(key);
    return true;
  });
}

export const getLocalProducts = cache(async () => sortProducts(localProducts));

export const getPinterestProducts = cache(async () => fetchPinterestProducts());

export const getAllProducts = cache(async () => {
  const [local, synced] = await Promise.all([getLocalProducts(), getPinterestProducts()]);
  return sortProducts(dedupeProducts([...synced, ...local]));
});

export async function getFeaturedProducts(limit = 5) {
  return (await getAllProducts()).filter((product) => product.featured).slice(0, limit);
}

export async function getTrendingProducts(limit = 14) {
  return (await getAllProducts()).slice(0, limit);
}

export async function getProductBySlug(slug: string) {
  return (await getAllProducts()).find((product) => product.slug === slug);
}

export async function getRelatedProducts(category: ProductCategory, currentId: string, limit = 8) {
  return (await getAllProducts())
    .filter((product) => product.category === category && product.id !== currentId)
    .slice(0, limit);
}

export async function getProductsByCategory(category: ProductCategory) {
  return (await getAllProducts()).filter((product) => product.category === category);
}

export async function filterProducts(filters: ProductFilterState) {
  const products = await getAllProducts();
  const search = filters.search?.trim().toLowerCase();

  return products.filter((product) => {
    const matchesSearch =
      !search ||
      [product.title, product.description, product.category, product.store, ...product.tags]
        .join(" ")
        .toLowerCase()
        .includes(search);

    const matchesCategory =
      !filters.category ||
      filters.category === "All categories" ||
      product.category === filters.category;

    const matchesStore =
      !filters.store || filters.store === "All stores" || product.store === filters.store;

    return matchesSearch && matchesCategory && matchesStore;
  });
}

export function getCategoryBySlug(slug: string) {
  return categoryDefinitions.find((category) => category.slug === slug);
}

export async function getProductsForCategorySlug(slug: string) {
  const category = getCategoryBySlug(slug);

  if (!category) {
    return [];
  }

  return getProductsByCategory(category.name);
}

export async function getCollectionProducts(collection: "fashion" | "beauty") {
  const products = await getAllProducts();

  const categorySet =
    collection === "fashion"
      ? new Set<ProductCategory>(["Kurtas", "Sarees", "Co-ords", "Western wear", "Footwear", "Bags"])
      : new Set<ProductCategory>(["Beauty products", "Accessories", "Jewelry"]);

  return products.filter((product) => categorySet.has(product.category));
}

export function getStoreOptions() {
  return ["All stores", ...STORES] as Array<StoreName | "All stores">;
}

export function getCategoryOptions() {
  return ["All categories", ...categoryDefinitions.map((item) => item.name)] as Array<
    ProductCategory | "All categories"
  >;
}

export async function getCatalogStats() {
  const products = await getAllProducts();

  return {
    totalProducts: products.length,
    pinterestProducts: products.filter((product) => product.source === "pinterest").length,
    categories: categoryDefinitions.length,
    stores: siteConfig.stores.length
  };
}

export async function generateStaticCatalogSlugs() {
  return (await getLocalProducts()).map((product) => ({ slug: product.slug }));
}

export function resolveCategoryFromLabel(label: string) {
  return categoryDefinitions.find((item) => item.name === label || item.slug === slugify(label));
}
