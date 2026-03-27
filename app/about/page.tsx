import type { Metadata } from "next";

import { PageHero } from "@/components/ui/page-hero";
import { siteConfig } from "@/data/site";
import { getCatalogStats } from "@/lib/products";
import { AboutSection } from "@/sections/about-section";

export const metadata: Metadata = {
  title: "About",
  description: "Learn how APSARIEL blends editorial design, scalable fashion catalog architecture, and Pinterest-aware publishing.",
  alternates: {
    canonical: `${siteConfig.url}/about`
  }
};

export default async function AboutPage() {
  const stats = await getCatalogStats();

  return (
    <>
      <PageHero
        eyebrow="About"
        title="Built for editorial fashion discovery at scale."
        description="APSARIEL combines a modular Next.js storefront, luxury visual design, and a scalable product model that can grow from a local JSON catalog into a much larger fashion platform."
      />
      <AboutSection stats={stats} />
    </>
  );
}
