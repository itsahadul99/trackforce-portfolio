import React from 'react';
import ProductivityDashboard from './ProductivityDashboard';
import WorkForceMonitoring from './WorkForceMonitoring';
import './howTrackforceworks.css';

type HowTrackforceWorksProps = {
    cms?: {
        productivity_dashboard?: Record<string, string>
        workforce_monitoring?: Record<string, string>
    }
}

const HowTrackforceWorks = ({ cms = {} }: HowTrackforceWorksProps) => {
    return (
        
        // <section className="max-w-[1300] mx-auto  px-[93px] py-[96px] mt-32 bg-cover bg-center bg-no-repeat bg-[url('/worksBg.png')]">
        <section className="max-w-[1300] mx-4 sm:mx-6 xl:mx-auto px-5 sm:px-10 lg:px-[93px] py-12 sm:py-16 lg:py-[96px] -mt-[80px] sm:-mt-[150px] lg:-mt-[250px] rounded-4xl bg-cover bg-center bg-no-repeat bg-[url('/trackforce_work_bg.png')]">
            <div className="container mx-auto text-center relative z-10">
                <div className="section_title_border w-fit mx-auto text-black rounded-full mb-6">
                    <div className="how_trackforce_works px-4 py-2 text-sm font-semibold">
                        How TrackForce Works
                    </div>
                </div>
                <h2 className="text-2xl sm:text-3xl lg:text-[42px] font-semibold mb-6 text-white leading-tight">
                    Built for Managers <span className="font-playball font-normal">Who Need Clarity,</span> <br className="hidden sm:block" /> Not Micromanagement
                </h2>
                <p className="text-sm sm:text-base lg:text-lg max-w-3xl mx-auto text-white">
                    TrackForce strengthens collaboration and performance through
                    transparent monitoring that respects productivity and privacy.
                </p>
            </div>
            <ProductivityDashboard cms={cms.productivity_dashboard ?? {}} />
            <WorkForceMonitoring cms={cms.workforce_monitoring ?? {}} />
        </section>
    );
};

export default HowTrackforceWorks;
