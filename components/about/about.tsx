"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AboutPattern } from "@/assets/svg";
import { GlobeImg } from "@/assets/images";
import ComponentLayout from "../component-layout";
import { AboutVideo } from "./about-video";

export const About = () => {
  const [offset, setOffset] = useState(0);

  const targetOffset = useRef(0);
  const lastY = useRef(0);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const delta = e.clientY - lastY.current;

      targetOffset.current += delta > 0 ? 6 : -6;

      if (targetOffset.current > 30) targetOffset.current = 30;
      if (targetOffset.current < -30) targetOffset.current = -30;

      lastY.current = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    let frame: number;

    const animate = () => {
      setOffset((prev) => {
        const diff = targetOffset.current - prev;
        return prev + diff * 0.08;
      });

      frame = requestAnimationFrame(animate);
    };

    animate();
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <section className="relative w-full bg-[#110B0B] overflow-hidden py-16 sm:py-24 md:py-32">
      <div className="absolute right-[-10%] top-0 h-full w-full opacity-60 pointer-events-none z-0">
        <AboutPattern className="w-full h-full text-[#3A2A1A]" />
      </div>

      <ComponentLayout className="relative">
        <div className="relative max-w-275">
          <h1 className="relative z-20 text-white font-extrabold leading-[1.1] sm:leading-[0.95] tracking-[-0.5px] sm:tracking-[-1px]  text-3xl sm:text-4xl md:text-6xl lg:text-[98px]">
            This Earth Day,
            <br />
            we&apos;re taking a stand,
            <br />
            one stitch at a time
          </h1>

          <div
            className="absolute right-[5%] sm:right-[14%] -top-6 sm:-top-8 md:-top-15 w-26.75 h-27 md:h-55.75 md:w-55.75 aspect-square transition-transform duration-75 ease-out z-10"
            style={{
              transform: `translateY(${offset}px)`,
            }}
          >
            <Image
              src={GlobeImg}
              alt="globe"
              fill
              className="object-contain"
              priority
            />
          </div>

          <p className="relative z-20 mt-6 sm:mt-8 text-[#B3B3B3] max-w-196 text-sm sm:text-base md:text-[17px] leading-relaxed sm:leading-[1.6]">
            The world’s largest handbag is being built in Ghana. But it’s not
            just about records—it’s about reclaiming our future from waste. Made
            entirely of discarded textile waste , this project is a symbol of
            African resilience, creativity, and purpose.
          </p>
        </div>
      </ComponentLayout>
      <div className="relative w-full mt-4 md:mt-8 z-10">
        <AboutVideo />
      </div>
    </section>
  );
};
