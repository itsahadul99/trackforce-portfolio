import { getFaqs, getPageContent, getTestimonials } from '@/lib/cms'
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

const Home = async () => {
    const [faqs, testimonials, cms] = await Promise.all([
        getFaqs('home'),
        getTestimonials(),
        getPageContent('home'),
    ])

    return (
        <div>
            <Hero cms={cms.hero ?? {}} />
            <div className='bg-[#DEEDFF] '>
                <div className=" bg-cover bg-center bg-no-repeat bg-[url('/home-plx-bg.png')]">
                    <Slider />
                    <WhyTrackforce cms={cms.why_trackforce ?? {}} />
                    <Parallax cms={cms.parallax ?? {}} />
                </div>
                <HowTrackforceWorks cms={{
                    productivity_dashboard: cms.productivity_dashboard ?? {},
                    workforce_monitoring: cms.workforce_monitoring ?? {},
                }} />
                <WorkProcess cms={cms.work_process ?? {}} />
            </div>
            <OurFeatures />
            <div className='bg-[#DEEDFF] py-12 sm:py-16 lg:py-24'>
                <Testimonials initialTestimonials={testimonials} />
            </div>
            <WhyChooseUs />
            <div className='bg-[#DEEDFF] py-12 sm:py-16 lg:py-24'>
                <HomeFaq initialFaqs={faqs} />
            </div>
            <HomePricing />
            <div className='bg-[#DEEDFF] py-12 sm:py-16 lg:py-24 px-4'>
                <HomeFreeTailer cms={cms.free_trailer ?? {}} />
            </div>
        </div>
    )
}

export default Home
