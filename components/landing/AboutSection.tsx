"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { ExternalLink, Shield, Target, BarChart3, Leaf } from "lucide-react";

const pillars = [
  { icon: Shield, label: "Berbasis Regulasi", desc: "Perpres No. 83 Tahun 2024" },
  { icon: Target, label: "Terstruktur & Terukur", desc: "Target jelas & terencana" },
  { icon: BarChart3, label: "Berbasis Data", desc: "Monitoring & evaluasi ketat" },
  { icon: Leaf, label: "Berkelanjutan", desc: "Jangka panjang & merata" },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="tentang" ref={ref} className="relative py-10 bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/2 h-full pointer-events-none">
        <div className="absolute top-20 right-0 w-96 h-96 rounded-full bg-primary-50 blur-3xl opacity-60" />
        <div className="absolute bottom-20 right-40 w-64 h-64 rounded-full bg-secondary-50 blur-3xl opacity-50" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Visual */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Main card */}
            <div className="relative rounded-3xl overflow-hidden bg-linear-to-br from-primary-800 to-primary-950 p-8 shadow-2xl shadow-primary-900/30">
              {/* Inner glow */}
              <div className="absolute top-0 right-0 w-60 h-60 bg-primary-400/15 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-40 h-40 bg-secondary-400/10 rounded-full blur-2xl" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center mb-6">
                  <span className="font-display font-black text-xl text-white">BGN</span>
                </div>
                <h3 className="font-display font-bold text-2xl text-white leading-snug">
                  Badan Gizi Nasional
                </h3>
                <p className="mt-2 text-white/55 font-body text-sm">
                  Lembaga Non-Kementerian · Dibentuk 2024
                </p>
                <div className="mt-6 pt-6 border-t border-white/10 grid grid-cols-2 gap-4">
                  {[
                    { v: "34", l: "Provinsi" },
                    { v: "514", l: "Kab/Kota" },
                    { v: "2.375+", l: "SPPG Aktif" },
                    { v: "7,3 Jt+", l: "Penerima (Jul '25)" },
                  ].map((item) => (
                    <div key={item.l} className="glass rounded-xl p-3 border border-white/8">
                      <p className="font-display font-bold text-lg text-white">{item.v}</p>
                      <p className="text-xs text-white/50 font-body">{item.l}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Floating badge */}
            <motion.div
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -bottom-5 -right-5 glass-light rounded-2xl px-5 py-3 shadow-xl shadow-primary-100/80 border border-primary-100"
            >
              <p className="font-display font-bold text-primary-700 text-sm">Program Aktif</p>
              <p className="text-primary-500 text-xs font-body">Sejak 6 Januari 2025</p>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Label */}
            <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-100 rounded-full px-3 py-1.5 mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
              <span className="text-primary-700 text-xs font-display font-semibold tracking-wide uppercase">
                Tentang Kami
              </span>
            </div>

            <h2 className="font-display font-extrabold text-primary-950 leading-tight"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)" }}>
              Berkomitmen pada Pemenuhan{" "}
              <span className="text-gradient">Gizi Masyarakat</span> Nasional
            </h2>

            <p className="mt-5 text-gray-600 font-body leading-relaxed text-base">
              Badan Gizi Nasional (BGN) merupakan inisiatif strategis pemerintah Indonesia
              yang bertugas memastikan terpenuhinya kebutuhan gizi seluruh masyarakat.
              Kami berfokus pada peningkatan kualitas hidup melalui program yang terstruktur,
              terukur, dan berbasis data.
            </p>
            <p className="mt-3 text-gray-500 font-body leading-relaxed text-sm">
              Dibentuk berdasarkan Peraturan Presiden Nomor 83 Tahun 2024, BGN menjadi
              ujung tombak pelaksanaan Program Makan Bergizi Gratis yang merupakan bagian
              dari Asta Cita Presiden Prabowo Subianto menuju Indonesia Emas 2045.
            </p>

            {/* Pillars */}
            <div className="mt-8 grid grid-cols-2 gap-3">
              {pillars.map((pillar, i) => (
                <motion.div
                  key={pillar.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.08 }}
                  className="flex items-start gap-3 p-3.5 rounded-xl bg-primary-50/60 border border-primary-100/80 hover:border-primary-200 hover:bg-primary-50 transition-colors group"
                >
                  <div className="w-8 h-8 rounded-lg bg-primary-500/10 flex items-center justify-center shrink-0 group-hover:bg-primary-500/15 transition-colors">
                    <pillar.icon size={15} className="text-primary-600" />
                  </div>
                  <div>
                    <p className="font-display font-semibold text-primary-900 text-sm">
                      {pillar.label}
                    </p>
                    <p className="text-primary-500 text-xs font-body mt-0.5">{pillar.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.a
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              href="https://jdih.kemenkum.go.id/common/dokumen/2024perpres083.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-display font-semibold text-sm px-5 py-2.5 rounded-xl transition-all duration-200 shadow-lg shadow-primary-600/25 hover:shadow-primary-600/40 hover:scale-105"
            >
              <ExternalLink size={14} />
              <span>Baca Perpres No. 83/2024</span>
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}