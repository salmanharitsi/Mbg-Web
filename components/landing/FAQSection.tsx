"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useInView } from "motion/react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    q: "Apa itu Program Makan Bergizi Gratis (MBG)?",
    a: "Program Makan Bergizi Gratis (MBG) adalah program pemerintah Indonesia yang dimulai sejak 6 Januari 2025 di bawah pemerintahan Presiden Prabowo Subianto. Program ini menyediakan makanan bergizi secara gratis bagi siswa PAUD hingga SMA/SMK, balita, ibu hamil, dan ibu menyusui sebagai bagian dari Asta Cita untuk mewujudkan Indonesia Emas 2045.",
  },
  {
    q: "Siapa saja yang berhak menerima program MBG?",
    a: "Penerima manfaat MBG adalah: (1) Peserta didik PAUD hingga SMA/SMK termasuk sekolah umum, kejuruan, keagamaan, khusus, dan pesantren; (2) Balita (0–5 tahun); (3) Anak usia 5–14 tahun; (4) Ibu hamil; dan (5) Ibu menyusui. Program ini menargetkan 82,9 juta penerima manfaat hingga akhir 2025.",
  },
  {
    q: "Seberapa sering makanan diberikan dalam program MBG?",
    a: "Makanan diberikan setiap hari sekolah (Senin hingga Jumat/Sabtu), kecuali hari libur. Untuk PAUD dan SD kelas 1–3 diberikan sebagai sarapan (sebelum pukul 09.00), sedangkan SD kelas 4–6, SMP, dan SMA sebagai makan siang (antara pukul 11.00–13.00). Selama Ramadan, penerima manfaat mendapatkan bingkisan yang bisa dinikmati saat berbuka.",
  },
  {
    q: "Apa itu SPPG dan bagaimana cara kerjanya?",
    a: "Satuan Pelayanan Pemenuhan Gizi (SPPG) adalah dapur komunitas gizi yang menjadi unit operasional program MBG. Setiap SPPG melayani sekolah dan kelompok sasaran di sekitarnya. Pada 2025, diperlukan 30.000 SPPG untuk menjangkau 82,9 juta penerima, di mana 1.542 didanai APBN dan 28.458 lainnya melalui skema kemitraan dengan UMKM dan koperasi lokal.",
  },
  {
    q: "Apa dasar hukum Program MBG?",
    a: "Program MBG dilandasi oleh Peraturan Presiden Nomor 83 Tahun 2024 tentang Badan Gizi Nasional (BGN), yang menetapkan BGN sebagai lembaga yang bertanggung jawab atas perumusan dan pelaksanaan kebijakan pemenuhan gizi nasional. Selain itu, Perpres Nomor 115 Tahun 2025 mengatur tata kelola penyelenggaraan program MBG.",
  },
  {
    q: "Bagaimana program MBG berkontribusi pada ekonomi lokal?",
    a: "Program MBG secara aktif melibatkan UMKM, petani, nelayan, dan koperasi lokal dalam rantai pasokan makanan bergizi. Hal ini mendorong ekonomi kerakyatan, menciptakan lebih dari 100.000 lapangan kerja baru, mengurangi beban pengeluaran rumah tangga, serta memperkuat ketahanan pangan nasional melalui pembelian langsung dari produsen rakyat.",
  },
  {
    q: "Bagaimana cara mendaftarkan UMKM sebagai mitra program MBG?",
    a: "UMKM dan koperasi yang ingin menjadi mitra program MBG dapat mendaftar melalui Badan Gizi Nasional (BGN). Mitra akan terlibat dalam penyediaan bahan baku, pengolahan makanan, atau distribusi melalui SPPG. Informasi lebih lanjut dapat diakses melalui website resmi BGN di bgn.go.id atau menghubungi kantor BGN terdekat.",
  },
  {
    q: "Apa target jangka panjang program MBG untuk Indonesia?",
    a: "Program MBG merupakan investasi jangka panjang untuk mewujudkan Indonesia Emas 2045. Targetnya adalah menciptakan generasi yang bebas stunting, sehat, dan cerdas sehingga menjadi SDM berkualitas yang berdaya saing global. Program ini juga bertujuan mengurangi malnutrisi, meningkatkan prestasi pendidikan, dan memperkuat ketahanan ekonomi nasional secara berkelanjutan.",
  },
];

function FAQItem({ item, index, isOpen, onToggle }: {
  item: typeof faqs[0];
  index: number;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06 }}
      className={`border rounded-2xl overflow-hidden transition-all duration-300 ${
        isOpen
          ? "border-primary-200 shadow-sm shadow-primary-100"
          : "border-gray-100 hover:border-primary-100"
      }`}
    >
      <button
        onClick={onToggle}
        className="w-full flex items-start justify-between gap-4 p-5 text-left bg-white hover:bg-primary-50/30 transition-colors"
      >
        <span className="font-display font-semibold text-gray-900 text-sm sm:text-base leading-snug">
          {item.q}
        </span>
        <div
          className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300 ${
            isOpen ? "bg-primary-500 text-white rotate-0" : "bg-primary-50 text-primary-600"
          }`}
        >
          {isOpen ? <Minus size={14} /> : <Plus size={14} />}
        </div>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 bg-white">
              <div className="h-px bg-primary-100 mb-4" />
              <p className="text-gray-600 font-body text-sm leading-relaxed">{item.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="faq" ref={ref} className="relative py-10 bg-gray-50 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary-200 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-primary-100 to-transparent" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-primary-50 border border-primary-100 rounded-full px-3 py-1.5 mb-4">
            <div className="w-1.5 h-1.5 rounded-full bg-primary-500" />
            <span className="text-primary-700 text-xs font-display font-semibold tracking-wide uppercase">
              Pertanyaan Umum
            </span>
          </div>
          <h2
            className="font-display font-extrabold text-primary-950 leading-tight"
            style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)" }}
          >
            Pertanyaan yang Sering{" "}
            <span className="text-gradient">Diajukan</span>
          </h2>
          <p className="mt-4 text-gray-500 font-body">
            Temukan jawaban atas pertanyaan umum seputar Program Makan Bergizi Gratis.
          </p>
        </motion.div>

        {/* FAQ Items */}
        <div className="space-y-3">
          {faqs.map((item, i) => (
            <FAQItem
              key={i}
              item={item}
              index={i}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-500 font-body text-sm mb-3">
            Masih ada pertanyaan? Kunjungi website resmi Badan Gizi Nasional
          </p>
          <a
            href="https://www.bgn.go.id"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-primary-600 hover:bg-primary-700 text-white font-display font-semibold text-sm px-6 py-2.5 rounded-xl transition-all duration-200 shadow-lg shadow-primary-600/20 hover:scale-105"
          >
            Kunjungi bgn.go.id
          </a>
        </motion.div>
      </div>
    </section>
  );
}