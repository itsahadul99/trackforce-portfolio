"use client";

import Image from "next/image";

type BlogCardImageProps = {
  src: string;
  alt: string;
};

function isValidSrc(src: string) {
  return src && (src.startsWith("/") || src.startsWith("http://") || src.startsWith("https://"));
}

const BlogCardImage = ({ src, alt }: BlogCardImageProps) => (
  <Image
    src={isValidSrc(src) ? src : "/post-1.png"}
    alt={alt}
    fill
    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
    quality={90}
    className="object-cover"
    onError={(e) => { e.currentTarget.src = "/post-1.png"; }}
  />
);

export default BlogCardImage;
