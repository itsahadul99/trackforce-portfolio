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

const left_FeatureTrackForceWorks3 = [
  {
    title: "Active Hours",
    description:
      "Track real-time online and idle statuses to understand team availability and active work time.",
  },
  {
    title: "Project Costs",
    description:
      "Measure project expenses accurately by linking tracked time to budgets and resource allocation.",
  },
  {
    title: "Idle Detection",
    description:
      "Automatically detect idle periods to ensure accurate tracking of true productive work time.",
  },
  {
    title: "Time Reports",
    description:
      "Generate detailed time reports to review daily, weekly, and monthly work activity with clarity.",
  },
  {
    title: "Task Duration",
    description:
      "Monitor how long each task takes to complete and identify opportunities to improve efficiency.",
  },
  {
    title: "Performance Metrics",
    description:
      "Analyze key performance indicators to evaluate productivity and drive continuous improvement.",
  },
];

const right_FeatureTrackForceWorks3 = [
  {
    title: "Automated Invoicing",
    description:
      "Track real-time online and idle statuses to understand team availability and active work time.",
  },
  {
    title: "Expense Tracking",
    description:
      "Monitor every expense across projects and teams to keep budgets accurate and under control.",
  },
  {
    title: "Payment History",
    description:
      "Maintain a complete record of all payments to ensure transparency and easy reconciliation.",
  },
  {
    title: "Tax & Deductions",
    description:
      "Automate tax calculations and deductions to reduce errors and stay compliant with regulations.",
  },
  {
    title: "Financial Reports",
    description:
      "Generate clear, detailed financial reports to support smarter business decisions.",
  },
  {
    title: "Multi-Currency Support",
    description:
      "Handle invoices and payments in multiple currencies for seamless global operations.",
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
            title=' Real-Time Dashboard for Complete Visibility'
            subTitle='Access productivity, activity data, and performance analytics in one intuitive employee monitoring software dashboard.'
            features={left_FeatureTrackForceWorks3} />
          <FeatureWork1
            title="All-in-One Workforce Monitoring Platform"
            subTitle="Monitor teams, optimize performance, and maintain compliance — all from
                    a single platform built for modern workplaces."
            features={right_FeatureTrackForceWorks3} />
          <FeatureProd2 />
          <FeatureWork2 />
        </section>
      </div>
      <div className='py-28 bg-[#DEEDFF]'>
        <HomeFreeTailer />
      </div>
    </div>
  )
}

export default Feature