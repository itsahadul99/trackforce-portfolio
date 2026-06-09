
"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

import plxLogo1 from "../../../../public/paralax-logo-1.png";
import plx1 from "../../../../public/paralax-1.png";

const Parallax = () => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const card1Y = useTransform(scrollYProgress, [0, 0.23, 0.25], [0, 0, -150]);

  const card2Y = useTransform(scrollYProgress, [0.25, 0.48, 0.5], [0, 0, -150]);

  const card3Y = useTransform(scrollYProgress, [0.5, 0.73, 0.75], [0, 0, -150]);

  const card4Y = useTransform(scrollYProgress, [0.75, 1], [0, -150]);

  return (
    <div
      ref={containerRef}
      className="relative h-fit lg:w-[1200] xl:w-[1300] mx-auto mt-16 sm:mt-20 lg:mt-28 text-black px-4 sm:px-6 lg:px-0"
    >

      {/* plx 1 */}
      <div className="h-[520px] sm:h-[600px] lg:h-[650px] sticky top-20 lg:top-30 z-10">
        <motion.div
          style={{ y: card1Y, background: "linear-gradient(180deg, #CFE4FE 0%, #83CFD9 100%)" }}
          initial="rest"
          whileHover="hover"
          animate="rest"
          className=" absolute inset-0 rounded-2xl w-full h-[380px] sm:h-[420px] lg:h-[450px] overflow-hidden group shadow-lg border border-white px-4 sm:px-6 lg:px-0"
        >
          <div className="relative flex flex-col items-center text-center">

            <motion.div
              variants={{
                rest: { x: 0, y: 60 },
                hover: { x: -430, y: 60 }
              }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-3 items-center group-hover:items-start"
            >
              <div className="mb-3">
                <Image src={plxLogo1} alt="logo" width={72} height={72} />
              </div>

              <h3 className="text-xl font-semibold">Productivity</h3>

              <p className="w-full max-w-xs sm:w-72 group-hover:text-left text-sm sm:text-base px-4 sm:px-0">
                Measure real output through active work, application usage,
                and task behavior — not idle time.
              </p>
            </motion.div>

            <motion.div
              variants={{
                rest: { x: 0, y: 310, opacity: 0.8 },
                hover: { x: 200, y: 80, opacity: 1 }
              }}
              transition={{ duration: 0.6 }}
              className="absolute z-[99]"
            >
              <Image src={plx1} alt="parallax" width={750} height={440} />
            </motion.div>

          </div>
        </motion.div>
      </div>


      {/* plx 2 */}
      <div className="h-[520px] sm:h-[600px] lg:h-[650px] sticky top-20 lg:top-30 z-20">
        <motion.div
          style={{ y: card2Y, background: "linear-gradient(180deg, #D3E5FF 0%, #C0B2FB 100%)" }}
          
          initial="rest"
          whileHover="hover"
          animate="rest"
          className="absolute inset-0 rounded-2xl w-full h-[380px] sm:h-[420px] lg:h-[450px] overflow-hidden group shadow-lg border border-white px-4 sm:px-6 lg:px-0"
        >
          <div className="relative flex flex-col items-center text-center">

            <motion.div
              variants={{
                rest: { x: 0, y: 310, opacity: 0.8 },
                hover: { x: -200, y: 60, opacity: 1 }
              }}
              transition={{ duration: 0.6 }}
              className="absolute z-[99]"
            >
              <Image src={plx1} alt="parallax" width={750} height={440} />
            </motion.div>

            <motion.div
              variants={{
                rest: { x: 0, y: 60 },
                hover: { x: 460, y: 60 }
              }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-3 items-center group-hover:items-start"
            >
              <div className="mb-3">
                <Image src={plxLogo1} alt="logo" width={72} height={72} />
              </div>

              <h3 className="text-xl font-semibold">Productivity</h3>

              <p className="w-full max-w-xs sm:w-72 group-hover:text-left text-sm sm:text-base px-4 sm:px-0">
                Measure real output through active work, application usage,
                and task behavior — not idle time.
              </p>
            </motion.div>

          </div>
        </motion.div>
      </div>


      {/* plx 3 */}
      <div className="h-[520px] sm:h-[600px] lg:h-[650px] sticky top-20 lg:top-30 z-30">
        <motion.div
          style={{ y: card3Y, background: "linear-gradient(180deg, #D8E9FE 0%, #BEF8CE 100%)" }}
              initial="rest"
          whileHover="hover"
          animate="rest"
          className="absolute inset-0 rounded-2xl w-full h-[380px] sm:h-[420px] lg:h-[450px] overflow-hidden group shadow-lg border border-white px-4 sm:px-6 lg:px-0"
        >
          <div className="relative flex flex-col items-center text-center">

            <motion.div
              variants={{
                rest: { x: 0, y: 60 },
                hover: { x: -430, y: 60 }
              }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-3 items-center group-hover:items-start"
            >
              <div className="mb-3">
                <Image src={plxLogo1} alt="logo" width={72} height={72} />
              </div>

              <h3 className="text-xl font-semibold">Productivity</h3>

              <p className="w-full max-w-xs sm:w-72 group-hover:text-left text-sm sm:text-base px-4 sm:px-0">
                Measure real output through active work, application usage,
                and task behavior — not idle time.
              </p>
            </motion.div>

            <motion.div
              variants={{
                rest: { x: 0, y: 310, opacity: 0.8 },
                hover: { x: 200, y: 80, opacity: 1 }
              }}
              transition={{ duration: 0.6 }}
              className="absolute z-[99]"
            >
              <Image src={plx1} alt="parallax" width={750} height={440} />
            </motion.div>

          </div>
        </motion.div>
      </div>


      {/* plx 4 */}
      <div className="h-[520px] sm:h-[600px] lg:h-[650px] sticky top-20 lg:top-30 z-40">
        <motion.div
          style={{ y: card4Y, background: "linear-gradient(180deg, #DFE6F2 53.53%, #F2D7BF 100%)" }}
          initial="rest"
          whileHover="hover"
          animate="rest"
          className="absolute inset-0 rounded-2xl w-full h-[380px] sm:h-[420px] lg:h-[450px] overflow-hidden group shadow-lg border border-white px-4 sm:px-6 lg:px-0"
        >
          <div className="relative flex flex-col items-center text-center">

            <motion.div
              variants={{
                rest: { x: 0, y: 310, opacity: 0.8 },
                hover: { x: -200, y: 60, opacity: 1 }
              }}
              transition={{ duration: 0.6 }}
              className="absolute z-[99]"
            >
              <Image src={plx1} alt="parallax" width={750} height={440} />
            </motion.div>

            <motion.div
              variants={{
                rest: { x: 0, y: 60 },
                hover: { x: 460, y: 60 }
              }}
              transition={{ duration: 0.6 }}
              className="flex flex-col gap-3 items-center group-hover:items-start"
            >
              <div className="mb-3">
                <Image src={plxLogo1} alt="logo" width={72} height={72} />
              </div>

              <h3 className="text-xl font-semibold">Productivity</h3>

              <p className="w-full max-w-xs sm:w-72 group-hover:text-left text-sm sm:text-base px-4 sm:px-0">
                Measure real output through active work, application usage,
                and task behavior — not idle time.
              </p>
            </motion.div>

          </div>
        </motion.div>
      </div>

    </div>
  );
};

export default Parallax;