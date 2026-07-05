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

## Query-36
Create trackforce-portfolio-admin project (Next.js 16, Prisma 7 + SQLite, NextAuth v5) with full CRUD for blog, testimonials, FAQs, page content, media, settings. Public API at /api/public/* with CORS. Portfolio site gets ADMIN_API_URL env, src/lib/cms.ts fetchers with 60s ISR revalidation.

## Query-37
Connect portfolio site to admin panel's PageContent API across ALL pages. Home.tsx and About.tsx made async to fetch getPageContent(). Contact/Feature/CaseStudy/Portfolio/Pricing page.tsx made async to fetch + pass cms/faqs props. Client components (Hero, WhyTrackforce, ProductivityDashboard, WorkForceMonitoring, HowTrackforceWorks, AboutHero, AboutWhatWeDo, AboutVision, AboutValues, AboutJoinTeam, Contact, ContactCards, FeatureHero, CaseStudyHero, PortfolioHero) all accept optional cms prop and use CMS values with hardcoded fallbacks. Pricing page wires CMS FAQs for pricing page.

## Query-40
Redesign ContentManager to schema-driven section cards. Each page editor defines SectionSchema[] (same fields as old PageContentEditor). ContentManager shows one card per section: title, Active/Not set badge, Edit/Add Content button, Versions dropdown button, and a field preview grid showing all current active values inline. Clicking Edit opens a section-specific modal with all predefined fields (ImagePickerField for image, textarea, color picker, text/url inputs). Saving generates a shared groupId (ISO timestamp) and POSTs all fields together — API now deactivates all rows for the section, then creates new active rows all sharing the same groupId as label. Version history panel (per section): loads from GET /api/content/versions?page&section, returns groups by label, shows timestamp + field preview + Restore button. New POST /api/content/restore restores all rows with matching page+section+label. All 8 page editors have their schema definitions restored inline.

## Query-39
Replace PageContentEditor with card-based ContentManager. New component (components/ContentManager.tsx): shows all PageContent rows as cards grouped by section, section-filter tabs, show/hide inactive toggle, "New Content" button. Each card shows key, type badge (TEXT/TEXTAREA/URL/IMAGE/COLOR), active/inactive badge, value preview (thumbnail for images, color swatch for colors, text otherwise), date, and 3 action buttons (activate/deactivate toggle, edit pencil, delete trash). Create modal + edit modal share same ContentFormModal — create POSTs (creates new active version, deactivates old), edit PATCHes in place. Image upload: added error feedback to ImagePickerField, moved mkdir to top-level import in media/route.ts with try/catch returning 500. API: GET /api/content returns raw PageContent[] (all versions, not grouped dict). New app/api/content/[id]/route.ts with PATCH (in-place edit) + DELETE. All 8 page editors (home/about/contact/features/case-study/portfolio/pricing/documentation) simplified to single prisma query + ContentManager.

## Query-38
Implement content versioning. Schema: removed @@unique, added active Boolean + label String? to PageContent, migration 20260625064701_add_content_versioning ran. API: POST /api/content now deactivates previous versions and inserts new active row (no upsert). GET /api/content and GET /api/public/content filter by active=true. New endpoints: GET /api/content/versions?page&section&key (history list), PATCH /api/content/[id]/activate (restore a version). UI: PageContentEditor.tsx shows "History" toggle per field → inline panel with timestamp, value preview, Active badge, Restore button for inactive versions.

## Query-41
Fix portfolio hero bg images: replaced hardcoded Tailwind background-url class with inline style using cms.bg_image with local fallback in Hero.tsx (home), AboutHero.tsx, Contact.tsx, FeatureHero.tsx, CaseStudyHero.tsx, PortfolioHero.tsx. Hero.tsx video poster also wired to cms.video_thumbnail. Fixed versions/route.ts to only return section-level saves (label IS NOT NULL) — old per-key rows without labels no longer appear as individual versions.

## Query-42
Add .env management to Settings page. New GET/PUT /api/settings/env route reads/writes .env file for whitelisted vars only (NEXTAUTH_SECRET, NEXTAUTH_URL, ADMIN_BASE_URL, PORTFOLIO_ENV_PATH — DATABASE_URL excluded). New EnvForm.tsx client component: loads vars on mount, password field with show/hide toggle for secret, URL validation, restart-required warning banner, success/error feedback. Existing SettingsForm.tsx and /api/settings route.ts both got full client + server validation (required fields, URL format, length limits, proper error display). Settings page.tsx now shows both forms under named sections.

## Query-43
Fix image fallback crash: replaced single-URL inline style pattern (url(cms || local)) with CSS multi-layer pattern — local image kept in className as base, inline style only set when cms.bg_image is truthy using backgroundImage: url(cms), url(local). When the CMS URL fails to load, the second CSS layer (local image) shows through. Applied to all 6 hero components: Hero.tsx, AboutHero.tsx, Contact.tsx, FeatureHero.tsx, CaseStudyHero.tsx, PortfolioHero.tsx.

## Query-44
Portfolio .env.local editable from admin settings. New GET/PUT /api/settings/portfolio-env route: reads/writes ../trackforce-port/.env.local (path overridable via PORTFOLIO_ENV_PATH in admin's .env). Exposes NEXT_PUBLIC_SITE_URL, ADMIN_API_URL, NEXT_PUBLIC_GA_MEASUREMENT_ID, NEXT_PUBLIC_GSC_VERIFICATION. New PortfolioEnvForm.tsx: shows resolved file path, "file not found" warning if missing (creates on save), URL validation for site/API URLs, GA ID format check. Settings page now has 3 sections: Site Settings, Admin Env, Portfolio Site Env.

## Query-45
Wire CMS into WorkProcess, Parallax, and HomeFreeTailer. All three now accept optional cms prop and pass it down. WorkProcess: badge, heading, description, 2 CTAs + URLs, 3 steps (title, desc, image each), bg_image. HomeFreeTailer: heading, description, cta_text, cta_url, cta_secondary, cta_secondary_url, dashboard_image. Parallax: 4 cards each with title, desc, logo (image), card image — all with static import fallbacks. Home.tsx updated to pass cms.work_process, cms.parallax, cms.free_trailer to each. Admin home page schema extended with parallax (16 fields), work_process (17 fields), updated free_trailer (7 fields).

## Query-46
Add image configurability to all About section components. AboutWhatWeDo: bg_image (multi-layer fallback to ourMission.png). AboutVision: bg_image (whyTStandBg.png), image1 (desktop app), image2 (overlay card). AboutValues: bg_image (ourValues.png), image1 (coreValue), image2 (values2.png). AboutJoinTeam: bg_image (joinOurTeam.png). AboutMission: mission_image1 (2025.png), mission_image2 (vision.png) — configured via what_we_do section keys. Admin about page schema updated with all new image fields.

## Query-47
Make AboutMission two content images configurable. Added mission_image1 and mission_image2 fields to AboutMission component. Wired through AboutWhatWeDo via cms passthrough. Admin what_we_do section schema extended with mission_image1 and mission_image2 fields.

## Query-48
Apply image configurability to all Features module components. Optimization: cms.bg_image (multi-layer fallback to featurebg.png). Feature section div: cms.feature_section.bg_image (fallback to feature.png). ProductivityDashboard, WorkForceMonitoring, FeatureWork2, FeatureProd1, FeatureWork1: each gets cms prop with image1/image2/image3 (and image4 for 4-image layouts), all with static import fallbacks. Feature.tsx wires cms sections (optimization, feature_section, productivity, monitoring, employee_management, time_tracking, billing, free_trailer) to respective sub-components. Admin features page schema expanded: hero gets bg_image, optimization gets bg_image, new sections for feature_section, employee_management, time_tracking, billing, free_trailer; productivity and monitoring get image fields.

## Query-49
Sync Case Study module. All 7 sub-components (CaseStudyHero, CaseStudyChallengeAndSolution, CaseStudyKeyFeatures, CaseStudyParallax, CaseStudyDeployment, CaseStudyResults, CaseStudyWhyStandsOut) now accept optional cms prop with hardcoded fallbacks. Background image URLs moved from className to inline style throughout. onError fallback added to all Image components. CaseStudy.tsx wires sections: hero, challenge, key_features, parallax, deployment, results, why_stands_out, free_trailer. Admin case-study page schema rewritten with all 8 sections and full field coverage.

## Query-51
Implement on-demand revalidation. Portfolio: POST /api/revalidate route (secret in x-revalidate-secret header, revalidateTag per tag). cms.ts: removed global FETCH_OPTS, each fetcher now uses { next: { tags: [...], revalidate: 3600 } } with named tags (blog, faqs, testimonials, slider, how-sections, content/content-{page}, settings). Admin panel: app/api/revalidate-portfolio/route.ts (server-side, reads PORTFOLIO_URL + REVALIDATE_SECRET env, proxies to portfolio). lib/revalidate.ts: fire-and-forget client helper. All 6 managers (Blog, Faqs, Testimonials, Slider, HowSection, ContentManager) call revalidatePortfolio([...tags]) after every successful save/update/delete/restore. Env: REVALIDATE_SECRET added to portfolio .env + .env.local; PORTFOLIO_URL + REVALIDATE_SECRET added to admin .env.

## Query-54
Make Documentation sections fully dynamic. DocContent: the 8 placeholder sections (dashboard, monitoring, reports, employee_management, organization_management, support, settings, employee_panel) now render CMS content via new GenericSection (heading + optional image + sanitized HTML content through RichText), falling back to "Content coming soon..." when empty. Added 3 extra section slots (extra1-3): setting menu_label in admin adds the section to the sidebar (auto-numbered 10-12) and renders its content. Documentation.tsx passes full page cms to DocContent and computed extraItems to DocSidebar. Admin documentation schema: 8 content sections (heading/content/image each) + 3 extra sections (menu_label/heading/content/image) generated via .map.

## Query-53
Sync all remaining hardcoded components with CMS. Home: OurFeatures (badge/heading/description/bg_image + card1-4 title/desc/image, images use intrinsic dims), WhyChooseUs (badge/heading/description/cta_text/cta_url/bg_image + point1-6 title/desc), Testimonials + HomeFaq section chrome (badge/heading/description; data props unchanged) — Home.tsx passes cms.our_features, why_choose_us, testimonials, faq. Pricing page: route fetches getPageContent('pricing'); Pricing.tsx passes cms.hero → HomePricing, cms.faq → HomeFaq, cms.free_trailer → HomeFreeTailer (commented-out PricingHero/Benefits left untouched per user). Documentation: route fetches getPageContent('documentation'); Documentation.tsx wires hero bg_image1/2, sidebar (item1-9, download_label/download_url — url renders an <a>), installation (heading/description/image, step1-4 title + desc where a set stepN_desc replaces the hardcoded block via RichText), free_trailer. Blog details: HowWeEvaluated wired (heading/description/pill1-6/logo/bg_image) via cms.how_evaluated; MonitoringSoftwareList intentionally left hardcoded per user. Removed dead FeatureProd2 import from Feature.tsx. Admin schemas updated: home (our_features expanded, why_choose_us expanded to 6 points + badge/cta/bg, new testimonials + faq), pricing (hero expanded + faq + free_trailer), documentation (hero + installation image + free_trailer), blog (how_evaluated).

## Query-52
Make HomePricing.tsx dynamic. Plans were already API-driven (PublicPricing API); section header was hardcoded. HomePricing now accepts optional cms prop: badge, heading, description (RichText), yearly_badge ("Save up to 20%" tag), bg_image (multi-layer fallback to /home-price-bg.png). Home.tsx passes cms.pricing. Admin home page schema gets new "pricing" section with those 5 fields.

## Query-50
Sync Portfolio module. All 12 sub-components (PortfolioHero, Solution, ProductivityInsights, RealTime, Enterprise, Decisions, Intellengence, Configure, Structure, Designed, ImpactBussiness, PortfolioParallax) now accept optional cms prop with hardcoded fallbacks. Background image URLs moved from className to inline style throughout. onError fallback added to all Image components. Portfolio.tsx wires all 12 sections plus free_trailer. Admin portfolio page schema rewritten with all 12 sections: hero, solution, productivity_insights, real_time (image1/2), enterprise (image1/2), decisions, intelligence (image1/2/3), configure (badge/heading/description), structure (heading/description), designed (image1/2/3), impact (badge/heading/description + image1-6), free_trailer. PortfolioParallax supports 5 cards with card1-5_title and card1-5_image CMS keys.
