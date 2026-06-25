"use client";

import AboutMission from "./AboutMission";

type AboutWhatWeDoProps = { cms?: Record<string, string> }

const AboutWhatWeDo = ({ cms = {} }: AboutWhatWeDoProps) => {
  return (
    <section
      className="w-full bg-gradient-to-b from-[#e8ecf8] via-[#edf0fa] to-[#e8ecf8] px-4 py-12 md:py-20 bg-cover bg-center bg-no-repeat bg-[url('/ourMission.png')]"
      style={cms.bg_image ? { backgroundImage: `url(${cms.bg_image}), url('/ourMission.png')` } : undefined}
    >
      <div className="max-w-[1300px] mx-auto px-4">
        {/* Header */}
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <div className="content_title_border_new w-fit">
              <div className="px-4 py-2 text-sm font-semibold content_title_text_new">{cms.badge || "What We Do"}</div>
            </div>
          </div>
          <h2 className="text-2xl md:text-[42px] font-semibold text-black">
            {cms.heading || <>We help global teams achieve measurable <span className="font-playball font-normal">productivity</span>.</>}
          </h2>
        </div>
        {/* Sections */}
        <AboutMission cms={cms} />
      </div>
    </section>
  );
};

export default AboutWhatWeDo;
