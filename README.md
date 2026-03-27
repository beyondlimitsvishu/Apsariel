# APSARIEL

A production-ready luxury fashion discovery platform built with Next.js App Router, TypeScript, Tailwind CSS, and Framer Motion.

## Highlights

- Editorial homepage with animated hero, category showcases, trending rail, and Pinterest-style masonry feed
- 100+ product catalog stored in `data/products.json`
- Category pages, fashion and beauty landing pages, trending page, shop page, and detailed product pages
- Affiliate-ready product model covering Amazon, Flipkart, Myntra, Ajio, and Meesho
- Pinterest sync endpoint and merge layer for RSS or API-fed product ingestion
- SEO coverage with metadata, Open Graph, Twitter cards, schema, sitemap, and robots

## Stack

- Next.js 15 App Router
- TypeScript
- Tailwind CSS
- Framer Motion
- next-themes

## Pinterest Sync

Configure one of these environment variables to enable automatic Pinterest ingestion:

- `PINTEREST_FEED_URL`
- `PINTEREST_API_ENDPOINT`

Optional:

- `PINTEREST_ACCESS_TOKEN`

The sync route is available at `/api/pinterest-sync`, and synced products are merged into the catalog in `lib/products.ts`.

## Project Structure

```text
app/
  about/
  api/pinterest-sync/
  beauty/
  categories/[slug]/
  fashion/
  product/[slug]/
  shop/
  trending/
components/
  catalog/
  layout/
  providers/
  ui/
data/
lib/
public/images/
sections/
styles/
types/
```

## Local Development

```bash
npm install
npm run dev
```

## Production Verification

```bash
npm run build
```
