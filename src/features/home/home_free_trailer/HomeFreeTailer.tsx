"use client"

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaArrowRightLong } from 'react-icons/fa6';
import trackforce from '../../../../public/trackforce.png';
import dashboard from '../../../../public/dashboard.png';
import Link from 'next/link';

const HomeFreeTailer = () => {
    return (
        <div className="group/free_trailer relative overflow-hidden max-w-[1300] mx-4 sm:mx-6 lg:mx-auto min-h-[480px] lg:h-[450px] text-white flex flex-col lg:flex-row gap-8 lg:gap-20 items-center lg:justify-between pl-6 sm:pl-8 lg:pl-10 pr-6 sm:pr-8 lg:pr-0 py-10 lg:py-0 rounded-2xl px-4">
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover z-0"
            >
                <source src="/free-trailer.mp4" type="video/mp4" />
            </video>
            <div className="absolute inset-0  z-0" />
            <div className="w-full lg:w-1/2 relative z-10 text-center lg:text-left">
                <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold mb-6 text-white leading-tight">
                    Start Your 30-Day <br className="hidden sm:block" /> <span className="font-playball font-normal">Free</span>  TrackForce Trial
                </h2>
                <p className="text-sm sm:text-base lg:text-lg mb-6 lg:mb-8">
                    Monitor employee activity, productivity trends, and performance
                    metrics from one centralized dashboard – updated in real time for
                    faster, smarter decisions.
                </p>


                <div className="mt-8 lg:mt-12 flex flex-wrap justify-center lg:justify-start gap-4 lg:gap-5">
                    <a
                        href="https://app.trackforce.io/3/Professional/signup?trial=true"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className="group custom-button cursor-pointer relative w-fit bg-white text-black font-bold py-3 px-6 rounded-[16px] flex gap-3 justify-between items-center">
                            <span className='group-hover:italic '>Start Free Trial</span> <FaArrowRightLong className='group-hover:-rotate-[30deg] transition ease-in-out' />
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
                        </button>
                    </a>
                    <Link href="/contact" className='py-3 px-6 rounded-[16px] border cursor-pointer'>Book a Demo</Link>
                </div>
            </div>
            <div className="hidden lg:block w-1/2 relative z-10 h-[450px] overflow-hidden">
                <Image
                    src={dashboard}
                    alt="Dashboard"
                    width={1200}
                    height={800}
                    className="
                      absolute -bottom-110 -right-6 scale-110
                      transition-all duration-600 ease-in-out
                      group-hover/free_trailer:-translate-y-45

                    "
                />

            </div>
        </div>
    )
}

export default HomeFreeTailer