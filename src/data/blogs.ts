export type ContentBlock =
    | { type: "p"; text: string }
    | { type: "h2"; text: string }
    | { type: "h3"; text: string }
    | { type: "ul"; items: string[] };

export type BlogPost = {
    id: number;
    slug: string;
    image: string;
    tag: string;
    title: string;
    excerpt: string;
    date: string;
    author: string;
    comments?: string;
    hero: {
        titleTop: string;
        titleBottomPrefix?: string;
        titleItalic: string;
    };
    content: ContentBlock[];
    /** Rich HTML body authored in the admin Quill editor. When set, it is
     *  rendered instead of the legacy `content` blocks. */
    contentHtml?: string;
};

export const blogs: BlogPost[] = [
    {
        id: 1,
        slug: "best-employee-monitoring-software-for-startups",
        image: "/post-1.png",
        tag: "Software",
        title: "Best Employee Monitoring Software for Startups",
        excerpt:
            "A founder-focused guide to evaluating monitoring software for early-stage teams without sacrificing trust.",
        date: "February 24, 2026",
        author: "Tanveer",
        comments: "No comments yet",
        hero: {
            titleTop: "Best Employee Monitoring",
            titleBottomPrefix: "Software for ",
            titleItalic: "Startups",
        },
        content: [
            { type: "p", text: "Startups operate in a high-pressure environment. Limited runway, small teams, and aggressive goals mean every hour of work matters. At the same time, most early-stage companies rely heavily on remote or hybrid teams." },
            { type: "p", text: "This guide is written for founders, operations managers, and startup team leads who want clarity, not surveillance. You will learn how to evaluate the best employee monitoring software for startups based on real operational needs: visibility, accountability, scalability, and smarter decision-making." },
            { type: "p", text: "I have worked with early-stage SaaS and service startups implementing productivity systems. The most successful teams did not choose tools based on fear. They chose tools based on data, transparency, and culture alignment. That is the lens we use here." },
            { type: "h2", text: "Why Startups Consider Employee Monitoring Software" },
            { type: "p", text: "Employee monitoring is not about micromanagement. For startups, it usually solves three core problems." },
            { type: "h3", text: "1. Visibility in Remote Teams" },
            { type: "p", text: "When your team works across time zones, you lose in-person visibility. Monitoring tools help answer:" },
            { type: "ul", items: ["Who is actively working?", "Are projects progressing?", "Where is time being spent?"] },
            { type: "p", text: "According to Owl Labs' 2023 State of Remote Work report, more than 60 percent of employees work remotely at least part of the time. That makes digital visibility systems increasingly important." },
            { type: "h3", text: "2. Reducing Payroll Leakage" },
            { type: "p", text: "Early-stage companies often operate on tight budgets. Small inefficiencies compound over months." },
            { type: "p", text: "Time-tracking data helps identify:" },
            { type: "ul", items: ["Idle time patterns", "Repetitive workflow bottlenecks", "Misaligned workloads"] },
            { type: "p", text: "The goal is not punishment. It is optimization." },
            { type: "h3", text: "3. Better Performance Conversations" },
            { type: "p", text: "Without objective data, feedback becomes subjective. Monitoring tools provide activity reports, workload trends, and utilization metrics that make performance discussions more structured and fair." },
        ],
    },
    {
        id: 2,
        slug: "how-trackforce-helped-arriviva-prevent-a-major-data-breach",
        image: "/post-1.png",
        tag: "Software",
        title: "How TrackForce Helped Arriviva Prevent a Major Data Breach",
        excerpt:
            "Inside the incident response playbook that caught a brewing breach before sensitive data ever left the perimeter.",
        date: "January 12, 2025",
        author: "Jono Cooper",
        hero: {
            titleTop: "How TrackForce Helped Arriviva",
            titleBottomPrefix: "Prevent a Major Data ",
            titleItalic: "Breach",
        },
        content: [
            { type: "p", text: "Arriviva's security team had every reason to worry. A wave of anomalous file transfers from a single contractor account had triggered low-grade alerts for weeks, and the existing tooling could not stitch the events into a coherent story." },
            { type: "p", text: "What looked like routine activity in isolation was, in aggregate, a slow-motion exfiltration attempt. TrackForce was the layer that surfaced the pattern in time to act." },
            { type: "h2", text: "The Early Signals" },
            { type: "p", text: "The first signs were subtle. The contractor was logging in from new networks, opening large archives outside their normal hours, and copying files to personal cloud apps." },
            { type: "ul", items: ["Off-hours activity spikes", "Sensitive folder access patterns", "Unusual upload destinations"] },
            { type: "h2", text: "Containment Without Disruption" },
            { type: "p", text: "Once the pattern was clear, security paused the contractor's access without disturbing the rest of the team. TrackForce's evidence timeline made the conversation with HR and legal short and decisive." },
            { type: "h3", text: "Lessons for Other Teams" },
            { type: "p", text: "Visibility is only valuable when it leads to a fast decision. Correlated signals beat noisy alerts every time." },
        ],
    },
    {
        id: 3,
        slug: "inside-the-trackforce-playbook-securing-remote-teams",
        image: "/post-4.png",
        tag: "TrackForce",
        title: "Inside the TrackForce Playbook: Securing Remote Teams",
        excerpt:
            "How modern security teams pair role-based access with behavioral context to protect distributed workforces.",
        date: "February 3, 2025",
        author: "Mia Hernandez",
        hero: {
            titleTop: "Inside the TrackForce Playbook",
            titleBottomPrefix: "Securing Remote ",
            titleItalic: "Teams",
        },
        content: [
            { type: "p", text: "Securing a remote team is less about locking things down and more about giving the right people the right context at the right time. The TrackForce playbook treats access as a living signal, not a one-time provisioning event." },
            { type: "h2", text: "Start with Role-Based Access" },
            { type: "p", text: "Every role gets a baseline of what is normal: which tools, which hours, which data classes. Anything outside that baseline becomes a question, not an immediate alarm." },
            { type: "ul", items: ["Owner, admin, employee tiers", "Project-scoped permissions", "Time-bound elevated access"] },
            { type: "h2", text: "Layer in Behavioral Signals" },
            { type: "p", text: "Static rules cannot keep up with the ways modern teams collaborate. Behavioral context catches the cases policy misses." },
            { type: "h3", text: "Closing the Loop" },
            { type: "p", text: "When something looks off, the response is structured: triage, confirm, document, decide. Predictable workflows protect both the team and the business." },
        ],
    },
    {
        id: 4,
        slug: "top-workforce-analytics-trends-leaders-should-watch",
        image: "/post-2.png",
        tag: "Category",
        title: "Top 7 Workforce Analytics Trends Leaders Should Watch",
        excerpt:
            "The data signals shaping how leaders make staffing, scheduling, and productivity decisions this year.",
        date: "February 18, 2025",
        author: "David Chen",
        hero: {
            titleTop: "Top 7 Workforce Analytics",
            titleBottomPrefix: "Trends Leaders Should ",
            titleItalic: "Watch",
        },
        content: [
            { type: "p", text: "Workforce analytics has moved from a back-office reporting function to a daily decision-making layer. The leaders who treat it that way are pulling ahead of the ones who still rely on lagging indicators." },
            { type: "h2", text: "Seven Signals Worth Tracking" },
            { type: "ul", items: ["Real-time utilization", "Cross-team collaboration density", "Burnout proxies", "Skill coverage maps", "Cycle time per workflow", "Onboarding ramp speed", "Productivity-to-cost ratios"] },
            { type: "h3", text: "Turning Signal Into Action" },
            { type: "p", text: "Dashboards do not change behavior. Rituals do. Pair each trend with a weekly review and an owner who can act on it." },
        ],
    },
    {
        id: 5,
        slug: "a-day-in-the-life-of-a-modern-workforce-manager",
        image: "/post-5.png",
        tag: "Uncategorized",
        title: "A Day in the Life of a Modern Workforce Manager",
        excerpt:
            "A walkthrough of the rhythms, tools, and decisions shaping the modern workforce manager's day.",
        date: "March 1, 2025",
        author: "Sarah Williams",
        hero: {
            titleTop: "A Day in the Life",
            titleBottomPrefix: "of a Modern Workforce ",
            titleItalic: "Manager",
        },
        content: [
            { type: "p", text: "The modern workforce manager spends less time chasing status updates and more time interpreting signal. The shift is subtle but it changes everything about the rhythm of the day." },
            { type: "h2", text: "Morning: Read the Room" },
            { type: "p", text: "Before standups, a quick scan of overnight activity tells the manager which teams are on track and which need a nudge. The goal is informed conversations, not surveillance." },
            { type: "h3", text: "Midday: Remove Blockers" },
            { type: "p", text: "Most of the day is spent unblocking. Patterns from the dashboard point to the blockers worth addressing first." },
            { type: "h3", text: "Evening: Set Up Tomorrow" },
            { type: "p", text: "The day ends with a short review and a written plan for tomorrow. Compounded over a quarter, this habit alone changes results." },
        ],
    },
    {
        id: 6,
        slug: "automating-payroll-workflows-with-trackforce-integrations",
        image: "/post-3.png",
        tag: "Software",
        title: "Automating Payroll Workflows with TrackForce Integrations",
        excerpt:
            "Practical patterns for connecting time data to payroll without spreadsheets, manual edits, or month-end fire drills.",
        date: "March 14, 2025",
        author: "Liam Patel",
        hero: {
            titleTop: "Automating Payroll Workflows",
            titleBottomPrefix: "with TrackForce ",
            titleItalic: "Integrations",
        },
        content: [
            { type: "p", text: "Payroll is one of those processes where small mistakes compound quickly. The cleanest setups have the shortest distance between a tracked hour and a paid hour." },
            { type: "h2", text: "Where Time Data Lives" },
            { type: "p", text: "Treat time data as the source of truth. Everything downstream — approvals, exports, payroll runs — should reference it without manual rekeying." },
            { type: "ul", items: ["Real-time time tracking", "Approval workflows by manager", "Direct exports to payroll providers", "Audit trail for every adjustment"] },
            { type: "h3", text: "Reducing Month-End Pain" },
            { type: "p", text: "Most payroll fire drills are caused by reconciliation, not entry. Automated checks throughout the month eliminate the surprises." },
        ],
    },
    {
        id: 7,
        slug: "building-a-culture-of-accountability-across-distributed-teams",
        image: "/post-1.png",
        tag: "Category",
        title: "Building a Culture of Accountability Across Distributed Teams",
        excerpt:
            "Accountability without micromanagement: how distributed teams build trust through clarity, not control.",
        date: "March 22, 2025",
        author: "Emma Thompson",
        hero: {
            titleTop: "Building a Culture of",
            titleBottomPrefix: "Accountability Across Distributed ",
            titleItalic: "Teams",
        },
        content: [
            { type: "p", text: "Accountability is what fills the gap when nobody is in the same room. Build it through clarity, not control, and the team will outperform any centralized setup." },
            { type: "h2", text: "Make Outcomes Visible" },
            { type: "p", text: "Every team needs to see how their work rolls up to the company's goals. Shared dashboards beat status meetings every time." },
            { type: "h3", text: "Default to Written Decisions" },
            { type: "p", text: "Written decisions are searchable. They survive turnover, they reduce repeated debates, and they create a record of how the team thinks." },
        ],
    },
    {
        id: 8,
        slug: "case-study-cutting-overtime-costs-by-34-percent-with-trackforce",
        image: "/post-2.png",
        tag: "TrackForce",
        title: "Case Study: Cutting Overtime Costs by 34% with TrackForce",
        excerpt:
            "A field operations team replaced reactive overtime spending with proactive scheduling — and reset their margins.",
        date: "April 4, 2025",
        author: "Jono Cooper",
        hero: {
            titleTop: "Cutting Overtime Costs",
            titleBottomPrefix: "by 34% with ",
            titleItalic: "TrackForce",
        },
        content: [
            { type: "p", text: "Overtime is often a downstream symptom of upstream scheduling problems. Treat it as a data problem and the savings show up quickly." },
            { type: "h2", text: "Where the Savings Came From" },
            { type: "ul", items: ["Proactive shift coverage", "Real-time burn-rate visibility", "Manager-level approvals before overtime triggered"] },
            { type: "h3", text: "What Changed for the Team" },
            { type: "p", text: "The team did not work less. They worked at the right times. Fatigue went down, schedule satisfaction went up, and the margin gain held quarter over quarter." },
        ],
    },
    {
        id: 9,
        slug: "why-time-tracking-still-matters-in-2025",
        image: "/post-4.png",
        tag: "Uncategorized",
        title: "Why Time Tracking Still Matters in 2025",
        excerpt:
            "The case for time data as a planning tool, not a stopwatch — even for the most autonomous teams.",
        date: "April 10, 2025",
        author: "Olivia Martin",
        hero: {
            titleTop: "Why Time Tracking Still",
            titleBottomPrefix: "Matters in ",
            titleItalic: "2025",
        },
        content: [
            { type: "p", text: "Time tracking earned a bad reputation when it was used to police, not to plan. The teams that have reclaimed it use it as a forecasting tool." },
            { type: "h2", text: "Planning, Not Policing" },
            { type: "p", text: "Knowing how long things actually take is the difference between confident commitments and constant slippage." },
            { type: "h3", text: "What Good Looks Like" },
            { type: "ul", items: ["Light-touch tracking", "Anonymized team-level trends", "Used in retros, not 1:1s"] },
        ],
    },
    {
        id: 10,
        slug: "shift-scheduling-made-simple-a-managers-guide",
        image: "/post-3.png",
        tag: "Software",
        title: "Shift Scheduling Made Simple: A Manager's Guide",
        excerpt:
            "A repeatable scheduling rhythm that protects coverage, controls labor cost, and keeps the team happy.",
        date: "April 21, 2025",
        author: "Noah Kim",
        hero: {
            titleTop: "Shift Scheduling Made",
            titleBottomPrefix: "Simple: A Manager's ",
            titleItalic: "Guide",
        },
        content: [
            { type: "p", text: "Scheduling is one of those tasks that rewards a clear rhythm. The teams that nail it follow the same loop every week." },
            { type: "h2", text: "The Weekly Loop" },
            { type: "ul", items: ["Forecast demand by hour", "Match coverage to demand", "Publish early, lock in fast", "Adjust mid-week with data, not guesses"] },
            { type: "h3", text: "Tools That Help" },
            { type: "p", text: "Look for tools that automate the boring parts: availability, swaps, and notifications. The judgment calls stay with you." },
        ],
    },
    {
        id: 11,
        slug: "from-chaos-to-clarity-onboarding-teams-on-trackforce",
        image: "/post-5.png",
        tag: "TrackForce",
        title: "From Chaos to Clarity: Onboarding Teams on TrackForce",
        excerpt:
            "A 30-day onboarding plan that turns a brand-new TrackForce account into a daily-use habit.",
        date: "May 6, 2025",
        author: "Ava Robinson",
        hero: {
            titleTop: "From Chaos to Clarity:",
            titleBottomPrefix: "Onboarding Teams on ",
            titleItalic: "TrackForce",
        },
        content: [
            { type: "p", text: "Software only delivers value when teams actually use it. A 30-day onboarding plan turns a new account into a daily habit." },
            { type: "h2", text: "Week 1: Foundations" },
            { type: "p", text: "Get the team set up, walk through the dashboard, and define what 'good' looks like for the first month." },
            { type: "h3", text: "Weeks 2–4: Build the Habit" },
            { type: "ul", items: ["Daily rituals", "Weekly reviews", "Monthly retro on what to keep doing"] },
        ],
    },
    {
        id: 12,
        slug: "the-hidden-cost-of-manual-attendance-tracking",
        image: "/post-1.png",
        tag: "Category",
        title: "The Hidden Cost of Manual Attendance Tracking",
        excerpt:
            "A line-by-line look at the real cost of spreadsheets, paper sign-ins, and end-of-month corrections.",
        date: "May 19, 2025",
        author: "Ethan Brooks",
        hero: {
            titleTop: "The Hidden Cost of Manual",
            titleBottomPrefix: "Attendance ",
            titleItalic: "Tracking",
        },
        content: [
            { type: "p", text: "Manual attendance feels free until you add up the time spent collecting, correcting, and reconciling it. The numbers are usually bigger than expected." },
            { type: "h2", text: "Where the Cost Hides" },
            { type: "ul", items: ["Manager time chasing entries", "Payroll corrections", "Dispute resolution", "Compliance risk"] },
            { type: "h3", text: "The Payback Window" },
            { type: "p", text: "Most teams see the switch pay for itself inside one pay cycle. The compounding gain comes later, when the data starts informing planning." },
        ],
    },
    {
        id: 13,
        slug: "remote-vs-hybrid-what-the-data-actually-says",
        image: "/post-2.png",
        tag: "Uncategorized",
        title: "Remote vs Hybrid: What the Data Actually Says",
        excerpt:
            "Beyond the headlines: a sober look at productivity and retention data across remote, hybrid, and in-office teams.",
        date: "June 2, 2025",
        author: "Isla Carter",
        hero: {
            titleTop: "Remote vs Hybrid:",
            titleBottomPrefix: "What the Data Actually ",
            titleItalic: "Says",
        },
        content: [
            { type: "p", text: "The remote vs hybrid debate is too often shaped by anecdotes. The data tells a more nuanced story — and the right answer depends on the work, not the wishful policy." },
            { type: "h2", text: "What the Numbers Show" },
            { type: "ul", items: ["Productivity holds steady across modes when expectations are clear", "Retention favors flexibility", "Collaboration density matters more than location"] },
            { type: "h3", text: "Designing Your Mode" },
            { type: "p", text: "Pick the mode that matches your work. Then measure, adjust, and communicate the trade-offs honestly." },
        ],
    },
];

export const getBlogBySlug = (slug: string): BlogPost | undefined =>
    blogs.find((b) => b.slug === slug);

export const getSimilarBlogs = (
    currentSlug: string,
    limit: number = 3
): BlogPost[] =>
    blogs.filter((b) => b.slug !== currentSlug).slice(0, limit);

// ─── CMS-aware async helpers ───────────────────────────────────────────────
// These try the admin panel first and fall back to local hardcoded data.

import type { CmsBlogPost } from "@/lib/cms";

function cmsPostToLocal(post: CmsBlogPost, index: number): BlogPost {
    // The admin panel now authors the blog body as HTML (Quill). Legacy posts
    // may still store a JSON array of ContentBlocks — support both.
    let content: ContentBlock[] = [];
    let contentHtml: string | undefined;
    const raw = (post.content ?? "").trim();

    if (raw.startsWith("[")) {
        // Legacy JSON block format
        try {
            const parsed = JSON.parse(raw);
            if (Array.isArray(parsed)) {
                content = parsed as ContentBlock[];
            } else {
                contentHtml = raw;
            }
        } catch {
            contentHtml = raw;
        }
    } else if (raw) {
        // HTML (or plain text) body
        contentHtml = raw;
    } else {
        content = [{ type: "p", text: post.excerpt }];
    }

    const words = post.title.split(" ");
    const midpoint = Math.ceil(words.length / 2);

    return {
        id: index + 1000,
        slug: post.slug,
        image: post.image || "/post-1.png",
        tag: post.tag,
        title: post.title,
        excerpt: post.excerpt,
        date: post.date,
        author: post.author,
        hero: {
            titleTop: words.slice(0, midpoint).join(" "),
            titleItalic: words.slice(midpoint).join(" "),
        },
        content,
        contentHtml,
    };
}

export async function getAllBlogPosts(): Promise<BlogPost[]> {
    try {
        const { getBlogPosts } = await import("@/lib/cms");
        const cmsPosts = await getBlogPosts();
        if (cmsPosts && cmsPosts.length > 0) {
            return cmsPosts.map(cmsPostToLocal);
        }
    } catch {
        // fall through to local
    }
    return blogs;
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPost | undefined> {
    try {
        const { getBlogPost } = await import("@/lib/cms");
        const cmsPost = await getBlogPost(slug);
        if (cmsPost) return cmsPostToLocal(cmsPost, 0);
    } catch {
        // fall through to local
    }
    return getBlogBySlug(slug);
}

export async function getSimilarBlogsAsync(
    currentSlug: string,
    limit: number = 3
): Promise<BlogPost[]> {
    const all = await getAllBlogPosts();
    return all.filter((b) => b.slug !== currentSlug).slice(0, limit);
}
