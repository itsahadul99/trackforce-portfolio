import Blog from "@/features/blog/Blog";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
    title: "Blog",
    description:
        "Insights on employee monitoring, productivity tracking, remote team management, and workforce analytics from the TrackForce team.",
    path: "/blog",
});

export default function BlogPage() {
    return (
       <Blog/>
    );
}