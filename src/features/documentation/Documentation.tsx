"use client";

import { useState } from "react";
import DocSidebar from "./DocSidebar";
import DocContent from "./DocContent";
import HomeFreeTailer from "../home/home_free_trailer/HomeFreeTailer";

const Documentation = () => {
    const [activeSection, setActiveSection] = useState("installation");

    return (
        <div className="relative bg-white min-h-screen py-12">
            {/* Background images */}
            <div
                className="absolute top-0 left-0 w-full h-1/2 bg-cover bg-center bg-no-repeat pointer-events-none"
                style={{ backgroundImage: "url('/docbg1.png')" }}
            />
            <div
                className="absolute bottom-0 left-0 w-full h-1/2 bg-cover bg-center bg-no-repeat pointer-events-none"
                style={{ backgroundImage: "url('/docbg2.png')" }}
            />
            <div className="relative z-10 w-full lg:w-[1200] xl:w-[1300] mx-auto px-4 py-20">
                <div className="flex gap-10">
                    <DocSidebar
                        activeSection={activeSection}
                        onSectionChange={setActiveSection}
                    />
                    <DocContent activeSection={activeSection} />
                </div>
            </div>
            <div className='mb-28 relative z-10'>
                <HomeFreeTailer />
            </div>
        </div>
    );
};

export default Documentation;
