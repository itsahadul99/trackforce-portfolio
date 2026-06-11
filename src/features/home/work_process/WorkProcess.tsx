


"use client";

import { AnimatePresence, motion } from 'framer-motion';
import Image from "next/image";
import Link from 'next/link';
import { useEffect, useState } from "react";
import { FaArrowRightLong } from 'react-icons/fa6';
import connectTeam from '../../../../public/home/connectTeam.png';
import monitorAnalyze from '../../../../public/home/monitorAnalysis.png';
import optimizePerformance from '../../../../public/home/optimizePermomence.png';
import trackforce from '../../../../public/trackforce.png';

const steps = [
  { id: 1, title: "Connect Your Team", desc: "TrackForce enables peak efficiency through real-time tracking and smart performance insights.", img: connectTeam },
  { id: 2, title: "Monitor & Analyze", desc: "TrackForce enables peak efficiency through real-time tracking and smart performance insights.", img: monitorAnalyze },
  { id: 3, title: "Optimize Performance", desc: "TrackForce enables peak efficiency through real-time tracking and smart performance insights.", img: optimizePerformance },
];

export default function WorkProcess() {
  const [activeRow, setActiveRow] = useState(1);
  const [isLg, setIsLg] = useState(true);

  useEffect(() => {
    const handleResize = () => setIsLg(window.innerWidth >= 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="py-16 sm:py-20 lg:py-24 overflow-hidden bg-cover bg-center bg-no-repeat bg-[url('/work-process-bg.png')]">
      <div className="lg:max-w-[1200] xl:max-w-[1300] w-full mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-12 px-4 sm:px-6 xl:px-0">

        {/* Left Content */}
        <div className="w-full lg:w-[40%] space-y-6 text-center lg:text-left">
          <div className="content_title_border_new w-fit mx-auto lg:mx-0 mb-6">
            <div className="px-4 py-2 text-sm font-semibold content_title_text_new">
              Our Work Process
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold mb-6 text-[#2B2B2B] leading-tight">
            <span className="font-playball font-normal">Automate</span>  Productivity in <br className="hidden sm:block" /> 3 Simple Steps
          </h2>

          <p className="text-gray-600 text-sm sm:text-base lg:text-[16px] leading-relaxed max-w-sm mx-auto lg:mx-0">
            TrackForce gives you real-time visibility, accountability, and performance insights to manage teams efficiently and securely.
          </p>

          <div className="flex items-center justify-center lg:justify-start gap-4 pt-2 flex-wrap">
            <div>
              <Link href="/contact" className="group custom-button relative w-fit bg-gradient-to-r from-gray-700 via-gray-900 to-gray-700 text-white font-bold py-3 px-6 rounded-[16px] flex gap-3 justify-between items-center">
                <span className='group-hover:italic '>Book a Demo</span> <FaArrowRightLong className='group-hover:-rotate-[30deg] transition ease-in-out' />
                <motion.div
                  className="ml-2 absolute right-0"
                  animate={{
                    x: [0, -190, 0],
                    opacity: [0, 1, 0, 0, 1, 0],
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    repeatType: 'loop',
                  }}
                >
                  <Image
                    src={trackforce}
                    alt="TrackForce Logo"
                    className="w-8 h-8 group-hover:hidden"
                  />
                </motion.div>
              </Link>
            </div>
            <button className="px-6 py-3 border border-[#2B2B2B] text-[#2B2B2B] rounded-[16px] font-medium text-base hover:bg-gray-100">
              Learn more
            </button>
          </div>
        </div>

        {/* Right Side — cards */}
        <div className="w-full lg:w-[60%]">
          <div className="flex flex-col lg:flex-row gap-5 items-start">
            {steps.map((step) => {
              const isActive = activeRow === step.id;
              return (
                <motion.div
                  key={step.id}
                  onMouseEnter={() => setActiveRow(step.id)}
                  animate={isLg ? {
                    width: isActive ? "46%" : "27%",
                    opacity: isActive ? 1 : 0.88,
                  } : {
                    width: "100%",
                    opacity: 1,
                  }}
                  transition={{
                    width: { duration: 1.1, ease: [0.32, 0.72, 0, 1] },
                    opacity: { duration: 0.6, ease: "easeOut" },
                  }}
                  className="relative h-[360px] sm:h-[400px] lg:h-[420px] rounded-2xl px-4 sm:px-5 py-6 sm:py-8 overflow-hidden flex flex-col cursor-pointer shrink-0 w-full lg:w-auto"
                  style={{
                    background: "rgba(255,255,255,0.5)",
                    backdropFilter: "blur(10px)",
                    WebkitBackdropFilter: "blur(10px)",
                    boxShadow:
                      "inset 1.5px 2.3px 0 0 rgba(255,255,255,0.6), 0 4px 14px 2px rgba(0,0,0,0.12), -14px 43px 52px 0 rgba(81,78,120,0.18)",
                  }}
                >
                  {/* Step badge */}
                  <span
                    className="inline-flex self-start px-4 py-1.5 rounded-full text-sm font-semibold mb-3 border transition-colors duration-500"
                    style={
                      isActive
                        ? {
                          background: "rgba(12,89,192,0.18)",
                          borderColor: "rgba(12,89,192,0.46)",
                          color: "#0C59C0",
                        }
                        : {
                          background: "rgba(255,255,255,0.4)",
                          borderColor: "rgba(255,255,255,0.7)",
                          color: "#0C59C0",
                        }
                    }
                  >
                    Step {step.id}
                  </span>

                  <h3 className="font-semibold text-[#2B2B2B] text-[20px] leading-snug mb-3">
                    {step.title}
                  </h3>

                  {/* Description — smoothly slides between top (active) and bottom (inactive) positions */}
                  <motion.p
                    layout
                    transition={{ duration: 0.9, ease: [0.32, 0.72, 0, 1] }}
                    className={`text-[#747378] text-[15px] leading-relaxed ${isActive ? "" : "mt-auto"}`}
                  >
                    {step.desc}
                  </motion.p>

                  {/* Image — only on active, fades + slides in */}
                  <AnimatePresence mode="wait">
                    {isActive && (
                      <motion.div
                        key="img"
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 20 }}
                        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.25 }}
                        className="absolute left-5 right-5 bottom-5 rounded-xl overflow-hidden shadow-md"
                      >
                        <Image
                          src={step.img}
                          alt="Dashboard preview"
                          className="w-full h-auto object-cover"
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

          {/* Progress indicator — fills based on active step (1/3, 2/3, full) */}
          <div
            className="relative mt-8 sm:mt-10 lg:mt-12 mx-auto w-full max-w-[383px] h-[10px] sm:h-[13px] rounded-full overflow-hidden"
            style={{ background: "#DEEDFF", boxShadow: "inset 1.5px 2.3px 0 0 rgba(255,255,255,0.6)" }}
          >
            <motion.div
              className="absolute top-0 left-0 h-full rounded-full"
              style={{ background: "#166DE1" }}
              animate={{ width: `${(activeRow / 3) * 100}%` }}
              transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}