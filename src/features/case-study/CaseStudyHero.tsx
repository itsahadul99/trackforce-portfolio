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

const CaseStudyHero = () => {
  return (
    <div className="overflow-hidden py-12 bg-cover bg-center bg-no-repeat bg-[url('/caseStudyBg.png')]">

      <div className="  lg:w-[1200] xl:w-[1300] h-[calc(100vh-350px)] mx-auto flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Content */}
        <div className="w-full lg:w-1/2 h-full  flex flex-col items-start justify-center gap-6">
          {/* Case Study Badge */}
          <div className="content_title_border w-fit text-[#0C59C0] rounded-full mb-1">
            <div className="px-4 py-2 text-sm font-semibold">
              Case Study
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-[42px] lg:text-[42px] font-bold text-[#1a1a2e] leading-tight">
            Transforming Workforce{" "}
            <span className="font-playball font-normal italic">Productivity</span>{" "}
            with Intelligent Monitoring
          </h1>

          {/* Client Badge */}
          <div className="relative inline-flex items-center gap-3 px-5 py-4 rounded-xl bg-white/60 backdrop-blur-sm
            before:absolute before:inset-0 before:rounded-xl before:p-[2px]
            before:bg-gradient-to-r before:from-[#1B73E8] before:to-[#9F60EE]
            before:-z-10 before:content-['']
            after:absolute after:inset-[2px] after:rounded-xl after:bg-white/60
            after:-z-[5] after:content-['']"
          >
            <span className="font-rubik font-semibold text-[20px] leading-[128%] text-[#0451FA]">
              Client:
            </span>
            <Image src="/3star.png" alt="star" width={24} height={24} />
            <span className="font-rubik font-semibold text-[20px] leading-[128%] text-[#0451FA]">
              AKIJ iBOS LTD
            </span>
          </div>
        </div>


        {/* Right Content */}
        <div className="relative w-full lg:w-1/2  flex justify-end">


          {/* Top Right Image */}
          <motion.div
            className="absolute -top-60 right-10 z-20"
            variants={imageVariants(50, -50, 0.35)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
          >
            <Image
              src="/case-stud-hero-female.png"
              alt="Case Study Hero"
              width={1200}
              height={600}
              className="w-[470] object-contain"
            />
          </motion.div>

          {/* Center Card (Welcome) */}
          <motion.div
            className="absolute -bottom-[180px] left-4 z-20"
            variants={imageVariants(-50, 50, 0.35)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.1 }}
          >
            <Image
              src="/case-stud-hero-welcome.png"
              alt="Case Study Hero"
              width={1200}
              height={600}
              className="w-[400] object-contain"
            />
          </motion.div>


        </div>
      </div>
    </div>
  );
};

export default CaseStudyHero;
