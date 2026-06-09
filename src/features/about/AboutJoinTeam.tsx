"use client";

import React from "react";
import {
  MonitorDot,
  Settings,
  ShieldCheck,
  RefreshCcw,
  Clock,
  Lightbulb,
} from "lucide-react";

const features = [
  {
    icon: MonitorDot,
    color: "#EAF3FB",
    iconColor: "#E8800A",
    title: "Real-Time Dashboard for Complete Visibility",
    desc: "Monitor live productivity, activity logs, and performance metrics from one unified dashboard.",
  },
  {
    icon: Settings,
    color: "#E6F4EA",
    iconColor: "#22A85B",
    title: "Workforce Monitoring Platform",
    desc: "Track screens, apps, and activities in real time to ensure compliance and accountability.",
  },
  {
    icon: ShieldCheck,
    color: "#F3E8FF",
    iconColor: "#8B5CF6",
    title: "Comprehensive Reports & Analytics",
    desc: "Access daily, weekly, and monthly reports to identify patterns and improve decision-making.",
  },
  {
    icon: RefreshCcw,
    color: "#FFE8E8",
    iconColor: "#E04B6A",
    title: "Employee & Device Management",
    desc: "Easily onboard users, assign devices, and manage access from a single control panel.",
  },
  {
    icon: Clock,
    color: "#FFF7E6",
    iconColor: "#8B5CF6",
    title: "Time Tracking & Productivity Insights",
    desc: "Measure active vs idle time, project costs, and overall team efficiency effortlessly.",
  },
  {
    icon: Lightbulb,
    color: "#EAF3FB",
    iconColor: "#3B82F6",
    title: "Automated Billing, Invoices, and Payment Tracking",
    desc: "Automate invoicing and payment tracking for accurate billing, real-time insights, and streamlined financial management.",
  },
];

const AboutJoinTeam = () => {
  return (
    <section className="w-full mt-24">
      <div className="lg:w-[1200] xl:w-[1300] mx-auto">
        <div className="flex flex-col md:flex-row gap-8 w-full px-4">
          {/* Left: Features Card */}
          <div
            className="bg-white rounded-2xl shadow-xl p-8 w-3/5 flex flex-col justify-center relative"
            style={{ backdropFilter: "blur(8px)" }}
          >
            {/* Vertical colored bar */}
            <div className="absolute left-0 top-8 bottom-8 w-2 rounded-full bg-gradient-to-b from-[#D9B8FF] via-[#A7F3D0] to-[#60A5FA]" />
            <ul className="space-y-1 relative z-10">
              {features.map((f, i) => (
                <li
                  key={i}
                  className="why_choose_li flex items-start gap-4"
                  style={{ "--hover-color": f.color } as React.CSSProperties}
                >
                  <span
                    className="flex items-center justify-center w-10 h-10 rounded-full shrink-0"
                    style={{ backgroundColor: f.color }}
                  >
                    <f.icon className="w-5 h-5" style={{ color: f.iconColor }} />
                  </span>
                  <div>
                    <h4 className="font-semibold text-gray-900 text-lg mb-1">
                      {f.title}
                    </h4>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {f.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Heading & Description */}
          <div className="w-2/5 flex flex-col justify-center items-start px-2 md:px-8">
            <div className="content_title_border w-fit text-[#0C59C0] rounded-full mb-1">
              <div className="px-4 py-2 text-sm font-semibold">
                Join our team
              </div>
            </div>
            <h1 className="text-[42px] font-semibold mb-2 text-black">
              Build the future of productivity with{" "}
              <span className="font-playball font-normal">TrackForce</span>
            </h1>
            <p className="text-gray-600 text-base mb-6 max-w-lg mt-6">
              We&apos;re building smarter employee monitoring and workforce
              management solutions that make a real impact.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutJoinTeam;
