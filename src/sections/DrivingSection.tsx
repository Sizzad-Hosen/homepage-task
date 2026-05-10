import Image from "next/image";
import team from "../../public/team.jpg";
export default function DrivingSection() {
  return (
    <section className="bg-[#f4f4f1] px-6 pb-12 pt-8 text-black">
      <div className="mx-auto max-w-7xl">
        {/* Main Content */}
        <div className="mt-6">
          <h2 className="text-[clamp(3rem,15vw,6.5rem)] font-black leading-[0.9] tracking-[-0.09em] text-black">
            Driving
            <br />
            Demand &
            <br />
            Discovery
            <span className="ml-3 inline-flex translate-y-1 overflow-hidden rounded-lg align-middle">
              <Image
                src={team}
                alt="Team"
                width={52}
                height={90}
                className="h-[55px] w-[52px] rounded-lg object-top sm:h-[55px]"
              />
            </span>
          </h2>

          <p className="mt-4 max-w-[340px] text-[18px] font-bold leading-[1.08] tracking-[-0.06em] text-black sm:max-w-xl sm:text-[24px] lg:max-w-2xl">
            A global team of search-first content marketers engineering semantic
            relevancy & category signals for both the internet and people
          </p>

          {/* Buttons */}
          <div className="mt-5 flex flex-col gap-3 sm:max-w-[360px]">
            <a
              href="#"
              className="flex h-12 items-center justify-center rounded-full bg-white px-6 text-[15px] font-bold tracking-[-0.04em] text-black"
            >
              Our Story <span className="ml-2">↗</span>
            </a>

            <a
              href="#"
              className="flex h-12 items-center justify-center rounded-full bg-transparent px-6 text-[15px] font-bold tracking-[-0.04em] text-black"
            >
              Our Services <span className="ml-2">↗</span>
            </a>
          </div>

          {/* Bottom Black Block */}
          
        </div>
      </div>
    </section>
  );
}