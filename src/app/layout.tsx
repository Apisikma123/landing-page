import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { siteConfig } from "@/config/site";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingWhatsApp } from "@/components/layout/FloatingWhatsApp";
import "./globals.css";

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

// ---------------------------------------------------------------------------
// Metadata from config
// ---------------------------------------------------------------------------
const { business, seo, branding } = siteConfig;

export const metadata: Metadata = {
  title: `${business.name} — ${business.tagline}`,
  description: business.description,
  ...(seo?.siteUrl && {
    metadataBase: new URL(seo.siteUrl),
    alternates: { canonical: "/" },
  }),
  openGraph: {
    title: `${business.name} — ${business.tagline}`,
    description: business.description,
    type: "website",
    ...(seo?.siteUrl && { url: seo.siteUrl }),
    ...(seo?.ogImage && { images: [{ url: seo.ogImage }] }),
  },
  icons: seo?.favicon ? { icon: seo.favicon } : undefined,
};

// ---------------------------------------------------------------------------
// JSON-LD — only uses data that actually exists in config
// ---------------------------------------------------------------------------
function buildJsonLd() {
  const ld: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: business.name,
    description: business.description,
  };

  if (seo?.siteUrl) ld.url = seo.siteUrl;
  if (branding.logo && seo?.siteUrl) ld.image = `${seo.siteUrl}${branding.logo}`;
  if (siteConfig.contact.phone) ld.telephone = siteConfig.contact.phone;
  if (siteConfig.contact.email) ld.email = siteConfig.contact.email;

  if (siteConfig.location) {
    ld.address = {
      "@type": "PostalAddress",
      streetAddress: siteConfig.location.address,
    };
  }

  if (siteConfig.openingHours?.length) {
    ld.openingHours = siteConfig.openingHours.map(
      (oh) => `${oh.days} ${oh.hours}`
    );
  }

  return ld;
}

// ---------------------------------------------------------------------------
// CSS variable injection from config branding
// ---------------------------------------------------------------------------
function buildCSSVars(): React.CSSProperties {
  return {
    "--primary": branding.primaryColor,
    "--secondary": branding.secondaryColor,
    "--accent": branding.accentColor,
    "--foreground": branding.textColor ?? "#1C1917",
    "--muted": branding.mutedColor ?? "#78716C",
  } as React.CSSProperties;
}

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang={siteConfig.lang ?? "id"}
      className={`${inter.variable} ${jakarta.variable} h-full antialiased`}
      style={buildCSSVars()}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(buildJsonLd()) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
