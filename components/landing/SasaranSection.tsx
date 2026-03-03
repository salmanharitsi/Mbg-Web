"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { GraduationCap, Baby, Heart } from "lucide-react";

const sasaran = [
  {
    icon: GraduationCap,
    color: "from-emerald-500 to-teal-600",
    bg: "from-emerald-50 to-teal-50",
    border: "border-emerald-100",
    accent: "text-emerald-600",
    badgeBg: "bg-emerald-100",
    badgeText: "text-emerald-700",
    title: "Peserta Didik",
    badge: "Prioritas Utama",
    count: "53,2 Juta",
    countLabel: "peserta didik",
    desc: "Kami berfokus pada jenjang pendidikan anak usia dini, pendidikan dasar, dan pendidikan menengah di berbagai lingkungan, meliputi pendidikan umum, kejuruan, keagamaan, pendidikan khusus, layanan khusus, serta pesantren.",
    points: [
      "PAUD & TK",
      "SD / Madrasah Ibtidaiyah",
      "SMP / MTs",
      "SMA / SMK / MA",
      "Pendidikan Khusus",
      "Pesantren & Keagamaan",
    ],
  },
  {
    icon: Baby,
    color: "from-blue-500 to-indigo-600",
    bg: "from-blue-50 to-indigo-50",
    border: "border-blue-100",
    accent: "text-blue-600",
    badgeBg: "bg-blue-100",
    badgeText: "text-blue-700",
    title: "Anak-Anak",
    badge: "Usia Emas",
    count: "19,9 Juta",
    countLabel: "balita & anak",
    desc: "Pemantauan dan dukungan gizi intensif bagi anak-anak dalam usia emas perkembangan mereka. Periode kritis tumbuh kembang yang tidak dapat dipulihkan jika terlewatkan.",
    points: [
      "Balita (0–5 tahun)",
      "Anak usia 5–14 tahun",
      "Pendampingan tumbuh kembang",
      "Pemantauan gizi rutin",
    ],
  },
  {
    icon: Heart,
    color: "from-rose-500 to-pink-600",
    bg: "from-rose-50 to-pink-50",
    border: "border-rose-100",
    accent: "text-rose-600",
    badgeBg: "bg-rose-100",
    badgeText: "text-rose-700",
    title: "Ibu Hamil & Menyusui",
    badge: "Kesehatan Ibu",
    count: "7,3 Juta",
    countLabel: "ibu hamil & menyusui",
    desc: "Memastikan kesehatan gizi ibu hamil dan menyusui demi kesehatan ibu dan bayi yang optimal hingga mendukung pertumbuhan dan perkembangan bayi mereka.",
    points: [
      "Ibu hamil semua trimester",
      "Ibu menyusui",
      "Pencegahan stunting",
      "Kualitas ASI optimal",
    ],
  },
];

export default function SasaranSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="sasaran" ref={ref} className="relative py-10 bg-gray-50 overflow-hidden">
      {/* BG Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary-200 to-transparent" />
        <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary-50 rounded-full blur-3xl opacity-60" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-100 rounded-full px-3 py-1.5 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
            <span className="text-primary-700 text-xs font-display font-semibold tracking-wide uppercase">
              Sasaran Program MBG
            </span>
          </div>
          <h2
            className="font-display font-extrabold text-primary-950 leading-tight"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)" }}
          >
            Misi BGN untuk Menuju{" "}
            <span className="text-gradient">Indonesia Emas</span>
          </h2>
          <p className="mt-4 text-gray-500 font-body leading-relaxed">
            Program komprehensif yang dirancang untuk memastikan setiap individu mendapatkan
            asupan gizi optimal, mendukung tercapainya Indonesia Emas melalui generasi yang
            sehat dan berkualitas.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {sasaran.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className={`relative bg-linear-to-br ${item.bg} border ${item.border} rounded-3xl p-7 overflow-hidden group cursor-default`}
            >
              {/* Hover glow */}
              <div
                className={`absolute inset-0 bg-linear-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl`}
              />

              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-2xl bg-linear-to-br ${item.color} flex items-center justify-center mb-5 shadow-lg`}
              >
                <item.icon size={26} className="text-white" />
              </div>

              {/* Badge */}
              <span
                className={`inline-flex items-center ${item.badgeBg} ${item.badgeText} text-[10px] font-display font-bold tracking-wider uppercase px-2.5 py-1 rounded-full mb-3`}
              >
                {item.badge}
              </span>

              <h3 className="font-display font-bold text-xl text-gray-900 mb-2">
                {item.title}
              </h3>

              {/* Count */}
              <div className="mb-4">
                <span className={`font-display font-black text-2xl ${item.accent}`}>
                  {item.count}
                </span>
                <span className="text-gray-500 text-xs font-body ml-1">{item.countLabel}</span>
              </div>

              <p className="text-gray-600 font-body text-sm leading-relaxed mb-5">{item.desc}</p>

              {/* Points */}
              <ul className="space-y-1.5">
                {item.points.map((point) => (
                  <li key={point} className="flex items-center gap-2 text-sm text-gray-600 font-body">
                    <div className={`w-1.5 h-1.5 rounded-full bg-linear-to-br ${item.color} shrink-0`} />
                    {point}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom stat banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="mt-10 rounded-2xl bg-linear-to-r from-primary-800 to-primary-950 p-6 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <div>
            <p className="font-display font-bold text-white text-lg">
              Total Target Penerima Manfaat
            </p>
            <p className="text-white/55 text-sm font-body mt-0.5">
              Program MBG menjangkau hingga akhir tahun 2025
            </p>
          </div>
          <div className="flex items-baseline gap-2">
            <span className="font-display font-black text-4xl text-secondary-400">82,9</span>
            <span className="font-display font-bold text-xl text-white/80">Juta Jiwa</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}