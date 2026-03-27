import type { Product, StoreName } from "@/types/product";
import { STORES } from "@/types/product";
import {
  buildStoreSearchUrl,
  decodeHtmlEntities,
  extractStoreFromUrl,
  inferCategoryFromText,
  slugify,
  stripHtml
} from "@/lib/utils";

const RSS_ITEM_PATTERN = /<item\b[\s\S]*?<\/item>/gi;

function extractTag(xml: string, tagName: string) {
  const match = xml.match(new RegExp(`<${tagName}[^>]*>([\\s\\S]*?)</${tagName}>`, "i"));
  return match ? decodeHtmlEntities(match[1].trim()) : "";
}

function extractAttribute(xml: string, tagName: string, attribute: string) {
  const match = xml.match(new RegExp(`<${tagName}[^>]*${attribute}="([^"]+)"[^>]*>`, "i"));
  return match ? decodeHtmlEntities(match[1].trim()) : "";
}

function extractImageFromDescription(description: string) {
  const imageMatch = description.match(/<img[^>]*src="([^"]+)"/i);
  return imageMatch ? decodeHtmlEntities(imageMatch[1]) : "";
}

function buildAffiliateLinks(title: string, primaryUrl: string, primaryStore?: StoreName) {
  const preferred = primaryStore ?? "Amazon";

  return [preferred, ...STORES.filter((store) => store !== preferred)].map((store) => ({
    store,
    url: store === preferred && primaryUrl ? primaryUrl : buildStoreSearchUrl(store, title)
  }));
}

function normalizePinterestItem(
  item: Record<string, string>,
  index: number
): Product | null {
  const title = item.title || item.description || `Pinterest fashion edit ${index + 1}`;
  const description = stripHtml(item.description || title);
  const image = item.image || "";

  if (!image) {
    return null;
  }

  const category = inferCategoryFromText(`${title} ${description}`);
  const primaryUrl = item.destination || item.link || "";
  const store = extractStoreFromUrl(primaryUrl) ?? "Amazon";
  const price = 1999 + index * 220;

  return {
    id: `pin-${item.id || slugify(title)}`,
    slug: slugify(`${title}-${item.id || index}`),
    title: title.slice(0, 90),
    description:
      description.slice(0, 170) ||
      "Fresh from Pinterest sync, ready to slot directly into the Apsariel discovery feed.",
    price,
    originalPrice: Math.round(price * 1.28),
    currency: "INR",
    category,
    tags: ["pinterest", "synced", "fresh"],
    image,
    alt: `${title} imported from the Apsariel Pinterest feed`,
    store,
    affiliateLinks: buildAffiliateLinks(title, primaryUrl, store),
    trendingScore: 90 - Math.min(index, 12),
    pinterestUrl: item.link,
    publishedAt: item.publishedAt || new Date().toISOString(),
    source: "pinterest"
  };
}

function parsePinterestJson(payload: unknown) {
  const items = Array.isArray(payload)
    ? payload
    : typeof payload === "object" && payload !== null && "items" in payload && Array.isArray(payload.items)
      ? payload.items
      : [];

  return items
    .map((item, index) => {
      if (!item || typeof item !== "object") {
        return null;
      }

      const record = item as Record<string, unknown>;

      return normalizePinterestItem(
        {
          id: String(record.id ?? record.slug ?? `pin-${index}`),
          title: String(record.title ?? ""),
          description: String(record.description ?? record.note ?? ""),
          image: String(
            record.image ??
              record.image_url ??
              (typeof record.media === "object" && record.media !== null && "url" in record.media
                ? record.media.url
                : "")
          ),
          destination: String(record.destination ?? record.destination_url ?? record.url ?? ""),
          link: String(record.link ?? record.pin_url ?? ""),
          publishedAt: String(record.created_at ?? record.publishedAt ?? "")
        },
        index
      );
    })
    .filter(Boolean) as Product[];
}

function parsePinterestRss(xml: string) {
  const items = xml.match(RSS_ITEM_PATTERN) ?? [];

  return items
    .map((item, index) =>
      normalizePinterestItem(
        {
          id: extractTag(item, "guid") || `pin-${index}`,
          title: extractTag(item, "title"),
          description: extractTag(item, "description"),
          image:
            extractAttribute(item, "media:content", "url") ||
            extractAttribute(item, "media:thumbnail", "url") ||
            extractImageFromDescription(extractTag(item, "description")),
          destination: extractTag(item, "link"),
          link: extractTag(item, "link"),
          publishedAt: extractTag(item, "pubDate")
        },
        index
      )
    )
    .filter(Boolean) as Product[];
}

export async function fetchPinterestProducts(limit = 18) {
  const apiEndpoint = process.env.PINTEREST_API_ENDPOINT;
  const feedUrl = process.env.PINTEREST_FEED_URL;
  const token = process.env.PINTEREST_ACCESS_TOKEN;

  try {
    if (apiEndpoint) {
      const response = await fetch(apiEndpoint, {
        headers: token ? { Authorization: `Bearer ${token}` } : undefined,
        next: { revalidate: 900, tags: ["pinterest-feed"] }
      });

      if (!response.ok) {
        return [];
      }

      const payload = (await response.json()) as unknown;
      return parsePinterestJson(payload).slice(0, limit);
    }

    if (!feedUrl) {
      return [];
    }

    const response = await fetch(feedUrl, {
      next: { revalidate: 900, tags: ["pinterest-feed"] }
    });

    if (!response.ok) {
      return [];
    }

    return parsePinterestRss(await response.text()).slice(0, limit);
  } catch {
    return [];
  }
}
