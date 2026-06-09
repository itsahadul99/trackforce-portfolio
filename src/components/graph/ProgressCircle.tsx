


"use client";

import React, { useEffect, useState } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

interface ProgressCircleProps {
    percentage: number;
    size?: number;
    strokeWidth?: number;
    strokeColor?: string;
    label?: string;
    hoverBackground?: string;
    hoverBorder?: string;
    hoverBoxShadow?: string;
    hoverBackdropFilter?: string;
}

const ProgressCircle: React.FC<ProgressCircleProps> = ({
    percentage,
    size = 120,
    strokeWidth = 10,
    strokeColor,
    label,
    hoverBackground,
    hoverBorder,
    hoverBoxShadow,
    hoverBackdropFilter,
}) => {
    const radius = size / 2 - strokeWidth / 2;
    const circumference = 2 * Math.PI * radius;

    const dashOffset = useMotionValue(circumference);
    const displayPercentage = useTransform(
        dashOffset,
        [circumference, circumference - (percentage / 100) * circumference],
        [0, percentage]
    );

    const dynamicStroke = useTransform(displayPercentage, [0, 100], [2, strokeWidth * 2]);

    const [roundedPercentage, setRoundedPercentage] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    useEffect(() => {
        const unsubscribe = displayPercentage.onChange((val) => setRoundedPercentage(Math.round(val)));
        return () => unsubscribe();
    }, [displayPercentage]);

    return (
        <div
            className="flex flex-col items-center justify-center relative w-64 h-64 rounded-2xl overflow-hidden bg-white transition-all duration-500 ease-in-out"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                border: isHovered && hoverBorder ? hoverBorder : "2px solid transparent",
                boxShadow: isHovered && hoverBoxShadow ? hoverBoxShadow : undefined,
                backdropFilter: isHovered && hoverBackdropFilter ? hoverBackdropFilter : undefined,
            }}
        >
            {/* Background that slides up from bottom */}
            <div
                className="absolute inset-x-0 bottom-0 rounded-2xl transition-all duration-500 ease-in-out"
                style={{
                    height: isHovered ? "100%" : "0%",
                    background:
                        hoverBackground ??
                        `linear-gradient(180deg, ${strokeColor}10, ${strokeColor}20, ${strokeColor}50)`,
                }}
            />
            <svg height={size} width={size} className="rotate-[-90deg] relative z-10">
                {/* Background Circle */}
                <circle
                    stroke="#E7E5E4"
                    fill="transparent"
                    strokeWidth={strokeWidth}
                    r={radius}
                    cx={size / 2}
                    cy={size / 2}
                />

                {/* Animated Circle */}
                <motion.circle
                    stroke={strokeColor}
                    fill="transparent"
                    strokeLinecap="round"
                    r={radius}
                    cx={size / 2}
                    cy={size / 2}
                    strokeDasharray={circumference}
                    strokeDashoffset={dashOffset}
                    strokeWidth={strokeWidth} // fixed
                    animate={{
                        strokeDashoffset: [circumference, circumference - (percentage / 100) * circumference],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "linear",
                        repeatDelay: 2,
                    }}
                />

                {/* Center animated percentage rotated 90deg */}
                <g transform={`rotate(90, ${size / 2}, ${size / 2})`}>
                    <text
                        x="50%"
                        y="50%"
                        dominantBaseline="middle"
                        textAnchor="middle"
                        className="text-lg font-semibold fill-black"
                    >
                        {roundedPercentage}%
                    </text>
                </g>
            </svg>

            {label && (
                <p className="mt-4 text-center font-bold text-[#2E2D32] text-base w-1/2 relative z-10">{label}</p>
            )}
        </div>
    );
};

export default ProgressCircle;