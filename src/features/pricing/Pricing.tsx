import HomeFaq from '../home/home_faq/HomeFaq'
import HomeFreeTailer from '../home/home_free_trailer/HomeFreeTailer'
import HomePricing from '../home/pricing/HomePricing'

const Pricing = () => {
  return (
    <div>
      {/* <PricingHero /> */}
      <HomePricing />
      {/* <Benefits /> */}
      <div className='bg-[#DEEDFF] py-28 flex flex-col items-center gap-24 px-4'>
        <HomeFaq />
        <HomeFreeTailer />
      </div>
    </div>
  )
}

export default Pricing