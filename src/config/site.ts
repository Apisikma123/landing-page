// ============================================================================
// CLIENT CONTENT — EDIT THIS FILE
// ============================================================================
// This is the only file you need to modify for each client.
// Replace the demo data below with actual client information.
// ============================================================================

import type { SiteConfig } from "./types";

export const siteConfig: SiteConfig = {
  template: "business",
  lang: "id",

  // --------------------------------------------------------------------------
  // Business Info
  // --------------------------------------------------------------------------
  business: {
    name: "Demo Usaha Mandiri",
    category: "Layanan & Produk Bisnis",
    tagline: "Solusi Produk & Layanan Profesional untuk Anda",
    description:
      "Kami menyediakan berbagai pilihan produk berkualitas dan layanan profesional terpercaya untuk mendukung kebutuhan Anda dengan pengerjaan cepat dan mutu terbaik.",
  },

  // --------------------------------------------------------------------------
  // Branding — adjust colors per client
  // --------------------------------------------------------------------------
  branding: {
    primaryColor: "#2563EB",
    secondaryColor: "#F8FAFC",
    accentColor: "#3B82F6",
    textColor: "#0F172A",
    mutedColor: "#64748B",
    logo: "/images/logo.svg",
  },

  // --------------------------------------------------------------------------
  // SEO
  // --------------------------------------------------------------------------
  seo: {
    siteUrl: "https://demo-landing-page.vercel.app",
    ogImage: "/images/og-image.svg",
  },

  // --------------------------------------------------------------------------
  // Hero Section
  // --------------------------------------------------------------------------
  hero: {
    variant: "split",
    badge: "Solusi Usaha & Layanan Terpercaya",
    title: "Produk Berkualitas & Layanan Profesional Terbaik",
    description:
      "Menghadirkan produk unggulan dan solusi layanan terpadu dengan standar kualitas tinggi untuk kebutuhan pribadi maupun bisnis Anda.",
    image: "/images/hero.svg",
    primaryCTA: {
      label: "Konsultasi via WhatsApp",
      type: "whatsapp",
    },
    secondaryCTA: {
      label: "Lihat Layanan",
      type: "scroll",
      scrollTo: "services",
    },
  },

  // --------------------------------------------------------------------------
  // About
  // --------------------------------------------------------------------------
  about: {
    title: "Tentang Kami",
    description:
      "Kami adalah penyedia produk dan layanan profesional yang berdedikasi memberikan hasil terbaik bagi setiap pelanggan. Dengan komitmen pada kualitas, kecepatan, dan kepuasan pelanggan, kami siap menjadi mitra andalan Anda.",
    image: "/images/about.svg",
    highlights: [
      "Layanan profesional & bergaransi",
      "Kualitas produk terjamin",
      "Respon cepat via WhatsApp",
      "Harga transparan & bersahabat",
    ],
  },

  // --------------------------------------------------------------------------
  // Contact
  // --------------------------------------------------------------------------
  contact: {
    whatsapp: "6281234567890",
    whatsappMessage: "Halo, saya ingin konsultasi mengenai produk dan layanan...",
    instagram: "demousaha",
    email: "halo@demousaha.com",
  },

  // --------------------------------------------------------------------------
  // Location
  // --------------------------------------------------------------------------
  location: {
    address: "Jl. Bisnis Mandiri No. 123, Jakarta",
    googleMapsUrl: "https://maps.google.com/?q=Jakarta",
  },

  // --------------------------------------------------------------------------
  // Opening Hours
  // --------------------------------------------------------------------------
  openingHours: [
    { days: "Senin - Jumat", hours: "08:00 - 17:00" },
    { days: "Sabtu", hours: "08:00 - 14:00" },
  ],

  // --------------------------------------------------------------------------
  // Services
  // --------------------------------------------------------------------------
  services: {
    title: "Layanan Unggulan",
    subtitle: "Pilihan layanan profesional yang siap membantu Anda",
    items: [
      {
        name: "Konsultasi & Perencanaan",
        description:
          "Analisis kebutuhan dan rekomendasi solusi terbaik yang terarah untuk hasil optimal.",
        price: "Mulai Rp 150.000",
        icon: "sparkles",
      },
      {
        name: "Pengerjaan & Kustomisasi",
        description:
          "Pengerjaan tepat waktu dengan standar mutu tinggi serta hasil yang rapi.",
        price: "Mulai Rp 350.000",
        icon: "settings",
      },
      {
        name: "Dukungan & Perawatan",
        description:
          "Layanan berkala dan dukungan purna jual responsif untuk memastikan kepuasan Anda.",
        price: "Mulai Rp 200.000",
        icon: "wrench",
      },
    ],
  },

  // --------------------------------------------------------------------------
  // Products
  // --------------------------------------------------------------------------
  products: {
    title: "Produk Pilihan",
    subtitle: "Koleksi produk unggulan siap pakai dengan mutu terbaik",
    variant: "grid",
    items: [
      {
        name: "Paket Starter",
        description: "Pilihan lengkap dan ekonomis untuk kebutuhan dasar Anda.",
        price: "Rp 150.000",
        image: "/images/products/product-1.svg",
        badge: "Paling Populer",
      },
      {
        name: "Paket Profesional",
        description: "Solusi lengkap dengan fitur dan spesifikasi lebih menyeluruh.",
        price: "Rp 350.000",
        image: "/images/products/product-2.svg",
        badge: "Best Seller",
      },
      {
        name: "Paket Kustom",
        description: "Penyesuaian spesifikasi sesuai dengan kebutuhan unik Anda.",
        price: "Rp 500.000",
        image: "/images/products/product-3.svg",
        badge: "Fleksibel",
      },
      {
        name: "Produk Unggulan A",
        description: "Material berkualitas tinggi dengan daya tahan optimal.",
        price: "Rp 120.000",
        image: "/images/products/product-4.svg",
      },
      {
        name: "Produk Unggulan B",
        description: "Desain fungsional untuk menunjang aktivitas sehari-hari.",
        price: "Rp 180.000",
        image: "/images/products/product-5.svg",
      },
      {
        name: "Produk Unggulan C",
        description: "Kombinasi performa andal dengan harga kompetitif.",
        price: "Rp 220.000",
        image: "/images/products/product-6.svg",
      },
    ],
  },

  // --------------------------------------------------------------------------
  // Features / Keunggulan
  // --------------------------------------------------------------------------
  features: {
    title: "Kenapa Memilih Kami?",
    subtitle: "Komitmen kami dalam memberikan pelayanan terbaik",
    items: [
      {
        title: "Kualitas Terjamin",
        description: "Setiap produk dan layanan melewati standar kontrol kualitas yang ketat.",
        icon: "shield",
      },
      {
        title: "Respon Cepat",
        description: "Tim kami siap merespon pertanyaan dan pemesanan langsung via WhatsApp.",
        icon: "clock",
      },
      {
        title: "Tenaga Profesional",
        description: "Dikerjakan oleh tim yang berpengalaman dan berdedikasi di bidangnya.",
        icon: "award",
      },
      {
        title: "Pelanggan Terpuaskan",
        description: "Telah dipercaya oleh banyak pelanggan dengan tingkat kepuasan tinggi.",
        icon: "thumbsup",
      },
    ],
  },

  // --------------------------------------------------------------------------
  // Gallery
  // --------------------------------------------------------------------------
  gallery: {
    title: "Galeri & Portofolio",
    subtitle: "Dokumentasi hasil pengerjaan dan produk kami",
    variant: "grid",
    items: [
      { src: "/images/gallery/gallery-1.svg", alt: "Dokumentasi pengerjaan 1" },
      { src: "/images/gallery/gallery-2.svg", alt: "Dokumentasi proses kerja 2" },
      { src: "/images/gallery/gallery-3.svg", alt: "Dokumentasi workshop 3" },
      { src: "/images/gallery/gallery-4.svg", alt: "Hasil produk siap kirim 4" },
      { src: "/images/gallery/gallery-5.svg", alt: "Konsultasi bersama klien 5" },
      { src: "/images/gallery/gallery-6.svg", alt: "Serah terima pesanan 6" },
    ],
  },

  // --------------------------------------------------------------------------
  // Testimonials
  // --------------------------------------------------------------------------
  testimonials: {
    title: "Kata Pelanggan",
    subtitle: "Ulasan dari mereka yang telah mempercayakan kebutuhan kepada kami",
    items: [
      {
        name: "Budi Santoso",
        role: "Pemilik Usaha",
        content:
          "Pelayanan sangat profesional, komunikasi cepat dan hasilnya sesuai dengan ekspektasi. Sangat membantu usaha kami!",
      },
      {
        name: "Dewi Lestari",
        role: "Pelanggan Setia",
        content:
          "Pesan lewat WhatsApp sangat praktis dan cepat ditanggapi. Kualitasnya terbukti bagus dan rapi.",
      },
      {
        name: "Reza Pratama",
        role: "Klien Profesional",
        content:
          "Sudah repeat order beberapa kali. Selalu konsisten dalam kualitas, tepat waktu, dan sangat ramah.",
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
        question: "Bagaimana cara melakukan pemesanan atau konsultasi?",
        answer:
          "Cukup klik tombol WhatsApp di website ini untuk terhubung langsung dengan kami. Tim kami akan dengan senang hati membantu Anda.",
      },
      {
        question: "Apakah bisa melakukan kustomisasi sesuai kebutuhan?",
        answer:
          "Tentu saja. Kami melayani permintaan kustom baik untuk produk maupun spesifikasi layanan.",
      },
      {
        question: "Berapa lama estimasi pengerjaan atau pengiriman?",
        answer:
          "Waktu pengerjaan disesuaikan dengan jenis produk atau layanan yang dipilih, umumnya 1-3 hari kerja.",
      },
      {
        question: "Metode pembayaran apa saja yang didukung?",
        answer:
          "Kami mendukung transfer bank lokal, virtual account, dan QRIS untuk kemudahan transaksi Anda.",
      },
    ],
  },

  // --------------------------------------------------------------------------
  // Final CTA
  // --------------------------------------------------------------------------
  finalCTA: {
    title: "Siap Memulai Kebutuhan Anda?",
    description:
      "Hubungi kami sekarang melalui WhatsApp untuk konsultasi gratis dan dapatkan penawaran terbaik.",
  },
};
