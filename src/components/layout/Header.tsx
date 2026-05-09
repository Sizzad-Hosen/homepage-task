"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import MobileMenu from "./MobileMenu";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <header className="sticky top-0 z-40 w-full bg-black text-white">
        <div className="flex h-[72px] items-center justify-between px-5">
          <a
            href="#"
            className="text-[18px] font-black uppercase leading-none tracking-[-0.06em]"
            aria-label="Rise at Seven home"
          >
            <span className="block">RISE</span>
            <span className="block">AT SEVEN</span>
          </a>

          <button
            type="button"
            onClick={() => setIsMenuOpen(true)}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-white"
            aria-label="Open menu"
            aria-expanded={isMenuOpen}
          >
            <Menu size={24} strokeWidth={2.5} />
          </button>
        </div>
      </header>

      <MobileMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
    </>
  );
}