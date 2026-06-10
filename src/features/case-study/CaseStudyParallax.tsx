"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const cards = [
  {
    number: "01",
    title: "Real-Time Productivity Dashboard",
    points: [
      "Live active vs idle time tracking",
      "Web and application usage visualization",
      "Insights on employees' performance on a project",
      "Instant search and activity logs",
    ],
    result:
      "Managers gained instant visibility into team productivity without manual follow-ups.",
    gradient:
      "linear-gradient(to right, #e8d5f5, #d5c8f0, #c8bde8, #d5c8f0, #e8d5f5)",
  },
  {
    number: "02",
    title: "Smart Monitoring & Evidence System",
    description: "TrackForce introduced structured monitoring across:",
    points: [
      "Screenshot & screen recording capture",
      "Application & website tracking",
      "File transfer monitoring",
      "Console command & keystroke records",
      "Social media, email, instant messaging detection",
    ],
    gradient:
      "linear-gradient(to right, #d5eaf5, #c5ddf0, #b8d4ec, #c5ddf0, #d5eaf5)",
  },
  {
    number: "03",
    title: "Advanced Reporting & Risk Detection",
    points: [
      "Daily Workload Report",
      "Monthly Attendance Report",
      "Utilization Rate Tracking",
      "Risk User Identification (late login, excessive breaks, low work hours)",
    ],
    result:
      "Management shifted from reactive supervision to proactive decision-making.",
    gradient:
      "linear-gradient(to right, #d5f0e0, #c2e8d0, #b5e0c5, #c2e8d0, #d5f0e0)",
  },
];

const CaseStudyParallax = () => {
  const containerRef = useRef(null);

  const [isSmall, setIsSmall] = useState(false);

  useEffect(() => {
    // Treat tablets and smaller (<= 1023px) as non-parallax for better responsiveness
    const mq = window.matchMedia("(max-width: 1023px)");
    const setMatch = () => setIsSmall(mq.matches);
    setMatch();
    mq.addEventListener?.("change", setMatch);
    return () => mq.removeEventListener?.("change", setMatch);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const card1Y = useTransform(scrollYProgress, [0, 0.3, 0.33], [0, 0, -150]);
  const card2Y = useTransform(scrollYProgress, [0.33, 0.63, 0.66], [0, 0, -150]);
  const card3Y = useTransform(scrollYProgress, [0.66, 1], [0, -150]);

  const cardYValues = [card1Y, card2Y, card3Y];

  return (
    <div
      ref={containerRef}
      className="relative h-fit max-w-[1300] mx-auto mt-12 md:mt-16 lg:mt-28 text-black"
    >
      {cards.map((card, index) => {
        if (isSmall) {
          return (
            <div key={index} className="w-full mb-6" style={{ zIndex: (index + 1) * 10 }}>
              <div style={{ background: card.gradient }} className="rounded-2xl w-full overflow-hidden shadow-lg border-2 p-6">
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                  <div className="w-full sm:w-[280px]">
                    <h3 className="text-xl md:text-2xl font-bold text-[#1a1a2e] leading-tight">
                      {card.title}
                    </h3>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="shrink-0">
                      <span className="text-4xl font-bold text-[#2ec4b6]">{card.number}</span>
                    </div>
                    <div className="flex-1">
                      {card.description && <p className="text-[#1a1a2e] text-sm mb-2">{card.description}</p>}
                      <ul className="text-[#1a1a2e]/80 text-sm leading-relaxed space-y-2 mb-2">
                        {card.points.map((point, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#1a1a2e]/60 shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>
                      {card.result && <p className="text-[#1a1a2e] text-sm"><span className="font-bold">Result:</span> {card.result}</p>}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        }

        return (
          <div key={index} className="lg:h-[650px] lg:sticky lg:top-30 h-auto" style={{ zIndex: (index + 1) * 10 }}>
            <motion.div
              style={{ y: cardYValues[index], background: card.gradient }}
              className="lg:absolute lg:inset-0 rounded-2xl w-full lg:h-[450px] h-auto overflow-hidden shadow-lg border-2 relative"
            >
              <div className="flex flex-col lg:flex-row items-start lg:items-center h-auto lg:h-full px-6 lg:px-12 gap-6 lg:gap-8">
                {/* Left - Title */}
                <div className="w-full lg:w-[280px] shrink-0">
                  <h3 className="text-2xl lg:text-4xl font-bold text-[#1a1a2e] leading-tight">{card.title}</h3>
                </div>

                {/* Center - Number */}
                <div className="shrink-0">
                  <span className="text-4xl lg:text-7xl font-bold text-[#2ec4b6]">{card.number}</span>
                </div>

                {/* Right - Content */}
                <div className="flex-1">
                  {card.description && <p className="text-[#1a1a2e] text-base lg:text-[20px] mb-3">{card.description}</p>}
                  <ul className="text-[#1a1a2e]/80 text-sm lg:text-[20px] leading-relaxed space-y-2 mb-4">
                    {card.points.map((point, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#1a1a2e]/60 shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                  {card.result && <p className="text-[#1a1a2e] text-sm lg:text-[20px]"><span className="font-bold">Result:</span> {card.result}</p>}
                </div>
              </div>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
};

export default CaseStudyParallax;
