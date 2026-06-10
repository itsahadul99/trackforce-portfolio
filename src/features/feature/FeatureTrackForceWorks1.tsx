import React from 'react';

import '../home/how_trackforce_works/howTrackforceworks.css';
import FeatureProd1 from './FeatureProd1';
import FeatureWork1 from './FeatureWork1';

const FeatureTrackForceWorks1 = () => {
    return (
        // <section className="max-w-[1300] mx-auto  px-[93px] py-[96px] mt-32 bg-cover bg-center bg-no-repeat bg-[url('/worksBg.png')]">
        <section className="max-w-[1300] mx-auto  px-[93px] py-[96px] mt-24 rounded-2xl bg-cover bg-center bg-no-repeat bg-[url('/trackforce_work_bg.png')]">

            <FeatureProd1 />
            <FeatureWork1 />
        </section>
    );
};

export default FeatureTrackForceWorks1;
