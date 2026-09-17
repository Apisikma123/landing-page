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
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
            <Image
              src={about.image}
              alt={about.title ?? `Tentang ${siteConfig.business.name}`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
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
            <ul className="mt-6 space-y-3">
              {about.highlights.map((h) => (
                <li key={h} className="flex items-center gap-3 text-sm">
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-primary/10 text-primary shrink-0">
                    <Check size={12} strokeWidth={3} />
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
