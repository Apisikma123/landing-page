import {
  Wheat,
  Clock,
  Leaf,
  Truck,
  Shield,
  Star,
  Heart,
  Zap,
  Award,
  ThumbsUp,
  Sparkles,
  BadgeCheck,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { SectionWrapper, SectionHeader } from "@/components/ui/SectionWrapper";
import type { Feature } from "@/config/types";

const iconMap: Record<string, React.ElementType> = {
  wheat: Wheat,
  clock: Clock,
  leaf: Leaf,
  truck: Truck,
  shield: Shield,
  star: Star,
  heart: Heart,
  zap: Zap,
  award: Award,
  thumbsup: ThumbsUp,
  sparkles: Sparkles,
  badge: BadgeCheck,
};

function FeatureIcon({ name }: { name?: string }) {
  const Icon = name ? iconMap[name.toLowerCase()] : null;
  if (!Icon) return <Star size={20} className="text-primary" />;
  return <Icon size={20} className="text-primary" />;
}

export function Features() {
  const config = siteConfig.features;
  if (!config?.items?.length) return null;

  return (
    <SectionWrapper id="features">
      <SectionHeader
        title={config.title ?? "Keunggulan Kami"}
        subtitle={config.subtitle}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {config.items.map((f) => (
          <FeatureCard key={f.title} feature={f} />
        ))}
      </div>
    </SectionWrapper>
  );
}

function FeatureCard({ feature }: { feature: Feature }) {
  return (
    <div className="p-6 rounded-xl border border-border bg-card hover:bg-card-hover transition-colors">
      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
        <FeatureIcon name={feature.icon} />
      </div>
      <h3 className="text-base font-semibold text-foreground mb-2">
        {feature.title}
      </h3>
      <p className="text-sm text-muted leading-relaxed">
        {feature.description}
      </p>
    </div>
  );
}
