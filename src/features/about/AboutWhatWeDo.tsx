"use client";

import AboutMission from "./AboutMission";
import AboutValues from "./AboutValues";
import AboutVision from "./AboutVision";


const AboutWhatWeDo = () => {


  return (
    <section className="w-full bg-gradient-to-b from-[#e8ecf8] via-[#edf0fa] to-[#e8ecf8] py-20">
      <div className="lg:w-[1200] xl:w-[1300] mx-auto">
        {/* Header */}
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <div className="content_title_border w-fit text-[#0C59C0] rounded-full">
              <div className="px-4 py-2 text-sm font-semibold">What We Do</div>
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
        <AboutVision />
        <AboutValues />
      </div>
    </section>
  );
};

export default AboutWhatWeDo;
