import Header from "@/components/layout/Header";
import HeroSection from "@/sections/HeroSection";


export default function Home() {
  return (
    <>
    <h1 className="text-center border rounded-xl bg-teal-300 m-3 text-black font-bold ">The Category Liderboard - LIVE NOW</h1>
      {/* <Header /> */}
      <main className="p-2 bg-white">
        <HeroSection />
      </main>
    </>
  );
}