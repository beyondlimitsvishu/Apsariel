type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left"
}: SectionHeadingProps) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="mb-3 text-xs uppercase tracking-[0.35em] text-cocoa">{eyebrow}</p>
      <h2 className="font-serif text-4xl leading-tight text-ink dark:text-white md:text-5xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-black/60 dark:text-white/65">{description}</p>
    </div>
  );
}
