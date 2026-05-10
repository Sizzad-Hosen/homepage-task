"use client";

import { useEffect, useRef, useState } from "react";
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
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Careers",
    href: "#careers",
  },
  {
    label: "Blog & Resources",
    children: ["Blog", "Insights", "Webinars", "Reports"],
  },
  {
    label: "Webinar",
    href: "#webinar",
  },
  {
    label: "Get in touch",
    href: "#contact",
  },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isHeroDocked, setIsHeroDocked] = useState(true);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);

  const lastScrollY = useRef(0);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      /*
        When user is at Hero top,
        navbar stays inside hero card position.
      */
      const reachedHeroTop = currentScrollY <= 8;

      setIsHeroDocked(reachedHeroTop);

      /*
        Menu open থাকলে navbar সবসময় visible থাকবে
      */
      if (isOpen) {
        setIsNavbarVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      /*
        Hero top এ থাকলে navbar সবসময় show করবে
      */
      if (reachedHeroTop) {
        setIsNavbarVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      const scrollingDown = currentScrollY > lastScrollY.current;
      const scrollingUp = currentScrollY < lastScrollY.current;

      /*
        Scroll down করলে navbar hide হবে
      */
      if (scrollingDown && currentScrollY > 20) {
        setIsNavbarVisible(false);
        setIsOpen(false);
        setActiveMenu(null);
      }

      /*
        Scroll up করলে navbar show হবে
      */
      if (scrollingUp) {
        setIsNavbarVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen]);

  const closeMenu = () => {
    setIsOpen(false);
    setActiveMenu(null);
  };

  const toggleMainMenu = () => {
    setIsOpen((prev) => {
      if (prev) {
        setActiveMenu(null);
      }

      return !prev;
    });
  };

  const toggleSubMenu = (label: string) => {
    setActiveMenu((prev) => (prev === label ? null : label));
  };

  return (
    <>
      {/* ONLY ONE HEADER */}
      <header
        className={`
          z-[999] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden
          ${
            isOpen
              ? "fixed left-0 top-0 w-full bg-black px-5 py-5 text-white"
              : isHeroDocked
                ? "fixed left-1/2 top-[34px] w-[calc(100%-24px)] max-w-[430px] -translate-x-1/2 bg-transparent px-4 py-5 text-white"
                : "fixed left-0 top-0 w-full bg-[#f4f4f1] px-3 py-3 text-black shadow-sm"
          }
          ${
            isNavbarVisible || isOpen || isHeroDocked
              ? "translate-y-0"
              : "-translate-y-full"
          }
        `}
      >
        <div className="mx-auto flex max-w-[430px] items-center justify-between">
          <a
            href="/"
            onClick={closeMenu}
            className="text-[22px] font-semibold leading-none tracking-[-0.06em] text-current"
          >
            Rise at Seven
            <span className="align-top text-[9px]">®</span>
          </a>

          <button
            type="button"
            onClick={toggleMainMenu}
            className="flex h-10 w-10 items-center justify-center text-current"
            aria-label={isOpen ? "Close menu" : "Open menu"}
          >
            {isOpen ? (
              <X size={27} strokeWidth={2} />
            ) : (
              <Menu size={27} strokeWidth={2} />
            )}
          </button>
        </div>
      </header>

      {/* MOBILE MENU OVERLAY - NO SECOND HEADER */}
      {isOpen && (
        <div className="fixed inset-0 z-[998] overflow-y-auto bg-black px-5 pb-10 pt-[96px] text-white md:hidden">
          <nav>
            <ul>
              {menuItems.map((item) => {
                const hasChildren = item.children && item.children.length > 0;
                const isActive = activeMenu === item.label;

                return (
                  <li key={item.label} className="border-b border-white/15">
                    {hasChildren ? (
                      <>
                        <button
                          type="button"
                          onClick={() => toggleSubMenu(item.label)}
                          className="flex w-full items-center justify-between py-5 text-left"
                          aria-expanded={isActive}
                        >
                          <span className="text-[34px] font-black uppercase leading-none tracking-[-0.08em]">
                            {item.label}
                          </span>

                          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30">
                            {isActive ? (
                              <Minus size={18} strokeWidth={2} />
                            ) : (
                              <Plus size={18} strokeWidth={2} />
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
                                    onClick={closeMenu}
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
                        onClick={closeMenu}
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
    </>
  );
}