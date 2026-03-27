import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Script from "next/script";
import { notFound } from "next/navigation";

import { ExternalStoreButton } from "@/components/ui/external-store-button";
import { PinterestSaveButton } from "@/components/ui/pinterest-save-button";
import { ProductCard } from "@/components/ui/product-card";
import { StoreBadge } from "@/components/ui/store-badge";
import { siteConfig } from "@/data/site";
import {
  generateStaticCatalogSlugs,
  getProductBySlug,
  getRelatedProducts
} from "@/lib/products";
import { formatPrice, getCategoryHref } from "@/lib/utils";

type ProductPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export const revalidate = 900;

export async function generateStaticParams() {
  return generateStaticCatalogSlugs();
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    return {};
  }

  return {
    title: product.title,
    description: product.description,
    openGraph: {
      title: `${product.title} | APSARIEL`,
      description: product.description,
      type: "article",
      url: `${siteConfig.url}/product/${product.slug}`,
      images: [
        {
          url: product.image,
          width: 1000,
          height: 1500,
          alt: product.alt
        }
      ]
    },
    twitter: {
      card: "summary_large_image",
      title: `${product.title} | APSARIEL`,
      description: product.description,
      images: [product.image]
    },
    alternates: {
      canonical: `${siteConfig.url}/product/${product.slug}`
    }
  };
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { slug } = await params;
  const product = await getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  const related = await getRelatedProducts(product.category, product.id);

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.description,
    image: [product.image],
    brand: {
      "@type": "Brand",
      name: "APSARIEL"
    },
    category: product.category,
    offers: product.affiliateLinks.map((link) => ({
      "@type": "Offer",
      priceCurrency: product.currency,
      price: product.price,
      availability: "https://schema.org/InStock",
      seller: {
        "@type": "Organization",
        name: link.store
      },
      url: link.url
    }))
  };

  return (
    <>
      <section className="px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="relative overflow-hidden rounded-[2.5rem] border border-black/5 bg-white p-4 shadow-float dark:border-white/10 dark:bg-white/5">
            <div className="absolute right-7 top-7 z-10">
              <PinterestSaveButton
                url={`${siteConfig.url}/product/${product.slug}`}
                media={product.image}
                description={product.title}
              />
            </div>
            <div className="relative aspect-[2/3] overflow-hidden rounded-[2rem]">
              <Image
                src={product.image}
                alt={product.alt}
                fill
                priority
                sizes="(max-width: 1200px) 100vw, 48vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <div className="flex flex-wrap items-center gap-3">
              <Link
                href={getCategoryHref(product.category)}
                className="text-xs uppercase tracking-[0.35em] text-cocoa"
              >
                {product.category}
              </Link>
              <StoreBadge store={product.store} />
            </div>

            <h1 className="mt-4 font-serif text-5xl leading-tight text-ink dark:text-white">{product.title}</h1>
            <div className="mt-6 flex items-end gap-4">
              <p className="text-3xl font-medium text-ink dark:text-white">
                {formatPrice(product.price, product.currency)}
              </p>
              <p className="pb-1 text-base text-black/40 line-through dark:text-white/35">
                {formatPrice(product.originalPrice, product.currency)}
              </p>
            </div>
            <p className="mt-6 max-w-2xl text-base leading-8 text-black/65 dark:text-white/65">
              {product.description}
            </p>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {product.affiliateLinks.map((link, index) => (
                <ExternalStoreButton
                  key={link.store}
                  href={link.url}
                  label={`Buy on ${link.store}`}
                  variant={index === 0 ? "primary" : "secondary"}
                />
              ))}
            </div>

            <div className="mt-8 rounded-[2rem] border border-black/5 bg-[#faf6f2] p-6 dark:border-white/10 dark:bg-white/5">
              <p className="text-xs uppercase tracking-[0.25em] text-cocoa">Why it&apos;s trending</p>
              <ul className="mt-4 grid gap-3 text-sm leading-7 text-black/65 dark:text-white/65">
                <li>High-save vertical imagery optimized for Pinterest discovery and Open Graph sharing.</li>
                <li>Affiliate-ready store routing across all five supported shopping destinations.</li>
                <li>Luxury editorial styling that fits the broader APSARIEL visual system.</li>
              </ul>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {product.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-black/10 bg-white/80 px-4 py-2 text-sm text-ink dark:border-white/10 dark:bg-white/5 dark:text-white"
                >
                  #{tag}
                </span>
              ))}
            </div>

            <Link
              href="/shop"
              className="mt-8 inline-flex w-fit items-center rounded-full border border-black/10 px-5 py-3 text-sm font-medium text-ink transition hover:border-rose hover:text-cocoa dark:border-white/10 dark:text-white"
            >
              Back to Discovery
            </Link>
          </div>
        </div>
      </section>

      <section className="px-4 pb-20 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 max-w-2xl">
            <p className="text-xs uppercase tracking-[0.35em] text-cocoa">Related Products</p>
            <h2 className="mt-4 font-serif text-4xl text-ink dark:text-white">More from this edit</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {related.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>
      </section>

      <Script
        id={`product-schema-${product.id}`}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
