import { getPageContent } from '@/lib/cms'
import AboutHero from './AboutHero'
import AboutValues from './AboutValues'
import AboutVision from './AboutVision'
import AboutWhatWeDo from './AboutWhatWeDo'
import AboutWhyChooseUs from './AboutWhyChooseUs'
import HomeFreeTailer from '../home/home_free_trailer/HomeFreeTailer'

const About = async () => {
    const cms = await getPageContent('about')

    return (
        <div className='w-full bg-[#DEEDFF]'>
            <AboutHero cms={cms.hero ?? {}} />
            <AboutWhatWeDo cms={cms.what_we_do ?? {}} />
            <AboutVision cms={cms.vision ?? {}} />
            <AboutValues cms={cms.values ?? {}} />
            <AboutWhyChooseUs cms={cms.why_choose_us ?? {}} />
            <div className='bg-[#DEEDFF] pt-5 pb-2 px-4'>
                <HomeFreeTailer />
            </div>
        </div>
    )
}

export default About