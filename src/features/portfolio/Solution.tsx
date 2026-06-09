"use client";
import BookDemoBtn from "@/components/shared/BookDemoBtn";
import Image from "next/image";
import { useState } from "react";
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
        <div className="lg:w-[1200] xl:w-[1300] mx-auto bg-[#D6E8FF] rounded-2xl my-24 py-24 px-16 bg-[url('/contactbg.png')] bg-no-repeat bg-cover">

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
                <BookDemoBtn />
            </div>


        </div>
    );
};

export default Solution;