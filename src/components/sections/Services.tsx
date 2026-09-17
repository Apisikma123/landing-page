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
    <div className="p-7 rounded-2xl border border-slate-200/80 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.07)] hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between">
      <div>
        <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center text-blue-700 mb-5">
          <ServiceIcon name={service.icon} />
        </div>
        <h3 className="text-base font-semibold text-foreground mb-2 tracking-tight">
          {service.name}
        </h3>
        <p className="text-sm text-muted leading-relaxed">{service.description}</p>
      </div>
      {service.price && (
        <div className="mt-5 pt-4 border-t border-slate-100 flex items-center justify-between">
          <span className="text-xs text-muted font-medium">Biaya Layanan</span>
          <p className="text-sm font-bold text-primary">{service.price}</p>
        </div>
      )}
    </div>
  );
}
