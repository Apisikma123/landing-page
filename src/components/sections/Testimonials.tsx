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
    <div className="p-7 rounded-2xl border border-slate-200/80 bg-white shadow-[0_2px_8px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col justify-between">
      <div>
        <div className="w-9 h-9 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-4">
          <Quote size={18} className="fill-current" />
        </div>
        <p className="text-sm md:text-base text-foreground/90 leading-relaxed mb-6 font-normal">
          &ldquo;{testimonial.content}&rdquo;
        </p>
      </div>
      <div className="flex items-center gap-3.5 pt-4 border-t border-slate-100">
        {testimonial.avatar ? (
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-10 h-10 rounded-full object-cover ring-2 ring-blue-100"
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-blue-50 border border-blue-200/60 flex items-center justify-center text-blue-700 text-sm font-bold">
            {testimonial.name.charAt(0)}
          </div>
        )}
        <div>
          <p className="text-sm font-semibold text-foreground tracking-tight">
            {testimonial.name}
          </p>
          {testimonial.role && (
            <p className="text-xs text-muted mt-0.5">{testimonial.role}</p>
          )}
        </div>
      </div>
    </div>
  );
}
