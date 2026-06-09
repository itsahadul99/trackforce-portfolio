// import Image from "next/image";
// const empAndTime = "/empAndTime.png"
// const totalHr = "/totalHr.png"
// const bar = "/bar.png"
// const employeeList = "/employeeListForCard.png"

// const ImpactBussiness = () => {
//     return (
//         <section className=" bg-gray-700 py-20">
//             <div className="lg:w-[1200] xl:w-[1300] mx-auto">
//                 <div className="container mx-auto text-center relative z-10">
//                     <div className="section_title_border w-fit mx-auto text-black rounded-full mb-6">
//                         <div className="how_trackforce_works px-4 py-2 text-sm font-semibold">
//                             Our Features
//                         </div>
//                     </div>
//                     <h1 className="text-[42px] font-semibold mb-6  text-white">
//                         <span className="font-playball font-normal">Core</span>  Platform Capabilities
//                     </h1>
//                     <p className="text-lg max-w-3xl mx-auto text-white">
//                         TrackForce provides transparent employee monitoring tools that strengthen collaboration and enhance performance without disrupting daily workflow.
//                     </p>
//                 </div>
//                 <div className=" space-y-5 mt-20">

//                     <div className="flex justify-between gap-5">

//                         <div
//                             className=" custom-card
//     bg-gradient-to-b from-[#4b5563] to-[#374151]
//     rounded-2xl
//     p-8
//     text-white
//     border border-white/10
//     backdrop-blur
//     overflow-hidden
//     relative
//     h-40
//     w-1/2
//     group
//   "
//                         >
//                             <h3 className="text-xl font-semibold mb-3">
//                                 Productivity Tracking
//                             </h3>

//                             <p className="text-gray-300 text-sm  w-[80%]">
//                                 Track real work activity in real time, focus on output not screen time, and turn daily actions into clear performance insights.
//                             </p>

//                             <Image
//                             width={1200}
//                             height={800}

//                                 src={bar}
//                                 alt="total hours"
//                                 className="
//       absolute -bottom-16 right-7
//       transition-all duration-500 ease-out
//       group-hover:-translate-y-5
//       group-hover:scale-104
//     "
//                             />

//                         </div>
//                         <div
//                             className=" custom-card
//     bg-gradient-to-b from-[#4b5563] to-[#374151]
//     rounded-2xl
//     p-8
//     text-white
//     border border-white/10
//     backdrop-blur
//     overflow-hidden
//     relative
//     h-40
//     w-1/2
//     group
//   "
//                         >
//                             <h3 className="text-xl font-semibold mb-3">
//                                 Accountability & Transparency
//                             </h3>

//                             <p className="text-gray-300 text-sm  w-[80%]">
//                                 Maintain transparency across teams, align individual efforts with goals,
//                                 and build trust using data-backed visibility.
//                             </p>

//                             <Image
//                                  width={1200}
//                             height={800}
//                                 src={totalHr}
//                                 alt="total hours"
//                                 className="
//       absolute -bottom-10 -right-10
//       transition-all duration-500 ease-out
//       group-hover:-translate-y-5
//       group-hover:scale-104
//       group-hover:-translate-x-1
//     "
//                             />

//                         </div>
//                     </div>
//                     <div className="flex justify-between gap-5">



//                         <div
//                             className=" custom-card-2
//     bg-gradient-to-b from-[#4b5563] to-[#374151]
//     rounded-2xl
//     p-8
//     text-white
//     border border-white/10
//     backdrop-blur
//     overflow-hidden
//     relative
//     h-96
//     group
//     w-[60%]
//   "
//                         >
//                             <h3 className="text-xl font-semibold mb-3">
//                                 Workflow Efficiency
//                             </h3>

//                             <p className="text-gray-300 text-sm  w-[80%]">
//                                 Spot bottlenecks early, understand task movement, and optimize workflows with actionable performance data.
//                             </p>

//                             <Image
//                                  width={1200}
//                             height={800}
//                                 src={empAndTime}
//                                 alt="total hours"
//                                 className="
//       absolute -bottom-36 -right-20
//       transition-all duration-500 ease-out
//       group-hover:-translate-y-5
//       group-hover:scale-104
//       group-hover:-translate-x-1
//     "
//                             />

//                         </div>

//                         <div
//                             className=" custom-card-2
//     bg-gradient-to-b from-[#4b5563] to-[#374151]
//     rounded-2xl
//     p-8
//     text-white
//     border border-white/10
//     backdrop-blur
//     overflow-hidden
//     relative
//     h-96
//     group
//     w-[40%]
//   "
//                         >
//                             <h3 className="text-xl font-semibold mb-3">
//                                 Security Monitoring
//                             </h3>

//                             <p className="text-gray-300 text-sm  w-[80%]">
//                                 Monitor sensitive activity, detect risks early, and protect company data without invading employee privacy.
//                             </p>

//                             <Image
//                                  width={1200}
//                             height={800}
//                                 src={employeeList}
//                                 alt="total hours"
//                                 className="
//                             rounded-ss-2xl
//                             scale-y-110
//       absolute bottom-0 -right-38
//       transition-all duration-800 ease-out
//       group-hover:-translate-x-16
//     "
//                             />

//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default ImpactBussiness;




// 2nd version

'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaArrowRightLong } from 'react-icons/fa6';
import '../home/how_trackforce_works/howTrackforceworks.css';
const trackforce = '/trackforce.png'

const ImpactBusiness = () => {
    return (
        <section className="bg-black py-20 px-4">
            <div className="lg:w-[1200] xl:w-[1300]  mx-auto">

                {/* Header Section */}
                <div className="text-center mb-16">
                    <div className="section_title_border w-fit mx-auto text-black rounded-full mb-6">
                        <div className="how_trackforce_works px-4 py-2 text-sm font-semibold">
                            Impact on Bussiness
                        </div>
                    </div>
                    <h2 className="text-[42px] text-white font-semibold leading-tight">
                        The Business {" "}
                        <span className="font-playball font-normal">Impact</span>
                    </h2>
                    <p className="text-white text-lg">
                        Organizations using TrackForce can:
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="space-y-6 text-[20px] font-semibold text-white">

                    {/* Top Row: 3 Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {/* Card 1 */}
                        <div className="bg-[#1c1c1c] border border-white/10 rounded-3xl p-8 h-76 relative overflow-hidden group">
                            <h3 className=" mb-3">Reduce reporting time dramatically</h3>
                            <p className="text-base font-normal  z-10 relative">
                                Maintain transparency across teams, align individual efforts with goals, and build trust using data-backed visibility.
                            </p>
                            <Image src={'/impact-bussiness-1.png'} width={400} height={300} alt="Reporting" className="absolute -bottom-1 -right-4 transition-transform duration-500 group-hover:-translate-y-1" />
                        </div>

                        {/* Card 2 */}
                        <div className="bg-[#1c1c1c] border border-white/10 rounded-3xl p-8 h-76 relative overflow-hidden group">
                            <h3 className="text-xl font-bold text-white mb-3">Increase accountability <br /> across teams</h3>
                            <p className="w-36 text-base font-normal  z-10 relative">
                                Track real work activity in real time, focus on output not screen time, and turn daily actions into clear performance insights.
                            </p>
                            <Image src={'/impact-bussiness-2.png'} width={400} height={300} alt="Accountability" className="w-[200] absolute -bottom-1 right-0 transition-transform duration-500 group-hover:-translate-y-1" />
                        </div>

                        {/* Card 3 */}
                        <div className="bg-[#1c1c1c] border border-white/10 rounded-3xl p-8 h-76 relative overflow-hidden group">
                            <h3 className="text-xl font-bold text-white mb-3">Strengthen compliance control</h3>
                            <p className="text-base font-normal  z-10 relative">
                                Maintain transparency across teams, align individual efforts with goals, and build trust using data-backed visibility.
                            </p>
                            <Image src={'/impact-bussiness-3.png'} width={600} height={550} alt="Compliance" className="w-80 absolute -bottom-4 -left-1 transition-transform duration-500 group-hover:translate-x-1" />
                        </div>
                    </div>

                    {/* Middle Row: 1 Full Width Card */}
                    <div className="relative bg-[#1c1c1c] border border-white/10 rounded-3xl p-8 md:p-12  h-76  overflow-hidden group">
                        <div className="w-96 h-full flex items-center">
                            <div className="h-32 space-y-3 ">
                                <h3 className="text-2xl font-bold text-white">Identify productivity blind spots</h3>
                                <p className="w-[340]   text-base font-normal  mb-8">
                                    Spot bottlenecks early, understand task movement, and optimize workflows with actionable performance data.
                                </p>
                            </div>
                        </div>

                        <Image src={'/impact-bussiness-4.png'} width={1200} height={800} alt="Productivity" className="w-[700] absolute top-1/2 right-5 -translate-y-1/2 transition-transform duration-700 group-hover:scale-101" />

                    </div>

                    {/* Bottom Row: 2 Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* Card 5 */}
                        <div className="bg-[#1c1c1c] border border-white/10 rounded-3xl p-8 h-72 relative overflow-hidden group">
                            <h3 className="text-xl font-bold text-white mb-3">Improve workforce <br /> transparency</h3>
                            <p className="w-60 text-base font-normal ">
                                Monitor sensitive activity, detect risks early, and protect company data without invading employee privacy.
                            </p>
                            <Image src={'/impact-bussiness-5.png'} width={1200} height={800} alt="Transparency" className="w-66 absolute -bottom-14 right-0 transition-transform duration-500 group-hover:-translate-y-1" />
                        </div>

                        {/* Card 6 */}
                        <div className="bg-[#1c1c1c] border border-white/10 rounded-3xl p-8 h-72 relative overflow-hidden group">
                            <h3 className="text-xl font-bold text-white mb-3">Enable confident leadership decisions</h3>
                            <p className="text-base font-normal  w-3/4">
                                Monitor sensitive activity, detect risks early, and protect company data without invading employee privacy.
                            </p>
                            <Image src={'/impact-bussiness-6.png'} width={1200} height={800} alt="Leadership" className="w-[550] absolute -bottom-1 left-1/2 -translate-x-1/2 transition-transform duration-500 group-hover:-translate-y-1" />
                        </div>
                    </div>
                </div>

                {/* Footer Button */}
                <div className="mt-12 flex items-center justify-center">
                    <button className="group custom-button relative w-fit bg-white text-black font-bold py-3 px-6 rounded-[16px] flex gap-3 justify-between items-center">
                        <span className='group-hover:italic '>Explore More Features</span> <FaArrowRightLong className='group-hover:-rotate-[30deg] transition ease-in-out' />
                        <motion.div
                            className="ml-2 absolute right-0"
                            animate={{
                                x: [0, -190, 0],   // initial, move right, return
                                opacity: [0, 1, 0, 0, 1, 0], // fade out at the end of the move
                            }}
                            transition={{
                                duration: 7,
                                repeat: Infinity,
                                repeatType: 'loop',
                            }}
                        >
                            <Image
                                width={1200} height={800}
                                src={trackforce}
                                alt="TrackForce Logo"
                                className="w-8 h-8 group-hover:hidden"
                            />
                        </motion.div>
                    </button>
                </div>

            </div>
        </section>
    );
};

export default ImpactBusiness;