import { ProductSkeleton } from "@/components/ui/product-skeleton";

export default function Loading() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="mb-10 h-[540px] rounded-[2.5rem] bg-[linear-gradient(90deg,rgba(246,241,235,0.85),rgba(230,183,169,0.45),rgba(246,241,235,0.85))] bg-[length:200%_100%] animate-shimmer" />
      <div className="columns-1 gap-6 md:columns-2 xl:columns-4">
        {Array.from({ length: 8 }).map((_, index) => (
          <ProductSkeleton key={index} />
        ))}
      </div>
    </div>
  );
}
