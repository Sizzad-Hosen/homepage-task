"use client";

import { useRef, useState } from "react";
import { legacyItems } from "@/data/legacy.data";

export default function LegacySection() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(33);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;

    const maxScroll = el.scrollWidth - el.clientWidth;
    const scrollPercent = maxScroll > 0 ? el.scrollLeft / maxScroll : 0;

    setProgress(33 + scrollPercent * 67);
  };

  return (
    <section className="bg-[#f4f4f1] px-[14px] py-[24px] text-black">
      <div className="mx-auto max-w-[420px] overflow-hidden">
        {/* Top Title */}
        <h2 className="text-center text-[17px] font-semibold leading-none tracking-[-0.06em]">
          Legacy In The Making
        </h2>

        {/* Horizontal Scroll Cards */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="hide-scrollbar mt-[16px] flex snap-x snap-mandatory gap-[14px] overflow-x-auto scroll-smooth pr-[14px]"
        >
          {legacyItems.map((item, index) => (
            <article
              key={index}
              className="min-w-full snap-start rounded-[15px] bg-black px-[28px] pb-[26px] pt-[27px] text-white"
            >
              {/* Image */}
              <div className="overflow-hidden rounded-[9px]">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-[199px] w-full object-cover"
                />
              </div>

              {/* Text */}
              <div className="mt-[14px] text-center">
                <h3 className="text-[30px] font-semibold leading-none tracking-[-0.085em] text-white">
                  {item.title}
                </h3>

                <p className="mx-auto mt-[16px] max-w-[285px] text-[16px] font-medium leading-[1.25] tracking-[-0.06em] text-white">
                  {item.description1}
                </p>

                <p className="mx-auto mt-[22px] max-w-[290px] text-[16px] font-medium leading-[1.25] tracking-[-0.06em] text-white">
                  {item.description2}
                </p>
              </div>
            </article>
          ))}
        </div>

        {/* Dynamic Progress Line */}
        <div className="mt-[11px] h-[4px] w-full overflow-hidden rounded-full bg-black/12">
          <div
            className="h-full rounded-full bg-black transition-all duration-200"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <style jsx>{`
        .hide-scrollbar {
          scrollbar-width: none;
          -ms-overflow-style: none;
        }

        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}