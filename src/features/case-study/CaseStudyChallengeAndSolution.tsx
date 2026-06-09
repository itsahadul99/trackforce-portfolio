// import Image from "next/image";

// const CaseStudyChallengeAndSolution = () => {
//   return (
//     <div
//       className="relative bg-cover bg-center bg-no-repeat py-16 md:py-24"
//       style={{ backgroundImage: "url('/multipleBg.png')" }}
//     >



//       <div className="w-full  mb-12 relative z-10 lg:w-[1200] xl:w-[1300] mx-auto">
//         {/* 1st */}
//         <div className="flex justify-between gap-12">
//           {/* Industry Tag */}
//           <div
//             className="w-full rounded-xl px-6 py-3 flex items-center gap-3"
//             style={{
//               background:
//                 "linear-gradient(180deg, #CFE4FE 0%, #83CFD9 100%)",
//             }}
//           >
//             <Image
//               src="/monitor.png"
//               alt="Industry"
//               width={32}
//               height={32}
//               className="object-contain"
//             />
//             <div>
//               <p className="text-[#1a1a2e] font-semibold text-sm mb-1">
//                 Industry
//               </p>
//               <p className="text-[#1a1a2e]/70 text-xs">
//                 Technology & Enterprise Operations
//               </p>
//             </div>
//           </div>
//           {/* Product Tag */}
//           <div
//             className="w-full rounded-xl px-6 py-3 flex items-center gap-3"
//             style={{
//               background:
//                 "linear-gradient(180deg, #D3E5FF 0%, #C0B2FB 100%)",
//             }}
//           >
//             <Image
//               src="/shield.png"
//               alt="Product"
//               width={32}
//               height={32}
//               className="object-contain"
//             />
//             <div>
//               <p className="text-[#1a1a2e] font-semibold text-sm mb-1">
//                 Product
//               </p>
//               <p className="text-[#1a1a2e]/70 text-xs">
//                 TrackForce &ndash; Employee Productivity & Monitoring Platform
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* 2nd div */}
//         <div className="flex justify-between gap-12">
//           {/* Left - Text */}
//           <div className="w-full">
//             <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
//               The Challenge
//             </h2>
//             <p className="text-white/80 text-sm leading-relaxed mb-4">
//               As Akij iBOS expanded across multiple departments and remote
//               teams, leadership faced increasing operational blind spots:
//             </p>
//             <ul className="text-white/80 text-sm leading-relaxed space-y-2 list-disc list-inside mb-4">
//               <li>Limited visibility into remote employee productivity</li>
//               <li>Manual attendance tracking with inconsistent accuracy</li>
//               <li>No centralized dashboard for performance insights</li>
//               <li>Difficulty identifying idle time and workload imbalance</li>
//               <li>Security concerns around file transfers and sensitive data</li>
//             </ul>
//             <p className="text-white/80 text-sm leading-relaxed">
//               Management needed a scalable, secure, and data-driven system to
//               monitor performance without disrupting workflow.
//             </p>
//           </div>
//           {/* Right - Question Image */}
//           <div className="w-full flex justify-center">
//             <Image
//               src="/question.png"
//               alt="The Challenge"
//               width={400}
//               height={200}
//               className="w-full object-contain"
//             />
//           </div>

//         </div>

//         {/* 3rd div */}
//         <div className="flex justify-between gap-12">
//           {/* Left - Light Image */}
//           <div className="w-full flex justify-center">
//             <Image
//               src="/light.png"
//               alt="The Solution"
//               width={400}
//               height={350}
//               className="w-full object-contain"
//             />
//           </div>
//           {/* Right - Text */}
//           <div className="w-full">
//             <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
//               The Solution: TrackForce
//             </h2>
//             <p className="text-white/80 text-sm leading-relaxed mb-4">
//               TrackForce was developed as a centralized workforce intelligence
//               system that provides real-time monitoring, analytics, and reporting
//               &mdash; all within a secure, role-based environment.
//             </p>
//             <p className="text-white/80 text-sm leading-relaxed">
//               Unlike generic monitoring tools such as Teramind, TrackForce was
//               customized to fit internal operational workflows, department
//               structures, and enterprise security policies.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default CaseStudyChallengeAndSolution;



import Image from "next/image";

const CaseStudyChallengeAndSolution = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat py-16 md:py-24"
      style={{ backgroundImage: "url('/multipleBg.png')" }}
    >
      <div className="w-full mb-12 relative z-10 lg:w-[1200] xl:w-[1300] mx-auto">
        
        {/* 1st */}
        <div className="flex justify-between gap-12">
          
          {/* Industry Tag */}
          <div
            className="w-full rounded-xl px-6 py-3 flex items-center gap-3"
            style={{
              background:
                "linear-gradient(180deg, #CFE4FE 0%, #83CFD9 100%)",
            }}
          >
            <Image
              src="/monitor.png"
              alt="Industry"
              width={42}
              height={42}
              className="object-contain"
            />
            <div>
              <p className="text-[#1a1a2e] font-semibold text-[24px] mb-1">
                Industry
              </p>
              <p className="text-[#1a1a2e]/70 text-lg">
                Technology & Enterprise Operations
              </p>
            </div>
          </div>

          {/* Product Tag */}
          <div
            className="w-full rounded-xl px-6 py-3 flex items-center gap-3"
            style={{
              background:
                "linear-gradient(180deg, #D3E5FF 0%, #C0B2FB 100%)",
            }}
          >
            <Image
              src="/shield.png"
              alt="Product"
              width={42}
              height={42}
              className="object-contain"
            />
            <div>
              <p className="text-[#1a1a2e] font-semibold text-[24px] mb-1">
                Product
              </p>
              <p className="text-[#1a1a2e]/70 text-lg">
                TrackForce – Employee Productivity & Monitoring Platform
              </p>
            </div>
          </div>
        </div>

        {/* 2nd div */}
        <div className="flex justify-between gap-12 items-stretch mt-12 text-[20px]">
          
          {/* Left - Text */}
          <div className="w-full h-full flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              The Challenge
            </h2>

            <p className="text-white/80 text-[20px] leading-relaxed mb-4">
              As Akij iBOS expanded across multiple departments and remote
              teams, leadership faced increasing operational blind spots:
            </p>

            <ul className="text-white/80 text-[20px] leading-relaxed space-y-2 list-disc list-inside mb-4">
              <li>Limited visibility into remote employee productivity</li>
              <li>Manual attendance tracking with inconsistent accuracy</li>
              <li>No centralized dashboard for performance insights</li>
              <li>Difficulty identifying idle time and workload imbalance</li>
              <li>Security concerns around file transfers and sensitive data</li>
            </ul>

            <p className="text-white/80 text-[20px] leading-relaxed">
              Management needed a scalable, secure, and data-driven system to
              monitor performance without disrupting workflow.
            </p>
          </div>

          {/* Right - Image */}
          <div className="w-full flex justify-center items-center">
            <Image
              src="/question.png"
              alt="The Challenge"
              width={1200}
              height={800}
              className="h-full object-contain"
            />
          </div>
        </div>

        {/* 3rd div */}
        <div className="flex justify-between gap-12 items-stretch mt-12 text-[20px]">
          
          {/* Left - Image */}
          <div className="w-full flex justify-center items-center">
            <Image
              src="/light.png"
              alt="The Solution"
              width={1200}
              height={800}
              className="h-full object-contain"
            />
          </div>

          {/* Right - Text */}
          <div className="w-full h-full flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-6">
              The Solution: TrackForce
            </h2>

            <p className="text-white/80 text-[20px] leading-relaxed mb-4">
              TrackForce was developed as a centralized workforce intelligence
              system that provides real-time monitoring, analytics, and reporting
              — all within a secure, role-based environment.
            </p>

            <p className="text-white/80 text-[20px] leading-relaxed">
              Unlike generic monitoring tools such as Teramind, TrackForce was
              customized to fit internal operational workflows, department
              structures, and enterprise security policies.
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CaseStudyChallengeAndSolution;