/**
 * CMS client — fetches live content from the admin panel API.
 * Every function falls back to empty/null so the portfolio works even
 * when the admin panel is offline.
 */

const ADMIN = process.env.ADMIN_API_URL ?? "http://localhost:3001";

// revalidate every 60 seconds (ISR)
const FETCH_OPTS: RequestInit = { next: { revalidate: 60 } };

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

async function safeFetch<T>(url: string, fallback: T): Promise<T> {
  try {
    const res = await fetch(url, FETCH_OPTS);
    if (!res.ok) return fallback;
    return (await res.json()) as T;
  } catch {
    return fallback;
  }
}

export async function getFaqs(page?: string): Promise<CmsFaq[]> {
  const url = page
    ? `${ADMIN}/api/public/faqs?page=${page}`
    : `${ADMIN}/api/public/faqs`;
  return safeFetch<CmsFaq[]>(url, []);
}

export async function getTestimonials(): Promise<CmsTestimonial[]> {
  return safeFetch<CmsTestimonial[]>(`${ADMIN}/api/public/testimonials`, []);
}

export async function getPageContent(page: string): Promise<CmsPageContent> {
  return safeFetch<CmsPageContent>(
    `${ADMIN}/api/public/content?page=${page}`,
    {}
  );
}

export async function getBlogPosts(): Promise<CmsBlogPost[]> {
  return safeFetch<CmsBlogPost[]>(`${ADMIN}/api/public/blog`, []);
}

export async function getBlogPost(slug: string): Promise<CmsBlogPost | null> {
  return safeFetch<CmsBlogPost | null>(
    `${ADMIN}/api/public/blog?slug=${slug}`,
    null
  );
}

export async function getSiteSettings(): Promise<CmsSettings | null> {
  return safeFetch<CmsSettings | null>(`${ADMIN}/api/public/settings`, null);
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
