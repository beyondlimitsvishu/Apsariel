import { NextResponse } from "next/server";

import { fetchPinterestProducts } from "@/lib/pinterest";

export const revalidate = 900;

export async function GET() {
  const products = await fetchPinterestProducts();

  return NextResponse.json({
    syncedAt: new Date().toISOString(),
    count: products.length,
    products
  });
}
