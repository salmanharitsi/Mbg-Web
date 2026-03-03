import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-plus-jakarta",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  title: "Makan Bergizi Gratis – Badan Gizi Nasional",
  description:
    "Program Makan Bergizi Gratis (MBG) oleh Badan Gizi Nasional Indonesia. Menjangkau 82,9 juta penerima manfaat untuk mewujudkan Indonesia Emas 2045.",
  keywords: ["Makan Bergizi Gratis", "MBG", "Badan Gizi Nasional", "BGN", "Indonesia Emas"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${plusJakarta.variable} ${dmSans.variable}`}>
      <body className="font-body antialiased">{children}</body>
    </html>
  );
}