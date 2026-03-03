"use client";

import { motion } from "motion/react";
import { ArrowRight, MapPin, Users, Utensils, Building2 } from "lucide-react";
import Link from "next/link";

const stats = [
  { icon: Users,     value: "82,9 Juta", label: "Target Penerima", sub: "hingga akhir 2025" },
  { icon: Building2, value: "30.000",    label: "Unit SPPG",        sub: "dapur komunitas gizi" },
  { icon: Utensils,  value: "53,2 Juta", label: "Peserta Didik",    sub: "PAUD hingga SMA/SMK" },
];

const HERO_BG = "linear-gradient(135deg, #021a0c 0%, #14532d 30%, #166534 60%, #15803d 100%)";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-screen flex flex-col justify-center overflow-hidden noise-overlay"
      style={{ background: HERO_BG }}
    >
      {/* Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          animate={{ scale: [1, 1.08, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full blur-[80px]"
          style={{ backgroundColor: "rgba(74,222,128,0.2)" }}
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
          className="absolute -bottom-60 -left-40 w-[700px] h-[700px] rounded-full blur-[100px]"
          style={{ backgroundColor: "rgba(250,204,21,0.15)" }}
        />
        <motion.div animate={{ y: [0,-20,0] }} transition={{ duration: 6, repeat: Infinity }}
          className="absolute top-1/3 left-1/4 w-2 h-2 rounded-full opacity-60" style={{ backgroundColor: "#facc15" }} />
        <motion.div animate={{ y: [0,20,0] }} transition={{ duration: 7, repeat: Infinity, delay: 1 }}
          className="absolute top-1/4 right-1/3 w-1.5 h-1.5 rounded-full opacity-50" style={{ backgroundColor: "#86efac" }} />
        <div className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 glass rounded-full px-4 py-2 mb-6"
              style={{ border: "1px solid rgba(250,204,21,0.35)" }}
            >
              <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: "#facc15" }} />
              <span className="text-xs font-display font-semibold tracking-wider uppercase" style={{ color: "#fde047" }}>
                Program Prioritas Nasional 2025
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display font-extrabold text-white leading-tight"
              style={{ fontSize: "clamp(2.4rem, 5vw, 4rem)" }}
            >
              Makan Bergizi <span className="text-gradient-gold">Gratis</span>
              <br />
              <span style={{ color: "rgba(255,255,255,0.9)" }}>untuk Indonesia</span>{" "}
              <span className="text-gradient">Emas 2045</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.2 }}
              className="mt-5 font-body text-base sm:text-lg leading-relaxed max-w-xl"
              style={{ color: "rgba(255,255,255,0.65)" }}
            >
              Program pemenuhan gizi nasional yang menjangkau 82,9 juta penerima manfaat
              demi mewujudkan generasi Indonesia yang sehat, cerdas, dan berdaya saing.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <Link
                href="/sebaran"
                className="flex items-center gap-2 text-white font-display font-semibold px-6 py-3 rounded-xl transition-all duration-200 hover:scale-105 group"
                style={{ backgroundColor: "#16a34a", boxShadow: "0 10px 30px rgba(2,26,12,0.5)" }}
              >
                <MapPin size={16} />
                <span>Sebaran MBG</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="https://jdih.kemenkum.go.id/common/dokumen/2024perpres083.pdf"
                target="_blank" rel="noopener noreferrer"
                className="flex items-center gap-2 glass font-display font-semibold px-6 py-3 rounded-xl transition-all duration-200"
                style={{ border: "1px solid rgba(255,255,255,0.2)", color: "rgba(255,255,255,0.9)" }}
              >
                <span>Perpres No. 83/2024</span>
              </a>
            </motion.div>
          </div>

          {/* Right: Stats */}
          <div className="grid grid-cols-1 gap-4">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, x: 40 }} animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 + i * 0.12 }}
                whileHover={{ scale: 1.03, y: -2 }}
                className="glass rounded-2xl p-5 flex items-center gap-5 transition-all duration-300 cursor-default"
                style={{ border: "1px solid rgba(255,255,255,0.12)" }}
              >
                <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0"
                  style={{ background: "rgba(74,222,128,0.15)", border: "1px solid rgba(74,222,128,0.25)" }}>
                  <stat.icon size={22} style={{ color: "#86efac" }} />
                </div>
                <div>
                  <p className="font-display font-bold text-2xl text-white leading-none">{stat.value}</p>
                  <p className="font-display font-semibold text-sm mt-0.5" style={{ color: "rgba(255,255,255,0.8)" }}>
                    {stat.label}
                  </p>
                  <p className="font-body text-xs mt-0.5" style={{ color: "rgba(255,255,255,0.45)" }}>{stat.sub}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Scroll */}
        <motion.div
          initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}
          className="mt-16 flex justify-center"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }} transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2" style={{ color: "rgba(255,255,255,0.3)" }}
          >
            <span className="text-xs font-body tracking-widest uppercase">Scroll</span>
            <div className="w-px h-10" style={{ background: "linear-gradient(to bottom, rgba(255,255,255,0.3), transparent)" }} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}