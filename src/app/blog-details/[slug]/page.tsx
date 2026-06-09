import BlogDetails from "@/features/blog_details/BlogDetails";
import { blogs, getBlogBySlug } from "@/data/blogs";
import { notFound } from "next/navigation";

export function generateStaticParams() {
    return blogs.map((b) => ({ slug: b.slug }));
}

export default async function BlogDetailsPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const blog = getBlogBySlug(slug);
    if (!blog) notFound();
    return <BlogDetails blog={blog} />;
}
