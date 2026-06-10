"use client";

import AboutMission from "./AboutMission";
const AboutWhatWeDo = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#e8ecf8] via-[#edf0fa] to-[#e8ecf8] px-4 py-20 bg-[url('/ourMission.png')] bg-cover bg-center bg-no-repeat">
      <div className="max-w-[1300] mx-auto">
        {/* Header */}
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <div className="content_title_border_new w-fit">
              <div className="px-4 py-2 text-sm font-semibold content_title_text_new">What We Do</div>
            </div>
          </div>
          <h2 className="text-[42px] font-semibold text-black">
            We help global teams achieve
          </h2>
          <h2 className="text-[42px] font-semibold text-black">
            measurable <span className="font-playball font-normal">productivity</span>.
          </h2>
        </div>

        {/* Sections */}
        <AboutMission />
      </div>
    </section>
  );
};

export default AboutWhatWeDo;
