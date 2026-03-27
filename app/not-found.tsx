import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-3xl flex-col items-center justify-center px-4 text-center">
      <p className="text-xs uppercase tracking-[0.35em] text-cocoa">Not Found</p>
      <h1 className="mt-4 font-serif text-5xl text-ink dark:text-white">This fashion edit has moved on.</h1>
      <p className="mt-4 text-black/60 dark:text-white/65">
        The product you were looking for could not be found, but the rest of the collection is still waiting.
      </p>
      <Link
        href="/"
        className="mt-8 rounded-full bg-ink px-6 py-3 text-sm font-medium text-white transition hover:bg-cocoa dark:bg-white dark:text-ink"
      >
        Back to Apsariel
      </Link>
    </div>
  );
}
