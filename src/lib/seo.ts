import type { Metadata } from "next";

export const siteUrl =
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://trackforce.com";

export const siteName = "TrackForce";

export const defaultOgImage = "/thumbnail.png";

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
    image = defaultOgImage,
}: PageSeo): Metadata {
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
            images: [{ url: image, alt: title }],
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [image],
        },
    };
}
