import Contact from "@/features/contact/Contact";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Contact Us",
  description:
    "Get in touch with the TrackForce team. Ask about features, pricing, or book a demo of our employee monitoring and productivity software.",
  path: "/contact",
});

export default function ContactPage() {
  return <Contact />;
}
