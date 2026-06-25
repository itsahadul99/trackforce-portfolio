"use client";
import Image from "next/image";

type Props = { cms?: Record<string, string> }

const CaseStudyChallengeAndSolution = ({ cms = {} }: Props) => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat py-12 md:py-24 px-4"
      style={{ backgroundImage: cms.bg_image ? `url(${cms.bg_image}), url('/multipleBg.png')` : `url('/multipleBg.png')` }}
    >
      <div className="w-full mb-12 relative z-10 max-w-[1300px] mx-auto px-4 md:px-0">

        {/* 1st */}
        <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-12">

          {/* Industry Tag */}
          <div
            className="w-full rounded-xl px-4 md:px-6 py-3 flex items-center gap-3 mb-4 md:mb-0"
            style={{ background: "linear-gradient(180deg, #CFE4FE 0%, #83CFD9 100%)" }}
          >
            <Image
              src={cms.icon1 || "/monitor.png"}
              alt="Industry"
              width={42}
              height={42}
              className="object-contain"
              onError={(e) => { e.currentTarget.src = "/monitor.png"; }}
            />
            <div>
              <p className="text-[#1a1a2e] font-semibold text-[24px] mb-1">
                {cms.industry_label || "Industry"}
              </p>
              <p className="text-[#1a1a2e]/70 text-lg">
                {cms.industry_desc || "Technology & Enterprise Operations"}
              </p>
            </div>
          </div>

          {/* Product Tag */}
          <div
            className="w-full rounded-xl px-4 md:px-6 py-3 flex items-center gap-3"
            style={{ background: "linear-gradient(180deg, #D3E5FF 0%, #C0B2FB 100%)" }}
          >
            <Image
              src={cms.icon2 || "/shield.png"}
              alt="Product"
              width={42}
              height={42}
              className="object-contain"
              onError={(e) => { e.currentTarget.src = "/shield.png"; }}
            />
            <div>
              <p className="text-[#1a1a2e] font-semibold text-[24px] mb-1">
                {cms.product_label || "Product"}
              </p>
              <p className="text-[#1a1a2e]/70 text-lg">
                {cms.product_desc || "TrackForce – Employee Productivity & Monitoring Platform"}
              </p>
            </div>
          </div>
        </div>

        {/* 2nd div */}
        <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-12 items-stretch mt-8 md:mt-12">

          {/* Left - Text */}
          <div className="w-full h-full flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">
              {cms.challenge_heading || "The Challenge"}
            </h2>

            <p className="text-white/80 text-base md:text-[20px] leading-relaxed mb-4">
              {cms.challenge_intro || "As Akij iBOS expanded across multiple departments and remote teams, leadership faced increasing operational blind spots:"}
            </p>

            <ul className="text-white/80 text-base md:text-[20px] leading-relaxed space-y-2 list-disc list-inside mb-4">
              <li>{cms.challenge_p1 || "Limited visibility into remote employee productivity"}</li>
              <li>{cms.challenge_p2 || "Manual attendance tracking with inconsistent accuracy"}</li>
              <li>{cms.challenge_p3 || "No centralized dashboard for performance insights"}</li>
              <li>{cms.challenge_p4 || "Difficulty identifying idle time and workload imbalance"}</li>
              <li>{cms.challenge_p5 || "Security concerns around file transfers and sensitive data"}</li>
            </ul>

            <p className="text-white/80 text-base md:text-[20px] leading-relaxed">
              {cms.challenge_closing || "Management needed a scalable, secure, and data-driven system to monitor performance without disrupting workflow."}
            </p>
          </div>

          {/* Right - Image */}
          <div className="w-full flex justify-center items-center mt-6 md:mt-0">
            <Image
              src={cms.image1 || "/question.png"}
              alt="The Challenge"
              width={800}
              height={600}
              quality={90}
              className="w-full max-w-[480px] object-contain"
              onError={(e) => { e.currentTarget.src = "/question.png"; }}
            />
          </div>
        </div>

        {/* 3rd div */}
        <div className="flex flex-col md:flex-row justify-between gap-6 md:gap-12 items-stretch mt-8 md:mt-12">

          {/* Left - Image */}
          <div className="w-full flex justify-center items-center mb-6 md:mb-0">
            <Image
              src={cms.image2 || "/light.png"}
              alt="The Solution"
              width={800}
              height={600}
              quality={90}
              className="w-full max-w-[480px] object-contain"
              onError={(e) => { e.currentTarget.src = "/light.png"; }}
            />
          </div>

          {/* Right - Text */}
          <div className="w-full h-full flex flex-col justify-center">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">
              {cms.solution_heading || "The Solution: TrackForce"}
            </h2>

            <p className="text-white/80 text-base md:text-[20px] leading-relaxed mb-4">
              {cms.solution_desc1 || "TrackForce was developed as a centralized workforce intelligence system that provides real-time monitoring, analytics, and reporting — all within a secure, role-based environment."}
            </p>

            <p className="text-white/80 text-base md:text-[20px] leading-relaxed">
              {cms.solution_desc2 || "Unlike generic monitoring tools such as Teramind, TrackForce was customized to fit internal operational workflows, department structures, and enterprise security policies."}
            </p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default CaseStudyChallengeAndSolution;
