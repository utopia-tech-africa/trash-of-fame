"use client";

import { NavPattern } from "@/assets/images";
import ComponentLayout from "../component-layout";
import { useState } from "react";
import { X } from "lucide-react";

const navLeft = [
  { label: "About", href: "#about" },
  { label: "Media", href: "#media" },
];

const navRight = [
  { label: "Volunteer", href: "#volunteer" },
  { label: "Support us", href: "#support" },
  { label: "Contact us", href: "#contact" },
];

export const Navbar = () => {
  // work on later
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const allMobileNavItems = [
    ...navLeft,
    ...navRight.filter((item) => item.label !== "Volunteer"),
  ];

  return (
    <>
      <nav
        className="sticky top-0 w-full z-50 bg-[#110B0B] text-white border-b border-[#402F1D]"
        style={{ backgroundImage: `url(${NavPattern.src})` }}
      >
        <ComponentLayout>
          {/* desktop */}
          <div className="hidden md:grid md:grid-cols-3 items-center w-full">
            <div className="flex">
              {navLeft.map((item, i) => {
                const isMedia = i === 1;
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className={`px-6 py-5 ${
                      isMedia
                        ? "border-x border-[#402F1D] hover:bg-white/10 transition-colors ease-in duration-300"
                        : "hover:bg-white/10 transition-colors ease-in duration-300"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>

            <div className="text-center font-semibold tracking-wide px-6 py-5">
              Trash of Fame
            </div>

            <div className="flex justify-end">
              {navRight.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-6 py-5 border-l border-[#402F1D] hover:bg-white/10 transition-colors ease-in duration-300 text-nowrap"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          {/* mobile */}
          <div className="md:hidden flex items-center justify-between py-3">
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="flex items-center gap-2 text-white"
              aria-label="Menu"
            >
              <span className="text-sm font-medium">Menu</span>
            </button>

            <div className="tracking-wide text-base">Trash of Fame</div>

            <a
              href="#volunteer"
              className="text-sm font-medium text-white hover:bg-white/10 transition-colors ease-in duration-300text-nowrap"
            >
              Volunteer
            </a>
          </div>
        </ComponentLayout>
      </nav>
    </>
  );
};
