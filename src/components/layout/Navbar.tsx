"use client";

import { useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { siteConfig } from "@/config/site";
import { generateWhatsAppUrl } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

const defaultNav = [
  { label: "Beranda", href: "#" },
  ...(siteConfig.products?.items?.length ? [{ label: "Produk", href: "#products" }] : []),
  ...(siteConfig.services?.items?.length ? [{ label: "Layanan", href: "#services" }] : []),
  ...(siteConfig.gallery?.items?.length ? [{ label: "Galeri", href: "#gallery" }] : []),
  ...(siteConfig.about ? [{ label: "Tentang", href: "#about" }] : []),
  ...(siteConfig.faq?.items?.length ? [{ label: "FAQ", href: "#faq" }] : []),
  ...(siteConfig.location ? [{ label: "Lokasi", href: "#location" }] : []),
];

const navItems = siteConfig.nav ?? defaultNav;
const waUrl = generateWhatsAppUrl(
  siteConfig.contact.whatsapp,
  siteConfig.contact.whatsappMessage
);

export function Navbar() {
  const [open, setOpen] = useState(false);
  const { business, branding } = siteConfig;

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <nav className="container-narrow flex items-center justify-between px-5 h-16 md:h-[4.25rem]">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 shrink-0 group">
          {branding.logo && (
            <img
              src={branding.logo}
              alt={business.name}
              className="h-9 w-9 object-contain rounded-full drop-shadow-sm transition-transform group-hover:scale-105"
            />
          )}
          <div className="flex flex-col">
            <span className="text-base md:text-lg font-bold text-foreground tracking-tight leading-tight">
              {business.name}
            </span>
            <span className="text-[10px] text-muted font-medium">
              {business.category ?? "Template UMKM Indonesia"}
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm text-muted hover:text-foreground transition-colors"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <a
          href={waUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
        >
          <MessageCircle size={16} />
          WhatsApp
        </a>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden p-2 text-foreground"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-border bg-background mobile-menu-enter">
          <ul className="flex flex-col px-5 py-4 gap-1">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-2.5 text-sm text-muted hover:text-foreground transition-colors"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-2 mt-2 border-t border-border">
              <a
                href={waUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-primary text-white px-4 py-2.5 rounded-lg text-sm font-medium"
              >
                <MessageCircle size={16} />
                WhatsApp Kami
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
