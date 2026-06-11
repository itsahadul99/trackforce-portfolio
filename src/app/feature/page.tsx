import Feature from '@/features/feature/Feature'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
  title: "Features",
  description:
    "Explore TrackForce features — real-time activity tracking, screenshots, app and website usage, time tracking, and advanced productivity reports.",
  path: "/feature",
})

export default function FeaturePage() {
  return (
   <Feature/>
  )
}
