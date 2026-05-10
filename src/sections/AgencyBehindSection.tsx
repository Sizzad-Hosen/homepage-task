const items = [
  {
    text: "Chasing Category Growth",
    image:
      "https://images.unsplash.com/photo-1556761175-4b46a572b786?q=80&w=300&auto=format&fit=crop",
  },
  {
    text: "Creating Search Demand",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=300&auto=format&fit=crop",
  },
  {
    text: "Building Brand Discovery",
    image:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=300&auto=format&fit=crop",
  },
];

export default function ChasingTextSection() {
  return (
    <section className="overflow-hidden bg-[#f4f4f1] py-[18px] text-black">
      <div className="relative overflow-hidden">
        <div className="flex w-max animate-chasing-marquee items-center">
          {[...items, ...items, ...items].map((item, index) => (
            <div
              key={`${item.text}-${index}`}
              className="flex items-center gap-[14px] pr-[28px]"
            >
              <div className="h-[68px] w-[66px] shrink-0 overflow-hidden rounded-[9px] bg-neutral-300 sm:h-[82px] sm:w-[56px]">
                <img
                  src={item.image}
                  alt={item.text}
                  className="h-full w-full object-cover"
                />
              </div>

              <h2 className="whitespace-nowrap text-[72px] font-bold leading-[0.82] tracking-[-0.085em] text-black sm:text-[96px] lg:text-[128px]">
                {item.text}
              </h2>
            </div>
          ))}
        </div>
      </div>

      <style>{`
        @keyframes chasing-marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }

        .animate-chasing-marquee {
          animation: chasing-marquee 28s linear infinite;
        }
      `}</style>
    </section>
  );
}