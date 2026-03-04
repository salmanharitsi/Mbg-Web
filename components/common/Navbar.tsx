"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, MapPin, ArrowLeft } from "lucide-react";

const navLinks = [
  { label: "Tentang Kami", href: "#tentang" },
  { label: "Sasaran", href: "#sasaran" },
  { label: "Tujuan", href: "#tujuan" },
  { label: "Timeline", href: "#timeline" },
  { label: "Mitra", href: "#mitra" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const pathname = usePathname();
  const isSebaran = pathname === "/sebaran";

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="fixed top-0 left-0 right-0 z-9998 flex justify-center px-4 pt-4"
      >
        <div
          className={`w-full max-w-6xl rounded-2xl transition-all duration-500 ${scrolled ? "glass-light bg-white/50 backdrop-blur-xs" : "glass"}`}
          style={
            scrolled ? { boxShadow: "0 8px 32px rgba(22,163,74,0.12)" } : {}
          }
        >
          <nav className="flex items-center justify-between px-5 py-3">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group">
              <div
                className="w-9 h-9 rounded-xl flex items-center justify-center shadow-lg"
                style={{
                  background: "linear-gradient(135deg, #16a34a, #14532d)",
                }}
              >
                <span className="text-white font-display font-bold text-sm">
                  BGN
                </span>
              </div>
              <div className="hidden sm:block">
                <p
                  className={`font-display font-bold text-sm leading-tight ${scrolled ? "text-primary-800" : "text-white"}`}
                >
                  Badan Gizi Nasional
                </p>
                <p
                  className={`text-[10px] font-body leading-none ${scrolled ? "text-primary-600" : "text-gray-400"}`}
                >
                  Program Makan Bergizi Gratis
                </p>
              </div>
            </Link>

            {/* Desktop Nav */}
            {!isSebaran && (
              <ul className="hidden lg:flex items-center gap-1">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setActiveHash(link.href)}
                      className="px-3 py-1.5 rounded-lg text-sm font-body font-medium transition-all duration-200"
                      style={{
                        color: scrolled
                          ? activeHash === link.href
                            ? "#15803d"
                            : "#166534"
                          : activeHash === link.href
                            ? "#fff"
                            : "rgba(255,255,255,0.8)",
                        backgroundColor:
                          activeHash === link.href
                            ? scrolled
                              ? "rgba(22,163,74,0.12)"
                              : "rgba(255,255,255,0.1)"
                            : "transparent",
                      }}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}

            {/* CTA + Hamburger */}
            <div className="flex items-center gap-3">
              {isSebaran ? (
                <Link
                  href="/"
                  className="hidden sm:flex items-center gap-2 text-sm font-display font-semibold px-4 py-2 rounded-xl transition-all duration-200 hover:scale-105"
                  style={{
                    color: scrolled ? "#166534" : "white",
                    backgroundColor: scrolled
                      ? "rgba(22,163,74,0.12)"
                      : "rgba(255,255,255,0.12)",
                    border: scrolled
                      ? "1px solid rgba(22,163,74,0.2)"
                      : "1px solid rgba(255,255,255,0.2)",
                  }}
                >
                  <ArrowLeft size={14} />
                  <span>Kembali</span>
                </Link> 
              ) : (
                <Link
                  href="/sebaran"
                  className="hidden sm:flex items-center gap-2 text-white text-sm font-display font-semibold px-4 py-2 rounded-xl transition-all duration-200 hover:scale-105"
                  style={{
                    backgroundColor: "#16a34a",
                    boxShadow: "0 4px 14px rgba(22,163,74,0.35)",
                  }}
                >
                  <MapPin size={14} />
                  <span>Sebaran MBG</span>
                </Link>
              )}

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="lg:hidden p-2 rounded-xl transition-colors"
                style={{ color: scrolled ? "#15803d" : "white" }}
                aria-label="Toggle menu"
              >
                {menuOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </nav>
        </div>
      </motion.header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 lg:hidden"
            style={{
              backgroundColor: "rgba(2,26,12,0.8)",
              backdropFilter: "blur(4px)",
            }}
            onClick={() => setMenuOpen(false)}
          />
        )}
      </AnimatePresence>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 right-0 bottom-0 z-9999 w-72 bg-white shadow-2xl lg:hidden flex flex-col"
          >
            <div
              className="flex items-center justify-between p-5"
              style={{ borderBottom: "1px solid #dcfce7" }}
            >
              <div className="flex items-center gap-2.5">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, #16a34a, #14532d)",
                  }}
                >
                  <span className="text-white font-display font-bold text-xs">
                    BGN
                  </span>
                </div>
                <span
                  className="font-display font-bold text-sm"
                  style={{ color: "#14532d" }}
                >
                  Badan Gizi Nasional
                </span>
              </div>
              <button
                onClick={() => setMenuOpen(false)}
                className="p-1.5 rounded-lg"
                style={{ color: "#15803d" }}
              >
                <X size={20} />
              </button>
            </div>

            {!isSebaran && (
              <nav className="flex-1 overflow-y-auto p-4">
                <ul className="space-y-1">
                  {navLinks.map((link, i) => (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06 + 0.1 }}
                    >
                      <a
                        href={link.href}
                        onClick={() => {
                          setActiveHash(link.href);
                          setMenuOpen(false);
                        }}
                        className="flex items-center px-4 py-3 rounded-xl font-body font-medium transition-colors"
                        style={{ color: "#166534" }}
                      >
                        {link.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>
              </nav>
            )}

            <div className="p-4" style={{ borderTop: "1px solid #dcfce7" }}>
              <Link
                href={isSebaran ? "/" : "/sebaran"}
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center gap-2 w-full text-white font-display font-semibold px-4 py-3 rounded-xl transition-colors"
                style={{
                  backgroundColor: "#16a34a",
                  boxShadow: "0 4px 14px rgba(22,163,74,0.35)",
                }}
              >
                {isSebaran ? <ArrowLeft size={16} /> : <MapPin size={16} />}
                <span>
                  {isSebaran ? "Kembali ke Beranda" : "Lihat Sebaran MBG"}
                </span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
