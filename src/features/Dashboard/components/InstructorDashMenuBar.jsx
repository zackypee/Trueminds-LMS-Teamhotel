import React, { useState } from "react"
import { Link, useLocation } from "react-router-dom";
import assignmentLogo from "../../../assets/assignment-icon.png"
import logOutLogo from "../../../assets/logout-icon.png"
import profileImg from "../../../assets/profile-img.png"
import dashboardIcon from "../../../assets/dashboard-icon.png"
import uploadIcon from "../../../assets/upload-icon.png"

export default function InstrucDashMenuBar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation(); // ← tracks current URL

  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: dashboardIcon, path: "/instructor-dashboard" },
    { id: "upload", label: "Upload Courses", icon: uploadIcon, path: "/instructor-dashboard/upload" },
    { id: "assignments", label: "Assignments", icon: assignmentLogo, path: "/instructor-dashboard/assignments" },
  ];

  const SidebarContent = () => (
    <div className="flex flex-col justify-between h-full px-4 py-6">

      {/* Top Section */}
      <div className="flex flex-col gap-8">

        {/* Logo + X button on mobile */}
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-[30px] font-bold text-[#0F172A]">
              Talent <span className="text-[#7C3AED]">Flow</span>
            </h1>
            <p className="text-sm text-[#6B7280] mt-1">Instructor Dashboard</p>
          </div>
          {/* X close button — mobile only */}
          <button
            className="md:hidden text-[#6B7280] hover:text-[#0F172A]"
            onClick={() => setMobileOpen(false)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Nav Links */}
        <div className="flex flex-col gap-2">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.path}
              onClick={() => setMobileOpen(false)}
              className={`flex items-center gap-3 px-3 py-2 text-sm font-normal w-full transition-colors
                ${location.pathname === item.path
                  ? "text-[#7C3AED] bg-[#F3EEFF] border-r-4 border-[#7C3AED]"
                  : "text-[#6B7280] hover:text-[#7C3AED] hover:bg-[#F3EEFF] hover:border-r-4 hover:border-[#7C3AED]"
                }`}
            >
              <img src={item.icon} alt="" className="size-4.5" />
              {item.label}
            </Link>
          ))}
        </div>

      </div>

      {/* Bottom Section */}
      <div className="flex flex-col gap-4">

        {/* Logout */}
        <button
          className="flex items-center gap-3 px-3 py-2 text-sm font-medium w-full transition-colors text-[#6B7280] hover:text-red-500 hover:bg-red-50 hover:border-r-4 hover:border-red-500"
        >
          <img src={logOutLogo} alt="" className="w-5 h-5" />
          Logout
        </button>

        {/* Profile */}
        <div className="flex items-center gap-3 px-3 py-3">
          <img src={profileImg} alt="" className="w-9 h-9 rounded-full object-cover" />
          <div>
            <h2 className="text-xs font-bold text-[#111827]">Tunde Adeyemi</h2>
            <p className="text-[10px] text-[#9CA3AF]">Nexus cohort instructor</p>
          </div>
        </div>

      </div>
    </div>
  );

  return (
    <>
      {/* Mobile Top Bar */}
      <div className="md:hidden flex items-center justify-between px-4 py-4 bg-[#F8FAFC] shadow-sm">
        <h1 className="text-xl font-bold text-[#0F172A]">
          Talent <span className="text-[#7C3AED]">Flow</span>
        </h1>
        <button onClick={() => setMobileOpen(true)} className="text-[#6B7280]">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>
      </div>

      {/* Mobile Overlay */}
      {mobileOpen && (
        <div
          className="md:hidden fixed inset-0 bg-black/40 z-40"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Mobile Drawer */}
      <div className={`md:hidden fixed top-0 left-0 h-full w-[256px] bg-[#F8FAFC] shadow-lg z-50 transform transition-transform duration-300
        ${mobileOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <SidebarContent />
      </div>

      {/* Desktop Sidebar — always visible */}
      <div className="hidden md:flex flex-col h-screen bg-[#F8FAFC] w-[256px] shadow-md">
        <SidebarContent />
      </div>
    </>
  );
}