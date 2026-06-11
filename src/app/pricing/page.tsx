import Pricing from "@/features/pricing/Pricing";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Pricing & Plans",
  description:
    "Simple, transparent pricing for TrackForce employee monitoring software. Compare plans and find the right fit for your team — free trial available.",
  path: "/pricing",
});

export default function PricingPage() {
  return <Pricing />;
}