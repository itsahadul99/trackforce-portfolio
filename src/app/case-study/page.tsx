import CaseStudy from '@/features/case-study/CaseStudy'
import { buildMetadata, buildBreadcrumbJsonLd } from '@/lib/seo'

export const metadata = buildMetadata({
    title: "Case Study",
    description:
        "See how teams use TrackForce in the real world — deployment strategy, key features implemented, and measurable business results.",
    path: "/case-study",
})

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Home", path: "/home" },
    { name: "Case Study", path: "/case-study" },
])

export default function CaseStudyPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            <CaseStudy />
        </>
    )
}
