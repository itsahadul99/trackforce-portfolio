import Image from "next/image";
import bar from "../../../../public/bar.png";
import securityMonitoring from "../../../../public/home/securityMonitoring.png";
import workEfficiency from "../../../../public/home/workEfficiency.png";
import totalHr from "../../../../public/totalHr.png";
// Hover (cross-fade) images
import productivity from "../../../../public/bar.png";
import accountability from "../../../../public/totalHr.png";
import efficiency from "../../../../public/home/workEfficiency.png";
import security from "../../../../public/home/secureMonitoring2.png";
import './ourFeatures.css';
const OurFeatures = () => {
    return (
        <section className=" pt-12 sm:pt-16 pb-16 sm:pb-24 bg-cover bg-center bg-no-repeat bg-[url('/our-feature-bg.png')]">
            <div className="max-w-[1300] mx-auto px-4 sm:px-6 xl:px-0">
                <div className="container mx-auto text-center relative z-10">
                    <div className="section_title_border w-fit mx-auto text-black rounded-full mb-6">
                        <div className="how_trackforce_works px-4 py-2 text-sm font-semibold">
                            Our Features
                        </div>
                    </div>
                    <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold mb-6 text-white leading-tight">
                        <span className="font-playball font-normal">Core</span>  Platform Capabilities
                    </h2>
                    <p className="text-sm sm:text-base lg:text-lg max-w-3xl mx-auto text-white">
                        TrackForce provides transparent employee monitoring tools that strengthen collaboration and enhance performance without disrupting daily workflow.
                    </p>
                </div>
                <div className=" space-y-5 mt-12 lg:mt-20">

                    <div className="flex flex-col lg:flex-row lg:justify-between gap-5">

                        <div
                            className=" custom-card
    bg-gradient-to-b from-[#4b5563] to-[#374151]
    rounded-2xl
    p-6 sm:p-8
    text-white
    border border-white/10
    backdrop-blur
    overflow-hidden
    relative
    h-44 sm:h-40
    w-full lg:w-1/2
    group
    transition-colors duration-500 hover:border-[#9F60EE]
  "
                        >
                            <h3 className="relative z-10 text-xl font-semibold mb-3">
                                Productivity Tracking
                            </h3>

                            <p className="relative z-10 text-gray-300 text-sm leading-relaxed w-[80%]">
                                Track real work activity in real time, focus on output not screen time, and turn daily actions into clear performance insights.
                            </p>

                            <Image
                                src={bar}
                                alt="Productivity tracking"
                                className="absolute -bottom-16 right-7 transition-[opacity,translate] duration-[850ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-0 group-hover:translate-y-3"
                            />
                            <Image
                                src={productivity}
                                alt="Productivity tracking detailed"
                                className="absolute -bottom-10 right-7 opacity-0 translate-y-4 transition-[opacity,translate] duration-[850ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100 group-hover:translate-y-0"
                            />

                        </div>
                        <div
                            className=" custom-card
    bg-gradient-to-b from-[#4b5563] to-[#374151]
    rounded-2xl
    p-6 sm:p-8
    text-white
    border border-white/10
    backdrop-blur
    overflow-hidden
    relative
    h-44 sm:h-40
    w-full lg:w-1/2
    group
    transition-colors duration-500 hover:border-[#9F60EE]
  "
                        >
                            <h3 className="relative z-10 text-xl font-semibold mb-3">
                                Accountability & Transparency
                            </h3>

                            <p className="relative z-10 text-gray-300 text-sm leading-relaxed w-[80%]">
                                Maintain transparency across teams, align individual efforts with goals,
                                and build trust using data-backed visibility.
                            </p>

                            <Image
                                src={totalHr}
                                alt="Accountability and transparency"
                                className="absolute -bottom-10 -right-10 transition-[opacity,translate] duration-[850ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-0 group-hover:translate-y-3"
                            />
                            <Image
                                src={accountability}
                                alt="Accountability and transparency detailed"
                                className="absolute -bottom-5 -right-10 opacity-0 translate-y-4 transition-[opacity,translate] duration-[850ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100 group-hover:translate-y-0"
                            />

                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row lg:justify-between gap-5">



                        <div
                            className=" custom-card-2
    bg-gradient-to-b from-[#4b5563] to-[#374151]
    rounded-2xl
    p-6 sm:p-8
    text-white
    border border-white/10
    backdrop-blur
    overflow-hidden
    relative
    h-80 sm:h-96
    group
    w-full lg:w-[60%]
    transition-colors duration-500 hover:border-[#9F60EE]
  "
                        >
                            <h3 className="relative z-10 text-xl font-semibold mb-3">
                                Workflow Efficiency
                            </h3>

                            <p className="relative z-10 text-gray-300 text-sm leading-relaxed w-[80%]">
                                Spot bottlenecks early, understand task movement, and optimize workflows with actionable performance data.
                            </p>

                            <Image
                                src={workEfficiency}
                                alt="Workflow efficiency"
                                className="absolute -bottom-14 -right-2 transition-[opacity,translate] duration-[850ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-0 group-hover:translate-y-3"
                            />
                            <Image
                                src={efficiency}
                                alt="Workflow efficiency detailed"
                                className="absolute -bottom-7 -right-2 opacity-0 translate-y-4 transition-[opacity,translate] duration-[850ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100 group-hover:translate-y-0"
                            />

                        </div>

                        <div
                            className=" custom-card-2  bg-gradient-to-b from-[#4b5563] to-[#374151] rounded-2xl  p-6 sm:p-8  text-white border border-white/10  backdrop-blur  overflow-hidden relative  h-80 sm:h-96 group  w-full lg:w-[40%] transition-colors duration-500 hover:border-[#9F60EE] "
                        >
                            <h3 className="relative z-10 text-xl font-semibold mb-3">
                                Security Monitoring
                            </h3>

                            <p className="relative z-10 text-gray-300 text-sm leading-relaxed w-[80%]">
                                Monitor sensitive activity, detect risks early, and protect company data without invading employee privacy.
                            </p>

                            <Image
                                src={securityMonitoring}
                                alt="Security monitoring"
                                className="rounded-ss-2xl scale-y-110 absolute -bottom-14 -right-10 transition-[opacity,translate] duration-[850ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-0 group-hover:translate-y-3"
                            />
                            <Image
                                src={security}
                                alt="Security monitoring detailed"
                                className="rounded-ss-2xl scale-y-110 absolute -bottom-10 -right-0 opacity-0 translate-y-4 transition-[opacity,translate] duration-[850ms] ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:opacity-100 group-hover:translate-y-0"
                            />

                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurFeatures;