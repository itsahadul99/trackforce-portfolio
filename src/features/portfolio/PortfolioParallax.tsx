// "use client";

// import { motion, useScroll, useTransform } from "framer-motion";
// import Image from "next/image";
// import { useRef } from "react";

// const cards = [
//     {
//         number: "01",
//         title: "Real-Time Productivity Dashboard",
//         points: [
//             "Live active vs idle time tracking",
//             "Web and application usage visualization",
//             "Insights on employees' performance on a project",
//             "Instant search and activity logs",
//         ],
//         result:
//             "Managers gained instant visibility into team productivity without manual follow-ups.",
//         gradient:
//             "linear-gradient(to right, #e8d5f5, #d5c8f0, #c8bde8, #d5c8f0, #e8d5f5)",
//     },
//     {
//         number: "02",
//         title: "Smart Monitoring & Evidence System",
//         description: "TrackForce introduced structured monitoring across:",
//         points: [
//             "Screenshot & screen recording capture",
//             "Application & website tracking",
//             "File transfer monitoring",
//             "Console command & keystroke records",
//             "Social media, email, instant messaging detection",
//         ],
//         gradient:
//             "linear-gradient(to right, #d5eaf5, #c5ddf0, #b8d4ec, #c5ddf0, #d5eaf5)",
//     },
//     {
//         number: "03",
//         title: "Advanced Reporting & Risk Detection",
//         points: [
//             "Daily Workload Report",
//             "Monthly Attendance Report",
//             "Utilization Rate Tracking",
//             "Risk User Identification (late login, excessive breaks, low work hours)",
//         ],
//         result:
//             "Management shifted from reactive supervision to proactive decision-making.",
//         gradient:
//             "linear-gradient(to right, #d5f0e0, #c2e8d0, #b5e0c5, #c2e8d0, #d5f0e0)",
//     },
// ];

// const PortfolioParallax = () => {
//     const containerRef = useRef(null);

//     const { scrollYProgress } = useScroll({
//         target: containerRef,
//         offset: ["start start", "end end"],
//     });

//     const card1Y = useTransform(scrollYProgress, [0, 0.3, 0.33], [0, 0, -150]);
//     const card2Y = useTransform(scrollYProgress, [0.33, 0.63, 0.66], [0, 0, -150]);
//     const card3Y = useTransform(scrollYProgress, [0.66, 1], [0, -150]);

//     const cardYValues = [card1Y, card2Y, card3Y];

//     return (
//         <div
//             ref={containerRef}
//             className="relative h-fit max-w-[1300] mx-auto mt-28 text-black"
//         >
//             {cards.map((card, index) => (
//                 <div
//                     key={index}
//                     className="h-[650px] sticky top-30"
//                     style={{ zIndex: (index + 1) * 10 }}
//                 >
//                     <motion.div
//                         style={{ y: cardYValues[index], background: card.gradient }}
//                         className="absolute inset-0 rounded-2xl w-full h-[450px] overflow-hidden shadow-lg border-2"
//                     >
//                         <h1 className="text-[24px] font-semibold text-[#2B2B2B]">Provide real-time activity insights</h1>
//                          <Image src={`/portPlx1.png`} alt={`plx`} width={400} height={300} className="w-[800px] h-[300px] object-cover rounded-lg" />
                     
//                     </motion.div>
//                 </div>
//             ))}
//         </div>
//     );
// };

// export default PortfolioParallax;




// 2nd version

// "use client";

// import { motion, useScroll, useTransform } from "framer-motion";
// import Image from "next/image";
// import { useRef } from "react";

// const cards = [
//   {
//     number: "01",
//     title: "Real-Time Productivity Dashboard",
//     points: [
//       "Live active vs idle time tracking",
//       "Web and application usage visualization",
//       "Insights on employees' performance on a project",
//       "Instant search and activity logs",
//     ],
//     result:
//       "Managers gained instant visibility into team productivity without manual follow-ups.",
//     gradient:
//       "linear-gradient(to right, #e8d5f5, #d5c8f0, #c8bde8, #d5c8f0, #e8d5f5)",
//   },
//   {
//     number: "02",
//     title: "Smart Monitoring & Evidence System",
//     points: [
//       "Screenshot & screen recording capture",
//       "Application & website tracking",
//       "File transfer monitoring",
//       "Console command & keystroke records",
//       "Social media, email, instant messaging detection",
//     ],
//     gradient:
//       "linear-gradient(to right, #d5eaf5, #c5ddf0, #b8d4ec, #c5ddf0, #d5eaf5)",
//   },
//   {
//     number: "03",
//     title: "Advanced Reporting & Risk Detection",
//     points: [
//       "Daily Workload Report",
//       "Monthly Attendance Report",
//       "Utilization Rate Tracking",
//       "Risk User Identification (late login, excessive breaks, low work hours)",
//     ],
//     result:
//       "Management shifted from reactive supervision to proactive decision-making.",
//     gradient:
//       "linear-gradient(to right, #d5f0e0, #c2e8d0, #b5e0c5, #c2e8d0, #d5f0e0)",
//   },
// ];

// const PortfolioParallax = () => {
//   const containerRef = useRef(null);
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   // Simplified: each card moves a bit on scroll
//   const yValues = cards.map((_, i) =>
//     useTransform(scrollYProgress, [0, 1], [0, -i * 150])
//   );

//   return (
//     <div
//       ref={containerRef}
//       className="relative h-fit max-w-[1300] mx-auto mt-28 text-black"
//     >
//       {cards.map((card, index) => (
//         <div key={index} className="h-[650px] sticky top-28">
//           <motion.div
//             style={{ y: yValues[index], background: card.gradient }}
//             className="absolute inset-0 rounded-2xl w-full h-[450px] overflow-hidden shadow-lg border-2 p-6"
//           >
//             <h1 className="text-[24px] font-semibold text-[#2B2B2B]">
//               {card.title}
//             </h1>
//             <ul className="mt-4 list-disc list-inside text-gray-700">
//               {card.points.map((point, idx) => (
//                 <li key={idx}>{point}</li>
//               ))}
//             </ul>
//             {card.result && (
//               <p className="mt-4 font-medium text-gray-900">{card.result}</p>
//             )}
//             <Image
//               src={`/portPlx1.png`}
//               alt={`plx`}
//               width={400}
//               height={300}
//               className="w-full h-[300px] object-cover rounded-lg mt-4"
//             />
//           </motion.div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default PortfolioParallax;






// 3rd version


// "use client";

// import { motion, useScroll, useTransform } from "framer-motion";
// import Image from "next/image";
// import { useRef } from "react";

// const cards = [
//   {
//     title: "Provide real-time activity insights",
//     image: "/portPlx0.png", // Replace with your actual image paths
//     gradient: "linear-gradient(180deg, #D6E4FF 0%, #FFFFFF 100%)",
//   },
//   {
//     title: "Detect productivity gaps instantly",
//     image: "/portPlx2.png",
//     gradient: "linear-gradient(180deg, #E0E0FF 0%, #FFFFFF 100%)",
//   },
//   {
//     title: "Identify risk behaviors early",
//     image: "/portPlx3.png",
//     gradient: "linear-gradient(180deg, #D4F3E7 0%, #FFFFFF 100%)",
//   },
//   {
//     title: "Deliver structured, hierarchy-based control",
//     image: "/portPlx4.png",
//     gradient: "linear-gradient(180deg, #F0F4F8 0%, #FFFFFF 100%)",
//   },
//   {
//     title: "Empower leadership with actionable analytics",
//     image: "/portPlx5.png",
//     gradient: "linear-gradient(180deg, #CCE0FF 0%, #FFFFFF 100%)",
//   },
// ];

// const PortfolioParallax = () => {
//   const containerRef = useRef(null);
  
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   });

//   return (
//     <div
//       ref={containerRef}
//       className="relative flex flex-col items-center w-full max-w-[1000px] mx-auto py-20"
//     >
//       {cards.map((card, index) => {
//         // This creates the "stacking" effect where cards overlap slightly as you scroll
//         const targetScale = 1 - (cards.length - index) * 0.02;
        
//         return (
//           <div 
//             key={index} 
//             className="sticky top-20 w-full mb-20 last:mb-0"
//             style={{ height: '600px' }}
//           >
//             <motion.div
//               style={{ 
//                 background: card.gradient,
//                 scale: useTransform(scrollYProgress, [index / cards.length, 1], [1, targetScale]),
//                 zIndex: index 
//               }}
//               className="relative w-full h-full rounded-[32px] border border-gray-200 shadow-2xl overflow-hidden flex flex-col items-center p-8 md:p-12"
//             >
//               {/* Card Heading */}
//               <h2 className="text-2xl md:text-3xl font-bold text-[#1A1A1A] text-center mb-8">
//                 {card.title}
//               </h2>

//               {/* Dashboard Image Container */}
//               <div className="relative w-full h-full rounded-xl overflow-hidden border border-gray-100 shadow-sm bg-white">
//                 <Image
//                   src={card.image}
//                   alt={card.title}
//                   fill
//                   className="object-contain p-2" // object-contain ensures the dashboard isn't cropped
//                   priority={index === 0}
//                 />
//               </div>
//             </motion.div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

// export default PortfolioParallax;




"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import realTime from '../../../public/portfolio/realTime.png'
import detect from '../../../public/portfolio/detectHit.png'
import identify from '../../../public/portfolio/identifyRisk.png'
import deliver from '../../../public/portfolio/delivar.png'
import power from '../../../public/portfolio/power.png'
const DEFAULT_CARDS = [
  { title: "Provide real-time activity insights", image: realTime, gradient: "linear-gradient(180deg, #D6E4FF 0%, #FFFFFF 100%)" },
  { title: "Detect productivity gaps instantly", image: detect, gradient: "linear-gradient(180deg, #E0E0FF 0%, #FFFFFF 100%)" },
  { title: "Identify risk behaviors early", image: identify, gradient: "linear-gradient(180deg, #D4F3E7 0%, #FFFFFF 100%)" },
  { title: "Deliver structured, hierarchy-based control", image: deliver, gradient: "linear-gradient(180deg, #F0F4F8 0%, #FFFFFF 100%)" },
  { title: "Empower leadership with actionable analytics", image: power, gradient: "linear-gradient(180deg, #CCE0FF 0%, #FFFFFF 100%)" },
];

type PortfolioParallaxProps = { cms?: Record<string, string> }

const PortfolioParallax = ({ cms = {} }: PortfolioParallaxProps) => {
  const cards = DEFAULT_CARDS.map((card, i) => ({
    ...card,
    title: cms[`card${i + 1}_title`] || card.title,
    cmsImage: cms[`card${i + 1}_image`] || null,
  }));
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={containerRef} className="relative flex flex-col items-center w-full">
      {cards.map((card, index) => {
        const targetScale = 1 - (cards.length - index) * 0.04;
        return (
          <div 
            key={index} 
            className="sticky top-20 w-full mb-[10vh] last:mb-0"
            style={{ height: '500px' }}
          >
            <motion.div
              style={{ 
                background: card.gradient,
                scale: useTransform(scrollYProgress, [index / cards.length, 1], [1, targetScale]),
              }}
              className="relative w-full h-full rounded-[32px] border border-gray-200 shadow-2xl overflow-hidden flex flex-col items-center p-6"
            >
              <h2 className="text-xl md:text-2xl font-bold text-[#1A1A1A] text-center mb-6">
                {card.title}
              </h2>

              <div className="relative w-full h-full rounded-xl overflow-hidden bg-white shadow-inner">
                <Image
                  src={card.cmsImage || card.image}
                  alt={card.title}
                  fill
                  sizes="100vw"
                  quality={90}
                  className="object-contain object-center"
                  priority={index === 0}
                  onError={(e) => { e.currentTarget.src = card.image.src; }}
                />
              </div>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
};

export default PortfolioParallax;