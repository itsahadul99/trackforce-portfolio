"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import RichText from "@/components/shared/RichText";

import plxLogo1 from "../../../../public/paralax-logo-1.png";
import plxLogo2 from "../../../../public/paralax-logo-2.png";
import plxLogo3 from "../../../../public/paralax-logo-3.png";
import plxLogo4 from "../../../../public/paralax-logo-4.png";
import accountablity from "../../../../public/home/accountability.png";
import productivity from "../../../../public/home/productivity.png";
import security from "../../../../public/home/security.png";
import effiency from "../../../../public/home/efficiency.png";

type ParallaxProps = { cms?: Record<string, string> }

// Persists across unmount/remount so cards stay "set" when the section
// scrolls out of view and back in.
const persistedActivated = new Set<number>();

const Parallax = ({ cms = {} }: ParallaxProps) => {
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

  const card1Y = useTransform(scrollYProgress, [0, 0.23, 0.15], [0, 0, -150]);
  const card2Y = useTransform(scrollYProgress, [0.25, 0.48, 0.25], [0, 0, -150]);
  const card3Y = useTransform(scrollYProgress, [0.5, 0.73, 0.5], [0, 0, -150]);
  const card4Y = useTransform(scrollYProgress, [0.75, 0.95, 0.75], [0, 0, -150]);

  const cards = [
    {
      n: 1,
      cardY: card1Y,
      zIndex: "z-10",
      gradient: "linear-gradient(180deg, #CFE4FE 0%, #83CFD9 100%)",
      imgSide: "right" as const,
      title: cms.card1_title || "Productivity",
      desc: cms.card1_desc || "Measure real output through active work, application usage, and task behavior — not idle time.",
      logo: cms.card1_logo || plxLogo1,
      image: cms.card1_image || productivity,
    },
    {
      n: 2,
      cardY: card2Y,
      zIndex: "z-20",
      gradient: "linear-gradient(180deg, #D3E5FF 0%, #C0B2FB 100%)",
      imgSide: "left" as const,
      title: cms.card2_title || "Accountability",
      desc: cms.card2_desc || "With detailed reporting and workforce analytics, TrackForce builds transparency, tracks progress, and enables data-driven decisions with full operational visibility.",
      logo: cms.card2_logo || plxLogo2,
      image: cms.card2_image || accountablity,
    },
    {
      n: 3,
      cardY: card3Y,
      zIndex: "z-30",
      gradient: "linear-gradient(180deg, #D8E9FE 0%, #BEF8CE 100%)",
      imgSide: "right" as const,
      title: cms.card3_title || "Security",
      desc: cms.card3_desc || "It safeguards sensitive data through proactive insider threat detection & activity monitoring.",
      logo: cms.card3_logo || plxLogo3,
      image: cms.card3_image || security,
    },
    {
      n: 4,
      cardY: card4Y,
      zIndex: "z-40",
      gradient: "linear-gradient(180deg, #DFE6F2 53.53%, #F2D7BF 100%)",
      imgSide: "left" as const,
      title: cms.card4_title || "Efficiency",
      desc: cms.card4_desc || "TrackForce boosts operational efficiency by optimizing workflows, reducing manual overhead, and enabling teams to execute faster with precision.",
      logo: cms.card4_logo || plxLogo4,
      image: cms.card4_image || effiency,
    },
  ];

  return (
    <div
      ref={containerRef}
      className="relative h-fit max-w-[1300] mx-auto my-16 sm:my-20 lg:my-28 text-black px-4 sm:px-6 xl:px-0"
    >
      {cards.map(({ n, cardY, zIndex, gradient, imgSide, title, desc, logo, image }) => {
        const isRight = imgSide === "right";
        return (
          <div key={n} className={`h-[520px] sm:h-[600px] lg:h-[650px] sticky top-20 lg:top-30 ${zIndex}`}>
            <motion.div
              style={{ y: cardY, background: gradient, boxShadow: "0 0 34.5px 0 rgba(0, 0, 0, 0.13)" }}
              initial={activated.has(n) ? "hover" : "rest"}
              animate={activated.has(n) ? "hover" : "rest"}
              onMouseEnter={() => activate(n)}
              className={`absolute inset-0 rounded-2xl w-full h-[380px] sm:h-[420px] lg:h-[450px] overflow-hidden px-4 sm:px-6 ${isRight ? "xl:px-0" : "lg:px-0"}`}
            >
              <div className="relative flex flex-col items-center text-center">

                {/* Image — left side cards show image first in DOM order */}
                {!isRight && (
                  <motion.div
                    variants={{
                      rest: { x: 0, y: 310, opacity: 0.8 },
                      hover: { x: -200, y: 60, opacity: 1 },
                    }}
                    transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute z-[99] will-change-transform"
                  >
                    <Image src={image} alt={title} width={750} height={440} quality={90} />
                  </motion.div>
                )}

                {/* Text content */}
                <motion.div
                  variants={{
                    rest: { x: 0, y: 60 },
                    hover: { x: isRight ? -430 : 460, y: 60 },
                  }}
                  transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                  className={`flex flex-col gap-3 will-change-transform ${activated.has(n) ? "items-start" : "items-center"}`}
                >
                  <div className="mb-3">
                    <Image src={logo} alt="logo" width={72} height={72} quality={90} />
                  </div>
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <RichText className={`w-full max-w-xs sm:w-72 ${activated.has(n) ? "text-left" : ""} text-sm sm:text-base px-4 sm:px-0`} html={desc} />
                </motion.div>

                {/* Image — right side cards show image after text */}
                {isRight && (
                  <motion.div
                    variants={{
                      rest: { x: 0, y: 310, opacity: 0.8 },
                      hover: { x: 200, y: 80, opacity: 1 },
                    }}
                    transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                    className="absolute z-[99] will-change-transform"
                  >
                    <Image src={image} alt={title} width={750} height={440} quality={90} />
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
};

export default Parallax;
