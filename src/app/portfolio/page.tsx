import Portfolio from '@/features/portfolio/Portfolio'
import { buildMetadata, buildBreadcrumbJsonLd } from '@/lib/seo'
import React from 'react'

export const metadata = buildMetadata({
    title: "Portfolio",
    description:
        "TrackForce in action — real-time command centers, productivity insights, and the business impact our monitoring platform delivers.",
    path: "/portfolio",
})

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Home", path: "/home" },
    { name: "Portfolio", path: "/portfolio" },
])

export default function PortfolioPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            <Portfolio />
        </>
    )
}
