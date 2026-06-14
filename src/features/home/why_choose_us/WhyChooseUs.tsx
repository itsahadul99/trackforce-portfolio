"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FaArrowRightLong } from 'react-icons/fa6';
import trackforce from '../../../../public/trackforce.png';

import AutomicIcon from './automic';
import CustomMonitoringIcon from './customMonitoring';
import SecureIcon from './secure';
import Link from 'next/link';
const WhyChooseUs = () => {
  const features = [
    {
      icon: <AutomicIcon />,
      color: '#F3A7D2',
      title: 'Automatic Time & Activity Tracking',
      desc: "Work hours, app usage, and active time are recorded automatically, so there's no need for spreadsheets or daily logs.",
    },
    {
      icon: <CustomMonitoringIcon />,
      color: '#BDFCB5',
      title: 'Custom Monitoring Controls',
      desc: "Decide what to track, when to track, and for whom – fully adjustable to match your team policies and privacy standards.",
    },
    {
      icon: <SecureIcon />,
      color: '#B0CDFF',
      title: 'Secure & Built to Scale',
      desc: "Enterprise-grade security with infrastructure that supports growing teams – from small groups to large organizations.",
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M20.5 5.5C20.5 7.15685 19.1569 8.5 17.5 8.5C15.8431 8.5 14.5 7.15685 14.5 5.5C14.5 3.84315 15.8431 2.5 17.5 2.5C19.1569 2.5 20.5 3.84315 20.5 5.5Z" stroke="#2B2B2B" strokeWidth="1.5" />
        <path d="M8.5 11.5C8.5 13.1569 7.15685 14.5 5.5 14.5C3.84315 14.5 2.5 13.1569 2.5 11.5C2.5 9.84315 3.84315 8.5 5.5 8.5C7.15685 8.5 8.5 9.84315 8.5 11.5Z" stroke="#2B2B2B" strokeWidth="1.5" />
        <path d="M21.5 18.5C21.5 20.1569 20.1569 21.5 18.5 21.5C16.8431 21.5 15.5 20.1569 15.5 18.5C15.5 16.8431 16.8431 15.5 18.5 15.5C20.1569 15.5 21.5 16.8431 21.5 18.5Z" stroke="#2B2B2B" strokeWidth="1.5" />
        <path d="M14.5348 4.58109C14.1554 4.52765 13.7677 4.5 13.3733 4.5C10.2974 4.5 7.62058 6.18227 6.24054 8.66317M19.7131 7.49453C20.8311 8.86497 21.5 10.6056 21.5 12.5C21.5 13.8758 21.1472 15.1705 20.5258 16.3012M15.8816 20.1117C15.0917 20.3638 14.2486 20.5 13.3733 20.5C9.58287 20.5 6.39853 17.9454 5.5 14.4898" stroke="#2B2B2B" strokeWidth="1.5" />
      </svg>,
      color: '#FCBD7A',
      title: 'All-in-One Workforce Monitoring',
      desc: "Track employee activity, productivity, and work patterns from a single dashboard – no switching tools, no fragmented data.",
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M18.952 8.60657L21.4621 8.45376C19.6628 3.70477 14.497 0.999915 9.4604 2.34474C4.09598 3.7771 0.909629 9.26107 2.34347 14.5935C3.77731 19.926 9.28838 23.0876 14.6528 21.6553C18.6358 20.5918 21.418 17.2947 22 13.4844" stroke="#2B2B2B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M12 8V12L14 14" stroke="#2B2B2B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>,
      color: '#C8B5FC',
      title: 'Real-Time Work Visibility',
      desc: "See what your team is working on during work hours, as it happens – without constant check-ins or manual updates.",
    },
    {
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M6.08938 15C5.71097 14.1494 5.5 13.2031 5.5 12.2059C5.5 8.50233 8.41015 5.5 12 5.5C15.5899 5.5 18.5 8.50233 18.5 12.2059C18.5 13.2031 18.289 14.1494 17.9106 15" stroke="#2B2B2B" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M12 2V3" stroke="#2B2B2B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M22 12H21" stroke="#2B2B2B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M3 12H2" stroke="#2B2B2B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M19.0704 4.92969L18.3633 5.6368" stroke="#2B2B2B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M5.6368 5.6368L4.92969 4.92969" stroke="#2B2B2B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14.5165 19.3074C15.5269 18.9806 15.9321 18.0558 16.0461 17.1256C16.0801 16.8477 15.8515 16.6172 15.5715 16.6172L8.47637 16.6174C8.18677 16.6174 7.95419 16.8632 7.98877 17.1507C8.10042 18.0791 8.38222 18.7573 9.45297 19.3074M14.5165 19.3074C14.5165 19.3074 9.62923 19.3074 9.45297 19.3074M14.5165 19.3074C14.395 21.2524 13.8333 22.0227 12.0063 22.0011C10.0521 22.0372 9.60255 21.0851 9.45297 19.3074" stroke="#2B2B2B" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>,
      color: '#83E7FD',
      title: 'Behavior-Based Productivity Insights',
      desc: "Identify idle time, focus spots, and performance patterns using real activity data – not assumptions or self-reports.",
    },
  ];
  return (

    <section className=" w-full py-16 sm:py-20 lg:py-24 text-white bg-cover bg-center bg-no-repeat bg-[url('/why-choose-us-bg.png')]">
      <div className='max-w-[1300] mx-auto px-4 sm:px-6 xl:px-0'>
        <div className="flex flex-col lg:flex-row gap-8 w-full px-4 sm:px-6 lg:px-4">
          {/* Right: Heading & Description — moved up on mobile via order */}
          <div className="w-full lg:w-2/5 flex flex-col justify-center items-center lg:items-start text-center lg:text-left px-2 md:px-8 order-1 lg:order-2">
            <div className="section_title_border w-fit mx-auto text-black rounded-full mb-6">
              <div className="how_trackforce_works px-4 py-2 text-sm font-semibold">
                Why Choose Us
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold mb-2 text-white leading-tight">
              Built for Teams That <br className="hidden sm:block" /> Need  <span className="font-playball font-normal">Real Visibility</span>
            </h2>
            <p className="text-white text-sm sm:text-base mb-6 max-w-lg mt-6">
              Track employee activity, productivity, and work patterns in one place without disrupting everyday workflows.
            </p>
            <div className="">
              <Link href="/contact" className="group custom-button relative w-fit bg-white text-black font-bold py-3 px-6 rounded-[16px] flex gap-3 justify-between items-center mx-auto lg:mx-0">
                <span className='group-hover:italic '>Book a Demo</span> <FaArrowRightLong className='group-hover:-rotate-[30deg] transition ease-in-out' />
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
                    src={trackforce}
                    alt="TrackForce Logo"
                    className="w-8 h-8 group-hover:hidden"
                  />
                </motion.div>
              </Link>
            </div>
          </div>
          {/* Left: Features Card */}
          <div className="left-card p-6 sm:p-8 w-full lg:w-3/5 flex flex-col justify-center relative order-2 lg:order-1" style={{ backdropFilter: 'blur(8px)' }}>
            <ul className="space-y-1 relative z-10">
              {features.map((f, i) => (
                <li key={i} className="why_choose_li group/why_left hover:rounded-2xl flex items-start gap-3 sm:gap-4" style={{ '--hover-color': f.color } as React.CSSProperties}>
                  <span className="flex shrink-0 items-center justify-center w-10 h-10 rounded-full text-xl font-bold" style={{ backgroundColor: f.color }}>{f.icon}</span>
                  <div>
                    <h3 className="font-semibold text-white group-hover/why_left:text-black text-base sm:text-lg mb-1">{f.title}</h3>
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