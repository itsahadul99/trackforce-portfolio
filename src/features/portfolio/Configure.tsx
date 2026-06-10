

// "use client"
// import { motion } from 'framer-motion';
// import Image from 'next/image';
// import { FaArrowRightLong } from 'react-icons/fa6';
// // Importing specific icons to match your image
// import { Monitor, Camera, Receipt, Sun, Languages, Users } from 'lucide-react';

// const trackforce = '/trackforce.png';

// const Configure = () => {
//     return (
//         <section className="w-full py-24 bg-[#DEEDFF]">
//             <div className='max-w-[1300] mx-auto'>
//                 <div className="flex flex-col md:flex-row gap-8 w-full px-4">

//                     {/* Left div: The Feature Grid Design */}
//                     <div className="relative w-full lg:w-3/5 h-[600px] grid grid-cols-2 gap-4">

//                         {/* Card 1 */}
//                         <div className="bg-gradient-to-br from-[#A5D8EB] via-[#BDE4F1] to-[#7ED1E6] rounded-[32px] p-6 flex flex-col items-center justify-center border border-white/20 shadow-sm">
//                             <div className="w-12 h-12 bg-white/80 rounded-full flex items-center justify-center mb-4 shadow-sm">
//                                 <Monitor size={20} className="text-slate-700" />
//                             </div>
//                             <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent mb-4" />
//                             <p className="text-center font-bold text-slate-800 leading-tight">Custom<br />monitoring policies</p>
//                         </div>

//                         {/* Card 2 */}
//                         <div className="bg-gradient-to-br from-[#D1D8FB] via-[#E2E6FF] to-[#B9C1FF] rounded-[32px] p-6 flex flex-col items-center justify-center border border-white/20 shadow-sm">
//                             <div className="w-12 h-12 bg-white/80 rounded-full flex items-center justify-center mb-4 shadow-sm">
//                                 <Camera size={20} className="text-slate-700" />
//                             </div>
//                             <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent mb-4" />
//                             <p className="text-center font-bold text-slate-800 leading-tight">Adjustable<br />screenshot intervals</p>
//                         </div>

//                         {/* Card 3 */}
//                         <div className="bg-gradient-to-br from-[#E9EEF5] via-[#F3F6FA] to-[#F5D7B8] rounded-[32px] p-6 flex flex-col items-center justify-center border border-white/20 shadow-sm">
//                             <div className="w-12 h-12 bg-white/80 rounded-full flex items-center justify-center mb-4 shadow-sm">
//                                 <Receipt size={20} className="text-slate-700" />
//                             </div>
//                             <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent mb-4" />
//                             <p className="text-center font-bold text-slate-800 leading-tight">Subscription &<br />billing management</p>
//                         </div>

//                         {/* Card 4 */}
//                         <div className="bg-gradient-to-br from-[#F1F4F9] via-[#F1F4F9] to-[#E3F2AD] rounded-[32px] p-6 flex flex-col items-center justify-center border border-white/20 shadow-sm">
//                             <div className="w-12 h-12 bg-white/80 rounded-full flex items-center justify-center mb-4 shadow-sm">
//                                 <Sun size={20} className="text-slate-700" />
//                             </div>
//                             <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent mb-4" />
//                             <p className="text-center font-bold text-slate-800 leading-tight">Dark &<br />light mode</p>
//                         </div>

//                         {/* Card 5 */}
//                         <div className="bg-gradient-to-br from-[#D8F3F1] via-[#E6F9F8] to-[#B3EBD1] rounded-[32px] p-6 flex flex-col items-center justify-center border border-white/20 shadow-sm">
//                             <div className="w-12 h-12 bg-white/80 rounded-full flex items-center justify-center mb-4 shadow-sm">
//                                 <Languages size={20} className="text-slate-700" />
//                             </div>
//                             <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent mb-4" />
//                             <p className="text-center font-bold text-slate-800 leading-tight">Multi-<br />language support</p>
//                         </div>

//                         {/* Card 6 */}
//                         <div className="bg-gradient-to-br from-[#E0E7FF] via-[#EEF2FF] to-[#FBC0C0] rounded-[32px] p-6 flex flex-col items-center justify-center border border-white/20 shadow-sm">
//                             <div className="w-12 h-12 bg-white/80 rounded-full flex items-center justify-center mb-4 shadow-sm">
//                                 <Users size={20} className="text-slate-700" />
//                             </div>
//                             <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent mb-4" />
//                             <p className="text-center font-bold text-slate-800 leading-tight">Role-based<br />feature control</p>
//                         </div>

//                     </div>

//                     {/* Right: Heading & Description */}
//                     <div className="w-2/5 flex flex-col justify-center items-start px-2 md:px-8">
//                         <div className="content_title_border w-fit text-[#0C59C0] rounded-full mb-1">
//                             <div className="px-4 py-2 text-sm font-semibold">
//                                 Why Choose Us
//                             </div>
//                         </div>
//                         <h1 className="text-[42px] font-semibold mb-2  text-black">
//                             Flexible. <br />
//                             Configurable. <br />
//                             <span className="font-playball font-normal">Scalable.</span>
//                         </h1>
//                         <p className="text-gray-600 text-base mb-6 max-w-lg mt-6">
//                             Every organization works differently. <br />
//                             Enterprise-ready from day one.
//                         </p>
//                         <div className="">
//                             <button className="group custom-button relative w-fit bg-gradient-to-r from-gray-700 via-gray-900 to-gray-700 text-white font-bold py-3 px-6 rounded-[16px] flex gap-3 justify-between items-center">
//                                 <span className='group-hover:italic '>See how it works</span> <FaArrowRightLong className='group-hover:-rotate-[30deg] transition ease-in-out' />
//                                 <motion.div
//                                     className="ml-2 absolute right-0"
//                                     animate={{
//                                         x: [0, -190, 0],   // initial, move right, return
//                                         opacity: [0, 1, 0, 0, 1, 0], // fade out at the end of the move
//                                     }}
//                                     transition={{
//                                         duration: 7,
//                                         repeat: Infinity,
//                                         repeatType: 'loop',
//                                     }}
//                                 >
//                                     <Image
//                                         width={400}
//                                         height={400}
//                                         src={trackforce}
//                                         alt="TrackForce Logo"
//                                         className="w-8 h-8 group-hover:hidden"
//                                     />
//                                 </motion.div>
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default Configure;












"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import {
    Monitor,
    Camera,
    Receipt,
    Sun,
    Languages,
    Users,
} from "lucide-react";

const trackforce = "/trackforce.png";

const Configure = () => {
    // 🔥 same animation as Decisions
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

    const cards = [
        {
            icon: <Monitor size={20} className="text-slate-700" />,
            text: "Custom\nmonitoring policies",
            bg: "linear-gradient(180deg, #A5D8EB 0%, #7ED1E6 100%)",
        },
        {
            icon: <Camera size={20} className="text-slate-700" />,
            text: "Adjustable\nscreenshot intervals",
            bg: "linear-gradient(180deg, #D1D8FB 0%, #B9C1FF 100%)",
        },
        {
            icon: <Receipt size={20} className="text-slate-700" />,
            text: "Subscription &\nbilling management",
            bg: "linear-gradient(180deg, #E9EEF5 0%, #F5D7B8 100%)",
        },
        {
            icon: <Sun size={20} className="text-slate-700" />,
            text: "Dark &\nlight mode",
            bg: "linear-gradient(180deg, #F1F4F9 0%, #E3F2AD 100%)",
        },
        {
            icon: <Languages size={20} className="text-slate-700" />,
            text: "Multi-\nlanguage support",
            bg: "linear-gradient(180deg, #D8F3F1 0%, #B3EBD1 100%)",
        },
        {
            icon: <Users size={20} className="text-slate-700" />,
            text: "Role-based\nfeature control",
            bg: "linear-gradient(180deg, #E0E7FF 0%, #FBC0C0 100%)",
        },
    ];

    return (
        <section className="w-full py-24 bg-[#DEEDFF] overflow-hidden bg-[url('/flexibleConBg.png')] bg-cover bg-center">
            <div className="max-w-[1300] mx-auto">
                <div className="flex flex-col md:flex-row gap-8 w-full px-4">

                    {/* LEFT GRID */}
                    <motion.div
                        variants={leftVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, margin: "-100px" }}
                        className="relative w-full lg:w-3/5 h-[600px] grid grid-cols-2 gap-4"
                    >
                        {cards.map((card, i) => (
                            <motion.div
                                key={i}
                                variants={fadeUp}
                                custom={i}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false }}
                                className="rounded-[32px] p-6 flex flex-col items-center justify-center border border-white/20 shadow-sm"
                                style={{ background: card.bg }}
                            >
                                <div className="w-12 h-12 bg-white/80 rounded-full flex items-center justify-center mb-4 shadow-sm">
                                    {card.icon}
                                </div>

                                <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent mb-4" />

                                <p className="text-center font-bold text-slate-800 leading-tight whitespace-pre-line">
                                    {card.text}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>

                    {/* RIGHT CONTENT */}
                    <motion.div
                        variants={rightVariant}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, margin: "-100px" }}
                        className="w-full lg:w-2/5 flex flex-col justify-center items-start px-2 md:px-8"
                    >
                        <div className="content_title_border_new w-fit  mb-1">
                            <div className="px-4 py-2 text-sm font-semibold content_title_text_new">
                                Why Choose Us
                            </div>
                        </div>

                        <h1 className="text-[42px] font-semibold mb-2 text-black">
                            Flexible. <br />
                            Configurable. <br />
                            <span className="font-playball font-normal">Scalable.</span>
                        </h1>

                        <p className="text-gray-600 text-base mb-6 max-w-lg mt-6">
                            Every organization works differently. <br />
                            Enterprise-ready from day one.
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
                </div>
            </div>
        </section>
    );
};

export default Configure;