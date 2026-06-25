import type { Metadata } from "next";

export const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://trackforce.com";

export const siteName = "TrackForce";

export const defaultOgImage = "/thumbnail.png";

type BreadcrumbItem = { name: string; path: string };

export function buildBreadcrumbJsonLd(items: BreadcrumbItem[]) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: items.map((item, index) => ({
            "@type": "ListItem",
            position: index + 1,
            name: item.name,
            item: `${siteUrl}${item.path}`,
        })),
    };
}

type PageSeo = {
    title: string;
    description: string;
    path: string;
    image?: string;
};

export function buildMetadata({
    title,
    description,
    path,
    image,
}: PageSeo): Metadata {
    // Use explicit image (e.g. blog featured image) or generate a dynamic branded OG image
    const ogImage =
        image ??
        `/api/og?title=${encodeURIComponent(title)}&description=${encodeURIComponent(description)}`;

    return {
        title,
        description,
        alternates: {
            canonical: path,
        },
        openGraph: {
            title,
            description,
            url: path,
            siteName,
            type: "website",
            images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [ogImage],
        },
    };
}
