import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { generateWhatsAppUrl } from "@/lib/whatsapp";
import { Button } from "@/components/ui/Button";

export function FinalCTA() {
  const { finalCTA, contact, business } = siteConfig;
  const waUrl = generateWhatsAppUrl(contact.whatsapp, contact.whatsappMessage);

  const title = finalCTA?.title ?? `Hubungi ${business.name}`;
  const desc =
    finalCTA?.description ??
    `Siap untuk memulai? Hubungi kami sekarang via WhatsApp.`;

  return (
    <section className="bg-primary">
      <div className="container-narrow px-5 py-16 md:py-20 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white">
          {title}
        </h2>
        <p className="mt-4 text-base md:text-lg text-white/80 max-w-xl mx-auto">
          {desc}
        </p>
        <div className="mt-8 flex justify-center">
          <Button
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="whatsapp"
            size="lg"
            className="text-base md:text-lg px-8 py-3.5 font-bold shadow-lg hover:scale-105 transition-transform"
          >
            <MessageCircle size={22} className="fill-current" />
            Chat via WhatsApp
          </Button>
        </div>
      </div>
    </section>
  );
}
