"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { siteConfig } from "@/config/site";
import { SectionWrapper, SectionHeader } from "@/components/ui/SectionWrapper";
import { cn } from "@/lib/utils";
import type { GalleryItem } from "@/config/types";

export function Gallery() {
  const config = siteConfig.gallery;
  if (!config?.items?.length) return null;

  const variant = config.variant ?? "grid";

  return (
    <SectionWrapper id="gallery">
      <SectionHeader
        title={config.title ?? "Galeri"}
        subtitle={config.subtitle}
      />
      {variant === "masonry" ? (
        <MasonryLayout items={config.items} />
      ) : (
        <GridLayout items={config.items} />
      )}
    </SectionWrapper>
  );
}

function GridLayout({ items }: { items: GalleryItem[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
      {items.map((item, i) => (
        <GalleryImage key={item.src} item={item} index={i} />
      ))}
    </div>
  );
}

function MasonryLayout({ items }: { items: GalleryItem[] }) {
  return (
    <div className="columns-2 md:columns-3 gap-3 md:gap-4 space-y-3 md:space-y-4">
      {items.map((item, i) => (
        <GalleryImage key={item.src} item={item} index={i} masonry />
      ))}
    </div>
  );
}

function GalleryImage({
  item,
  index,
  masonry,
}: {
  item: GalleryItem;
  index: number;
  masonry?: boolean;
}) {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const openLightbox = useCallback(() => setLightboxOpen(true), []);
  const closeLightbox = useCallback(() => setLightboxOpen(false), []);

  // Vary aspect ratios for masonry
  const masonryAspects = [
    "aspect-[3/4]",
    "aspect-[4/3]",
    "aspect-square",
    "aspect-[3/4]",
    "aspect-[4/3]",
    "aspect-[4/5]",
  ];

  return (
    <>
      <button
        onClick={openLightbox}
        className={cn(
          "relative overflow-hidden rounded-2xl w-full group cursor-pointer border border-slate-200/80 bg-slate-100 shadow-sm hover:shadow-md transition-all duration-300",
          masonry
            ? masonryAspects[index % masonryAspects.length] + " break-inside-avoid"
            : "aspect-square"
        )}
        aria-label={`Lihat ${item.alt}`}
      >
        <Image
          src={item.src}
          alt={item.alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-slate-950/0 group-hover:bg-slate-950/20 transition-colors duration-300 flex items-center justify-center pointer-events-none">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-3.5 py-1.5 rounded-full bg-primary text-white text-xs font-semibold shadow-md">
            Lihat Foto
          </span>
        </div>
      </button>

      {/* Lightbox */}
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label={item.alt}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/80 hover:text-white z-10"
            aria-label="Tutup"
          >
            <X size={28} />
          </button>
          <div
            className="relative max-w-4xl max-h-[85vh] w-full h-full"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-contain"
              sizes="90vw"
            />
          </div>
        </div>
      )}
    </>
  );
}
