import { CircleCheck, Minus } from "lucide-react";

type Status = "check" | "dash";

interface Feature {
  name: string;
  essential: Status;
  professional: Status;
  custom: Status;
}

const features: Feature[] = [
  { name: "File Transfer Tracking", essential: "dash", professional: "check", custom: "check" },
  { name: "Risk User Report", essential: "check", professional: "check", custom: "check" },
  { name: "HeatMap", essential: "dash", professional: "check", custom: "check" },
  { name: "Context Switching", essential: "dash", professional: "check", custom: "check" },
  { name: "Keystroke Logging", essential: "check", professional: "check", custom: "check" },
  { name: "Screen Recording", essential: "check", professional: "check", custom: "check" },
  { name: "Social Media Monitoring", essential: "check", professional: "check", custom: "check" },
  { name: "Email Monitoring", essential: "check", professional: "check", custom: "check" },
  { name: "IM (Chat) Monitoring", essential: "dash", professional: "check", custom: "check" },
  { name: "Console Command Monitoring", essential: "check", professional: "check", custom: "check" },
  { name: "USB Block", essential: "dash", professional: "check", custom: "check" },
  { name: "App Block", essential: "dash", professional: "check", custom: "check" },
  { name: "Web Block", essential: "dash", professional: "check", custom: "check" },
];

const StatusCell = ({ status }: { status: Status }) => {
  if (status === "check") {
    return <CircleCheck size={22} className="text-blue-600 mx-auto" />;
  }
  return <Minus size={22} className="text-gray-400 mx-auto" />;
};

const Benefits = () => {
  return (
    <section className=" lg:w-[1200] xl:w-[1300] mx-auto  bg-[#DEEDFF] my-24 p-16 rounded-2xl relative overflow-hidden">
      {/* Decorative blue gradient blob - left side */}
      <div className="absolute -left-20 top-1/4 w-[400px] h-[500px] bg-gradient-to-br from-[#9dd0f5]/50 to-[#c8e4fc]/20 rounded-full blur-[100px]" />

      {/* Decorative curved lines - bottom right */}
      <div className="absolute bottom-6 right-6 opacity-30">
        <svg width="150" height="150" viewBox="0 0 150 150" fill="none">
          <path d="M150 150C150 67 83 0 0 0" stroke="#94a3b8" strokeWidth="1.5" fill="none" />
          <path d="M150 150C150 83 100 25 35 25" stroke="#94a3b8" strokeWidth="1.5" fill="none" />
          <path d="M150 150C150 100 115 55 70 55" stroke="#94a3b8" strokeWidth="1.5" fill="none" />
          <path d="M150 150C150 115 130 85 105 85" stroke="#94a3b8" strokeWidth="1.5" fill="none" />
        </svg>
      </div>

      <div className="">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Compare benefits</h2>
          <p className="text-[#2B2B2B] text-lg mt-3">-User Activity Insights</p>
        </div>

        {/* Table */}
        <div className=" overflow-hidden">
          {/* Table Header */}
          <div className="grid grid-cols-[1.5fr_1fr_1fr_1fr] px-10 py-6">
            <div className="text-lg font-bold text-gray-900">Features</div>
            <div className="text-lg font-bold text-gray-900 text-center">Essential</div>
            <div className="text-lg font-bold text-gray-900 text-center">Professional</div>
            <div className="text-lg font-bold text-gray-900 text-center">Custom Plan</div>
          </div>

          {/* Table Rows */}
          {features.map((feature) => (
            <div
              key={feature.name}
              className="grid grid-cols-[1.5fr_1fr_1fr_1fr]"
            >
              <div className="px-10 py-4 text-sm font-semibold text-gray-900 bg-[#d6e8ff]/50">
                {feature.name}
              </div>
              <div className="py-4 bg-[#d6e8ff]/50">
                <StatusCell status={feature.essential} />
              </div>
              <div className="py-4 bg-[#e0d8f5]/50">
                <StatusCell status={feature.professional} />
              </div>
              <div className="py-4 bg-[#c8f5d0]/50">
                <StatusCell status={feature.custom} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
