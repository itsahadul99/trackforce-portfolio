import Home from '@/features/home/Home'
import { buildMetadata, buildBreadcrumbJsonLd } from '@/lib/seo'
import React from 'react'

export const metadata = buildMetadata({
  title: "Employee Monitoring & Productivity Software",
  description:
    "Boost team productivity with TrackForce — real-time activity tracking, time management, screenshots, and detailed reports for remote and in-office teams.",
  path: "/home",
})

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", path: "/home" },
])

const reviewJsonLd = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "TrackForce",
  applicationCategory: "BusinessApplication",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.8",
    bestRating: "5",
    worstRating: "1",
    ratingCount: "8",
  },
  review: [
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Devon Lane" },
      reviewRating: { "@type": "Rating", ratingValue: "4.9", bestRating: "5" },
      reviewBody:
        "Managing a distributed team used to feel overwhelming, but TrackForce changed everything. We now have real-time visibility into our workflows, making collaboration smoother and decisions much more confident.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Savannah Nguyen" },
      reviewRating: { "@type": "Rating", ratingValue: "4.8", bestRating: "5" },
      reviewBody:
        "TrackForce has completely redefined how we manage campaigns. The real-time insights and intuitive interface allow us to optimize faster and stay ahead of deadlines effortlessly.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Jane Cooper" },
      reviewRating: { "@type": "Rating", ratingValue: "4.9", bestRating: "5" },
      reviewBody:
        "Before TrackForce, our operations felt fragmented and difficult to track. Now, everything is centralized, structured, and incredibly easy to monitor.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Jane Cooper" },
      reviewRating: { "@type": "Rating", ratingValue: "5.0", bestRating: "5" },
      reviewBody:
        "TrackForce brought all our tools and workflows into one unified platform. It simplified our processes and gave us the clarity we were missing.",
    },
    {
      "@type": "Review",
      author: { "@type": "Person", name: "Savannah Nguyen" },
      reviewRating: { "@type": "Rating", ratingValue: "4.8", bestRating: "5" },
      reviewBody:
        "A reliable and intuitive platform for tracking team productivity. It's fast, easy to use, and genuinely improves how we manage day-to-day operations.",
    },
  ],
}

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What is TrackForce used for?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "TrackForce is an advanced Employee Monitoring Software that helps businesses track productivity, monitor activity, and ensure data security through real-time analytics and detailed reports.",
      },
    },
    {
      "@type": "Question",
      name: "Can TrackForce monitor remote employees?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, TrackForce can monitor remote employees by tracking activity, applications used, websites visited, and productivity metrics in real time.",
      },
    },
    {
      "@type": "Question",
      name: "How does TrackForce improve productivity?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "It provides analytics, reports, and activity tracking so managers can identify inefficiencies and improve workflow.",
      },
    },
    {
      "@type": "Question",
      name: "What kind of activities can TrackForce monitor?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "TrackForce can monitor app usage, websites visited, screenshots, keystrokes, and productivity patterns.",
      },
    },
    {
      "@type": "Question",
      name: "Is employee monitoring legal and ethical?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, when implemented transparently and in compliance with local laws and company policies.",
      },
    },
    {
      "@type": "Question",
      name: "Does TrackForce work on Windows, macOS, and Linux?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, TrackForce supports Windows, macOS, and Linux, so you can monitor your entire workforce across different operating systems from a single dashboard.",
      },
    },
    {
      "@type": "Question",
      name: "Is my company's data secure with TrackForce?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Absolutely. TrackForce uses encrypted data transfer and secure cloud storage, with role-based access controls to keep your monitoring data protected at all times.",
      },
    },
  ],
}

const page = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(reviewJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Home />
    </>
  )
}

export default page