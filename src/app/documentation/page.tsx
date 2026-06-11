import Documentation from '@/features/documentation/Documentation'
import { buildMetadata } from '@/lib/seo'
import React from 'react'

export const metadata = buildMetadata({
  title: "Documentation",
  description:
    "TrackForce documentation — installation guides, setup steps, and everything you need to deploy employee monitoring across your team.",
  path: "/documentation",
})

export default function DocPage() {
  return (
    <Documentation />
  )
}
