
"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import trackforce from "../../../public/trackforce.png";
import Link from "next/link";
export default function BookDemoBtn() {
    return (
        <Link href={'/contact'}  className="group custom-button relative w-fit text-white font-bold py-[14px] px-[22px] rounded-[16px] flex gap-3 justify-between items-center" style={{
            background: "linear-gradient(96deg, #000 10.77%, #2B2B2B 75.18%, #6B6868 93.24%)",
             boxShadow: "0 0 4px 0 rgba(255, 255, 255, 0.25), 0 4px 15.1px 0 rgba(0, 0, 0, 0.25)"
        }}>
            <span className='group-hover:italic '>Book a Demo</span> <FaArrowRightLong className='group-hover:-rotate-[30deg] transition ease-in-out' />
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
    )
}
