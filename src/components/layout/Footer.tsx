import { AtSign, Mail, Phone, MapPin } from "lucide-react";
import { siteConfig } from "@/config/site";
import { generateWhatsAppUrl } from "@/lib/whatsapp";

export function Footer() {
  const { business, contact, location, openingHours, branding } = siteConfig;
  const waUrl = generateWhatsAppUrl(contact.whatsapp, contact.whatsappMessage);
  const y = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white/80">
      <div className="container-narrow px-5 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              {branding.logo && (
                <img
                  src={branding.logo}
                  alt={business.name}
                  className="h-8 w-8 object-contain rounded-full bg-white p-0.5"
                />
              )}
              <h3 className="text-lg font-bold text-white leading-none">
                {business.name}
              </h3>
            </div>
            <p className="text-sm leading-relaxed max-w-xs text-white/70">
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
        <div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>
            &copy; {y} {business.name}. All rights reserved.
          </p>
          <p>
            Created by{" "}
            <a
              href="https://pagesale.id"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/70 hover:text-white font-medium transition-colors underline underline-offset-2"
            >
              PageSale
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
