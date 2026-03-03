"use client";

import Link from "next/link";
import { MapPin, ExternalLink, Globe } from "lucide-react";

const footerLinks = {
  Program: [
    { label: "Tentang MBG", href: "#tentang" },
    { label: "Sasaran Program", href: "#sasaran" },
    { label: "Tujuan Strategis", href: "#tujuan" },
    { label: "Timeline", href: "#timeline" },
  ],
  Informasi: [
    { label: "Mitra Kolaborasi", href: "#mitra" },
    { label: "FAQ", href: "#faq" },
    { label: "Sebaran MBG", href: "/sebaran" },
    {
      label: "Perpres No. 83/2024",
      href: "https://jdih.kemenkum.go.id/common/dokumen/2024perpres083.pdf",
      external: true,
    },
  ],
  Tautan: [
    { label: "BGN – bgn.go.id", href: "https://www.bgn.go.id", external: true },
    { label: "Kemendikdasmen", href: "https://www.kemdikbud.go.id", external: true },
    { label: "Kemenkes RI", href: "https://www.kemkes.go.id", external: true },
    { label: "Indonesia.go.id", href: "https://www.indonesia.go.id", external: true },
  ],
};

export default function Footer() {
  return (
    <footer className="relative bg-primary-950 overflow-hidden">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary-600/50 to-transparent" />

      {/* Decorative blob */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary-800/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-60 h-60 bg-secondary-900/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Top section */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-linear-to-br from-primary-500 to-primary-700 flex items-center justify-center shadow-lg">
                <span className="text-white font-display font-bold text-sm">BGN</span>
              </div>
              <div>
                <p className="font-display font-bold text-white text-sm">Badan Gizi Nasional</p>
                <p className="text-primary-400 text-xs font-body">Republik Indonesia</p>
              </div>
            </div>
            <p className="text-white/50 font-body text-sm leading-relaxed max-w-sm">
              Lembaga Non-Kementerian yang bertugas memastikan terpenuhinya kebutuhan gizi
              seluruh masyarakat Indonesia demi mewujudkan Indonesia Emas 2045.
            </p>

            <div className="mt-6 space-y-2">
              <div className="flex items-center gap-2 text-white/40 text-xs font-body">
                <Globe size={12} className="text-primary-400 shrink-0" />
                <a href="https://www.bgn.go.id" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  www.bgn.go.id
                </a>
              </div>
              <div className="flex items-center gap-2 text-white/40 text-xs font-body">
                <MapPin size={12} className="text-primary-400 shrink-0" />
                <span>Jakarta, Indonesia</span>
              </div>
            </div>

            <Link
              href="/sebaran"
              className="mt-5 inline-flex items-center gap-2 bg-primary-600/30 hover:bg-primary-600/50 border border-primary-600/40 text-primary-300 hover:text-white text-xs font-display font-semibold px-4 py-2 rounded-xl transition-all duration-200"
            >
              <MapPin size={13} />
              Lihat Sebaran MBG
            </Link>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-display font-bold text-white text-sm mb-4">{category}</h4>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    {"external" in link && link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-white/45 hover:text-white text-sm font-body transition-colors group"
                      >
                        <span>{link.label}</span>
                        <ExternalLink size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                      </a>
                    ) : (
                      <a
                        href={link.href}
                        className="text-white/45 hover:text-white text-sm font-body transition-colors"
                      >
                        {link.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/30 text-xs font-body text-center sm:text-left">
            © {new Date().getFullYear()} Badan Gizi Nasional – Pemerintah Republik Indonesia.
            Seluruh hak cipta dilindungi.
          </p>
          <div className="flex items-center gap-4">
            <span className="text-white/20 text-xs font-body">Perpres No. 83 Tahun 2024</span>
            <div className="w-px h-3 bg-white/15" />
            <span className="text-white/20 text-xs font-body">Asta Cita · Indonesia Emas 2045</span>
          </div>
        </div>
      </div>
    </footer>
  );
}