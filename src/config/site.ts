// ============================================================================
// CLIENT CONTENT — EDIT THIS FILE
// ============================================================================
// This is the only file you need to modify for each client.
// Replace the demo data below with actual client information.
// ============================================================================

import type { SiteConfig } from "./types";

export const siteConfig: SiteConfig = {
  template: "food",
  lang: "id",

  // --------------------------------------------------------------------------
  // Business Info
  // --------------------------------------------------------------------------
  business: {
    name: "Demo Bakery",
    category: "Bakery & Pastry",
    tagline: "Roti & Kue Segar Setiap Hari",
    description:
      "Demo Bakery menyajikan roti artisan dan kue buatan tangan dengan bahan-bahan pilihan. Dibuat fresh setiap hari untuk memastikan kualitas terbaik sampai di tangan Anda.",
  },

  // --------------------------------------------------------------------------
  // Branding — adjust colors per client
  // --------------------------------------------------------------------------
  branding: {
    primaryColor: "#7C2D12",
    secondaryColor: "#FFF7ED",
    accentColor: "#EA580C",
    textColor: "#1C1917",
    mutedColor: "#78716C",
    logo: "/images/logo.svg",
  },

  // --------------------------------------------------------------------------
  // SEO
  // --------------------------------------------------------------------------
  seo: {
    siteUrl: "https://demo-bakery.vercel.app",
    ogImage: "/images/og-image.svg",
  },

  // --------------------------------------------------------------------------
  // Hero Section
  // --------------------------------------------------------------------------
  hero: {
    variant: "split",
    badge: "Baru Buka Cabang ke-2!",
    title: "Roti Artisan & Kue Segar Setiap Hari",
    description:
      "Dibuat dengan cinta menggunakan bahan-bahan berkualitas. Pesan sekarang untuk pengalaman rasa yang tak terlupakan.",
    image: "/images/hero.svg",
    primaryCTA: {
      label: "Pesan via WhatsApp",
      type: "whatsapp",
    },
    secondaryCTA: {
      label: "Lihat Menu",
      type: "scroll",
      scrollTo: "products",
    },
  },

  // --------------------------------------------------------------------------
  // About
  // --------------------------------------------------------------------------
  about: {
    title: "Tentang Demo Bakery",
    description:
      "Berawal dari dapur rumah, Demo Bakery kini telah melayani ribuan pelanggan setia. Kami percaya bahwa roti dan kue terbaik dibuat dengan bahan pilihan dan proses yang penuh perhatian.",
    image: "/images/about.svg",
    highlights: [
      "Bahan premium berkualitas",
      "Dibuat fresh setiap hari",
      "Tanpa pengawet buatan",
      "Resep original",
    ],
  },

  // --------------------------------------------------------------------------
  // Contact
  // --------------------------------------------------------------------------
  contact: {
    whatsapp: "6281234567890",
    whatsappMessage: "Halo Demo Bakery, saya ingin pesan...",
    instagram: "demobakery",
    email: "hello@demobakery.com",
  },

  // --------------------------------------------------------------------------
  // Location
  // --------------------------------------------------------------------------
  location: {
    address: "Jl. Contoh No. 123, Jakarta Selatan",
    googleMapsUrl: "https://maps.google.com/?q=Demo+Bakery",
  },

  // --------------------------------------------------------------------------
  // Opening Hours
  // --------------------------------------------------------------------------
  openingHours: [
    { days: "Senin - Jumat", hours: "07:00 - 21:00" },
    { days: "Sabtu - Minggu", hours: "08:00 - 22:00" },
  ],

  // --------------------------------------------------------------------------
  // Products
  // --------------------------------------------------------------------------
  products: {
    title: "Menu Favorit",
    subtitle: "Pilihan roti dan kue terlaris kami",
    variant: "grid",
    items: [
      {
        name: "Sourdough Loaf",
        description: "Roti sourdough klasik dengan tekstur renyah di luar, lembut di dalam.",
        price: "Rp 45.000",
        image: "/images/products/product-1.svg",
        badge: "Best Seller",
      },
      {
        name: "Croissant Butter",
        description: "Croissant berlapis mentega premium, dipanggang sempurna.",
        price: "Rp 25.000",
        image: "/images/products/product-2.svg",
      },
      {
        name: "Cinnamon Roll",
        description: "Roll kayu manis dengan cream cheese frosting.",
        price: "Rp 30.000",
        image: "/images/products/product-3.svg",
      },
      {
        name: "Chocolate Lava Cake",
        description: "Kue cokelat dengan lelehan lava di dalamnya.",
        price: "Rp 35.000",
        image: "/images/products/product-4.svg",
        badge: "New",
      },
      {
        name: "Banana Bread",
        description: "Roti pisang lembut dengan topping walnut.",
        price: "Rp 28.000",
        image: "/images/products/product-5.svg",
      },
      {
        name: "Red Velvet Cupcake",
        description: "Cupcake red velvet dengan cream cheese topping.",
        price: "Rp 22.000",
        image: "/images/products/product-6.svg",
      },
    ],
  },

  // --------------------------------------------------------------------------
  // Features / Keunggulan
  // --------------------------------------------------------------------------
  features: {
    title: "Kenapa Demo Bakery?",
    subtitle: "Yang membuat kami berbeda",
    items: [
      {
        title: "Bahan Premium",
        description: "Kami hanya menggunakan tepung, mentega, dan bahan-bahan pilihan berkualitas tinggi.",
        icon: "wheat",
      },
      {
        title: "Fresh Setiap Hari",
        description: "Semua produk dibuat fresh setiap pagi, tanpa stok kemarin.",
        icon: "clock",
      },
      {
        title: "Tanpa Pengawet",
        description: "Tidak ada pengawet buatan atau bahan kimia berbahaya.",
        icon: "leaf",
      },
      {
        title: "Pengiriman Cepat",
        description: "Tersedia delivery untuk area Jakarta Selatan dan sekitarnya.",
        icon: "truck",
      },
    ],
  },

  // --------------------------------------------------------------------------
  // Gallery
  // --------------------------------------------------------------------------
  gallery: {
    title: "Galeri",
    subtitle: "Lihat hasil karya kami",
    variant: "grid",
    items: [
      { src: "/images/gallery/gallery-1.svg", alt: "Aneka roti artisan" },
      { src: "/images/gallery/gallery-2.svg", alt: "Proses pembuatan roti" },
      { src: "/images/gallery/gallery-3.svg", alt: "Interior toko" },
      { src: "/images/gallery/gallery-4.svg", alt: "Kue tart custom" },
      { src: "/images/gallery/gallery-5.svg", alt: "Hampers roti" },
      { src: "/images/gallery/gallery-6.svg", alt: "Suasana toko" },
    ],
  },

  // --------------------------------------------------------------------------
  // Testimonials
  // --------------------------------------------------------------------------
  testimonials: {
    title: "Kata Pelanggan",
    subtitle: "Apa yang mereka katakan tentang kami",
    items: [
      {
        name: "Rina S.",
        role: "Pelanggan Setia",
        content:
          "Roti sourdough-nya juara! Sudah langganan dari awal buka. Teksturnya pas, rasanya authentic.",
      },
      {
        name: "Budi P.",
        role: "Food Blogger",
        content:
          "Croissant terenak yang pernah saya coba di Jakarta. Berlapis sempurna dan butternya terasa banget.",
      },
      {
        name: "Maya L.",
        content:
          "Sering pesan untuk acara kantor. Pelayanannya cepat dan rotinya selalu fresh. Recommended!",
      },
    ],
  },

  // --------------------------------------------------------------------------
  // FAQ
  // --------------------------------------------------------------------------
  faq: {
    title: "Pertanyaan Umum",
    items: [
      {
        question: "Apakah bisa pesan untuk acara?",
        answer:
          "Tentu! Kami menerima pesanan untuk acara seperti ulang tahun, arisan, meeting, dan lainnya. Hubungi kami via WhatsApp untuk detail lebih lanjut.",
      },
      {
        question: "Berapa minimal order untuk delivery?",
        answer:
          "Minimal order untuk delivery adalah Rp 100.000. Gratis ongkir untuk area Jakarta Selatan dalam radius 5 km.",
      },
      {
        question: "Apakah ada produk yang bebas gluten?",
        answer:
          "Saat ini kami belum menyediakan menu bebas gluten, namun kami terus mengembangkan variasi menu baru.",
      },
      {
        question: "Bagaimana cara memesan?",
        answer:
          "Anda bisa langsung datang ke toko kami atau pesan via WhatsApp. Untuk pesanan besar, disarankan H-2.",
      },
    ],
  },

  // --------------------------------------------------------------------------
  // Final CTA
  // --------------------------------------------------------------------------
  finalCTA: {
    title: "Siap Memesan?",
    description:
      "Hubungi kami sekarang untuk memesan roti dan kue segar favorit Anda.",
  },
};
