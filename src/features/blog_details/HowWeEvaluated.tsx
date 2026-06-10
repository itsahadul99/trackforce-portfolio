"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import evulated_center_logo from "../../../public/evulated_center_logo.png";
const CURVE_PATH =
    "M130.5 102C119.5 93 109.5 81 109.5 62V18.5C108.833 12.6667 104.3 0.9 91.5 0.5H0";
const STRAIGHT_PATH = "M105 0.5H0";
type ConnectorProps = {
    kind: "curve" | "straight";
    side: "left" | "right";
    position: "top" | "middle" | "bottom";
    delay?: number;
};
const Connector = ({ kind, side, position, delay = 0 }: ConnectorProps) => {
    const isCurve = kind === "curve";
    const width = isCurve ? 224 : 230;
    const height = isCurve ? 124 : 1;
    const viewBox = isCurve ? "0 0 131 103" : "0 0 105 1";
    const d = isCurve ? CURVE_PATH : STRAIGHT_PATH;

    let transform: string | undefined;
    if (isCurve) {
        if (side === "right" && position === "top") transform = "scaleX(-1)";
        else if (side === "left" && position === "bottom") transform = "scaleY(-1)";
        else if (side === "right" && position === "bottom") transform = "scale(-1, -1)";
    }

    // SVG anchors: left pills attach at left-full; right pills at right-full.
    // Top pills attach by top, bottom pills by bottom; middle pills use top-1/2.
    const positionClasses = [
        side === "left" ? "left-full" : "right-full",
        position === "bottom" ? "bottom-1/2" : "top-1/2",
    ].join(" ");

    return (
        <svg
            className={`hidden md:block absolute ${positionClasses}`}
            width={width}
            height={height}
            viewBox={viewBox}
            preserveAspectRatio="none"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={transform ? { transform } : undefined}
        >
            {/* Static base line (existing look) */}
            <path
                d={d}
                stroke="#166DE1"
                strokeOpacity="0.25"
                vectorEffect="non-scaling-stroke"
            />
            {/* Flowing dashed overlay → "active connector" */}
            <motion.path
                d={d}
                stroke="#166DE1"
                strokeOpacity="0.9"
                strokeWidth={1.5}
                strokeLinecap="round"
                strokeDasharray="4 10"
                vectorEffect="non-scaling-stroke"
                initial={{ strokeDashoffset: 0 }}
                animate={{ strokeDashoffset: -14 }}
                transition={{
                    duration: 1.6,
                    ease: "linear",
                    repeat: Infinity,
                    delay,
                }}
            />
        </svg>
    );
};

export default function HowWeEvaluated() {
    return (
        <div className="w-full  px-4 bg-[#DEEDFF] py-14 lg:py-24 ">
            <div className="max-w-[1300] mx-auto relative rounded-3xl overflow-hidden bg-[url(/featurebg.png)] bg-center bg-cover py-16 md:p-14 " style={{ boxShadow: "filter(0px 0px 34.5px 0px #00000021)" }}>
                {/* left glow */}
                <div className="absolute -left-20 top-1/3 w-[320px] h-[320px] bg-blue-500/30 rounded-full blur-[110px] " />

                <div className="relative z-10">
                    {/* Title */}
                    <div className="text-center mb-14">
                        <h2 className="text-4xl md:text-[42px] font-bold text-[#0a0a1a]">
                            How We Evaluated These {" "}
                            <span className="font-playball font-normal">Tools</span>

                        </h2>
                        <div className=" flex items-center justify-center text-center">
                            <p className="w-[750] text-[#2B2B2B] text-sm md:text-base mt-3">
                               Each platform in this list was evaluated based on:
                            </p>
                        </div>
                    </div>

                    {/* Diagram */}
                    <div className="relative h-[360px] md:h-[380px]">


                        {/* Center logo */}
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                            <motion.div
                                className="w-24 h-24 md:w-28 md:h-28 bg-white rounded-full shadow-lg border flex items-center justify-center"
                                animate={{
                                    boxShadow: [
                                        "0 0 0 0 rgba(22, 109, 225, 0.35)",
                                        "0 0 0 14px rgba(22, 109, 225, 0)",
                                    ],
                                }}
                                transition={{ duration: 1.8, ease: "easeOut", repeat: Infinity }}
                            >
                                <Image
                                    src={evulated_center_logo}
                                    alt="TrackForce"
                                    width={80}
                                    height={80}
                                    className="object-contain w-14 h-14 md:w-[65] md:h-[65]"
                                />
                            </motion.div>
                        </div>

                        {/* Left pills */}
                        <div className="absolute left-0 top-[10%]">
                            <div className="relative bg-white w-80 text-center rounded-full shadow-md px-6 py-3 md:px-7 md:py-4">
                                <p className="text-[#0a0a1a] font-semibold text-sm md:text-base whitespace-nowrap">
                                   Real-time productivity track
                                </p>
                                <Connector kind="curve" side="left" position="top" delay={0} />
                            </div>
                        </div>
                        <div className="absolute left-0 top-1/2 -translate-y-1/2">
                            <div className="relative w-80 text-center bg-white rounded-full shadow-md px-6 py-3 md:px-7 md:py-4">
                                <p className="text-[#0a0a1a] font-semibold text-sm md:text-base whitespace-nowrap">
                                   Reporting depth & clarity
                                </p>
                                <Connector kind="straight" side="left" position="middle" delay={0.2} />
                            </div>
                        </div>
                        <div className="absolute left-0 bottom-[10%]">
                            <div className="relative w-80 text-center bg-white rounded-full shadow-md px-6 py-3 md:px-7 md:py-4">
                                <p className="text-[#0a0a1a] font-semibold text-sm md:text-base whitespace-nowrap">
                                  Ease of onboarding
                                </p>
                                <Connector kind="curve" side="left" position="bottom" delay={0.4} />
                            </div>
                        </div>

                        {/* Right pills */}
                        <div className="absolute right-0 top-[10%]">
                            <div className="relative w-80 text-center bg-white rounded-full shadow-md px-6 py-3 md:px-7 md:py-4">
                                <p className="text-[#0a0a1a] font-semibold text-sm md:text-base whitespace-nowrap">
                                  Role-based access control
                                </p>
                                <Connector kind="curve" side="right" position="top" delay={0.1} />
                            </div>
                        </div>
                        <div className="absolute right-0 top-1/2 -translate-y-1/2">
                            <div className="relative w-80 text-center bg-white rounded-full shadow-md px-6 py-3 md:px-7 md:py-4">
                                <p className="text-[#0a0a1a] font-semibold text-sm md:text-base whitespace-nowrap">
                                   Startup scalability
                                </p>
                                <Connector kind="straight" side="right" position="middle" delay={0.3} />
                            </div>
                        </div>
                        <div className="absolute right-0 bottom-[10%]">
                            <div className="relative w-80 text-center bg-white rounded-full shadow-md px-6 py-3 md:px-7 md:py-4">
                                <p className="text-[#0a0a1a] font-semibold text-sm md:text-base whitespace-nowrap">
                                   Transparency and flexibility
                                </p>
                                <Connector kind="curve" side="right" position="bottom" delay={0.5} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
