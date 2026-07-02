
"use client";
import ProgressCircle from "@/components/graph/ProgressCircle";
import BookDemoBtn from "@/components/shared/BookDemoBtn";
import RichText from "@/components/shared/RichText";
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


type WhyTrackforceProps = { cms?: Record<string, string> }

const WhyTrackforce = ({ cms = {} }: WhyTrackforceProps) => {


    return (
        <div className="flex overflow-hidden pb-20 flex-col lg:flex-row lg:justify-between gap-8 lg:gap-2 max-w-[1300] mx-auto mt-16 sm:mt-24 lg:mt-32 px-4 sm:px-6 lg:px-8">
            <div className="w-full lg:w-1/2 flex flex-col justify-center items-center lg:items-start text-center lg:text-left">
                <div className="content_title_border_new w-fit mb-1">
                    <div className="px-4 py-2 text-sm font-semibold content_title_text_new">
                        {cms.badge || "Why Trackforce"}
                    </div>
                </div>
                <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold mb-2 text-black leading-tight">
                    {cms.heading || <>Employee Monitoring Built for <span className="font-playball font-normal">Smarter Workflows</span></>}
                </h2>
                <RichText className="text-gray-600 text-sm sm:text-base mb-6 max-w-lg mt-6" html={cms.description || "TrackForce delivers real-time visibility, accountability, and performance insights — helping teams work better, not harder."} />
                <BookDemoBtn />
            </div>

            <div className='w-full lg:w-1/2 lg:flex lg:justify-center lg:items-center'>
                {/* inner wrapper: fixed size on lg so absolute positions are always consistent */}
                <div className='relative flex flex-col items-center gap-4 sm:flex-row sm:flex-wrap sm:justify-center sm:gap-6 w-full lg:w-[500px] lg:h-[520px] lg:block'>
                    <div className="hidden lg:block absolute right-0 top-[60px] bg-[#FFFFFF59] rounded-[43px] h-[400px] w-[280px]"></div>

                    {/* blue div */}
                    <motion.div
                        className="relative drop-shadow-2xl z-10 lg:absolute lg:-top-0 lg:left-10"
                        variants={imageVariants(-80, -40, 0)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.1 }}
                    >
                        <ProgressCircle
                            percentage={cms.stat1_value ? parseInt(cms.stat1_value) : 80}
                            strokeWidth={20}
                            strokeColor={'#0BC5D1'}
                            label={cms.stat1_label || "Reduced Employee Turnover"}
                            hoverBackground="linear-gradient(180deg, #FFFFFF 0%, #E6F9FA 48.87%, #0BC5D1 100%)"
                            hoverBorder="2px solid #0BC5D1"
                            hoverBoxShadow="-14.34px 43.2px 52.87px 0px #514E782E, 1.55px 2.32px 0px 0px #FFFFFF99 inset"
                            hoverBackdropFilter="blur(18.906px)"
                        />
                    </motion.div>

                    {/* yellow div */}
                    <motion.div
                        className="relative drop-shadow-2xl z-10 lg:absolute lg:-bottom-2 lg:left-10"
                        variants={imageVariants(-80, 70, 0)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.1 }}
                    >
                        <ProgressCircle
                            percentage={cms.stat2_value ? parseInt(cms.stat2_value) : 50}
                            strokeWidth={20}
                            strokeColor={'#FFB93B'}
                            label={cms.stat2_label || "Prevented Data Breaches"}
                            hoverBackground="linear-gradient(180deg, #FFFFFF 0%, #FFF9E9 49.1%, #FFD66B 100%)"
                            hoverBorder="2px solid #FFD66B"
                            hoverBoxShadow="-14.34px 43.2px 52.87px 0px #514E782E, 1.55px 2.32px 0px 0px #FFFFFF99 inset"
                            hoverBackdropFilter="blur(18.906px)"
                        />
                    </motion.div>

                    {/* red div */}
                    <motion.div
                        className="relative drop-shadow-2xl z-10 lg:absolute lg:top-1/2 lg:-translate-y-1/2 lg:-right-20"
                        variants={imageVariants(80, 0, 0)}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, amount: 0.1 }}
                    >
                        <ProgressCircle
                            percentage={cms.stat3_value ? parseInt(cms.stat3_value) : 60}
                            strokeWidth={20}
                            strokeColor={'#FF8F6B'}
                            label={cms.stat3_label || "Increased Productivity"}
                            hoverBackground="linear-gradient(180deg, #FFFFFF 0%, #FFF3F0 49.83%, #FF8F6B 100%)"
                            hoverBorder="1px solid #FF8F6B"
                            hoverBoxShadow="-14.34px 43.2px 52.87px 0px #514E782E, 1.55px 2.32px 0px 0px #FFFFFF99 inset"
                            hoverBackdropFilter="blur(18.906px)"
                        />
                    </motion.div>
                </div>
            </div>

        </div>
    );
};

export default WhyTrackforce;





