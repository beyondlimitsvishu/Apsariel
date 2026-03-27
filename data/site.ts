import type { ProductCategory, StoreName } from "@/types/product";

export type CategoryDefinition = {
  name: ProductCategory;
  slug: string;
  shortLabel: string;
  description: string;
};

export const categoryDefinitions: CategoryDefinition[] = [
  {
    name: "Kurtas",
    slug: "kurtas",
    shortLabel: "Kurtas",
    description: "Festive-ready sets, soft embroidery, and premium ethnic edits."
  },
  {
    name: "Sarees",
    slug: "sarees",
    shortLabel: "Sarees",
    description: "Statement drapes and editorial sarees designed for saves and celebrations."
  },
  {
    name: "Co-ords",
    slug: "co-ords",
    shortLabel: "Co-ords",
    description: "Polished co-ord stories with day-to-night versatility."
  },
  {
    name: "Western wear",
    slug: "western-wear",
    shortLabel: "Western",
    description: "Luxury dresses, tailored silhouettes, and capsule wardrobe heroes."
  },
  {
    name: "Beauty products",
    slug: "beauty-products",
    shortLabel: "Beauty",
    description: "Soft-glam essentials, glow kits, and aesthetic beauty rituals."
  },
  {
    name: "Accessories",
    slug: "accessories",
    shortLabel: "Accessories",
    description: "Finishing touches that elevate every editorial outfit."
  },
  {
    name: "Footwear",
    slug: "footwear",
    shortLabel: "Footwear",
    description: "Elegant heels, slides, and occasion-ready shoes."
  },
  {
    name: "Bags",
    slug: "bags",
    shortLabel: "Bags",
    description: "Structured carryalls and elevated mini bags with luxury energy."
  },
  {
    name: "Jewelry",
    slug: "jewelry",
    shortLabel: "Jewelry",
    description: "High-shine accents and rose-gold finishing pieces."
  }
];

export const storeDefinitions: Array<{
  name: StoreName;
  href: string;
}> = [
  { name: "Amazon", href: "https://www.amazon.in" },
  { name: "Flipkart", href: "https://www.flipkart.com" },
  { name: "Myntra", href: "https://www.myntra.com" },
  { name: "Ajio", href: "https://www.ajio.com" },
  { name: "Meesho", href: "https://www.meesho.com" }
];

export const siteConfig = {
  name: "Apsariel",
  description:
    "APSARIEL curates trending women's fashion products from Amazon, Flipkart, Myntra, Ajio, and Meesho in a luxury editorial discovery experience inspired by Pinterest and Vogue.",
  url: "https://apsariel.vercel.app",
  social: {
    pinterest: "https://pinterest.com/apsariel01",
    instagram: "https://instagram.com/apsariel01"
  },
  navigation: [
    { label: "Home", href: "/" },
    { label: "Fashion", href: "/fashion" },
    { label: "Beauty", href: "/beauty" },
    { label: "Trending", href: "/trending" },
    { label: "Shop", href: "/shop" },
    { label: "About", href: "/about" }
  ],
  homepageAnchors: [
    { label: "Home", href: "#top" },
    { label: "Fashion", href: "#fashion" },
    { label: "Beauty", href: "#beauty" },
    { label: "Trending", href: "#trending" },
    { label: "Shop", href: "#shop" },
    { label: "About", href: "#about" }
  ],
  trendingCategories: categoryDefinitions.slice(0, 6),
  categories: categoryDefinitions,
  stores: storeDefinitions,
  colors: {
    background: "#e9e5cd",
    secondary: "#ffffff",
    accent: "#e6b7a9",
    neutral: "#f5f5f5",
    text: "#111111"
  }
} as const;
