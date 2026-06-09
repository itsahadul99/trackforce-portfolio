// import React, { useState } from 'react'

// type Props = {
//     height?: number | string;
//     features?: {
//         title: string;
//         description: string;
//     }[];
//     txtColor?: string;
//     bgColor?: string;
// }

// const FeaturesListMore = ({ height = '400px', features, txtColor='text-black' }: Props) => {

//     const [activeIndex, setActiveIndex] = useState(0);
//     // console.log(height)

 
//     return (
//         <div className={` flex items-center justify-center`} style={{height: `${height}`}}>
//             <div className=" relative h-full">

//                 {/* The faint continuous vertical background line */}
//                 <div className="absolute left-0 top-0 bottom-0 w-[3] "></div>

//                 <div className="flex flex-col space-y-6 h-full">
//                     {features?.map((feature, index) => {
//                         const isActive = activeIndex === index;

//                         return (
//                             <div
//                                 key={index}
//                                 className="relative pl-5 cursor-pointer transition-all duration-300"
//                                 onClick={() => setActiveIndex(index)}
//                             >
//                                 {/* The Active Highlight Bar */}
//                                 {isActive && (
//                                     <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-[#1a73e8] z-10 transition-all"></div>
//                                 )}

//                                 <div className="flex flex-col">
//                                     <h3 className={`text-[19px] font-bold transition-colors ${txtColor} ${isActive ? 'text-[#1d2125] mb-2' : 'text-[#444c56] hover:text-[#1a73e8]'}`}>
//                                         {feature.title}
//                                     </h3>

//                                     {/* Expandable Description Area */}
//                                     <div className={`overflow-hidden transition-all duration-300 ${isActive ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}>
//                                         <p className={`text-[#4a5568] text-[15px] leading-relaxed mb-4 ${txtColor} `}>
//                                             {feature.description}
//                                         </p>
//                                         <a
//                                             href="#"
//                                             className="text-[#1a73e8] font-bold text-[15px] flex items-center group"
//                                         >
//                                             Learn More
//                                             <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
//                                         </a>
//                                     </div>
//                                 </div>
//                             </div>
//                         );
//                     })}
//                 </div>
//             </div>
//         </div>
//     )
// }

// export default FeaturesListMore
import React, { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'

type Props = {
    height?: number | string;
    features?: {
        title: string;
        description: string;
    }[];
    txtColor?: string;
    bgColor?: string;
}

const FeaturesListMore = ({ height = '400px', features, txtColor='text-black' }: Props) => {

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className={` flex items-center justify-center`} style={{height: `${height}`}}>
            <div className=" relative h-full">

                <div className="flex flex-col  h-full">
                    {features?.map((feature, index) => {
                        const isActive = activeIndex === index;

                        return (
                            <div
                                key={index}
                                className="cursor-pointer flex "
                                onClick={() => setActiveIndex(index)}
                            >
                                <div className="relative shrink-0 border-l-[4px] border-[#1a73e8]/15">
                                    {isActive && (
                                        <motion.span
                                            layoutId="features-list-more-bar"
                                            className="absolute inset-y-0 -left-[4px] border-l-[4px] border-[#1a73e8]"
                                            transition={{ type: 'spring', stiffness: 260, damping: 30 }}
                                        />
                                    )}
                                </div>
                                <div className="flex flex-col pl-5 py-2 flex-1">
                                    <h3 className={`text-[19px] font-bold transition-colors duration-500 ${txtColor} ${isActive ? 'text-[#1d2125] mb-2' : 'text-[#444c56] hover:text-[#1a73e8]'}`}>
                                        {feature.title}
                                    </h3>

                                    <AnimatePresence initial={false} mode="wait">
                                        {isActive && (
                                            <motion.div
                                                key="desc"
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.35, ease: 'easeOut' }}
                                                className="overflow-hidden"
                                            >
                                                <p className={`text-[#4a5568] text-[15px] leading-relaxed mb-4 mt-2 ${txtColor} `}>
                                                    {feature.description}
                                                </p>
                                                <a
                                                    href="#"
                                                    className="text-[#1a73e8] font-bold text-[15px] flex items-center group"
                                                >
                                                    Learn More
                                                    <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                                                </a>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default FeaturesListMore