"use client";

import { motion, Transition } from "framer-motion";


const commonTransition: Transition = {
    duration: 1.2,
    ease: "easeInOut",
    repeat: Infinity,
    repeatType: "loop",
    repeatDelay: 0.8
};


const PricingHero = () => {
    return (
        < section className="relative overflow-hidden bg-[#FFF] pt-32 pb-20 bg-[url(/PriceHeroBg.png)] bg-cover bg-center" >
            {/* Background glow effects */}
            < div className="absolute inset-0" >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-600/20 rounded-full blur-[120px]" />
                <div className="absolute top-20 left-1/4 w-[300px] h-[300px] bg-purple-600/15 rounded-full blur-[100px]" />
                <div className="absolute top-10 right-1/4 w-[250px] h-[250px] bg-indigo-500/15 rounded-full blur-[100px]" />
            </div >
            <div className="relative z-10 text-center text-[#2B2B2B] max-w-[1300] mx-auto">
                <div className="section_title_border w-fit mx-auto text-black rounded-full mb-6">
                    <div className="how_trackforce_works px-4 py-2 text-sm font-semibold">
                        Pricing Plan
                    </div>
                </div>
                <h1 className="text-[42px] font-semibold leading-tight">
                    Pricing That Scales With
                </h1>

                <div className="relative inline-block mt-[2]">
                    <h2 className="text-[42px] font-semibold leading-tight">
                        Your {" "}
                        <span className="font-playball font-normal">Productivity Goals</span>
                    </h2>
                    {/* spark animation */}
                    <div className="absolute -right-13 -top-2 rotate-120" >
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
                <p className="text-[#2B2B2B] text-base mt-6 max-w-2xl mx-auto leading-relaxed">
                    Whether you manage a small startup or a large enterprise, TrackForce offers scalable plans that fit your monitoring and productivity needs.
                </p>
            </div>
        </section >

    )
}

export default PricingHero