import About from '@/features/about/About'
import { buildMetadata, buildBreadcrumbJsonLd } from '@/lib/seo'
import React from 'react'

export const metadata = buildMetadata({
  title: "About Us",
  description:
    "Learn about TrackForce — our mission, vision, and values. We build employee monitoring software that helps teams work smarter while respecting privacy.",
  path: "/about",
})

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
  { name: "Home", path: "/home" },
  { name: "About Us", path: "/about" },
])

export default function AboutPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <About />
    </>
  )
}
