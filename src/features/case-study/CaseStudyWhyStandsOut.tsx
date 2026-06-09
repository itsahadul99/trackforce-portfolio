"use client";

import Image from "next/image";
import { motion, type Variants } from 'framer-motion';

const imageVariants = (x: number, y: number, delay: number = 0): Variants => ({
  hidden: { opacity: 0, x, y, scale: 0.85 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number], delay },
  },
});

const checkItems = [
  "Customizable to organizational hierarchy",
  "Department-level segmentation",
  "Integrated risk analytics",
  "Multi-device monitoring",
  "Cloud-based access",
  "Enterprise-grade control",
  "Privacy-focused configuration",
];

const CaseStudyWhyStandsOut = () => {
  return (
    <div className="relative bg-[#0a1628] h-[700] w-full lg:w-[1200] xl:w-[1300] mx-auto rounded-2xl py-16 md:py-24 overflow-hidden">
      {/* Decorative circle outline top-right */}
      <div className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full border border-dashed border-blue-500/20 pointer-events-none" />
      <div className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full border border-dashed border-blue-500/10 pointer-events-none" />

      <div className=" px-4 relative z-10">
        <div className="flex flex-col md:flex-row items-center gap-28">
          {/* Left - Images */}
          <div className="w-full md:w-1/2 relative">
            {/* Time tracking image */}
            <motion.div
              className="absolute -top-48 left-16 z-20"
              variants={imageVariants(-50, -50, 0.35)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }}
            >
              <Image
                src="/time.png"
                alt="Case Study Hero"
                width={1200}
                height={600}
                className="w-[470] object-contain"
              />
            </motion.div>
            {/* Ensure image overlay */}
            <motion.div
              className="absolute -bottom-[350px] -right-28 z-20"
              variants={imageVariants(50, 50, 0.35)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.1 }}
            >
              <Image
                src="/ensure.png"
                alt="Case Study Hero"
                width={1200}
                height={600}
                className="w-[440] object-contain"
              />
            </motion.div>


          </div>

          {/* Right - Content */}
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <h2 className="text-4xl md:text-[42px] font-bold text-white mb-8">
              Why TrackForce{" "}
              <span className="font-playball font-normal">Stands Out</span>
            </h2>

            <ul className="space-y-3 mb-8 text-lg">
              {checkItems.map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-white/80 ">
                  <svg
                    className="w-4 h-4 text-blue-400 shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>

            <p className="text-white/60 text-lg leading-relaxed">
              TrackForce is not just monitoring software — it is a workforce
              intelligence engine built for modern enterprises.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyWhyStandsOut;
