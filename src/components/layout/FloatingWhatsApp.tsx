"use client";

import { MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { generateWhatsAppUrl } from "@/lib/whatsapp";

export function FloatingWhatsApp() {
  const { contact } = siteConfig;
  const waUrl = generateWhatsAppUrl(contact.whatsapp, contact.whatsappMessage);

  return (
    <a
      href={waUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat via WhatsApp"
      className="fixed bottom-5 right-5 z-40 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-200"
    >
      <MessageCircle size={26} />
    </a>
  );
}
