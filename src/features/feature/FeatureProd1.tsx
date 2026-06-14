'use client';

import FeaturesListMore from '@/components/all/FeaturesListMore';
import { motion, type Variants } from 'framer-motion';
import Image from 'next/image';
import { FaArrowRightLong } from 'react-icons/fa6';
import '../home/how_trackforce_works/howTrackforceworks.css';
import dashboardOverview from '../../../public/home/dashboardOverviewFull.png';
import projectProgress from '../../../public/home/projectProgress.png';
import taskProgress from '../../../public/home/taskProgress.png';
import topEmployees from '../../../public/home/topEmployees.png';
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

type Props = {
    height?: number | string;
    features?: {
        title: string;
        description: string;
    }[];
    txtColor?: string;
    bgColor?: string;
      title?: string;
    subTitle?: string;
}

const FeatureProd1 =({title, subTitle, height = '400px', features, txtColor='text-black' }: Props) => {
    return (
        <div className="mt-28 text-white flex flex-col lg:flex-row gap-3 items-center justify-between">
            <div className="w-full lg:w-1/2">
                <h2 className="text-4xl font-bold mb-8">
                   {title}
                </h2>
                <p className="text-lg  mb-8">
                  {subTitle}
                </p>

                <FeaturesListMore height={"360px"} features={features} txtColor='text-white' />

                <div className="mt-12">
                    <button className="group custom-button relative w-fit bg-white text-black font-bold py-3 px-6 rounded-[16px] flex gap-3 justify-between items-center">
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
                                className="w-8 h-8 group-hover:hidden"
                                width={32}
                                height={32}
                            />
                        </motion.div>
                    </button>
                </div>
            </div>

            <div className='w-full lg:w-1/2 relative h-[520px]'>
                {/* Main dashboard - center, fades in from slight scale */}
                <motion.div
                    className="object-cover absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[75%] drop-shadow-2xl z-10"
                    variants={imageVariants(0, 40, 0)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.1 }}
                >
                    <Image src={dashboardOverview} alt="Productivity Dashboard" className="w-full" width={800} height={500} />
                </motion.div>

                {/* Employees - top right, slides from center */}
                <motion.div
                    className="object-cover absolute top-0 right-0 w-[45%] drop-shadow-xl z-20"
                    variants={imageVariants(50, -50, 0.35)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.1 }}
                >
                    <Image src={topEmployees} alt="Employees" className="w-full" width={400} height={300} />
                </motion.div>

                {/* Activity Logs - bottom left, slides from center */}
                <motion.div
                    className="object-cover absolute bottom-0 left-0 w-[40%] drop-shadow-xl z-20"
                    variants={imageVariants(-50, 50, 0.35)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.1 }}
                >
                    <Image src={projectProgress} alt="Activity Logs" className="w-full" width={400} height={300} />
                </motion.div>

                {/* Search Logs - bottom right, slides from center */}
                <motion.div
                    className="object-cover absolute bottom-0 right-0 w-[38%] drop-shadow-xl z-20"
                    variants={imageVariants(50, 50, 0.35)}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.1 }}
                >
                    <Image src={taskProgress} alt="Search Logs" className="w-full" width={400} height={300} />
                </motion.div>
            </div>
        </div>
    );
};

export default FeatureProd1;