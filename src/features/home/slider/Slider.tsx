

"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import Link from "next/link";

const logos = [
  {
    src: "/akij_ibos.png",
    link: "https://ibos.io/",
  },
  {
    src: "/people_desk.png",
    link: "https://app.peopledesk.io/",
  },
  {
    src: "/managerium.png",
    link: "https://mgm.ibos.io/",
  },
  {
    src: "/aero.png",
    link: "https://aeroleads.com",
  },
  {
    src: "/aerodrop.png",
    link: "https://aerodrop.io",
  },
  {
    src: "/creatibuzz.png",
    link: "https://creatibuzz.com",
  },
];

export default function Slider() {
  return (
    <div className="py-6 sm:py-8 lg:py-10">
      <Marquee speed={50} gradient={false} pauseOnHover>
        {logos.map((item, i) => (
          <Link
            key={i}
            href={item.link}
            target="_blank"
            className="mx-4 sm:mx-6 lg:mx-8 block"
          >
            <Image
              src={item.src}
              alt="logo"
              width={200}
              height={40}
              className="object-contain rounded-lg cursor-pointer hover:scale-105 transition w-[120px] sm:w-[160px] lg:w-[200px] h-auto"
            />
          </Link>
        ))}
      </Marquee>
    </div>
  );
}