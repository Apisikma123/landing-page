import Image from "next/image";
import { MapPin, ArrowDown } from "lucide-react";
import { siteConfig } from "@/config/site";
import { generateWhatsAppUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

function getCTAHref(cta: typeof siteConfig.hero.primaryCTA): string {
  if (cta.type === "whatsapp") {
    return generateWhatsAppUrl(
      siteConfig.contact.whatsapp,
      siteConfig.contact.whatsappMessage
    );
  }
  if (cta.type === "scroll" && cta.scrollTo) return `#${cta.scrollTo}`;
  return cta.href ?? "#";
}

function getCTATarget(cta: typeof siteConfig.hero.primaryCTA) {
  return cta.type === "whatsapp" ? "_blank" : undefined;
}

function getCTARel(cta: typeof siteConfig.hero.primaryCTA) {
  return cta.type === "whatsapp" ? "noopener noreferrer" : undefined;
}

export function Hero() {
  const { hero, business } = siteConfig;
  const variant = hero.variant ?? "split";

  if (variant === "centered") return <HeroCentered />;
  if (variant === "image-background") return <HeroImageBg />;
  return <HeroSplit />;
}

// ---------------------------------------------------------------------------
// Split (default)
// ---------------------------------------------------------------------------
function HeroSplit() {
  const { hero } = siteConfig;

  return (
    <section className="section-padding">
      <div className="container-narrow grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Text */}
        <div className="order-2 lg:order-1">
          {hero.badge && (
            <div className="flex items-center gap-2.5 mb-6">
              <span className="h-[2px] w-6 bg-primary" />
              <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-700">
                {hero.badge}
              </span>
            </div>
          )}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight tracking-tight">
            {hero.title}
          </h1>
          <p className="mt-4 text-base md:text-lg text-muted max-w-lg leading-relaxed">
            {hero.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button
              href={getCTAHref(hero.primaryCTA)}
              target={getCTATarget(hero.primaryCTA)}
              rel={getCTARel(hero.primaryCTA)}
              size="lg"
            >
              {hero.primaryCTA.label}
            </Button>
            {hero.secondaryCTA && (
              <Button
                href={getCTAHref(hero.secondaryCTA)}
                target={getCTATarget(hero.secondaryCTA)}
                rel={getCTARel(hero.secondaryCTA)}
                variant="outline"
                size="lg"
              >
                {hero.secondaryCTA.label}
              </Button>
            )}
          </div>
        </div>

        {/* Image with hardware double-bezel frame */}
        <div className="order-1 lg:order-2">
          {hero.image ? (
            <div className="p-2 rounded-3xl bg-slate-100/80 border border-slate-200/80 shadow-sm">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src={hero.image}
                  alt={hero.title}
                  fill
                  priority
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          ) : (
            <div className="aspect-[4/3] rounded-3xl bg-secondary" />
          )}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Centered
// ---------------------------------------------------------------------------
function HeroCentered() {
  const { hero } = siteConfig;

  return (
    <section className="section-padding">
      <div className="container-narrow text-center max-w-3xl mx-auto">
        {hero.badge && (
          <div className="inline-flex items-center gap-2.5 mb-6">
            <span className="h-[2px] w-6 bg-primary" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-slate-700">
              {hero.badge}
            </span>
            <span className="h-[2px] w-6 bg-primary" />
          </div>
        )}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground leading-tight tracking-tight">
          {hero.title}
        </h1>
        <p className="mt-4 text-base md:text-lg text-muted max-w-2xl mx-auto">
          {hero.description}
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button
            href={getCTAHref(hero.primaryCTA)}
            target={getCTATarget(hero.primaryCTA)}
            rel={getCTARel(hero.primaryCTA)}
            size="lg"
          >
            {hero.primaryCTA.label}
          </Button>
          {hero.secondaryCTA && (
            <Button
              href={getCTAHref(hero.secondaryCTA)}
              target={getCTATarget(hero.secondaryCTA)}
              rel={getCTARel(hero.secondaryCTA)}
              variant="outline"
              size="lg"
            >
              {hero.secondaryCTA.label}
            </Button>
          )}
        </div>
        {hero.image && (
          <div className="mt-10 relative aspect-[16/9] rounded-2xl overflow-hidden">
            <Image
              src={hero.image}
              alt={hero.title}
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </div>
        )}
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Image Background
// ---------------------------------------------------------------------------
function HeroImageBg() {
  const { hero } = siteConfig;

  return (
    <section className="relative min-h-[70vh] flex items-center">
      {hero.image && (
        <Image
          src={hero.image}
          alt={hero.title}
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      )}
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 container-narrow px-5 py-20 text-center max-w-3xl mx-auto">
        {hero.badge && (
          <div className="inline-flex items-center gap-2.5 mb-6">
            <span className="h-[2px] w-6 bg-white/70" />
            <span className="text-xs font-bold uppercase tracking-[0.2em] text-white">
              {hero.badge}
            </span>
            <span className="h-[2px] w-6 bg-white/70" />
          </div>
        )}
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
          {hero.title}
        </h1>
        <p className="mt-4 text-base md:text-lg text-white/80 max-w-2xl mx-auto">
          {hero.description}
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button
            href={getCTAHref(hero.primaryCTA)}
            target={getCTATarget(hero.primaryCTA)}
            rel={getCTARel(hero.primaryCTA)}
            size="lg"
          >
            {hero.primaryCTA.label}
          </Button>
          {hero.secondaryCTA && (
            <Button
              href={getCTAHref(hero.secondaryCTA)}
              target={getCTATarget(hero.secondaryCTA)}
              rel={getCTARel(hero.secondaryCTA)}
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-foreground"
            >
              {hero.secondaryCTA.label}
            </Button>
          )}
        </div>
      </div>
    </section>
  );
}
