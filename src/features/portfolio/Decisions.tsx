// import React from 'react'

// const Decisions = () => {
//     return (
//         <div className='bg-[#DEEDFF] py-24'>
//             <div className='max-w-[1300] mx-auto'>
//                 <div className='flex justify-center'>
//                     <div className="relative inline-block mt-[2]">
//                         <h2 className="text-[42px] font-semibold leading-tight">

//                             <span className="font-playball font-normal">Data</span> {" "}
//                             That Drives Decisions
//                         </h2>
//                     </div>
//                 </div>

//                     <div className=" grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">

//                         {/* LEFT BIG CARD */}
//                         <div className="md:col-span-2 bg-white/60 backdrop-blur-md rounded-3xl p-8 shadow-md">
//                             <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
//                                 📈 Performance Analytics Suite
//                             </h2>

//                             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

//                                 {/* Monthly */}
//                                 <div className="rounded-2xl p-6 text-gray-800 bg-gradient-to-br from-purple-200 to-indigo-300 shadow-sm">
//                                     <h3 className="font-semibold text-lg mb-3">
//                                         Monthly Performance Overview
//                                     </h3>
//                                     <ul className="space-y-2 text-sm">
//                                         <li>• Attendance patterns</li>
//                                         <li>• Idle frequency trends</li>
//                                         <li>• Login / logout tracking</li>
//                                         <li>• Absence alerts</li>
//                                     </ul>
//                                 </div>

//                                 {/* Daily */}
//                                 <div className="rounded-2xl p-6 text-gray-800 bg-gradient-to-br from-green-200 to-teal-300 shadow-sm">
//                                     <h3 className="font-semibold text-lg mb-3">
//                                         Daily Intelligence
//                                     </h3>
//                                     <ul className="space-y-2 text-sm">
//                                         <li>• Work hours vs active hours</li>
//                                         <li>• Utilization rate</li>
//                                         <li>• Productivity intensity graph</li>
//                                     </ul>
//                                 </div>

//                             </div>
//                         </div>

//                         {/* RIGHT CARD */}
//                         <div className="bg-white/60 backdrop-blur-md rounded-3xl p-8 shadow-md">
//                             <h2 className="text-xl font-semibold text-gray-800 mb-6 flex items-center gap-2">
//                                 🚨 Risk Detection System
//                             </h2>

//                             <div className="rounded-2xl p-6 bg-gradient-to-br from-orange-200 to-amber-300 text-gray-800 shadow-sm">
//                                 <h3 className="font-semibold text-lg mb-3">
//                                     Color-coded alerts identify:
//                                 </h3>
//                                 <ul className="space-y-2 text-sm">
//                                     <li>• Late login behavior</li>
//                                     <li>• Missing working hours</li>
//                                     <li>• Excessive idle time</li>
//                                     <li>• Policy violations</li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>

//                     {/* Bottom text */}
//                     <p className="mt-10 text-gray-700 text-center text-lg">
//                         Leadership can act before problems escalate.
//                     </p>

//             </div>
//         </div>
//     )
// }

// export default Decisions








"use client";

import React from "react";
import { motion } from "framer-motion";

type DecisionsProps = { cms?: Record<string, string> }

const Decisions = ({ cms = {} }: DecisionsProps) => {

    const leftVariant = {
        hidden: { opacity: 0, x: -100, },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: {
                duration: 0.7,
                ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
            },
        },
    };

    const rightVariant = {
        hidden: { opacity: 0, x: 100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.7,
                delay: 0.15,
                ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number],
            },
        },
    };

    const fadeUp = {
        hidden: { opacity: 0, y: 40 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
                delay: i * 0.15,
            },
        }),
    };

    return (
        <div className="bg-[#DEEDFF] py-24 overflow-hidden bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: cms.bg_image ? `url(${cms.bg_image}), url('/decisionBg.png')` : `url('/decisionBg.png')` }}>
            <div className="max-w-[1300] mx-auto px-4">

                {/* Title */}
                <div className="flex justify-center">
                    <h2 className="text-[42px] font-semibold text-center">
                        {cms.heading || <><span className="font-playball font-normal">Data</span>{" "}That Drives Decisions</>}
                    </h2>
                </div>

                {/* GRID */}
                <div className=" grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">

                    {/* LEFT */}
                    <motion.div
                        variants={leftVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, margin: "-100px" }}
                        className="md:col-span-2 bg-[#ffffff8a] backdrop-blur-md rounded-3xl p-8 shadow-md"
                    >
                        <h2 className="text-xl font-semibold mb-6">
                            📈 Performance Analytics Suite
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">




                            <motion.div
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false }}
                                custom={0}
                                className="rounded-2xl p-6 bg-gradient-to-br from-purple-200 to-indigo-300"
                                style={{ background: "linear-gradient(180deg, #D3E5FF 0%, #C0B2FB 100%)" }}
                            >
                                <h3 className="font-semibold mb-2">Monthly Performance Overview</h3>
                                <ul className="text-sm space-y-1">
                                    <li>• Attendance patterns</li>
                                    <li>• Idle frequency trends</li>
                                    <li>• Login / logout tracking</li>
                                    <li>• Absence alerts</li>
                                </ul>
                            </motion.div>

                            <motion.div
                                variants={fadeUp}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false }}
                                custom={1}
                                className="rounded-2xl p-6 bg-gradient-to-br from-green-200 to-teal-300"
                                style={{ background: "linear-gradient(180deg, #D8E9FE 0%, #BEF8CE 100%)" }}
                            >
                                <h3 className="font-semibold mb-2">Daily Intelligence</h3>
                                <ul className="text-sm space-y-1">
                                    <li>• Work hours vs active hours</li>
                                    <li>• Utilization rate</li>
                                    <li>• Productivity intensity graph</li>
                                </ul>
                            </motion.div>

                        </div>
                    </motion.div>

                    {/* RIGHT */}
                    <motion.div
                        variants={rightVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, margin: "-100px" }}
                        className="bg-[#ffffff8a] backdrop-blur-md rounded-3xl p-8 shadow-md"
                    >
                        <h2 className="text-xl font-semibold mb-6">
                            🚨 Risk Detection System
                        </h2>

                        <motion.div
                            variants={fadeUp}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: false }}
                            custom={0}
                            className="rounded-2xl p-6 bg-gradient-to-br from-orange-200 to-amber-300"
                                                style={{ background: "linear-gradient(180deg, #DFE6F2 53.53%, #F2D7BF 100%)" }}
                        >
                            <h3 className="font-semibold mb-2">
                                Color-coded alerts identify:
                            </h3>
                            <ul className="text-sm space-y-1">
                                <li>• Late login behavior</li>
                                <li>• Missing working hours</li>
                                <li>• Excessive idle time</li>
                                <li>• Policy violations</li>
                            </ul>
                        </motion.div>
                    </motion.div>

                </div>

                <p className="mt-10 text-center text-lg text-gray-700">
                    Leadership can act before problems escalate.
                </p>

            </div>
        </div>
    );
};

export default Decisions;