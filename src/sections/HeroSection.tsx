import Image from "next/image";

export default function HeroSection() {
  return (
    <section id="hero-section" className="min-h-screen px-3 py-3 text-white">
      <div className="relative mx-auto min-h-[calc(100vh-24px)] max-w-[430px] overflow-hidden rounded-[24px] bg-black">
        <Image
          src="/hero.jpg"
          alt="Hero background"
          fill
          priority
          className="scale-110 object-cover object-center blur-[6px]"
        />

        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/35" />

        <div className="relative z-10 flex min-h-[calc(100vh-24px)] flex-col justify-center px-5 pb-8 pt-24">
          <div className="mt-10 text-center">
            <p className="mx-auto max-w-[260px] text-[13px] font-extrabold uppercase leading-[0.95] tracking-[-0.05em] text-white drop-shadow-md">
              #1 Most Recommended
              <br />
              Content Marketing Agency
            </p>
          </div>

          <div className="mt-7 text-center">
            <h1 className="text-[clamp(2rem,17vw,5.4rem)] font-black leading-[0.95] tracking-[-0.095em] text-white drop-shadow-xl">
              We Create
              <br />
              Category
              <br />
              Leaders
            </h1>

            <p className="mt-8 text-[19px] font-bold leading-none tracking-[-0.06em] text-white drop-shadow-lg">
              on every searchable platform
            </p>
          </div>

          <div className="flex-1" />

          <div className="pb-3 text-center">
            <p className="text-[16px] font-extrabold leading-[1.05] tracking-[-0.06em] text-white drop-shadow-lg">
              4 Global Offices serving
              <br />
              UK, USA (New York) & EU
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}