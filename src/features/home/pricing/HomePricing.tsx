
"use client";

import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

const HomePricing = () => {
  const plans = [
    {
      name: "Essential",
      description: "Basic visibility & attendance",
      price: "$4.99/",
      period: "Monthly",
      features: [
        "Screenshots",
        "App Tracking",
        "Website Tracking",
        "Searches Tracking",
        "Reports (Daily / Monthly)",
        "Role Hierarchy",
        "Org-level Configuration",
        "Device List Info",
        "Meetings Monitoring",
      ],
      button: "Choose plan",
      highlight: false,
      link: "https://app.trackforce.io/2/Essential/signup?billing=Monthly"
    },
    {
      name: "Professional",
      description: "Everything in Essential",
      price: "$14.99/",
      period: "Monthly",
      features: [
        "File Transfer Tracking",
        "Risk User Report",
        "HeatMap",
        "Context Switching",
        "Keystroke Logging",
        "Screen Recording",
        "Social Media Monitoring",
        "Email Monitoring",
        "IM (Chat) Monitoring",
        "Console Command Monitoring",
        "USB Block",
        "App Block",
        "Web Block",
      ],
      button: "Choose plan",
      highlight: true,
      link: "https://app.trackforce.io/7/Professional/signup?billing=Monthly"
    },
    {
      name: "Custom Plan",
      description: "Yearly billing only (10–30% discount based on size)",
      price: "",
      period: "",
      features: [
        "Everything from Essential or Professional plan",
        "Plan customization",
        "Custom feature development",
        "24/7 priority support",
        "Dedicated onboarding & setup assistance",
        "Custom reports & dashboards",
        "Custom monitoring rules & policies",
      ],
      button: "Contact to Sales",
      highlight: false,
      link: "/contact",
    },
  ];

  const CheckIcon = ({ darkBg = false }: { darkBg?: boolean }) => (
    <span className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mr-3 ${darkBg ? "bg-emerald-400" : "bg-emerald-500"}`}>
      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="3.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </span>
  );

  return (
    <section className="pt-12 sm:pt-16 pb-16 sm:pb-24 bg-cover bg-center bg-no-repeat bg-[url('/home-price-bg.png')]">
      <div className="lg:w-[1200] xl:w-[1300] mx-auto px-4 sm:px-6 lg:px-0">
        <div className="container mx-auto text-center relative z-10">
          <div className="section_title_border w-fit mx-auto text-black rounded-full mb-6">
            <div className="how_trackforce_works px-4 py-2 text-sm font-semibold">
              Pricing
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold mb-6 text-white leading-tight">
            <span className="font-playball font-normal">Price plans </span>  that click
          </h1>
          <p className="text-sm sm:text-base lg:text-lg max-w-3xl mx-auto text-white">
            Every TrackForce plan includes the core monitoring, productivity, and security features your team needs — no hidden add-ons, no feature lock-ins.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center gap-6 lg:gap-8 mt-12 lg:mt-16 flex-wrap">

          {plans.map((plan, idx) => {

            const isProfessional = plan.highlight;
            const isLeft = idx === 0;
            const isRight = idx === 2;

            let initial: Record<string, number> = {};
            let animate: Record<string, number | number[]> = {};
            let transition: Record<string, unknown> = { duration: 0 };

            if (isProfessional) {
              initial = { opacity: 1, scale: 1, x: 0 };
              animate = { opacity: 1, scale: 1, x: 0 };
            } else {
              const dir = isLeft ? 1 : -1;
              initial = { opacity: 0, x: 280 * dir, scale: 0.85 };
              animate = {
                opacity: [0, 1, 1, 1],
                x: [280 * dir, 0, 30 * dir, 0],
                scale: [0.85, 1, 0.95, 1.05],
              };
              transition = {
                duration: 2.4,
                times: [0, 0.4, 0.7, 1],
                ease: [0.22, 1, 0.36, 1],
                delay: 0.3,
              };
            }

            return (
              <motion.div
                key={plan.name}
                initial={initial}
                whileInView={animate}
                transition={transition}
                viewport={{ once: false, amount: 0.5 }}
                className={`relative rounded-3xl shadow-xl flex flex-col ${isProfessional
                  ? "py-12 px-7 w-[340px] z-10"
                  : "bg-white p-8 w-[320px] border border-gray-200"
                  }`}
                style={
                  isProfessional
                    ? {
                      background: "linear-gradient(180deg, #EAF3FF 0%, #A7CDFF 100%)",
                    }
                    : {}
                }
              >
                {isProfessional && (
                  <div
                    className="title_wrapper absolute -top-6 left-1/2 -translate-x-1/2 w-[200] h-14 flex justify-center items-center text-lg font-medium text-center text-white overflow-hidden" >
                    <div className="absolute top-0 -left-full w-[100] h-full bg-linear-to-r from-transparent via-white/60 to-white/80  skew-x-[-25deg] animate-shine-reverse pointer-events-none"></div>
                    Most popular
                  </div>
                )}

                <h2 className={`text-2xl font-bold mb-1 text-center ${isProfessional ? "text-[#2B2B2B]" : "text-gray-900"}`}>
                  {plan.name}
                </h2>

                <div className={`text-sm mb-5 text-center ${isProfessional ? "text-[#2B2B2B]/70" : "text-gray-500"}`}>
                  ({plan.description})
                </div>

                {plan.price && (
                  <div className={`mb-6 text-center ${isProfessional ? "text-[#2B2B2B]" : "text-gray-900"}`}>
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-base font-medium ml-1 opacity-80">{plan.period}</span>
                  </div>
                )}

                <ul className={`mb-8 text-left flex-1 ${plan.price ? "" : "mt-2"}`}>
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start mb-3">
                      <CheckIcon darkBg={isProfessional} />
                      <span className={`text-sm ${isProfessional ? "text-[#2B2B2B]" : "text-gray-800"}`}>{feature}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href={plan.link}
                  target={plan.link.startsWith("http") ? "_blank" : "_self"}
                  rel={plan.link.startsWith("http") ? "noopener noreferrer" : undefined}
                >
                  <button
                    className={`w-full py-3 rounded-full font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${isProfessional
                      ? "text-white text-base shadow-lg hover:scale-[1.02]"
                      : "border-2 border-gray-900 text-gray-900 bg-white hover:bg-gray-50"
                      }`}
                    style={
                      isProfessional
                        ? {
                          background: "linear-gradient(90deg, #1B73E8 0%, #9F60EE 100%)",
                        }
                        : {}
                    }
                  >
                    {plan.button}
                    {isProfessional && <FiArrowRight className="text-lg" />}
                  </button>
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HomePricing;

