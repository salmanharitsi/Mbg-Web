"use client";

import { motion } from "motion/react";
import { useInView } from "motion/react";
import { useRef } from "react";
import { CheckCircle2, Clock, Circle } from "lucide-react";

const milestones = [
  {
    date: "Oktober 2024",
    title: "Pembentukan Badan Gizi Nasional",
    desc: "Presiden Prabowo Subianto menetapkan Peraturan Presiden Nomor 83 Tahun 2024 tentang Badan Gizi Nasional (BGN) sebagai landasan hukum Program MBG.",
    status: "done",
    highlight: false,
  },
  {
    date: "Desember 2024",
    title: "Persiapan & Uji Coba Awal",
    desc: "Penyusunan pedoman MBG di satuan pendidikan, perekrutan tenaga ahli gizi, dan pembangunan Satuan Pelayanan Pemenuhan Gizi (SPPG) percontohan di berbagai daerah.",
    status: "done",
    highlight: false,
  },
  {
    date: "6 Januari 2025",
    title: "Peluncuran Resmi Program MBG",
    desc: "Program Makan Bergizi Gratis secara resmi diluncurkan dan mulai bergulir di sekolah-sekolah seluruh Indonesia, menyasar PAUD hingga SMA/SMK serta ibu hamil dan menyusui.",
    status: "done",
    highlight: true,
  },
  {
    date: "Maret 2025",
    title: "Perluasan Skala Pertama",
    desc: "Program MBG diperluas secara bertahap. Jumlah penerima manfaat terus meningkat, diproyeksikan menjangkau 15 juta penerima manfaat dalam fase ini.",
    status: "done",
    highlight: false,
  },
  {
    date: "17 Agustus 2025",
    title: "Target 20 Juta Penerima",
    desc: "Presiden menargetkan program MBG menjangkau 20 juta penerima manfaat pada momentum Hari Kemerdekaan Indonesia ke-80, diperkuat dengan 2.375+ SPPG aktif.",
    status: "done",
    highlight: false,
  },
  {
    date: "Oktober 2025",
    title: "Penguatan Kualitas & Standar",
    desc: "BGN mengerahkan 5.000 koki profesional dari Indonesian Chef Association (ICA) ke seluruh SPPG untuk meningkatkan standar kebersihan dan kualitas gizi makanan.",
    status: "done",
    highlight: false,
  },
  {
    date: "Akhir 2025",
    title: "Target 82,9 Juta Penerima",
    desc: "Target ambisius menjangkau 82,9 juta penerima manfaat dengan 30.000 unit SPPG beroperasi penuh di seluruh wilayah Indonesia termasuk daerah terpencil.",
    status: "ongoing",
    highlight: false,
  },
  {
    date: "2045",
    title: "Indonesia Emas 2045",
    desc: "Generasi yang tumbuh dengan gizi optimal diharapkan menjadi SDM unggul yang mewujudkan visi Indonesia Emas — bangsa yang sehat, cerdas, dan berdaya saing global.",
    status: "upcoming",
    highlight: false,
  },
];

const statusConfig = {
  done: {
    icon: CheckCircle2,
    lineColor: "bg-primary-400",
    dotColor: "bg-primary-500",
    textColor: "text-primary-600",
    label: "Selesai",
  },
  ongoing: {
    icon: Clock,
    lineColor: "bg-secondary-400",
    dotColor: "bg-secondary-500",
    textColor: "text-secondary-600",
    label: "Berlangsung",
  },
  upcoming: {
    icon: Circle,
    lineColor: "bg-gray-200",
    dotColor: "bg-gray-300",
    textColor: "text-gray-400",
    label: "Akan Datang",
  },
};

function TimelineItem({
  item,
  index,
  isInView,
}: {
  item: (typeof milestones)[0];
  index: number;
  isInView: boolean;
}) {
  const cfg = statusConfig[item.status as keyof typeof statusConfig];
  const isLast = index === milestones.length - 1;

  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.08 }}
      className="relative flex gap-5 sm:gap-8"
    >
      {/* Left: timeline line + dot */}
      <div className="flex flex-col items-center shrink-0">
        <motion.div
          initial={{ scale: 0 }}
          animate={isInView ? { scale: 1 } : {}}
          transition={{
            delay: index * 0.08 + 0.2,
            type: "spring",
            stiffness: 200,
          }}
          className={`w-4 h-4 rounded-full border-2 border-white shadow-md shrink-0 z-10 ${cfg.dotColor} ${
            item.highlight ? "ring-4 ring-primary-200 animate-pulse" : ""
          }`}
        />
        {!isLast && (
          <div
            className={`w-0.5 flex-1 mt-1 ${cfg.lineColor} opacity-40 min-h-10`}
          />
        )}
      </div>

      {/* Right: content */}
      <div
        className={`pb-8 flex-1 ${
          item.highlight
            ? "shimmer-highlight bg-linear-to-br from-primary-50 to-primary-100/50 border border-primary-200 rounded-2xl p-6 -mt-1 mb-7 shadow-sm"
            : ""
        }`}
      >
        <div className="flex flex-wrap items-center gap-2 mb-1.5">
          <span
            className={`font-display font-semibold text-xs ${cfg.textColor}`}
          >
            {item.date}
          </span>
          <span
            className={`inline-flex items-center gap-1 text-[10px] font-display font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${
              item.status === "done"
                ? "bg-primary-100 text-primary-700"
                : item.status === "ongoing"
                  ? "bg-secondary-100 text-secondary-700"
                  : "bg-gray-100 text-gray-500"
            }`}
          >
            <cfg.icon size={9} />
            {cfg.label}
          </span>
          {item.highlight && (
            <span className="text-[10px] font-display font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-primary-500 text-white">
              Milestone Utama
            </span>
          )}
        </div>
        <h3 className="font-display font-bold text-gray-900 text-base mb-1.5">
          {item.title}
        </h3>
        <p className="text-gray-500 font-body text-sm leading-relaxed">
          {item.desc}
        </p>
      </div>
    </motion.div>
  );
}

export default function TimelineSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      id="timeline"
      ref={ref}
      className="relative py-24 bg-gray-50 overflow-hidden"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary-200 to-transparent" />
        <div className="absolute top-20 right-0 w-80 h-80 rounded-full bg-primary-100/50 blur-3xl" />
        <div className="absolute bottom-20 left-0 w-60 h-60 rounded-full bg-secondary-100/40 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-100 rounded-full px-3 py-1.5 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
            <span className="text-primary-700 text-xs font-display font-semibold tracking-wide uppercase">
              Perjalanan Program
            </span>
          </div>
          <h2
            className="font-display font-extrabold text-primary-950 leading-tight"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)" }}
          >
            Timeline <span className="text-gradient">Program MBG</span>
          </h2>
          <p className="mt-4 text-gray-500 font-body max-w-xl mx-auto">
            Perjalanan program Makan Bergizi Gratis dari perencanaan hingga
            mewujudkan generasi Indonesia Emas 2045.
          </p>
        </motion.div>

        {/* Legend */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap gap-4 justify-center mb-10"
        >
          {Object.entries(statusConfig).map(([key, cfg]) => (
            <div key={key} className="flex items-center gap-1.5">
              <div className={`w-2.5 h-2.5 rounded-full ${cfg.dotColor}`} />
              <span className="text-xs text-gray-500 font-body">
                {cfg.label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* Timeline items */}
        <div className="pl-2">
          {milestones.map((item, i) => (
            <TimelineItem
              key={item.title}
              item={item}
              index={i}
              isInView={isInView}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
