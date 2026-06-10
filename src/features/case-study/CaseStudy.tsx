import HomeFreeTailer from '../home/home_free_trailer/HomeFreeTailer'
import CaseStudyChallengeAndSolution from './CaseStudyChallengeAndSolution'
import CaseStudyDeployment from './CaseStudyDeployment'
import CaseStudyHero from './CaseStudyHero'
import CaseStudyKeyFeatures from './CaseStudyKeyFeatures'
import CaseStudyParallax from './CaseStudyParallax'
import CaseStudyResults from './CaseStudyResults'
import CaseStudyWhyStandsOut from './CaseStudyWhyStandsOut'

const CaseStudy = () => {
    return (
        <div>
            <CaseStudyHero />
            <CaseStudyChallengeAndSolution />
            <CaseStudyKeyFeatures />
            <CaseStudyParallax />
            <CaseStudyDeployment />
            <CaseStudyResults />
            <CaseStudyWhyStandsOut />
            <div className='my-28'>
                <HomeFreeTailer />
            </div>
        </div>
    )
}

export default CaseStudy