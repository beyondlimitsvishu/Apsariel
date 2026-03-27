export const STORES = ["Amazon", "Flipkart", "Myntra", "Ajio", "Meesho"] as const;

export type StoreName = (typeof STORES)[number];

export const PRODUCT_CATEGORIES = [
  "Kurtas",
  "Sarees",
  "Co-ords",
  "Western wear",
  "Beauty products",
  "Accessories",
  "Footwear",
  "Bags",
  "Jewelry"
] as const;

export type ProductCategory = (typeof PRODUCT_CATEGORIES)[number];
export type ProductSource = "local" | "pinterest";

export type ProductLink = {
  store: StoreName;
  url: string;
};

export type Product = {
  id: string;
  slug: string;
  title: string;
  description: string;
  price: number;
  originalPrice: number;
  currency: string;
  category: ProductCategory;
  tags: string[];
  image: string;
  alt: string;
  store: StoreName;
  affiliateLinks: ProductLink[];
  featured?: boolean;
  trendingScore: number;
  pinterestUrl?: string;
  publishedAt: string;
  source: ProductSource;
};

export type ProductFilterState = {
  search?: string;
  category?: ProductCategory | "All categories";
  store?: StoreName | "All stores";
};
