type Props = { cms?: Record<string, string> }

const CaseStudyDeployment = ({ cms = {} }: Props) => {
  return (
    <div
      className="-mt-0 lg:-mt-60 py-12 md:py-20 bg-[#e8eefb] bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: cms.bg_image ? `url(${cms.bg_image}), url('/10bestSft.png')` : `url('/10bestSft.png')` }}
    >
      <div className="w-full max-w-[1300px] mx-auto px-4">
        <div className="relative overflow-hidden py-10 md:py-14 flex flex-col md:flex-row gap-10 md:gap-12 items-start md:items-center justify-between">
          {/* Left */}
          <div className="w-full md:w-1/2 relative z-10 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#1a1a2e] leading-tight mb-4">
              {cms.heading || <>Our <span className="font-playball font-normal">Deployment</span><br />Strategy</>}
            </h2>
            <p className="text-[#1a1a2e]/70 text-base md:text-lg leading-relaxed">
              {cms.description || "TrackForce simplifies teamwork with visibility, automation, and insights to boost productivity effortlessly."}
            </p>
          </div>

          {/* Right */}
          <div className="w-full md:w-1/2 relative z-10 mt-6 md:mt-0">
            <h3 className="text-lg md:text-xl font-bold text-[#1a1a2e] mb-3 text-center md:text-left">
              {cms.modes_heading || "TrackForce was deployed in three flexible modes:"}
            </h3>
            <ul className="text-[#1a1a2e]/80 leading-relaxed space-y-1.5 mb-6 text-sm md:text-base">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#1a1a2e]/60 shrink-0" />
                {cms.mode1 || "Hidden Background Installation"}
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#1a1a2e]/60 shrink-0" />
                {cms.mode2 || "Passwordless Authentication"}
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#1a1a2e]/60 shrink-0" />
                {cms.mode3 || "Login-Based Application"}
              </li>
            </ul>

            <h3 className="text-lg md:text-xl font-bold text-[#1a1a2e] mb-3 text-center md:text-left">
              {cms.rollout_heading || "The rollout included:"}
            </h3>
            <ul className="text-[#1a1a2e]/80 leading-relaxed space-y-1.5 mb-6 text-sm md:text-base">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#1a1a2e]/60 shrink-0" />
                {cms.rollout1 || "Department mapping"}
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#1a1a2e]/60 shrink-0" />
                {cms.rollout2 || "Device-to-employee allocation"}
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#1a1a2e]/60 shrink-0" />
                {cms.rollout3 || "Monitoring policy configuration"}
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#1a1a2e]/60 shrink-0" />
                {cms.rollout4 || "Pilot testing phase"}
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#1a1a2e]/60 shrink-0" />
                {cms.rollout5 || "Full organization onboarding"}
              </li>
            </ul>

            <p className="text-[#1a1a2e]/80 text-sm md:text-base text-center md:text-left">
              {cms.closing || "The transition was seamless and required minimal training."}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyDeployment;
