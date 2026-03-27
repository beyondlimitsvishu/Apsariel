import Link from "next/link";

export function Logo() {
  return (
    <Link
      href="/"
      className="group inline-flex items-center gap-3 text-lg font-medium tracking-[0.3em] text-ink transition-colors dark:text-white"
    >
      <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-rose/70 bg-white/80 text-xs uppercase tracking-[0.35em] shadow-sm transition-transform duration-500 group-hover:-translate-y-0.5 dark:bg-white/10">
        A
      </span>
      <span className="font-serif text-xl tracking-[0.28em]">APSARIEL</span>
    </Link>
  );
}
