"use client";

import { motion, Transition } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";


const commonTransition: Transition = {
    duration: 1.2,
    ease: "easeInOut",
    repeat: Infinity,
    repeatType: "loop",
    repeatDelay: 0.8
};


const PortfolioHero = () => {
    return (
        < section className="relative overflow-hidden bg-black pt-32 pb-20 bg-[url(/PortfolioHeroBg.png)] bg-cover bg-center" >
            {/* Background glow effects */}
            < div className="absolute inset-0" >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-600/20 rounded-full blur-[120px]" />
                <div className="absolute top-20 left-1/4 w-[300px] h-[300px] bg-purple-600/15 rounded-full blur-[100px]" />
                <div className="absolute top-10 right-1/4 w-[250px] h-[250px] bg-indigo-500/15 rounded-full blur-[100px]" />
            </div >
            <div className="relative z-10 text-center text-white max-w-[1300] mx-auto">
                {/* Top Badge */}
                <div className="mb-4 inline-flex items-center md:gap-4 *:text-nowrap px-4 md:px-16 py-3 rounded-full bg-white/30 backdrop-blur-md border border-white/20 text-xs gap-2 md:text-sm font-semibold text-gray-200 tracking-wide">
                    <span>Monitor smarter</span>
                    <span className="w-2 h-2 bg-gray-100 rounded-full"></span>
                    <span>Improve faster</span>
                    <span className="w-2 h-2 bg-gray-100 rounded-full"></span>
                    <span>Lead with data</span>
                </div>
                <h1 className="text-4xl lg:text-[42px] font-semibold leading-tight">
                    Workforce Intelligence for High-
                </h1>

                <div className="relative inline-block mt-[2]">
                    <h2 className="text-4xl lg:text-[42px] font-semibold leading-tight">
                        Performance {" "}
                        <span className="font-playball font-normal">Teams</span>
                    </h2>
                </div>
                <p className="text-gray-300 text-base mt-6 max-w-2xl mx-auto leading-relaxed">
                    An enterprise-grade employee monitoring & productivity intelligence platform developed by Akij iBOS Limited.
                </p>

                <div className="w-full flex justify-center">
                    <div className="relative flex flex-col md:flex-row w-fit gap-6 justify-center items-center mt-10">
                        {/* Gradient Button */}
                        <Link href="/contact" className="group w-76 flex justify-center items-center gap-2 px-8 py-4 rounded-2xl text-white font-semibold text-lg 
        bg-gradient-to-r from-blue-600 via-blue-500 to-purple-600 
        hover:opacity-90 transition-all duration-300">

                            Request Demo
                            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                        </Link>

                        {/* Outline Button */}
                        <Link href="/case-study" className="w-76 px-8 py-4 rounded-2xl text-white font-semibold text-lg 
        border border-white/40 
        hover:border-white hover:bg-white/5 
        transition-all duration-300">

                            View Full Case Study
                        </Link>
                        {/* book demo spark animation */}
                        <div className="absolute -left-8 -top-8" >
                            <motion.svg
                                width="37"
                                height="37"
                                viewBox="0 0 37 37"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <motion.path
                                    d="M22.3966 31.5582C22.3966 31.5582 16.7601 32.0442 11.4624 34.0293"
                                    fill="none"
                                    stroke="white"
                                    strokeOpacity="0.64"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={commonTransition}
                                />

                                <motion.path
                                    d="M24.4997 23.2532C17.4498 17.8954 8.26279 15.3839 2.49653 13.8603"
                                    fill="none"
                                    stroke="white"
                                    strokeOpacity="0.64"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={commonTransition}
                                />

                                <motion.path
                                    d="M33.6205 19.1061C33.035 14.4653 22.104 2.80171 22.104 2.80171"
                                    fill="none"
                                    stroke="white"
                                    strokeOpacity="0.64"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={commonTransition}
                                />
                            </motion.svg>


                        </div>
                    </div>
                </div>
            </div>
        </section >

    )
}

export default PortfolioHero