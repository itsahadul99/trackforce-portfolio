import ClarityAnalytics from "@/components/shared/Clearity";
import Footer from "@/features/home/footer/Footer";
import Navbar from "@/features/navbar/Navbar";
import { getPageContent, getSiteSettings, getContent } from "@/lib/cms";
import { defaultOgImage, siteName, siteUrl } from "@/lib/seo";
import type { Metadata } from "next";
import { Geist, Playball, Rubik } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const GA_ID = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const playball = Playball({
  variable: "--playball",
  subsets: ["latin"],
  weight: "400",
});

const rubik = Rubik({
  variable: "--font-rubik",
  subsets: ["latin"],
});

const defaultTitle = "TrackForce – Employee Monitoring & Productivity Software";
const defaultDescription =
  "TrackForce is employee monitoring software with real-time activity tracking, time management, and detailed reporting to boost productivity and keep data secure.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: defaultTitle,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  keywords: [
    "employee monitoring software",
    "productivity tracking",
    "time tracking",
    "remote team management",
    "workforce analytics",
    "TrackForce",
  ],
  icons: {
    icon: "/trackforce_logo.png",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: defaultTitle,
    description: defaultDescription,
    url: "/",
    siteName,
    type: "website",
    locale: "en_US",
    images: [{ url: defaultOgImage, alt: defaultTitle }],
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: defaultDescription,
    images: [defaultOgImage],
  },
  robots: {
    index: true,
    follow: true,
  },
  ...(process.env.NEXT_PUBLIC_GSC_VERIFICATION && {
    verification: {
      google: process.env.NEXT_PUBLIC_GSC_VERIFICATION,
    },
  }),
};

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      name: siteName,
      url: siteUrl,
      logo: `${siteUrl}/trackforce_logo.png`,
    },
    {
      "@type": "SoftwareApplication",
      name: siteName,
      applicationCategory: "BusinessApplication",
      operatingSystem: "Windows, macOS, Linux",
      description: defaultDescription,
      url: siteUrl,
    },
  ],
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [footerCms, homeCms, siteSettings] = await Promise.all([
    getPageContent("footer"),
    getPageContent("home"),
    getSiteSettings(),
  ]);
  const logoUrl =
    getContent(homeCms, "navbar", "logo_url") ||
    siteSettings?.logoUrl ||
    undefined;
  return (
    <html lang="en">
      <head>
        {/* Avatar images in Testimonials are served from Unsplash — warm the connection early. */}
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
      </head>
      <body
        className={`${geistSans.variable} ${playball.variable} ${rubik.variable} antialiased relative`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Navbar logoUrl={logoUrl} />
        <ClarityAnalytics />
        <main>{children}</main>
        <Footer cms={footerCms} />
        {GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}', { page_path: window.location.pathname });
              `}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
