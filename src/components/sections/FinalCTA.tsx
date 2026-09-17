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
    <section className="relative overflow-hidden bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-950 text-white py-20 md:py-28">
      {/* Subtle radial ambient highlight */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-400/15 via-transparent to-transparent pointer-events-none" />

      <div className="container-narrow px-5 relative z-10 text-center max-w-3xl mx-auto">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
          {title}
        </h2>
        <p className="mt-5 text-base md:text-lg text-blue-100/80 max-w-xl mx-auto leading-relaxed">
          {desc}
        </p>
        <div className="mt-8 flex justify-center">
          <Button
            href={waUrl}
            target="_blank"
            rel="noopener noreferrer"
            variant="whatsapp"
            size="lg"
            className="text-base md:text-lg px-8 py-4 font-bold shadow-xl hover:shadow-2xl rounded-full"
          >
            <MessageCircle size={22} className="fill-current text-slate-950 shrink-0" />
            <span className="text-slate-950">Chat via WhatsApp</span>
          </Button>
        </div>
      </div>
    </section>
  );
}
