import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";
import HeroSection from "@/components/landing/HeroSection";
import AboutSection from "@/components/landing/AboutSection";
import SasaranSection from "@/components/landing/SasaranSection";
import TujuanSection from "@/components/landing/TujuanSection";
import TimelineSection from "@/components/landing/TimelineSection";
import MitraSection from "@/components/landing/MitraSection";
import FAQSection from "@/components/landing/FAQSection";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <MitraSection />
        <AboutSection />
        <TimelineSection />
        <SasaranSection />
        <TujuanSection />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
