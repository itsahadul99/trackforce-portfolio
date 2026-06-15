

"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";

import plxLogo1 from "../../../../public/paralax-logo-1.png";
import plxLogo2 from "../../../../public/paralax-logo-2.png";
import plxLogo3 from "../../../../public/paralax-logo-3.png";
import plxLogo4 from "../../../../public/paralax-logo-4.png";
import accountablity from "../../../../public/home/accountability.png";
import productivity from "../../../../public/home/productivity.png";
import security from "../../../../public/home/security.png";
import effiency from "../../../../public/home/efficiency.png";

// Persists across unmount/remount so cards stay "set" when the section
// scrolls out of view and back in.
const persistedActivated = new Set<number>();

const Parallax = () => {
  const containerRef = useRef(null);
  const [activated, setActivated] = useState<Set<number>>(
    () => new Set(persistedActivated)
  );

  const activate = (n: number) => {
    if (persistedActivated.has(n)) return;
    persistedActivated.add(n);
    setActivated(new Set(persistedActivated));
  };

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Each card's lift window is kept non-overlapping (card N finishes exactly
  // where card N+1 begins) so an already-lifted card never moves again while
  // the next one rises.
  const card1Y = useTransform(scrollYProgress, [0, 0.23, 0.15], [0, 0, -150]);

  const card2Y = useTransform(scrollYProgress, [0.25, 0.48, 0.25], [0, 0, -150]);

  const card3Y = useTransform(scrollYProgress, [0.5, 0.73, 0.5], [0, 0, -150]);

  const card4Y = useTransform(scrollYProgress, [0.75, 0.95, 0.75], [0, 0, -150]);

  return (
    <div
      ref={containerRef}
      className="relative h-fit max-w-[1300] mx-auto my-16 sm:my-20 lg:my-28 text-black px-4 sm:px-6 xl:px-0"
    >

      {/* plx 1 */}
      <div className="h-[520px] sm:h-[600px] lg:h-[650px] sticky top-20 lg:top-30 z-10">
        <motion.div
          style={{ y: card1Y, background: "linear-gradient(180deg, #CFE4FE 0%, #83CFD9 100%)",boxShadow: "0 0 34.5px 0 rgba(0, 0, 0, 0.13)" }}
          initial={activated.has(1) ? "hover" : "rest"}
          animate={activated.has(1) ? "hover" : "rest"}
          onMouseEnter={() => activate(1)}
          className=" absolute inset-0 rounded-2xl w-full h-[380px] sm:h-[420px] lg:h-[450px] overflow-hidden px-4 sm:px-6 xl:px-0"
        >
          <div className="relative flex flex-col items-center text-center">

            <motion.div
              variants={{
                rest: { x: 0, y: 60 },
                hover: { x: -430, y: 60 }
              }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className={`flex flex-col gap-3 will-change-transform ${activated.has(1) ? "items-start" : "items-center"}`}
            >
              <div className="mb-3">
                <Image src={plxLogo1} alt="logo" width={72} height={72} quality={90} />
              </div>

              <h3 className="text-xl font-semibold">Productivity</h3>

              <p className={`w-full max-w-xs sm:w-72 ${activated.has(1) ? "text-left" : ""} text-sm sm:text-base px-4 sm:px-0`}>
                Measure real output through active work, application usage,
                and task behavior — not idle time.
              </p>
            </motion.div>

            <motion.div
              variants={{
                rest: { x: 0, y: 310, opacity: 0.8 },
                hover: { x: 200, y: 80, opacity: 1 }
              }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="absolute z-[99] will-change-transform"
            >
              <Image src={productivity} alt="parallax" width={750} height={440} quality={90} />
            </motion.div>

          </div>
        </motion.div>
      </div>


      {/* plx 2 */}
      <div className="h-[520px] sm:h-[600px] lg:h-[650px] sticky top-20 lg:top-30 z-20">
        <motion.div
          style={{ y: card2Y, background: "linear-gradient(180deg, #D3E5FF 0%, #C0B2FB 100%)", boxShadow: "0 0 34.5px 0 rgba(0, 0, 0, 0.13)" }}

          initial={activated.has(2) ? "hover" : "rest"}
          animate={activated.has(2) ? "hover" : "rest"}
          onMouseEnter={() => activate(2)}
          className="absolute inset-0 rounded-2xl w-full h-[380px] sm:h-[420px] lg:h-[450px] overflow-hidden px-4 sm:px-6 lg:px-0"
        >
          <div className="relative flex flex-col items-center text-center">

            <motion.div
              variants={{
                rest: { x: 0, y: 310, opacity: 0.8 },
                hover: { x: -200, y: 60, opacity: 1 }
              }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="absolute z-[99] will-change-transform"
            >
              <Image src={accountablity} alt="parallax" width={750} height={440} quality={90} />
            </motion.div>

            <motion.div
              variants={{
                rest: { x: 0, y: 60 },
                hover: { x: 460, y: 60 }
              }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className={`flex flex-col gap-3 will-change-transform ${activated.has(2) ? "items-start" : "items-center"}`}
            >
              <div className="mb-3">
                <Image src={plxLogo2} alt="logo" width={72} height={72} quality={90} />
              </div>

              <h3 className="text-xl font-semibold">Accountability</h3>

              <p className={`w-full max-w-xs sm:w-72 ${activated.has(2) ? "text-left" : ""} text-sm sm:text-base px-4 sm:px-0`}>
                With detailed reporting and workforce analytics, TrackForce builds transparency, tracks progress, and enables data-driven decisions with full operational visibility.
              </p>
            </motion.div>

          </div>
        </motion.div>
      </div>


      {/* plx 3 */}
      <div className="h-[520px] sm:h-[600px] lg:h-[650px] sticky top-20 lg:top-30 z-30">
        <motion.div
          style={{ y: card3Y, background: "linear-gradient(180deg, #D8E9FE 0%, #BEF8CE 100%)", boxShadow: "0 0 34.5px 0 rgba(0, 0, 0, 0.13)" }}
          initial={activated.has(3) ? "hover" : "rest"}
          animate={activated.has(3) ? "hover" : "rest"}
          onMouseEnter={() => activate(3)}
          className="absolute inset-0 rounded-2xl w-full h-[380px] sm:h-[420px] lg:h-[450px] overflow-hidden px-4 sm:px-6 lg:px-0"

        >
          <div className="relative flex flex-col items-center text-center">
            <motion.div
              variants={{
                rest: { x: 0, y: 60 },
                hover: { x: -430, y: 60 }
              }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className={`flex flex-col gap-3 will-change-transform ${activated.has(3) ? "items-start" : "items-center"}`}
            >
              <div className="mb-3">
                <Image src={plxLogo3} alt="logo" width={72} height={72} quality={90} />
              </div>

              <h3 className="text-xl font-semibold">Security</h3>

              <p className={`w-full max-w-xs sm:w-72 ${activated.has(3) ? "text-left" : ""} text-sm sm:text-base px-4 sm:px-0`}>
                It safeguards sensitive data through proactive insider threat detection & activity monitoring.
              </p>
            </motion.div>

            <motion.div
              variants={{
                rest: { x: 0, y: 310, opacity: 0.8 },
                hover: { x: 200, y: 80, opacity: 1 }
              }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="absolute z-[99] will-change-transform"
            >
              <Image src={security} alt="parallax" width={750} height={440} quality={90} />
            </motion.div>

          </div>
        </motion.div>
      </div>


      {/* plx 4 */}
      <div className="h-[520px] sm:h-[600px] lg:h-[650px] sticky top-20 lg:top-30 z-40">
        <motion.div
          style={{ y: card4Y, background: "linear-gradient(180deg, #DFE6F2 53.53%, #F2D7BF 100%)",boxShadow: "0 0 34.5px 0 rgba(0, 0, 0, 0.13)" }}
          initial={activated.has(4) ? "hover" : "rest"}
          animate={activated.has(4) ? "hover" : "rest"}
          onMouseEnter={() => activate(4)}
          className="absolute inset-0 rounded-2xl w-full h-[380px] sm:h-[420px] lg:h-[450px] overflow-hidden px-4 sm:px-6 lg:px-0"
        >
          <div className="relative flex flex-col items-center text-center">

            <motion.div
              variants={{
                rest: { x: 0, y: 310, opacity: 0.8 },
                hover: { x: -200, y: 60, opacity: 1 }
              }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className="absolute z-[99] will-change-transform"
            >
              <Image src={effiency} alt="parallax" width={750} height={440} quality={90} />
            </motion.div>

            <motion.div
              variants={{
                rest: { x: 0, y: 60 },
                hover: { x: 460, y: 60 }
              }}
              transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
              className={`flex flex-col gap-3 will-change-transform ${activated.has(4) ? "items-start" : "items-center"}`}
            >
              <div className="mb-3">
                <Image src={plxLogo4} alt="logo" width={72} height={72} quality={90} />
              </div>

              <h3 className="text-xl font-semibold">Efficiency</h3>

              <p className={`w-full max-w-xs sm:w-72 ${activated.has(4) ? "text-left" : ""} text-sm sm:text-base px-4 sm:px-0`}>
                TrackForce boosts operational efficiency by optimizing workflows, reducing manual overhead, and enabling teams to execute faster with precision.
              </p>
            </motion.div>

          </div>
        </motion.div>
      </div>

    </div>
  );
};

export default Parallax;
