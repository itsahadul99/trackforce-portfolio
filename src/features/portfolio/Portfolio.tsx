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

const Portfolio = () => {
    return (
        <div>
            <PortfolioHero />
            <Solution />
            <ProductivityInsights />
            <RealTime />
            <Enterprise />
            <Decisions />
            <Intellengence />
            <Configure />
            <Structure />
            <Designed />
            <ImpactBussiness />
            <div className='my-28'>
                <HomeFreeTailer />
            </div>
        </div>
    )
}

export default Portfolio