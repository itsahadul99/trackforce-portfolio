import type { NextConfig } from "next";

const securityHeaders = [
  // Force HTTPS for 1 year; include subdomains
  {
    key: "Strict-Transport-Security",
    value: "max-age=31536000; includeSubDomains; preload",
  },
  // Prevent MIME-type sniffing
  {
    key: "X-Content-Type-Options",
    value: "nosniff",
  },
  // Block clickjacking — only same origin can iframe this site
  {
    key: "X-Frame-Options",
    value: "SAMEORIGIN",
  },
  // Control how much referrer info is sent to external sites
  {
    key: "Referrer-Policy",
    value: "strict-origin-when-cross-origin",
  },
  // Basic XSS protection for older browsers
  {
    key: "X-XSS-Protection",
    value: "1; mode=block",
  },
  // Disable browser features not needed by this site
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), interest-cohort=()",
  },
];

const nextConfig: NextConfig = {
  output: "standalone",
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: securityHeaders,
      },
    ];
  },
  images: {
    // Serve modern formats to browsers that support them (next/image content images).
    formats: ["image/avif", "image/webp"],
    // Whitelist the higher quality levels we use on content images.
    // (Next 16 only allows `quality` values listed here; default is [75].)
    qualities: [75, 90, 100],
     dangerouslyAllowLocalIP: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      // Supabase Storage (media uploads from admin panel)
      {
        protocol: "https",
        hostname: "admin.trackforce.io",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "backend-trackforce.onrender.com",
        pathname: "/**",
      },
      // Admin panel uploaded images (local dev)
      {
        protocol: "http",
        hostname: "localhost",
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
