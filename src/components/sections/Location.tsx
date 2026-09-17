import { MapPin, ExternalLink, Clock } from "lucide-react";
import { siteConfig } from "@/config/site";
import { SectionWrapper, SectionHeader } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";

export function Location() {
  const { location, openingHours } = siteConfig;
  if (!location) return null;

  return (
    <SectionWrapper id="location" background="secondary">
      <SectionHeader title="Lokasi Kami" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Info */}
        <div className="space-y-6">
          <div className="flex items-start gap-3">
            <MapPin size={20} className="text-primary mt-0.5 shrink-0" />
            <div>
              <p className="font-semibold text-foreground text-sm">Alamat</p>
              <p className="text-sm text-muted mt-1">{location.address}</p>
            </div>
          </div>

          {openingHours && openingHours.length > 0 && (
            <div className="flex items-start gap-3">
              <Clock size={20} className="text-primary mt-0.5 shrink-0" />
              <div>
                <p className="font-semibold text-foreground text-sm">
                  Jam Operasional
                </p>
                <ul className="mt-1 space-y-1">
                  {openingHours.map((oh) => (
                    <li key={oh.days} className="text-sm text-muted">
                      {oh.days}: <span className="text-foreground">{oh.hours}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {location.googleMapsUrl && (
            <Button
              href={location.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="outline"
              size="sm"
            >
              <ExternalLink size={14} />
              Lihat di Google Maps
            </Button>
          )}
        </div>

        {/* Map embed (optional) */}
        {location.embedUrl && (
          <div className="rounded-xl overflow-hidden border border-border aspect-[4/3] lg:aspect-auto lg:min-h-[300px]">
            <iframe
              src={location.embedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Peta ${siteConfig.business.name}`}
            />
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}
