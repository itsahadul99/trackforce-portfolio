"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, Variants } from "framer-motion";
import RichText from "@/components/shared/RichText";

const CURVE_DEPTH = 80;

type Props = { cms?: Record<string, string> }

const CaseStudyResults = ({ cms = {} }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const rowRefs = [
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
    useRef<HTMLDivElement>(null),
  ];

  const [offsets, setOffsets] = useState([0, 0, 0, 0, 0]);
  const [arc, setArc] = useState({ path: "", width: 0, height: 0, offsetX: 0 });

  const update = useCallback(() => {
    if (!containerRef.current) return;
    const containerRect = containerRef.current.getBoundingClientRect();

    const ys: number[] = [];
    rowRefs.forEach((ref) => {
      if (ref.current) {
        const rect = ref.current.getBoundingClientRect();
        ys.push(rect.top + 28 - containerRect.top);
      }
    });

    if (ys.length < 5) return;

    const topY = ys[0];
    const botY = ys[4];
    const midY = (topY + botY) / 2;
    const halfH = (botY - topY) / 2;

    const cx = -(CURVE_DEPTH * CURVE_DEPTH + halfH * halfH) / (2 * CURVE_DEPTH);
    const r = Math.abs(cx);

    const newOffsets = ys.map((y) => {
      const dy = y - midY;
      const xOnCircle = cx + Math.sqrt(Math.max(0, r * r - dy * dy));
      return xOnCircle + CURVE_DEPTH;
    });

    setOffsets(newOffsets);

    const dotCenter = 28;
    const p1 = { x: newOffsets[0] + dotCenter, y: ys[0] };
    const p5 = { x: newOffsets[4] + dotCenter, y: ys[4] };
    const path = `M ${p1.x} ${p1.y} A ${r} ${r} 0 0 1 ${p5.x} ${p5.y}`;

    setArc({ path, width: containerRect.width, height: containerRect.height, offsetX: 0 });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => update(), 100);
    window.addEventListener("resize", update);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  const [isSmall, setIsSmall] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 1023px)");
    const handler = () => setIsSmall(mq.matches);
    handler();
    mq.addEventListener?.("change", handler);
    return () => mq.removeEventListener?.("change", handler);
  }, []);

  const colors = [
    { border: "border-[#e74c3c]", bg: "bg-[#e74c3c]", shadow: "shadow-[0_0_12px_rgba(231,76,60,0.3)]" },
    { border: "border-[#3498db]", bg: "bg-[#3498db]", shadow: "shadow-[0_0_12px_rgba(52,152,219,0.3)]" },
    { border: "border-[#2ecc71]", bg: "bg-[#2ecc71]", shadow: "shadow-[0_0_12px_rgba(46,204,113,0.3)]" },
    { border: "border-[#f1c40f]", bg: "bg-[#f1c40f]", shadow: "shadow-[0_0_12px_rgba(241,196,15,0.3)]" },
    { border: "border-[#9b59b6]", bg: "bg-[#9b59b6]", shadow: "shadow-[0_0_12px_rgba(155,89,182,0.3)]" },
  ];

  const defaultContent = [
    { title: "60% Reduction in Manual Reporting", desc: "Automated dashboards eliminated HR data compilation." },
    { title: "Full Remote Visibility", desc: "Real-time monitoring replaced guesswork." },
    { title: "Improved Utilization Tracking", desc: "Idle time and workload imbalance became measurable." },
    { title: "Faster Issue Resolution", desc: "Screen records & activity logs enabled quick conflict resolution." },
    { title: "Stronger Data Governance", desc: "File transfer monitoring reduced internal security risks." },
  ];

  const content = defaultContent.map((item, i) => ({
    title: cms[`result${i + 1}_title`] || item.title,
    desc: cms[`result${i + 1}_desc`] || item.desc,
  }));

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 8 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.12, when: "beforeChildren" } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div
      className="py-16 md:py-24 bg-[#e8eefb] relative overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: cms.bg_image ? `url(${cms.bg_image}), url('/mesurableBg.png')` : `url('/mesurableBg.png')` }}
    >
      <div className="w-full lg:w-[1200px] mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-[42px] font-bold text-[#1a1a2e] mb-3">
            {cms.heading || <>Measurable Business <span className="font-serif italic font-normal">Results</span></>}
          </h2>
          <RichText className="text-[#1a1a2e]/70 text-lg" html={cms.subheading || "Within months of implementation, Akij iBOS achieved:"} />
        </div>

        <div ref={containerRef} className="max-w-2xl mx-auto relative min-h-[600px]">
          {arc.path && (
            <svg className="absolute inset-0 z-0 pointer-events-none" width="100%" height="100%">
              <path d={arc.path} stroke="rgba(0,0,0,0.08)" strokeWidth="2" fill="none" strokeDasharray="5,5" />
              {!isSmall ? (
                <motion.path
                  d={arc.path}
                  stroke="url(#lineGradient)"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  className="opacity-80"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1.6, ease: "easeOut" }}
                />
              ) : (
                <path d={arc.path} stroke="url(#lineGradient)" strokeWidth="3" fill="none" strokeLinecap="round" className="opacity-60" />
              )}
              <defs>
                <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" stopColor="#e74c3c" />
                  <stop offset="25%" stopColor="#3498db" />
                  <stop offset="50%" stopColor="#2ecc71" />
                  <stop offset="75%" stopColor="#f1c40f" />
                  <stop offset="100%" stopColor="#9b59b6" />
                </linearGradient>
              </defs>
            </svg>
          )}

          <motion.div
            className="flex flex-col gap-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.12 }}
          >
            {content.map((item, i) => (
              <motion.div
                key={i}
                ref={rowRefs[i]}
                className="flex items-center gap-12"
                style={{ marginLeft: `${offsets[i]}px` }}
                variants={itemVariants}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <div className={`relative z-10 shrink-0 w-14 h-14 rounded-full bg-white flex items-center justify-center border-[2.5px] ${colors[i].border} ${colors[i].shadow}`}>
                  <motion.div
                    className={`w-8 h-8 rounded-full ${colors[i].bg}`}
                    animate={isSmall ? undefined : { scale: [0.95, 1.05, 0.95] }}
                    transition={isSmall ? undefined : { duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
                <motion.div className="bg-white rounded-full px-10 py-4 flex-1 shadow-sm border border-black/5">
                  <h3 className="text-sm md:text-base font-bold text-[#1a1a2e] mb-0.5">{item.title}</h3>
                  <RichText className="text-[#1a1a2e]/60 text-xs md:text-sm" html={item.desc} />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyResults;
