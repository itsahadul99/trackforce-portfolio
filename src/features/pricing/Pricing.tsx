import React from 'react'
import Benefits from './Benefits'
import PricingHero from './PricingHero'
import HomePricing from '../home/pricing/HomePricing'
import HomeFaq from '../home/home_faq/HomeFaq'
import HomeFreeTailer from '../home/home_free_trailer/HomeFreeTailer'

const Pricing = () => {
  return (
    <div>
        <PricingHero />
        <HomePricing/>
        <Benefits />
       <div className='bg-[#DEEDFF] py-28 flex flex-col items-center gap-24'>
        <HomeFaq />
         <HomeFreeTailer />
       </div>
    </div>
  )
}

export default Pricing