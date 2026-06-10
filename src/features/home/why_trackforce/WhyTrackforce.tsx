
"use client";
import ProgressCircle from "@/components/graph/ProgressCircle";
import BookDemoBtn from "@/components/shared/BookDemoBtn";
import { motion, Variants } from "framer-motion";
const imageVariants = (x: number, y: number, delay: number = 0): Variants => ({
    hidden: { opacity: 1, x, y, scale: 0.85 },
    visible: {
        opacity: 1,
        x: 0,
        y: 0,
        scale: 1,
        transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as [number, number, number, number], delay },
    },
});


const WhyTrackforce = () => {


    return (
        <div className="flex overflow-hidden pb-20 flex-col lg:flex-row lg:justify-between gap-8 lg:gap-2 max-w-[1300] mx-auto mt-16 sm:mt-24 lg:mt-32 px-4 sm:px-6 xl:px-0">
            <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
                <div className="content_title_border_new w-fit mb-1">
                    <div className="px-4 py-2 text-sm font-semibold content_title_text_new">
                        Why Trackforce

                    </div>
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold mb-2 text-black leading-tight">
                    Employee Monitoring Built for <span className="font-playball font-normal">Smarter Workflows</span>
                </h1>
                <p className="text-gray-600 text-sm sm:text-base mb-6 max-w-lg mt-6">
                    TrackForce delivers real-time visibility, accountability, and performance insights — helping teams work better, not harder.
                </p>
                <BookDemoBtn />
            </div>

            <div className=' w-full lg:w-1/2 relative h-[420px] sm:h-[480px] lg:h-[520px] flex justify-center lg:justify-end items-center scale-75 sm:scale-90 lg:scale-100 origin-center lg:origin-right'>
                <div className="absolute right-24 bg-[#FFFFFF59] rounded-[43px] min-h-[397px] max-h-[400px] w-full max-w-[420px] mx-auto"></div>
                {/* blue div */}
                <motion.div
                    className="  absolute -top-[1px] left-16  drop-shadow-2xl z-10"
                    variants={imageVariants(-80, -40, 0)}  // left, down    // intial
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.1 }}
                >
                    <ProgressCircle
                        percentage={80}
                        strokeWidth={20}
                        strokeColor={'#0BC5D1'}
                        label="Better Remote Work Efficiency"
                        hoverBackground="linear-gradient(180deg, #FFFFFF 0%, #E6F9FA 48.87%, #0BC5D1 100%)"
                        hoverBorder="2px solid #0BC5D1"
                        hoverBoxShadow="-14.34px 43.2px 52.87px 0px #514E782E, 1.55px 2.32px 0px 0px #FFFFFF99 inset"
                        hoverBackdropFilter="blur(18.906px)"
                    />
                </motion.div>

                {/* yellow div */}
                <motion.div
                    className=" absolute -bottom-[16px] left-16  drop-shadow-2xl z-10"
                    variants={imageVariants(-80, 70, 0)}   // left, up
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.1 }}
                >
                    <ProgressCircle
                        percentage={50}
                        strokeWidth={20}
                        strokeColor={'#FFB93B'}
                        label="Prevented Data Breaches"
                        hoverBackground="linear-gradient(180deg, #FFFFFF 0%, #FFF9E9 49.1%, #FFD66B 100%)"
                        hoverBorder="2px solid #FFD66B"
                        hoverBoxShadow="-14.34px 43.2px 52.87px 0px #514E782E, 1.55px 2.32px 0px 0px #FFFFFF99 inset"
                        hoverBackdropFilter="blur(18.906px)"
                    />
                </motion.div>

                {/* red div */}
                <motion.div
                    className=" absolute top-1/2 -translate-1/2 -right-[85px]  drop-shadow-2xl z-10"
                    variants={imageVariants(80, 0, 0)}   // right
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, amount: 0.1 }}
                >
                    <ProgressCircle
                        percentage={60}
                        strokeWidth={20}
                        strokeColor={'#FF8F6B'}
                        label="Increased Productivity"
                        hoverBackground="linear-gradient(180deg, #FFFFFF 0%, #FFF3F0 49.83%, #FF8F6B 100%)"
                        hoverBorder="1px solid #FF8F6B"
                        hoverBoxShadow="-14.34px 43.2px 52.87px 0px #514E782E, 1.55px 2.32px 0px 0px #FFFFFF99 inset"
                        hoverBackdropFilter="blur(18.906px)"
                    />
                </motion.div>
            </div>

        </div>
    );
};

export default WhyTrackforce;





