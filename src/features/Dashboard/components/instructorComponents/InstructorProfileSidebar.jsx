// 
import React, { useState } from "react";
import DashboardLogo from "../../../../assets/dashboardlogo.png";
import UploadIcon from "../../../../assets/uploadicon.png";
import ProfileLogo from "../../../../assets/profilelogo.png";
import LiveLogo from "../../../../assets/livelogo.png";
import AssignmentLogo from "../../../../assets/assignmentlogo.png";

export default function InstructorProfileSidebar() {
  const [activeLink, setActiveLink] = useState("Dashboard");

  const menuItems = [
    { name: "Dashboard", icon: DashboardLogo },
    { name: "Upload Courses", icon: UploadIcon },
    { name: "Assignment", icon: AssignmentLogo },
    { name: "Live Sessions", icon: LiveLogo },
  ];

  const getLinkClass = (name) =>
    `flex items-center gap-3 p-3 rounded-lg transition-all duration-200 text-sm font-medium cursor-pointer ${
      activeLink === name
        ? "bg-[#ebeffb] text-[#0029F5]"
        : "text-[#64748B] hover:bg-[#ebeffb]"
    }`;

  return (
    <aside className="hidden lg:flex flex-col w-64 min-h-screen bg-[#F1F5F9] px-6 py-10 font-[Inter]">
      <h1 className="font-medium text-[#64748B]">Learners Dashboard</h1>

      <nav className="mt-10 flex flex-col gap-1">
        {menuItems.map((item) => (
          <div
            key={item.name}
            className={getLinkClass(item.name)}
            onClick={() => setActiveLink(item.name)}
          >
            <img
              src={item.icon}
              alt=""
              aria-hidden="true"
              className={`w-6 h-6 shrink-0 ${
                activeLink === item.name ? "opacity-100" : "opacity-60"
              }`}
            />
            <span>{item.name}</span>
          </div>
        ))}
      </nav>

      {/* Profile at bottom */}
      <div className="mt-auto">
        <div
          className={getLinkClass("Profile")}
          onClick={() => setActiveLink("Profile")}
        >
          <img
            src={ProfileLogo}
            alt=""
            aria-hidden="true"
            className={`w-5 h-5 shrink-0 ${
              activeLink === "Profile" ? "opacity-100" : "opacity-60"
            }`}
          />
          <span>View Profile</span>
        </div>
      </div>
    </aside>
  );
}