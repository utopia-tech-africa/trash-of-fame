import Image from "next/image";
import {
  // FaFacebookF,
  FaInstagram,
  // FaLinkedinIn,
  // FaYoutube,
} from "react-icons/fa";
// import { FaXTwitter } from "react-icons/fa6";
import { TOFImg } from "@/assets/images";

const footerItems = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Media", href: "#media" },
  { label: "Volunteer", href: "#contact" },
  { label: "Support", href: "#contact" },
  { label: "Contact us", href: "#contact" },
];

const socialLinks = [
  // { label: "Facebook", href: "#", Icon: FaFacebookF },
  { label: "Instagram", href: "#", Icon: FaInstagram },
  // { label: "X", href: "#", Icon: FaXTwitter },
  // { label: "LinkedIn", href: "#", Icon: FaLinkedinIn },
  // { label: "YouTube", href: "#", Icon: FaYoutube },
];

export const Footer = () => {
  return (
    <footer className="w-full border-t border-[#3A2A1A] flex flex-col md:flex-row">
      {/* left */}
      <div className="w-full md:flex-1 order-2 md:order-1 relative flex items-center justify-center md:justify-start md:pl-10 overflow-hidden py-10 md:py-0">
        <div className="absolute bottom-[-40%] left-1/2 -translate-x-1/2 md:left-[-20%] md:translate-x-0 w-125 h-125 md:w-175 md:h-175 bg-[radial-gradient(circle,rgba(120,72,28,0.35)_0%,rgba(15,10,6,0)_70%)] pointer-events-none" />

        <Image
          src={TOFImg}
          alt="Trash of Fame Logo"
          width={700}
          height={420}
          priority
          className="object-contain relative z-10 w-[70%] max-w-105 md:max-w-150"
        />
      </div>

      {/* right */}
      <div className="w-full md:w-121.75 order-1 md:order-2 border-t md:border-t-0 md:border-l border-[#3A2A1A] flex flex-col items-center md:items-stretch">
        {footerItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className="relative overflow-hidden px-8 text-white font-semibold text-center py-3 md:py-4 border-b border-[#3A2A1A] group text-sm md:text-base w-full"
          >
            <span className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out" />
            <span className="relative z-10">{item.label}</span>
          </a>
        ))}

        <div className="flex items-center justify-center gap-5 md:gap-6 py-4 md:py-5 w-full">
          {socialLinks.map(({ label, href, Icon }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              className="text-neutral-100"
            >
              <Icon className="h-4 w-4 md:h-5 md:w-5" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};
