"use client";

import { useState, useEffect, useRef, useMemo, useCallback } from "react";
import { motion } from "motion/react";
import { LocateFixed, ZoomIn, ZoomOut } from "lucide-react";
import { mbgData, provinsiData } from "@/data/mbgData";
import type * as LeafletTypes from "leaflet";

type ViewMode = "kota" | "provinsi";

// Compute intensity-based color
function getHeatColor(value: number, min: number, max: number): string {
  const ratio = max === min ? 0.5 : (value - min) / (max - min);
  // From light green → deep green → with high = accent gold tint
  const r = Math.round(5 + ratio * (20 - 5));
  const g = Math.round(150 + ratio * (100 - 150));
  const b = Math.round(80 + ratio * (30 - 80));
  const alpha = 0.35 + ratio * 0.45;
  return `rgba(${r},${g},${b},${alpha})`;
}

export default function MapSection() {
  const mapRef = useRef<HTMLDivElement>(null);
  const leafletRef = useRef<typeof LeafletTypes | null>(null);
  const mapInst = useRef<LeafletTypes.Map | null>(null);
  const circleLayerRef = useRef<LeafletTypes.Circle[]>([]);

  const [viewMode, setViewMode] = useState<ViewMode>("kota");
  const [isMapReady, setIsMapReady] = useState(false);
  const [tooltip, setTooltip] = useState<{
    name: string;
    sekolah: number;
    anakUsia: number;
    ibuHamil: number;
    x: number;
    y: number;
  } | null>(null);

  const kotaMin = useMemo(
    () => Math.min(...mbgData.map((d) => d.anakUsia)),
    [],
  );
  const kotaMax = useMemo(
    () => Math.max(...mbgData.map((d) => d.anakUsia)),
    [],
  );
  const provMin = useMemo(
    () => Math.min(...provinsiData.map((d) => d.anakUsia)),
    [],
  );
  const provMax = useMemo(
    () => Math.max(...provinsiData.map((d) => d.anakUsia)),
    [],
  );

  const drawCircles = useCallback(() => {
    const L = leafletRef.current;
    const map = mapInst.current;
    if (!L || !map) return;

    // Clear old circles
    circleLayerRef.current.forEach((c) => map.removeLayer(c));
    circleLayerRef.current = [];

    const data = viewMode === "kota" ? mbgData : provinsiData;
    const min = viewMode === "kota" ? kotaMin : provMin;
    const max = viewMode === "kota" ? kotaMax : provMax;

    data.forEach((d) => {
      const name =
        viewMode === "kota"
          ? (d as import("@/data/mbgData").KotaData).kota
          : (d as import("@/data/mbgData").ProvinsiData).provinsi;
      const ratio = max === min ? 0.5 : (d.anakUsia - min) / (max - min);
      const radius =
        viewMode === "kota" ? 8000 + ratio * 35000 : 25000 + ratio * 140000;
      const fillColor = getHeatColor(d.anakUsia, min, max);

      const circle = L.circle([d.lat, d.lng], {
        radius,
        fillColor,
        fillOpacity: 0.75,
        color: "#16a34a",
        weight: 1.5,
        opacity: 0.6,
      }).addTo(map);

      circle.on("mouseover", () => {
        circle.setStyle({ fillOpacity: 0.92, weight: 2.5, color: "#eab308" });
        const containerPoint = map.latLngToContainerPoint([d.lat, d.lng]);
        setTooltip({
          name,
          sekolah: d.sekolah,
          anakUsia: d.anakUsia,
          ibuHamil: d.ibuHamil,
          x: containerPoint.x,
          y: containerPoint.y,
        });
      });
      circle.on("mouseout", () => {
        circle.setStyle({ fillOpacity: 0.75, weight: 1.5, color: "#16a34a" });
        setTooltip(null);
      });
      circle.on("click", () => {
        map.flyTo([d.lat, d.lng], viewMode === "kota" ? 10 : 8, {
          animate: true,
          duration: 1,
        });
      });

      circleLayerRef.current.push(circle);
    });
  }, [viewMode, kotaMin, kotaMax, provMin, provMax]);

  // Init Leaflet
  useEffect(() => {
    if (typeof window === "undefined" || !mapRef.current) return;

    let cancelled = false;

    import("leaflet").then((L) => {
      if (cancelled || mapInst.current) return;

      leafletRef.current = L.default ?? L;
      const Lx = leafletRef.current;

      // Fix default icon
      delete (Lx.Icon.Default.prototype as unknown as Record<string, unknown>)[
        "_getIconUrl"
      ];
      Lx.Icon.Default.mergeOptions({
        iconRetinaUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        shadowUrl:
          "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
      });

      const map = Lx.map(mapRef.current!, {
        center: [-2.5, 118.0],
        zoom: 5,
        zoomControl: false,
        attributionControl: false,
      });

      Lx.tileLayer(
        "https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png",
        {
          attribution: "©OpenStreetMap ©CartoDB",
          subdomains: "abcd",
          maxZoom: 19,
        },
      ).addTo(map);

      Lx.control
        .attribution({ position: "bottomright", prefix: "" })
        .addTo(map);

      mapInst.current = map;
      setIsMapReady(true);
    });

    return () => {
      cancelled = true;
      mapInst.current?.remove();
      mapInst.current = null;
    };
  }, []);

  useEffect(() => {
    if (isMapReady) drawCircles();
  }, [isMapReady, drawCircles]);

  const zoomIn = () => mapInst.current?.zoomIn();
  const zoomOut = () => mapInst.current?.zoomOut();
  const resetView = () =>
    mapInst.current?.flyTo([-2.5, 118.0], 5, { animate: true, duration: 1 });

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="rounded-3xl bg-white border border-gray-100 shadow-sm overflow-hidden"
    >
      {/* Header */}
      <div className="px-6 pt-6 pb-4 border-b border-gray-50">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="font-display font-bold text-xl text-primary-950">
              Peta Sebaran MBG
            </h2>
            <p className="text-gray-500 font-body text-sm mt-0.5">
              Visualisasi geografis penerima manfaat di seluruh Indonesia
            </p>
          </div>

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
        </div>
      </div>

      {/* Map Container */}
      <div className="relative" style={{ height: 520 }}>
        {/* Leaflet CSS */}
        <style>{`
          @import url('https://unpkg.com/leaflet@1.9.4/dist/leaflet.css');
          .leaflet-container { font-family: 'DM Sans', sans-serif; }
          .leaflet-control-attribution { font-size: 9px; }
        `}</style>

        <div ref={mapRef} className="w-full h-full" />

        {/* Custom zoom controls */}
        <div className="absolute right-4 bottom-16 z-400 flex flex-col gap-1">
          <button
            onClick={zoomIn}
            className="w-9 h-9 glass-light rounded-xl flex items-center justify-center shadow-sm hover:shadow-md transition-shadow border border-white/60"
            style={{ color: "#16a34a" }}
          >
            <ZoomIn size={16} />
          </button>
          <button
            onClick={zoomOut}
            className="w-9 h-9 glass-light rounded-xl flex items-center justify-center shadow-sm hover:shadow-md transition-shadow border border-white/60"
            style={{ color: "#16a34a" }}
          >
            <ZoomOut size={16} />
          </button>
          <button
            onClick={resetView}
            className="w-9 h-9 glass-light rounded-xl flex items-center justify-center shadow-sm hover:shadow-md transition-shadow border border-white/60 mt-1"
            style={{ color: "#6b7280" }}
          >
            <LocateFixed size={15} />
          </button>
        </div>

        {/* Legend */}
        <div className="absolute bottom-4 left-4 z-400 glass-light rounded-xl px-3 py-2.5 shadow border border-white/60">
          <p className="font-display font-semibold text-[10px] text-gray-600 mb-2">
            Jumlah Anak Usia Emas
          </p>
          <div className="flex items-center gap-1.5">
            {[0.1, 0.3, 0.5, 0.7, 0.9].map((r) => (
              <div
                key={r}
                className="w-5 h-5 rounded"
                style={{ backgroundColor: getHeatColor(r * 100, 0, 100) }}
              />
            ))}
          </div>
          <div className="flex justify-between mt-1">
            <span className="text-[9px] text-gray-400">Rendah</span>
            <span className="text-[9px] text-gray-400">Tinggi</span>
          </div>
        </div>

        {/* Tooltip */}
        {tooltip && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="absolute z-500 pointer-events-none"
            style={{ left: tooltip.x + 16, top: tooltip.y - 80 }}
          >
            <div className="glass-light rounded-xl p-3 shadow-xl border border-primary-100 min-w-[180px]">
              <p className="font-display font-bold text-primary-900 text-xs mb-2 border-b border-primary-100 pb-1.5">
                {tooltip.name}
              </p>
              <div className="space-y-1">
                {[
                  {
                    label: "Sekolah MBG",
                    value: tooltip.sekolah,
                    color: "#16a34a",
                  },
                  {
                    label: "Anak Usia Emas",
                    value: tooltip.anakUsia,
                    color: "#eab308",
                  },
                  {
                    label: "Ibu Hamil/Menyusui",
                    value: tooltip.ibuHamil,
                    color: "#e11d48",
                  },
                ].map((row) => (
                  <div
                    key={row.label}
                    className="flex justify-between items-center gap-3"
                  >
                    <div className="flex items-center gap-1.5">
                      <div
                        className="w-2 h-2 rounded-full"
                        style={{ backgroundColor: row.color }}
                      />
                      <span className="text-[10px] font-body text-gray-600">
                        {row.label}
                      </span>
                    </div>
                    <span className="font-display font-semibold text-[10px] text-gray-800">
                      {row.value.toLocaleString("id-ID")}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}

        {/* Loading overlay */}
        {!isMapReady && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-50 z-300">
            <div className="flex flex-col items-center gap-3">
              <div className="w-10 h-10 rounded-full border-2 border-primary-200 border-t-primary-500 animate-spin" />
              <p className="font-body text-sm text-gray-500">Memuat peta...</p>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}
