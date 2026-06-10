"use client";


import { FaArrowRightLong } from "react-icons/fa6";

const ContactForm = () => {
  return (
    <div className="w-full xl:w-1/2 h-hit flex justify-center xl:justify-end">
      <div className="relative w-full max-w-[480px] p-4 group">
        {/* Corner brackets - flush on idle, move outward on hover */}
        <span className="pointer-events-none absolute top-3 left-3 w-20 h-20 border-t-4 border-l-4 border-[#1D72E7] rounded-tl-lg group-hover:-translate-x-10 group-hover:-translate-y-10 transition-all duration-500 ease-in-out" />
        <span className="pointer-events-none absolute top-3 right-3 w-20 h-20 border-t-4 border-r-4 border-[#1D72E7] rounded-tr-lg group-hover:translate-x-10 group-hover:-translate-y-10 transition-all duration-500 ease-in-out" />
        <span className="pointer-events-none absolute bottom-3 left-3 w-20 h-20 border-b-4 border-l-4 border-[#1D72E7] rounded-bl-lg group-hover:-translate-x-10 group-hover:translate-y-10 transition-all duration-500 ease-in-out" />
        <span className="pointer-events-none absolute bottom-3 right-3 w-20 h-20 border-b-4 border-r-4 border-[#1D72E7] rounded-br-lg group-hover:translate-x-10 group-hover:translate-y-10 transition-all duration-500 ease-in-out" />
        <div
          className="relative rounded-md p-8 w-full bg-[#0a0a0a] border-4 border-transparent transition-shadow  duration-300 group-hover:[background:linear-gradient(#0a0a0a,#0a0a0a)_padding-box,linear-gradient(90deg,#1B73E8_0%,#9F60EE_100%)_border-box] group-hover:shadow-[0_0_40px_rgba(168,85,247,0.45)]"
        >
          <h3 className="text-white text-2xl font-semibold mb-8 text-center">
            Contact form
          </h3>

          <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
            <div>
              <input
                type="text"
                placeholder="Name"
                className="w-full bg-transparent text-white placeholder-gray-400 pb-3 border-b border-gray-600 outline-none focus:border-blue-500 transition text-sm"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                className="w-full bg-transparent text-white placeholder-gray-400 pb-3 border-b border-gray-600 outline-none focus:border-blue-500 transition text-sm"
              />
            </div>
            <div>
              <textarea
                placeholder="Message"
                rows={4}
                className="w-full bg-transparent text-white placeholder-gray-400 pb-3 border-b border-gray-600 outline-none focus:border-blue-500 transition resize-none text-sm"
              />
            </div>
            <button
              type="submit"
              className="w-full  text-white font-semibold py-4 rounded-md flex items-center justify-center gap-2 transition hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/25"
              style={{background: "linear-gradient(90deg, #1B73E8 0%, #9F60EE 100%)"}}
            >
              Send Message <FaArrowRightLong />
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default ContactForm
