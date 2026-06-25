import React from 'react'
import PortfolioHero from './PortfolioHero'
import Solution from './Solution'
import ProductivityInsights from './ProductivityInsights'
import RealTime from './RealTime'
import Enterprise from './Enterprise'
import Decisions from './Decisions'
import Intellengence from './Intellengence'
import Configure from './Configure'
import Structure from './Structure'
import Designed from './Designed'
import ImpactBussiness from './ImpactBussiness'
import HomeFreeTailer from '../home/home_free_trailer/HomeFreeTailer'

type PortfolioProps = { cms?: Record<string, Record<string, string>> }

const Portfolio = ({ cms = {} }: PortfolioProps) => {
    return (
        <div>
            <PortfolioHero cms={cms.hero ?? {}} />
            <Solution cms={cms.solution ?? {}} />
            <ProductivityInsights cms={cms.productivity_insights ?? {}} />
            <RealTime cms={cms.real_time ?? {}} />
            <Enterprise cms={cms.enterprise ?? {}} />
            <Decisions cms={cms.decisions ?? {}} />
            <Intellengence cms={cms.intelligence ?? {}} />
            <Configure cms={cms.configure ?? {}} />
            <Structure cms={cms.structure ?? {}} />
            <Designed cms={cms.designed ?? {}} />
            <ImpactBussiness cms={cms.impact ?? {}} />
            <div className='my-28 px-4'>
                <HomeFreeTailer cms={cms.free_trailer ?? {}} />
            </div>
        </div>
    )
}

export default Portfolio
