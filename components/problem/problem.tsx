"use client";

import { useState } from "react";
import Image from "next/image";
import { ProblemImg } from "@/assets/images";
import { Volume2, VolumeX } from "lucide-react";
import { ProblemPattern } from "@/assets/svg";

const videos = [
  {
    type: "youtube",
    title: "Ameyaw TV",
    embed:
      "https://www.youtube.com/embed/71HhLmDwVTc?autoplay=1&mute=1&loop=1&playlist=71HhLmDwVTc&controls=0&modestbranding=1&rel=0",
    link: "https://youtu.be/71HhLmDwVTc?si=mcLXC9RAHKK0MKd6",
  },
  {
    type: "youtube",
    title: "3Music TV x Pluzz 89.9FM",
    embed:
      "https://www.youtube.com/embed/Mzjya_UKb3I?autoplay=1&mute=1&loop=1&playlist=Mzjya_UKb3I&controls=0&modestbranding=1&rel=0",
    link: "https://youtu.be/Mzjya_UKb3I?si=vjk8VdvYQTLm3ii2",
  },
  {
    type: "video",
    title: "Eyie Ntoma - Upcycling Workshop",
    src: "https://res.cloudinary.com/dan9camhs/video/upload/v1776864065/Eyie_Ntoma_wasn_t_just_a_pop-up_it_was_a_whole_vibe_with_a_mission._In_a_secondhand_clothing_warehouse_in_Kumasi_Trash_of_Fame_prjct.kumasi_and_brvysapparel_linked_up_with_the_youth_to_tackle_f_riwxkw.mp4",
  },
];

export const Problem = () => {
  const [mutedVideos, setMutedVideos] = useState<Record<number, boolean>>({
    0: true,
    1: true,
    2: true,
  });

  const [hovered, setHovered] = useState<number | null>(null);

  const toggleMute = (index: number) => {
    setMutedVideos((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <section className="text-white flex min-h-[95vh] bg-[#16100A]">
      <div className="w-full flex flex-col lg:flex-row gap-2 md:gap-6 lg:gap-8 items-stretch">
        <div className="w-full lg:w-[30%] flex items-start overflow-hidden pl-4 md:pl-10 lg:pl-15 xl:pl-20 sticky top-[44px] z-50 lg:static bg-[#16100A]">
          <div className="absolute inset-0 -left-10 -top-10 z-0 pointer-events-none">
            <ProblemPattern className="w-full h-full" />
          </div>

          <h1 className="relative mx-auto md:mx-0 text-center md:text-start z-10 pt-6 md:py-11 lg:pt-12.25 text-2xl lg:text-[32px] font-bold uppercase leading-[1.15] mb-3 max-w-105">
            See the Problem. <br /> Watch the Solution Begin
          </h1>
        </div>

        <div className="w-full lg:w-[70%] relative lg:block lg:h-[95vh]">
          {/* IMAGE CARD */}
          <div
            onMouseEnter={() => setHovered(99)}
            onMouseLeave={() => setHovered(null)}
            className={`sticky top-[80px] lg:top-0 h-[60vh] lg:h-full w-full z-10 border border-[#654829] overflow-hidden transition-all duration-700 ease-in-out
            ${
              hovered === 99
                ? "lg:w-[50%]"
                : hovered !== null
                  ? "lg:w-[48%] lg:blur-sm"
                  : "lg:w-[25%]"
            }
            lg:absolute lg:right-[50%]`}
          >
            <Image
              src={ProblemImg}
              alt="The Waste Crisis"
              fill
              className="object-cover"
            />

            <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/80" />

            <p className="absolute bottom-5 left-5 font-semibold z-20">
              ● The Waste Crisis
            </p>
          </div>

          {/* STACKED VIDEOS */}
          {videos.map((video, index) => {
            const zClasses = [
              "z-[20] lg:z-[30]",
              "z-[30] lg:z-[29]",
              "z-[40] lg:z-[28]"
            ];
            const topClasses = [
              "top-[100px] lg:top-0",
              "top-[120px] lg:top-0",
              "top-[140px] lg:top-0"
            ];
            const rightClasses = [
              "lg:right-[0%]",
              "lg:right-[9%]",
              "lg:right-[18%]"
            ];

            return (
              <div
                key={index}
                onMouseEnter={() => setHovered(index)}
                onMouseLeave={() => setHovered(null)}
                className={`sticky lg:absolute h-[60vh] lg:h-full border border-[#654829] overflow-hidden transition-all duration-700 ease-in-out ${topClasses[index]} ${rightClasses[index]} ${zClasses[index]}
                ${
                  hovered === index
                    ? "lg:w-[74%]"
                    : hovered !== null
                      ? "lg:w-[50%]"
                      : "lg:w-[48%]"
                }`}
              >
                {video.type === "youtube" ? (
                  <iframe
                    src={`${video.embed}&mute=${mutedVideos[index] ? 1 : 0}`}
                    className={`w-full h-full object-cover pointer-events-none transition-all duration-700 ease-in-out ${
                      hovered !== null && hovered !== index
                        ? "lg:blur-md lg:scale-105 lg:brightness-75"
                        : "lg:blur-0 lg:scale-100"
                    }`}
                    allow="autoplay"
                  />
                ) : (
                  <video
                    src={video.src}
                    muted={mutedVideos[index]}
                    autoPlay
                    loop
                    playsInline
                    className={`w-full h-full object-cover transition-all duration-700 ease-in-out ${hovered !== null && hovered !== index ? "lg:blur-md lg:scale-105 lg:brightness-75" : "lg:blur-0 lg:scale-100"}`}
                  />
                )}

                <div className="absolute inset-0 bg-linear-to-b from-transparent to-black/70 pointer-events-none" />

                <a
                  href={video.link || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute bottom-5 left-5 md:left-8 font-semibold z-30 text-sm md:text-base hover:underline"
                >
                  ● {video.title}
                </a>

                <button
                  onClick={() => toggleMute(index)}
                  className="absolute top-4 right-4 bg-black/40 p-2 rounded-full hover:bg-black/60 z-30"
                >
                  {mutedVideos[index] ? (
                    <VolumeX size={18} />
                  ) : (
                    <Volume2 size={18} />
                  )}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
