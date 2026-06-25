## **Next.js Website — SEO Requirements** 

SaaS/Product Website | Mixed Content (Static + Dynamic) 

## **1. On-Page / Technical SEO** 

**MUST HAVE —** এগু�লো��ছা�ড়া�� **SEO** শু�রু�হলো�না� 

|**#**|ক�ল�রন�ম|ব��রণ**/ Developer**নন�ট|
|---|---|---|
|**1**|**Dynamic Meta Title**|পব�ব�page- <br>এunique meta title — Next.js generateMetadata()<br>ব�ল�<br>implement<br>করল�হল�|
|**2**|**Dynamic Meta Description**|পব�ব�page- <br>এ150-160 character<br>এরunique description —<br>generateMetadata()ব�ল�|
|**3**|**Canonical URL**|Duplicate content<br>এড�ল�পব�ব�page- <br>এ<link rel="canonical"> — self-<br>referencingহল�|
|**4**|**Heading Hierarchy (H1–H6)**|পব�page- <br>এএকব�ম�তH1 —<br>��বকheading<br>গল��proper order- <br>এ(H2 > H3)<br>থ�কল�|
|**5**|**Image Alt Text**|স�ছব�ল�descriptive alt attribute — next/image component<br>mandatory|
|**6**|**SEO-friendly URL Slugs**|Lowercase, hyphen-separated, keyword-rich URL — dynamic<br>route-<br>এওপল!��"|
|**7**|**404 Custom Page**|Meaningful custom 404 page with helpful internal links — crawl<br>budget<br>নষহও��ন$ক��|



## **2. Open Graph & Social Sharing** 

**MUST HAVE — Social share preview** এরু�না" অপ্রবিরুহ�!& 

|**#**|ক�ল�রন�ম|ব��রণ**/ Developer**নন�ট|
|---|---|---|
|**1**|**Open Graph Tags**|og:title, og:description, og:image, og:url, og:type —<br>পব�ব�page- <br>এ<br>unique|
|**2**|**Twitter / X Card Meta**|twitter:card, twitter:title, twitter:description, twitter:image — X- <br>এ<br>preview<br>এর�ন"|
|**3**|**Dynamic OG Image**|next/og<br>ব�ল�per-page dynamic OG image generate<br>করল�হল�<br>(1200×630px)|



## **3. Crawling & Indexing** 

**MUST HAVE — Google** !�লো�সবি$কাভা�লো�স� **page** খুঁ�)লো�প্র�� 

|**#**|ক�ল�রন�ম|ব��রণ**/ Developer**নন�ট|
|---|---|---|
|**1**|**XML Sitemap**|Dynamic sitemap.xml — static<br>ওdynamic page<br>�লট�ইinclude —<br>/sitemap.xml route|
|**2**|**robots.txt**|Crawler allow/disallow rule — Next.js Metadata API<br>ব�ল�generate<br>— /robots.txt route|



|**#**|ক�ল�রন�ম|ব��রণ**/ Developer**নন�ট|
|---|---|---|
|**3**|**301 Redirect Handling**|next.config.js- <br>এredirects config —<br>পলন�URL-<br>এরlink juice<br>ন�লন<br>transferকলর|
|**4**|**noindex Control**|Admin/dashboard/login page- <br>এrobots: noindex — sensitive page<br>index<br>হল�ন�|
|**5**|**hreflang (**ভব�ষ"�**)**|এখনন���গল�ও!ব�পলরmultilingual<br>—<br>�রক�রহ�<br>structure ready<br>র�খল�হল�|



## **4. Structured Data (Schema Markup)** 

**IMPORTANT — Google Rich Results-** এনো�খুঁ�লোনা�রু�না" 

|**#**|ক�ল�রন�ম|ব��রণ**/ Developer**নন�ট|
|---|---|---|
|**1**|**Organization Schema**|Company/brand info — JSON-LD format, _app.tsx<br>��layout.tsx- <br>এ<br>globally inject|
|**2**|**SoftwareApplication Schema**|SaaS product describe<br>—<br>কলর<br>pricing, rating, categoryসহ|
|**3**|**FAQ Schema**|FAQ page- <br>এJSON-LD — Google SERP- <br>এaccordion expand<br>হল�<br>ন�খ��|
|**4**|**Breadcrumb Schema**|Nested page hierarchy-<br>—<br>ন�<br>navigation clarity<br>ওSERP- <br>এ<br>breadcrumbন�খ��|
|**5**|**Review / Rating Schema**|Testimonial<br>��review section<br>—<br>থ�কল�<br>star rating SERP- <br>এন�খ��|



## **5. Linking Strategy** 

**IMPORTANT — Internal** ও **External link** সবি$কাভা�লো� **manage** কারুলো�হলো� 

|**#**|ক�ল�রন�ম|ব��রণ**/ Developer**নন�ট|
|---|---|---|
|**1**|**Internal Linking Structure**|Related page- <br>এcontextual link — anchor text descriptive<br>ও<br>keyword-richহল�|
|**2**|**Outbound Link Attributes**|External link- <br>এrel="noopener noreferrer" —<br>পল���লনrel="nofollow"<br>addকর�|
|**3**|**Broken Link Prevention**|Build time- <br>এ��monitoring<br>ব�ল�broken internal link detect<br>কর�র�"�স�|



## **6. Performance (Core Web Vitals)** 

**IMPORTANT — Google ranking factor, UX** ও **SEO** ��লোট�লো�ইপ্র�ভা��রু�লোখুঁ 

|**#**|ক�ল�রন�ম|ব��রণ**/ Developer**নন�ট|
|---|---|---|
|**1**|**Image Optimization**|next/image — WebP/AVIF auto format, lazy loading, proper width<br>& height required|
|**2**|**SSR / SSG / ISR**<br>সব$ক�"�হ�র|Static page<br>—<br>ন!খ�লনসম�<br>dynamic page- <br>এISR<br>ব�ল�cache<br>করল�হল�|
|**3**|**Font Optimization**|next/font — font-display: swap, preload — CLS (Cumulative<br>Layout Shift)কম��|



|**#**|ক�ল�রন�ম|ব��রণ**/ Developer**নন�ট|
|---|---|---|
|**4**|**LCP Optimization**|Above-the-fold hero image- <br>এpriority={true} — largest contentful<br>paint<br>���কলর|
|**5**|**Script Loading Strategy**|Third-party script (analytics, chat widget)- <br>এnext/script —<br>strategy="afterInteractive"|



## **7. Technical & Security Headers** 

**IMPORTANT — Crawlability** ও **trust signal** উভা�ই 

|**#**|ক�ল�রন�ম|ব��রণ**/ Developer**নন�ট|
|---|---|---|
|**1**|**HTTPS Enforcement**|next.config.js- <br>এStrict-Transport-Security header — HTTP<br>নথলক<br>HTTPS redirect|
|**2**|**Security Headers**|X-Content-Type-Options, X-Frame-Options, Referrer-Policy —<br>trust signal<br>বহলসল�ক��কলর|
|**3**|**X-Robots-Tag Header**|Server-side page- <br>এnoindex control — meta tag-<br>এরalternative<br>method|
|**8. Monitoring & Analytics Setup**<br>**NICE TO HAVE — Launch**<br>এরপলরকরল�ওচ�ল�|||
|**#**|ক�ল�রন�ম|ব��রণ**/ Developer**নন�ট|
|**1**|**Google Search Console**|Site verification meta tag<br>��HTML file — index status<br>ওerror<br>monitorকরল�|
|**2**|**Google Analytics 4 / Tag**<br>**Manager**|next/script<br>ব�ল�GA4 setup — page view, event tracking|
|**3**|**Structured Data Testing**|Deploy<br>এরপলরGoogle Rich Results Test<br>ব�ল�schema validateকর�|
|**4**|**PageSpeed / Lighthouse Audit**|Lighthouse score 90+ target — Core Web Vitals pass<br>করল�হল�|



**Note:** WordPress-এ Rank Math Plugin  নো! কা��গু�লো�� automatically কালোরুনো��, Next.js-এনোসগু�লো�� manually implement কারুলো�হ�।উপ্রলোরুরুস� কা�লো�রু�না" Next.js Metadata API (generateMetadata) �"�হ�রুকারু�ই recommended approach। 

