import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

import { categoryDefinitions } from "@/data/site";
import type { ProductCategory, StoreName } from "@/types/product";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(value: number, currency = "INR") {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency,
    maximumFractionDigits: 0
  }).format(value);
}

export function slugify(value: string) {
  return value
    .toLowerCase()
    .replace(/&/g, "and")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function getCategorySlug(category: ProductCategory) {
  return categoryDefinitions.find((item) => item.name === category)?.slug ?? slugify(category);
}

export function getCategoryHref(category: ProductCategory) {
  return `/categories/${getCategorySlug(category)}`;
}

export function decodeHtmlEntities(value: string) {
  return value
    .replace(/<!\[CDATA\[([\s\S]*?)\]\]>/g, "$1")
    .replace(/&amp;/g, "&")
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">");
}

export function stripHtml(value: string) {
  return decodeHtmlEntities(value).replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

export function extractStoreFromUrl(url: string): StoreName | undefined {
  const normalized = url.toLowerCase();

  if (normalized.includes("amazon.")) {
    return "Amazon";
  }
  if (normalized.includes("flipkart.")) {
    return "Flipkart";
  }
  if (normalized.includes("myntra.")) {
    return "Myntra";
  }
  if (normalized.includes("ajio.")) {
    return "Ajio";
  }
  if (normalized.includes("meesho.")) {
    return "Meesho";
  }

  return undefined;
}

export function buildStoreSearchUrl(store: StoreName, query: string) {
  const encoded = encodeURIComponent(query);

  switch (store) {
    case "Amazon":
      return `https://www.amazon.in/s?k=${encoded}`;
    case "Flipkart":
      return `https://www.flipkart.com/search?q=${encoded}`;
    case "Ajio":
      return `https://www.ajio.com/search/?text=${encoded}`;
    case "Meesho":
      return `https://www.meesho.com/search?q=${encoded}`;
    case "Myntra":
    default:
      return "https://www.myntra.com";
  }
}

export function inferCategoryFromText(value: string): ProductCategory {
  const normalized = value.toLowerCase();

  if (normalized.includes("kurta") || normalized.includes("anarkali")) {
    return "Kurtas";
  }
  if (normalized.includes("saree") || normalized.includes("drape")) {
    return "Sarees";
  }
  if (normalized.includes("co-ord") || normalized.includes("coord") || normalized.includes("set")) {
    return "Co-ords";
  }
  if (
    normalized.includes("beauty") ||
    normalized.includes("lip") ||
    normalized.includes("skin") ||
    normalized.includes("makeup")
  ) {
    return "Beauty products";
  }
  if (normalized.includes("shoe") || normalized.includes("heel") || normalized.includes("sandal")) {
    return "Footwear";
  }
  if (normalized.includes("bag") || normalized.includes("clutch")) {
    return "Bags";
  }
  if (normalized.includes("jewel") || normalized.includes("earring") || normalized.includes("necklace")) {
    return "Jewelry";
  }
  if (normalized.includes("accessory") || normalized.includes("belt") || normalized.includes("scarf")) {
    return "Accessories";
  }

  return "Western wear";
}
