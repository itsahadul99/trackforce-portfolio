
// "use client";

// import Image from "next/image";
// import { motion } from 'framer-motion';
// import { FaArrowRightLong } from 'react-icons/fa6';
// const trackforce = '/trackforce.png';




// const Solution = () => {
//     const cards = [
//         {
//             icon: "/monitor.png",
//             title: "Limited visibility into team productivity",
//             desc: "Limited insight into how teams spend their time, making it difficult to measure performance and identify productivity gaps.",
//             bg: "from-cyan-100 to-teal-100",
//         },
//         {
//             icon: "/shield.png",
//             title: "Hidden operational risks",
//             desc: "Unseen workflow issues and compliance gaps that can impact performance, security, and overall business stability.",
//             bg: "from-purple-100 to-pink-100",
//         },
//         {
//             icon: "/graph.png",
//             title: "Manual reporting delays",
//             desc: "Time-consuming manual reporting processes that slow down decision-making and reduce operational efficiency.",
//             bg: "from-orange-100 to-amber-100",
//         },
//         {
//             icon: "/tabTime.png",
//             title: "No real-time performance insights",
//             desc: "Lack of live performance data makes it difficult to respond quickly and make informed decisions.",
//             bg: "from-emerald-100 to-green-100",
//         },
//         {
//             icon: "/laptop.png",
//             title: "No real-time performance insights",
//             desc: "Lack of live performance data makes it difficult to respond quickly and make informed decisions.",
//             bg: "from-emerald-100 to-green-100",
//         },
//     ];

//     return (
//         <div className=" lg:w-[1200] xl:w-[1300] mx-auto bg-[#D6E8FF] rounded-2xl my-24 py-24 px-16 ">
//             <div className=" w-full flex flex-col justify-center items-start  text-center">
//                 <div className="w-full flex justify-center">
//                     <div className="content_title_border w-fit text-[#0C59C0] rounded-full mb-1">
//                         <div className="px-4 py-2 text-sm font-semibold">
//                             All in One Solution
//                         </div>
//                     </div>
//                 </div>
//                 <div className="w-full flex justify-center">
//                     <h1 className="text-center text-[42px] font-semibold mb-2  text-black">
//                         The Modern Workforce <span className="font-playball font-normal">Problem</span>
//                     </h1>
//                 </div>
//             </div>

//             <div className=" flex items-center justify-center ">
//                 <div className=" w-full">
//                     {/* Top Tabs */}
//                     <div className="flex justify-center gap-3 mb-8">
//                         <button className="px-14 py-3 text-white font-semibold rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg shadow-blue-500/30 transition-all hover:scale-101">
//                             Remote
//                         </button>
//                         <button className="px-14 py-3 text-gray-700 font-semibold rounded-xl bg-white shadow-md hover:shadow-lg transition-all hover:scale-101">
//                             Distributed
//                         </button>
//                         <button className="px-14 py-3 text-gray-700 font-semibold rounded-xl bg-white shadow-md hover:shadow-lg transition-all hover:scale-101">
//                             Hybrid
//                         </button>
//                     </div>

//                     {/* Subtitle */}
//                     <div className="text-center text-gray-600 mb-12 text-lg">
//                         Today&apos;s organizations struggle with:
//                     </div>

//                     {/* cards */}
//                     <div className="flex flex-wrap justify-center w-full gap-6 mt-12">
//                         {cards.map((card, index) => {
//                             const isLast = index === cards.length - 1;
//                             const isOdd = cards.length % 2 !== 0;

//                             return (
//                                 <div
//                                     key={index}
//                                     className={`bg-gradient-to-br ${card.bg} p-8 rounded-3xl shadow-sm
//         ${isLast && isOdd ? "justify-center" : " justify-between "} w-[calc(50%-24px)]`}
//                                 >
//                                     <div
//                                         className={`w-full ${isLast && isOdd ? "w-[48%]" : ""
//                                             }`}
//                                     >
//                                         <div className="flex items-center gap-3 mb-4">
//                                             <Image src={card.icon} alt="icon" width={44} height={44} />
//                                             <h3 className="font-semibold text-xl text-gray-800">
//                                                 {card.title}
//                                             </h3>
//                                         </div>
//                                         <p className="text-gray-700 leading-relaxed">
//                                             {card.desc}
//                                         </p>
//                                     </div>
//                                 </div>
//                             );
//                         })}
//                     </div>

//                     {/* book a demo */}
//                     <div className="flex justify-center mt-16 ">
//                         <button className="group custom-button relative shadow-xl w-fit bg-gradient-to-r from-gray-700 via-gray-900 to-gray-700 text-white font-bold py-3 px-6 rounded-[16px] flex gap-3 justify-between items-center">
//                             <span className='group-hover:italic '>Book a Demo</span> <FaArrowRightLong className='group-hover:-rotate-[30deg] transition ease-in-out' />
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
//                                     src={trackforce}
//                                     alt="TrackForce Logo"
//                                     width={32}
//                                     height={32}
//                                     className="group-hover:hidden"
//                                 />
//                             </motion.div>
//                         </button>
//                     </div>

//                 </div>
//             </div>

//         </div>
//     );
// };

// export default Solution
//     ;





"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { FaArrowRightLong } from "react-icons/fa6";
import { useState } from "react";

const trackforce = "/trackforce.png";

const Solution = () => {
    const [activeTab, setActiveTab] = useState("Remote");

    const tabs = ["Remote", "Distributed", "Hybrid"];

    const cards = [
        {
            icon: "/monitor.png",
            title: "Limited visibility into team productivity",
            desc: "Limited insight into how teams spend their time, making it difficult to measure performance and identify productivity gaps.",

            background: "linear-gradient(180deg, #CFE4FE 0%, #83CFD9 100%)",
            hoverBg: "hover:from-cyan-200 hover:to-teal-200",
        },
        {
            icon: "/shield.png",
            title: "Hidden operational risks",
            desc: "Unseen workflow issues and compliance gaps that can impact performance, security, and overall business stability.",

            background: "linear-gradient(180deg, #D3E5FF 0%, #C0B2FB 100%)",
            hoverBg: "hover:from-purple-200 hover:to-pink-200",
        },
        {
            icon: "/graph.png",
            title: "Manual reporting delays",
            desc: "Time-consuming manual reporting processes that slow down decision-making and reduce operational efficiency.",

            background: "linear-gradient(180deg, #DFE6F2 53.53%, #F2D7BF 100%)",
            hoverBg: "hover:from-orange-200 hover:to-amber-200",
        },
        {
            icon: "/tabTime.png",
            title: "No real-time performance insights",
            desc: "Lack of live performance data makes it difficult to respond quickly and make informed decisions.",

            background: "linear-gradient(180deg, #D8E9FE 0%, #BEF8CE 100%)",
            hoverBg: "hover:from-emerald-200 hover:to-green-200",
        },
        {
            icon: "/laptop.png",
            title: "No real-time performance insights",
            desc: "Lack of live performance data makes it difficult to respond quickly and make informed decisions.",

            background: "linear-gradient(180deg, #D3E5FF 0%, #83A5F5 100%)",
            hoverBg: "hover:from-emerald-200 hover:to-green-200",
        },
    ];

    return (
        <div className="lg:w-[1200] xl:w-[1300] mx-auto bg-[#D6E8FF] rounded-2xl my-24 py-24 px-16">

            {/* Header */}
            <div className="w-full flex flex-col justify-center items-start text-center">
                <div className="w-full flex justify-center">
                    <div className="content_title_border w-fit text-[#0C59C0] rounded-full mb-1">
                        <div className="px-4 py-2 text-sm font-semibold">
                            All in One Solution
                        </div>
                    </div>
                </div>

                <div className="w-full flex justify-center">
                    <h1 className="text-center text-[42px] font-semibold mb-2 text-black">
                        The Modern Workforce{" "}
                        <span className="font-playball font-normal">Problem</span>
                    </h1>
                </div>
            </div>

            {/* Tabs */}
            <div className="flex justify-center gap-3 mb-8 mt-6">
                {tabs.map((tab) => {
                    const isActive = activeTab === tab;

                    return (
                        <button
                            key={tab}
                            onClick={() => setActiveTab(tab)}
                            className={`px-14 py-3 font-semibold rounded-xl transition-all duration-300
                                ${isActive
                                    ? "text-white bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg shadow-blue-500/30"
                                    : "text-gray-700 bg-white shadow-md"
                                }
                                hover:bg-gradient-to-r hover:from-blue-300 hover:to-purple-300 
                                hover:text-white hover:shadow-lg hover:shadow-blue-500/30 hover:scale-105
                            `}
                        >
                            {tab}
                        </button>
                    );
                })}
            </div>

            {/* Subtitle */}
            <div className="text-center text-gray-600 mb-12 text-lg">
                Today&apos;s organizations struggle with:
            </div>

            {/* Cards */}
            <div className="flex flex-wrap justify-center w-full gap-6 mt-12">
                {cards.map((card, index) => {
                    const isLast = index === cards.length - 1;
                    const isOdd = cards.length % 2 !== 0;

                    return (
                        // <div
                        //     key={index}
                        //     className={`group bg-gradient-to-br  ${card.hoverBg}
                        //         p-8 rounded-3xl shadow-sm
                        //         transition-all duration-300 ease-in-out
                        //         hover:shadow-md hover:scale-[1.02]
                        //         ${isLast && isOdd ? "justify-center" : "justify-between"}
                        //         w-[calc(50%-24px)]
                        //     `}
                        //     style={{ background: `${card.background}` }}
                        // >
                        //     <div className={`w-full ${isLast && isOdd ? "w-[48%]" : ""}`}>

                        //         <div className="flex items-center gap-3 mb-4">
                        //             <Image src={card.icon} alt="icon" width={44} height={44} />

                        //             <h3 className="font-semibold text-xl text-gray-800 transition-all duration-300 group-hover:text-[21px]">
                        //                 {card.title}
                        //             </h3>
                        //         </div>

                        //         <p className="text-gray-700 leading-relaxed transition-all duration-300 group-hover:text-[15.5px]">
                        //             {card.desc}
                        //         </p>

                        //     </div>
                        // </div>

                        <div
                            key={index}
                            className={`group relative overflow-hidden
        p-8 rounded-3xl shadow-sm
        transition-all duration-300 ease-in-out
        hover:shadow-md hover:scale-[1.02]
        ${isLast && isOdd ? "justify-center" : "justify-between"}
        w-[calc(50%-24px)]
    `}
                            style={{ background: card.background }}
                        >
                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition duration-300"></div>

                            <div className={`relative w-full ${isLast && isOdd ? "w-[48%]" : ""}`}>

                                <div className="flex items-center gap-3 mb-4">
                                    <Image src={card.icon} alt="icon" width={44} height={44} />

                                    <h3 className="font-semibold text-xl text-gray-800 transition-all duration-300 group-hover:text-[21px]">
                                        {card.title}
                                    </h3>
                                </div>

                                <p className="text-gray-700 leading-relaxed transition-all duration-300 group-hover:text-[15.5px]">
                                    {card.desc}
                                </p>

                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Book a demo */}

            <div className="flex justify-center mt-16 ">
                <button className="group custom-button relative shadow-xl w-fit bg-gradient-to-r from-gray-700 via-gray-900 to-gray-700 text-white font-bold py-3 px-6 rounded-[16px] flex gap-3 justify-between items-center">
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
                            src={trackforce}
                            alt="TrackForce Logo"
                            width={32}
                            height={32}
                            className="group-hover:hidden"
                        />
                    </motion.div>
                </button>
            </div>


        </div>
    );
};

export default Solution;