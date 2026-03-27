import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { cn } from "@/lib/utils";

type ExternalStoreButtonProps = {
  href: string;
  label: string;
  variant?: "primary" | "secondary";
};

export function ExternalStoreButton({
  href,
  label,
  variant = "primary"
}: ExternalStoreButtonProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer sponsored"
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-medium transition duration-300",
        variant === "primary"
          ? "bg-ink text-white hover:-translate-y-0.5 hover:bg-cocoa dark:bg-white dark:text-ink"
          : "border border-black/10 bg-white/90 text-ink hover:-translate-y-0.5 hover:border-rose hover:text-cocoa dark:border-white/[0.15] dark:bg-white/5 dark:text-white"
      )}
    >
      {label}
      <ArrowUpRight className="h-4 w-4" />
    </Link>
  );
}
