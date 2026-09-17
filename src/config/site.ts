// ============================================================================
// PARENT TEMPLATE CONFIG — PUSAT KONTEN UMKM INDONESIA
// ============================================================================
// File ini adalah single source of truth untuk seluruh konten landing page.
// Cocok dijadikan MASTER / PARENT TEMPLATE untuk segala jenis UMKM di Indonesia:
// - F&B / Kuliner / Katering / Bakery
// - Jasa / Bengkel / Service AC / Laundry / Salon / Cuci Mobil
// - Toko Ritel / Fashion / Konveksi / Kerajinan / Mebel
// - Toko Kelontong / Perlengkapan / Produk Lokal
//
// CARA PENGGUNAAN SEBAGAI PARENT / CABANG KLIEN BARU:
// 1. Buat branch baru dari main: `git checkout -b client/nama-usaha`
// 2. Sesuaikan data di file ini (`site.ts`) dan ganti gambar di `public/images/`.
// 3. Section yang kosong (array kosong atau dihapus) akan otomatis tersembunyi.
// ============================================================================

import type { SiteConfig } from "./types";

export const siteConfig: SiteConfig = {
  // Pilihan template:
  // - "business": Menampilkan Produk & Layanan sekaligus (Universal)
  // - "store"   : Khusus Toko / Ritel / Katalog Produk
  // - "service" : Khusus Usaha Jasa / Bengkel / Salon / Reparasi
  // - "food"    : Khusus Kuliner / F&B / Resto / Katering
  template: "business",
  lang: "id",

  // --------------------------------------------------------------------------
  // 1. Identitas Usaha (Business Info)
  // --------------------------------------------------------------------------
  business: {
    name: "Usaha Mandiri Nusantara",
    category: "Produk & Layanan UMKM Indonesia",
    tagline: "Pilihan Terbaik untuk Kebutuhan Sehari-hari & Usaha Anda",
    description:
      "Menyediakan berbagai produk berkualitas dan layanan terpercaya dengan harga bersahabat, pelayanan ramah, serta kemudahan konsultasi dan pemesanan langsung via WhatsApp.",
  },

  // --------------------------------------------------------------------------
  // 2. Branding & Warna (Disesuaikan dengan identitas brand klien)
  // --------------------------------------------------------------------------
  branding: {
    primaryColor: "#1D4ED8",     // Warna aksen utama (tombol, badge, highlight)
    secondaryColor: "#F8FAFC",   // Background lembut
    accentColor: "#1E40AF",      // Warna hover / penekanan
    textColor: "#0F172A",        // Warna teks judul (foreground)
    mutedColor: "#475569",       // Warna teks sekunder / deskripsi
    logo: "/images/logo.webp",   // Path logo webp baru
  },

  // --------------------------------------------------------------------------
  // 3. SEO & OpenGraph (Otomatis dipakai di metadata Google & media sosial)
  // --------------------------------------------------------------------------
  seo: {
    siteUrl: "https://demo-landing-page.vercel.app",
    ogImage: "/images/og-image.svg",
  },

  // --------------------------------------------------------------------------
  // 4. Hero Section (Banner Utama)
  // Varian: "split" (teks kiri + gambar kanan) | "centered" | "image-background"
  // --------------------------------------------------------------------------
  hero: {
    variant: "split",
    badge: "Bisa Kustom Warna, Logo & Katalog Usaha Anda",
    title: "Website Profesional untuk Usaha Anda, Siap Terima Orderan 24 Jam",
    description:
      "Tampilkan produk unggulan & layanan terbaik Anda dengan website modern yang cepat, rapi, dan meyakinkan pelanggan. Seluruh warna tema, logo brand, nomor WhatsApp, dan katalog produk dapat disesuaikan 100% dengan bisnis Anda.",
    image: "/images/hero.svg",
    primaryCTA: {
      label: "Pesan via WhatsApp",
      type: "whatsapp",
    },
    secondaryCTA: {
      label: "Lihat Contoh Produk & Layanan",
      type: "scroll",
      scrollTo: "products",
    },
  },

  // --------------------------------------------------------------------------
  // 5. Tentang Kami (About Section)
  // --------------------------------------------------------------------------
  about: {
    title: "Tentang Usaha Kami",
    description:
      "Website ini dirancang khusus untuk memajukan bisnis lokal Indonesia. Mulai dari kuliner, toko fashion, bengkel, salon, hingga jasa harian—semua warna tema, logo, foto profil, dan cerita usaha di bagian ini dapat disesuaikan sepenuhnya agar bisnis Anda tampil lebih terpercaya di mata pelanggan.",
    image: "/images/about.svg",
    highlights: [
      "Warna tema & identitas disesuaikan dengan brand Anda",
      "Katalog produk lengkap dengan foto & harga jelas",
      "Tombol WhatsApp langsung terhubung ke nomor admin",
      "Tampilan responsif, cepat, & rapi di semua smartphone",
    ],
  },

  // --------------------------------------------------------------------------
  // 6. Kontak & WhatsApp (Pusat konversi utama UMKM Indonesia)
  // --------------------------------------------------------------------------
  contact: {
    whatsapp: "6281234567890", // Format internasional tanpa simbol: 628...
    whatsappMessage: "Halo, saya melihat website Anda dan ingin bertanya mengenai produk/layanan...",
    instagram: "usahamandiri.id",
    email: "kontak@usahamandiri.id",
    phone: "+62 812-3456-7890",
  },

  // --------------------------------------------------------------------------
  // 7. Lokasi & Google Maps (Bisa dikosongkan jika usaha online penuh)
  // --------------------------------------------------------------------------
  location: {
    address: "Jl. Merdeka No. 123, Kebayoran Baru, Jakarta Selatan, DKI Jakarta 12160, Indonesia",
    googleMapsUrl: "https://maps.google.com/?q=Jakarta+Selatan+Indonesia",
    embedUrl:
      "https://maps.google.com/maps?q=Jakarta%20Selatan,%20Indonesia&t=&z=13&ie=UTF8&iwloc=&output=embed",
  },

  // --------------------------------------------------------------------------
  // 8. Jam Operasional
  // --------------------------------------------------------------------------
  openingHours: [
    { days: "Senin - Sabtu", hours: "08:00 - 17:00 WIB" },
    { days: "Minggu & Hari Libur", hours: "09:00 - 15:00 WIB (Tetap melayani via WhatsApp)" },
  ],

  // --------------------------------------------------------------------------
  // 9. Layanan (Services) — Universal untuk segala jenis jasa / paket pemesanan
  // --------------------------------------------------------------------------
  services: {
    title: "Contoh Layanan & Jasa",
    subtitle: "Daftar layanan ini bisa disesuaikan dengan jenis jasa atau paket yang Anda sediakan untuk pelanggan",
    items: [
      {
        name: "Pemesanan Produk & Barang",
        description:
          "Layanan pembelian produk satuan maupun partai/grosir dengan pengemasan rapi dan garansi keamanan pengiriman.",
        price: "Mulai Rp 25.000",
        icon: "sparkles",
      },
      {
        name: "Pesanan Khusus / Kustom",
        description:
          "Menerima kustomisasi spesifikasi, ukuran, porsi, atau permintaan khusus sesuai kebutuhan unik Anda.",
        price: "Mulai Rp 100.000",
        icon: "settings",
      },
      {
        name: "Konsultasi & Layanan Cepat",
        description:
          "Konsultasi gratis mengenai pilihan produk terbaik dan penanganan pesanan secara responsif langsung oleh tim kami.",
        price: "Gratis Konsultasi",
        icon: "wrench",
      },
    ],
  },

  // --------------------------------------------------------------------------
  // 10. Katalog Produk (Products) — Universal untuk produk fisik / paket
  // --------------------------------------------------------------------------
  products: {
    title: "Contoh Katalog Produk & Paket",
    subtitle: "Foto, nama varian, dan harga di bawah ini hanyalah contoh. Semuanya akan diganti dengan produk asli usaha Anda",
    variant: "grid",
    items: [
      {
        name: "Paket Favorit 1",
        description: "Pilihan paling disukai pelanggan dengan mutu terjamin dan nilai paling ekonomis.",
        price: "Rp 45.000",
        image: "/images/products/product-1.svg",
        badge: "Paling Laris",
      },
      {
        name: "Paket Lengkap 2",
        description: "Varian lengkap dan praktis untuk memenuhi kebutuhan harian tanpa repot.",
        price: "Rp 85.000",
        image: "/images/products/product-2.svg",
        badge: "Rekomendasi",
      },
      {
        name: "Paket Spesial 3",
        description: "Kombinasi eksklusif dengan kualitas pilihan dan pengerjaan ekstra teliti.",
        price: "Rp 150.000",
        image: "/images/products/product-3.svg",
        badge: "Spesial",
      },
      {
        name: "Produk Reguler A",
        description: "Pilihan ekonomis dengan standar mutu teruji yang awet dan fungsional.",
        price: "Rp 30.000",
        image: "/images/products/product-4.svg",
      },
      {
        name: "Produk Reguler B",
        description: "Produk serbaguna yang cocok untuk menunjang kebutuhan pribadi maupun keluarga.",
        price: "Rp 65.000",
        image: "/images/products/product-5.svg",
      },
      {
        name: "Produk Reguler C",
        description: "Pilihan praktis yang selalu siap dipesan kapan saja dengan stok terjaga.",
        price: "Rp 110.000",
        image: "/images/products/product-6.svg",
      },
    ],
  },

  // --------------------------------------------------------------------------
  // 11. Keunggulan (Features)
  // --------------------------------------------------------------------------
  features: {
    title: "Keunggulan Website Usaha Anda",
    subtitle: "Dirancang khusus agar calon pelanggan langsung percaya dan mudah order ke WhatsApp",
    items: [
      {
        title: "Bebas Pilih Warna Tema",
        description:
          "Warna dominan website bisa disesuaikan dengan warna logo atau identitas brand usaha Anda agar serasi dan keren.",
        icon: "sparkles",
      },
      {
        title: "Order Langsung ke WhatsApp",
        description:
          "Pelanggan cukup klik tombol untuk langsung chat dengan admin Anda lengkap dengan rincian pesanan yang rapi.",
        icon: "clock",
      },
      {
        title: "Katalog & Foto Rapi",
        description:
          "Tampilkan foto produk asli, daftar paket, maupun menu layanan dengan harga transparan dan deskripsi jelas.",
        icon: "shield",
      },
      {
        title: "Cepat & Nyaman di HP",
        description:
          "Website sangat ringan dan responsif, nyaman dibuka dari smartphone pelanggan mana pun tanpa loading lama.",
        icon: "thumbsup",
      },
    ],
  },

  // --------------------------------------------------------------------------
  // 12. Galeri & Dokumentasi (Gallery)
  // --------------------------------------------------------------------------
  gallery: {
    title: "Galeri & Dokumentasi",
    subtitle: "Bukti nyata hasil produk, pengerjaan rapi, dan aktivitas usaha kami",
    variant: "grid",
    items: [
      { src: "/images/gallery/gallery-1.svg", alt: "Dokumentasi produk unggulan" },
      { src: "/images/gallery/gallery-2.svg", alt: "Proses pengerjaan dan quality check" },
      { src: "/images/gallery/gallery-3.svg", alt: "Tempat usaha & workshop" },
      { src: "/images/gallery/gallery-4.svg", alt: "Produk siap dikemas & dikirim" },
      { src: "/images/gallery/gallery-5.svg", alt: "Pelayanan ramah untuk pelanggan" },
      { src: "/images/gallery/gallery-6.svg", alt: "Pesanan selesai siap serah terima" },
    ],
  },

  // --------------------------------------------------------------------------
  // 13. Testimoni Pelanggan (Testimonials)
  // --------------------------------------------------------------------------
  testimonials: {
    title: "Ulasan Pelanggan",
    subtitle: "Cerita dan pengalaman langsung dari mereka yang telah mempercayakan kebutuhannya kepada kami",
    items: [
      {
        name: "Siti Rahmawati",
        role: "Pelanggan di Bandung",
        content:
          "Pelayanannya sangat ramah dan admin cepat membalas chat di WhatsApp. Kualitas produknya bagus banget dan pengirimannya aman sampai tujuan.",
      },
      {
        name: "Budi Pratama",
        role: "Pelanggan di Jakarta",
        content:
          "Sangat puas dengan hasilnya! Pengerjaannya rapi, harganya jujur dan terjangkau. Sudah berkali-kali pesan dan selalu memuaskan.",
      },
      {
        name: "Dewi Anggraini",
        role: "Pelanggan di Surabaya",
        content:
          "Rekomendasi banget buat yang butuh layanan cepat dan berkualitas. Komunikasi transparan dan penjualnya amanah.",
      },
    ],
  },

  // --------------------------------------------------------------------------
  // 14. Tanya Jawab (FAQ) — Pertanyaan lazim konsumen UMKM di WhatsApp
  // --------------------------------------------------------------------------
  faq: {
    title: "Pertanyaan yang Sering Diajukan",
    items: [
      {
        question: "Bagaimana cara melakukan pemesanan?",
        answer:
          "Sangat mudah! Cukup klik tombol 'Pesan via WhatsApp' atau 'Chat via WhatsApp' di website ini. Admin kami akan langsung membantu proses pemesanan Anda dengan cepat.",
      },
      {
        question: "Apakah melayani pengiriman ke seluruh Indonesia?",
        answer:
          "Ya, kami melayani pengiriman ke seluruh kota dan kabupaten di Indonesia melalui ekspedisi terpercaya (JNE, J&T, SiCepat, dll.) serta kurir instan untuk area terdekat.",
      },
      {
        question: "Metode pembayaran apa saja yang tersedia?",
        answer:
          "Kami menyediakan opsi pembayaran melalui transfer bank lokal (BCA, Mandiri, BRI, BNI), e-wallet (GoPay, OVO, Dana), dan QRIS untuk kemudahan transaksi Anda.",
      },
      {
        question: "Berapa lama estimasi proses pengerjaan dan pengiriman?",
        answer:
          "Untuk produk ready stock akan dikirim pada hari yang sama atau H+1. Untuk pesanan khusus/kustom, estimasi pengerjaan berkisar antara 2-4 hari kerja tergantung jumlah pesanan.",
      },
      {
        question: "Apakah bisa konsultasi atau tanya-tanya terlebih dahulu?",
        answer:
          "Tentu saja! Kami sangat senang membantu. Anda bisa berkonsultasi secara gratis melalui WhatsApp sebelum memutuskan untuk memesan.",
      },
    ],
  },

  // --------------------------------------------------------------------------
  // 15. Ajakan Bertindak Terakhir (Final CTA)
  // --------------------------------------------------------------------------
  finalCTA: {
    title: "Siap Tampilkan Usaha Anda Seperti Ini?",
    description:
      "Dapatkan website profesional lengkap dengan logo brand Anda, warna pilihan Anda, katalog produk, dan tombol WhatsApp siap terima pesanan 24 jam. Hubungi kami untuk konsultasi sekarang!",
  },
};
