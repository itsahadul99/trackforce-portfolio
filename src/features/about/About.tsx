import React from 'react'
import AboutHero from './AboutHero'
import AboutWhatWeDo from './AboutWhatWeDo'
import AboutWhyChooseUs from './AboutWhyChooseUs'
import AboutJoinTeam from './AboutJoinTeam'
import HomeFreeTailer from '../home/home_free_trailer/HomeFreeTailer'
import AboutValues from './AboutValues'
import AboutVision from './AboutVision'

const About = () => {
    return (
        <div className='w-full bg-[#DEEDFF]'>
            <AboutHero />
            <AboutWhatWeDo />
            <AboutVision />
            <AboutValues />
            <AboutWhyChooseUs />
            <AboutJoinTeam />
            <div className='bg-[#DEEDFF] pt-5 pb-28'>
                <HomeFreeTailer />
            </div>
        </div>
    )
}

export default About