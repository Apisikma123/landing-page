// ============================================================================
// Landing Page Template Engine — Type Definitions
// ============================================================================

export type TemplateType = "food" | "service" | "store" | "business";

export type HeroVariant = "split" | "centered" | "image-background";
export type ProductsVariant = "grid" | "featured";
export type GalleryVariant = "grid" | "masonry";

// ---------------------------------------------------------------------------
// Business
// ---------------------------------------------------------------------------

export interface BusinessInfo {
  name: string;
  category: string;
  tagline: string;
  description: string;
  established?: string;
}

// ---------------------------------------------------------------------------
// Branding
// ---------------------------------------------------------------------------

export interface Branding {
  primaryColor: string;
  secondaryColor: string;
  accentColor: string;
  textColor?: string;
  mutedColor?: string;
  logo?: string;
}

// ---------------------------------------------------------------------------
// Contact & Location
// ---------------------------------------------------------------------------

export interface ContactInfo {
  whatsapp: string;
  whatsappMessage?: string;
  instagram?: string;
  email?: string;
  phone?: string;
  tiktok?: string;
  facebook?: string;
}

export interface LocationInfo {
  address: string;
  googleMapsUrl?: string;
  embedUrl?: string;
}

// ---------------------------------------------------------------------------
// Opening Hours
// ---------------------------------------------------------------------------

export interface OpeningHour {
  days: string;
  hours: string;
}

// ---------------------------------------------------------------------------
// Hero
// ---------------------------------------------------------------------------

export interface CTAConfig {
  label: string;
  type: "whatsapp" | "link" | "scroll";
  href?: string;
  scrollTo?: string;
}

export interface HeroConfig {
  variant?: HeroVariant;
  badge?: string;
  title: string;
  description: string;
  image?: string;
  primaryCTA: CTAConfig;
  secondaryCTA?: CTAConfig;
}

// ---------------------------------------------------------------------------
// About
// ---------------------------------------------------------------------------

export interface AboutConfig {
  title?: string;
  description: string;
  image?: string;
  highlights?: string[];
}

// ---------------------------------------------------------------------------
// Products
// ---------------------------------------------------------------------------

export interface Product {
  name: string;
  description?: string;
  price?: string;
  image?: string;
  badge?: string;
}

export interface ProductsConfig {
  variant?: ProductsVariant;
  title?: string;
  subtitle?: string;
  items: Product[];
}

// ---------------------------------------------------------------------------
// Services
// ---------------------------------------------------------------------------

export interface Service {
  name: string;
  description: string;
  price?: string;
  icon?: string;
}

export interface ServicesConfig {
  title?: string;
  subtitle?: string;
  items: Service[];
}

// ---------------------------------------------------------------------------
// Features / Benefits
// ---------------------------------------------------------------------------

export interface Feature {
  title: string;
  description: string;
  icon?: string;
}

export interface FeaturesConfig {
  title?: string;
  subtitle?: string;
  items: Feature[];
}

// ---------------------------------------------------------------------------
// Gallery
// ---------------------------------------------------------------------------

export interface GalleryItem {
  src: string;
  alt: string;
}

export interface GalleryConfig {
  variant?: GalleryVariant;
  title?: string;
  subtitle?: string;
  items: GalleryItem[];
}

// ---------------------------------------------------------------------------
// Testimonials
// ---------------------------------------------------------------------------

export interface Testimonial {
  name: string;
  role?: string;
  content: string;
  avatar?: string;
}

export interface TestimonialsConfig {
  title?: string;
  subtitle?: string;
  items: Testimonial[];
}

// ---------------------------------------------------------------------------
// FAQ
// ---------------------------------------------------------------------------

export interface FAQItem {
  question: string;
  answer: string;
}

export interface FAQConfig {
  title?: string;
  subtitle?: string;
  items: FAQItem[];
}

// ---------------------------------------------------------------------------
// Final CTA
// ---------------------------------------------------------------------------

export interface FinalCTAConfig {
  title?: string;
  description?: string;
}

// ---------------------------------------------------------------------------
// SEO
// ---------------------------------------------------------------------------

export interface SEOConfig {
  siteUrl?: string;
  favicon?: string;
  ogImage?: string;
}

// ---------------------------------------------------------------------------
// Navigation
// ---------------------------------------------------------------------------

export interface NavItem {
  label: string;
  href: string;
}

// ---------------------------------------------------------------------------
// Root Config
// ---------------------------------------------------------------------------

export interface SiteConfig {
  template: TemplateType;
  lang?: string;

  business: BusinessInfo;
  branding: Branding;
  seo?: SEOConfig;

  hero: HeroConfig;
  about?: AboutConfig;

  contact: ContactInfo;
  location?: LocationInfo;
  openingHours?: OpeningHour[];

  products?: ProductsConfig;
  services?: ServicesConfig;
  features?: FeaturesConfig;
  gallery?: GalleryConfig;
  testimonials?: TestimonialsConfig;
  faq?: FAQConfig;
  finalCTA?: FinalCTAConfig;

  nav?: NavItem[];
}
