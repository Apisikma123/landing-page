"use client";

import { useState } from "react";
import { Sparkles, Palette, Check } from "lucide-react";

interface ColorTheme {
  name: string;
  category: string;
  primary: string;
  accent: string;
  secondary: string;
  bgHex: string;
}

const COLOR_THEMES: ColorTheme[] = [
  {
    name: "Biru",
    category: "Jasa & Bisnis",
    primary: "#1D4ED8",
    accent: "#1E40AF",
    secondary: "#EFF6FF",
    bgHex: "#1D4ED8",
  },
  {
    name: "Hijau",
    category: "F&B & Laundry",
    primary: "#15803D",
    accent: "#166534",
    secondary: "#F0FDF4",
    bgHex: "#15803D",
  },
  {
    name: "Oranye",
    category: "Kuliner & Cafe",
    primary: "#C2410C",
    accent: "#9A3412",
    secondary: "#FFF7ED",
    bgHex: "#C2410C",
  },
  {
    name: "Ungu",
    category: "Salon & Butik",
    primary: "#7E22CE",
    accent: "#6B21A8",
    secondary: "#FAF5FF",
    bgHex: "#7E22CE",
  },
  {
    name: "Merah",
    category: "Resto & Bengkel",
    primary: "#B91C1C",
    accent: "#991B1B",
    secondary: "#FEF2F2",
    bgHex: "#B91C1C",
  },
  {
    name: "Hitam",
    category: "Modern & Elegan",
    primary: "#0F172A",
    accent: "#334155",
    secondary: "#F1F5F9",
    bgHex: "#0F172A",
  },
];

export function DemoCustomizerBanner() {
  const [activeTheme, setActiveTheme] = useState<string>("Biru");
  const [notice, setNotice] = useState<string | null>(null);

  const applyTheme = (theme: ColorTheme) => {
    setActiveTheme(theme.name);
    const root = document.documentElement;
    root.style.setProperty("--primary", theme.primary);
    root.style.setProperty("--accent", theme.accent);
    root.style.setProperty("--secondary", theme.secondary);

    setNotice(`Warna tema diubah ke ${theme.name} (${theme.category})`);
    setTimeout(() => {
      setNotice(null);
    }, 2500);
  };

  return (
    <div className="bg-slate-900 text-white border-b border-slate-800 text-xs py-2 px-4 sticky top-0 z-50 transition-colors">
      <div className="container-narrow flex flex-wrap items-center justify-between gap-3">
        {/* Left message */}
        <div className="flex items-center gap-2 flex-wrap">
          <span className="inline-flex items-center gap-1.5 bg-primary text-white px-2.5 py-0.5 rounded-full font-semibold text-[11px] shadow-sm transition-colors">
            <Sparkles size={12} />
            Live Preview
          </span>
          <span className="text-slate-300 font-medium">
            Logo, teks, & foto bisa disesuaikan untuk usaha Anda.{" "}
            <span className="text-white font-semibold">
              Coba ganti warna tema:
            </span>
          </span>
        </div>

        {/* Color Palette Buttons */}
        <div className="flex items-center gap-1.5 flex-wrap">
          <Palette size={13} className="text-slate-400 mr-1 hidden sm:inline" />
          {COLOR_THEMES.map((theme) => {
            const isSelected = activeTheme === theme.name;
            return (
              <button
                key={theme.name}
                onClick={() => applyTheme(theme)}
                className={`group relative flex items-center gap-1.5 px-2 py-1 rounded-md text-[11px] font-medium transition-all ${
                  isSelected
                    ? "bg-slate-800 text-white ring-1 ring-white/30"
                    : "bg-slate-950/60 text-slate-300 hover:bg-slate-800 hover:text-white"
                }`}
                title={`Ubah warna tema ke ${theme.name} (${theme.category})`}
                type="button"
              >
                <span
                  className="w-3 h-3 rounded-full flex items-center justify-center shrink-0 border border-white/20"
                  style={{ backgroundColor: theme.bgHex }}
                >
                  {isSelected && <Check size={8} className="text-white" />}
                </span>
                <span>{theme.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Floating feedback toast if theme changed */}
      {notice && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-3 py-1.5 rounded-full bg-slate-900 text-white text-[11px] font-medium shadow-lg border border-slate-700 pointer-events-none z-50">
          ✓ {notice}
        </div>
      )}
    </div>
  );
}
