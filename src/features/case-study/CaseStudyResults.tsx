// 1st version

// "use client";

// import { useCallback, useEffect, useRef, useState } from "react";

// const CURVE_DEPTH = 60; // max horizontal offset (items 1 & 5)

// const CaseStudyResults = () => {
//   const containerRef = useRef<HTMLDivElement>(null);
//   const row1Ref = useRef<HTMLDivElement>(null);
//   const row2Ref = useRef<HTMLDivElement>(null);
//   const row3Ref = useRef<HTMLDivElement>(null);
//   const row4Ref = useRef<HTMLDivElement>(null);
//   const row5Ref = useRef<HTMLDivElement>(null);
//   const [offsets, setOffsets] = useState([0, 0, 0, 0, 0]);
//   const [arc, setArc] = useState({ path: "", cardPath: "", width: 0, height: 0, offsetX: 0 });

//   const update = useCallback(() => {
//     if (!containerRef.current) return;
//     const containerRect = containerRef.current.getBoundingClientRect();
//     const rowRefs = [row1Ref, row2Ref, row3Ref, row4Ref, row5Ref];

//     // Get center Y of each row's dot (dot is 40px, centered vertically)
//     const ys: number[] = [];
//     rowRefs.forEach((ref) => {
//       if (ref.current) {
//         const rect = ref.current.getBoundingClientRect();
//         ys.push(rect.top + rect.height / 2 - containerRect.top);
//       }
//     });
//     if (ys.length < 5) return;

//     const topY = ys[0];
//     const botY = ys[4];
//     const midY = (topY + botY) / 2;
//     const halfH = (botY - topY) / 2;

//     // Circle equation: points at top/bottom are at x=-CURVE_DEPTH, middle at x=0
//     // Center is at (cx, midY). r = |cx|.
//     // At midY: x=0 → (0 - cx)^2 = r^2 → r = |cx|, cx < 0
//     // At topY: (-CURVE_DEPTH - cx)^2 + halfH^2 = cx^2
//     // Expanding: CURVE_DEPTH^2 + 2*CURVE_DEPTH*cx + cx^2 + halfH^2 = cx^2
//     // cx = -(CURVE_DEPTH^2 + halfH^2) / (2 * CURVE_DEPTH)
//     const cx = -(CURVE_DEPTH * CURVE_DEPTH + halfH * halfH) / (2 * CURVE_DEPTH);
//     const r = Math.abs(cx);

//     // For each row, calculate x on the circle at its y
//     const newOffsets = ys.map((y) => {
//       const dy = y - midY;
//       const xOnCircle = cx + Math.sqrt(Math.max(0, r * r - dy * dy));
//       return xOnCircle;
//     });

//     setOffsets(newOffsets);

//     // Build SVG arc path
//     // Dot center x for each point (20px = half of 40px dot)
//     const dotPoints = newOffsets.map((ox, i) => ({
//       x: ox + 20,
//       y: ys[i],
//     }));

//     const minX = Math.min(...dotPoints.map((p) => p.x));
//     const maxX = Math.max(...dotPoints.map((p) => p.x));
//     const svgOffsetX = minX - 10;
//     const svgWidth = maxX - minX + 20;

//     const p1 = { x: dotPoints[0].x - svgOffsetX, y: dotPoints[0].y };
//     const p5 = { x: dotPoints[4].x - svgOffsetX, y: dotPoints[4].y };

//     const sweep = cx < 0 ? 1 : 0;
//     const path = `M ${p1.x} ${p1.y} A ${r} ${r} 0 0 ${sweep} ${p5.x} ${p5.y}`;

//     // Card left edges arc (dot + gap = 64px to the right of dot center)
//     const cardShift = 44; // 20px (dot half) + 24px (gap)
//     const cardR = r + cardShift;
//     const cp1 = { x: p1.x + cardShift, y: p1.y };
//     const cp5 = { x: p5.x + cardShift, y: p5.y };
//     const cardPath = `M ${cp1.x} ${cp1.y} A ${cardR} ${cardR} 0 0 ${sweep} ${cp5.x} ${cp5.y}`;

//     setArc({
//       path,
//       cardPath,
//       width: Math.max(svgWidth, maxX - minX + cardShift + 20),
//       height: containerRect.height,
//       offsetX: svgOffsetX,
//     });
//   }, []);

//   useEffect(() => {
//     const frame1 = requestAnimationFrame(() => {
//       update();
//       requestAnimationFrame(() => update());
//     });
//     window.addEventListener("resize", update);
//     return () => {
//       cancelAnimationFrame(frame1);
//       window.removeEventListener("resize", update);
//     };
//   }, [update]);

//   return (
//     <div className="py-16 md:py-24 bg-[#e8eefb] relative overflow-hidden">
//       {/* Decorative blur - right side */}
//       <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-[#8b9cf7]/25 blur-[100px] pointer-events-none" />

//       <div className="w-full max-w-[1300] mx-auto px-4 relative z-10">
//         {/* Heading */}
//         <div className="text-center mb-12">
//           <h2 className="text-4xl md:text-[42px] font-bold text-[#1a1a2e] mb-3">
//             Measurable Business{" "}
//             <span className="font-playball font-normal">Results</span>
//           </h2>
//           <p className="text-[#1a1a2e]/70 text-sm">
//             Within months of implementation, Akij iBOS achieved:
//           </p>
//         </div>

//         {/* Timeline */}
//         <div ref={containerRef} className="max-w-2xl mx-auto relative">
//           {/* Single circle arc connector */}
//           {arc.path && (
//             <svg
//               className="absolute top-0 z-0 pointer-events-none"
//               style={{ left: arc.offsetX }}
//               width={arc.width}
//               height={arc.height}
//               fill="none"
//             >
//               {/* Glow layer */}
//               <path
//                 d={arc.path}
//                 stroke="url(#glowGradient)"
//                 strokeWidth="6"
//                 fill="none"
//                 strokeLinecap="round"
//                 opacity="0.3"
//               />
//               {/* Main line */}
//               <path
//                 d={arc.path}
//                 stroke="url(#mainGradient)"
//                 strokeWidth="2.5"
//                 fill="none"
//                 strokeLinecap="round"
//               />
//               {/* Animated dash */}
//               <path
//                 d={arc.path}
//                 stroke="white"
//                 strokeWidth="2"
//                 fill="none"
//                 strokeLinecap="round"
//                 strokeDasharray="8 16"
//                 opacity="0.4"
//               >
//                 <animate
//                   attributeName="stroke-dashoffset"
//                   from="0"
//                   to="-48"
//                   dur="2s"
//                   repeatCount="indefinite"
//                 />
//               </path>
//               <defs>
//                 <linearGradient id="mainGradient" x1="0" y1="0" x2="0" y2="1">
//                   <stop offset="0%" stopColor="#e74c3c" stopOpacity="0.6" />
//                   <stop offset="25%" stopColor="#3498db" stopOpacity="0.6" />
//                   <stop offset="50%" stopColor="#2ecc71" stopOpacity="0.6" />
//                   <stop offset="75%" stopColor="#f1c40f" stopOpacity="0.6" />
//                   <stop offset="100%" stopColor="#9b59b6" stopOpacity="0.6" />
//                 </linearGradient>
//                 <linearGradient id="glowGradient" x1="0" y1="0" x2="0" y2="1">
//                   <stop offset="0%" stopColor="#e74c3c" stopOpacity="0.3" />
//                   <stop offset="25%" stopColor="#3498db" stopOpacity="0.3" />
//                   <stop offset="50%" stopColor="#2ecc71" stopOpacity="0.3" />
//                   <stop offset="75%" stopColor="#f1c40f" stopOpacity="0.3" />
//                   <stop offset="100%" stopColor="#9b59b6" stopOpacity="0.3" />
//                 </linearGradient>
//               </defs>
//             </svg>
//           )}

//           <div className="flex flex-col gap-6">
//             {/* 1 - Red */}
//             <div
//               ref={row1Ref}
//               className="flex items-center gap-12"
//               style={{ marginLeft: offsets[0] }}
//             >
//               <div className="relative z-10 shrink-0 w-10 h-10 rounded-full bg-white flex items-center justify-center border-[2.5px] border-[#e74c3c] shadow-[0_0_12px_rgba(231,76,60,0.3)]">
//                 <div className="w-3 h-3 rounded-full bg-[#e74c3c]" />
//               </div>
//               <div className="bg-white rounded-full px-6 py-4 flex-1 shadow-sm">
//                 <h3 className="text-sm font-bold text-[#1a1a2e] mb-0.5">
//                   60% Reduction in Manual Reporting
//                 </h3>
//                 <p className="text-[#1a1a2e]/60 text-xs">
//                   Automated dashboards eliminated HR data compilation.
//                 </p>
//               </div>
//             </div>

//             {/* 2 - Blue */}
//             <div
//               ref={row2Ref}
//               className="flex items-center gap-12"
//               style={{ marginLeft: offsets[1] }}
//             >
//               <div className="relative z-10 shrink-0 w-10 h-10 rounded-full bg-white flex items-center justify-center border-[2.5px] border-[#3498db] shadow-[0_0_12px_rgba(52,152,219,0.3)]">
//                 <div className="w-3 h-3 rounded-full bg-[#3498db]" />
//               </div>
//               <div className="bg-white rounded-full px-6 py-4 flex-1 shadow-sm">
//                 <h3 className="text-sm font-bold text-[#1a1a2e] mb-0.5">
//                   Full Remote Visibility
//                 </h3>
//                 <p className="text-[#1a1a2e]/60 text-xs">
//                   Real-time monitoring replaced guesswork.
//                 </p>
//               </div>
//             </div>

//             {/* 3 - Green */}
//             <div
//               ref={row3Ref}
//               className="flex items-center gap-12"
//               style={{ marginLeft: offsets[2] }}
//             >
//               <div className="relative z-10 shrink-0 w-10 h-10 rounded-full bg-white flex items-center justify-center border-[2.5px] border-[#2ecc71] shadow-[0_0_12px_rgba(46,204,113,0.3)]">
//                 <div className="w-3 h-3 rounded-full bg-[#2ecc71]" />
//               </div>
//               <div className="bg-white rounded-full px-6 py-4 flex-1 shadow-sm">
//                 <h3 className="text-sm font-bold text-[#1a1a2e] mb-0.5">
//                   Improved Utilization Tracking
//                 </h3>
//                 <p className="text-[#1a1a2e]/60 text-xs">
//                   Idle time and workload imbalance became measurable.
//                 </p>
//               </div>
//             </div>

//             {/* 4 - Yellow */}
//             <div
//               ref={row4Ref}
//               className="flex items-center gap-12"
//               style={{ marginLeft: offsets[3] }}
//             >
//               <div className="relative z-10 shrink-0 w-10 h-10 rounded-full bg-white flex items-center justify-center border-[2.5px] border-[#f1c40f] shadow-[0_0_12px_rgba(241,196,15,0.3)]">
//                 <div className="w-3 h-3 rounded-full bg-[#f1c40f]" />
//               </div>
//               <div className="bg-white rounded-full px-6 py-4 flex-1 shadow-sm">
//                 <h3 className="text-sm font-bold text-[#1a1a2e] mb-0.5">
//                   Faster Issue Resolution
//                 </h3>
//                 <p className="text-[#1a1a2e]/60 text-xs">
//                   Screen records & activity logs enabled quick conflict
//                   resolution.
//                 </p>
//               </div>
//             </div>

//             {/* 5 - Purple */}
//             <div
//               ref={row5Ref}
//               className="flex items-center gap-12"
//               style={{ marginLeft: offsets[4] }}
//             >
//               <div className="relative z-10 shrink-0 w-10 h-10 rounded-full bg-white flex items-center justify-center border-[2.5px] border-[#9b59b6] shadow-[0_0_12px_rgba(155,89,182,0.3)]">
//                 <div className="w-3 h-3 rounded-full bg-[#9b59b6]" />
//               </div>
//               <div className="bg-white rounded-full px-6 py-4 flex-1 shadow-sm">
//                 <h3 className="text-sm font-bold text-[#1a1a2e] mb-0.5">
//                   Stronger Data Governance
//                 </h3>
//                 <p className="text-[#1a1a2e]/60 text-xs">
//                   File transfer monitoring reduced internal security risks.
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CaseStudyResults;




// 2nd version
"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, Variants } from "framer-motion";

const CURVE_DEPTH = 80; // কার্ভটি কতটা গভীর হবে

const CaseStudyResults = () => {
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
    const height = botY - topY;
    const halfH = height / 2;

    // সার্কেল ম্যাথমেটিক্স: 
    // cx নির্ণয় করা যাতে টপ ও বটম পয়েন্ট CURVE_DEPTH এ থাকে এবং মাঝের পয়েন্ট ০ তে থাকে
    const cx = -(CURVE_DEPTH * CURVE_DEPTH + halfH * halfH) / (2 * CURVE_DEPTH);
    const r = Math.abs(cx);

    const newOffsets = ys.map((y) => {
      const dy = y - midY;
      const xOnCircle = cx + Math.sqrt(Math.max(0, r * r - dy * dy));
      return xOnCircle + CURVE_DEPTH; // পজিটিভ অফসেট রাখার জন্য
    });

    setOffsets(newOffsets);

    // SVG পাথ ড্রয়িং
    // ডট এর সেন্টার (x: offset + 28, y: ys)
    const dotWidth = 56;
    const dotCenter = dotWidth / 2;

    // SVG এর বাম পাশের ফাঁকা জায়গা ঠিক করা
    const minX = Math.min(...newOffsets);
    const svgWidth = CURVE_DEPTH + 100;

    const p1 = { x: newOffsets[0] + dotCenter, y: ys[0] };
    const p5 = { x: newOffsets[4] + dotCenter, y: ys[4] };

    // SVG Arc Path
    const path = `M ${p1.x} ${p1.y} A ${r} ${r} 0 0 1 ${p5.x} ${p5.y}`;

    setArc({
      path,
      width: containerRect.width,
      height: containerRect.height,
      offsetX: 0,
    });
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => update(), 100);
    window.addEventListener("resize", update);
    return () => {
      clearTimeout(timer);
      window.removeEventListener("resize", update);
    };
  }, [update]);

  // Disable animations on small screens for performance and UX
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

  const content = [
    { title: "60% Reduction in Manual Reporting", desc: "Automated dashboards eliminated HR data compilation." },
    { title: "Full Remote Visibility", desc: "Real-time monitoring replaced guesswork." },
    { title: "Improved Utilization Tracking", desc: "Idle time and workload imbalance became measurable." },
    { title: "Faster Issue Resolution", desc: "Screen records activity logs enabled quick conflict resolution." },
    { title: "Stronger Data Governance", desc: "File transfer monitoring reduced internal security risks." },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 8 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.12, when: "beforeChildren" },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 12 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="py-16 md:py-24 bg-[#e8eefb] relative overflow-hidden bg-[url('/mesurableBg.png')] bg-cover bg-center bg-no-repeat">
      <div className="w-full lg:w-[1200px] mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-[42px] font-bold text-[#1a1a2e] mb-3">
            Measurable Business <span className="font-serif italic font-normal">Results</span>
          </h2>
          <p className="text-[#1a1a2e]/70 text-lg">Within months of implementation, Akij iBOS achieved:</p>
        </div>

        <div ref={containerRef} className="max-w-2xl mx-auto relative min-h-[600px]">
          {/* Arc Line */}
          {arc.path && (
            <svg
              className="absolute inset-0 z-0 pointer-events-none"
              width="100%"
              height="100%"
            >
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
                <path
                  d={arc.path}
                  stroke="url(#lineGradient)"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                  className="opacity-60"
                />
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
                {/* The Point (Dot) */}
                <div className={`relative z-10 shrink-0 w-14 h-14 rounded-full bg-white flex items-center justify-center border-[2.5px] ${colors[i].border} ${colors[i].shadow}`}>
                  <motion.div
                    className={`w-8 h-8 rounded-full ${colors[i].bg}`}
                    animate={isSmall ? undefined : { scale: [0.95, 1.05, 0.95] }}
                    transition={isSmall ? undefined : { duration: 2.8, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>

                {/* Card */}
                <motion.div className="bg-white rounded-full px-10 py-4 flex-1 shadow-sm border border-black/5">
                  <h3 className="text-sm md:text-base font-bold text-[#1a1a2e] mb-0.5">{item.title}</h3>
                  <p className="text-[#1a1a2e]/60 text-xs md:text-sm">{item.desc}</p>
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