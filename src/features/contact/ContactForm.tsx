"use client";


import { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import StatusModal from "@/components/shared/StatusModal";

const API_URL = "https://app.trackforce.io/api/PublicContact/submit";

type Status = "idle" | "loading" | "success" | "error";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", companyName: "", phoneNumber: "", teamSize: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [modal, setModal] = useState<{
    open: boolean;
    type: "success" | "error";
    title: string;
    description: string;
  }>({ open: false, type: "success", title: "", description: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: {
          accept: "*/*",
          "Content-Type": "application/json-patch+json",
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: `${form.message}\n\nCompany: ${form.companyName}\nPhone: ${form.phoneNumber}\nTeam Size: ${form.teamSize}`,
        }),
      });

      if (!res.ok) {
        throw new Error(`Request failed with status ${res.status}`);
      }
      setStatus("success");
      setForm({ name: "", email: "", companyName: "", phoneNumber: "", teamSize: "", message: "" });
      setModal({
        open: true,
        type: "success",
        title: "Message Sent!",
        description:
          "Thank you for reaching out. Our team will get back to you shortly.",
      });
    } catch {
      setStatus("error");
      setModal({
        open: true,
        type: "error",
        title: "Something Went Wrong",
        description:
          "We couldn't send your message. Please check your connection and try again.",
      });
    }
  };

  const closeModal = () => setModal((prev) => ({ ...prev, open: false }));

  return (
    <div className="w-full xl:w-1/2 h-hit flex justify-center xl:justify-end">
      <div className="relative w-full max-w-[500px] p-4 group">
        {/* Corner brackets - flush on idle, move outward on hover */}
        <span className="pointer-events-none absolute top-3 left-3 w-20 h-20 border-t-4 border-l-4 border-[#1D72E7] rounded-tl-lg group-hover:-translate-x-10 group-hover:-translate-y-10 transition-all duration-500 ease-in-out" />
        <span className="pointer-events-none absolute top-3 right-3 w-20 h-20 border-t-4 border-r-4 border-[#1D72E7] rounded-tr-lg group-hover:translate-x-10 group-hover:-translate-y-10 transition-all duration-500 ease-in-out" />
        <span className="pointer-events-none absolute bottom-3 left-3 w-20 h-20 border-b-4 border-l-4 border-[#1D72E7] rounded-bl-lg group-hover:-translate-x-10 group-hover:translate-y-10 transition-all duration-500 ease-in-out" />
        <span className="pointer-events-none absolute bottom-3 right-3 w-20 h-20 border-b-4 border-r-4 border-[#1D72E7] rounded-br-lg group-hover:translate-x-10 group-hover:translate-y-10 transition-all duration-500 ease-in-out" />
        <div
          className="relative rounded-md p-8 w-full bg-[#0a0a0a] border-4 border-transparent transition-shadow  duration-300 group-hover:[background:linear-gradient(#0a0a0a,#0a0a0a)_padding-box,linear-gradient(90deg,#1B73E8_0%,#9F60EE_100%)_border-box] group-hover:shadow-[0_0_40px_rgba(168,85,247,0.45)]"
        >
          <div>
            <h3 className="text-white text-2xl font-semibold mb-2 text-left">
              Book Your Free Demo
            </h3>
            <p className="text-gray-400 text-sm mb-6 text-left">
              Tell us about your team — we'll tailor the walkthrough.
            </p>
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="First Name"
                className="w-full bg-transparent text-white placeholder-gray-400 pb-3 border-b border-gray-600 outline-none focus:border-blue-500 transition text-sm"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="Email"
                className="w-full bg-transparent text-white placeholder-gray-400 pb-3 border-b border-gray-600 outline-none focus:border-blue-500 transition text-sm"
              />
              <input
                type="text"
                name="companyName"
                value={form.companyName}
                onChange={handleChange}
                required
                placeholder="Company Name"
                className="w-full bg-transparent text-white placeholder-gray-400 pb-3 border-b border-gray-600 outline-none focus:border-blue-500 transition text-sm"
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="number"
                name="phoneNumber"
                value={form.phoneNumber}
                onChange={handleChange}
                required
                placeholder="Phone Number"
                className="w-full bg-transparent text-white placeholder-gray-400 pb-3 border-b border-gray-600 outline-none focus:border-blue-500 transition text-sm"
              />
              <select
                name="teamSize"
                value={form.teamSize}
                onChange={handleChange}
                required
                className="w-full text-white bg-black placeholder-gray-400 pb-3 border-b border-gray-600 outline-none focus:border-blue-500 transition text-sm"
              >
                <option value="">Select Team Size</option>
                <option value="1-10">1-10 employees</option>
                <option value="11-50">11-50 employees</option>
                <option value="51-200">51-200 employees</option>
              </select>
            </div>
            <div>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                placeholder="Message"
                rows={4}
                className="w-full bg-transparent text-white placeholder-gray-400 pb-3 border-b border-gray-600 outline-none focus:border-blue-500 transition resize-none text-sm"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full  text-white font-semibold py-4 rounded-md flex items-center justify-center gap-2 transition hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/25 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
              style={{ background: "linear-gradient(90deg, #1B73E8 0%, #9F60EE 100%)" }}
            >
              {status === "loading" ? "Booking..." : "Book Free Demo"} <FaArrowRightLong />
            </button>
          </form>
          <div className="mt-4 space-y-3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 justify-between">
              <div className="flex gap-2 items-center">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span className="text-white/80 text-xs">Free 45-min product demo</span>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span className="text-white/80 text-xs">No commitment required</span>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 justify-between">
              <div className="flex gap-2 items-center">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span className="text-white/80 text-xs">Custom launch roadmap</span>
              </div>
              <div className="flex gap-2 items-center">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span className="text-white/80 text-xs">Response within 24 hours</span>
              </div>
            </div>

          </div>
        </div>
      </div>

      <StatusModal
        open={modal.open}
        type={modal.type}
        title={modal.title}
        description={modal.description}
        onClose={closeModal}
      />
    </div>
  )
}

export default ContactForm
