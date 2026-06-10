"use client";

import { motion, type Variants } from 'framer-motion';
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import trackforce from "../../../public/trackforce.png";

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

const AboutVision = () => {
    return (
        <div className="lg:h-[75vh] max-w-[1300] mx-4 lg:mx-auto bg-gradient-to-r from-[#0a0a2e] via-[#0d1033] to-[#0a0a2e] rounded-3xl mt-12 lg:mt-24 p-6 md:p-10 lg:p-12 relative overflow-hidden bg-[url('/whyTStandBg.png')] bg-cover bg-center bg-no-repeat">
            {/* Glow effects */}
            <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-green-500/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-[120px]" />

            <div className="z-10  h-full flex flex-col lg:flex-row gap-12 justify-between items-center">
                <div className="w-full lg:w-[50%]">
                    <div className="relative w-full flex flex-col items-center gap-6 lg:block lg:gap-0">
                         {/* Time tracking image */}
                         <motion.div
                           className="z-20 relative lg:absolute lg:-top-44 lg:left-10"
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
                             className="w-[260px] sm:w-[320px] lg:w-[360] object-contain"
                           />
                         </motion.div>
                         {/* Ensure image overlay */}
                         <motion.div
                           className="z-20 relative lg:absolute lg:-bottom-[225px] lg:right-[70]"
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
                             className="w-[240px] sm:w-[280px] lg:w-[320] object-contain"
                           />
                         </motion.div>


                    </div>
                </div>
                <div className="w-full lg:w-[50%] h-full  flex items-center">
                    <div className="">
                        <div className='flex justify-start'>
                            <div className="section_title_border  w-fit  text-black rounded-full mb-6">
                                <div className="how_trackforce_works px-4 py-2 text-sm font-semibold">
                                    Vision
                                </div>
                            </div>
                        </div>
                        <h3
                            className={`text-2xl md:text-[32px] font-semibold leading-tight mb-4  text-white`}
                        >
                            Shaping the Future of Intelligent  <br />  and
                            <span className="font-playball font-normal"> Accountable </span>{" "}
                            Workplaces
                        </h3>

                        <p
                            className={`text-base leading-relaxed mb-6 text-gray-300`}
                        >
                            To become the leading global platform for workforce visibility. Empowering every organization to operate with clarity, confidence, and measurable impact through real-time insights and automation.
                        </p>



                        <div className="mt-12">
                            <button className="group custom-button relative w-fit bg-white text-black font-bold py-3 px-6 rounded-[16px] flex gap-3 justify-between items-center">
                                <span className='group-hover:italic '>Learn More</span> <FaArrowRightLong className='group-hover:-rotate-[30deg] transition ease-in-out' />
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
                                        width={32}
                                        height={32}
                                    />
                                </motion.div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutVision