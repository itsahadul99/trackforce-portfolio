'use client';


import {
  FaCamera,
  FaKeyboard,
  FaComments,
  FaCalendarAlt,
} from "react-icons/fa";

import {
  MdScreenShare,
  MdOutlineWeb,
  MdOutlineApps,
  MdInsertDriveFile,
  MdSearch,
} from "react-icons/md";



import FeaturesList from '@/components/all/FeaturesList';
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

const Enterprise = () => {
    const features = [
  { icon: <FaCamera />, text: "Smart Screenshot Capture" },
  { icon: <MdScreenShare />, text: "Screen Recording Logs" },
  { icon: <MdOutlineWeb />, text: "Website Activity Tracking" },
  { icon: <MdOutlineApps />, text: "Application Usage Monitoring" },
  { icon: <FaKeyboard />, text: "Keystroke Detection" },
  { icon: <MdInsertDriveFile />, text: "File Transfer Monitoring" },
  { icon: <FaComments />, text: "Messaging & Social Media Tracking" },
  { icon: <MdSearch />, text: "Search Behavior Analytics" },
  { icon: <FaCalendarAlt />, text: "Online Meeting Detection" },
];
    return (
        <div className='bg-black py-24'>
            <div className="lg:w-[1200] xl:w-[1300] mx-auto text-white flex gap-3 items-center justify-between">
                <div className='w-1/2 relative h-[520px]'>
                    {/* Main dashboard - center, fades in from slight scale */}
                    <motion.div
                        className="object-cover absolute top-10 right-30 drop-shadow-2xl z-10"
                        variants={imageVariants(50, -40, 0)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.1 }}
                    >
                        <Image src={'/enterprise-1.png'} width={1200} height={800} alt="Emailing" className=" w-[400]" />
                    </motion.div>

                    {/* Employee List - bottom left, slides from center */}
                    <motion.div
                        className="object-cover absolute bottom-5 -left-5  drop-shadow-xl z-20"
                        variants={imageVariants(-50, 50, 0)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.1 }}
                    >
                        <Image src={'/enterprise-2.png'} width={1200} height={800} alt="Activity Logs" className="w-[400]" />
                    </motion.div>


                </div>
                <div className="w-1/2">

                    <h2 className="text-[42px] font-semibold text- leading-tight mb-6">
                        Enterprise-Level <span className="font-playball font-normal">Monitoring</span>{" "}
                        Engine
                    </h2>


                    <FeaturesList features={features} title="TrackForce gives organizations full operational transparency through:"/>
                    <p className='mt-4'>All modules include advanced filtering by employee, department, and date.
                        Complete visibility—without operational chaos.
                    </p>
                    <div className="mt-12">
                        <button className="group custom-button relative w-fit bg-white text-black font-bold py-3 px-6 rounded-[16px] flex gap-3 justify-between items-center">
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
                                    width={1200}
                                    height={800}
                                    src={trackforce}
                                    alt="TrackForce Logo"
                                    className="w-8 h-8 group-hover:hidden"
                                />
                            </motion.div>
                        </button>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default Enterprise;