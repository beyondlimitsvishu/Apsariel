import { SectionHeading } from "@/components/ui/section-heading";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  kicker?: string;
};

export function PageHero({ eyebrow, title, description, kicker }: PageHeroProps) {
  return (
    <section className="px-4 pb-6 pt-10 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-black/[0.08] bg-white/70 px-6 py-10 shadow-luxe backdrop-blur-xl dark:border-white/10 dark:bg-white/5 sm:px-10 sm:py-14">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <SectionHeading eyebrow={eyebrow} title={title} description={description} />
          <div className="rounded-[2rem] border border-black/6 bg-[#f6efe3] p-6 text-sm leading-7 text-black/65 dark:border-white/10 dark:bg-[#1f1816] dark:text-white/65">
            <p className="text-xs uppercase tracking-[0.35em] text-cocoa">Editorial Note</p>
            <p className="mt-4">
              {kicker ??
                "Every collection page uses the same scalable catalog engine, so local products and Pinterest-synced items can flow into discovery, search, related products, and SEO without separate upkeep."}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
