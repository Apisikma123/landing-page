import { AtSign, Mail, Phone, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";
import { generateWhatsAppUrl } from "@/lib/whatsapp";

export function Footer() {
  const { business, contact, location, openingHours } = siteConfig;
  const waUrl = generateWhatsAppUrl(contact.whatsapp, contact.whatsappMessage);

  return (
    <footer className="bg-foreground text-white/80">
      <div className="container-narrow px-5 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold text-white mb-3">
              {business.name}
            </h3>
            <p className="text-sm leading-relaxed max-w-xs">
              {business.tagline}
            </p>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
              Kontak
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 hover:text-white transition-colors"
                >
                  <Phone size={14} />
                  {contact.whatsapp}
                </a>
              </li>
              {contact.email && (
                <li>
                  <a
                    href={`mailto:${contact.email}`}
                    className="inline-flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <Mail size={14} />
                    {contact.email}
                  </a>
                </li>
              )}
              {contact.instagram && (
                <li>
                  <a
                    href={`https://instagram.com/${contact.instagram}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <AtSign size={14} />
                    @{contact.instagram}
                  </a>
                </li>
              )}
              {location && (
                <li className="flex items-start gap-2">
                  <MapPin size={14} className="mt-0.5 shrink-0" />
                  <span>{location.address}</span>
                </li>
              )}
            </ul>
          </div>

          {/* Opening Hours */}
          {openingHours && openingHours.length > 0 && (
            <div>
              <h4 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
                Jam Buka
              </h4>
              <ul className="space-y-2 text-sm">
                {openingHours.map((oh) => (
                  <li key={oh.days} className="flex justify-between gap-4">
                    <span>{oh.days}</span>
                    <span className="text-white">{oh.hours}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-6 border-t border-white/10 text-center text-xs text-white/50">
          &copy; {new Date().getFullYear()} {business.name}. All rights
          reserved.
        </div>
      </div>
    </footer>
  );
}
