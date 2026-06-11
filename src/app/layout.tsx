import type { Metadata } from "next";
import { Geist, Geist_Mono, Playball, Rubik } from "next/font/google";
import "./globals.css";
import Navbar from "@/features/navbar/Navbar";
import Footer from "@/features/home/footer/Footer";
import { siteUrl, siteName, defaultOgImage } from "@/lib/seo";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playball.variable} ${rubik.variable} antialiased relative`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
         <Footer />
      </body>
    </html>
  );
}
