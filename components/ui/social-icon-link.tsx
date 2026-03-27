import Link from "next/link";
import type { ReactNode } from "react";

type SocialIconLinkProps = {
  href: string;
  label: string;
  icon: ReactNode;
};

export function SocialIconLink({ href, label, icon }: SocialIconLinkProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-black/10 bg-white/80 text-ink transition duration-300 hover:-translate-y-0.5 hover:border-rose hover:text-cocoa dark:border-white/10 dark:bg-white/10 dark:text-white"
    >
      {icon}
    </Link>
  );
}
