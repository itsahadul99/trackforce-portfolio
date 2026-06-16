"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#060D1F]">
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(27,115,232,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(27,115,232,0.07) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Glowing orbs */}
      <motion.div
        className="absolute -top-32 -left-32 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(27,115,232,0.18) 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.12, 1], opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -bottom-40 -right-32 w-[560px] h-[560px] rounded-full pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, rgba(159,96,238,0.18) 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/trackforce_logo.png"
            alt="TrackForce Logo"
            width={56}
            height={56}
            className="mb-8"
          />
        </motion.div>

        {/* 404 */}
        <motion.h1
          className="font-rubik font-extrabold text-[120px] sm:text-[160px] lg:text-[200px] leading-none select-none"
          style={{
            background: "linear-gradient(90deg, #1B73E8 0%, #9F60EE 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          404
        </motion.h1>

        {/* Divider line with gradient */}
        <motion.div
          className="w-24 h-[2px] rounded-full mb-8"
          style={{
            background: "linear-gradient(90deg, #1B73E8 0%, #9F60EE 100%)",
          }}
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        />

        {/* Heading */}
        <motion.h2
          className="text-white font-rubik font-bold text-2xl sm:text-3xl mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Page Not Found
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-white/50 text-base sm:text-lg max-w-md mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
          Let&apos;s get you back on track.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Link
            href="/home"
            className="group relative flex items-center gap-3 px-7 py-3.5 rounded-2xl font-bold text-white overflow-hidden"
            style={{
              background: "linear-gradient(90deg, #1B73E8 0%, #9F60EE 100%)",
              boxShadow: "0 0 24px 0 rgba(27,115,232,0.35)",
            }}
          >
            <span className="group-hover:italic transition-all">Go Home</span>
            <FaArrowRightLong className="group-hover:-rotate-[30deg] transition-transform" />
          </Link>

          <Link
            href="/contact"
            className="flex items-center gap-3 px-7 py-3.5 rounded-2xl font-semibold text-white/70 border border-white/10 hover:border-white/30 hover:text-white transition-all"
          >
            Contact Support
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
