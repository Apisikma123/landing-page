# Landing Page Template Engine

Config-driven landing page system for local businesses. One repository, many clients via Git branches.

## Stack

- **Next.js** (App Router)
- **TypeScript**
- **Tailwind CSS**
- **Lucide Icons**
- **next/image** + **next/font**

No database. No CMS. No authentication.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## How It Works

All business data lives in **one file**: `src/config/site.ts`.

Templates (Food, Service, Store, Business) control section ordering. Sections auto-hide when their data is empty.

### Files You Edit Per Client

| File | Purpose |
|------|---------|
| `src/config/site.ts` | All business info, branding, content |
| `public/images/` | Logo, hero, products, gallery images |

That's it. You should never need to touch components for normal client work.

## Creating a New Client Demo

```bash
# Start from main
git checkout main
git pull

# Create demo branch
git checkout -b demo/nama-usaha

# Edit config
# → src/config/site.ts

# Replace images
# → public/images/

# Test locally
npm run dev

# Push for Vercel preview
git add .
git commit -m "Demo Nama Usaha"
git push -u origin demo/nama-usaha
```

Vercel will automatically create a preview deployment for the branch.

## Client Confirmed — Production Branch

```bash
git checkout main
git pull
git checkout -b client/nama-usaha

# Edit config + images
# Test
npm run dev

# Push
git add .
git commit -m "Client: Nama Usaha"
git push -u origin client/nama-usaha
```

### Branch Naming Convention

| Branch | Purpose |
|--------|---------|
| `main` | Master template |
| `demo/nama-usaha` | Demo/preview for prospective client |
| `client/nama-usaha` | Confirmed client, production-ready |

## Config Reference

### Template Types

```typescript
template: "food" | "service" | "store" | "business"
```

| Template | Best For |
|----------|----------|
| `food` | Bakery, restaurant, cafe, catering |
| `service` | Laundry, salon, barbershop, cleaning |
| `store` | Toko, florist, fashion, retail |
| `business` | Universal fallback |

### Branding

```typescript
branding: {
  primaryColor: "#7C2D12",    // Main brand color (buttons, accents)
  secondaryColor: "#FFF7ED",  // Light background sections
  accentColor: "#EA580C",     // Badges, highlights
  textColor: "#1C1917",       // Body text
  mutedColor: "#78716C",      // Secondary text
  logo: "/images/logo.png",   // Optional — falls back to text
}
```

Colors are injected as CSS variables. Components never hardcode colors.

### Hero Variants

```typescript
hero: {
  variant: "split" | "centered" | "image-background"
}
```

### Products Variants

```typescript
products: {
  variant: "grid" | "featured"
}
```

### Gallery Variants

```typescript
gallery: {
  variant: "grid" | "masonry"
}
```

### Optional Sections

Any section with empty data is automatically hidden:

```typescript
// This will hide the Products section
products: {
  items: []
}

// Or simply omit the key
// products: undefined → section won't render
```

### WhatsApp

```typescript
contact: {
  whatsapp: "628xxxxxxxxxx",        // Required
  whatsappMessage: "Halo, saya..." // Optional default message
}
```

The WhatsApp number is used for: Navbar CTA, Hero CTA, Floating button, Final CTA.

### Feature/Service Icons

Available icon names (from Lucide):

`wheat`, `clock`, `leaf`, `truck`, `shield`, `star`, `heart`, `zap`, `award`, `thumbsup`, `sparkles`, `badge`, `scissors`, `wrench`, `camera`, `shirt`, `brush`, `settings`, `droplets`, `monitor`

## Project Structure

```
src/
├── app/
│   ├── layout.tsx          # Root layout, fonts, metadata, JSON-LD
│   ├── page.tsx            # Template router
│   ├── globals.css         # CSS variables + Tailwind
│   ├── robots.ts           # SEO
│   └── sitemap.ts          # SEO
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx      # Sticky navbar + mobile menu
│   │   ├── Footer.tsx      # Contact, hours, social links
│   │   └── FloatingWhatsApp.tsx
│   │
│   ├── sections/
│   │   ├── Hero.tsx        # 3 variants
│   │   ├── About.tsx
│   │   ├── Features.tsx
│   │   ├── Products.tsx    # 2 variants
│   │   ├── Services.tsx
│   │   ├── Gallery.tsx     # 2 variants + lightbox
│   │   ├── Testimonials.tsx
│   │   ├── FAQ.tsx         # Native accordion
│   │   ├── Location.tsx    # Map link + optional embed
│   │   └── FinalCTA.tsx
│   │
│   └── ui/
│       ├── SectionWrapper.tsx
│       └── Button.tsx
│
├── config/
│   ├── site.ts             # ← EDIT THIS PER CLIENT
│   └── types.ts            # TypeScript interfaces
│
├── lib/
│   ├── whatsapp.ts
│   └── utils.ts
│
└── templates/
    ├── FoodTemplate.tsx
    ├── ServiceTemplate.tsx
    ├── StoreTemplate.tsx
    └── BusinessTemplate.tsx
```

## Deployment

### Vercel (Recommended)

1. Connect your GitHub repo to Vercel
2. Each branch gets its own preview deployment
3. Set the production branch for confirmed clients

### Build

```bash
npm run build
```

## Tips

- **Images**: Use real photos, not stock. Compress with tools like Squoosh.
- **Colors**: Use [Realtime Colors](https://www.realtimecolors.com/) to test palettes.
- **Logo**: If no logo file, the business name displays as text.
- **Merging updates**: Template improvements on `main` can be merged into client branches with `git merge main`.
