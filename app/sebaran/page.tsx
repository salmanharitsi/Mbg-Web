"use client";

import Footer from "@/components/common/Footer";
import Navbar from "@/components/common/Navbar";
import ChartSection from "@/components/sebaran/ChartSection";
import TableSection from "@/components/sebaran/TableSection";
import { mbgData } from "@/data/mbgData";
import { School, Users, Heart, MapPin, Building2 } from "lucide-react";
import dynamic from "next/dynamic";

const MapSection = dynamic(() => import("@/components/sebaran/MapSection"), {
  ssr: false,
});

const totalSekolah = mbgData.reduce((s, d) => s + d.sekolah, 0);
const totalAnak = mbgData.reduce((s, d) => s + d.anakUsia, 0);
const totalIbu = mbgData.reduce((s, d) => s + d.ibuHamil, 0);
const totalKotaKab = mbgData.length;
const totalProvinsi = [...new Set(mbgData.map((d) => d.provinsiId))].length;

const heroStats = [
  {
    icon: MapPin,
    label: "Provinsi",
    value: `${totalProvinsi}`,
    color: "#16a34a",
    bg: "rgba(22,163,74,0.12)",
  },
  {
    icon: Building2,
    label: "Kab / Kota",
    value: `${totalKotaKab}`,
    color: "#0891b2",
    bg: "rgba(8,145,178,0.12)",
  },
  {
    icon: School,
    label: "Sekolah MBG",
    value: totalSekolah.toLocaleString("id-ID"),
    color: "#7c3aed",
    bg: "rgba(124,58,237,0.12)",
  },
  {
    icon: Users,
    label: "Anak Usia Emas",
    value: `${(totalAnak / 1_000_000).toFixed(1)}jt`,
    color: "#eab308",
    bg: "rgba(234,179,8,0.12)",
  },
  {
    icon: Heart,
    label: "Ibu Hamil/Menyusui",
    value: `${(totalIbu / 1_000_000).toFixed(2)}jt`,
    color: "#e11d48",
    bg: "rgba(225,29,72,0.12)",
  },
];

function SectionLabel({
  number,
  title,
  desc,
}: {
  number: string;
  title: string;
  desc: string;
}) {
  return (
    <div className="flex items-center gap-4 mb-4">
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center font-display font-black text-sm text-white shrink-0"
        style={{ background: "linear-gradient(135deg, #16a34a, #14532d)" }}
      >
        {number}
      </div>
      <div>
        <h3 className="font-display font-bold text-primary-950">{title}</h3>
        <p className="font-body text-xs text-gray-500">{desc}</p>
      </div>
    </div>
  );
}

export default function SebaranPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen" style={{ backgroundColor: "#f8fdf9" }}>
        {/* Hero Banner */}
        <div
          className="relative overflow-hidden pt-28 pb-12"
          style={{
            background:
              "linear-gradient(135deg, #021a0c 0%, #14532d 40%, #166534 100%)",
          }}
        >
          <div className="absolute inset-0 pointer-events-none">
            <div
              className="absolute -top-20 -right-20 w-80 h-80 rounded-full blur-3xl"
              style={{ backgroundColor: "rgba(74,222,128,0.15)" }}
            />
            <div
              className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full blur-3xl"
              style={{ backgroundColor: "rgba(250,204,21,0.1)" }}
            />
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  "linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)",
                backgroundSize: "60px 60px",
              }}
            />
          </div>

          <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <span
              className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-display font-semibold tracking-wide uppercase"
              style={{
                background: "rgba(250,204,21,0.15)",
                border: "1px solid rgba(250,204,21,0.3)",
                color: "#fde047",
              }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse" />
              Data Sebaran MBG · Update Juli 2025
            </span>
            <h1
              className="font-display font-extrabold text-white mt-3 mb-2"
              style={{ fontSize: "clamp(1.8rem, 4vw, 3rem)" }}
            >
              Peta Sebaran Program MBG
            </h1>
            <p
              className="font-body text-base max-w-2xl"
              style={{ color: "rgba(255,255,255,0.6)" }}
            >
              Pantau distribusi dan jangkauan Program Makan Bergizi Gratis di
              seluruh kabupaten/kota Indonesia secara real-time.
            </p>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
              {heroStats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl p-4 flex items-center gap-3"
                  style={{
                    background: "rgba(255,255,255,0.07)",
                    border: "1px solid rgba(255,255,255,0.1)",
                    backdropFilter: "blur(12px)",
                  }}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                    style={{ backgroundColor: s.bg }}
                  >
                    <s.icon size={17} style={{ color: s.color }} />
                  </div>
                  <div>
                    <p className="font-display font-bold text-white text-lg leading-none">
                      {s.value}
                    </p>
                    <p
                      className="font-body text-[10px] mt-0.5"
                      style={{ color: "rgba(255,255,255,0.5)" }}
                    >
                      {s.label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sections */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
          <div>
            <SectionLabel
              number="01"
              title="Distribusi Data"
              desc="Grafik batang interaktif penerima MBG per wilayah"
            />
            <ChartSection />
          </div>
          <div>
            <SectionLabel
              number="02"
              title="Peta Geografis"
              desc="Visualisasi heat-map sebaran MBG di peta Indonesia"
            />
            <MapSection />
          </div>
          <div>
            <SectionLabel
              number="03"
              title="Tabel Data"
              desc="Data lengkap per kab/kota dengan filter dan pencarian"
            />
            <TableSection />
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
