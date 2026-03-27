import type { Metadata } from "next";
import { Playfair_Display, Poppins } from "next/font/google";
import Script from "next/script";

import "@/app/globals.css";
import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { SiteProviders } from "@/components/providers/site-providers";
import { BackToTop } from "@/components/ui/back-to-top";
import { siteConfig } from "@/data/site";
import { getAllProducts } from "@/lib/products";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap"
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700"],
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "APSARIEL | Premium Fashion Product Discovery",
    template: "%s | APSARIEL"
  },
  description: siteConfig.description,
  applicationName: siteConfig.name,
  keywords: [
    "women's fashion",
    "fashion discovery platform",
    "Pinterest fashion shopping",
    "luxury editorial ecommerce",
    "Amazon fashion affiliate",
    "Myntra fashion",
    "Ajio fashion",
    "Meesho finds"
  ],
  openGraph: {
    title: "APSARIEL | Premium Fashion Product Discovery",
    description: siteConfig.description,
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "en_IN",
    type: "website",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "APSARIEL premium fashion discovery platform"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "APSARIEL | Premium Fashion Product Discovery",
    description: siteConfig.description,
    images: ["/twitter-image"]
  },
  alternates: {
    canonical: siteConfig.url
  }
};

export default async function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const products = await getAllProducts();

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    sameAs: [siteConfig.social.instagram, siteConfig.social.pinterest],
    description: siteConfig.description
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.url}/shop?search={search_term_string}`,
      "query-input": "required name=search_term_string"
    }
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${playfair.variable} ${poppins.variable} bg-canvas font-sans text-ink antialiased`}>
        <SiteProviders>
          <div className="relative min-h-screen overflow-x-hidden bg-canvas text-ink transition-colors dark:bg-[#161211] dark:text-white">
            <Header products={products} />
            <main>{children}</main>
            <Footer products={products} />
            <BackToTop />
          </div>
        </SiteProviders>

        <Script
          id="apsariel-organization-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <Script
          id="apsariel-website-schema"
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </body>
    </html>
  );
}
