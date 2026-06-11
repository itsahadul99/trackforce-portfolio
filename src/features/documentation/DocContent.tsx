"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const DocContent = ({ activeSection }: { activeSection: string }) => {
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex-1 min-w-0 bg-transparent"
    >
      {activeSection === "installation" && <InstallationSection />}
      {activeSection === "dashboard" && <PlaceholderSection title="2. Dashboard" />}
      {activeSection === "monitoring" && <PlaceholderSection title="3. Monitoring" />}
      {activeSection === "reports" && <PlaceholderSection title="4. Reports" />}
      {activeSection === "employee-management" && <PlaceholderSection title="5. Employee Management" />}
      {activeSection === "organization-management" && <PlaceholderSection title="6. Organization Management" />}
      {activeSection === "support" && <PlaceholderSection title="7. Support" />}
      {activeSection === "settings" && <PlaceholderSection title="8. Settings" />}
      {activeSection === "employee-panel-features" && <PlaceholderSection title="9. Employee Panel Features" />}
    </motion.div>
  );
};

const PlaceholderSection = ({ title }: { title: string }) => (
  <div>
    <h2 className="text-3xl font-bold text-[#1a1a2e] mb-6">{title}</h2>
    <p className="text-[#1a1a2e]/60 text-[20px]">Content coming soon...</p>
  </div>
);

const InstallationSection = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-[#1a1a2e] mb-4">1. Installation</h2>
      <p className="text-[#1a1a2e]/70 text-[20px] mb-8">
        There are 3 ways to access TrackForce for a user -
      </p>

      {/* Choose Application Type Image */}
      <div className="mb-10">
        <Image
          src="/installation.png"
          alt="Choose application type"
          width={800}
          height={400}
          className="w-full rounded-xl object-contain"
        />
      </div>

      {/* 1.1 Hidden App */}
      <div className="mb-10">
        <h2 className="text-xl font-bold text-[#1a1a2e] mb-3">1.1 Hidden App</h2>
        <p className="text-[#1a1a2e]/70 text-[20px] mb-4">
          Purpose: Likely runs in the background without a visible UI.
        </p>
        <h3 className="text-[20px] font-bold text-[#1a1a2e] mb-2">Steps:</h3>
        <ol className="text-[#1a1a2e]/70 text-[20px] space-y-2 list-decimal list-inside ml-2">
          <li>
            Obtain the Hidden App Installer from the Super Admin panel. Run using command line or IT deployment tools like Intune or Group Policy. Example command:{" "}
            <span className="text-green-500 italic">
              TrackForceSetup.exe /silent /org=YourCompany /mode=hidden
            </span>
          </li>
          <li>The app installs in background mode and starts tracking automatically on system startup.</li>
          <li>No desktop icon or user interface will be visible.</li>
        </ol>
      </div>

      {/* 1.2 Password less App */}
      <div className="mb-10">
        <h2 className="text-xl font-bold text-[#1a1a2e] mb-3">1.2 Password less App</h2>
        <p className="text-[#1a1a2e]/70 text-[20px] mb-4">
          Purpose: Designed for authentication systems that use tokens, one-time links, or device-based login.
        </p>
        <h3 className="text-[20px] font-bold text-[#1a1a2e] mb-2">Steps:</h3>
        <ol className="text-[#1a1a2e]/70 text-[20px] space-y-2 list-decimal list-inside ml-2">
          <li>Run the Password less installer.</li>
          <li>The app fetches credentials automatically from the server using the device ID or a pre-configured token.</li>
          <li>User doesn&apos;t need to enter any password — the app starts monitoring immediately after launch.</li>
        </ol>
      </div>

      {/* 1.3 Login-based App */}
      <div className="mb-10">
        <h2 className="text-xl font-bold text-[#1a1a2e] mb-3">1.3 Login-based App</h2>
        <p className="text-[#1a1a2e]/70 text-[20px] mb-4">
          Purpose: Requires username and password credentials to access.
        </p>
        <h3 className="text-[20px] font-bold text-[#1a1a2e] mb-2">Steps:</h3>
        <ol className="text-[#1a1a2e]/70 text-[20px] space-y-2 list-decimal list-inside ml-2">
          <li>Download the Login-based app version.</li>
          <li>Run setup and complete installation.</li>
          <li>Launch TrackForce → Enter Email / Username and Password.</li>
          <li>Once logged in, click Start Monitoring to begin tracking activity.</li>
        </ol>
      </div>

      {/* 1.4 Install Trackforce */}
      <div className="mb-10">
        <h2 className="text-xl font-bold text-[#1a1a2e] mb-3">1.4 Install Trackforce:</h2>
        <p className="text-[#1a1a2e]/70 text-[20px] mb-4">
          A professional guide for installing TrackForce in your laptop is given in the following steps-
        </p>
        <h3 className="text-[20px] font-bold text-[#1a1a2e] mb-2">Steps:</h3>
        <ol className="text-[#1a1a2e]/70 text-[20px] space-y-2 list-decimal list-inside ml-2">
          <li>First, admins have to register for a TrackForce account—sign up via the website or obtain their license or activation key.</li>
          <li>Then they have to download the installer for the client devices&apos; OS, like Windows or Mac, that the admin wants to monitor.</li>
          <li>Install the installer on each endpoint device:</li>
          <li>Admin must run the installer with administrator rights.</li>
          <li>Enter license or activation key if required.</li>
          <li>Choose installation options like visible vs invisible mode and auto-startup.</li>
          <li>Configure the agent on each device:</li>
          <li>Set the interval for screenshots</li>
          <li>Set parameters for keystroke logging, app-usage tracking, and file-transfer monitoring.</li>
          <li>Register device names, allocate to employees, and tag by department.</li>
          <li>Log in to the TrackForce web portal (administrator view) and add your organization and users:</li>
          <li>Upload employee list or import via Excel or CSV.</li>
          <li>Create departments and assign users.</li>
          <li>Assign roles and permissions for managers vs admins.</li>
          <li>Enroll devices: In the web portal, link each device to a user account and ensure it shows as &quot;Online&quot; in the dashboard.</li>
          <li>Test: Verify that devices report activity, screenshots appear, logs populate, and dashboards update. Check the client UI and the portal both.</li>
          <li>Roll out to your full user base when everything is verified. Provide training or documentation so employees understand how their work is being tracked.</li>
        </ol>
      </div>
    </div>
  );
};

export default DocContent;
