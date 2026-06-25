import HomeFreeTailer from '../home/home_free_trailer/HomeFreeTailer'
import FeatureHero from './FeatureHero'
import FeatureProd1 from './FeatureProd1'
import FeatureProd2 from './FeatureProd2'
import FeatureWork1 from './FeatureWork1'
import FeatureWork2 from './FeatureWork2'
import Optimization from './Optimization'
import ProductivityDashboard from './ProductivityDashboard'
import WorkForceMonitoring from './WorkForceMonitoring'

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

type FeatureProps = { cms?: Record<string, Record<string, string>> }

const Feature = ({ cms = {} }: FeatureProps) => {
  return (
    <div>
      <FeatureHero cms={cms.hero ?? {}} />
      <Optimization cms={cms.optimization ?? {}} />
      <div className="bg-[#DEEDFF] px-4">
        <section
          className="max-w-[1300] mx-auto px-4 md:px-6 lg:px-[93px] py-4 md:py-8 lg:py-[96px] rounded-2xl bg-cover bg-center bg-no-repeat overflow-hidden"
          style={{ backgroundImage: (cms.feature_section ?? {}).bg_image ? `url(${(cms.feature_section ?? {}).bg_image}), url(‘/feature/feature.png’)` : `url(‘/feature/feature.png’)` }}
        >
         <ProductivityDashboard cms={cms.productivity ?? {}} />
         <WorkForceMonitoring cms={cms.monitoring ?? {}} />
          <FeatureWork2 cms={cms.employee_management ?? {}} />
          <FeatureProd1
            title="Time Tracking and Productivity Insights"
            subTitle="Track active and idle time, measure project costs, and analyze performance trends to optimize workforce efficiency using TrackForce's advanced time tracking software."
            features={left_FeatureTrackForceWorks1}
            cms={cms.time_tracking ?? {}} />
          <FeatureWork1
            title="Automated Billing, Invoices, and Payment Tracking"
            subTitle="Simplify financial operations with automated invoicing, accurate billing records, and real-time payment tracking. Gain transparency, prevent errors, and streamline financial management across teams."
            features={right_FeatureTrackForceWorks1}
            cms={cms.billing ?? {}} />
        </section>
      </div>
      <div className='py-28 bg-[#DEEDFF] px-4'>
        <HomeFreeTailer cms={cms.free_trailer ?? {}} />
      </div>
    </div>
  )
}

export default Feature