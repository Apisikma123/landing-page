import { MapPin, ExternalLink, Clock } from "lucide-react";
import { siteConfig } from "@/config/site";
import { SectionWrapper, SectionHeader } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";

export function Location() {
  const { location, openingHours, business } = siteConfig;
  if (!location) return null;

  const mapSrc =
    location.embedUrl ||
    (location.address
      ? `https://maps.google.com/maps?q=${encodeURIComponent(
          location.address
        )}&t=&z=14&ie=UTF8&iwloc=&output=embed`
      : null);

  return (
    <SectionWrapper id="location" background="secondary">
      <SectionHeader
        title="Lokasi Kami"
        subtitle="Kunjungi alamat kami atau temukan petunjuk arah langsung di peta"
      />
      <div
        className={`grid grid-cols-1 ${
          mapSrc ? "lg:grid-cols-2" : "max-w-xl mx-auto"
        } gap-8 items-start`}
      >
        {/* Info Card */}
        <div className="bg-card p-6 md:p-8 rounded-2xl border border-border space-y-6 shadow-sm">
          <div className="flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
              <MapPin size={20} className="text-primary" />
            </div>
            <div>
              <p className="font-semibold text-foreground text-base">Alamat</p>
              <p className="text-sm text-muted mt-1 leading-relaxed">
                {location.address}
              </p>
            </div>
          </div>

          {openingHours && openingHours.length > 0 && (
            <div className="flex items-start gap-3.5 pt-2 border-t border-border">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <Clock size={20} className="text-primary" />
              </div>
              <div className="w-full">
                <p className="font-semibold text-foreground text-base">
                  Jam Operasional
                </p>
                <ul className="mt-2 space-y-1.5 divide-y divide-border/60">
                  {openingHours.map((oh) => (
                    <li
                      key={oh.days}
                      className="text-sm text-muted flex justify-between pt-1.5 first:pt-0"
                    >
                      <span>{oh.days}</span>
                      <span className="text-foreground font-medium">
                        {oh.hours}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}

          {location.googleMapsUrl && (
            <div className="pt-2">
              <Button
                href={location.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                variant="outline"
                size="md"
                className="w-full sm:w-auto"
              >
                <ExternalLink size={16} />
                Lihat di Google Maps
              </Button>
            </div>
          )}
        </div>

        {/* Map embed */}
        {mapSrc && (
          <div className="rounded-2xl overflow-hidden border border-border shadow-sm aspect-[4/3] lg:aspect-auto lg:h-full lg:min-h-[380px] bg-slate-100">
            <iframe
              src={mapSrc}
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "320px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`Peta Lokasi ${business.name}`}
            />
          </div>
        )}
      </div>
    </SectionWrapper>
  );
}
