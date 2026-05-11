import Image from "next/image";
import logo from "../../public/logo.png"
export default function HeroSection() {
  return (
    <section id="hero-section" className="min-h-screen bg-white px-3 py-3 text-white">
      <div className="relative mx-auto min-h-[calc(100vh-24px)] max-w-[430px] overflow-hidden rounded-[24px] bg-black">
        <Image
          src="/hero.jpg"
          alt="Hero background"
          fill
          priority
          className="scale-110 object-cover object-center blur-[6px]"
        />

        <div className="absolute inset-0 bg-[#597993]/45" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-black/5 to-black/25" />

        <div className="relative z-10 flex min-h-[calc(100vh-24px)] flex-col items-center px-5 pb-8 pt-[185px]">
          <p className="text-center text-[12px] font-extrabold uppercase leading-[0.95] tracking-[-0.06em] text-white drop-shadow-md">
            #1 Most Recommended
            <br />
            Content Marketing Agency
          </p>
<div className="mt-3 flex w-full flex-nowrap items-center justify-center gap-3 overflow-hidden px-2 text-white">
 <Image
  src={logo}
  alt="laurel"
  width={28}
  height={28}
  className="h-7 w-7 invert"
/>
  <span className="shrink-0 text-[7px] font-black leading-none">
    GLOBAL<br />SEARCH<br />AWARDS
  </span>

  <span className="shrink-0 text-[8px] font-black leading-none">
    The Drum
  </span>

  <span className="shrink-0 text-[7px] font-black leading-none">
    UK Social<br />Media Awards
  </span>

  <Image
  src={logo}
  alt="laurel"
  width={28}
  height={28}
  className="h-7 w-7 invert scale-x-[-1]"
/>
</div>
<h1 className="mt-[68px] text-center text-[clamp(58px,17vw,74px)] font-black leading-[0.82] tracking-[-0.085em] text-white drop-shadow-xl">
  We Create
  <br />

  <span className="inline-flex items-center justify-center gap-3 whitespace-nowrap leading-[0.82]">
    <span>Category</span>

    <Image
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpJLBzdpD-avSdNH93VbY9h4QRZkbJrA3UQ_R50NndlAaX7ntrEhb9&usqp=CAE&s"
      alt="Category Icon"
      width={44}
      height={44}
      className="h-[44px] w-[44px] rounded-[10px] object-cover"
    />
  </span>

  <br />
  Leaders
</h1>

          <p className="mt-[18px] text-center text-[18px] font-extrabold leading-none tracking-[-0.065em] text-white drop-shadow-lg">
            on every searchable platform
          </p>

          <div className="flex-1" />

          <p className="pb-3 text-center text-[15px] font-extrabold leading-[1.08] tracking-[-0.055em] text-white drop-shadow-lg">
            4 Global Offices serving
            <br />
            UK, USA (New York) &amp; EU
          </p>
        </div>
      </div>
    </section>
  );
}