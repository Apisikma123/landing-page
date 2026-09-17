"use client";

import { ChevronDown } from "lucide-react";
import { siteConfig } from "@/config/site";
import { SectionWrapper, SectionHeader } from "@/components/ui/SectionWrapper";

export function FAQ() {
  const config = siteConfig.faq;
  if (!config?.items?.length) return null;

  return (
    <SectionWrapper id="faq">
      <div className="max-w-3xl mx-auto">
        <SectionHeader
          title={config.title ?? "Pertanyaan Umum"}
          subtitle={config.subtitle}
        />
        <div className="space-y-3">
          {config.items.map((item) => (
            <details
              key={item.question}
              className="group rounded-xl border border-border bg-card overflow-hidden"
            >
              <summary className="flex items-center justify-between gap-4 p-5 text-sm font-semibold text-foreground">
                {item.question}
                <ChevronDown
                  size={18}
                  className="faq-chevron text-muted shrink-0"
                />
              </summary>
              <div className="px-5 pb-5 text-sm text-muted leading-relaxed">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
