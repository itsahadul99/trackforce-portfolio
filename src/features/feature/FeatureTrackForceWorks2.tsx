import React from 'react';

import '../home/how_trackforce_works/howTrackforceworks.css';
import FeatureWork2 from './FeatureWork2';
import FeatureProd2 from './FeatureProd2';


const FeatureTrackForceWorks2 = () => {
    return (
        // <section className="max-w-[1300] mx-auto  px-[93px] py-[96px] mt-32 bg-cover bg-center bg-no-repeat bg-[url('/worksBg.png')]">
        <section className="max-w-[1300] mx-auto px-4 md:px-6 lg:px-[93px] py-4 md:py-8 lg:py-[96px] mt-6 md:mt-10 lg:mt-24 rounded-2xl  bg-cover bg-center bg-no-repeat bg-[url('/feature2.png')] overflow-hidden">
            <FeatureProd2 />
            <FeatureWork2 />
        </section>
    );
};

export default FeatureTrackForceWorks2;
