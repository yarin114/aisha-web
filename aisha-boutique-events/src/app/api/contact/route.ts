import { NextRequest, NextResponse } from "next/server";
import { contactSchema } from "@/lib/security";

// Simple in-memory rate limiter (per-process)
// For production, replace with @upstash/ratelimit + Upstash Redis
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const RATE_LIMIT_MAX = 5;
const ipMap = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = ipMap.get(ip);

  if (!entry || now > entry.resetAt) {
    ipMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return true;
  }

  if (entry.count >= RATE_LIMIT_MAX) return false;

  entry.count++;
  return true;
}

export async function POST(request: NextRequest) {
  const ip =
    request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "127.0.0.1";

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      { error: "יותר מדי בקשות. נסה שוב מאוחר יותר." },
      { status: 429 }
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "בקשה לא תקינה" }, { status: 400 });
  }

  const result = contactSchema.safeParse(body);
  if (!result.success) {
    return NextResponse.json(
      { error: "נתונים לא תקינים", details: result.error.flatten() },
      { status: 422 }
    );
  }

  // The actual redirect to WhatsApp happens client-side.
  // This endpoint exists for server-side validation + rate limiting.
  return NextResponse.json({ ok: true });
}
