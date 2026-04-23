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
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const allMobileNavItems = [
    ...navLeft,
    ...navRight.filter((item) => item.label !== "Volunteer"),
  ];

  return (
    <>
      <nav
        className="sticky top-0 w-full z-50 text-white bg-[#110B0B] border-b border-[#402F1D]"
        style={{
          backgroundImage: `
      linear-gradient(rgba(17,11,11,0.95), rgba(17,11,11,0.9)),
      url(${NavPattern.src})
    `,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
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
                    className={`py-5 ${
                      isMedia
                        ? "border-x border-[#402F1D] hover:bg-white/10 transition-colors ease-in px-4.5 duration-300"
                        : "hover:bg-white/10 transition-colors ease-in duration-300 pr-4.5"
                    }`}
                  >
                    {item.label}
                  </a>
                );
              })}
            </div>

            <div className="text-center font-light tracking-wide px-6 py-5">
              Trash of Fame
            </div>

            <div className="flex justify-end">
              {navRight.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="px-4.5  py-5 border-l border-[#402F1D] hover:bg-white/10 transition-colors ease-in duration-300 text-nowrap"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>

          <div className="md:hidden grid grid-cols-3 w-full border-b border-[#402F1D]">
            {/* left */}
            <button
              onClick={() => setMobileMenuOpen(true)}
              className="text-sm font-medium text-left px-4 py-3 flex items-center border-r border-[#402F1D]"
            >
              Menu
            </button>

            <div className="text-sm text-center font-extralight px-5 py-3 flex items-center justify-center border-r border-[#402F1D] text-nowrap">
              Trash of Fame
            </div>

            <a
              href="#volunteer"
              className="text-sm font-medium text-right px-4 py-3 flex items-center justify-end"
            >
              Volunteer
            </a>
          </div>
        </ComponentLayout>
      </nav>

      {/* mobile*/}
      <div
        className={`md:hidden fixed left-0 top-0 w-full h-full z-50 transition-transform duration-500 ease-out ${
          mobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="w-full h-full bg-[#110B0B] border-b border-[#402F1D] flex flex-col">
          <div className="flex items-center justify-between px-6 py-4 border-b border-[#402F1D]">
            <span className="text-sm font-medium">Menu</span>

            <button
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <X className="text-white" />
            </button>
          </div>

          <div className="flex flex-col flex-1">
            {allMobileNavItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="relative overflow-hidden px-8 text-white text-center py-4 border-b border-[#402F1D] group text-sm"
              >
                <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
                <span className="relative z-10">{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
