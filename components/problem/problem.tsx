"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { ProblemImg } from "@/assets/images";
import { Volume2, VolumeX } from "lucide-react";
import { ProblemPattern } from "@/assets/svg";
import ComponentLayout from "../component-layout";

export const Problem = () => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const [muted, setMuted] = useState(true);
  const [hover, setHover] = useState<"image" | "video" | null>(null);

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setMuted(videoRef.current.muted);
  };

  return (
    <section className="text-white min-h-screen">
      <ComponentLayout className="flex">
        <div className="w-full flex flex-col md:flex-row gap-8 md:gap-4 lg:gap-8 items-stretch">
          <div className="w-full md:w-[35%] lg:w-[30%] relative flex items-start overflow-hidden py-4 md:py-0">
            <div className="absolute inset-0 -left-10 -top-10 z-0 pointer-events-none">
              <ProblemPattern className="w-full h-full" />
            </div>
            <h1 className="relative mx-auto md:mx-0 text-center md:text-start z-10 text-2xl md:text-3xl lg:text-[32px] font-bold uppercase leading-[1.15] mb-3 max-w-105">
              See the Problem. <br /> Watch the Solution Begin
            </h1>
          </div>

          <div className="w-full md:w-[65%] lg:w-[70%] relative flex flex-col gap-12 md:gap-0 md:block md:h-155 md:overflow-hidden pb-[10vh] md:pb-0">
            <div
              onMouseEnter={() => setHover("image")}
              onMouseLeave={() => setHover(null)}
              className={`order-2 sticky top-24 md:top-0 h-[60vh] md:h-full w-full z-20 md:z-10 border border-[#654829] overflow-hidden md:absolute md:right-[40%] transition-all duration-700 ease-in-out
              ${
                hover === "image"
                  ? "md:w-[60%]"
                  : hover === "video"
                    ? "md:w-[35%]"
                    : "md:w-[45%]"
              }
            `}
            >
              <Image
                src={ProblemImg}
                alt="The Waste Crisis"
                fill
                className={`object-cover transition-transform duration-700 ease-in-out ${hover === "image" ? "scale-105" : "scale-100"}`}
              />
              <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/80 pointer-events-none" />
              <p className="absolute bottom-5 left-5 font-semibold z-20 pointer-events-none whitespace-nowrap drop-shadow-md">
                ● The Waste Crisis
              </p>
            </div>

            <div
              onMouseEnter={() => setHover("video")}
              onMouseLeave={() => setHover(null)}
              className={`order-1 sticky top-24 md:top-0 h-[60vh] md:h-full w-full z-10 md:z-20 border border-[#654829] overflow-hidden md:absolute md:right-0 transition-all duration-700 ease-in-out
              ${hover === "video" ? "md:w-[70%]" : "md:w-[60%]"}
            `}
            >
              <video
                ref={videoRef}
                src="https://res.cloudinary.com/dan9camhs/video/upload/v1776864065/Eyie_Ntoma_wasn_t_just_a_pop-up_it_was_a_whole_vibe_with_a_mission._In_a_secondhand_clothing_warehouse_in_Kumasi_Trash_of_Fame_prjct.kumasi_and_brvysapparel_linked_up_with_the_youth_to_tackle_f_riwxkw.mp4"
                muted={muted}
                autoPlay
                loop
                playsInline
                className={`w-full h-full object-cover transition-all duration-700 ease-in-out
                ${hover === "image" ? "md:blur-md md:scale-105 md:brightness-75" : "scale-100"}
              `}
              />
              <p className="absolute bottom-5 left-5 md:left-10 font-semibold z-20 pointer-events-none whitespace-nowrap text-sm md:text-base drop-shadow-md">
                ● Eyie Ntoma - Upcycling Workshop
              </p>
              <button
                onClick={toggleMute}
                className="absolute top-4 right-4 bg-black/40 p-2 rounded-full hover:bg-black/60 z-30"
              >
                {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
              </button>
            </div>
          </div>
        </div>
      </ComponentLayout>
    </section>
  );
};
