"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X, Plus, Minus } from "lucide-react";

type MenuItem = {
  label: string;
  href?: string;
  children?: string[];
};

const menuItems: MenuItem[] = [
  {
    label: "Services",
    children: [
      "Digital PR",
      "Organic Social & Content",
      "Search & Growth Strategy",
      "Content Experience",
      "Data & Insights",
      "Onsite SEO",
    ],
  },
  {
    label: "Industries",
    children: ["Retail", "Finance", "Travel", "Beauty", "B2B"],
  },
  {
    label: "International",
    children: ["United Kingdom", "United States", "Europe"],
  },
  {
    label: "About",
    children: ["Our Story", "Team", "Awards", "Culture"],
  },
  { label: "Work", href: "#work" },
  { label: "Careers", href: "#careers" },
  {
    label: "Blog & Resources",
    children: ["Blog", "Insights", "Webinars", "Reports"],
  },
  { label: "Webinar", href: "#webinar" },
  { label: "Get in touch", href: "#contact" },
];

export default function HeroSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleCloseMenu = () => {
    setIsOpen(false);
    setActiveMenu(null);
  };

  const handleToggleMenu = (label: string) => {
    setActiveMenu((prev) => (prev === label ? null : label));
  };

  return (
    <section className="min-h-screen  px-3 py-3 text-white">
      <div className="relative mx-auto min-h-[calc(100vh-24px)] max-w-[430px] overflow-hidden rounded-[24px] bg-black">
        {/* Background Image */}
        <Image
          src="/hero.jpg"
          alt="Hero background"
          fill
          priority
          className="scale-110 object-cover object-center blur-[6px]"
        />

        {/* Dark + Soft Overlay */}
        <div className="absolute inset-0 bg-black/25" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/10 to-black/35" />

        {/* Header inside Hero */}
        <header className="absolute left-0 top-0 z-30 w-full px-4 py-5">
          <div className="flex items-center justify-between">
            <a
              href="/"
              className="text-[22px] font-semibold leading-none tracking-[-0.06em] text-white drop-shadow-lg"
            >
              Rise at Seven
              <span className="align-top text-[9px]">®</span>
            </a>

            <button
              onClick={() => setIsOpen(true)}
              className="flex h-10 w-10 items-center justify-center text-white"
              aria-label="Open menu"
            >
              <Menu size={26} strokeWidth={2} />
            </button>
          </div>
        </header>

        {/* Main Content */}
        <div className="relative z-10 flex min-h-[calc(100vh-24px)] flex-col justify-center px-5 pb-8 pt-24">
          {/* Award Text */}
          <div className="mt-10 text-center">
            <p className="mx-auto max-w-[260px] text-[13px] font-extrabold uppercase leading-[0.95] tracking-[-0.05em] text-white drop-shadow-md">
              #1 Most Recommended
              <br />
              Content Marketing Agency
            </p>

            {/* Award Logo Placeholder Row */}
            <div className="mt-4 flex items-center justify-center gap-3 text-white">
              <span className="text-[32px] leading-none">‹</span>

              <div className="flex h-7 w-12 items-center justify-center text-[7px] font-black uppercase leading-[0.8]">
                Global
                <br />
                Search
                <br />
                Awards
              </div>

              <div className="flex h-7 w-14 items-center justify-center border-t-[10px] border-white text-[8px] font-black uppercase">
                The Drum
              </div>

              <div className="flex h-7 w-14 items-center justify-center text-[7px] font-black uppercase leading-[0.8]">
                UK Social
                <br />
                Media Awards
              </div>

              <span className="text-[32px] leading-none">›</span>
            </div>
          </div>

          {/* Big Heading */}
          <div className="mt-7 text-center">
            <h1 className="text-[clamp(4rem,17vw,5.4rem)] font-black leading-[0.78] tracking-[-0.095em] text-white drop-shadow-xl">
              We Create
              <br />
              Category
              <br />
              Leaders
            </h1>

            <p className="mt-5 text-[19px] font-bold leading-none tracking-[-0.06em] text-white drop-shadow-lg">
              on every searchable platform
            </p>
          </div>

          <div className="flex-1" />

          {/* Bottom Text */}
          <div className="pb-3 text-center">
            <p className="text-[16px] font-extrabold leading-[1.05] tracking-[-0.06em] text-white drop-shadow-lg">
              4 Global Offices serving
              <br />
              UK, USA (New York) & EU
            </p>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isOpen && (
          <div className="fixed inset-0 z-50 overflow-y-auto bg-black px-5 py-5 text-white">
            <div className="flex items-center justify-between">
              <a
                href="/"
                onClick={handleCloseMenu}
                className="text-[24px] font-black leading-none tracking-[-0.08em]"
              >
                Rise at Seven
              </a>

              <button
                onClick={handleCloseMenu}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/30"
                aria-label="Close menu"
              >
                <X size={22} />
              </button>
            </div>

            <nav className="mt-12 pb-10">
              <ul>
                {menuItems.map((item) => {
                  const hasChildren = item.children && item.children.length > 0;
                  const isActive = activeMenu === item.label;

                  return (
                    <li key={item.label} className="border-b border-white/15">
                      {hasChildren ? (
                        <>
                          <button
                            onClick={() => handleToggleMenu(item.label)}
                            className="flex w-full items-center justify-between py-5 text-left"
                            aria-expanded={isActive}
                          >
                            <span className="text-[34px] font-black uppercase leading-none tracking-[-0.08em]">
                              {item.label}
                            </span>

                            <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30">
                              {isActive ? (
                                <Minus size={18} />
                              ) : (
                                <Plus size={18} />
                              )}
                            </span>
                          </button>

                          {isActive && (
                            <div className="pb-5">
                              <ul className="space-y-3">
                                {item.children?.map((child) => (
                                  <li key={child}>
                                    <a
                                      href="#"
                                      onClick={handleCloseMenu}
                                      className="block rounded-xl bg-white/5 px-4 py-3 text-[15px] font-semibold text-white/75"
                                    >
                                      {child}
                                    </a>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </>
                      ) : (
                        <a
                          href={item.href || "#"}
                          onClick={handleCloseMenu}
                          className="block py-5 text-[34px] font-black uppercase leading-none tracking-[-0.08em]"
                        >
                          {item.label}
                        </a>
                      )}
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        )}
      </div>
    </section>
  );
}