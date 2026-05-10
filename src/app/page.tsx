
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
   <div className="bg-white p-2 ">
  <h1 className="text-center border rounded-xl  text-black bg-teal-300 ">
    The Category Leaderboard - LIVE NOW
  </h1>

  {/* <Header /> */}
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