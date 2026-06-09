import HomeFaq from './home_faq/HomeFaq'
import HomeFreeTailer from './home_free_trailer/HomeFreeTailer'
import Hero from './hero/Hero'
import HowTrackforceWorks from './how_trackforce_works/HowTrackforceWorks'
import OurFeatures from './our_features/OurFeatures'
import Parallax from './parallax/Parallax'
import HomePricing from './pricing/HomePricing'
import Slider from './slider/Slider'
import Testimonials from './testimonials/Testimonials'
import WhyChooseUs from './why_choose_us/WhyChooseUs'
import WhyTrackforce from './why_trackforce/WhyTrackforce'
import WorkProcess from './work_process/WorkProcess'

const Home = () => {
    return (
        <div>
            <Hero />
            <div className='bg-[#DEEDFF] '>
                <div className=" bg-cover bg-center bg-no-repeat bg-[url('/home-plx-bg.png')]">
                    <Slider />
                    <WhyTrackforce />
                    <Parallax />
                </div>
                <HowTrackforceWorks />
                <WorkProcess />
            </div>
            <OurFeatures />
            <div className='bg-[#DEEDFF] py-12 sm:py-16 lg:py-24'>
                <Testimonials />
            </div>
            <WhyChooseUs />
            <div className='bg-[#DEEDFF] py-12 sm:py-16 lg:py-24'>
                <HomeFaq />
            </div>
            <HomePricing />
            <div className='bg-[#DEEDFF] py-12 sm:py-16 lg:py-24'>
                <HomeFreeTailer />
            </div>
        </div>
    )
}

export default Home