const logos = [
  { name: "SharkNinja", style: "shark" },
  { name: "Capital One", style: "capital" },
  { name: "PrettyLittleThing", style: "plt" },
  { name: "MyProtein", style: "myprotein" },
  { name: "Boohoo", style: "boohoo" },
  { name: "Gymshark", style: "gymshark" },
];

export default function AwardsSection() {
  return (
    <section className="bg-[#f4f4f1] px-4 py-7 text-black">
      <div className="mx-auto max-w-7xl">
        {/* Small heading */}
        <p className="text-[14px] font-black leading-none tracking-[-0.06em]">
          The agency behind ...
        </p>

        {/* Moving Logo Area */}
        <div className="relative mt-3 overflow-hidden py-8">
          {/* Left blur */}
          <div className="pointer-events-none absolute left-0 top-0 z-20 h-full w-24 bg-gradient-to-r from-[#f4f4f1] via-[#f4f4f1]/90 to-transparent" />

          {/* Right blur */}
          <div className="pointer-events-none absolute right-0 top-0 z-20 h-full w-24 bg-gradient-to-l from-[#f4f4f1] via-[#f4f4f1]/90 to-transparent" />

          <div className="flex w-max animate-awards-marquee items-center gap-16">
            {[...logos, ...logos, ...logos].map((logo, index) => (
              <div
                key={`${logo.name}-${index}`}
                className="flex min-w-[160px] items-center justify-center"
              >
                {logo.style === "shark" && (
                  <span className="text-[18px] font-black italic tracking-[-0.08em] text-black">
                    Shark<span className="ml-1 font-black not-italic">NINJA</span>
                  </span>
                )}

                {logo.style === "capital" && (
                  <span className="relative text-[18px] font-black italic tracking-[-0.08em] text-black">
                    Capital One
                    <span className="absolute -right-3 -top-1 h-[2px] w-9 -rotate-12 rounded-full bg-black" />
                  </span>
                )}

                {logo.style === "plt" && (
                  <span className="text-[17px] font-black tracking-[-0.08em] text-black">
                    PrettyLittleThing
                  </span>
                )}

                {logo.style === "myprotein" && (
                  <span className="text-[18px] font-black lowercase tracking-[-0.07em] text-black">
                    myprotein
                  </span>
                )}

                {logo.style === "boohoo" && (
                  <span className="text-[19px] font-black lowercase tracking-[-0.09em] text-black">
                    boohoo
                  </span>
                )}

                {logo.style === "gymshark" && (
                  <span className="text-[18px] font-black italic tracking-[-0.08em] text-black">
                    Gymshark
                  </span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        @keyframes awards-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-awards-marquee {
          animation: awards-marquee 35s linear infinite;
        }
      `}</style>
    </section>
  );
}