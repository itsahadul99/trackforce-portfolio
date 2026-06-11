import type { MetadataRoute } from "next";
import { blogs } from "@/data/blogs";
import { siteUrl } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
    const staticRoutes: MetadataRoute.Sitemap = [
        { path: "/home", priority: 1 },
        { path: "/feature", priority: 0.9 },
        { path: "/pricing", priority: 0.9 },
        { path: "/about", priority: 0.8 },
        { path: "/portfolio", priority: 0.8 },
        { path: "/case-study", priority: 0.8 },
        { path: "/documentation", priority: 0.7 },
        { path: "/blog", priority: 0.7 },
        { path: "/contact", priority: 0.7 },
    ].map(({ path, priority }) => ({
        url: `${siteUrl}${path}`,
        changeFrequency: "weekly",
        priority,
    }));

    const blogRoutes: MetadataRoute.Sitemap = blogs.map((blog) => ({
        url: `${siteUrl}/blog-details/${blog.slug}`,
        lastModified: new Date(blog.date),
        changeFrequency: "monthly",
        priority: 0.6,
    }));

    return [...staticRoutes, ...blogRoutes];
}
