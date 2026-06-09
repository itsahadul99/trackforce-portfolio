import type { Metadata } from "next";
import { Geist, Geist_Mono, Playball } from "next/font/google";
import "./globals.css";
import Navbar from "@/features/navbar/Navbar";
import Footer from "@/features/home/footer/Footer";

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

export const metadata: Metadata = {
  title: "TrackForce",
  description: "TrackForce is a powerful employee monitoring software designed to help businesses enhance productivity, ensure data security, and manage remote teams effectively. With features like real-time activity tracking, time management, and detailed reporting, TrackForce provides valuable insights into employee performance while maintaining privacy and compliance. Whether you're looking to boost efficiency or safeguard sensitive information, TrackForce offers a comprehensive solution for modern workforce management.",
  icons: {
    icon: "/trackforce_logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playball.variable} antialiased relative`}
      >
        <Navbar />
        {children}
         <Footer />
      </body>
    </html>
  );
}
