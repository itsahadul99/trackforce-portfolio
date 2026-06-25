import Contact from "@/features/contact/Contact";
import { buildMetadata, buildBreadcrumbJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Get in touch with the TrackForce team. Ask about features, pricing, or book a demo of our employee monitoring and productivity software.",
  path: "/contact",
});

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", path: "/home" },
  { name: "Contact", path: "/contact" },
])

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
};

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <Contact />
    </>
  );
}
