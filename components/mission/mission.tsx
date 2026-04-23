"use client";

import { MissionPattern } from "@/assets/svg";
import { MissionImg } from "@/assets/images";
import ComponentLayout from "../component-layout";

export const Mission = () => {
  return (
    <section className="bg-[#0F0A06] py-16 sm:py-24 md:py-32">
      <ComponentLayout>
        <div className="relative">
          <div className="hidden md:block absolute right-[20%] top-[70%] -translate-y-1/2 pointer-events-none">
            <MissionPattern className="w-full h-auto" />
          </div>

          <div className="text-white/60 text-xl md:text-2xl lg:text-[28px] leading-[120%] mb-16 relative z-10">
            <span className="text-white">Trash of Fame </span> was born from
            founder Emmanuel “DoTT” Kunfaa&apos;s firsthand survival of a waste
            explosion, revealing the urgent reality of systemic pollution.
            <br />
            Blending that experience with insights from the global fashion and
            secondhand economy, it transforms waste into powerful art that
            challenges how we see consumption and value. It calls for collective
            responsibility and action toward sustainable solutions, from mindful
            production to reusing, recycling, and biodegradable innovation.
          </div>

          <div className="flex flex-col md:flex-row items-center gap-10 relative z-10">
            <div
              className="max-w-[520px] px-8 py-6 border border-[#654829] bg-cover bg-center"
              style={{
                backgroundImage: `
      linear-gradient(
        135deg,
        rgba(101, 72, 41, 0.25) 0%,
        rgba(101, 72, 41, 0.15) 25%,
        rgba(15, 10, 6, 0.6) 60%,
        rgba(15, 10, 6, 0.9) 100%
      ),
      url(${MissionImg.src})
    `,
              }}
            >
              <h4 className="text-white leading-[120%] text-lg md:text-xl lg:text-2xl mb-2">
                MISSION
              </h4>
              <p className="text-white/70 leading-[120%] text-base md:text-lg">
                To transform awareness into action by using art to challenge
                perceptions of waste, inspire responsible consumption, and
                promote sustainable solutions across systems of production and
                disposal.
              </p>
            </div>
          </div>
        </div>
      </ComponentLayout>
    </section>
  );
};
