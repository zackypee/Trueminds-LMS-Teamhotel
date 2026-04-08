// 


import React, { useState } from "react"
import assignmentLogo from "../../../assets/assignment-icon.png"
import logOutLogo from "../../../assets/logout-icon.png"
import profileImg from "../../../assets/profile-img.png"
import dashboardIcon from "../../../assets/dashboard-icon.png"
import uploadIcon from "../../../assets/upload-icon.png"

export default function InstrucDashMenuBar() {
  const [active, setActive] = useState("dashboard");

  const navItems = [
    { id: "dashboard", label: "Dashboard", icon: dashboardIcon },
    { id: "upload", label: "Upload Courses", icon: uploadIcon },
    { id: "assignments", label: "Assignments", icon: assignmentLogo },
  ];

  return (
    <div className="flex flex-col justify-between h-screen bg-[#F8FAFC] w-[256px] px-4 py-6 shadow-md">
      
      {/* Top Section */}
      <div className="flex flex-col gap-8">
        
        {/* Logo */}
        <div>
          <h1 className="text-[30px] font-bold text-[#0F172A]">
            Talent <span className="text-[#7C3AED]">Flow</span>
          </h1>
          <p className="text-sm text-[#6B7280] mt-1">Instructor Dashboard</p>
        </div>

        {/* Nav Links */}
        <div className="flex flex-col gap-2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActive(item.id)}
              className={`flex items-center gap-3 px-3 py-2  text-sm font-normal w-full transition-colors
                ${active === item.id
                  ? "text-[#7C3AED] bg-[#F3EEFF] border-r-4 border-[#7C3AED]"
                  : "text-[#6B7280] hover:text-[#7C3AED] hover:bg-[#F3EEFF] hover:border-r-4 hover:border-[#7C3AED]"
                }`}
            >
              <img src={item.icon} alt="" className="size-4.5" />
              {item.label}
            </button>
          ))}
        </div>

      </div>

      {/* Bottom Section */}
      <div className="flex flex-col gap-4">
        
        {/* Logout — same active pattern but keeps red tint */}
        <button
          onClick={() => setActive("logout")}
          className={`flex items-center gap-3 px-3 py-2 text-sm font-medium w-full transition-colors
            ${active === "logout"
              ? "text-red-500 bg-red-50 border-r-4 border-red-500"
              : "text-[#6B7280] hover:text-red-500 hover:bg-red-50 hover:border-r-4 hover:border-red-500"
            }`}
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
  )
}