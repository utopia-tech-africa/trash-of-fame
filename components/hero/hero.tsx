import { HeroImg } from "@/assets/images";
import Image from "next/image";
import ComponentLayout from "../component-layout";
import { Button } from "../ui/button";
import { ChevronsDown, ChevronsUp } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative w-full h-[95vh] overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={HeroImg}
          alt="Hero Image"
          fill
          className="object-cover"
          priority
        />
      </div>

      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(64, 47, 29, 0.5) 6.28%, rgba(64, 47, 29, 0) 13.17%, rgba(64, 47, 29, 0.4) 68.41%, rgba(64, 47, 29, 0.9) 88.18%)",
        }}
      />

      <ComponentLayout className="relative z-10 h-full flex flex-col justify-between items-center text-white">
        <div className="mt-6 tracking-[0.3em] text-sm">
          REDUCE&nbsp;&nbsp;REUSE&nbsp;&nbsp;RECYCLE
        </div>

        <div className="mb-12 flex flex-col items-center gap-4">
          <p className="font-semibold text-center text-xl md:[30px] lg:[32px]">
            Africa’s waste crisis is growing
          </p>

          <Button
            variant="outline"
            className="group border-[#654829] bg-transparent hover:bg-white/10 transition-colors ease-in duration-300 px-6 py-3 rounded-none flex items-center gap-3 cursor-pointer"
          >
            <span className="relative w-4 h-4 overflow-hidden text-white">
              <ChevronsUp className="w-5 h-5 absolute inset-0 rotate-180 transition-transform duration-300 group-hover:-translate-y-full" />
              <ChevronsUp className="w-5 h-5 absolute inset-0 rotate-180 translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
            </span>

            <a href="#contact" className="text-white font-semibold">
              Join the movement
            </a>

            <span className="relative w-4 h-4 overflow-hidden text-white">
              <ChevronsDown className="w-5 h-5 absolute inset-0 transition-transform duration-300 group-hover:-translate-y-full" />
              <ChevronsDown className="w-5 h-5 absolute inset-0 translate-y-full transition-transform duration-300 group-hover:translate-y-0" />
            </span>
          </Button>
        </div>
      </ComponentLayout>
    </section>
  );
};
