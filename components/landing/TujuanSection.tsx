"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import {
  TrendingDown,
  BookOpen,
  Sprout,
  ShoppingBag,
  Activity,
  Flag,
} from "lucide-react";

const tujuan = [
  {
    icon: TrendingDown,
    title: "Pengurangan Stunting",
    desc: "Menurunkan angka stunting nasional melalui intervensi gizi terstruktur dan berskala luas sejak dini.",
    color: "primary",
  },
  {
    icon: BookOpen,
    title: "Peningkatan Kualitas Pendidikan",
    desc: "Meningkatkan konsentrasi, prestasi, dan partisipasi belajar siswa melalui asupan gizi yang memadai setiap hari.",
    color: "secondary",
  },
  {
    icon: Sprout,
    title: "Ketahanan Pangan Nasional",
    desc: "Memperkuat rantai pasok pangan lokal dengan melibatkan petani, nelayan, dan UMKM daerah.",
    color: "primary",
  },
  {
    icon: ShoppingBag,
    title: "Pemberdayaan Ekonomi Lokal",
    desc: "Mendorong pertumbuhan UMKM, koperasi, dan ekonomi kerakyatan melalui rantai pasok program MBG.",
    color: "secondary",
  },
  {
    icon: Activity,
    title: "Kesehatan Masyarakat",
    desc: "Membangun fondasi kesehatan generasi mendatang melalui pemenuhan Angka Kecukupan Gizi (AKG) harian.",
    color: "primary",
  },
  {
    icon: Flag,
    title: "Indonesia Emas 2045",
    desc: "Mewujudkan SDM Indonesia yang berkualitas, cerdas, sehat, dan berdaya saing di tingkat global.",
    color: "secondary",
  },
];

export default function TujuanSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="tujuan" ref={ref} className="relative py-24 bg-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-linear-to-t from-gray-50/50 to-transparent" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 items-end mb-14">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 bg-secondary-50 border border-secondary-200 rounded-full px-3 py-1.5 mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-secondary-500" />
              <span className="text-secondary-700 text-xs font-display font-semibold tracking-wide uppercase">
                Tujuan Strategis
              </span>
            </div>
            <h2
              className="font-display font-extrabold text-primary-950 leading-tight"
              style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)" }}
            >
              Tujuan Strategis{" "}
              <span className="text-gradient">Badan Gizi</span> Nasional
            </h2>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-gray-500 font-body leading-relaxed"
          >
            Badan Gizi Nasional (BGN) berkomitmen untuk menciptakan Sumber Daya Manusia (SDM)
            Indonesia yang berkualitas, demi membangun fondasi generasi mendatang yang sehat,
            cerdas, dan tangguh. Melalui program peningkatan gizi yang berkelanjutan, BGN
            berupaya mewujudkan Indonesia yang lebih kuat.
          </motion.p>
        </div>

        {/* Goals Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {tujuan.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.09 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              className="group relative p-6 rounded-2xl border border-gray-100 bg-white hover:border-primary-100 hover:shadow-card-hover transition-all duration-300 cursor-default"
            >
              {/* Number */}
              <span className="absolute top-5 right-5 font-display font-black text-5xl text-gray-50 group-hover:text-primary-50 transition-colors select-none">
                {String(i + 1).padStart(2, "0")}
              </span>

              {/* Icon */}
              <div
                className={`relative z-10 w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  item.color === "primary"
                    ? "bg-primary-50 group-hover:bg-primary-100"
                    : "bg-secondary-50 group-hover:bg-secondary-100"
                } transition-colors`}
              >
                <item.icon
                  size={20}
                  className={
                    item.color === "primary" ? "text-primary-600" : "text-secondary-600"
                  }
                />
              </div>

              <h3 className="relative z-10 font-display font-bold text-gray-900 mb-2 text-base">
                {item.title}
              </h3>
              <p className="relative z-10 text-gray-500 font-body text-sm leading-relaxed">
                {item.desc}
              </p>

              {/* Bottom accent */}
              <div
                className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-b-2xl transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
                  item.color === "primary"
                    ? "bg-linear-to-r from-primary-400 to-primary-600"
                    : "bg-linear-to-r from-secondary-400 to-secondary-600"
                }`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}