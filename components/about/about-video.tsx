"use client";

import { useRef, useState } from "react";
import ComponentLayout from "../component-layout";
import { Volume2, VolumeX } from "lucide-react";

const videoUrl =
  "https://res.cloudinary.com/dan9camhs/video/upload/v1776863902/TRASH_OF_FAME_4_2_1_r4fxax.mp4";

export const AboutVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const toggleMute = () => {
    if (!videoRef.current) return;

    videoRef.current.muted = !muted;
    setMuted((prev) => !prev);
  };

  return (
    <section>
      <ComponentLayout>
        <div className="relative border border-[#543F276B] p-2 rounded-[12px] bg-[#543F276B] w-full aspect-video max-h-[90vh] overflow-hidden">
          <video
            ref={videoRef}
            loop
            autoPlay
            muted={muted}
            playsInline
            src={videoUrl}
            className="w-full h-full object-cover"
          />

          <button
            onClick={toggleMute}
            className="absolute top-4 right-4 bg-black/60 p-2 cursor-pointer rounded-full text-white hover:bg-black/80 transition"
          >
            {muted ? (
              <VolumeX className="w-5 h-5" />
            ) : (
              <Volume2 className="w-5 h-5" />
            )}
          </button>
        </div>
      </ComponentLayout>
    </section>
  );
};
