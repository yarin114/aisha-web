import { NextRequest, NextResponse } from "next/server";

// Consent audit log endpoint.
// In production, store in Vercel KV:
//   import { kv } from "@vercel/kv";
//   await kv.set(`consent:${ip}:${Date.now()}`, body, { ex: 63072000 }); // 2 years TTL

export async function POST(request: NextRequest) {
  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid body" }, { status: 400 });
  }

  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "unknown";

  // Log to console in dev; in production wire to Vercel KV or your DB
  if (process.env.NODE_ENV === "development") {
    console.log(`[Consent] ip=${ip}`, body);
  }

  // TODO (production): store in Vercel KV
  // await kv.set(`consent:${ip}:${Date.now()}`, { ip, ...(body as object) }, { ex: 63072000 });

  return NextResponse.json({ ok: true });
}
