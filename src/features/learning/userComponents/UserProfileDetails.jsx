// 

import React from "react";
import BadgeLogo from "../../../assets/badgelogo.png";
import CalenderLogo from "../../../assets/calenderlogo.png";
import TeamPlayer from "../../../assets/teamplayerlogo.png";
import PlusLogo from "../../../assets/pluslogo.png";
import PortfolioLogo from "../../../assets/portfoliologo.png";
import MentorLogo from "../../../assets/mentorlogo.png";
import FlowLogo from "../../../assets/flowlogo.png";

export default function UserProfileDetails() {
  return (
    <main className="max-w-full w-full flex flex-col gap-6 p-4 md:p-5">
      {/* Earned Badges Section */}
      <div className="bg-[#EDE9FE] p-4 md:p-6 rounded-3xl">
        <p className="mb-5 font-medium">Earned Badges</p>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 gap-4">
          <span className="text-center flex flex-col items-center">
            <div className="bg-[#FFFFFF] py-5 w-full flex justify-center rounded-2xl">
              <img src={BadgeLogo} alt="badge" className="w-6 h-6" />
            </div>
            <h2 className="text-xs mt-2 uppercase text-[#7B7488]">Quick Learner</h2>
          </span>

          <span className="text-center flex flex-col items-center">
            <div className="bg-[#FFFFFF] py-5 w-full flex justify-center rounded-2xl">
              <img src={TeamPlayer} alt="badge" className="w-6 h-6" />
            </div>
            <h2 className="text-xs mt-2 uppercase text-[#7B7488]">Team Player</h2>
          </span>

          <span className="text-center flex flex-col items-center">
            <div className="bg-[#FFFFFF] py-5 w-full flex justify-center rounded-2xl">
              <img src={CalenderLogo} alt="badge" className="w-6 h-6" />
            </div>
            <h2 className="text-xs mt-2 uppercase text-[#7B7488]">Consistent</h2>
          </span>

          <span className="text-center flex flex-col items-center">
            <div className="bg-[#FFFFFF] py-5 w-full flex justify-center rounded-2xl">
              <img src={PlusLogo} alt="badge" className="w-6 h-6" />
            </div>
          </span>
        </div>
      </div>

      {/* Professional Details Section */}
      <div className="bg-[#FFFFFF] p-5 rounded-2xl shadow-sm border border-gray-100">
        <span className="flex gap-4">
          <img src={PortfolioLogo} alt="badge" className="w-6 h-6" />
          <h2 className="font-bold text-lg">Professional Details</h2>
        </span>
        <div>
          <p className="uppercase mt-8 text-[#7B7488] text-sm">Primary Skills</p>
          <span className="flex flex-wrap gap-3 text-sm mt-2">
            <p className="font-medium bg-[#F3EBFA] p-2 rounded-md">Figma</p>
            <p className="font-medium bg-[#F3EBFA] p-2 rounded-md">User Research</p>
            <p className="font-medium bg-[#F3EBFA] p-2 rounded-md">Wireframe</p>
          </span>
          <div className="mt-5 grid grid-cols-2 sm:grid-cols-2 gap-6">
            <span>
              <p className="uppercase mt-4 text-xs text-[#7B7488]">Experience level</p>
              <p className="font-semibold">junior(intern)</p>
            </span>
            <span>
              <p className="uppercase mt-4 text-xs text-[#7B7488]">Portfolio Link</p>
              <p className="font-semibold text-[#660FE6] break-all">Chika.intern</p>
            </span>
          </div>
        </div>
      </div>

      {/* Talent Flow Details Section */}
      <div className="bg-[#CCC3D91A] p-5 rounded-2xl">
        <span className="flex gap-4">
          <img src={FlowLogo} alt="badge" className="w-6 h-6" />
          <p className="font-bold text-lg">Talent Flow Details</p>
        </span>
        <div className="mt-5 grid grid-cols-2 sm:grid-cols-2 gap-6">
          <span>
            <p className="uppercase mt-4 text-[#7B7488] text-sm">Assigned Mentor</p>
            <span className="flex items-center gap-3">
              <img src={MentorLogo} alt="mentorlogo" className="w-6 h-6 bg-[#F3EBFA] p-1 rounded-2xl" />
              <p className="font-medium truncate">Dr. Silas Okeke</p>
            </span>
          </span>
          <span>
            <p className="uppercase mt-4 text-[#7B7488] text-sm">Cohort Group</p>
            <p className="font-medium">Nexus Spring 2026</p>
          </span>
          <span>
            <p className="uppercase mt-4 text-[#7B7488] text-sm">Enrolled Date</p>
            <p className="font-medium">Jan 12, 2026</p>
          </span>
          <span>
            <p className="uppercase mt-4 text-[#7B7488] text-sm">Current Course</p>
            <p className="font-medium">Advanced Visual System</p>
          </span>
        </div>
      </div>
    </main>
  );
}