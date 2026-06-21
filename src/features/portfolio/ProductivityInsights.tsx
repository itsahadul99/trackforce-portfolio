// "use client";

// import { motion, Transition } from "framer-motion";
// import PortfolioParallax from "./PortfolioParallax";


// const commonTransition: Transition = {
//     duration: 1.2,
//     ease: "easeInOut",
//     repeat: Infinity,
//     repeatType: "loop",
//     repeatDelay: 0.8
// };



// const ProductivityInsights = () => {
//     return (
//         <div className="bg-[#000000]">
//             <div className="flex justify-between gap-4 max-w-[1300] mx-auto py-4">
//                 {/* left div */}
//                 <div className="relative">
//                     <div className="w-[640] border sticky top-0 h-screen  mt-60 z-10 text-left flex flex-col items-start text-white">
//                         <div className="section_title_border w-fit text-black rounded-full mb-6">
//                             <div className="how_trackforce_works px-4 py-2 text-sm font-semibold">
//                                 Productivity Insights
//                             </div>
//                         </div>

//                         <div className="relative inline-block mt-[2]">
//                             <h2 className="text-[42px] font-semibold leading-tight">
//                                 A {" "}
//                                 <span className="font-playball font-normal">Smarter</span> {" "}
//                                 Way to Manage Productivity
//                             </h2>
//                         </div>

//                         <p className="text-gray-300 text-base mt-6  leading-relaxed">
//                             TrackForce is not just monitoring software. <br />
//                             It’s a workforce intelligence platform designed to:
//                         </p>
//                     </div>
//                 </div>

//                 {/* right div */}
//                 <PortfolioParallax />
//             </div>
//         </div>
//     )
// }

// export default ProductivityInsights







"use client";

import PortfolioParallax from "./PortfolioParallax";

const ProductivityInsights = () => {
    return (
        <div className="bg-[#000000] w-full bg-[url('/portfolioBg.png')] bg-cover bg-center px-4">
            <div className="flex flex-col lg:flex-row justify-between gap-4 max-w-[1300] mx-auto pt-20 md:pt-28 lg:pt-44 pb-12 md:pb-16 lg:pb-20 px-4 md:px-8 lg:px-0">
                {/* Left Side - Sticky & Centered */}
                <div className="lg:w-[40%] relative">
                    <div className="lg:sticky lg:top-36 flex flex-col justify-start text-left text-white">
                        <div className="section_title_border w-fit text-black rounded-full mb-6">
                            <div className="how_trackforce_works px-4 py-2 text-sm font-semibold">
                                Productivity Insights
                            </div>
                        </div>

                        <div className="relative inline-block mt-[2]">
                            <h2 className="text-2xl md:text-3xl lg:text-[42px] font-semibold leading-tight">
                                A {" "}
                                <span className="font-playball font-normal">Smarter</span> {" "}
                                Way to Manage Productivity
                            </h2>
                        </div>

                        <p className="text-gray-300 text-base mt-6  leading-relaxed">
                            TrackForce is not just monitoring software. <br />
                            It’s a workforce intelligence platform designed to:
                        </p>
                    </div>
                </div>

                {/* Right Side - Scrolling Content */}
                <div className="lg:w-[55%]">
                    <PortfolioParallax />
                </div>
            </div>
        </div>
    );
};

export default ProductivityInsights;