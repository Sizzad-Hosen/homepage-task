
import AgencyBehindSection from "@/sections/AgencyBehindSection";
import AwardsSection from "@/sections/AwardsSection";
import DrivingSection from "@/sections/DrivingSection";
import FeaturedWorkSection from "@/sections/FeaturedWorkSection";
import HeroSection from "@/sections/HeroSection";
import ServicesSection from "@/sections/ServicesSection";


export default function Home() {
  return (
    <>
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
      </main>
    </>
  );
}