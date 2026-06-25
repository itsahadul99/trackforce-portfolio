
"use client";
import { AnimatePresence, motion } from "framer-motion";
import Image from 'next/image';
import { useState } from "react";
import { FaArrowRightLong } from 'react-icons/fa6';
import { IoIosArrowDown } from "react-icons/io";
import faqBg from "../../../../public/faqBg.png";
import trackforce from '../../../../public/trackforce.png';
import type { CmsFaq } from "@/lib/cms";

const HARDCODED_FAQS = [
    { question: "1. What is TrackForce used for?", answer: "TrackForce is an advanced Employee Monitoring Software that helps businesses track productivity, monitor activity, and ensure data security through real-time analytics and detailed reports." },
    { question: "2. Can TrackForce monitor remote employees?", answer: "Yes, TrackForce can monitor remote employees by tracking activity, applications used, websites visited, and productivity metrics in real time." },
    { question: "3. How does TrackForce improve productivity?", answer: "It provides analytics, reports, and activity tracking so managers can identify inefficiencies and improve workflow." },
    { question: "4. What kind of activities can TrackForce monitor?", answer: "TrackForce can monitor app usage, websites visited, screenshots, keystrokes, and productivity patterns." },
    { question: "5. Is employee monitoring legal and ethical?", answer: "Yes, when implemented transparently and in compliance with local laws and company policies." },
    { question: "6. Does TrackForce work on Windows, macOS, and Linux?", answer: "Yes, TrackForce supports Windows, macOS, and Linux, so you can monitor your entire workforce across different operating systems from a single dashboard." },
    { question: "7. Is my company's data secure with TrackForce?", answer: "Absolutely. TrackForce uses encrypted data transfer and secure cloud storage, with role-based access controls to keep your monitoring data protected at all times." },
];

const INITIAL_COUNT = 5;

interface HomeFaqProps {
    initialFaqs?: CmsFaq[];
}

const HomeFaq = ({ initialFaqs }: HomeFaqProps) => {
    const rawFaqs = initialFaqs && initialFaqs.length > 0
        ? initialFaqs.map((f, i) => ({ question: `${i + 1}. ${f.question}`, answer: f.answer }))
        : HARDCODED_FAQS;
    const faqs = rawFaqs;
    const [open, setOpen] = useState<number | null>(0);
    const [isHovered, setIsHovered] = useState(false);
    const [showAll, setShowAll] = useState(false);

    const visibleFaqs = showAll ? faqs : faqs.slice(0, INITIAL_COUNT);

    return (
        /* 1. Added mouse enter/leave listeners to track the container hover state */
        /* 2. Fixed 'max-w-[1300]' to 'max-w-[1300px]' */
        <div
            className="flex flex-col lg:flex-row lg:justify-between gap-8 lg:gap-2 max-w-[1300px] mx-auto px-4 sm:px-6 xl:px-0 relative overflow-hidden"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >

            {/* 3. Replaced standard div with motion.div for the background slide-up */}
            <motion.div
                className="absolute inset-0 pointer-events-none"
                initial={{ y: "100%" }}
                animate={{ y: isHovered ? "0%" : "100%" }}
                transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                    mass: 0.8
                }}
            >
                <Image
                    src={faqBg}
                    alt="FAQ Background"
                    quality={90}
                    className="w-full h-full object-contain"
                />
            </motion.div>

            {/* Added z-10 to content structures to keep them layered cleanly above the background */}
            <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left z-10">
                <div className="content_title_border_new w-fit mb-1">
                    <div className="px-4 py-1 text-sm font-semibold content_title_text_new">
                        FAQ
                    </div>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold mb-2 text-black leading-tight">
                    Got a <span className="font-playball font-normal">Question?</span> <br className="hidden sm:block" />
                    We&apos;re Here to Help
                </h2>
                <p className="text-gray-600 text-sm sm:text-base mb-6 max-w-lg mt-6">
                    Track employee activity, productivity, and work patterns in one place without disrupting everyday workflows.
                </p>
            </div>

            <div className="w-full lg:w-1/2 py-8 lg:py-16 px-0 sm:px-2 lg:px-6 z-10">
                <div className="space-y-3">
                    {visibleFaqs.map((faq, index) => {
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

                <div className="mt-3">
                    <button
                        type="button"
                        onClick={() => setShowAll((prev) => !prev)}
                        className="group/button custom-button relative w-fit bg-gradient-to-r from-gray-700 via-gray-900 to-gray-700 text-white font-medium py-3 px-6 rounded-[14px] flex gap-3 justify-between font-semibold items-center"
                    >
                        <span className="group-hover/button:italic">{showAll ? "Show Less" : "Load More"}</span>
                        <FaArrowRightLong className={`transition ease-in-out group-hover/button:-rotate-[30deg] ${showAll ? "rotate-90" : ""}`} />
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
                                className="w-8 h-8 group-hover/button:hidden"
                            />
                        </motion.div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HomeFaq;








