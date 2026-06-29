/**
 * CMS client — fetches live content from the admin panel API.
 * Every function falls back to empty/null so the portfolio works even
 * when the admin panel is offline.
 */

const ADMIN = process.env.ADMIN_API_URL ?? "http://localhost:3001";

// ─── Types ──────────────────────────────────────────────────────────────────

export type CmsFaq = {
  id: string;
  page: string;
  question: string;
  answer: string;
  order: number;
  active: boolean;
};

export type CmsTestimonial = {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  text: string;
  rating: number;
  type: string;
  videoUrl: string | null;
  order: number;
  active: boolean;
};

export type CmsSliderLogo = {
  id: string;
  image: string;
  url: string;
  alt: string;
  order: number;
  active: boolean;
};

export type CmsBlogPost = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  tag: string;
  author: string;
  date: string;
  published: boolean;
  createdAt: string;
};

export type CmsPageContent = Record<string, Record<string, string>>;

export type CmsSettings = {
  siteName: string;
  siteUrl: string;
  logoUrl: string;
  description: string;
};

// ─── Fetchers ────────────────────────────────────────────────────────────────

async function safeFetch<T>(url: string, fallback: T, tags: string[]): Promise<T> {
  try {
    const res = await fetch(url, { next: { tags, revalidate: 3600 } });
    if (!res.ok) return fallback;
    return (await res.json()) as T;
  } catch {
    return fallback;
  }
}

export async function getSliderLogos(): Promise<CmsSliderLogo[]> {
  return safeFetch<CmsSliderLogo[]>(`${ADMIN}/api/public/slider`, [], ["slider"]);
}

export type CmsHowSection = {
  id: string;
  badge: string;
  heading: string;
  description: string;
  feature1Title: string; feature1Desc: string;
  feature2Title: string; feature2Desc: string;
  feature3Title: string; feature3Desc: string;
  image1: string; image2: string; image3: string;
  ctaText: string; ctaUrl: string;
  order: number; active: boolean;
};

export async function getHowSections(): Promise<CmsHowSection[]> {
  return safeFetch<CmsHowSection[]>(`${ADMIN}/api/public/how-sections`, [], ["how-sections"]);
}

export async function getFaqs(page?: string): Promise<CmsFaq[]> {
  const url = page
    ? `${ADMIN}/api/public/faqs?page=${page}`
    : `${ADMIN}/api/public/faqs`;
  return safeFetch<CmsFaq[]>(url, [], ["faqs"]);
}

export async function getTestimonials(): Promise<CmsTestimonial[]> {
  return safeFetch<CmsTestimonial[]>(`${ADMIN}/api/public/testimonials`, [], ["testimonials"]);
}

export async function getPageContent(page: string): Promise<CmsPageContent> {
  return safeFetch<CmsPageContent>(
    `${ADMIN}/api/public/content?page=${page}`,
    {},
    ["content", `content-${page}`]
  );
}

export async function getBlogPosts(): Promise<CmsBlogPost[]> {
  return safeFetch<CmsBlogPost[]>(`${ADMIN}/api/public/blog`, [], ["blog"]);
}

export async function getBlogPost(slug: string): Promise<CmsBlogPost | null> {
  return safeFetch<CmsBlogPost | null>(
    `${ADMIN}/api/public/blog?slug=${slug}`,
    null,
    ["blog"]
  );
}

export async function getSiteSettings(): Promise<CmsSettings | null> {
  return safeFetch<CmsSettings | null>(`${ADMIN}/api/public/settings`, null, ["settings"]);
}

// ─── Helpers ─────────────────────────────────────────────────────────────────

/** Get a single text value from page content, with a default fallback. */
export function getContent(
  content: CmsPageContent,
  section: string,
  key: string,
  fallback = ""
): string {
  return content[section]?.[key] ?? fallback;
}
