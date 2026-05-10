"use client";

import { useRef, useState } from "react";

const posts = [
  {
    author: "Ray Saddiq",
    time: "3 mins",
    title: "Rise at Seven Appoints Hollie Lowell as Senior Operations Lead",
    image:
      "https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?q=80&w=900&auto=format&fit=crop",
  },
  {
    author: "Sarah Malik",
    time: "5 mins",
    title: "Rise at Seven announces new search-first strategy for global brands",
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?q=80&w=900&auto=format&fit=crop",
  },
  {
    author: "Tom Wilson",
    time: "7 mins",
    title: "How content, search and social are changing brand discovery",
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=900&auto=format&fit=crop",
  },
];

export default function WhatsNewSection() {
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  const handleScroll = () => {
    const el = scrollRef.current;
    if (!el) return;

    const maxScroll = el.scrollWidth - el.clientWidth;
    const currentProgress = maxScroll > 0 ? el.scrollLeft / maxScroll : 0;

    setProgress(currentProgress * 100);
  };

  return (
    <section className="bg-[#f4f4f1] px-[20px] py-[18px] text-black">
      <div className="mx-auto max-w-[430px] overflow-hidden">
        {/* Heading */}
        <h2 className="text-[62px] font-bold leading-[0.84] tracking-[-0.085em] text-black">
          What&apos;s
          <span className="ml-[12px] inline-flex translate-y-[-10px] overflow-hidden rounded-[7px] align-middle">
            <img
              src="https://images.unsplash.com/photo-1519608487953-e999c86e7455?q=80&w=300&auto=format&fit=crop"
              alt="What's new"
              className="h-[52px] w-[54px] object-cover"
            />
          </span>
          <br />
          New
        </h2>

        {/* Horizontal Scroll Cards */}
        <div
          ref={scrollRef}
          onScroll={handleScroll}
          className="hide-scrollbar mt-[22px] flex snap-x snap-mandatory gap-[14px] overflow-x-auto scroll-smooth pr-[16px]"
        >
          {posts.map((post, index) => (
            <article
              key={index}
              className="min-w-[303px] snap-start"
            >
              {/* Image */}
              <div className="h-[302px] w-full overflow-hidden rounded-[12px] bg-neutral-300">
                <img
                  src={post.image}
                  alt={post.title}
                  className="h-full w-full object-cover"
                />
              </div>

              {/* Meta */}
              <div className="mt-[25px] flex items-center gap-[8px]">
                <div className="flex h-[24px] items-center gap-[5px] rounded-full bg-white px-[7px]">
                  <img
                    src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=100&auto=format&fit=crop"
                    alt={post.author}
                    className="h-[17px] w-[17px] rounded-full object-cover"
                  />
                  <span className="text-[13px] font-semibold leading-none tracking-[-0.05em] text-black/65">
                    {post.author}
                  </span>
                </div>

                <div className="flex h-[24px] items-center gap-[5px] rounded-full bg-white px-[9px]">
                  <span className="text-[13px] leading-none text-black/55">
                    ⏱
                  </span>
                  <span className="text-[13px] font-semibold leading-none tracking-[-0.05em] text-black/65">
                    {post.time}
                  </span>
                </div>
              </div>

              {/* Title */}
              <h3 className="mt-[17px] text-[24px] font-bold leading-[0.95] tracking-[-0.075em] text-black">
                {post.title}
              </h3>
            </article>
          ))}
        </div>

        {/* Dynamic Progress Bar */}
        <div className="mt-[58px] h-[4px] w-full overflow-hidden rounded-full bg-black/10">
          <div
            className="h-full rounded-full bg-black transition-all duration-200"
            style={{ width: `${Math.max(progress, 33)}%` }}
          />
        </div>

        {/* Button */}
        <a
          href="#"
          className="mt-[18px] flex h-[44px] w-full items-center justify-center rounded-full bg-white text-[15px] font-semibold tracking-[-0.05em] text-black"
        >
          Explore More Thoughts <span className="ml-2">↗</span>
        </a>
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