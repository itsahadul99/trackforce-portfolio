import DOMPurify from "isomorphic-dompurify";

interface RichTextProps {
  html?: string | null;
  className?: string;
}

/**
 * Renders admin-authored HTML (from the Quill editor in the admin panel),
 * sanitized with DOMPurify to strip any unsafe markup/scripts.
 * Works in both server and client components (isomorphic-dompurify).
 */
export default function RichText({ html, className }: RichTextProps) {
  if (!html || !html.trim()) return null;

  const clean = DOMPurify.sanitize(html, { USE_PROFILES: { html: true } });

  return (
    <div
      className={`rich-text ${className ?? ""}`}
      dangerouslySetInnerHTML={{ __html: clean }}
    />
  );
}
