export default function ProductLoading() {
  return (
    <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="aspect-[2/3] rounded-[2.5rem] bg-[linear-gradient(90deg,rgba(246,241,235,0.85),rgba(230,183,169,0.45),rgba(246,241,235,0.85))] bg-[length:200%_100%] animate-shimmer" />
        <div className="space-y-4">
          <div className="h-3 w-28 rounded-full bg-[linear-gradient(90deg,rgba(246,241,235,0.85),rgba(230,183,169,0.45),rgba(246,241,235,0.85))] bg-[length:200%_100%] animate-shimmer" />
          <div className="h-14 w-3/4 rounded-[1rem] bg-[linear-gradient(90deg,rgba(246,241,235,0.85),rgba(230,183,169,0.45),rgba(246,241,235,0.85))] bg-[length:200%_100%] animate-shimmer" />
          <div className="h-6 w-1/3 rounded-full bg-[linear-gradient(90deg,rgba(246,241,235,0.85),rgba(230,183,169,0.45),rgba(246,241,235,0.85))] bg-[length:200%_100%] animate-shimmer" />
          <div className="h-28 w-full rounded-[1.5rem] bg-[linear-gradient(90deg,rgba(246,241,235,0.85),rgba(230,183,169,0.45),rgba(246,241,235,0.85))] bg-[length:200%_100%] animate-shimmer" />
        </div>
      </div>
    </div>
  );
}
