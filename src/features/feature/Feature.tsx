import HomeFreeTailer from '../home/home_free_trailer/HomeFreeTailer'
import FeatureHero from './FeatureHero'
import FeatureProd1 from './FeatureProd1'
import FeatureProd2 from './FeatureProd2'
import FeatureWork1 from './FeatureWork1'
import FeatureWork2 from './FeatureWork2'
import Optimization from './Optimization'

const left_FeatureTrackForceWorks1 = [
  {
    title: "Live Tracking",
    description:
      "Track real-time online and idle statuses to understand team availability and active work time.",
  },
  {
    title: "Productivity Graphs",
    description:
      "Visualize performance trends with intuitive charts that reveal productivity patterns at a glance.",
  },
  {
    title: "Workflow Overview",
    description:
      "Get a clear snapshot of ongoing tasks, project progress, and team workflow in one unified view.",
  },
  {
    title: "Usage Logs",
    description:
      "Monitor application and website usage with detailed logs to understand how work time is spent.",
  },
  {
    title: "Team Comparison",
    description:
      "Compare performance across teams and individuals to identify top performers and improvement areas.",
  },
  {
    title: "Instant Insights",
    description:
      "Access actionable insights instantly to make faster, smarter decisions driven by real-time data.",
  },
];

const right_FeatureTrackForceWorks1 = [
  {
    title: "Automated Invoicing",
    description:
      "Track real-time online and idle statuses to understand team availability and active work time.",
  },
  {
    title: "Expense Tracking",
    description:
      "Monitor application and system usage to ensure productive and secure work environments.",
  },
  {
    title: "Payment History",
    description:
      "Assign and track devices across your workforce with complete visibility and accountability.",
  },
  {
    title: "Financial Reports",
    description:
      "Get a clear view of every department's structure, members, and performance at a glance.",
  },
];

const left_FeatureTrackForceWorks3 = [
  {
    title: "Live Tracking",
    description:
      "Track real-time online and idle statuses to understand team availability and active work time.",
  },
  {
    title: "Productivity Graphs",
    description:
      "Visualize performance trends with intuitive charts that reveal productivity patterns at a glance.",
  },
  {
    title: "Workflow Overview",
    description:
      "Get a clear snapshot of ongoing tasks, project progress, and team workflow in one unified view.",
  },
  {
    title: "Usage Logs",
    description:
      "Monitor application and website usage with detailed logs to understand how work time is spent.",
  },
  {
    title: "Team Comparison",
    description:
      "Compare performance across teams and individuals to identify top performers and improvement areas.",
  },
  {
    title: "Instant Insights",
    description:
      "Access actionable insights instantly to make faster, smarter decisions driven by real-time data.",
  },
];

const right_FeatureTrackForceWorks3 = [
  {
    title: "App Tracking",
    description:
      "Track real-time online and idle statuses to understand team availability and active work time.",
  },
  {
    title: "Website Insights",
    description:
      "Analyze website usage patterns to understand how time is spent across browsing activities.",
  },
  {
    title: "Email Monitoring",
    description:
      "Keep an eye on email activity to ensure smooth communication and workplace accountability.",
  },
  {
    title: "File Transfers",
    description:
      "Track file movement across devices to maintain data security and transparent workflows.",
  },
  {
    title: "Team Analytics",
    description:
      "Dive into team-level metrics to measure collaboration, output, and overall performance.",
  },
  {
    title: "Workflow Visibility",
    description:
      "Gain full visibility into workflows to identify bottlenecks and streamline daily operations.",
  },
];

const Feature = () => {
  return (
    <div>
      <FeatureHero />
      <Optimization />
      <div className="bg-[#DEEDFF]">
        <section className="max-w-[1300] mx-auto px-4 md:px-6 lg:px-[93px] py-4 md:py-8 lg:py-[96px]  rounded-2xl bg-cover bg-center bg-no-repeat bg-[url('/feature/feature.png')] overflow-hidden">
          <FeatureProd1
            title='Real-Time Dashboard for Complete Visibility'
            subTitle='Access productivity, activity data, and performance analytics in one intuitive employee monitoring software dashboard.'
            features={left_FeatureTrackForceWorks3} />
          <FeatureWork1
            title="All-in-One Workforce Monitoring Platform"
            subTitle="Monitor screens, activities, and performance effortlessly - gain real-time visibility, ensure compliance, and improve workforce productivity organization-wide."
            features={right_FeatureTrackForceWorks3} />
          <FeatureProd2 />
          <FeatureWork2 />
          <FeatureProd1
            title='Time Tracking and Productivity Insights'
            subTitle='Track active and idle time, measure project costs, and analyze performance trends to optimize workforce efficiency using TrackForce’s advanced time tracking software.'
            features={left_FeatureTrackForceWorks1} />
          <FeatureWork1
            title="Automated Billing, Invoices, and Payment Tracking"
            subTitle="Simplify financial operations with automated invoicing, accurate billing records, and real-time payment tracking. Gain transparency, prevent errors, and streamline financial management across teams."
            features={right_FeatureTrackForceWorks1} />
        </section>
      </div>
      <div className='py-28 bg-[#DEEDFF]'>
        <HomeFreeTailer />
      </div>
    </div>
  )
}

export default Feature