'use client';

import FeaturesListMore from '@/components/all/FeaturesListMore';
import RichText from '@/components/shared/RichText';
import { motion, type Variants } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { FaArrowRightLong } from 'react-icons/fa6';
import trackforce from '../../../../public/trackforce.png';
import type { CmsHowSection } from '@/lib/cms';

const imgVariants = (x: number, y: number, delay = 0): Variants => ({
  hidden: { opacity: 0, x, y, scale: 0.85 },
  visible: {
    opacity: 1, x: 0, y: 0, scale: 1,
    transition: { duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] as any, delay },
  },
});

interface Props {
  section: CmsHowSection;
  reversed: boolean; // true = image left, text right
}

export default function HowSection({ section, reversed }: Props) {
  const features = [
    { title: section.feature1Title, description: section.feature1Desc },
    { title: section.feature2Title, description: section.feature2Desc },
    { title: section.feature3Title, description: section.feature3Desc },
  ].filter((f) => f.title);

  const images = (
    <div className="w-full lg:w-1/2 relative h-[320px] sm:h-[420px] lg:h-[520px]">
      {section.image1 && (
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[75%] drop-shadow-2xl z-10"
          variants={imgVariants(0, 40, 0)} initial="hidden" whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          <img src={section.image1} alt={section.heading} className="w-full rounded-xl object-cover" />
        </motion.div>
      )}
      {section.image2 && (
        <motion.div
          className="absolute top-0 right-0 w-[40%] drop-shadow-xl z-20"
          variants={imgVariants(50, -50, 0.35)} initial="hidden" whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          <img src={section.image2} alt="" className="w-full rounded-xl object-cover" />
        </motion.div>
      )}
      {section.image3 && (
        <motion.div
          className="absolute bottom-0 left-0 w-[45%] drop-shadow-xl z-20"
          variants={imgVariants(-50, 50, 0.35)} initial="hidden" whileInView="visible"
          viewport={{ once: false, amount: 0.1 }}
        >
          <img src={section.image3} alt="" className="w-full rounded-xl object-cover" />
        </motion.div>
      )}
    </div>
  );

  const text = (
    <div className="w-full lg:w-1/2">
      {section.badge && (
        <div className="section_title_border w-fit text-[#0C59C0] rounded-full mb-6">
          <div className="how_trackforce_works px-4 py-2 text-sm font-semibold">{section.badge}</div>
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-6 lg:mb-8 leading-tight">
        {section.heading}
      </h2>
      {section.description && (
        <RichText className="text-sm sm:text-base lg:text-lg mb-6 lg:mb-8" html={section.description} />
      )}
      {features.length > 0 && (
        <FeaturesListMore
          height="280px" features={features} txtColor=""
          activeTitleColor="text-white" inactiveTitleColor="text-white/60 hover:text-white"
          descColor="text-gray-200"
        />
      )}
      {section.ctaText && (
        <div className="mt-10 lg:mt-12">
          <Link href={section.ctaUrl || "/documentation"}
            className="group custom-button relative w-fit bg-white text-black font-bold py-3 px-6 rounded-[16px] flex gap-3 justify-between items-center"
          >
            <span className="group-hover:italic">{section.ctaText}</span>
            <FaArrowRightLong className="group-hover:-rotate-[30deg] transition ease-in-out" />
            <motion.div className="ml-2 absolute right-0"
              animate={{ x: [0, -190, 0], opacity: [0, 1, 0, 0, 1, 0] }}
              transition={{ duration: 7, repeat: Infinity, repeatType: 'loop' }}
            >
              <Image src={trackforce} alt="TrackForce Logo" className="w-8 h-8 group-hover:hidden" />
            </motion.div>
          </Link>
        </div>
      )}
    </div>
  );

  return (
    <div className={`mt-16 sm:mt-20 lg:mt-28 text-white flex gap-12 lg:gap-3 items-center lg:justify-between ${
      reversed ? 'flex-col-reverse lg:flex-row' : 'flex-col lg:flex-row'
    }`}>
      {reversed ? <>{images}{text}</> : <>{text}{images}</>}
    </div>
  );
}
