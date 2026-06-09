import React from 'react'
import AboutHero from './AboutHero'
import AboutWhatWeDo from './AboutWhatWeDo'
import AboutWhyChooseUs from './AboutWhyChooseUs'
import AboutJoinTeam from './AboutJoinTeam'
import HomeFreeTailer from '../home/home_free_trailer/HomeFreeTailer'

const About = () => {
    return (
        <div>
            <AboutHero />
            <AboutWhatWeDo />
            <AboutWhyChooseUs />
            <AboutJoinTeam />
            <div className='bg-[#DEEDFF] pt-5 pb-28'>
                <HomeFreeTailer />
            </div>
        </div>
    )
}

export default About