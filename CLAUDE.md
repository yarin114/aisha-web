# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Location

All source code lives in `aisha-boutique-events/`. The workspace root (`Aisha- web/`) contains only this subdirectory.

```
cd "c:/Users/mazri/OneDrive/Desktop/Aisha- web/aisha-boutique-events"
```

## Commands

```bash
npm run dev      # Start dev server (Turbopack)
npm run build    # Production build
npm run lint     # ESLint check
```

No test suite is configured.

## Architecture

**Next.js 16 App Router** with three routes:
- `/` — Home: hero, gallery trio, services, questionnaire modal
- `/gallery` — Masonry photo album + lightbox
- `/book` — Google Calendar embed

**RTL Hebrew site** — `<html lang="he" dir="rtl">` in `src/app/layout.tsx`. All UI is right-to-left.

**Provider tree** (layout.tsx): `ConsentProvider` → `AccessibilityProvider` → `Navbar` + page content + global components.

**API routes:**
- `POST /api/contact` — validates contact form (rate-limited: 5/IP/hr), validation only; WhatsApp redirect happens client-side
- `POST /api/consent` — logs cookie consent audit record

**CSRF protection** via `src/proxy.ts` (not `middleware.ts` — Next.js 16 changed this). Blocks cross-origin POST/PUT/DELETE to `/api/*`.

## Key Conventions

### Tailwind v4
Config is in `src/app/globals.css` under `@theme inline {}` — there is **no `tailwind.config.ts`**. Use design tokens as utility classes: `bg-burgundy`, `text-charcoal`, `bg-cream`, `text-gold`, etc.

Custom utility classes defined in globals.css: `.arch-top`, `.glass-card`, `.scrollbar-hide`, `.nav-active`, `.wa-pulse`, `.mandala-bg`.

### Zod v4
No `required_error` option on `z.string()`. Use `.min(1, "message")` for required string validation. Schemas live in `src/lib/security.ts`.

### react-photo-album v3
Import `MasonryPhotoAlbum` (not `PhotoAlbum`) from `"react-photo-album"`, with CSS from `"react-photo-album/masonry.css"`.

### Path alias
`@/*` resolves to `./src/*`.

## Data & Config

All content configuration is in `src/config/`:
- `site.ts` — site name, WhatsApp URL, domain
- `navigation.ts` — nav links
- `gallery.ts` — gallery image list with real pixel dimensions
- `questionnaire.ts` — 5-step questionnaire step definitions (4 radio steps + 1 contact step)

WhatsApp URL: `https://wa.me/message/AW7JPMS5JSU5M1` — used via `buildWhatsAppUrl()` in `src/lib/whatsapp.ts`.

Google Calendar booking URL in `.env.local` as `NEXT_PUBLIC_CALENDAR_URL`.

## Assets

Public assets in `aisha-boutique-events/public/`:
- Images: `p1.jpeg`–`p7.jpeg` (portrait orientation, used in gallery and hero)
- Videos: `v1.mp4`–`v4.mp4` (hero background)

## Accessibility

`src/context/AccessibilityContext.tsx` manages font size (`normal`/`large`/`xlarge`), high contrast, reduce motion, and large cursor — stored in `localStorage("aisha_a11y")` and applied as CSS classes on `<body>`.

## Environment Variables

```
NEXT_PUBLIC_SITE_URL=https://aishaboutiqueevents.co.il
NEXT_PUBLIC_CALENDAR_URL=https://calendar.app.google/...
NEXT_PUBLIC_EMAIL=
UPSTASH_REDIS_REST_URL=      # optional, for production rate limiting
UPSTASH_REDIS_REST_TOKEN=    # optional, for production rate limiting
```
