"use client";

import { MissionPattern } from "@/assets/svg";
import { MissionImg } from "@/assets/images";
import ComponentLayout from "../component-layout";

export const Mission = () => {
  return (
    <section className="py-16 sm:py-24 md:py-32">
      <ComponentLayout>
        <div className="relative">
          <div className="text-white/60 text-lg font-semibold md:text-2xl lg:text-[28px] leading-[120%] mb-6 md:mb-8 relative z-10">
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

          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 relative z-10">
            {/* wrapper */}
            <div className="flex items-center gap-2">
              {/* mission card */}
              <div
                className="max-w-132 px-3 py-4 md:px-8 md:py-6 border border-[#402F1D] relative overflow-hidden bg-cover bg-center"
                style={{
                  backgroundImage: `url(${MissionImg.src})`,
                }}
              >
                <div className="absolute inset-0 bg-[#0A0705]/90" />

                {/* gradient */}
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(circle at 0% 0%, rgba(64, 47, 29, 0.25) 0%, rgba(64, 47, 29, 0.15) 25%, rgba(64, 47, 29, 0.08) 45%, transparent 70%)",
                  }}
                />

                <div
                  className="absolute inset-0 opacity-20"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(45deg, rgba(139, 105, 20, 0.1) 0px, rgba(139, 105, 20, 0.1) 1px, transparent 1px, transparent 7px)",
                  }}
                />

                <div className="relative z-10">
                  <h4 className="text-white leading-[120%] font-semibold text-lg md:text-xl lg:text-2xl mb-2">
                    MISSION
                  </h4>
                  <p className="text-white/70 leading-[120%] text-sm md:text-lg">
                    To transform awareness into action by using art to challenge
                    perceptions of waste, inspire responsible consumption, and
                    promote sustainable solutions across systems of production
                    and disposal.
                  </p>
                </div>
              </div>

              {/* pattern */}
              <div className="hidden lg:flex items-start pointer-events-none">
                <div className="relative -top-12">
                  <MissionPattern className="w-auto h-[75%]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </ComponentLayout>
    </section>
  );
};
