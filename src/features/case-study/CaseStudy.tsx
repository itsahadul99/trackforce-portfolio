import HomeFreeTailer from '../home/home_free_trailer/HomeFreeTailer'
import CaseStudyChallengeAndSolution from './CaseStudyChallengeAndSolution'
import CaseStudyDeployment from './CaseStudyDeployment'
import CaseStudyHero from './CaseStudyHero'
import CaseStudyKeyFeatures from './CaseStudyKeyFeatures'
import CaseStudyParallax from './CaseStudyParallax'
import CaseStudyResults from './CaseStudyResults'
import CaseStudyWhyStandsOut from './CaseStudyWhyStandsOut'

type CaseStudyProps = { cms?: Record<string, Record<string, string>> }

const CaseStudy = ({ cms = {} }: CaseStudyProps) => {
    return (
        <div>
            <CaseStudyHero cms={cms.hero ?? {}} />
            <CaseStudyChallengeAndSolution cms={cms.challenge ?? {}} />
            <CaseStudyKeyFeatures cms={cms.key_features ?? {}} />
            <CaseStudyParallax cms={cms.parallax ?? {}} />
            <CaseStudyDeployment cms={cms.deployment ?? {}} />
            <CaseStudyResults cms={cms.results ?? {}} />
            <CaseStudyWhyStandsOut cms={cms.why_stands_out ?? {}} />
            <div className='my-28 px-4'>
                <HomeFreeTailer cms={cms.free_trailer ?? {}} />
            </div>
        </div>
    )
}

export default CaseStudy
