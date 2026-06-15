'use client';

import FeaturesListMore from '@/components/all/FeaturesListMore';
import { motion, type Variants } from 'framer-motion';
import Image from 'next/image';
import { FaArrowRightLong } from 'react-icons/fa6';
import dashboardOverview from '../../../../public/home/dashboardOverviewFull.png';
import projectProgress from '../../../../public/home/projectProgress.png';
import taskProgress from '../../../../public/home/taskProgress.png';
import topEmployees from '../../../../public/home/topEmployees.png';
import trackforce from '../../../../public/trackforce.png';
import './howTrackforceworks.css';
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

const ProductivityDashboard = () => {
    const features = [
        {
            title: "Live activity tracking",
            description:
                "TrackForce boosts operational efficiency by optimizing workflows, reducing manual overhead, and enabling teams to execute faster with precision.",
        },
        {
            title: "Productivity trend analysis",
            description:
                "Visualize performance trends with intuitive charts that reveal productivity patterns at a glance.",
        },
        {
            title: "Workflow and time allocation insights",
            description:
                "See where time goes across projects and tasks to balance workloads and plan smarter.",
        },
    ];
    return (
        <div className="mt-16 sm:mt-20 lg:mt-28 text-white flex flex-col lg:flex-row gap-12 lg:gap-3 items-center lg:justify-between">
            <div className="w-full lg:w-1/2">
                <div className="section_title_border w-fit text-[#0C59C0] rounded-full mb-6">
                    <div className="how_trackforce_works px-4 py-2 text-sm font-semibold">
                        Productivity Dashboard
                    </div>
                </div>

                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 lg:mb-8 leading-tight">
                    Real-Time Dashboard for Complete Visibility
                </h2>
                <p className="text-sm sm:text-base lg:text-lg mb-6 lg:mb-8">
                    Monitor employee activity, productivity trends, and performance
                    metrics from one centralized dashboard – updated in real time for
                    faster, smarter decisions.
                </p>

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
                        <span className='group-hover:italic '>See how it works</span> <FaArrowRightLong className='group-hover:-rotate-[30deg] transition ease-in-out' />
                        <motion.div
                            className="ml-2 absolute right-0"
                            animate={{
                                x: [0, -190, 0],
                                opacity: [0, 1, 0, 0, 1, 0],
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

            <div className='w-full lg:w-1/2 relative h-[320px] sm:h-[420px] lg:h-[520px]'>
                {/* Main dashboard - center, fades in from slight scale */}
                <motion.div
                    className="object-cover absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[75%] drop-shadow-2xl z-10"
                    variants={imageVariants(0, 40, 0)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.1 }}
                >
                    <Image src={dashboardOverview} alt="Productivity Dashboard" quality={90} className="w-full" />
                </motion.div>

                {/* Employees - top right, slides from center */}
                <motion.div
                    className="object-cover absolute top-0 right-0 w-[45%] drop-shadow-xl z-20"
                    variants={imageVariants(50, -50, 0.35)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.1 }}
                >
                    <Image src={topEmployees} alt="Employees" quality={90} className="w-full" />
                </motion.div>

                {/* Activity Logs - bottom left, slides from center */}
                <motion.div
                    className="object-cover absolute bottom-0 left-0 w-[40%] drop-shadow-xl z-20"
                    variants={imageVariants(-50, 50, 0.35)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.1 }}
                >
                    <Image src={projectProgress} alt="Activity Logs" quality={90} className="w-full" />
                </motion.div>

                {/* Search Logs - bottom right, slides from center */}
                <motion.div
                    className="object-cover absolute bottom-0 right-0 w-[38%] drop-shadow-xl z-20"
                    variants={imageVariants(50, 50, 0.35)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.1 }}
                >
                    <Image src={taskProgress} alt="Search Logs" quality={90} className="w-full" />
                </motion.div>
            </div>
        </div>
    );
};

export default ProductivityDashboard;