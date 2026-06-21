"use client";

import { motion, type Variants } from 'framer-motion';
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import trackforce from "../../../public/trackforce.png";
import coreValue from '../../../public/about/coreValue.png';
import Link from 'next/link';
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
const AboutValues = () => {
    return (
        <div className='w-full bg-[url("/ourValues.png")] bg-cover bg-center bg-no-repeat overflow-hidden py-12 lg:py-24 px-4'>
            <div className='flex flex-col lg:flex-row justify-between items-center gap-10 max-w-[1300] mx-auto px-4 lg:px-0'>
                <div className="w-full lg:w-[50%]">
                    <div className="flex flex-col justify-center">
                        <div className="content_title_border_new w-fit mb-1">
                            <div className="px-4 py-2 text-sm font-semibold content_title_text_new">
                                Values
                            </div>
                        </div>

                        <h3
                            className={`text-2xl md:text-[32px] font-semibold leading-tight mb-4 text-black`}
                        >
                            Core Principles That Drive  <br />
                            <span className="font-playball font-normal">Transparency</span> {" "}
                            and Excellence
                        </h3>

                        <p
                            className={`text-base leading-relaxed mb-6 text-gray-600`}
                        >
                            We believe in transparency, integrity, and innovation. Every solution we build reflects our commitment to accountability, data accuracy, and empowering people with technology that makes work simpler and smarter.
                        </p>

                        <div className="">
                            <Link href="/feature" className="group custom-button relative w-fit bg-gradient-to-r from-gray-700 via-gray-900 to-gray-700 text-white font-bold py-3 px-6 rounded-[16px] flex gap-3 justify-between items-center">
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
                                    />
                                </motion.div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="w-full lg:w-[50%]">
                    <div className="relative w-full flex flex-col items-center gap-6 lg:flex-row lg:justify-end lg:gap-0">
                        <motion.div
                            className="z-20 relative lg:absolute lg:-top-48 lg:right-14"
                            variants={imageVariants(50, -50, 0.35)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.1 }}
                        >
                            <Image
                                src={coreValue}
                                alt="Case Study Hero"
                                width={1200}
                                height={600}
                                quality={90}
                                className="w-[280px] sm:w-[340px] lg:w-[400] object-contain"
                            />
                        </motion.div>

                        {/* Center Card (Welcome) */}
                        <motion.div
                            className="z-20 relative lg:absolute lg:-bottom-52 lg:left-6"
                            variants={imageVariants(-50, 50, 0.35)}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false, amount: 0.1 }}
                        >
                            <Image
                                src="/values2.png"
                                alt="Case Study Hero"
                                width={1200}
                                height={600}
                                quality={90}
                                className="w-[240px] sm:w-[300px] lg:w-[350] object-contain"
                            />
                        </motion.div>


                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutValues