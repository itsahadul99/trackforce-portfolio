import About from '@/features/about/About'
import { buildMetadata } from '@/lib/seo'
import React from 'react'

export const metadata = buildMetadata({
  title: "About Us",
  description:
    "Learn about TrackForce — our mission, vision, and values. We build employee monitoring software that helps teams work smarter while respecting privacy.",
  path: "/about",
})

export default function AboutPage() {
  return (
    <About/>
  )
}
