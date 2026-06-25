import Feature from '@/features/feature/Feature'
import { buildMetadata, buildBreadcrumbJsonLd } from '@/lib/seo'

export const metadata = buildMetadata({
  title: "Features",
  description:
    "Explore TrackForce features — real-time activity tracking, screenshots, app and website usage, time tracking, and advanced productivity reports.",
  path: "/feature",
})

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", path: "/home" },
  { name: "Features", path: "/feature" },
])

export default function FeaturePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Feature />
    </>
  )
}
