"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

/* ---- API types ---- */
type ApiPricing = {
  billingPeriod: string;
  pricePerUser: number;
  discountPercent: number;
  effectivePricePerUser: number;
  currencyCode: string;
  currencySymbol: string;
  isDiscountActive: boolean;
};

type ApiPlan = {
  planId: number;
  planName: string;
  description: string;
  planType: string;
  isSelfServe: boolean;
  sortOrder: number;
  pricing: ApiPricing[];
  features: string[];
};

type ApiResponse = {
  plans: ApiPlan[];
};

/* ---- Card shape consumed by the UI ---- */
type Plan = {
  name: string;
  description: string;
  price: string;
  period: string;
  features: string[];
  button: string;
  highlight: boolean;
  link: string;
};

type BillingPeriod = "monthly" | "yearly";

const PRICING_API = "https://app.trackforce.io/api/PublicPricing/plans";

/* Custom plan returns no features/price from the API — keep curated fallback */
const CUSTOM_FALLBACK_FEATURES = [
  "Everything from Essential or Professional plan",
  "Plan customization",
  "Custom feature development",
  "24/7 priority support",
  "Dedicated onboarding & setup assistance",
  "Custom reports & dashboards",
  "Custom monitoring rules & policies",
];

const mapApiPlan = (plan: ApiPlan): Plan => {
  const pricing = plan.pricing?.[0];
  const isCustom = !plan.isSelfServe || !pricing;

  let price = "";
  let period = "";
  if (pricing) {
    const value = pricing.isDiscountActive
      ? pricing.effectivePricePerUser
      : pricing.pricePerUser;
    price = `${pricing.currencySymbol}${value.toFixed(2)}/`;
    period = pricing.billingPeriod;
  }

  const billingLabel = pricing?.billingPeriod ?? "Monthly";

  return {
    name: plan.planName,
    description: plan.description,
    price,
    period,
    features: plan.features.length ? plan.features : isCustom ? CUSTOM_FALLBACK_FEATURES : [],
    button: isCustom ? "Contact to Sales" : "Choose plan",
    highlight: plan.planType === "Professional",
    link: isCustom
      ? "/contact"
      : `https://app.trackforce.io/${plan.planId}/${plan.planType}/signup?billing=${billingLabel}`,
  };
};

const HomePricing = () => {
  /* 1. Track whether the user is on a mobile/tablet screen */
  const [isMobile, setIsMobile] = useState(false);

  /* 2. Billing period toggle + plans fetched from the API */
  const [billing, setBilling] = useState<BillingPeriod>("monthly");
  const [plans, setPlans] = useState<Plan[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      // 1024px matches Tailwind's 'lg' breakpoint
      setIsMobile(window.innerWidth < 1024);
    };

    // Run on initial mount
    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);

    fetch(`${PRICING_API}?period=${billing}`, { headers: { accept: "*/*" } })
      .then((res) => res.json())
      .then((data: ApiResponse) => {
        if (cancelled) return;
        const mapped = [...(data.plans ?? [])]
          .sort((a, b) => a.sortOrder - b.sortOrder)
          .map(mapApiPlan);
        setPlans(mapped);
      })
      .catch(() => {
        /* keep previously loaded plans on error */
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });

    return () => {
      cancelled = true;
    };
  }, [billing]);

  const CheckIcon = ({ darkBg = false }: { darkBg?: boolean }) => (
    <span className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mr-3 ${darkBg ? "bg-emerald-400" : "bg-emerald-500"}`}>
      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" strokeWidth="3.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </span>
  );

  return (
    <section className="pt-32 sm:pt-36 pb-16 sm:pb-24 bg-cover bg-center bg-no-repeat bg-[url('/home-price-bg.png')] overflow-hidden">
      {/* Fixed: Added 'px' to max-w-[1300px] */}
      <div className="max-w-[1300px] mx-auto px-4 sm:px-6 xl:px-0">
        <div className="container mx-auto text-center relative z-10">
          <div className="section_title_border w-fit mx-auto text-black rounded-full mb-6">
            <div className="how_trackforce_works px-4 py-2 text-sm font-semibold">
              Pricing
            </div>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-semibold mb-6 text-white leading-tight">
            <span className="font-playball font-normal">Price plans </span> that click
          </h2>
          <p className="text-sm sm:text-base lg:text-lg max-w-3xl mx-auto text-white">
            Every TrackForce plan includes the core monitoring, productivity, and security features your team needs — no hidden add-ons, no feature lock-ins.
          </p>

          {/* Billing period toggle */}
          <div className="mt-8 flex justify-center">
            <div className="inline-flex items-center gap-1 rounded-full border border-white/20 bg-white/10 p-1 backdrop-blur">
              {(["monthly", "yearly"] as BillingPeriod[]).map((option) => {
                const active = billing === option;
                return (
                  <button
                    key={option}
                    type="button"
                    onClick={() => setBilling(option)}
                    className={`relative rounded-full px-5 py-2 text-sm font-semibold capitalize transition-all ${active ? "text-white" : "text-white/70 hover:text-white"
                      }`}
                    style={
                      active
                        ? { background: "linear-gradient(90deg, #1B73E8 0%, #9F60EE 100%)" }
                        : {}
                    }
                  >
                    {option}
                    {option === "yearly" && (
                      <span className="ml-2 rounded-full bg-emerald-500 px-2 py-0.5 text-[10px] font-bold text-white">
                        Save up to 20%
                      </span>
                    )}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
        <div className="flex flex-col lg:flex-row justify-center items-center lg:items-stretch gap-10 sm:gap-8 mt-12 lg:mt-16 flex-wrap min-h-[400px]">

          {loading && plans.length === 0 && (
            <div className="flex items-center justify-center w-full py-20">
              <span className="h-10 w-10 animate-spin rounded-full border-4 border-white/30 border-t-white" />
            </div>
          )}

          {plans.map((plan, idx) => {
            const isProfessional = plan.highlight;
            const isLeft = idx === 0;
            let initial: Record<string, number> = {};
            let animate: Record<string, number | number[]> = {};
            let transition: Record<string, unknown> = { duration: 0 };

            /* 2. Check if it's professional plan OR if we are on mobile to skip keyframes */
            if (isProfessional || isMobile) {
              initial = { opacity: 1, scale: 1, x: 0 };
              animate = { opacity: 1, scale: 1, x: 0 };
              transition = { duration: 0 };
            } else {
              const dir = isLeft ? 1 : -1;
              initial = { opacity: 0, x: 280 * dir, scale: 0.85 };
              animate = {
                opacity: [0, 1, 1, 1],
                x: [280 * dir, 0, 30 * dir, 0],
                scale: [1, 1, 1, 1],
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
                {...(isMobile ? { animate } : { whileInView: animate })}
                transition={transition}
                viewport={{ once: false, amount: 0.5 }}
                className={`relative rounded-3xl shadow-xl flex flex-col mx-auto lg:mx-0 w-full max-w-[340px] ${isProfessional
                  ? "p-6 sm:p-8 z-10 lg:-my-10"
                  : "bg-white p-6 sm:p-8 border border-gray-200"
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
                  /* Fixed: Added 'px' to w-[200px] and w-[100px] variables */
                  <div className="title_wrapper absolute -top-6 left-1/2 -translate-x-1/2 w-[200px] h-14 flex justify-center items-center text-lg font-medium text-center text-white overflow-hidden" >
                    <div className="absolute top-0 -left-full w-[100px] h-full bg-linear-to-r from-transparent via-white/60 to-white/80 skew-x-[-25deg] animate-shine-reverse pointer-events-none"></div>
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

                <ul className={`pricing-features-scroll mb-8 text-left flex-1 overflow-y-auto ${isProfessional ? "max-h-[380px]": "max-h-[300px]"} pr-2 ${plan.price ? "" : "mt-2"}`}>
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
                  className="mt-auto block w-full"
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