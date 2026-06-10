"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import trackforce from "../../../public/trackforce.png";
import { IoIosArrowDown } from "react-icons/io";

const faqs = [
  {
    question: "Centralized Performance Management",
    answer:
      "Monitor team productivity, attendance, and activity levels in one place to ensure transparency and better control.",
  },
  {
    question: "Automated Project Overview",
    answer:
      "Get a bird's-eye view of all ongoing projects with automated tracking, milestone updates, and deadline management in real time.",
  },
  {
    question: "Insightful Data & Reports",
    answer:
      "Generate detailed analytics and reports that help you make data-driven decisions, identify trends, and optimize team performance.",
  },
];



const AboutWhyChooseUs = () => {

  const [open, setOpen] = useState<number | null>(0);


  return (
    <section className="w-full bg-gradient-to-b from-[#e8ecf8] via-[#edf0fa] to-[#e8ecf8] pb-6 bg-[url('/whyChoiceUs.png')] bg-cover bg-center bg-no-repeat">
      <div className="max-w-[1300] mx-auto">
        <div className="flex gap-16 items-center justify-between">
          {/* Left Side */}
          <div className="w-[40%] flex flex-col justify-center">
            <div className="mb-4">
              <div className="content_title_border_new w-fit mb-1">
                <div className="px-4 py-2 text-sm font-semibold content_title_text_new">
                  Why choose us
                </div>
              </div>
            </div>

            <h2 className="text-[42px] font-semibold text-black leading-tight mb-6">
              Smarter <span className="font-playball font-normal">tools</span>{" "}
              for a more efficient team
            </h2>

            <p className="text-gray-600 text-base leading-relaxed">
              TrackForce simplifies teamwork with visibility, automation, and
              insights to boost productivity effortlessly.
            </p>
          </div>

          {/* Right Side - Accordion */}
          <div className="w-1/2 py-16">
            <div className="space-y-3">
              {faqs.map((faq, index) => {
                const isOpen = open === index;

                return (
                  <div
                    key={index}
                    className="cursor-pointer bg-gradient-to-b from-[#d6e8ff] to-[#e8f0ff] rounded-2xl transition-all duration-300 border-b border-[#0C59C05C] hover:border-transparent"
                    onClick={() => setOpen(isOpen ? null : index)}
                  >
                    <div className="px-6 pt-5 pb-4 flex items-center justify-between">
                      <h3 className="text-base font-bold text-gray-900">
                        {faq.question}
                      </h3>

                      <motion.span
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                        className="text-xl text-gray-600"
                      >
                        <IoIosArrowDown />
                      </motion.span>
                    </div>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.35, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <p className="px-6 pb-5 text-gray-600 text-sm leading-relaxed">
                            {faq.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>

            <div className="mt-8">
              <button className="group/button custom-button relative w-fit bg-gradient-to-r from-gray-700 via-gray-900 to-gray-700 text-white font-medium py-3 px-6 rounded-[14] flex gap-3 justify-between font-semibold items-center">
                <span className="group-hover/button:italic">Load More</span>
                <FaArrowRightLong className="group-hover/button:-rotate-[30deg] transition ease-in-out" />
                <motion.div
                  className="ml-2 absolute right-0"
                  animate={{
                    x: [0, -190, 0],
                    opacity: [0, 1, 0, 0, 1, 0],
                  }}
                  transition={{
                    duration: 7,
                    repeat: Infinity,
                    repeatType: "loop",
                  }}
                >
                  <Image
                    src={trackforce}
                    alt="TrackForce Logo"
                    className="w-8 h-8 group-hover:hidden"
                  />
                </motion.div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutWhyChooseUs;
