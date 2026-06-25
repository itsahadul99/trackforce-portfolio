import BlogDetails from "@/features/blog_details/BlogDetails";
import { blogs, getBlogBySlug } from "@/data/blogs";
import { notFound } from "next/navigation";
import { buildMetadata, buildBreadcrumbJsonLd, siteName, siteUrl } from "@/lib/seo";
import type { Metadata } from "next";

export function generateStaticParams() {
    return blogs.map((b) => ({ slug: b.slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const blog = getBlogBySlug(slug);
    if (!blog) return {};
    const base = buildMetadata({
        title: blog.title,
        description: blog.excerpt,
        path: `/blog-details/${blog.slug}`,
        image: blog.image,
    });
    return {
        ...base,
        openGraph: {
            ...base.openGraph,
            type: "article",
            publishedTime: new Date(blog.date).toISOString(),
            authors: [blog.author],
        },
    };
}

export default async function BlogDetailsPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const blog = getBlogBySlug(slug);
    if (!blog) notFound();

    const breadcrumbJsonLd = buildBreadcrumbJsonLd([
        { name: "Home", path: "/home" },
        { name: "Blog", path: "/blog" },
        { name: blog.title, path: `/blog-details/${blog.slug}` },
    ])

    const articleJsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: blog.title,
        description: blog.excerpt,
        image: `${siteUrl}${blog.image}`,
        datePublished: new Date(blog.date).toISOString(),
        author: { "@type": "Person", name: blog.author },
        publisher: {
            "@type": "Organization",
            name: siteName,
            logo: { "@type": "ImageObject", url: `${siteUrl}/trackforce_logo.png` },
        },
        mainEntityOfPage: `${siteUrl}/blog-details/${blog.slug}`,
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
            />
            <BlogDetails blog={blog} />
        </>
    );
}
