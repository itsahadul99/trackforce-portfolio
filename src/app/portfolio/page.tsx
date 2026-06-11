import Portfolio from '@/features/portfolio/Portfolio'
import { buildMetadata } from '@/lib/seo'
import React from 'react'

export const metadata = buildMetadata({
    title: "Portfolio",
    description:
        "TrackForce in action — real-time command centers, productivity insights, and the business impact our monitoring platform delivers.",
    path: "/portfolio",
})

export default function PortfolioPage() {
    return (
        <Portfolio />
    )
}
