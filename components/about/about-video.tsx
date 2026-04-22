"use client";

import { useRef, useState } from "react";
import ComponentLayout from "../component-layout";

const videoUrl =
  "https://res.cloudinary.com/dan9camhs/video/upload/v1776863902/TRASH_OF_FAME_4_2_1_r4fxax.mp4";

export const AboutVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [muted, setMuted] = useState(true);

  const handleVideoClick = () => {
    if (videoRef.current) {
      videoRef.current.muted = !muted;
      setMuted((prev) => !prev);
    }
  };

  return (
    <section>
      <ComponentLayout>
        <div className="border border-[#543F276B] p-2 rounded-[12px] bg-[#543F276B] w-full aspect-video max-h-[90vh] overflow-hidden">
          <video
            ref={videoRef}
            loop
            autoPlay
            muted={muted}
            playsInline
            src={videoUrl}
            onClick={handleVideoClick}
            className="w-full h-full object-cover"
          />
        </div>
      </ComponentLayout>
    </section>
  );
};
