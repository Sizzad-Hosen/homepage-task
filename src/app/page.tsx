
import AgencyBehindSection from "@/sections/AgencyBehindSection";
import AwardsSection from "@/sections/AwardsSection";
import DrivingSection from "@/sections/DrivingSection";
import FeaturedWorkSection from "@/sections/FeaturedWorkSection";
import Footer from "@/sections/Footer";
import HeroSection from "@/sections/HeroSection";
import LegacySection from "@/sections/LegacySection";
import ServicesSection from "@/sections/ServicesSection";
import WhatsNewSection from "@/sections/WhatsNewSection";
import Header from "@/components/layout/Header";


export default function Home() {
  return (
    <>
      <Header />
<div className="bg-white p-3 pt-2 py-[1px]">
  <h1 className="h-[29px] flex items-center justify-center gap-1 rounded-xl bg-[#A7F3DE] text-[12px] font-bold text-black">
    <span>🎉</span>
    <span>The Category Leaderboard - Live Now</span>
  </h1>
</div>
      <main className=" bg-white">
        <HeroSection />
         <AwardsSection />
         <DrivingSection></DrivingSection>
         <FeaturedWorkSection></FeaturedWorkSection>
          <ServicesSection></ServicesSection>
        <AgencyBehindSection></AgencyBehindSection> 
        <LegacySection></LegacySection>
        <WhatsNewSection></WhatsNewSection>
        <Footer></Footer>
      </main>
    </>
  );
}