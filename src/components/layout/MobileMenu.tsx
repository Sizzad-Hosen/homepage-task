"use client";

import { useEffect, useState } from "react";
import { Minus, Plus, X } from "lucide-react";
import { mobileMenuItems } from "@/data/menu.data";

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setActiveMenu(null);
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed inset-0 z-50 bg-[#f4ff00] text-black transition-all duration-500 ease-in-out ${
        isOpen
          ? "translate-x-0 opacity-100"
          : "translate-x-full opacity-0 pointer-events-none"
      }`}
      aria-hidden={!isOpen}
    >
      <div className="flex min-h-screen flex-col px-5 py-5">
        <div className="flex items-center justify-between">
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
            onClick={onClose}
            className="flex h-11 w-11 items-center justify-center rounded-full border border-black"
            aria-label="Close menu"
          >
            <X size={24} strokeWidth={2.5} />
          </button>
        </div>

        <nav className="mt-12 flex-1" aria-label="Mobile navigation">
          <ul className="space-y-0 border-t border-black">
            {mobileMenuItems.map((item) => {
              const hasChildren = Boolean(item.children?.length);
              const isExpanded = activeMenu === item.label;

              return (
                <li key={item.label} className="border-b border-black">
                  {hasChildren ? (
                    <div>
                      <button
                        type="button"
                        onClick={() =>
                          setActiveMenu(isExpanded ? null : item.label)
                        }
                        className="flex w-full items-center justify-between py-5 text-left text-[28px] font-black uppercase leading-none tracking-[-0.06em]"
                        aria-expanded={isExpanded}
                      >
                        <span>{item.label}</span>
                        <span className="flex h-8 w-8 items-center justify-center">
                          {isExpanded ? (
                            <Minus size={24} strokeWidth={3} />
                          ) : (
                            <Plus size={24} strokeWidth={3} />
                          )}
                        </span>
                      </button>

                      <div
                        className={`grid transition-all duration-300 ease-in-out ${
                          isExpanded
                            ? "grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <ul className="overflow-hidden pb-4">
                          {item.children?.map((child) => (
                            <li key={child.label}>
                              <a
                                href={child.href}
                                className="block py-2 text-[15px] font-semibold uppercase tracking-[-0.02em]"
                                onClick={onClose}
                              >
                                {child.label}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      onClick={onClose}
                      className="block py-5 text-[28px] font-black uppercase leading-none tracking-[-0.06em]"
                    >
                      {item.label}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="pt-8">
          <a
            href="#"
            onClick={onClose}
            className="inline-flex w-full items-center justify-center rounded-full bg-black px-6 py-4 text-[14px] font-black uppercase tracking-[-0.02em] text-[#f4ff00]"
          >
            Start a project
          </a>

          <p className="mt-6 text-[12px] font-semibold uppercase leading-relaxed tracking-[-0.02em]">
            Search-first content marketing agency creating demand and discovery.
          </p>
        </div>
      </div>
    </div>
  );
}