'use client';

import { motion, type Variants } from 'framer-motion';
import Image from 'next/image';
import { useState } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import '../home/how_trackforce_works/howTrackforceworks.css';
import FeaturesListMore from '@/components/all/FeaturesListMore';
const portEmployees = '/employees.png'
const portOverview = '/portOverview.png'
const trackforce = '/trackforce.png';

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

const Designed = () => {
    const features = [
        {
            title: "Dashboard-first clarity",
            description:
                "Track real-time online and idle statuses to understand team availability and active work time.",
        },
        {
            title: "Visual performance indicators",
            description:
                "Quickly interpret team productivity through intuitive charts, graphs, and visual cues that highlight performance trends.",
        },
        {
            title: "Risk-level color coding",
            description:
                "Identify potential issues instantly with color-coded alerts that highlight risks like inactivity, delays, or unusual behavior.",
        },
        {
            title: "Minimal admin friction",
            description:
                "Simplified controls and automation reduce manual effort, allowing administrators to manage teams efficiently with minimal overhead.",
        },
        {
            title: "Fast filtering & reporting",
            description:
                "Generate detailed reports and apply smart filters to analyze performance data quickly and make informed decisions faster.",
        },
    ];
    return (
        <div className='bg-[#DEEDFF] '>
            <div className="  lg:w-[1200] xl:w-[1300] mx-auto  py-24 text-[#2B2B2B] flex items-center justify-between">

                <div className="w-1/2 h-[600]">

                    <h2 className="text-[42px] font-semibold text- leading-tight mb-6">
                        Designed for  Makers <span className="font-playball font-normal">Decision</span>{" "}
                    </h2>
                    <div className='mb-10'>
                        <p>The UX strategy focused on:</p>
                    </div>
                    {/* features list */}
                    <FeaturesListMore height="380" features={features} />
                    <div className='mt-6'>
                        <p>No technical complexity. Just actionable insights.</p>
                    </div>

                    <div className="mt-12">
                        <button className="group custom-button relative w-fit bg-gradient-to-r from-gray-700 via-gray-900 to-gray-700 text-white font-bold py-3 px-6 rounded-[16px] flex gap-3 justify-between items-center">
                            <span className='group-hover:italic '>See how it works</span> <FaArrowRightLong className='group-hover:-rotate-[30deg] transition ease-in-out' />
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
                                    width={400}
                                    height={400}
                                    src={trackforce}
                                    alt="TrackForce Logo"
                                    className="w-8 h-8 group-hover:hidden"
                                />
                            </motion.div>
                        </button>
                    </div>
                </div>

                <div className='w-1/2 relative h-[520] '>

                    {/* Activity Logs - bottom left, slides from center */}
                    <motion.div
                        className="object-cover absolute top-0 left-10   z-20"
                        variants={imageVariants(-150, -150, 0.35)} // -bottom, -right, delay [-bottom = top, -right = left]
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.1 }}
                    >
                        <Image width={1200} height={800} src={'/designed-1.png'} alt="Activity Logs" className="w-[350]" />
                    </motion.div>

                    {/* Search Logs - bottom right, slides from center */}
                    <motion.div
                        className="object-cover absolute bottom-0 right-5  z-20"
                        variants={imageVariants(50, 50, 0.35)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.1 }}
                    >
                        <Image width={1200} height={800} src={'/designed-2.png'} alt="Search Logs" className="w-[450]" />
                    </motion.div>
                    {/* Search Logs - bottom right, slides from center */}
                    <motion.div
                        className="object-cover absolute top-5 -right-5  z-20"
                        variants={imageVariants(50, 0, 0.35)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.1 }}
                    >
                        <Image width={1200} height={800} src={'/designed-3.png'} alt="Search Logs" className="w-[350]" />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Designed;