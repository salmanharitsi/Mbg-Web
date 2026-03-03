import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function SebaranPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen flex items-center justify-center bg-gray-50 pt-24">
        <div className="text-center">
          <p className="font-display font-bold text-2xl text-primary-800">
            Peta Sebaran MBG
          </p>
          <p className="text-gray-500 mt-2 font-body">Halaman ini sedang dalam pengembangan.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}