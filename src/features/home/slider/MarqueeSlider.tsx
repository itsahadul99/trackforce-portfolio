"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import Link from "next/link";

interface Logo {
  id: string;
  image: string;
  url: string;
  alt: string;
}

export default function MarqueeSlider({ logos }: { logos: Logo[] }) {
  // Repeat enough times so the marquee always has at least 14 items to scroll smoothly
  const minCopies = Math.ceil(14 / Math.max(logos.length, 1));
  const repeated = Array.from({ length: minCopies }, () => logos).flat();

  return (
    <div className="py-6 sm:py-8 lg:py-10">
      <Marquee speed={50} gradient={false} pauseOnHover className="min-h-[80px]">
        {repeated.map((item, i) => (
          <Link
            key={`${item.id}-${i}`}
            href={item.url || "#"}
            target="_blank"
            className="mx-4 sm:mx-6 lg:mx-8 block"
          >
            <img
              src={item.image}
              alt={item.alt || "logo"}
              width={200}
              height={40}
              className="object-contain max-h-[40px] rounded-lg cursor-pointer hover:scale-125 transition-all duration-300 w-[120px] sm:w-[160px] lg:w-[200px] h-auto"
            />
          </Link>
        ))}
      </Marquee>
    </div>
  );
}
