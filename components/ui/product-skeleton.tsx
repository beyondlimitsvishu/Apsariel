export function ProductSkeleton() {
  return (
    <div className="mb-6 break-inside-avoid rounded-[2rem] border border-black/5 bg-white p-3 shadow-sm dark:border-white/10 dark:bg-white/5">
      <div className="aspect-[2/3] rounded-[1.5rem] bg-[linear-gradient(90deg,rgba(246,241,235,0.85),rgba(230,183,169,0.45),rgba(246,241,235,0.85))] bg-[length:200%_100%] animate-shimmer dark:bg-[linear-gradient(90deg,rgba(255,255,255,0.08),rgba(230,183,169,0.22),rgba(255,255,255,0.08))]" />
      <div className="mt-4 h-3 w-24 rounded-full bg-[linear-gradient(90deg,rgba(246,241,235,0.85),rgba(230,183,169,0.45),rgba(246,241,235,0.85))] bg-[length:200%_100%] animate-shimmer" />
      <div className="mt-3 h-5 w-4/5 rounded-full bg-[linear-gradient(90deg,rgba(246,241,235,0.85),rgba(230,183,169,0.45),rgba(246,241,235,0.85))] bg-[length:200%_100%] animate-shimmer" />
      <div className="mt-3 h-4 w-1/2 rounded-full bg-[linear-gradient(90deg,rgba(246,241,235,0.85),rgba(230,183,169,0.45),rgba(246,241,235,0.85))] bg-[length:200%_100%] animate-shimmer" />
      <div className="mt-4 h-11 w-full rounded-full bg-[linear-gradient(90deg,rgba(246,241,235,0.85),rgba(230,183,169,0.45),rgba(246,241,235,0.85))] bg-[length:200%_100%] animate-shimmer" />
    </div>
  );
}
