// "use client";
// import { motion } from "framer-motion";
// import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
// import Image from 'next/image';
// import { FaArrowRightLong, FaPinterestP, FaWhatsapp, FaXTwitter } from 'react-icons/fa6';
// import trackforce from '../../../../public/trackforce.png';
// import trackforce_logo from "../../../../public/trackforce_logo.png"
// import footerActiveBg from '../../../../public/footerActive.png';
// export default function Footer() {
//   return (
//     <footer className="group/footer relative bg-[#020617] text-gray-300 pt-20 sm:pt-24 lg:pt-28 pb-10 overflow-hidden transition-colors duration-1000">
//       <div>
//         <Image src={footerActiveBg} alt="Footer Background" className="absolute inset-0 w-full h-full object-cover opacity-20 pointer-events-none z-50" />
//       </div>
//       <div
//         className="absolute inset-0 opacity-0 group-hover/footer:opacity-100 transition-opacity duration-1000 ease-in-out pointer-events-none z-0"
//         style={{
//           background:
//             "radial-gradient(ellipse 75% 90% at 50% 0%, #a5f3fc 0%, #22d3ee 8%, #2563eb 22%, #1d4ed8 42%, #0a2540 70%, #020817 100%)",
//         }}
//       />
//       <div
//         className="absolute top-0 left-0 w-full h-[2px] z-30"
//         style={{
//           background:
//             "linear-gradient(90deg, transparent, #2563eb, #22d3ee, #67e8f9, #22d3ee, #2563eb, transparent)",
//         }}
//       />
//       <div className="group-hover/footer:opacity-100 opacity-0 transition-all duration-1000 ease-in-out w-[1000px] h-20 bg-[#020817] absolute top-0 left-1/2 -translate-x-1/2 z-20 shadow-[0_15px_30px_rgba(2,8,23,0.85)]"></div>
//       <div className=" group-hover/footer:opacity-100 opacity-0 transition-all duration-1000 ease-in-out absolute top-20 left-1/2 -translate-x-1/2 w-[1000px] h-[250px] pointer-events-none z-10">
//         {/* Neon horizon flare line directly under the shadow flap */}
//         <div
//           className="absolute top-0 left-0 w-full h-[3px]"
//           style={{
//             background:
//               "linear-gradient(90deg, transparent 0%, #22d3ee 25%, #a5f3fc 50%, #22d3ee 75%, transparent 100%)",
//             boxShadow:
//               "0 0 20px #22d3ee, 0 0 40px rgba(34,211,238,0.6), 0 0 80px rgba(34,211,238,0.35)",
//           }}
//         />

//         {/* Concentrated Downward Pyramid Beam — blurred so edges blend with ambient */}
//         <div
//           className="absolute inset-0 opacity-80"
//           style={{
//             background:
//               "linear-gradient(180deg, #a5f3fc 0%, #22d3ee 12%, #2563eb 40%, rgba(37,99,235,0.25) 75%, transparent 100%)",
//           clipPath: "polygon(0% 0%, 100% 0%, 79% 100%, 25% 100%)",
//             filter: "blur(18px)",
//           }}
//         />
//       </div>

//       {/* Footer Content Area */}
//       <div className="max-w-[1200px] xl:max-w-[1300px] mx-auto px-4 sm:px-6 relative z-30">

//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:justify-between gap-10 sm:gap-8">

//           {/* Logo + subscribe */}
//           <div className="max-w-full lg:max-w-[380px] sm:col-span-2 lg:col-span-1">
//             {/* Logo */}
//             <div className="flex items-center gap-2 mb-4">
//               <Image src={trackforce_logo} width={42} height={31} alt="Trackforce logo" />
//               <span className="text-2xl sm:text-3xl font-medium text-white">TrackForce</span>
//             </div>

//             <p className="text-sm text-gray-200 mb-6 leading-relaxed font-normal">
//               Advanced Employee Monitoring Software That Keeps Teams Focused, Productive, Secure, and Always On Track
//             </p>

//             <div className="flex items-center relative bg-white rounded-[14px] overflow-hidden h-14 w-full max-w-[440px] shadow-lg">
//               <input
//                 type="email"
//                 placeholder="Enter your email address"
//                 className="flex-1 min-w-0 px-4 sm:px-5 py-2 text-base sm:text-lg text-black outline-none bg-transparent"
//               />
//               <div className="mr-1 group/button shrink-0">
//                 <button className="group/button custom-button relative w-fit bg-gradient-to-r from-gray-700 via-gray-900 to-gray-700 text-white font-medium py-3 px-4 sm:px-6 rounded-[14px] flex gap-2 sm:gap-3 justify-between font-semibold items-center text-sm sm:text-base">
//                   <span className='group-hover/button:italic'>Subscribe</span> <FaArrowRightLong className='group-hover/button:-rotate-[30deg] transition ease-in-out' />
//                   <motion.div
//                     className="ml-2 absolute right-0"
//                     animate={{
//                       x: [0, -190, 0],
//                       opacity: [0, 1, 0, 0, 1, 0],
//                     }}
//                     transition={{
//                       duration: 7,
//                       repeat: Infinity,
//                       repeatType: 'loop',
//                     }}
//                   >
//                     <Image
//                       src={trackforce}
//                       alt="TrackForce Logo"
//                       className="w-8 h-8 group-hover:hidden"
//                     />
//                   </motion.div>
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Resources */}
//           <div>
//             <h3 className="text-white font-semibold mb-4">Resorces</h3>
//             <ul className="space-y-3 text-sm text-gray-200">
//               <li className="hover:text-white cursor-pointer transition">About us</li>
//               <li className="hover:text-white cursor-pointer transition">FAQ</li>
//               <li className="hover:text-white cursor-pointer transition">Blogs</li>
//             </ul>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h3 className="text-white font-semibold mb-4">Quick Links</h3>
//             <ul className="space-y-3 text-sm text-gray-200">
//               <li className="hover:text-white cursor-pointer transition">Pricing</li>
//               <li className="hover:text-white cursor-pointer transition">Features</li>
//               <li className="hover:text-white cursor-pointer transition">Contact us</li>
//             </ul>
//           </div>

//           {/* Contact */}
//           <div className="sm:col-span-2 lg:col-span-1">
//             <h3 className="text-white font-semibold mb-4">Contact us</h3>

//             <ul className="space-y-4 text-sm text-gray-200">
//               <li className="flex items-center gap-3">
//                 <Phone size={16} /> +88 01329-731839
//               </li>

//               <li className="flex items-center gap-3">
//                 <Mail size={16} /> support@trackforce.io
//               </li>

//               <li className="flex items-start gap-3">
//                 <MapPin size={16} className="mt-1 shrink-0" />
//                 <span>6/2 Kazi Nazrul Islam Rd, Dhaka, Bangladesh</span>
//               </li>

//               <li className="flex items-start gap-3">
//                 <MapPin size={16} className="mt-1 shrink-0" />
//                 <span>945 Taraval St #1083, San Francisco, CA 94116, USA</span>
//               </li>
//             </ul>
//           </div>

//         </div>

//         {/* Bottom line */}
//         <div className="border-t border-gray-700/50 mt-12 sm:mt-16 pt-6">
//           <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-gray-400 text-center md:text-left">
//             <p>©2026 trackforce All rights reserved. Developed by AKIJ iBOS</p>

//             <div className="flex gap-4 text-lg text-gray-300">
//               <span className="hover:text-white cursor-pointer transition"><Facebook size={18} /></span>
//               <span className="hover:text-white cursor-pointer transition"><Linkedin size={18} /></span>
//               <span className="hover:text-white cursor-pointer transition"><FaXTwitter size={18} /></span>
//               <span className="hover:text-white cursor-pointer transition"><FaWhatsapp size={18} /></span>
//               <span className="hover:text-white cursor-pointer transition"><Instagram size={18} /></span>
//               <span className="hover:text-white cursor-pointer transition"><FaPinterestP size={18} /></span>
//             </div>
//           </div>
//         </div>

//       </div>
//     </footer>
//   );
// }


"use client";
import { motion } from "framer-motion";
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Image from 'next/image';
import { useState } from "react";
import { FaArrowRightLong, FaPinterestP, FaWhatsapp, FaXTwitter } from 'react-icons/fa6';
import footerActiveBg from '../../../../public/footerActive.png';
import trackforce from '../../../../public/trackforce.png';
import trackforce_logo from "../../../../public/trackforce_logo.png";
import Link from "next/link";
import { FaTiktok, FaYoutube } from "react-icons/fa";
import StatusModal from "@/components/shared/StatusModal";

export default function Footer({ cms = {} }: { cms?: any }) {
  const brand   = cms.brand   ?? {};
  const contact = cms.contact ?? {};
  const social  = cms.social  ?? {};
  const bottom  = cms.bottom  ?? {};
  const [email, setEmail] = useState("");
  const [modal, setModal] = useState<{
    open: boolean;
    type: "success" | "error";
    title: string;
    description: string;
  }>({ open: false, type: "success", title: "", description: "" });

  const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // No API yet — just confirm the subscription with our shared modal.
    setEmail("");
    setModal({
      open: true,
      type: "success",
      title: "You're Subscribed!",
      description:
        "Thanks for subscribing. You'll now receive the latest TrackForce updates straight to your inbox.",
    });
  };

  const closeModal = () => setModal((prev) => ({ ...prev, open: false }));

  return (
    <footer className="group/footer relative bg-[#020617] text-gray-300 pt-20 sm:pt-24 lg:pt-28 pb-10 overflow-hidden transition-colors duration-1000">
      <div>
        <Image src={footerActiveBg} alt="Footer Background" quality={90} className="absolute inset-0 w-full ease-in-out h-full opacity-0 duration-1000 object-cover md:object-fill lg:group-hover/footer:opacity-100 pointer-events-none z-20" />
      </div>
      {/* Footer Content Area */}
      <div className="max-w-[1200px] xl:max-w-[1300px] mx-auto px-4 sm:px-6 relative z-30">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:justify-between gap-10 sm:gap-8">

          {/* Logo + subscribe */}
          <div className="max-w-full lg:max-w-[380px] sm:col-span-2 lg:col-span-1">
            {/* Logo */}
            <div className="flex items-center gap-2 mb-4">
              {brand.logo_url ? (
                <img src={brand.logo_url} width={42} height={31} alt="Trackforce logo" className="w-[42px] h-[31px] object-contain" onError={(e) => { (e.currentTarget as HTMLImageElement).src = "/trackforce_logo.png"; }} />
              ) : (
                <Image src={trackforce_logo} width={42} height={31} alt="Trackforce logo" />
              )}
              <span className="text-2xl sm:text-3xl font-medium text-white">TrackForce</span>
            </div>

            <p className="text-sm text-gray-200 mb-6 leading-relaxed font-normal">
              {brand.description || "Advanced Employee Monitoring Software That Keeps Teams Focused, Productive, Secure, and Always On Track"}
            </p>

            <form onSubmit={handleSubscribe} className="flex items-center relative bg-white rounded-[14px] overflow-hidden h-14 w-full max-w-[440px] shadow-lg">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 min-w-0 px-4 sm:px-5 py-2 text-base sm:text-lg text-black outline-none bg-transparent"
              />
              <div className="mr-1 group/button shrink-0">
                <button type="submit" className="group/button custom-button relative w-fit bg-gradient-to-r from-gray-700 via-gray-900 to-gray-700 text-white font-medium py-3 px-4 sm:px-6 rounded-[14px] flex gap-2 sm:gap-3 justify-between font-semibold items-center text-sm sm:text-base">
                  <span className='group-hover/button:italic'>Subscribe</span> <FaArrowRightLong className='group-hover/button:-rotate-[30deg] transition ease-in-out' />
                  <motion.div
                    className="ml-2 absolute right-0"
                    animate={{
                      x: [0, -190, 0],
                      opacity: [0, 1, 0, 0, 1, 0],
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
            </form>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-white font-semibold mb-4">Resorces</h3>
            <ul className="space-y-3 text-sm text-gray-200 *:block">
              <li><Link href="/about" className="hover:text-white cursor-pointer inline-block transition-all duration-300 hover:translate-x-1">About us</Link></li>
              <li><Link href="/faq" className="hover:text-white cursor-pointer inline-block transition-all duration-300 hover:translate-x-1">FAQ</Link></li>
              <li><Link href="/blogs" className="hover:text-white cursor-pointer inline-block transition-all duration-300 hover:translate-x-1">Blogs</Link></li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3 text-sm text-gray-200 *:block">
              <li><Link href="/pricing" className="hover:text-white cursor-pointer inline-block transition-all duration-300 hover:translate-x-1">Pricing</Link></li>
              <li><Link href="/feature" className="hover:text-white cursor-pointer inline-block transition-all duration-300 hover:translate-x-1">Features</Link></li>
              <li><Link href="/contact" className="hover:text-white cursor-pointer inline-block transition-all duration-300 hover:translate-x-1">Contact us</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href="/contact" className="block text-white font-semibold mb-4 transition-colors duration-300 hover:text-cyan-300">Contact us</Link>

            <ul className="space-y-4 text-sm text-gray-200">
              <li>
                <a
                  href={`tel:${(contact.phone || "+8801329731839").replace(/\s/g, "")}`}
                  className="flex items-center gap-3 hover:text-white transition-all duration-300 hover:translate-x-1"
                >
                  <Phone size={16} /> {contact.phone || "+88 01329-731839"}
                </a>
              </li>

              <li>
                <a
                  href={`mailto:${contact.email || "support@trackforce.io"}`}
                  className="flex items-center gap-3 hover:text-white transition-all duration-300 hover:translate-x-1"
                >
                  <Mail size={16} /> {contact.email || "support@trackforce.io"}
                </a>
              </li>

              {(contact.address1 || true) && (
                <li>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.address1 || "6/2 Kazi Nazrul Islam Rd, Dhaka, Bangladesh")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 hover:text-white transition-all duration-300 hover:translate-x-1"
                  >
                    <MapPin size={16} className="mt-1 shrink-0" />
                    <span>{contact.address1 || "6/2 Kazi Nazrul Islam Rd, Dhaka, Bangladesh"}</span>
                  </a>
                </li>
              )}

              {(contact.address2 || true) && (
                <li>
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(contact.address2 || "945 Taraval St #1083, San Francisco, CA 94116, USA")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start gap-3 hover:text-white transition-all duration-300 hover:translate-x-1"
                  >
                    <MapPin size={16} className="mt-1 shrink-0" />
                    <span>{contact.address2 || "945 Taraval St #1083, San Francisco, CA 94116, USA"}</span>
                  </a>
                </li>
              )}
            </ul>
          </div>

        </div>

        {/* Bottom line */}
        <div className="border-t border-gray-700/50 mt-12 sm:mt-16 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs sm:text-sm text-gray-400 text-center md:text-left">
            <p className="text-gray-400 text-xs sm:text-sm">
              {bottom.copyright || `©${new Date().getFullYear()} Trackforce All rights reserved. Developed by AKIJ iBOS`}
            </p>

            <div className="flex gap-4 text-lg text-gray-300">
              <a href={social.facebook_url  || "https://www.facebook.com/trackforce.io"} target="_blank" rel="noopener noreferrer" aria-label="Facebook"    className="inline-flex hover:text-white transition-all duration-300 hover:-translate-y-1"><Facebook size={18} /></a>
              <a href={social.linkedin_url  || "https://www.linkedin.com/company/trackforceibos/"} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"    className="inline-flex hover:text-white transition-all duration-300 hover:-translate-y-1"><Linkedin size={18} /></a>
              <a href={social.twitter_url   || "https://x.com/TrackForce_io"} target="_blank" rel="noopener noreferrer" aria-label="X (Twitter)" className="inline-flex hover:text-white transition-all duration-300 hover:-translate-y-1"><FaXTwitter size={18} /></a>
              <a href={social.whatsapp_url  || "https://wa.me/8801581501131"} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp"    className="inline-flex hover:text-white transition-all duration-300 hover:-translate-y-1"><FaWhatsapp size={18} /></a>
              <a href={social.youtube_url   || "https://www.youtube.com/@trackforce_io"} target="_blank" rel="noopener noreferrer" aria-label="YouTube"     className="inline-flex hover:text-white transition-all duration-300 hover:-translate-y-1"><FaYoutube size={18} /></a>
              <a href={social.pinterest_url || "https://www.pinterest.com/trackforce_io/"} target="_blank" rel="noopener noreferrer" aria-label="Pinterest"   className="inline-flex hover:text-white transition-all duration-300 hover:-translate-y-1"><FaPinterestP size={18} /></a>
              <a href={social.tiktok_url    || "https://www.tiktok.com/@trackforce_io"} target="_blank" rel="noopener noreferrer" aria-label="TikTok"      className="inline-flex hover:text-white transition-all duration-300 hover:-translate-y-1"><FaTiktok size={18} /></a>
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
    </footer>
  );
}