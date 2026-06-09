"use client";

import Image from "next/image";
import evulated_center_logo from "../../../public/evulated_center_logo.png";

export default function HowWeEvaluated() {
    return (
        <div className="w-full  px-4 ">
            <div className="lg:w-[1200] xl:w-[1300] mx-auto relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#e8ecff] via-[#eef1ff] to-[#dfe5ff] px-10 py-16 shadow-lg md:p-14">
                {/* left glow */}
                <div className="absolute -left-20 top-1/3 w-[320px] h-[320px] bg-blue-500/30 rounded-full blur-[110px]" />

                <div className="relative z-10">
                    {/* Title */}
                    <div className="text-center mb-14">
                        <h2 className="text-4xl md:text-[42px] font-bold text-[#0a0a1a]">
                            How We Evaluated These{" "}
                            <span className="font-playball font-normal">Tools</span>
                        </h2>
                        <p className="text-gray-600 text-sm md:text-base mt-3">
                            Each platform in this list was evaluated based on:
                        </p>
                    </div>

                    {/* Diagram */}
                    <div className="relative h-[360px] md:h-[380px]">


                        {/* Center logo */}
                        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
                            <div className="w-24 h-24 md:w-28 md:h-28 bg-white rounded-full shadow-lg border flex items-center justify-center">
                                <Image
                                    src={evulated_center_logo}
                                    alt="TrackForce"
                                    width={80}
                                    height={80}
                                    className="object-contain w-14 h-14 md:w-[65] md:h-[65]"
                                />
                            </div>
                        </div>

                        {/* Left pills */}
                        <div className="absolute left-0 top-[10%]">
                            <div className="relative bg-white w-80 text-center rounded-full shadow-md px-6 py-3 md:px-7 md:py-4">
                                <p className="text-[#0a0a1a] font-semibold text-sm md:text-base whitespace-nowrap">
                                    Real-time productivity track
                                </p>
                                {/* connector: Real-time productivity track → center logo */}
                                <svg className="hidden md:block absolute left-full top-1/2" width="224" height="124" viewBox="0 0 131 103" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M130.5 102C119.5 93 109.5 81 109.5 62V18.5C108.833 12.6667 104.3 0.9 91.5 0.5H0" stroke="#166DE1" strokeOpacity="0.25" vectorEffect="non-scaling-stroke" />
                                </svg>
                            </div>
                        </div>
                        <div className="absolute left-0 top-1/2 -translate-y-1/2">
                            <div className="relative w-80 text-center bg-white rounded-full shadow-md px-6 py-3 md:px-7 md:py-4">
                                <p className="text-[#0a0a1a] font-semibold text-sm md:text-base whitespace-nowrap">
                                    Reporting depth & clarity
                                </p>
                                {/* connector: straight → center logo */}
                                <svg className="hidden md:block absolute left-full top-1/2" width="230" height="1" viewBox="0 0 105 1" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M105 0.5H0" stroke="#166DE1" strokeOpacity="0.25" vectorEffect="non-scaling-stroke" />
                                </svg>
                            </div>
                        </div>
                        <div className="absolute left-0 bottom-[10%]">
                            <div className="relative w-80 text-center bg-white rounded-full shadow-md px-6 py-3 md:px-7 md:py-4">
                                <p className="text-[#0a0a1a] font-semibold text-sm md:text-base whitespace-nowrap">
                                    Ease of onboarding
                                </p>
                                {/* connector: curve → center logo (flipped vertically) */}
                                <svg className="hidden md:block absolute left-full bottom-1/2" width="224" height="124" viewBox="0 0 131 103" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: "scaleY(-1)" }}>
                                    <path d="M130.5 102C119.5 93 109.5 81 109.5 62V18.5C108.833 12.6667 104.3 0.9 91.5 0.5H0" stroke="#166DE1" strokeOpacity="0.25" vectorEffect="non-scaling-stroke" />
                                </svg>
                            </div>
                        </div>

                        {/* Right pills */}
                        <div className="absolute right-0 top-[10%]">
                            <div className="relative w-80 text-center bg-white rounded-full shadow-md px-6 py-3 md:px-7 md:py-4">
                                <p className="text-[#0a0a1a] font-semibold text-sm md:text-base whitespace-nowrap">
                                    Role-based access control
                                </p>
                                {/* connector: curve → center logo (flipped horizontally) */}
                                <svg className="hidden md:block absolute right-full top-1/2" width="224" height="124" viewBox="0 0 131 103" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: "scaleX(-1)" }}>
                                    <path d="M130.5 102C119.5 93 109.5 81 109.5 62V18.5C108.833 12.6667 104.3 0.9 91.5 0.5H0" stroke="#166DE1" strokeOpacity="0.25" vectorEffect="non-scaling-stroke" />
                                </svg>
                            </div>
                        </div>
                        <div className="absolute right-0 top-1/2 -translate-y-1/2">
                            <div className="relative w-80 text-center bg-white rounded-full shadow-md px-6 py-3 md:px-7 md:py-4">
                                <p className="text-[#0a0a1a] font-semibold text-sm md:text-base whitespace-nowrap">
                                    Startup scalability
                                </p>
                                {/* connector: straight → center logo */}
                                <svg className="hidden md:block absolute right-full top-1/2" width="230" height="1" viewBox="0 0 105 1" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M105 0.5H0" stroke="#166DE1" strokeOpacity="0.25" vectorEffect="non-scaling-stroke" />
                                </svg>
                            </div>
                        </div>
                        <div className="absolute right-0 bottom-[10%]">
                            <div className="relative w-80 text-center bg-white rounded-full shadow-md px-6 py-3 md:px-7 md:py-4">
                                <p className="text-[#0a0a1a] font-semibold text-sm md:text-base whitespace-nowrap">
                                    Transparency and flexibility
                                </p>
                                {/* connector: curve → center logo (flipped both axes) */}
                                <svg className="hidden md:block absolute right-full bottom-1/2" width="224" height="124" viewBox="0 0 131 103" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ transform: "scale(-1, -1)" }}>
                                    <path d="M130.5 102C119.5 93 109.5 81 109.5 62V18.5C108.833 12.6667 104.3 0.9 91.5 0.5H0" stroke="#166DE1" strokeOpacity="0.25" vectorEffect="non-scaling-stroke" />
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
