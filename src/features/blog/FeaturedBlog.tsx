
"use client";

import { motion } from 'framer-motion';
import Image from "next/image";
import { FaArrowRightLong } from 'react-icons/fa6';


const FeaturedBlog = () => {
    return (
        <section className="lg:w-[1200] xl:w-[1300] mx-auto px-6 lg:px-0 mt-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center  rounded-2xl overflow-hidden ">
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="relative w-full h-[320px] lg:h-[380px] "
                >
                    <Image
                        src="/feature-blog.png"
                        alt="Fortune 100 Company Optimizes Hybrid Work"
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover rounded-2xl"
                        priority
                    />
                </motion.div>

                <motion.div
                    initial={{ x: 100, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    className="p-8 lg:p-10"
                >
                    <div className='flex'>
                        <div className="flex justify-center ">
                            <div className="content_title_border w-fit text-[#0C59C0] rounded-full">
                                <div className="px-4 py-2 text-sm font-semibold">Software</div>
                            </div>
                        </div>
                    </div>
                    <h2 className="text-[42px] font-semibold text-black">
                        Fortune 100 Company <br /> Optimizes  <span className="font-playball font-normal">Hybrid Work</span>
                    </h2>
                    <div className="mt-5">
                        <p className="text-sm text-gray-500 mb-2">April 15, 2025</p>
                        <p className="text-[15px] text-gray-600 leading-relaxed mb-8 max-w-xl">
                            A Fortune 100 company tracks remote vs. in-office productivity by
                            centralizing employee location and activity data in a single
                            dashboard, revealing policy violations and performance gaps.
                        </p>
                    </div>
                    <div className="">
                        <button className="group custom-button relative w-fit bg-gradient-to-r from-gray-700 via-gray-900 to-gray-700 text-white font-bold py-3 px-6 rounded-[16px] flex gap-3 justify-between items-center">
                            <span className='group-hover:italic '>Book a Demo</span> <FaArrowRightLong className='group-hover:-rotate-[30deg] transition ease-in-out' />
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
                                    src={'/trackforce.png'}
                                    alt="TrackForce Logo"
                                    width={1200}
                                    height={800}
                                    className="w-8 h-8 group-hover:hidden"
                                />
                            </motion.div>
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default FeaturedBlog;
