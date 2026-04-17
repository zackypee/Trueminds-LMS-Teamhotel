import React from "react";
import DashboardLogo from "../../../../assets/dashboardlogo.png";
import UploadIcon from "../../../../assets/uploadicon.png";
import ProfileLogo from "../../../../assets/profilelogo.png";
import LiveLogo from "../../../../assets/livelogo.png";
import AssignmentLogo from "../../../../assets/assignmentlogo.png";

export default function InstructorProfileSidebar({
  activeLink,
  setActiveLink,
}) {
  // 1. Store the name of the active link instead of just true/false

  const menuItems = [
    { name: "Dashboard", icon: DashboardLogo },
    { name: "Upload Courses", icon: UploadIcon },
    { name: "Assignment", icon: AssignmentLogo },
    { name: "Live Sessions", icon: LiveLogo },
  ];

  return (
    <aside
      className="
  /* 1. Dimensions & Positioning */
  hidden lg:flex flex-col 
  w-64 lg:w-150 min-h-screen 
  
  
  /* 2. Colors & Spacing */
  bg-[#F1F5F9] text-[#64748B] 
  px-6 py-10 gap-6 
  
  /* 3. Typography */
  font-[Inter] tracking-normal
"
    >
      <h1 className="font-medium">Learners Dashboard</h1>

      <div className="mt-10 flex flex-col gap-4">
        {menuItems.map((item) => (
          <span
            key={item.name}
            className={`flex items-center cursor-pointer transition-all duration-200 rounded-lg p-3 ${
              activeLink === item.name
                ? "bg-[#ebeffb] text-[#0029F5]"
                : "hover:bg-[#ebeffb]"
            }`}
            onClick={() => setActiveLink(item.name)}
          >
            <img
              src={item.icon}
              alt=""
              aria-hidden="true"
              className="w-6 h-6 mr-3"
            />
            <button className="text-sm font-medium cursor-pointer truncate">
              {item.name}
            </button>
          </span>
        ))}
      </div>

      {/* Pushes profile to bottom if you use 'flex-1' on the div above */}
      <div className="mt-20">
        <span
          className={`flex items-center cursor-pointer transition-all duration-200 rounded-lg p-3 ${
            activeLink === "Profile"
              ? "bg-[#ebeffb] text-[#0029F5]"
              : "hover:bg-[#ebeffb]"
          }`}
          onClick={() => setActiveLink("Profile")}
        >
          <img
            src={ProfileLogo}
            alt=""
            aria-hidden="true"
            className="w-4 h-4 mr-3"
          />
          <button className="text-sm font-medium cursor-pointer">
            View Profile
          </button>
        </span>
      </div>
    </aside>
  );
}
