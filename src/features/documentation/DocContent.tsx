"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import RichText from "@/components/shared/RichText";

type DocContentProps = {
  activeSection: string;
  cms?: Record<string, Record<string, string>>;
};

/* Maps sidebar section ids to their CMS section key and default title.
   Content for these comes from the admin documentation page editor. */
const CMS_SECTIONS: { id: string; key: string; title: string }[] = [
  { id: "dashboard", key: "dashboard", title: "2. Dashboard" },
  { id: "monitoring", key: "monitoring", title: "3. Monitoring" },
  { id: "reports", key: "reports", title: "4. Reports" },
  { id: "employee-management", key: "employee_management", title: "5. Employee Management" },
  { id: "organization-management", key: "organization_management", title: "6. Organization Management" },
  { id: "support", key: "support", title: "7. Support" },
  { id: "settings", key: "settings", title: "8. Settings" },
  { id: "employee-panel-features", key: "employee_panel", title: "9. Employee Panel Features" },
  { id: "extra-1", key: "extra1", title: "More" },
  { id: "extra-2", key: "extra2", title: "More" },
  { id: "extra-3", key: "extra3", title: "More" },
];

const DocContent = ({ activeSection, cms = {} }: DocContentProps) => {
  const sidebar = cms.sidebar ?? {};
  return (
    <motion.div
      initial={{ x: 100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="flex-1 min-w-0 bg-transparent"
    >
      {activeSection === "installation" && <InstallationSection cms={cms.installation ?? {}} />}
      {CMS_SECTIONS.map(({ id, key, title }, i) => {
        if (activeSection !== id) return null;
        const section = cms[key] ?? {};
        const defaultTitle = section.menu_label || sidebar[`item${i + 2}`] || title;
        return <GenericSection key={id} title={defaultTitle} cms={section} />;
      })}
    </motion.div>
  );
};

const PlaceholderSection = ({ title }: { title: string }) => (
  <div>
    <h2 className="text-3xl font-bold text-[#1a1a2e] mb-6">{title}</h2>
    <p className="text-[#1a1a2e]/60 text-[20px]">Content coming soon...</p>
  </div>
);

/* CMS-driven doc section: heading + optional image + rich HTML content.
   Falls back to the "coming soon" placeholder until content is added in the admin. */
const GenericSection = ({ title, cms }: { title: string; cms: Record<string, string> }) => {
  if (!cms.heading && !cms.content && !cms.image) {
    return <PlaceholderSection title={title} />;
  }
  return (
    <div>
      <h2 className="text-3xl font-bold text-[#1a1a2e] mb-4">{cms.heading || title}</h2>
      {cms.image && (
        <div className="mb-10">
          <Image
            src={cms.image}
            alt={cms.heading || title}
            width={800}
            height={400}
            quality={90}
            className="w-full rounded-xl object-contain"
          />
        </div>
      )}
      {cms.content && (
        <RichText className="text-[#1a1a2e]/70 text-[20px] space-y-4" html={cms.content} />
      )}
    </div>
  );
};

const InstallationSection = ({ cms = {} }: { cms?: Record<string, string> }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-[#1a1a2e] mb-4">{cms.heading || "1. Installation"}</h2>
      <RichText
        className="text-[#1a1a2e]/70 text-[20px] mb-8"
        html={cms.description || "There are 3 ways to access TrackForce for a user -"}
      />

      {/* Choose Application Type Image */}
      <div className="mb-10">
        <Image
          src={cms.image || "/doc/installation.png"}
          alt="Choose application type"
          width={800}
          height={400}
          quality={90}
          className="w-full rounded-xl object-contain"
        />
      </div>

      {/* 1.1 Hidden App */}
      <div className="mb-10">
        <h2 className="text-xl font-bold text-[#1a1a2e] mb-3">{cms.step1_title || "1.1 Hidden App"}</h2>
        {cms.step1_desc ? (
          <RichText className="text-[#1a1a2e]/70 text-[20px] mb-4" html={cms.step1_desc} />
        ) : (
          <>
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
          </>
        )}
      </div>

      {/* 1.2 Password less App */}
      <div className="mb-10">
        <h2 className="text-xl font-bold text-[#1a1a2e] mb-3">{cms.step2_title || "1.2 Password less App"}</h2>
        {cms.step2_desc ? (
          <RichText className="text-[#1a1a2e]/70 text-[20px] mb-4" html={cms.step2_desc} />
        ) : (
          <>
        <p className="text-[#1a1a2e]/70 text-[20px] mb-4">
          Purpose: Designed for authentication systems that use tokens, one-time links, or device-based login.
        </p>
        <h3 className="text-[20px] font-bold text-[#1a1a2e] mb-2">Steps:</h3>
        <ol className="text-[#1a1a2e]/70 text-[20px] space-y-2 list-decimal list-inside ml-2">
          <li>Run the Password less installer.</li>
          <li>The app fetches credentials automatically from the server using the device ID or a pre-configured token.</li>
          <li>User doesn&apos;t need to enter any password — the app starts monitoring immediately after launch.</li>
        </ol>
          </>
        )}
      </div>

      {/* 1.3 Login-based App */}
      <div className="mb-10">
        <h2 className="text-xl font-bold text-[#1a1a2e] mb-3">{cms.step3_title || "1.3 Login-based App"}</h2>
        {cms.step3_desc ? (
          <RichText className="text-[#1a1a2e]/70 text-[20px] mb-4" html={cms.step3_desc} />
        ) : (
          <>
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
          </>
        )}
      </div>

      {/* 1.4 Install Trackforce */}
      <div className="mb-10">
        <h2 className="text-xl font-bold text-[#1a1a2e] mb-3">{cms.step4_title || "1.4 Install Trackforce:"}</h2>
        {cms.step4_desc ? (
          <RichText className="text-[#1a1a2e]/70 text-[20px] mb-4" html={cms.step4_desc} />
        ) : (
          <>
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
          </>
        )}
      </div>
    </div>
  );
};

export default DocContent;
