'use client';

import FeaturesListMore from '@/components/all/FeaturesListMore';
import { motion, type Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';
import realD from '../../../public/portfolio/realD.png';
import realE from '../../../public/portfolio/realE.png';
import '../home/how_trackforce_works/howTrackforceworks.css';
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
type RealTimeProps = { cms?: Record<string, string> }

const RealTime = ({ cms = {} }: RealTimeProps) => {
    const features = [
        {
            title: "Live online / idle status tracking",
            description: "Track real-time online and idle statuses to understand team availability and active work time at a glance."
        },
        {
            title: "Active vs idle time comparison",
            description: "Compare productive work hours against idle periods to identify workflow bottlenecks and improve overall team focus."
        },
        {
            title: "Web & app usage analytics",
            description: "Gain insights into the specific tools, websites, and applications your team uses to complete their daily tasks."
        },
        {
            title: "Project-based time visualization",
            description: "View time distribution across different projects with visual charts, ensuring resources are allocated to high-priority goals."
        },
        {
            title: "Productivity performance score",
            description: "Generate objective productivity scores based on activity levels and goal completion to help teams reach their peak performance."
        }
    ];

    return (
        <div className='bg-[#DEEDFF] overflow-hidden bg-no-repeat bg-cover bg-center px-4'
            style={{ backgroundImage: cms.bg_image ? `url(${cms.bg_image}), url('/realTimeCommandCenter.png')` : `url('/realTimeCommandCenter.png')` }}>
            <div className="  max-w-[1300] mx-auto  py-24 text-[#2B2B2B] flex flex-col lg:flex-row items-center justify-between">

                <div className="w-full lg:w-1/2">

                    <h2 className="text-4xl font-bold mb-8">
                        {cms.heading || "Real-Time Command Center"}
                    </h2>
                    <div>
                        <h3 className="text-2xl font-bold">
                            Executive Dashboard
                        </h3>
                        <p className="text-lg  mb-8">
                            A powerful, data-driven overview of your entire organization:
                        </p>
                    </div>
                    {/* features list */}
                    <FeaturesListMore height="380" features={features} />
                    <div className='mt-6'>
                        <p>Clean design. Zero clutter. Instant clarity.</p>
                    </div>

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
                                    width={400}
                                    height={400}
                                    src={trackforce}
                                    alt="TrackForce Logo"
                                    className="w-8 h-8 group-hover:hidden"
                                />
                            </motion.div>
                        </Link>
                    </div>
                </div>

                <div className='w-full lg:w-1/2 relative h-[520px] '>

                    {/* Activity Logs - bottom left, slides from center */}
                    <motion.div
                        className="object-cover absolute top-40 left-10   z-20"
                        variants={imageVariants(-150, -150, 0.35)} // -bottom, -right, delay [-bottom = top, -right = left]
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.1 }}
                    >
                        <Image width={1200} height={800} quality={90} src={cms.image1 || realD} alt="Activity Logs" className="w-[430]" onError={(e) => { e.currentTarget.src = realD.src; }} />
                    </motion.div>

                    {/* Search Logs - bottom right, slides from center */}
                    <motion.div
                        className="object-cover absolute bottom-0 -right-10  z-20"
                        variants={imageVariants(50, 50, 0.35)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.1 }}
                    >
                        <Image width={1200} height={800} quality={90} src={cms.image2 || realE} alt="Search Logs" className="w-[400]" onError={(e) => { e.currentTarget.src = realE.src; }} />
                    </motion.div>
                </div>
            </div>


        </div>
    );
};

export default RealTime;