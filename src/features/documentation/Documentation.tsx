"use client";

import { useState } from "react";
import DocSidebar from "./DocSidebar";
import DocContent from "./DocContent";
import HomeFreeTailer from "../home/home_free_trailer/HomeFreeTailer";

type DocumentationProps = { cms?: Record<string, Record<string, string>> };

const Documentation = ({ cms = {} }: DocumentationProps) => {
    const [activeSection, setActiveSection] = useState("installation");
    const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
    const hero = cms.hero ?? {};

    /* Admin-added sections (extra1-3): shown in the sidebar only when a menu label is set */
    const extraItems = [1, 2, 3]
        .map((i) => ({ id: `extra-${i}`, label: (cms[`extra${i}`] ?? {}).menu_label }))
        .filter((item): item is { id: string; label: string } => Boolean(item.label));

    return (
        <div className="relative bg-white min-h-screen py-12">
            {/* Background images */}
            <div
                className="absolute top-0 left-0 w-full h-1/2 bg-cover bg-center bg-no-repeat pointer-events-none"
                style={{ backgroundImage: hero.bg_image1 ? `url(${hero.bg_image1}), url('/docbg1.png')` : "url('/docbg1.png')" }}
            />
            <div
                className="absolute bottom-0 left-0 w-full h-1/2 bg-cover bg-center bg-no-repeat pointer-events-none"
                style={{ backgroundImage: hero.bg_image2 ? `url(${hero.bg_image2}), url('/docbg2.png')` : "url('/docbg2.png')" }}
            />
            <div className="relative z-10 w-full max-w-[1300px] mx-auto px-4 py-12 lg:py-20">
                {/* Mobile toggle */}
                <div className="lg:hidden mb-4 flex items-center justify-between">
                    <button
                        className="px-3 py-2 rounded-md bg-white border shadow-sm"
                        onClick={() => setMobileSidebarOpen(true)}
                        aria-label="Open documentation menu"
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                        </svg>
                    </button>
                    <div className="text-center w-full">
                        <h1 className="text-lg font-semibold">Documentation</h1>
                    </div>
                </div>

                <div className="flex flex-col lg:flex-row gap-6 z-[99]">
                    <DocSidebar
                        activeSection={activeSection}
                        onSectionChange={(id: string) => {
                            setActiveSection(id);
                            setMobileSidebarOpen(false);
                        }}
                        isOpen={mobileSidebarOpen}
                        onClose={() => setMobileSidebarOpen(false)}
                        cms={cms.sidebar ?? {}}
                        extraItems={extraItems}
                    />
                    <DocContent activeSection={activeSection} cms={cms} />
                </div>
            </div>
            <div className='mb-28 relative z-10'>
                <HomeFreeTailer cms={cms.free_trailer ?? {}} />
            </div>
        </div>
    );
};

export default Documentation;
