import Blog from "@/features/blog/Blog";
import { buildMetadata, buildBreadcrumbJsonLd } from "@/lib/seo";

export const metadata = buildMetadata({
    title: "Blog",
    description:
        "Insights on employee monitoring, productivity tracking, remote team management, and workforce analytics from the TrackForce team.",
    path: "/blog",
});

const breadcrumbJsonLd = buildBreadcrumbJsonLd([
    { name: "Home", path: "/home" },
    { name: "Blog", path: "/blog" },
])

export default function BlogPage() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            <Blog />
        </>
    );
}