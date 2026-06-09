import React from 'react';


const TrustpilotWidget = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      {/* মেইন কার্ড */}
      <div className="relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-700 p-6 rounded-lg shadow-2xl flex flex-col md:flex-row items-center gap-6 max-w-lg">
        
        {/* গ্লসি শাইন ইফেক্ট (CSS দিয়ে কন্ট্রোল করা হয়েছে) */}
        <div className="shine-effect"></div>

        {/* বাম দিকের অংশ: লোগো এবং নাম */}
        <div className="flex items-center gap-2">
          <svg
            viewBox="0 0 100 100"
            className="w-8 h-8 fill-green-400"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M100 38.3l-38.3-5.6L44.4 0 27.1 32.7 0 38.3l27.1 26.4L20.7 100l30.9-16.3L82.5 100l-6.4-35.3L100 38.3z" />
          </svg>
          <span className="text-white text-3xl font-bold tracking-tight">
            Trustpilot
          </span>
        </div>

        {/* মাঝখানের অংশ: রিভিউ সংখ্যা */}
        <div className="text-white text-xl font-medium">
          <span className="opacity-90">456 reviews</span>
        </div>

        {/* ডান দিকের অংশ: স্টার রেটিং */}
        <div className="flex gap-1">
          {[...Array(5)].map((_, index) => (
            <div
              key={index}
              className={`w-10 h-10 flex items-center justify-center ${
                index < 4 ? 'bg-[#00b67a]' : 'bg-gray-300' // ৪টি সবুজ, ১টি ধূসর (উদাহরণস্বরূপ)
              }`}
            >
              <svg
                viewBox="0 0 100 100"
                className="w-7 h-7 fill-white"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M100 38.3l-38.3-5.6L44.4 0 27.1 32.7 0 38.3l27.1 26.4L20.7 100l30.9-16.3L82.5 100l-6.4-35.3L100 38.3z" />
              </svg>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustpilotWidget;