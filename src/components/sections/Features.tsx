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
        {config.items.map((f, i) => (
          <FeatureCard key={f.title} feature={f} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  const indexStr = String(index + 1).padStart(2, "0");
  return (
    <div className="group p-7 rounded-2xl border border-slate-200/80 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
      <div>
        <div className="flex items-center justify-between mb-5">
          <span className="font-mono text-xs font-bold text-primary tracking-widest">
            /{indexStr}
          </span>
          <div className="text-slate-400 group-hover:text-primary transition-colors">
            <FeatureIcon name={feature.icon} />
          </div>
        </div>
        <h3 className="text-base font-bold text-foreground mb-2.5 tracking-tight">
          {feature.title}
        </h3>
        <p className="text-sm text-muted leading-relaxed">
          {feature.description}
        </p>
      </div>
    </div>
  );
}
