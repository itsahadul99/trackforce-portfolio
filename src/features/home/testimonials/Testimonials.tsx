



/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import BookDemoBtn from "@/components/shared/BookDemoBtn";
import { animate, AnimationPlaybackControls } from "framer-motion";
import { Play } from "lucide-react";
import Image from "next/image";
import { useEffect, useRef } from "react";
import type { CmsTestimonial } from "@/lib/cms";

const HARDCODED_TESTIMONIALS = [
  { sl: 1, name: "Devon Lane", role: "HR Manager, L’Oréal", text: `"Managing a distributed team used to feel overwhelming, but TrackForce changed everything. We now have real-time visibility into our workflows, making collaboration smoother and decisions much more confident."`, avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop&crop=faces", type: "text", rate: 4.9 },
  { sl: 2, name: "Savannah Nguyen", role: "Marketing Head, eBay", text: `"TrackForce has completely redefined how we manage campaigns. The real-time insights and intuitive interface allow us to optimize faster and stay ahead of deadlines effortlessly."`, avatar: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=200&h=200&fit=crop&crop=faces", type: "text", rate: 4.8 },
  { sl: 3, name: "Jerome Bell", role: "IT Manager, IBM", image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=500&fit=crop", avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&h=200&fit=crop&crop=faces", type: "video", rate: 4.7 },
  { sl: 4, name: "Jane Cooper", role: "CEO, Louis Vuitton", text: `"Before TrackForce, our operations felt fragmented and difficult to track. Now, everything is centralized, structured, and incredibly easy to monitor."`, avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&h=200&fit=crop&crop=faces", type: "rating", rate: 4.9 },
  { sl: 5, name: "Ralph Edwards", role: "CTO, Ferrari", image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=500&fit=crop", avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&h=200&fit=crop&crop=faces", type: "video", rate: 4.6 },
  { sl: 6, name: "Jane Cooper", role: "CEO, Louis Vuitton", text: `"TrackForce brought all our tools and workflows into one unified platform. It simplified our processes and gave us the clarity we were missing."`, avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&h=200&fit=crop&crop=faces", type: "rating", rate: 5.0 },
  { sl: 7, name: "Ralph Edwards", role: "CTO, Ferrari", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=800&h=500&fit=crop", avatar: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&h=200&fit=crop&crop=faces", type: "video", rate: 4.5 },
  { sl: 8, name: "Savannah Nguyen", role: "Marketing Head, eBay", text: `"A reliable and intuitive platform for tracking team productivity. It’s fast, easy to use, and genuinely improves how we manage day-to-day operations."`, avatar: "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=200&h=200&fit=crop&crop=faces", type: "text", rate: 4.8 },
];

interface TestimonialsProps {
  initialTestimonials?: CmsTestimonial[];
}

const Testimonials = ({ initialTestimonials }: TestimonialsProps) => {
  const testimonials = initialTestimonials && initialTestimonials.length > 0
    ? initialTestimonials.map((t, i) => ({
        sl: i + 1,
        name: t.name,
        role: `${t.role}${t.company ? `, ${t.company}` : ""}`,
        text: t.text ? `"${t.text}"` : undefined,
        image: t.videoUrl ?? undefined,
        avatar: t.avatar,
        type: t.type as "text" | "video" | "rating",
        rate: t.rating,
      }))
    : HARDCODED_TESTIMONIALS;

  const col1 = testimonials.filter((_, i) => i % 2 === 0);
  const col2 = testimonials.filter((_, i) => i % 2 !== 0);

  const col1Ref = useRef<HTMLDivElement>(null);
  const col2Ref = useRef<HTMLDivElement>(null);
  const controlsRef = useRef<AnimationPlaybackControls[]>([]);

  useEffect(() => {
    const controls: AnimationPlaybackControls[] = [];
    // Each column renders its cards twice; moving by exactly one set (-/+50%)
    // makes the loop seamless. Linear + no dwell = instant, continuous scroll.
    if (col1Ref.current) {
      controls.push(
        animate(col1Ref.current, { y: ["0%", "-50%"] }, { duration: 25, ease: "linear", repeat: Infinity })
      );
    }
    if (col2Ref.current) {
      controls.push(
        animate(col2Ref.current, { y: ["-50%", "0%"] }, { duration: 25, ease: "linear", repeat: Infinity })
      );
    }
    controlsRef.current = controls;

    return () => controls.forEach((c) => c.stop());
  }, []);

  // Pause both columns on hover, resume from the exact spot on leave.
  const pause = () => controlsRef.current.forEach((c) => c.pause());
  const resume = () => controlsRef.current.forEach((c) => c.play());

  return (
    <section className="w-full ">
      <div className="max-w-[1300] mx-auto px-4 sm:px-6 xl:px-0">
        <div className="flex flex-col lg:flex-row gap-10 px-4 xl:px-0">

          {/* LEFT TEXT */}
          <div className="w-full lg:w-[35%] flex flex-col justify-center text-center lg:text-left items-center lg:items-start">
                <div className="content_title_border_new w-fit mb-1">
                  <div className="px-4 py-2 text-sm font-semibold content_title_text_new">
                Testimonials
              </div>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold mb-2 text-black leading-tight">
              <span className="font-playball font-normal">Trusted</span> By
              Leading Companies
            </h2>

            <p className="text-gray-600 text-sm sm:text-base mt-6">
              The best proof of TrackForce’s impact comes from teams
              transforming how they work.
            </p>

            <div className="mt-5">
             <BookDemoBtn />
            </div>
          </div>

          {/* RIGHT GRID */}
          <div className="w-full lg:w-[65%] relative">

            {/* fade top */}
            <div className="absolute top-0 left-0 w-full h-16 bg-gradient-to-b from-[#dde2f3] to-transparent z-10" />

            {/* fade bottom */}
            <div className="absolute bottom-0 left-0 w-full h-16 bg-gradient-to-t from-[#e4e9fa] to-transparent z-10" />

            <div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 h-[500px] sm:h-[600px] overflow-hidden"
              onMouseEnter={pause}
              onMouseLeave={resume}
            >
              <div ref={col1Ref} className="flex flex-col gap-6 will-change-transform">
                {[...col1, ...col1].map((item, i) => (
                  <Card key={i} item={item} />
                ))}
              </div>
              <div ref={col2Ref} className="flex flex-col gap-6 will-change-transform">
                {[...col2, ...col2].map((item, i) => (
                  <Card key={i} item={item} />
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;

const Card = ({ item }: any) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-4 sm:p-6">

      {/* VIDEO */}
      {item.type === "video" && (
        <div className="relative h-[180px] sm:h-[220px] w-full rounded-xl overflow-hidden">
          <Image src={item.image} alt={`Video testimonial from ${item.name}, ${item.role}`} fill quality={90} sizes="100vw" className="object-cover" />

          <div className="absolute inset-0 flex items-center justify-center">
            <button aria-label={`Play video testimonial from ${item.name}`} className="bg-white/90 p-3 rounded-full shadow">
              <Play size={20} />
            </button>
          </div>

          <div className="absolute top-4 left-4 flex items-center gap-2 text-white">
            <Image
              src={item.avatar}
              alt={item.name}
              width={34}
              height={34}
              className="rounded-full border-2 border-white"
            />
            <div>
              <p className="text-sm font-semibold">{item.name}</p>
              <p className="text-xs">{item.role}</p>
            </div>
          </div>
        </div>
      )}

      {/* TEXT + RATING */}
      {(item.type === "text" || item.type === "rating") && (
        <>
          {/* ⭐ Rating */}
          <div className="mb-3">
            {/* <StarRating rate={item.rate} /> */}
            <div className="text-orange-400">★★★★★</div>
          </div>

          {/* 📝 Text */}
          <p className="text-gray-600 text-sm mb-6">{item.text}</p>

          {/* 👤 User */}
          <div className="flex items-center gap-3">
            <Image
              src={item.avatar}
              alt={item.name}
              width={36}
              height={36}
              className="rounded-full"
            />
            <div>
              <p className="font-semibold text-sm">{item.name}</p>
              <p className="text-xs text-gray-500">{item.role}</p>
            </div>
          </div>
        </>
      )}

    </div>
  );
};


const StarRating = ({ rate }: { rate: number }) => {
  return (
    <div className="flex items-center gap-1">

      {/* Stars */}
      <div className="flex items-center">
        {Array(5)
          .fill(0)
          .map((_, i) => {
            const full = i + 1 <= Math.floor(rate);
            const half = i + 0.5 === Math.floor(rate * 2) / 2 && !full;

            return (
              <span
                key={i}
                className={`text-lg transition-all duration-300 ${full || half ? "text-orange-400" : "text-gray-300"
                  }`}
              >
                {full ? "★" : half ? "☆" : "☆"}
              </span>
            );
          })}
      </div>

      {/* Rating number */}
      <span className="ml-2 text-sm font-semibold text-gray-700">
        {rate.toFixed(1)}
      </span>
    </div>
  );
};