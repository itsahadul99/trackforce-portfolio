
"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from 'next/image';
import { useState } from "react";
import { FaArrowRightLong } from 'react-icons/fa6';
import { IoIosArrowDown } from "react-icons/io";
import trackforce from '../../../../public/trackforce.png';

const faqs = [
    {
        question: "1. What is TrackForce used for?",
        answer:
            "TrackForce is an advanced Employee Monitoring Software that helps businesses track productivity, monitor activity, and ensure data security through real-time analytics and detailed reports.",
    },
    {
        question: "2. Can TrackForce monitor remote employees?",
        answer:
            "Yes, TrackForce can monitor remote employees by tracking activity, applications used, websites visited, and productivity metrics in real time.",
    },
    {
        question: "3. How does TrackForce improve productivity?",
        answer:
            "It provides analytics, reports, and activity tracking so managers can identify inefficiencies and improve workflow.",
    },
    {
        question: "4. What kind of activities can TrackForce monitor?",
        answer:
            "TrackForce can monitor app usage, websites visited, screenshots, keystrokes, and productivity patterns.",
    },
    {
        question: "5. Is employee monitoring legal and ethical?",
        answer:
            "Yes, when implemented transparently and in compliance with local laws and company policies.",
    },
];

const HomeFaq = () => {
    const [open, setOpen] = useState<number | null>(0);

    return (
        <div className="flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-2 max-w-[1300] mx-auto px-4 sm:px-6 xl:px-0">
            <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
                <div className="content_title_border_new w-fit  mb-1">
                    <div className="px-4 py-1 text-sm font-semibold content_title_text_new">
                        FAQ
                    </div>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold mb-2 text-black leading-tight">
                    Got a <span className="font-playball font-normal">Question?</span> <br className="hidden sm:block" />
                    We&apos;re Here to Help
                </h1>
                <p className="text-gray-600 text-sm sm:text-base mb-6 max-w-lg mt-6">
                    Track employee activity, productivity, and work patterns in one place without disrupting everyday workflows.
                </p>
             <div className="">
              <button className="group custom-button relative w-fit bg-gradient-to-r from-gray-700 via-gray-900 to-gray-700 text-white font-bold py-3 px-6 rounded-[16px] flex gap-3 justify-between items-center">
                <span className='group-hover:italic '>Book a Demo</span> <FaArrowRightLong className='group-hover:-rotate-[30deg] transition ease-in-out' />
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
            <div className="w-full lg:w-1/2 py-8 lg:py-16 px-0 sm:px-2 lg:px-6">
                <div className="space-y-3">
                    {faqs.map((faq, index) => {
                        const isOpen = open === index;

                        return (
                            <div
                                key={index}
                                className="cursor-pointer bg-gradient-to-b from-[#d6e8ff] to-[#e8f0ff] rounded-2xl transition-all duration-300 border-b border-[#0C59C05C] hover:border-transparent"
                                onClick={() => setOpen(isOpen ? null : index)}
                            >
                                <div className="px-5 sm:px-6 pt-4 sm:pt-5 pb-3 sm:pb-4 flex items-center justify-between gap-3">
                                    <h3 className="text-sm sm:text-base font-bold text-gray-900 text-left">
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
                                            <p className="px-5 sm:px-6 pb-4 sm:pb-5 text-gray-600 text-xs sm:text-sm leading-relaxed text-left">
                                                {faq.answer}
                                            </p>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        );
                    })}
                </div>

                <div className="mt-2 group/button">
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
    );
};

export default HomeFaq;









