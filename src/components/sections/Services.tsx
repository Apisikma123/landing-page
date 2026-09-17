import {
  Scissors,
  Wrench,
  Camera,
  Sparkles,
  Shirt,
  Brush,
  Star,
  Settings,
  Droplets,
  Monitor,
} from "lucide-react";
import { siteConfig } from "@/config/site";
import { SectionWrapper, SectionHeader } from "@/components/ui/SectionWrapper";
import type { Service } from "@/config/types";

const iconMap: Record<string, React.ElementType> = {
  scissors: Scissors,
  wrench: Wrench,
  camera: Camera,
  sparkles: Sparkles,
  shirt: Shirt,
  brush: Brush,
  star: Star,
  settings: Settings,
  droplets: Droplets,
  monitor: Monitor,
};

function ServiceIcon({ name }: { name?: string }) {
  const Icon = name ? iconMap[name.toLowerCase()] : null;
  if (!Icon) return <Star size={20} className="text-primary" />;
  return <Icon size={20} className="text-primary" />;
}

export function Services() {
  const config = siteConfig.services;
  if (!config?.items?.length) return null;

  return (
    <SectionWrapper id="services">
      <SectionHeader
        title={config.title ?? "Layanan Kami"}
        subtitle={config.subtitle}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {config.items.map((s) => (
          <ServiceCard key={s.name} service={s} />
        ))}
      </div>
    </SectionWrapper>
  );
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="p-6 rounded-xl border border-border bg-card hover:bg-card-hover transition-colors">
      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
        <ServiceIcon name={service.icon} />
      </div>
      <h3 className="text-base font-semibold text-foreground mb-2">
        {service.name}
      </h3>
      <p className="text-sm text-muted leading-relaxed">{service.description}</p>
      {service.price && (
        <p className="mt-3 text-sm font-bold text-primary">{service.price}</p>
      )}
    </div>
  );
}
