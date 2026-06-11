import CaseStudy from '@/features/case-study/CaseStudy'
import { buildMetadata } from '@/lib/seo'

export const metadata = buildMetadata({
    title: "Case Study",
    description:
        "See how teams use TrackForce in the real world — deployment strategy, key features implemented, and measurable business results.",
    path: "/case-study",
})

export default function CaseStudyPage() {
    return (
        <CaseStudy />
    )
}
