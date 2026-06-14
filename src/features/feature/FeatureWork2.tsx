'use client';

import FeaturesListMore from '@/components/all/FeaturesListMore';
import { motion, type Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';
const emailing = '/emailing.png';
const employeeList = '/employeeList.png';
const sidebar = '/sidebar.png';
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

const FeatureWork2 = () => {
    const features = [
        {
            title: "User Onboarding",
            description:
                "Track real-time online and idle statuses to understand team availability and active work time.",
        },
        {
            title: "Usage Monitoring",
            description:
                "Monitor application and system usage to ensure productive and secure work environments.",
        },
        {
            title: "Device Assignment.",
            description:
                "Assign and track devices across your workforce with complete visibility and accountability.",
        },
        {
            title: "Department Overview",
            description:
                "Get a clear view of every department's structure, members, and performance at a glance.",
        },
        {
            title: "Access Control",
            description:
                "Manage permissions and access levels to keep sensitive data and systems protected.",
        },
        {
            title: "Centralized Management",
            description:
                "Oversee employees, devices, and operations from one unified, centralized dashboard.",
        },
    ];
    return (
        <div className="mt-6 md:mt-10 lg:mt-28 text-white flex flex-col lg:flex-row gap-3 items-center justify-between overflow-hidden">
            <div className='w-full lg:w-1/2 relative h-[520px]'>
                {/* Main dashboard - center, fades in from slight scale */}
                <motion.div
                    className="object-cover absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[75%] drop-shadow-2xl z-10"
                    variants={imageVariants(0, 40, 0)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.1 }}
                >
                    <Image src={emailing} alt="Emailing" className="w-full" width={800} height={500} />
                </motion.div>

                {/* Sidebar - top right, slides from center */}
                <motion.div
                    className="object-cover absolute -top-20 right-0 w-[35%] drop-shadow-xl z-20"
                    variants={imageVariants(50, -50, 0.35)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.1 }}
                >
                    <Image src={sidebar} alt="Sidebar" className="w-full" width={400} height={300} />
                </motion.div>

                {/* Employee List - bottom left, slides from center */}
                <motion.div
                    className="object-cover absolute bottom-0 -left-10 w-[68%] drop-shadow-xl z-20"
                    variants={imageVariants(-50, 50, 0.35)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.1 }}
                >
                    <Image src={employeeList} alt="Activity Logs" className="w-full" width={400} height={300} />
                </motion.div>


            </div>
            <div className="w-full lg:w-1/2">
                <h2 className="text-4xl font-bold mb-8">
                    Manage Employees and Devices Effortlessly
                </h2>
                <p className="text-lg  mb-8">
                    Easily onboard employees, assign and manage devices, and monitor system usage securely. Ensure accountability and transparency across teams with centralized staff tracking and control.
                </p>

                <FeaturesListMore height={"360px"} features={features} txtColor='text-white' />

                <div className="mt-12">
                    <Link href="/documentation" className="group custom-button relative w-fit bg-gradient-to-r from-gray-700 via-gray-900 to-gray-700 text-white font-bold py-3 px-6 rounded-[16px] flex gap-3 justify-between items-center">
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
                                src={trackforce}
                                alt="TrackForce Logo"
                                width={400}
                                height={400}
                                className="w-8 h-8 group-hover:hidden"
                            />
                        </motion.div>
                    </Link>
                </div>
            </div>


        </div>
    );
};

export default FeatureWork2;