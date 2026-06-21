'use client';

import FeaturesList from '@/components/all/FeaturesList';
import { motion, type Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRightLong, FaCircle } from 'react-icons/fa6';
import di1 from '../../../public/portfolio/di1.png';
import di2 from '../../../public/portfolio/di2.png';
import di3 from '../../../public/portfolio/di3.png';
import '../home/how_trackforce_works/howTrackforceworks.css';
const trackforce = '/trackforce.png'


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

const Intellengence = () => {
    
const features = [
  { icon: <span className='text-[8px]'><FaCircle /></span>, text: "CPU & RAM usage" },
  { icon: <span className='text-[8px]'><FaCircle /></span>, text: "IP & MAC address" },
  { icon: <span className='text-[8px]'><FaCircle /></span>, text: "OS information" },
  { icon: <span className='text-[8px]'><FaCircle /></span>, text: "Agent version" },
  { icon: <span className='text-[8px]'><FaCircle /></span>, text: "Real-time system performance" },
];
    return (

        <div className=" py-24 bg-[url('/deivceInteBg.png')] bg-no-repeat bg-cover bg-center px-4">
            <div className="max-w-[1300] mx-auto text-white flex gap-3 items-center justify-between">
                <div className="w-full lg:w-1/2">
                    <h2 className="text-[42px] font-semibold text- leading-tight mb-6">
                        Device Intelligence<span className="font-playball font-normal"> {" "}Layer</span>{" "}

                    </h2>

                    <p className="text-lg  mb-8">
                        TrackForce doesn’t just monitor activity — it monitors systems.
                    </p>

                  <FeaturesList features={features} title='Each connected device logs:'/>

                    <div className="mt-12">
                        <Link href="/documentation" className="group custom-button relative w-fit bg-white text-black font-bold py-3 px-6 rounded-[16px] flex gap-3 justify-between items-center">
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
                                    width={1200} height={800}
                                    src={trackforce}
                                    alt="TrackForce Logo"
                                    className="w-8 h-8 group-hover:hidden"
                                />
                            </motion.div>
                        </Link>
                    </div>
                </div>

                <div className='w-full lg:w-1/2 relative h-[520px]'>

                    {/* Employees - top right, slides from center */}
                    <motion.div
                        className="object-cover absolute top-10 right-20  drop-shadow-xl z-20"
                        variants={imageVariants(0, -50, 0.35)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.1 }}
                    >
                        <Image src={di1} width={1200} height={800} quality={90} alt="Employees" className="w-[480]" />
                    </motion.div>

                    {/* Activity Logs - bottom left, slides from center */}
                    <motion.div
                        className="object-cover absolute bottom-10 left-10  drop-shadow-xl z-20"
                        variants={imageVariants(-50, 50, 0.35)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.1 }}
                    >
                        <Image src={di2} width={1200} height={800} quality={90} alt="Activity Logs" className="w-[250]" />
                    </motion.div>

                    {/* Search Logs - bottom right, slides from center */}
                    <motion.div
                        className="object-cover absolute bottom-8 right-32  drop-shadow-xl z-20"
                        variants={imageVariants(50, 50, 0.35)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.1 }}
                    >
                        <Image src={di3} width={1200} height={800} quality={90} alt="Search Logs" className="w-[280]" />
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Intellengence;