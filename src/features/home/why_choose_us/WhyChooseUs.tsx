"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaArrowRightLong } from 'react-icons/fa6';
import trackforce from '../../../../public/trackforce.png';


const features = [
  {
    icon: '🕒',
    color: '#F3E8FF',
    title: 'Automatic Time & Activity Tracking',
    desc: "Work hours, app usage, and active time are recorded automatically, so there's no need for spreadsheets or daily logs.",
  },
  {
    icon: '🛡️',
    color: '#E6F4EA',
    title: 'Custom Monitoring Controls',
    desc: "Decide what to track, when to track, and for whom – fully adjustable to match your team policies and privacy standards.",
  },
  {
    icon: '🔒',
    color: '#EAF3FB',
    title: 'Secure & Built to Scale',
    desc: "Enterprise-grade security with infrastructure that supports growing teams – from small groups to large organizations.",
  },
  {
    icon: '📊',
    color: '#FFF7E6',
    title: 'All-in-One Workforce Monitoring',
    desc: "Track employee activity, productivity, and work patterns from a single dashboard – no switching tools, no fragmented data.",
  },
  {
    icon: '👀',
    color: '#EAF3FB',
    title: 'Real-Time Work Visibility',
    desc: "See what your team is working on during work hours, as it happens – without constant check-ins or manual updates.",
  },
  {
    icon: '💡',
    color: '#E6F4EA',
    title: 'Behavior-Based Productivity Insights',
    desc: "Identify idle time, focus spots, and performance patterns using real activity data – not assumptions or self-reports.",
  },
];

const WhyChooseUs = () => {
  return (

    <section className=" w-full py-16 sm:py-20 lg:py-24 text-white bg-cover bg-center bg-no-repeat bg-[url('/why-choose-us-bg.png')]">
      <div className='lg:w-[1200] xl:w-[1300] mx-auto  '>
        <div className="flex flex-col lg:flex-row gap-8 w-full px-4 sm:px-6 lg:px-4">
          {/* Right: Heading & Description — moved up on mobile via order */}
          <div className="w-full lg:w-2/5 flex flex-col justify-center items-center lg:items-start text-center lg:text-left px-2 md:px-8 order-1 lg:order-2">
            <div className="content_title_border w-fit text-[#0C59C0] rounded-full mb-1">
              <div className="px-4 py-2 text-sm font-semibold">
                Why Choose Us
              </div>
            </div>
            <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold mb-2 text-white leading-tight">
              Built for Teams That <br className="hidden sm:block" /> Need  <span className="font-playball font-normal">Real Visibility</span>
            </h1>
            <p className="text-white text-sm sm:text-base mb-6 max-w-lg mt-6">
              Track employee activity, productivity, and work patterns in one place without disrupting everyday workflows.
            </p>
            <div className="">
                    <button className="group custom-button relative w-fit bg-white text-black font-bold py-3 px-6 rounded-[16px] flex gap-3 justify-between items-center mx-auto lg:mx-0">
                        <span className='group-hover:italic '>Book a Demo</span> <FaArrowRightLong className='group-hover:-rotate-[30deg] transition ease-in-out' />
                        <motion.div
                            className="ml-2 absolute right-0"
                            animate={{
                                x: [0, -190, 0],   // initial, move right, return
                                opacity: [0, 1, 0,0,1, 0], // fade out at the end of the move
                            }}
                            transition={{
                                duration: 7,
                                repeat: Infinity,
                                repeatType: 'loop',
                            }}
                        >
                            <Image
                                src={trackforce}
                                alt="TrackForce Logo"
                                className="w-8 h-8 group-hover:hidden"
                            />
                        </motion.div>
                    </button>
                </div>
          </div>
          {/* Left: Features Card */}
          <div className="bg-white/19 rounded-2xl shadow-xl p-6 sm:p-8 w-full lg:w-3/5 flex flex-col justify-center relative order-2 lg:order-1" style={{ backdropFilter: 'blur(8px)' }}>
            {/* Vertical colored bar */}
            <div className="absolute left-0 top-8 bottom-8 w-2 rounded-full bg-gradient-to-b from-[#D9B8FF] via-[#A7F3D0] to-[#60A5FA]" />
            <ul className="space-y-1 relative z-10">
              {features.map((f, i) => (
                <li key={i} className="why_choose_li group/why_left flex items-start gap-3 sm:gap-4" style={{ '--hover-color': f.color } as React.CSSProperties}>
                  <span className="flex shrink-0 items-center justify-center w-10 h-10 rounded-full text-xl font-bold" style={{ backgroundColor: f.color }}>{f.icon}</span>
                  <div>
                    <h4 className="font-semibold text-white group-hover/why_left:text-black text-base sm:text-lg mb-1">{f.title}</h4>
                    <p className="text-white group-hover/why_left:text-black text-xs sm:text-sm leading-relaxed ">{f.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;