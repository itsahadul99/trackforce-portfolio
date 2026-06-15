import Image from "next/image";
import monitoring_software from "../../../public/monitoring_software.png";

const MonitoringSoftwareList = () => {
    return (
        <section className="relative overflow-hidden  pt-16 md:pt-28 px-4">
            <div className="max-w-[1300] mx-auto text-[#2B2B2B]">
                <div className="max-w-[1100] mx-auto bg-[url('/10bestSft.png')] bg-top bg-cover bg-no-repeat">
                    {/* Top heading */}
                    <h2 className="text-2xl md:text-3xl lg:text-[42px] font-bold mb-10 md:mb-16">
                        10 best employee monitoring software for startups.
                    </h2>

                    {/* Hero image */}
                    <div className=" overflow-hidden mb-10 md:mb-16">
                        <Image
                            src={monitoring_software}
                            alt="Employee monitoring software for startups"
                            quality={90}
                            className="w-full h-auto object-cover"
                        />
                    </div>
                </div>

                {/* 1. TrackForce */}
                <div className="mb-10">
                    <h3 className="text-2xl md:text-[38px] font-semibold  mb-4 text-[#0C4EDB]">1. TrackForce</h3>
                    <p className=" text-base leading-relaxed mb-4">
                        TrackForce is a structured remote visibility and productivity management platform designed with clarity and scalability in mind.
                    </p>
                    <h4 className="text-lg font-semibold mb-3">Why It Is Good for Startups</h4>
                    <p className=" text-base leading-relaxed mb-2">TrackForce provides:</p>
                    <ul className="list-disc list-inside  text-base leading-relaxed space-y-1 pl-2 mb-4">
                        <li>Real-time dashboards with activity and time tracking</li>
                        <li>Application and website monitoring</li>
                        <li>Screenshots and snapshots</li>
                        <li>Automatic idle detection</li>
                        <li>Productivity scoring</li>
                        <li>Daily, monthly, and role-based reports</li>
                        <li>Role-based access control (owner, admin, employee)</li>
                        <li>On-premise deployment option</li>
                    </ul>
                    <p className=" text-base leading-relaxed mb-4">
                        For startups scaling remote teams, this structured approach supports growth without operational chaos.
                    </p>
                    <h4 className="text-lg font-semibold mb-2">Pros</h4>
                    <ul className="list-disc list-inside  text-base leading-relaxed space-y-1 pl-2 mb-4">
                        <li>Clean interface for monitoring teams</li>
                        <li>Strong reporting depth and visual data breakdown</li>
                        <li>Flexible for remote and hybrid models</li>
                        <li>Suitable for security-conscious environments</li>
                        <li>Scales with organizational growth</li>
                    </ul>
                    <h4 className="text-lg font-semibold mb-2">Cons</h4>
                    <ul className="list-disc list-inside  text-base leading-relaxed space-y-1 pl-2 mb-4">
                        <li>May be more advanced than needed for very small teams</li>
                        <li>Requires transparent communication to maintain trust</li>
                    </ul>
                    <p className=" text-base leading-relaxed">
                        TrackForce works best for startups that want structured, enterprise-quality oversight, especially in controlled or secure environments.
                    </p>
                </div>

                {/* 2. Time Doctor */}
                <div className="mb-10">
                    <h3 className="text-2xl md:text-[38px] font-semibold  mb-4 text-[#0C4EDB]">2. Time Doctor</h3>
                    <p className=" text-base leading-relaxed mb-4">
                        Time Doctor is a structured remote visibility and productivity management platform designed without much burden and emphasizing clarity and scalability.
                    </p>
                    <h4 className="text-lg font-semibold mb-3">Why It Is Good for Startups</h4>
                    <p className=" text-base leading-relaxed mb-2">Time Doctor provides:</p>
                    <ul className="list-disc list-inside  text-base leading-relaxed space-y-1 pl-2 mb-4">
                        <li>Real-time dashboards with activity and time tracking</li>
                        <li>Application and website monitoring</li>
                        <li>Screenshots and snapshots</li>
                        <li>Automatic idle detection</li>
                        <li>Productivity scoring</li>
                        <li>Daily, monthly, and role-based reports</li>
                        <li>Role-based access (Super Admin, Admin, Employee)</li>
                        <li>On-premise deployment</li>
                    </ul>
                    <p className=" text-base leading-relaxed mb-4">
                        For startups scaling remote teams, this structured approach supports growth without operational chaos.
                    </p>
                    <h4 className="text-lg font-semibold mb-2">Pros</h4>
                    <ul className="list-disc list-inside  text-base leading-relaxed space-y-1 pl-2 mb-4">
                        <li>Comprehensive monitoring modules</li>
                        <li>Strong reporting and analytics breakdown</li>
                        <li>Deployment flexibility</li>
                        <li>Suitable for security-conscious environments</li>
                        <li>Scales with organizational growth</li>
                    </ul>
                    <h4 className="text-lg font-semibold mb-2">Cons</h4>
                    <ul className="list-disc list-inside  text-base leading-relaxed space-y-1 pl-2 mb-4">
                        <li>May be more advanced than needed for very small teams</li>
                        <li>Requires transparent communication to maintain trust</li>
                    </ul>
                    <p className=" text-base leading-relaxed">
                        TrackForce works best for startups that want structured oversight, especially in controlled environments.
                    </p>
                </div>

                {/* 3. Teramind */}
                <div className="mb-10">
                    <h3 className="text-2xl md:text-[38px] font-semibold mb-4 text-[#0C4EDB]">3. Teramind</h3>
                    <p className=" text-base leading-relaxed mb-4">Teramind provides:</p>
                    <ul className="list-disc list-inside  text-base leading-relaxed space-y-1 pl-2 mb-4">
                        <li>Real-time dashboard with activity and time tracking</li>
                        <li>Application and Website monitoring</li>
                        <li>Screenshots and snapshots</li>
                        <li>Automatic idle detection</li>
                        <li>Daily, monthly, and role-based reports</li>
                        <li>Role-based (from Super Admin to Employee)</li>
                        <li>On-premise deployment</li>
                    </ul>
                    <p className=" text-base leading-relaxed mb-4">
                        For startups scaling remote teams, this structured approach supports growth without operational chaos.
                    </p>
                    <h4 className="text-lg font-semibold mb-2">Pros</h4>
                    <ul className="list-disc list-inside  text-base leading-relaxed space-y-1 pl-2 mb-4">
                        <li>Comprehensive monitoring modules</li>
                        <li>Strong reporting and analytics breakdown for teams</li>
                        <li>Deployment flexibility</li>
                        <li>Suitable for security-sensitive environments</li>
                        <li>Scales with organizational growth</li>
                    </ul>
                    <h4 className="text-lg font-semibold mb-2">Cons</h4>
                    <ul className="list-disc list-inside  text-base leading-relaxed space-y-1 pl-2">
                        <li>May be more advanced than needed for very small teams</li>
                        <li>Requires transparent communication to maintain trust</li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default MonitoringSoftwareList;
