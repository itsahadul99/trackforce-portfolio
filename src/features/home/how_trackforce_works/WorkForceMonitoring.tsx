'use client';

import FeaturesListMore from '@/components/all/FeaturesListMore';
import RichText from '@/components/shared/RichText';
import { motion, type Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';
import employeeList from '../../../../public/home/emailing.png';
import sidebar from '../../../../public/home/sidebar.png';
import emailing from '../../../../public/home/snapShots.png';
import trackforce from '../../../../public/trackforce.png';

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

type WorkForceMonitoringProps = { cms?: Record<string, string> }

const WorkForceMonitoring = ({ cms = {} }: WorkForceMonitoringProps) => {
    const features = [
        {
            title: cms.feature1_title || "App Tracking",
            description: cms.feature1_desc || "Understand how work hours are spent across tools and applications.",
        },
        {
            title: cms.feature2_title || "Website Insights",
            description: cms.feature2_desc || "See which websites support productive work and which create distractions across your team.",
        },
        {
            title: cms.feature3_title || "Workflow Visibility",
            description: cms.feature3_desc || "Get a clear view of how tasks move through your team so you can spot bottlenecks early.",
        },
    ];
    return (
        <div className="mt-16 sm:mt-20 lg:mt-28 text-white flex flex-col-reverse lg:flex-row gap-12 lg:gap-3 items-center lg:justify-between">
            <div className='w-full lg:w-1/2 relative h-[320px] sm:h-[420px] lg:h-[520px]'>
                {/* Main dashboard - center, fades in from slight scale */}
                <motion.div
                    className="object-cover absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[75%] drop-shadow-2xl z-10"
                    variants={imageVariants(0, 40, 0)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.1 }}
                >
                    <Image src={emailing} alt="Emailing" quality={90} className="w-full" />
                </motion.div>

                {/* Sidebar - top right, slides from center */}
                <motion.div
                    className="object-cover absolute -top-20 right-0 w-[35%] drop-shadow-xl z-20"
                    variants={imageVariants(50, -50, 0.35)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.1 }}
                >
                    <Image src={sidebar} alt="Sidebar" quality={90} className="w-full" />
                </motion.div>

                {/* Employee List - bottom left, slides from center */}
                <motion.div
                    className="object-cover absolute bottom-0 -left-10 w-[68%] drop-shadow-xl z-20"
                    variants={imageVariants(-50, 50, 0.35)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.1 }}
                >
                    <Image src={employeeList} alt="Activity Logs" quality={90} className="w-full" />
                </motion.div>


            </div>
            <div className="w-full lg:w-1/2">
                <div className="section_title_border w-fit text-[#0C59C0] rounded-full mb-6">
                    <div className="how_trackforce_works px-4 py-2 text-sm font-semibold">
                        {cms.badge || "WorkForce Monitoring"}
                    </div>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 lg:mb-8 leading-tight">
                    {cms.heading || "All-in-One Workforce Monitoring Platform"}
                </h2>
                <RichText className="text-sm sm:text-base lg:text-lg mb-6 lg:mb-8" html={cms.description || "Monitor teams, optimize performance, and maintain compliance — all from a single platform built for modern workplaces."} />

                <FeaturesListMore
                    height={"280px"}
                    features={features}
                    txtColor=""
                    activeTitleColor="text-white"
                    inactiveTitleColor="text-white/60 hover:text-white"
                    descColor="text-gray-200"
                />
                <div className="mt-10 lg:mt-12">
                    <Link href="/documentation" className="group custom-button relative w-fit bg-white text-black font-bold py-3 px-6 rounded-[16px] flex gap-3 justify-between items-center">
                        <span className='group-hover:italic'>See how it works</span> <FaArrowRightLong className='group-hover:-rotate-[30deg] transition ease-in-out' />
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
    );
};

export default WorkForceMonitoring;