import { Quote } from "lucide-react";
import { siteConfig } from "@/config/site";
import { SectionWrapper, SectionHeader } from "@/components/ui/SectionWrapper";
import type { Testimonial } from "@/config/types";

export function Testimonials() {
  const config = siteConfig.testimonials;
  if (!config?.items?.length) return null;

  return (
    <SectionWrapper id="testimonials" background="secondary">
      <SectionHeader
        title={config.title ?? "Kata Pelanggan"}
        subtitle={config.subtitle}
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {config.items.map((t) => (
          <TestimonialCard key={t.name} testimonial={t} />
        ))}
      </div>
    </SectionWrapper>
  );
}

function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="p-6 rounded-xl border border-border bg-card">
      <Quote size={20} className="text-primary/30 mb-3" />
      <p className="text-sm text-foreground leading-relaxed mb-4">
        {testimonial.content}
      </p>
      <div className="flex items-center gap-3">
        {testimonial.avatar ? (
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-9 h-9 rounded-full object-cover"
          />
        ) : (
          <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center text-primary text-sm font-bold">
            {testimonial.name.charAt(0)}
          </div>
        )}
        <div>
          <p className="text-sm font-semibold text-foreground">
            {testimonial.name}
          </p>
          {testimonial.role && (
            <p className="text-xs text-muted">{testimonial.role}</p>
          )}
        </div>
      </div>
    </div>
  );
}
