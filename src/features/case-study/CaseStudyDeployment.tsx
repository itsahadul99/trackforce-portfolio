const CaseStudyDeployment = () => {
  return (
    <div className="-mt-60 py-16 md:py-24 bg-[#e8eefb] bg-[url('/10bestSft.png')] bg-cover bg-center bg-no-repeat">
      <div className="w-full lg:w-[1200] xl:w-[1300] mx-auto px-4">
        <div className="relative overflow-hidden  py-14 md:py-20 flex flex-col md:flex-row gap-12 items-center justify-between">
          {/* Left */}
          <div className="w-1/2 relative z-10 ">
            <h2 className="text-4xl md:text-[42px] font-bold text-[#1a1a2e] leading-tight mb-4">
              Our <span className="font-playball font-normal">Deployment</span>
              <br />
              Strategy
            </h2>
            <p className="text-[#1a1a2e]/70 text-lg leading-relaxed">
              TrackForce simplifies teamwork with visibility, <br /> automation, and
              insights to boost productivity effortlessly.
            </p>
          </div>

          {/* Right */}
          <div className="w-1/2 relative z-10">
            <h3 className="text-xl font-bold text-[#1a1a2e] mb-3">
              TrackForce was deployed in three flexible modes:
            </h3>
            <ul className="text-[#1a1a2e]/80  leading-relaxed space-y-1.5 mb-6 text-base">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#1a1a2e]/60 shrink-0" />
                Hidden Background Installation
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#1a1a2e]/60 shrink-0" />
                Pass wordless Authentication
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#1a1a2e]/60 shrink-0" />
                Login-Based Application
              </li>
            </ul>

            <h3 className="text-xl font-bold text-[#1a1a2e] mb-3">
              The rollout included:
            </h3>
            <ul className="text-[#1a1a2e]/80  leading-relaxed space-y-1.5 mb-6 text-base">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#1a1a2e]/60 shrink-0" />
                Department mapping
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#1a1a2e]/60 shrink-0" />
                Device-to-employee allocation
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#1a1a2e]/60 shrink-0" />
                Monitoring policy configuration
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#1a1a2e]/60 shrink-0" />
                Pilot testing phase
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#1a1a2e]/60 shrink-0" />
                Full organization onboarding
              </li>
            </ul>

            <p className="text-[#1a1a2e]/80 ">
              The transition was seamless and required minimal training.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyDeployment;
