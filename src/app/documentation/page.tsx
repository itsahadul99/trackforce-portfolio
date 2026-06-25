import Documentation from '@/features/documentation/Documentation'
import { buildMetadata, buildBreadcrumbJsonLd } from '@/lib/seo'
import React from 'react'

export const metadata = buildMetadata({
  title: "Documentation",
  description:
    "TrackForce documentation — installation guides, setup steps, and everything you need to deploy employee monitoring across your team.",
  path: "/documentation",
})

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", path: "/home" },
  { name: "Documentation", path: "/documentation" },
])

export default function DocPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Documentation />
    </>
  )
}
