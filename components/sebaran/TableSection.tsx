"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, ChevronDown, ChevronUp, ChevronsUpDown, ChevronLeft, ChevronRight, Filter, X, School, Users, Heart } from "lucide-react";
import { mbgData, PROVINSI_LIST } from "@/data/mbgData";

type SortKey = "kota" | "provinsi" | "sekolah" | "anakUsia" | "ibuHamil";
type SortDir = "asc" | "desc";

const PAGE_SIZE = 10;

function SortIcon({
  col,
  sortKey,
  sortDir,
}: {
  col: SortKey;
  sortKey: SortKey;
  sortDir: SortDir;
}) {
  if (col !== sortKey)
    return <ChevronsUpDown size={13} className="opacity-30" />;
  return sortDir === "asc" ? (
    <ChevronUp size={13} style={{ color: "#16a34a" }} />
  ) : (
    <ChevronDown size={13} style={{ color: "#16a34a" }} />
  );
}

export default function TableSection() {
  const [search, setSearch] = useState("");
  const [provFilter, setProvFilter] = useState("Semua");
  const [sortKey, setSortKey] = useState<SortKey>("anakUsia");
  const [sortDir, setSortDir] = useState<SortDir>("desc");
  const [page, setPage] = useState(1);
  const [showFilter, setShowFilter] = useState(false);

  const handleSort = (key: SortKey) => {
    if (key === sortKey) setSortDir((d) => (d === "asc" ? "desc" : "asc"));
    else {
      setSortKey(key);
      setSortDir("desc");
    }
    setPage(1);
  };

  const filtered = useMemo(() => {
    let data = [...mbgData];
    if (search.trim()) {
      const q = search.toLowerCase();
      data = data.filter(
        (d) =>
          d.kota.toLowerCase().includes(q) ||
          d.provinsi.toLowerCase().includes(q),
      );
    }
    if (provFilter !== "Semua")
      data = data.filter((d) => d.provinsi === provFilter);
    data.sort((a, b) => {
      const av: string | number = a[sortKey];
      const bv: string | number = b[sortKey];
      const cmp =
        typeof av === "string"
          ? av.localeCompare(bv as string)
          : av - (bv as number);
      return sortDir === "asc" ? cmp : -cmp;
    });
    return data;
  }, [search, provFilter, sortKey, sortDir]);

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE);
  const pageData = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const totalStats = useMemo(
    () => ({
      sekolah: filtered.reduce((s, d) => s + d.sekolah, 0),
      anakUsia: filtered.reduce((s, d) => s + d.anakUsia, 0),
      ibuHamil: filtered.reduce((s, d) => s + d.ibuHamil, 0),
    }),
    [filtered],
  );

  const cols: { key: SortKey; label: string; align?: string }[] = [
    { key: "kota", label: "Kota / Kabupaten" },
    { key: "provinsi", label: "Provinsi" },
    { key: "sekolah", label: "Sekolah MBG", align: "right" },
    { key: "anakUsia", label: "Anak Usia Emas", align: "right" },
    { key: "ibuHamil", label: "Ibu Hamil/Menyusui", align: "right" },
  ];

  const getIntensityBg = (value: number, max: number): string => {
    const ratio = value / max;
    if (ratio > 0.7) return "#f0fdf4";
    if (ratio > 0.4) return "#f7fef9";
    return "transparent";
  };

  const maxAnak = Math.max(...mbgData.map((d) => d.anakUsia));

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="rounded-3xl bg-white border border-gray-100 shadow-sm overflow-hidden"
    >
      {/* Header */}
      <div className="px-6 pt-6 pb-4 border-b border-gray-50">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="font-display font-bold text-xl text-primary-950">
              Tabel Data MBG
            </h2>
            <p className="text-gray-500 font-body text-sm mt-0.5">
              {filtered.length} dari {mbgData.length} kab/kota
              {provFilter !== "Semua" ? ` di ${provFilter}` : ""}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowFilter((v) => !v)}
              className="flex items-center gap-1.5 px-3 py-2 text-xs font-display font-semibold rounded-xl border transition-all duration-200"
              style={{
                borderColor: showFilter ? "#16a34a" : "#e5e7eb",
                color: showFilter ? "#16a34a" : "#6b7280",
                backgroundColor: showFilter ? "#f0fdf4" : "white",
              }}
            >
              <Filter size={12} />
              Filter
              {provFilter !== "Semua" && (
                <span className="w-1.5 h-1.5 rounded-full bg-primary-500" />
              )}
            </button>
          </div>
        </div>

        {/* Filter panel */}
        <AnimatePresence>
          {showFilter && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="overflow-hidden"
            >
              <div className="pt-4 flex flex-col sm:flex-row gap-3">
                <div className="flex-1 relative">
                  <Search
                    size={14}
                    className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
                  />
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => {
                      setSearch(e.target.value);
                      setPage(1);
                    }}
                    placeholder="Cari kota/kabupaten atau provinsi..."
                    className="w-full pl-9 pr-9 py-2.5 text-sm font-body rounded-xl border border-gray-200 bg-gray-50 focus:outline-none focus:border-primary-400 focus:bg-white transition-all"
                  />
                  {search && (
                    <button
                      onClick={() => setSearch("")}
                      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                    >
                      <X size={14} />
                    </button>
                  )}
                </div>
                <div className="relative">
                  <select
                    value={provFilter}
                    onChange={(e) => {
                      setProvFilter(e.target.value);
                      setPage(1);
                    }}
                    className="appearance-none pl-3 pr-8 py-2.5 text-sm font-body rounded-xl border border-gray-200 bg-gray-50 text-gray-700 focus:outline-none focus:border-primary-400 min-w-[180px]"
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
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none"
                  />
                </div>
                {(search || provFilter !== "Semua") && (
                  <button
                    onClick={() => {
                      setSearch("");
                      setProvFilter("Semua");
                      setPage(1);
                    }}
                    className="flex items-center gap-1.5 px-3 py-2.5 text-xs font-body text-gray-500 hover:text-gray-700 transition-colors"
                  >
                    <X size={12} />
                    Reset
                  </button>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Summary stats */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mt-4">
          {[
            {
              icon: School,
              label: "Sekolah",
              value: totalStats.sekolah,
              color: "#16a34a",
              bg: "#f0fdf4",
            },
            {
              icon: Users,
              label: "Anak Usia Emas",
              value: totalStats.anakUsia,
              color: "#eab308",
              bg: "#fefce8",
            },
            {
              icon: Heart,
              label: "Ibu Hamil/Menyusui",
              value: totalStats.ibuHamil,
              color: "#e11d48",
              bg: "#fff1f2",
            },
          ].map((s) => (
            <div
              key={s.label}
              className="flex items-center gap-2 p-3 rounded-xl"
              style={{ backgroundColor: s.bg }}
            >
              <s.icon size={14} style={{ color: s.color, flexShrink: 0 }} />
              <div className="min-w-0">
                <p
                  className="font-display font-bold text-sm"
                  style={{ color: s.color }}
                >
                  {s.value.toLocaleString("id-ID")}
                </p>
                <p className="font-body text-[10px] text-gray-500 truncate">
                  {s.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr style={{ backgroundColor: "#fafafa" }}>
              <th className="pl-6 pr-3 py-3 text-left w-10">
                <span className="font-display font-semibold text-xs text-gray-400">
                  #
                </span>
              </th>
              {cols.map((col) => (
                <th
                  key={col.key}
                  className={`px-4 py-3 font-display font-semibold text-xs text-gray-500 cursor-pointer hover:text-primary-700 select-none ${col.align === "right" ? "text-right" : "text-left"}`}
                  onClick={() => handleSort(col.key)}
                >
                  <span className="inline-flex items-center gap-1.5">
                    {col.align === "right" && (
                      <SortIcon
                        col={col.key}
                        sortKey={sortKey}
                        sortDir={sortDir}
                      />
                    )}
                    {col.label}
                    {col.align !== "right" && (
                      <SortIcon
                        col={col.key}
                        sortKey={sortKey}
                        sortDir={sortDir}
                      />
                    )}
                  </span>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            <AnimatePresence mode="wait">
              {pageData.map((row, i) => (
                <motion.tr
                  key={row.id}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.03 }}
                  className="border-t border-gray-50 hover:bg-primary-50/40 transition-colors group"
                  style={{
                    backgroundColor: getIntensityBg(row.anakUsia, maxAnak),
                  }}
                >
                  <td className="pl-6 pr-3 py-3.5">
                    <span className="font-body text-xs text-gray-300">
                      {(page - 1) * PAGE_SIZE + i + 1}
                    </span>
                  </td>
                  <td className="px-4 py-3.5">
                    <p className="font-body font-medium text-sm text-gray-800">
                      {row.kota}
                    </p>
                  </td>
                  <td className="px-4 py-3.5">
                    <span
                      className="inline-flex items-center px-2 py-0.5 rounded-lg text-xs font-body"
                      style={{ backgroundColor: "#f0fdf4", color: "#15803d" }}
                    >
                      {row.provinsi}
                    </span>
                  </td>
                  <td className="px-4 py-3.5 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <div className="w-12 h-1.5 rounded-full bg-gray-100 overflow-hidden hidden sm:block">
                        <div
                          className="h-full rounded-full bg-primary-400"
                          style={{
                            width: `${(row.sekolah / Math.max(...mbgData.map((d) => d.sekolah))) * 100}%`,
                          }}
                        />
                      </div>
                      <span className="font-display font-semibold text-sm text-gray-800">
                        {row.sekolah.toLocaleString("id-ID")}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-3.5 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <div className="w-12 h-1.5 rounded-full bg-gray-100 overflow-hidden hidden sm:block">
                        <div
                          className="h-full rounded-full"
                          style={{
                            width: `${(row.anakUsia / maxAnak) * 100}%`,
                            backgroundColor: "#eab308",
                          }}
                        />
                      </div>
                      <span className="font-display font-semibold text-sm text-gray-800">
                        {row.anakUsia.toLocaleString("id-ID")}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-3.5 text-right">
                    <span className="font-display font-semibold text-sm text-gray-800">
                      {row.ibuHamil.toLocaleString("id-ID")}
                    </span>
                  </td>
                </motion.tr>
              ))}
            </AnimatePresence>
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="px-6 py-4 border-t border-gray-50 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-body text-xs text-gray-400">
          Menampilkan {Math.min((page - 1) * PAGE_SIZE + 1, filtered.length)}–
          {Math.min(page * PAGE_SIZE, filtered.length)} dari {filtered.length}{" "}
          data
        </p>
        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setPage(1)}
            disabled={page === 1}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-display font-semibold transition-colors disabled:opacity-30"
            style={{ color: "#6b7280" }}
          >
            «
          </button>
          <button
            onClick={() => setPage((p) => p - 1)}
            disabled={page === 1}
            className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors disabled:opacity-30"
            style={{ color: "#6b7280" }}
          >
            <ChevronLeft size={15} />
          </button>
          {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
            const offset = Math.max(0, Math.min(page - 3, totalPages - 5));
            const p = i + 1 + offset;
            return (
              <button
                key={p}
                onClick={() => setPage(p)}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-display font-semibold transition-all duration-200"
                style={{
                  backgroundColor: p === page ? "#16a34a" : "transparent",
                  color: p === page ? "white" : "#6b7280",
                }}
              >
                {p}
              </button>
            );
          })}
          <button
            onClick={() => setPage((p) => p + 1)}
            disabled={page === totalPages}
            className="w-8 h-8 rounded-lg flex items-center justify-center transition-colors disabled:opacity-30"
            style={{ color: "#6b7280" }}
          >
            <ChevronRight size={15} />
          </button>
          <button
            onClick={() => setPage(totalPages)}
            disabled={page === totalPages}
            className="w-8 h-8 rounded-lg flex items-center justify-center text-xs font-display font-semibold transition-colors disabled:opacity-30"
            style={{ color: "#6b7280" }}
          >
            »
          </button>
        </div>
      </div>
    </motion.div>
  );
}
