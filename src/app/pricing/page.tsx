import Pricing from "@/features/pricing/Pricing";
import { buildMetadata, buildBreadcrumbJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Pricing & Plans",
  description:
    "Simple, transparent pricing for TrackForce employee monitoring software. Compare plans and find the right fit for your team — free trial available.",
  path: "/pricing",
});

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", path: "/home" },
  { name: "Pricing & Plans", path: "/pricing" },
])

export default function PricingPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Pricing />
    </>
  );
}