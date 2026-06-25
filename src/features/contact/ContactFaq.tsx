"use client";

import { AnimatePresence, motion } from "framer-motion";

import Image from "next/image";
import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { IoIosArrowDown } from "react-icons/io";
import trackforce from "../../../public/trackforce.png";


const DEFAULT_FAQS = [
  {
    question: "1. What is TrackForce used for?",
    answer: "TrackForce is an advanced Employee Monitoring Software that helps businesses track productivity, monitor activity, and ensure data security through real-time analytics and detailed reports.",
  },
  {
    question: "2. Can TrackForce monitor remote employees?",
    answer: "Yes, TrackForce can monitor remote employees by tracking activity, applications used, websites visited, and productivity metrics in real time.",
  },
  {
    question: "3. How does TrackForce improve productivity?",
    answer: "It provides analytics, reports, and activity tracking so managers can identify inefficiencies and improve workflow.",
  },
  {
    question: "4. What kind of activities can TrackForce monitor?",
    answer: "TrackForce can monitor app usage, websites visited, screenshots, keystrokes, and productivity patterns.",
  },
  {
    question: "5. Is employee monitoring legal and ethical?",
    answer: "Yes, when implemented transparently and in compliance with local laws and company policies.",
  },
  {
    question: "6. Does TrackForce work on Windows, macOS, and Linux?",
    answer: "Yes, TrackForce supports Windows, macOS, and Linux, so you can monitor your entire workforce across different operating systems from a single dashboard.",
  },
  {
    question: "7. Is my company's data secure with TrackForce?",
    answer: "Absolutely. TrackForce uses encrypted data transfer and secure cloud storage, with role-based access controls to keep your monitoring data protected at all times.",
  },
];

const INITIAL_COUNT = 5;

type ContactFaqProps = { cms?: Record<string, string> }

const ContactFaq = ({ cms = {} }: ContactFaqProps) => {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [showAll, setShowAll] = useState(false);

  const faqs = DEFAULT_FAQS.map((f, i) => ({
    question: cms[`faq${i + 1}_q`] || f.question,
    answer: cms[`faq${i + 1}_a`] || f.answer,
  }));

  const visibleFaqs = showAll ? faqs : faqs.slice(0, INITIAL_COUNT);
  return (
    <div className="w-full xl:w-1/2">
      <div className="flex items-center justify-center">
        <h2 className="text-[42px] font-semibold text-[#2B2B2B] mb-8">
          {cms.heading || "FAQ"}
        </h2>
      </div>
      <div className="space-y-3">
        {visibleFaqs.map((faq, index) => {
          const isOpen = openFaq === index;
          return (
            <div
              key={index}
              className="cursor-pointer bg-gradient-to-b from-[#d6e8ff] to-[#e8f0ff] rounded-2xl transition-all duration-300 border-b border-[#0C59C05C] hover:border-transparent"
              onClick={() => setOpenFaq(isOpen ? null : index)}
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

      <div className="mt-8 group/button">
        <button
          type="button"
          onClick={() => setShowAll((prev) => !prev)}
          className="group/button custom-button relative w-fit bg-gradient-to-r from-gray-700 via-gray-900 to-gray-700 text-white font-medium py-3 px-6 rounded-[14] flex gap-3 justify-between font-semibold items-center"
        >
          <span className='group-hover/button:italic '>{showAll ? "Show Less" : "Load More"}</span> <FaArrowRightLong className={`transition ease-in-out group-hover/button:-rotate-[30deg] ${showAll ? "rotate-90" : ""}`} />
          <motion.div
            className="ml-2 absolute right-0"
            animate={{
              x: [0, -190, 0],   // initial, move right, return
              opacity: [0, 1, 0, 0, 1, 0], // fade out at the end of the move
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
        </button>
      </div>
    </div>

  )
}

export default ContactFaq