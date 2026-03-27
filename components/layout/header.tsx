"use client";

import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Instagram, Menu, Pin, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

import { Logo } from "@/components/ui/logo";
import { SearchDialog } from "@/components/ui/search-dialog";
import { SocialIconLink } from "@/components/ui/social-icon-link";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { siteConfig } from "@/data/site";
import type { Product } from "@/types/product";

type HeaderProps = {
  products: Product[];
};

export function Header({ products }: HeaderProps) {
  const { scrollY } = useScroll();
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious() ?? 0;

    if (latest < 80) {
      setHidden(false);
      return;
    }

    setHidden(latest > previous);
  });

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: hidden ? -120 : 0 }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="sticky top-0 z-50 border-b border-black/6 bg-white/60 backdrop-blur-2xl dark:border-white/10 dark:bg-[#161211]/60"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex min-w-0 flex-1 items-center">
            <Logo />
          </div>

          <nav className="hidden items-center gap-7 lg:flex">
            {siteConfig.navigation.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="group relative text-sm font-medium text-ink transition-colors hover:text-cocoa dark:text-white/90"
              >
                {item.label}
                <span className="absolute -bottom-2 left-0 h-px w-full origin-left scale-x-0 bg-cocoa transition-transform duration-300 group-hover:scale-x-100" />
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <SearchDialog products={products} />
            <SocialIconLink
              href={siteConfig.social.pinterest}
              label="Apsariel on Pinterest"
              icon={<Pin className="h-4 w-4" />}
            />
            <SocialIconLink
              href={siteConfig.social.instagram}
              label="Apsariel on Instagram"
              icon={<Instagram className="h-4 w-4" />}
            />
            <ThemeToggle />
            <button
              type="button"
              aria-label="Open menu"
              onClick={() => setMobileOpen(true)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/80 text-ink transition hover:border-rose dark:border-white/10 dark:bg-white/10 dark:text-white lg:hidden"
            >
              <Menu className="h-4 w-4" />
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/40 backdrop-blur-md lg:hidden"
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="ml-auto flex h-full w-[min(88vw,380px)] flex-col bg-[#f7f0e5] p-6 dark:bg-[#161211]"
            >
              <div className="flex items-center justify-between">
                <Logo />
                <button
                  type="button"
                  aria-label="Close menu"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 dark:border-white/10"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <nav className="mt-10 grid gap-4">
                {siteConfig.navigation.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="rounded-[1.25rem] border border-black/[0.08] bg-white/80 px-5 py-4 font-serif text-2xl text-ink dark:border-white/10 dark:bg-white/5 dark:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className="mt-auto rounded-[1.5rem] border border-black/[0.08] bg-white/75 p-5 text-sm leading-7 text-black/65 dark:border-white/10 dark:bg-white/5 dark:text-white/65">
                Discover curated affiliate fashion across Amazon, Flipkart, Myntra, Ajio, and Meesho with Pinterest-linked freshness baked into the catalog.
              </div>
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </>
  );
}
