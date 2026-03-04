"use client";

import { useState, useMemo } from "react";
import { motion } from "motion/react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import type { Payload } from "recharts/types/component/DefaultTooltipContent";
import { mbgData, provinsiData, PROVINSI_LIST } from "@/data/mbgData";
import { School, Users, Heart, ChevronDown } from "lucide-react";

type ViewMode = "kota" | "provinsi";

const COLORS = {
  sekolah: "#16a34a",
  anakUsia: "#eab308",
  ibuHamil: "#e11d48",
};

const CustomTooltip = ({
  active,
  payload,
  label,
}: {
  active?: boolean;
  payload?: Payload<number, string>[];
  label?: string;
}) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="glass-light rounded-xl p-4 shadow-xl border border-primary-100 min-w-[200px]">
      <p className="font-display font-bold text-primary-900 text-sm mb-3 border-b border-primary-100 pb-2">
        {label}
      </p>
      {payload.map((p) => (
        <div
          key={String(p.dataKey)}
          className="flex items-center justify-between gap-4 mb-1.5"
        >
          <div className="flex items-center gap-1.5">
            <div
              className="w-2.5 h-2.5 rounded-full"
              style={{ backgroundColor: p.color }}
            />
            <span className="text-xs font-body text-gray-600">{p.name}</span>
          </div>
          <span className="font-display font-semibold text-xs text-gray-800">
            {(p.value ?? 0).toLocaleString("id-ID")}
          </span>
        </div>
      ))}
    </div>
  );
};

export default function ChartSection() {
  const [viewMode, setViewMode] = useState<ViewMode>("provinsi");
  const [selectedProv, setSelectedProv] = useState<string>("Semua");

  const filteredKota = useMemo(() => {
    if (selectedProv === "Semua") return mbgData;
    return mbgData.filter((d) => d.provinsi === selectedProv);
  }, [selectedProv]);

  const chartData = useMemo(() => {
    if (viewMode === "provinsi") {
      return provinsiData
        .sort((a, b) => b.anakUsia - a.anakUsia)
        .slice(0, 20)
        .map((d) => ({
          name: d.provinsi
            .replace("Kalimantan", "Kal.")
            .replace("Sulawesi", "Sul.")
            .replace("Sumatera", "Sum."),
          Sekolah: d.sekolah,
          "Anak Usia Emas": d.anakUsia,
          "Ibu Hamil/Menyusui": d.ibuHamil,
        }));
    }
    return filteredKota
      .sort((a, b) => b.anakUsia - a.anakUsia)
      .slice(0, 25)
      .map((d) => ({
        name: d.kota.replace("Kab. ", "").replace("Kota ", ""),
        Sekolah: d.sekolah,
        "Anak Usia Emas": d.anakUsia,
        "Ibu Hamil/Menyusui": d.ibuHamil,
      }));
  }, [viewMode, filteredKota]);

  const totalStats = useMemo(() => {
    const src = viewMode === "provinsi" ? provinsiData : filteredKota;
    return {
      sekolah: src.reduce((s, d) => s + d.sekolah, 0),
      anakUsia: src.reduce((s, d) => s + d.anakUsia, 0),
      ibuHamil: src.reduce((s, d) => s + d.ibuHamil, 0),
    };
  }, [viewMode, filteredKota]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="rounded-3xl bg-white border border-gray-100 shadow-sm overflow-hidden"
    >
      {/* Header */}
      <div className="px-6 pt-6 pb-4 border-b border-gray-50">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="font-display font-bold text-xl text-primary-950">
              Distribusi Data MBG
            </h2>
            <p className="text-gray-500 font-body text-sm mt-0.5">
              {viewMode === "provinsi"
                ? "Top 20 provinsi berdasarkan jumlah penerima"
                : `Top 25 kab/kota${selectedProv !== "Semua" ? ` di ${selectedProv}` : ""}`}
            </p>
          </div>

          {/* Controls */}
          <div className="flex flex-wrap items-center gap-2">
            {/* View toggle */}
            <div className="flex items-center rounded-xl border border-gray-200 overflow-hidden">
              {(["provinsi", "kota"] as ViewMode[]).map((v) => (
                <button
                  key={v}
                  onClick={() => setViewMode(v)}
                  className="px-4 py-2 text-xs font-display font-semibold transition-all duration-200"
                  style={{
                    backgroundColor: viewMode === v ? "#16a34a" : "transparent",
                    color: viewMode === v ? "white" : "#6b7280",
                  }}
                >
                  {v === "provinsi" ? "Per Provinsi" : "Per Kab/Kota"}
                </button>
              ))}
            </div>

            {/* Province filter (only when kota mode) */}
            {viewMode === "kota" && (
              <div className="relative">
                <select
                  value={selectedProv}
                  onChange={(e) => setSelectedProv(e.target.value)}
                  className="appearance-none pl-3 pr-8 py-2 text-xs font-body rounded-xl border border-gray-200 bg-white text-gray-700 focus:outline-none focus:border-primary-400"
                >
                  <option value="Semua">Semua Provinsi</option>
                  {PROVINSI_LIST.map((p) => (
                    <option key={p} value={p}>
                      {p}
                    </option>
                  ))}
                </select>
                <ChevronDown
                  size={13}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                />
              </div>
            )}
          </div>
        </div>

        {/* Summary stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
          {[
            {
              icon: School,
              label: "Total Sekolah",
              value: totalStats.sekolah,
              color: COLORS.sekolah,
              bg: "#f0fdf4",
            },
            {
              icon: Users,
              label: "Anak Usia Emas",
              value: totalStats.anakUsia,
              color: COLORS.anakUsia,
              bg: "#fefce8",
            },
            {
              icon: Heart,
              label: "Ibu Hamil/Menyusui",
              value: totalStats.ibuHamil,
              color: COLORS.ibuHamil,
              bg: "#fff1f2",
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="flex items-center gap-2.5 p-3 rounded-xl"
              style={{ backgroundColor: stat.bg }}
            >
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                style={{ backgroundColor: stat.color + "20" }}
              >
                <stat.icon size={15} style={{ color: stat.color }} />
              </div>
              <div className="min-w-0">
                <p
                  className="font-display font-bold text-sm leading-none"
                  style={{ color: stat.color }}
                >
                  {stat.value.toLocaleString("id-ID")}
                </p>
                <p className="font-body text-[10px] text-gray-500 mt-0.5 truncate">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Chart */}
      <div className="p-4 sm:p-6">
        <ResponsiveContainer width="100%" height={420}>
          <BarChart
            data={chartData}
            margin={{ top: 5, right: 10, left: 0, bottom: 90 }}
            barCategoryGap="25%"
            barGap={3}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#f3f4f6"
              vertical={false}
            />
            <XAxis
              dataKey="name"
              tick={{ fontSize: 10, fontFamily: "DM Sans", fill: "#6b7280" }}
              angle={-45}
              textAnchor="end"
              interval={0}
              axisLine={false}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 10, fontFamily: "DM Sans", fill: "#9ca3af" }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(v) =>
                v >= 1000 ? `${(v / 1000).toFixed(0)}k` : v
              }
            />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{ fill: "rgba(22,163,74,0.04)" }}
            />
            <Legend
              wrapperStyle={{
                fontSize: 12,
                fontFamily: "DM Sans",
                paddingTop: 16,
              }}
              iconType="circle"
              iconSize={8}
            />
            <Bar
              dataKey="Sekolah"
              fill={COLORS.sekolah}
              radius={[4, 4, 0, 0]}
              maxBarSize={18}
            />
            <Bar
              dataKey="Anak Usia Emas"
              fill={COLORS.anakUsia}
              radius={[4, 4, 0, 0]}
              maxBarSize={18}
            />
            <Bar
              dataKey="Ibu Hamil/Menyusui"
              fill={COLORS.ibuHamil}
              radius={[4, 4, 0, 0]}
              maxBarSize={18}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </motion.div>
  );
}
