"use client";
import StatusModal from "@/components/shared/StatusModal";
import { Button } from "@/components/ui/button";
import { motion, Transition } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";
import video_bg from '../../../../public/video_bg.png';
import trackforce from "../../../../public/trackforce.png";
const BOOK_DEMO_API_URL = "https://app.trackforce.io/api/PublicBookDemo/submit";

type DemoStatus = "idle" | "loading" | "success" | "error";

const Hero = () => {
    const videoRef = useRef<HTMLVideoElement>(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [isFullscreen, setIsFullscreen] = useState(false);

    const [demoMessage, setDemoMessage] = useState("");
    const [demoStatus, setDemoStatus] = useState<DemoStatus>("idle");
    const [modal, setModal] = useState<{
        open: boolean;
        type: "success" | "error";
        title: string;
        description: string;
    }>({ open: false, type: "success", title: "", description: "" });

    const handleBookDemo = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (demoStatus === "loading") return;

        const message = demoMessage.trim();
        if (!message) {
            setModal({
                open: true,
                type: "error",
                title: "Message Required",
                description: "Please tell us a little about what you'd like to see before booking a demo.",
            });
            return;
        }

        setDemoStatus("loading");

        try {
            const res = await fetch(BOOK_DEMO_API_URL, {
                method: "POST",
                headers: {
                    accept: "*/*",
                    "Content-Type": "application/json-patch+json",
                },
                body: JSON.stringify({ message }),
            });

            if (!res.ok) {
                throw new Error(`Request failed with status ${res.status}`);
            }

            const data = await res.json().catch(() => null);

            setDemoStatus("success");
            setDemoMessage("");
            setModal({
                open: true,
                type: "success",
                title: "Demo Request Received!",
                description:
                    data?.message ??
                    "Your demo request has been received. We'll be in touch shortly.",
            });
        } catch {
            setDemoStatus("error");
            setModal({
                open: true,
                type: "error",
                title: "Something Went Wrong",
                description:
                    "We couldn't submit your demo request. Please check your connection and try again.",
            });
        }
    };

    const closeModal = () => setModal((prev) => ({ ...prev, open: false }));

    useEffect(() => {
        const handleFullscreenChange = () => {
            setIsFullscreen(document.fullscreenElement === videoRef.current);
        };
        document.addEventListener("fullscreenchange", handleFullscreenChange);
        return () => document.removeEventListener("fullscreenchange", handleFullscreenChange);
    }, []);


    const handleVideoClick = () => {
        if (videoRef.current) {
            if (isPlaying) {
                videoRef.current.pause();
            } else {
                videoRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };
    const commonTransition: Transition = {
        duration: 1.2,
        ease: "easeInOut",
        repeat: Infinity,
        repeatType: "loop",
        repeatDelay: 0.8
    };

    const path = "M1.37062 48.9656C18.3278 26.677 58.5996 25.7684 74.2747 26.7115";

    return (
        <div className="overflow-hidden bg-cover bg-center bg-no-repeat bg-[url('/HeroBg.png')]">
            <div className="max-w-[1300] mx-auto px-4 sm:px-6 lg:px-4 pt-20 lg:pt-0 pb-16 lg:pb-0 flex flex-col lg:flex-row lg:justify-between items-center gap-12 lg:gap-0 min-h-screen lg:h-full">
                <div className="w-full lg:w-1/2 space-y-4 text-center lg:text-left">
                    {/* Top Badge */}
                    {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs sm:text-sm text-gray-200">
                        <IoPlayCircle className="text-xl sm:text-2xl" />
                        Start your interactive demo now
                    </div> */}
                    {/* Main headline */}
                    <div >
                        <h1 className="space-y-2 sm:space-y-3 text-white text-3xl sm:text-4xl md:text-[42px] lg:text-[42px] font-semibold leading-tight">
                            <p> Employeee Activity Tracking</p>
                            {/* <p>   That Shows <span className="real_work">Real Work,</span></p> */}
                            <p>   That Shows{" "}
                                <TypeAnimation
                                    sequence={[
                                        "Real Work,",
                                        3000,
                                        "",
                                        500,
                                    ]}
                                    speed={10}
                                    repeat={Infinity}
                                    wrapper="span"
                                    className="font-playball font-normal"
                                />
                            </p>
                            <p>   Not Just Screen Time</p>
                        </h1>
                    </div>
                    {/* Subtitle / description */}
                    <div className="text-sm sm:text-base lg:text-[18px] text-[#ABABAB] mt-5">
                        <p>
                            TrackTrackForce gives you real-time visibility into team productivity,
                        </p>
                        <p>
                            activity patterns, and performance — no guesswork, no blind spots.
                        </p>
                    </div>
                    {/* book a demo */}
                    <div className="relative mt-8 w-full max-w-[480px] mx-auto lg:mx-0 lg:w-fit">
                        <div className="flex flex-col sm:flex-row gap-3">
                            <a href="https://app.trackforce.io/3/Professional/signup?trial=true" target="_blank" rel="noopener noreferrer" className="group custom-button relative w-fit text-white font-bold py-[14px] px-[22px] rounded-[16px] flex gap-3 justify-between items-center" style={{
                                background: "linear-gradient(90deg, #1B73E8 0%, #9F60EE 100%)",
                                boxShadow: "0 0 4px 0 rgba(255, 255, 255, 0.25), 0 4px 15.1px 0 rgba(0, 0, 0, 0.25)"
                            }}>
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
                            </a>
                            <Link href={'/contact'} className="group custom-button relative w-fit text-white font-bold py-[14px] px-[22px] rounded-[16px] flex gap-3 justify-between items-center" style={{

                                boxShadow: "0 0 4px 0 rgba(255, 255, 255, 0.25), 0 4px 15.1px 0 rgba(0, 0, 0, 0.25)"
                            }}>
                                <span className='group-hover:italic '>Book a Demo</span>
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
                            </Link>
                        </div>

                        <div className="hidden sm:flex flex-wrap justify-center lg:justify-between gap-x-3 gap-y-1 text-[#ABABAB] mt-3 px-1 text-sm sm:text-base">
                            <span>Free 14-day trial</span>
                            <span>|</span>
                            <span>No credit card required</span>
                            <span>|</span>
                            <span>Cancel anytime</span>
                        </div>


                        {/* book demo spark animation */}
                        <div className="absolute -left-8 -top-8 hidden sm:block" >
                            <motion.svg
                                width="37"
                                height="37"
                                viewBox="0 0 37 37"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <motion.path
                                    d="M22.3966 31.5582C22.3966 31.5582 16.7601 32.0442 11.4624 34.0293"
                                    fill="none"
                                    stroke="white"
                                    strokeOpacity="0.64"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={commonTransition}
                                />

                                <motion.path
                                    d="M24.4997 23.2532C17.4498 17.8954 8.26279 15.3839 2.49653 13.8603"
                                    fill="none"
                                    stroke="white"
                                    strokeOpacity="0.64"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={commonTransition}
                                />

                                <motion.path
                                    d="M33.6205 19.1061C33.035 14.4653 22.104 2.80171 22.104 2.80171"
                                    fill="none"
                                    stroke="white"
                                    strokeOpacity="0.64"
                                    strokeWidth="4"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={commonTransition}
                                />
                            </motion.svg>


                        </div>

                    </div>


                </div>
                <div className="w-full lg:w-1/2 mt-4 lg:mt-10 relative">
                    <div className="relative h-[260px] sm:h-[360px] lg:h-[460px] w-full">
                        <video
                            ref={videoRef}
                            src="/trackforce_video.mp4"
                            controls
                            preload="none"
                            poster="/thumbnail.png"
                            playsInline
                            onClick={handleVideoClick}
                            onPlay={() => setIsPlaying(true)}
                            onPause={() => setIsPlaying(false)}
                            className={isFullscreen ? "" : "-mt-2.5 absolute top-[53%] left-1/2 w-[94.5%] z-10 object-cover cursor-pointer -translate-x-1/2 -translate-y-1/2"}
                        />

                        {!isPlaying && (
                            <motion.button
                                type="button"
                                onClick={handleVideoClick}
                                aria-label="Play video"
                                initial={{ opacity: 0, scale: 0.8 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.8 }}
                                whileHover={{ scale: 1.08 }}
                                whileTap={{ scale: 0.95 }}
                                className="absolute top-1/2 left-1/2 z-20 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-20 h-20 rounded-full bg-[#1B73E8] backdrop-blur-sm shadow-2xl cursor-pointer z-10"
                            >
                                <motion.span
                                    className="absolute inset-0 rounded-full border border-[#1B73E8]/70"
                                    animate={{ scale: [1.1, 1.3, 1.1] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                />
                                <motion.span
                                    className="absolute inset-0 rounded-full border border-[#1B73E8]/70"
                                    animate={{ scale: [1.3, 1.6, 1.3] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                />
                                <motion.span
                                    className="absolute inset-0 rounded-full border border-[#1B73E8]/70"
                                    animate={{ scale: [1.5, 1.9, 1.5] }}
                                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                                />
                                <svg
                                    viewBox="0 0 24 24"
                                    className="relative w-8 h-8 ml-1 text-white"
                                    fill="currentColor"
                                >
                                    <path d="M8 5v14l11-7z" />
                                </svg>
                            </motion.button>
                        )}

                        <Image
                            src={video_bg}
                            alt="TrackForce product video frame"
                            priority
                            quality={90}
                            className="absolute top-0 left-0 w-full h-full object-cover z-0"
                        />
                    </div>

                    {/* <div className="flex items-center relative"> */}
                    <div className="absolute z-[99] -bottom-10 sm:-bottom-12 lg:-bottom-15 right-2 sm:right-6 lg:right-10 flex items-center scale-65 sm:scale-80 lg:scale-100 origin-bottom-right">
                        <div className="hidden md:flex">
                            <span className="font-playball  text-[26px] text-white absolute -left-15 -bottom-3">Trust Badge</span>

                            <motion.svg
                                width="77"
                                height="75"
                                viewBox="0 0 77 75"
                                xmlns="http://www.w3.org/2000/svg"
                                className={"w-[88] mt-5"}
                            >
                                {/* Line draw */}
                                <motion.path
                                    d={path}
                                    fill="none"
                                    stroke="white"
                                    strokeWidth="2.7"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{
                                        duration: 1,
                                        ease: "easeInOut",
                                        repeat: Infinity,
                                        repeatType: "loop",
                                        repeatDelay: 1
                                    }}
                                />

                                {/* Moving Arrow */}
                                <motion.g
                                    style={{
                                        offsetPath: `path('${path}')`,
                                        offsetRotate: "auto"
                                    }}
                                    initial={{ offsetDistance: "0%" }}
                                    animate={{ offsetDistance: "100%" }}
                                    transition={{
                                        duration: 1.5,
                                        ease: "easeInOut",
                                        repeat: Infinity,
                                        repeatType: "loop",
                                        repeatDelay: 1
                                    }}
                                >
                                    <path
                                        // d="M0 0 L10 5 L0 10"
                                        d="M0 0 L14 7 L0 14"
                                        fill="none"
                                        stroke="white"
                                        strokeWidth="2.7"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        //  transform="translate(-5,-5)"
                                        transform="translate(-7,-7)"
                                    />
                                </motion.g>



                            </motion.svg>


                        </div>
                        {/* Main badge container */}
                        <div className=" relative hero-badge text-black rounded-lg shadow-lg overflow-hidden w-[400] h-[100] z-50">

                            {/* Shine Animation Layer - এই ডিভটি অ্যানিমেশন তৈরি করবে */}
                            {/* <div className="absolute top-0 left-[-100%] w-1/2 h-full bg-gradient-to-r from-transparent via-white/60 to-transparent skew-x-[-25deg] animate-shine-reverse pointer-events-none"></div> */}
                            <div className="absolute top-0 -left-full w-[100] h-full bg-linear-to-r from-transparent via-white/60 to-white/80  skew-x-[-25deg] animate-shine-reverse pointer-events-none"></div>

                            {/* Top row - Excellent + star */}
                            <div className="px-5 pt-3 pb-1 flex items-center gap-3">
                                <span className="text-2xl tracking-tight text-[22px] font-semibold text-[#2B2B2B]">Excellent</span>
                                <span className="text-gray-500 font-medium">|</span>

                                <div className="flex items-center gap-1">
                                    <StarFilled color="green-500" />
                                    <span className="font-semibold">Trustpilot</span>
                                </div>
                            </div>

                            {/* Bottom row - reviews + stars */}
                            <div className="px-5 py-2.5 flex items-center justify-between text-sm">
                                <div className=" text-gray-700 text-lg">
                                    Based on 456 reviews
                                </div>

                                <div className="flex items-center gap-0.5">
                                    <div className="bg-green-500 p-[3]"> <StarFilled color="white" /></div>
                                    <div className="bg-green-500 p-[3]"> <StarFilled color="white" /></div>
                                    <div className="bg-green-500 p-[3]"> <StarFilled color="white" /></div>
                                    <div className="bg-green-500 p-[3]"> <StarFilled color="white" /></div>
                                    <div className="bg-green-500 p-[3]"> <StarFilled color="white" /></div>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
            </div>

            <StatusModal
                open={modal.open}
                type={modal.type}
                title={modal.title}
                description={modal.description}
                onClose={closeModal}
            />
        </div >

    );
};

export default Hero;



type Props = {
    color?: string;
};
function StarFilled({ color = 'white' }: Props) {
    return (
        <svg
            className={`w-5 h-5 text-${color} drop-shadow-sm`}
            fill="currentColor"
            viewBox="0 0 20 20"
        >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
    );
}

function StarHalf() {
    return (
        <svg
            className="w-5 h-5 text-[#009f66] drop-shadow-sm"
            viewBox="0 0 20 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
                fill="currentColor"
                clipPath="url(#half-star)"
            />
            <defs>
                <clipPath id="half-star">
                    <rect x="0" y="0" width="10" height="20" />
                </clipPath>
            </defs>
        </svg>
    );
}