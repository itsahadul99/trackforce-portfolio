"use client";

import { motion } from "framer-motion";

const menuItems = [
  { id: "installation", label: "1. Installation" },
  { id: "dashboard", label: "2. Dashboard" },
  { id: "monitoring", label: "3. Monitoring" },
  { id: "reports", label: "4. Reports" },
  { id: "employee-management", label: "5. Employee Management" },
  { id: "organization-management", label: "6. Organization Management" },
  { id: "support", label: "7. Support" },
  { id: "settings", label: "8. Settings" },
  { id: "employee-panel-features", label: "9. Employee Panel Features" },
];

interface DocSidebarProps {
  activeSection: string;
  onSectionChange: (id: string) => void;
}

const DocSidebar = ({ activeSection, onSectionChange }: DocSidebarProps) => {
  return (
    <motion.div
      initial={{ x: -100, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="w-[300px] shrink-0 sticky top-24 self-start"
    >
      <h2 className="text-[28px] font-semibold text-[#1a1a2e] mb-2">User Guidance</h2>

      <nav className="flex flex-col ">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onSectionChange(item.id)}
            className={` border-y text-left px-4 py-2  text-lg font-medium transition-colors ${
              activeSection === item.id
                ? "font-semibold bg-transparent"
                : "text-[#1a1a2e]/70 hover:bg-gray-100 hover:rounded-lg hover:border-transparent"
            }`}
            style={
              activeSection === item.id
                ? {
                    background: "linear-gradient(90deg, #1B73E8 0%, #9F60EE 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }
                : undefined
            }
          >
            {item.label}
          </button>
        ))}
      </nav>

      <button className="mt-6 w-full flex items-center justify-center gap-2 bg-[#1a1a2e] text-white text-sm font-medium px-6 py-3 rounded-lg hover:bg-[#2a2a3e] transition-colors">
        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
        Download User Guide
      </button>
    </motion.div>
  );
};

export default DocSidebar;
