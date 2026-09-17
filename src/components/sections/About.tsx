import Image from "next/image";
import { Check } from "lucide-react";
import { siteConfig } from "@/config/site";
import { SectionWrapper, SectionHeader } from "@/components/ui/SectionWrapper";

export function About() {
  const about = siteConfig.about;
  if (!about) return null;

  return (
    <SectionWrapper id="about" background="secondary">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
        {/* Image */}
        {about.image && (
          <div className="p-2 rounded-3xl bg-white border border-slate-200/80 shadow-sm">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100">
              <Image
                src={about.image}
                alt={about.title ?? `Tentang ${siteConfig.business.name}`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        )}

        {/* Content */}
        <div>
          <SectionHeader
            title={about.title ?? `Tentang ${siteConfig.business.name}`}
          />
          <p className="text-muted text-base md:text-lg leading-relaxed -mt-6">
            {about.description}
          </p>
          {about.highlights && about.highlights.length > 0 && (
            <ul className="mt-6 space-y-3.5">
              {about.highlights.map((h) => (
                <li key={h} className="flex items-center gap-3 text-sm md:text-base font-medium text-foreground">
                  <span className="flex items-center justify-center w-6 h-6 rounded-full bg-blue-50 border border-blue-200/80 text-blue-700 shrink-0">
                    <Check size={13} strokeWidth={2.5} />
                  </span>
                  {h}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </SectionWrapper>
  );
}
