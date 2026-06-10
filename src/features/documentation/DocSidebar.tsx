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
  isOpen?: boolean;
  onClose?: () => void;
}

const DocSidebar = ({ activeSection, onSectionChange, isOpen = false, onClose }: DocSidebarProps) => {
  return (
    <>
      {/* Backdrop for mobile overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-40 lg:hidden"
          onClick={() => onClose?.()}
          aria-hidden
        />
      )}

      <motion.div
        initial={{ x: -120, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={
          isOpen
            ? "fixed left-0 z-[100] top-22 h-full max-h-[calc(100vh-5rem)] overflow-y-auto w-3/4 max-w-xs bg-white p-4 overflow-auto lg:static lg:w-[300px] lg:sticky lg:top-32 lg:self-start"
            : "hidden lg:block w-[300px] shrink-0 sticky top-32 self-start z-[99]"
        }
      >
        <div className="flex items-center justify-between mb-4 lg:mb-2">
          <h2 className="text-[22px] lg:text-[28px] font-semibold text-[#1a1a2e]">User Guidance</h2>
          {isOpen && (
            <button onClick={() => onClose?.()} className="lg:hidden p-2 rounded-md">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>

        <nav className="flex flex-col">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                onSectionChange(item.id);
                onClose?.();
              }}
              className={` text-left px-3 py-2 text-base md:text-lg font-medium transition-colors rounded-md ${
                activeSection === item.id
                  ? "font-semibold bg-transparent"
                  : "text-[#1a1a2e]/70 hover:bg-gray-100"
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

        <div className="mt-6 lg:mt-8">
          <button className="w-full flex items-center justify-center gap-2 bg-[#1a1a2e] text-white text-sm font-medium px-4 py-3 rounded-lg hover:bg-[#2a2a3e] transition-colors">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download User Guide
          </button>
        </div>
      </motion.div>
    </>
  );
};

export default DocSidebar;
