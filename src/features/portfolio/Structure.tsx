// "use client"
// import React from 'react';
// import { motion } from 'framer-motion';
// import {
//     ShieldCheck,
//     Settings,
//     Users,
//     User,
//     UserCircle2,
//     ArrowRight
// } from 'lucide-react';
// import Image from 'next/image';
// import { FaArrowRightLong } from 'react-icons/fa6';
// const trackforce = '/trackforce.png';

// const Card = ({ icon: Icon, title, subtitle, horizontal = false, className = "" }) => {
//     return (
//         <div className={`relative bg-white/40 backdrop-blur-md border border-white/60 rounded-2xl p-6 shadow-sm flex ${horizontal ? 'flex-col' : 'flex-row items-center gap-4'} ${className}`}>
//             {/* Icon Box */}
//             <div className="flex-shrink-0 w-10 h-10 bg-blue-100/50 rounded-lg flex items-center justify-center text-slate-600">
//                 <Icon size={20} strokeWidth={1.5} />
//             </div>

//             {/* Divider Logic */}
//             {horizontal ? (
//                 <>
//                     <div className="w-full border-t border-dashed border-blue-300/50 my-4" />
//                     <div>
//                         <h4 className="font-bold text-slate-800 text-lg">{title}</h4>
//                         <p className="text-sm text-slate-500 mt-1 font-medium">{subtitle}</p>
//                     </div>
//                 </>
//             ) : (
//                 <>
//                     <div className="h-10 border-l border-dashed border-blue-300/50 mx-2" />
//                     <div>
//                         <h4 className="font-bold text-slate-800">{title}</h4>
//                         <p className="text-xs text-slate-500 font-medium">{subtitle}</p>
//                     </div>
//                 </>
//             )}
//         </div>
//     );
// };

// const Structure = () => {
//     return (
//         <section className="w-full py-12 px-4">
//             <div className="max-w-7xl mx-auto relative overflow-hidden bg-[#E9F3FF] rounded-[40px] border border-white/40 p-8 md:p-16 min-h-[600px] flex flex-col lg:flex-row items-center gap-12">

//                 {/* Background Blobs for Glassmorphism Effect */}
//                 <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-blue-400/20 blur-[120px] rounded-full pointer-events-none" />
//                 <div className="absolute bottom-[-5%] right-[10%] w-[400px] h-[400px] bg-purple-400/20 blur-[100px] rounded-full pointer-events-none" />

//                 {/* Left Side: Content */}
//                 <div className="w-1/2 flex flex-col justify-center items-start px-2 md:px-8">

//                     <h1 className="text-[42px] font-semibold mb-2  text-black">
//                         Built for Enterprise  Structure
//                     </h1>
//                     <p className="text-gray-600 text-base mb-6 max-w-lg mt-6">
//                         Hierarchy-Based Access Control, <br />
//                         TrackForce ensures secure, structured access:
//                     </p>
//                     <div className="">
//                         <button className="group custom-button relative w-fit bg-gradient-to-r from-gray-700 via-gray-900 to-gray-700 text-white font-bold py-3 px-6 rounded-[16px] flex gap-3 justify-between items-center">
//                             <span className='group-hover:italic '>See how it works</span> <FaArrowRightLong className='group-hover:-rotate-[30deg] transition ease-in-out' />
//                             <motion.div
//                                 className="ml-2 absolute right-0"
//                                 animate={{
//                                     x: [0, -190, 0],   // initial, move right, return
//                                     opacity: [0, 1, 0, 0, 1, 0], // fade out at the end of the move
//                                 }}
//                                 transition={{
//                                     duration: 7,
//                                     repeat: Infinity,
//                                     repeatType: 'loop',
//                                 }}
//                             >
//                                 <Image
//                                     width={400}
//                                     height={400}
//                                     src={trackforce}
//                                     alt="TrackForce Logo"
//                                     className="w-8 h-8 group-hover:hidden"
//                                 />
//                             </motion.div>
//                         </button>
//                     </div>
//                 </div>
//                 {/* Right Side: Hierarchy Cards */}
//                 <div className="relative z-10 w-full lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-4">

//                     {/* Top Row: Super Admin (Full Width) */}
//                     <Card
//                         className="md:col-span-2"
//                         icon={ShieldCheck}
//                         title="Super Admin"
//                         subtitle="Full system authority"
//                         horizontal={true}
//                     />

//                     {/* Middle Row */}
//                     <Card
//                         icon={Settings}
//                         title="Admin"
//                         subtitle="Organization-wide oversight"
//                         horizontal={false}
//                     />
//                     <Card
//                         icon={Users}
//                         title="Team Lead"
//                         subtitle="Team-level tracking"
//                         horizontal={true}
//                     />

//                     {/* Bottom Row */}
//                     <Card
//                         icon={User}
//                         title="Manager"
//                         subtitle="Department performance view"
//                         horizontal={false}
//                     />
//                     <Card
//                         icon={UserCircle2}
//                         title="Employee"
//                         subtitle="Personal analytics dashboard"
//                         horizontal={false}
//                     />
//                 </div>

//             </div>
//         </section>
//     );
// };

// export default Structure;




"use client";

import React from "react";
import { motion } from "framer-motion";
import {
    ShieldCheck,
    Settings,
    Users,
    User,
    UserCircle2,
} from "lucide-react";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";

const trackforce = "/trackforce.png";

// 🔥 Animation Variants (same as Decisions)
const leftVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: {
        opacity: 1,
        x: 0,
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
            delay: i * 0.1,
        },
    }),
};

// 🔹 Card Component (motion added)
const Card = ({
    icon: Icon,
    title,
    subtitle,
    horizontal = false,
    className = "",
    index = 0,
}: any) => {
    return (
        <motion.div
            variants={fadeUp}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className={`relative bg-white/40 backdrop-blur-md border border-white/60 rounded-2xl p-6 shadow-sm flex ${horizontal ? "flex-col" : "flex-row items-center gap-4"
                } ${className}`}
        >
            {/* Icon */}
            <div className="flex-shrink-0 w-10 h-10 bg-blue-100/50 rounded-lg flex items-center justify-center text-slate-600">
                <Icon size={20} strokeWidth={1.5} />
            </div>

            {/* Content */}
            {horizontal ? (
                <>
                    <div className="w-full border-t border-dashed border-blue-300/50 my-4" />
                    <div>
                        <h4 className="font-bold text-slate-800 text-lg">{title}</h4>
                        <p className="text-sm text-slate-500 mt-1 font-medium">
                            {subtitle}
                        </p>
                    </div>
                </>
            ) : (
                <>
                    <div className="h-10 border-l border-dashed border-blue-300/50 mx-2" />
                    <div>
                        <h4 className="font-bold text-slate-800">{title}</h4>
                        <p className="text-xs text-slate-500 font-medium">
                            {subtitle}
                        </p>
                    </div>
                </>
            )}
        </motion.div>
    );
};

const Structure = () => {
    return (
        <section className="w-full py-12 px-4">
            <div className="max-w-7xl mx-auto relative overflow-hidden bg-[#E9F3FF] rounded-[40px] border border-white/40 p-8 md:p-16 min-h-[600px] flex flex-col lg:flex-row items-center gap-12">

                {/* Background */}
                <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-blue-400/20 blur-[120px] rounded-full" />
                <div className="absolute bottom-[-5%] right-[10%] w-[400px] h-[400px] bg-purple-400/20 blur-[100px] rounded-full" />

                {/* LEFT */}
                <motion.div
                    variants={leftVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: "-100px" }}
                    className="w-full lg:w-2/5 flex flex-col justify-center items-start px-2 md:px-8"
                >
                    <h1 className="text-[42px] font-semibold mb-2 text-black">
                        Built for Enterprise Structure
                    </h1>

                    <p className="text-gray-600 text-base mb-6 max-w-lg mt-6">
                        Hierarchy-Based Access Control, <br />
                        TrackForce ensures secure, structured access:
                    </p>

                    <div className="">
                        <button className="group custom-button relative w-fit bg-gradient-to-r from-gray-700 via-gray-900 to-gray-700 text-white font-bold py-3 px-6 rounded-[16px] flex gap-3 justify-between items-center">
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
                        </button>
                    </div>
                </motion.div>

                {/* RIGHT */}
                <motion.div
                    variants={rightVariant}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: "-100px" }}
                    className="relative z-10 w-full lg:w-3/5 grid grid-cols-1 md:grid-cols-2 gap-4"
                >
                    <Card
                        index={0}
                        className="md:col-span-2"
                        icon={ShieldCheck}
                        title="Super Admin"
                        subtitle="Full system authority"
                        horizontal
                    />

                    <Card
                        index={1}
                        icon={Settings}
                        title="Admin"
                        subtitle="Organization-wide oversight"
                    />

                    <Card
                        index={2}
                        icon={Users}
                        title="Team Lead"
                        subtitle="Team-level tracking"
                        horizontal
                    />

                    <Card
                        index={3}
                        icon={User}
                        title="Manager"
                        subtitle="Department performance view"
                    />

                    <Card
                        index={4}
                        icon={UserCircle2}
                        title="Employee"
                        subtitle="Personal analytics dashboard"
                    />
                </motion.div>
            </div>
        </section>
    );
};

export default Structure;