import HomeFaq from '../home/home_faq/HomeFaq'
import HomeFreeTailer from '../home/home_free_trailer/HomeFreeTailer'
import HomePricing from '../home/pricing/HomePricing'
import type { CmsFaq } from '@/lib/cms'

type PricingProps = {
  faqs?: CmsFaq[]
  cms?: Record<string, Record<string, string>>
}

const Pricing = ({ faqs, cms = {} }: PricingProps) => {
  return (
    <div>
      {/* <PricingHero /> */}
      <HomePricing cms={cms.hero ?? {}} />
      {/* <Benefits /> */}
      <div className='bg-[#DEEDFF] py-28 flex flex-col items-center gap-24 px-4'>
        <HomeFaq initialFaqs={faqs} cms={cms.faq ?? {}} />
        <HomeFreeTailer cms={cms.free_trailer ?? {}} />
      </div>
    </div>
  )
}

export default Pricing
