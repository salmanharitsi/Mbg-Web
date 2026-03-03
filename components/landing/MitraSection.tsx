"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import Image from "next/image";

const mitra = [
  {
    name: "Kementerian Pendidikan Dasar & Menengah",
    abbr: "Kemendikdasmen",
    logo: "/assets/mitra/kemendikbud.png",
  },
  {
    name: "Kementerian Kesehatan",
    abbr: "Kemenkes",
    logo: "/assets/mitra/kemenkes.png",
  },
  {
    name: "Kementerian Pertanian",
    abbr: "Kementan",
    logo: "/assets/mitra/kementan.png",
  },
  {
    name: "Kementerian Keuangan",
    abbr: "Kemenkeu",
    logo: "/assets/mitra/kemenkeu.png",
  },
  {
    name: "Kementerian Dalam Negeri",
    abbr: "Kemendagri",
    logo: "/assets/mitra/kemendagri.png",
  },
  {
    name: "Kementerian BUMN",
    abbr: "KemenBUMN",
    logo: "/assets/mitra/bumn.png",
  },
  {
    name: "Kementerian Kelautan & Perikanan",
    abbr: "KKP",
    logo: "/assets/mitra/kkp.png",
  },
  {
    name: "Badan Pangan Nasional",
    abbr: "Bapanas",
    logo: "/assets/mitra/bapanas.png",
  },
  {
    name: "Kementerian Desa & PDT",
    abbr: "Kemendes",
    logo: "/assets/mitra/kemendes.png",
  },
  {
    name: "BPOM",
    abbr: "BPOM",
    logo: "/assets/mitra/bpom.png",
  },
  {
    name: "Bappenas",
    abbr: "Bappenas",
    logo: "/assets/mitra/bappenas.png",
  },
  {
    name: "Kemenko Pangan",
    abbr: "Kemenko Pangan",
    logo: "/assets/mitra/kemenko-pangan.png",
  },
  {
    name: "Kementerian Komunikasi & Digital",
    abbr: "Komdigi",
    logo: "/assets/mitra/komdigi.png",
  },
  {
    name: "BSSN",
    abbr: "BSSN",
    logo: "/assets/mitra/bssn.png",
  },
  {
    name: "Kementerian PANRB",
    abbr: "PANRB",
    logo: "/assets/mitra/panrb.png",
  },
];

function MitraCard({ item }: { item: (typeof mitra)[0] }) {
  return (
    <div className="shrink-0 mx-4 my-1 group relative">
      {/* Tooltip */}
      <div className="absolute -top-10 left-1/2 -translate-x-1/2 px-3 py-1.5 rounded-lg bg-primary-900 text-white text-[11px] font-body whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none z-20 shadow-lg">
        {item.name}
        <div className="absolute left-1/2 -translate-x-1/2 -bottom-1 w-2 h-2 bg-primary-900 rotate-45" />
      </div>

      <div className="w-36 h-16 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-md hover:border-primary-100 transition-all duration-300 flex flex-col items-center justify-center px-4 gap-2 cursor-default">
        <div className="relative w-12 h-12 shrink-0">
          <Image
            src={item.logo}
            alt={item.name}
            fill
            className="object-contain"
            sizes="48px"
          />
        </div>
      </div>
    </div>
  );
}

export default function MitraSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const allMitra = [...mitra, ...mitra]; // duplicate for seamless loop

  return (
    <section
      id="mitra"
      ref={ref}
      className="relative py-10 bg-white overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary-100 to-transparent" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-100 rounded-full px-3 py-1.5 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
            <span className="text-primary-700 text-xs font-display font-semibold tracking-wide uppercase">
              Ekosistem Kolaborasi
            </span>
          </div>
          <h2
            className="font-display font-extrabold text-primary-950 leading-tight"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)" }}
          >
            Berkolaborasi dan <span className="text-gradient">Bersinergi</span>{" "}
            Bersama
          </h2>
          <p className="mt-4 text-gray-500 font-body leading-relaxed">
            Program MBG dijalankan bersama kementerian, lembaga pemerintah, dan
            mitra strategis untuk mewujudkan pemenuhan gizi yang merata di
            seluruh Indonesia.
          </p>
        </motion.div>
      </div>

      {/* Marquee Container */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ delay: 0.3 }}
        className="relative"
      >
        {/* Fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-24 bg-linear-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 bg-linear-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee">
          {allMitra.map((item, i) => (
            <MitraCard key={`${item.abbr}-${i}`} item={item} />
          ))}
        </div>
      </motion.div>

      {/* Stats below */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ delay: 0.5 }}
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12"
      >
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { v: "15+", l: "Kementerian & Lembaga" },
            { v: "100 Ribu+", l: "Lapangan Kerja Baru" },
            { v: "34", l: "Provinsi Terjangkau" },
            { v: "UMKM", l: "& Koperasi Lokal" },
          ].map((stat, i) => (
            <motion.div
              key={stat.l}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.5 + i * 0.07 }}
              className="text-center p-5 rounded-2xl bg-primary-50 border border-primary-100"
            >
              <p className="font-display font-black text-2xl text-primary-700">
                {stat.v}
              </p>
              <p className="font-body text-xs text-primary-500 mt-1">
                {stat.l}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
