# Case Study Page - Query Log

## Query-1
Left and right div will be half of parent div. All content, image will be full width of left and right div.

## Query-2
Gap will be 24px and image will be full width of every div.

## Query-3
Implement "Key Features Implemented" component with case-study.png image and use it in CaseStudy.tsx.

## Query-4
Implement parallax component with 3 cards (plx1, 2, 3) same as Parallax.tsx from home. Content: Real-Time Productivity Dashboard, Smart Monitoring & Evidence System, Advanced Reporting & Risk Detection.

## Query-5
Implement "Our Deployment Strategy" component and use it in CaseStudy.tsx.

## Query-6
Implement "Measurable Business Results" component with timeline dots (red, blue, green, yellow, purple) and curved connector.

## Query-7
Remove map from results component, make it normal (hardcoded items).

## Query-8
Items 1 & 5 will have -ml-100, items 2 & 4 will have -ml-50, item 3 will be 0.

## Query-9
Connector line should also follow same curve as the dots.

## Query-10
Connector should be piece of circle arc, not bezier curves.

## Query-11
One single curve line connecting all 5 points (single circle arc from point 1 to 5).

## Query-12
All points must sit exactly on the arc line (dynamically calculated positions).

## Query-13
Same curve line should also appear on the content div side.

## Query-14
Increase arc radius → then reduce arc radius (CURVE_DEPTH set to 60).

## Query-15
Content divs should be rounded-full (pill shaped).

## Query-16
Increase gap between curve line and content div (gap-12).

## Query-17
Implement "Why TrackForce Stands Out" component using time.png and ensure.png images, with checklist items on dark background.

## Query-18
Create CLAUDE.md with all previous queries. Always log every query with number, even across sessions.

## Query-19
Implement Documentation page with 2 components: DocSidebar (navigation with 9 items + download button) and DocContent (Installation section with app types, steps 1.1-1.4). Use in Documentation.tsx.

## Query-20
Use docbg1.png and docbg2.png as combined background in Documentation page (top half + bottom half).

## Query-21
Use installation.png image in DocContent installation section instead of hardcoded app type cards.

## Query-22
Use linear-gradient(90deg, #1B73E8 0%, #9F60EE 100%) as active color in DocSidebar.

## Query-23
Use gradient as text color (not background) for active sidebar item.

## Query-24
Use 20px font size for all text in DocContent except titles.

## Query-25
Add slide-in animation: sidebar from left, content from right (framer-motion).

## Query-26
HomeFreeTailer bg not showing in Documentation — fixed by adding relative z-10 to lift it above absolute bg images.

## Query-27
Add smooth border animation when active in FeaturesListMore.tsx using framer-motion layoutId on the left accent bar.

## Query-28
Create FeaturedBlog component (image left, Software badge, title with italic "Hybrid Work", date, description, Book a Demo button) and use it in Blog.tsx before BlogCards.

## Query-29
Use free-trailer.mp4 video from public as bg in HomeFreeTailer.tsx (autoPlay, loop, muted, object-cover with dark overlay, content lifted to z-10).

## Query-30
Add Rubik font to src/app/layout.tsx (imported from next/font/google, exposed as --font-rubik CSS variable on body).

## Query-31
Make the website SEO friendly: shared SEO helper (src/lib/seo.ts with NEXT_PUBLIC_SITE_URL), rich root metadata (title template, OG/Twitter with thumbnail.png, robots, canonical, JSON-LD Organization/SoftwareApplication), unique metadata for all 9 static pages, generateMetadata + Article JSON-LD for blog details, sitemap.ts + robots.ts, permanentRedirect for / → /home, fixed empty image alts in Testimonials, demoted all non-hero h1 tags to h2 (one h1 per page, styles unchanged).

## Query-32
Improve Lighthouse scores (was mobile 45/84/73, desktop 78/81/77 for Perf/A11y/BP). Fixes: <main> landmark in layout, aria-labels on Testimonials play buttons, h4→h3 in WhyChooseUs, footer <ul> children wrapped in <li>, bg-emerald-500→700 on pricing badge, priority + object-cover on Hero video_bg LCP image, preload="none" on hero video, lazy-mount free-trailer.mp4 via useInView with dark fallback bg (#10243E), nested button-in-anchor flattened to styled <a> in HomeFreeTailer. Image format conversion skipped per user (images will be replaced soon). Verified locally: A11y 100, BP 100 both form factors; page weight 15.3MB→6.5MB.

## Query-33
Use the FeatureProd2 system (FeaturesListMore interactive accordion list) in ProductivityDashboard.tsx and WorkForceMonitoring.tsx, replacing their static blue-bar feature blocks. FeaturesListMore gained optional activeTitleColor/inactiveTitleColor/descColor props (defaults unchanged, FeatureProd2 untouched) and a per-instance layoutId (React.useId) so multiple lists on one page animate independently. Both home components pass white-on-dark colors (active text-white, inactive text-white/60, desc text-gray-200), height 280px, 3 features each.

## Query-34
Optimize/smooth OurFeatures animations. CSS (ourFeatures.css + duplicate block in globals.css): blob ::before now uses cubic-bezier(0.22,1,0.36,1) with asymmetric timing (enter 0.9s/1.05s, exit 0.6s/0.7s), will-change transform, removed invalid `scale` transition; custom-card-2 hover shadows merged into one comma-separated box-shadow (was 3 self-overriding declarations) with box-shadow+border-color transition, dropped hover backdrop-filter bump (repaint jank); same hover glow added to custom-card. TSX: image cross-fades upgraded from flat opacity 500ms to fade+drift (outgoing translate-y-3 down, incoming rises from translate-y-4) at 700ms with the same bezier; removed redundant group-hover:border on card 1.

## Query-35
More smoothness on OurFeatures: image cross-fade 700ms→850ms, cards get subtle hover lift (translate 0 -4px, 0.8s) + glow, blob bg transitions kept (user first asked to remove, then said "keep the bg transitions"). custom-card CSS now lives only in ourFeatures.css — the duplicate block in globals.css was removed.
