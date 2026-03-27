import Link from "next/link";
import { Pin } from "lucide-react";

type PinterestSaveButtonProps = {
  url: string;
  media: string;
  description: string;
};

export function PinterestSaveButton({
  url,
  media,
  description
}: PinterestSaveButtonProps) {
  const shareUrl = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(
    url
  )}&media=${encodeURIComponent(media)}&description=${encodeURIComponent(description)}`;

  return (
    <Link
      href={shareUrl}
      target="_blank"
      rel="noreferrer"
      className="inline-flex items-center gap-2 rounded-full bg-[#E60023] px-4 py-2 text-sm font-medium text-white shadow-lg transition hover:-translate-y-0.5"
    >
      <Pin className="h-4 w-4" />
      Save
    </Link>
  );
}
