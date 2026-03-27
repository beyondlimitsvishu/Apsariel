import { cn } from "@/lib/utils";
import type { StoreName } from "@/types/product";

const storeStyles: Record<StoreName, string> = {
  Amazon: "bg-[#f7ead4] text-[#7a4a09]",
  Flipkart: "bg-[#dfe9ff] text-[#224ca8]",
  Myntra: "bg-[#fde1ef] text-[#8a2351]",
  Ajio: "bg-[#ebebeb] text-[#242424]",
  Meesho: "bg-[#f6daf3] text-[#8f2c7b]"
};

type StoreBadgeProps = {
  store: StoreName;
  className?: string;
};

export function StoreBadge({ store, className }: StoreBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em]",
        storeStyles[store],
        className
      )}
    >
      {store}
    </span>
  );
}
