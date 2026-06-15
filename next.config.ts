import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve modern formats to browsers that support them (next/image content images).
    formats: ["image/avif", "image/webp"],
    // Whitelist the higher quality levels we use on content images.
    // (Next 16 only allows `quality` values listed here; default is [75].)
    qualities: [75, 90, 100],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // Tree-shake large icon barrels so only the icons actually used are bundled.
  experimental: {
    optimizePackageImports: ["react-icons", "lucide-react"],
  },
  // Strip console.* (except errors) from the production bundle.
  compiler: {
    removeConsole: {
      exclude: ["error"],
    },
  },
};

export default nextConfig;
