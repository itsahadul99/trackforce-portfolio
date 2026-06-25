import Image from "next/image";

type ContactCardsProps = { cms?: Record<string, string> }

const ContactCards = ({ cms = {} }: ContactCardsProps) => {
  return (
    <section className="py-16">
      <div className="max-w-[1300] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {/* Call us */}
          <div className="bg-gradient-to-b from-[#CFE4FE] to-[#83CFD9] rounded-2xl p-6 border border-white/40 shadow-lg hover:shadow-gray-500 hover:shadow-xl transition-all duration-300 ease-in">
            <div className="flex items-center justify-center w-12 h-12 bg-white/30 border-2 border-white rounded-full">
              <Image
                src={'/contact-card1.png'}
                width={400}
                height={400}
                alt="contact-card"
                quality={90}
                className="w-5"
              />
            </div>
            <h3 className="font-bold text-xl text-gray-900 my-3">Call us</h3>
            <p className="text-sm text-gray-600 my-3">
              {cms.hours || "Sun-Thu from 9am to 6pm."}
            </p>
            <a
              href={`tel:${cms.phone || "+8801581501131"}`}
              className="text-sm font-semibold text-gray-900 underline"
            >
              {cms.phone || "+88 01581-501131"}
            </a>
          </div>

          {/* Email us */}
          <div className="bg-gradient-to-b from-[#D3E5FF] to-[#C0B2FB] rounded-2xl p-6 border border-white/40  shadow-lg hover:shadow-gray-500 hover:shadow-xl transition-all duration-300 ease-in">
            <div className="flex items-center justify-center w-12 h-12 bg-white/30 border-2 border-white rounded-full">
              <Image
                src={'/contact-card2.png'}
                width={400}
                height={400}
                alt="contact-card"
                quality={90}
                className="w-5"
              />
            </div>
            <h3 className="font-bold text-xl text-gray-900 my-3">
              Email us
            </h3>
            <p className="text-sm text-gray-600 my-3">
              We&apos;re here to help.
            </p>
            <a
              href={`mailto:${cms.email || "support@trackforce.io"}`}
              className="text-sm font-semibold text-gray-900 underline"
            >
              {cms.email || "support@trackforce.io"}
            </a>
          </div>

          {/* Bangladesh office */}
          <div className="bg-gradient-to-b from-[#D8E9FE] to-[#BEF8CE] rounded-2xl p-6 border border-white/40  shadow-lg hover:shadow-gray-500 hover:shadow-xl transition-all duration-300 ease-in">
            <div className="flex items-center justify-center w-12 h-12 bg-white/30 border-2 border-white rounded-full">
              <Image
                src={'/contact-card3.png'}
                width={400}
                height={400}
                alt="contact-card"
                quality={90}
                className="w-5"
              />
            </div>
            <h3 className="font-bold text-xl text-gray-900 my-3">
              Bangladesh office
            </h3>
            <p className="text-sm text-gray-600">
              {cms.address || "6/2 Kazi Nazrul Islam Rd, Dhaka, Bangladesh"}
            </p>
          </div>

          {/* USA office */}
          <div className="bg-[linear-gradient(180deg,#DFE6F2_53.53%,#F2D7BF_100%)] rounded-2xl p-6 border border-white/40  shadow-lg hover:shadow-gray-500 hover:shadow-xl transition-all duration-300 ease-in">
            <div className="flex items-center justify-center w-12 h-12 bg-white/30 border-2 border-white rounded-full">
              <Image
                src={'/contact-card3.png'}
                width={400}
                height={400}
                alt="contact-card"
                quality={90}
                className="w-5"
              />
            </div>
            <h3 className="font-bold text-xl text-gray-900 my-3">
              USA office
            </h3>
            <p className="text-sm text-gray-600">
              945 Taraval St #1083, San
              <br />
              Francisco, CA 94116, USA
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactCards