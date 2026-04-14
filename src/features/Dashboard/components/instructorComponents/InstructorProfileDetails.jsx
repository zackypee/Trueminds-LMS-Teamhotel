import React from "react";
import PortfolioLogo from "../../../../assets/portfoliologo.png"; // Import a portfolio icon for showcasing work
import MentorLogo from "../../../../assets/mentorlogo.png"; // Import a mentor icon for guidance
import FlowLogo from "../../../../assets/flowlogo.png"; // Import a flow icon for workflow
export default function ProfileDetails() {
  return (
    <main className="max-w-full w-full flex flex-col gap-6 p-4 md:p-5">
      {/* Professional Details Section */}
      <div className="bg-[#FFFFFF] p-5 rounded-2xl shadow-sm border border-gray-100">
        <span className="flex gap-4">
          <img src={PortfolioLogo} alt="badge" className="w-6 h-6" />
          <h2 className="font-bold text-lg">Professional Details</h2>
        </span>

        <div>
          <p className="uppercase mt-8 text-[#7B7488] text-sm">
            Primary Skills
          </p>
          {/* flex-wrap ensures skills stack on mobile */}
          <span className="flex flex-wrap gap-3 text-sm mt-2">
            <p className="font-medium bg-[#F3EBFA] p-2 rounded-md"> Figma </p>
            <p className="font-medium bg-[#F3EBFA] p-2 rounded-md">
              {" "}
              User Research{" "}
            </p>
            <p className="font-medium bg-[#F3EBFA] p-2 rounded-md">
              {" "}
              Wireframe{" "}
            </p>
          </span>

          {/* grid-cols-1 for mobile, grid-cols-2 for desktop */}
          <div className="mt-5 grid grid-cols-2 sm:grid-cols-2 gap-6">
            <span>
              <p className="uppercase mt-4 text-xs text-[#7B7488]">
                Experience level
              </p>
              <p className="font-semibold"> Instructor </p>
            </span>
            <span>
              <p className="uppercase mt-4 text-xs text-[#7B7488]">
                Portfolio Link
              </p>
              <p className="font-semibold text-[#660FE6] break-all">
                {" "}
                Ade.portfolio
              </p>
            </span>
          </div>
        </div>
      </div>

      {/* Talent Flow Details Section */}
      <div className="bg-[#CCC3D91A] p-5 rounded-2xl">
        <span className="flex gap-4">
          <img src={FlowLogo} alt="badge" className="w-6 h-6" />
          <p className=" font-bold text-lg">Talent Flow Details</p>
        </span>

        <div className="mt-5 grid grid-cols-2 sm:grid-cols-2 gap-6">
          <span>
            <p className="uppercase mt-4 text-[#7B7488] text-sm">
              Assigned class
            </p>
            <span className="flex items-center gap-3">
              <img
                src={MentorLogo}
                alt="mentorlogo"
                className="w-6 h-6 bg-[#F3EBFA] p-1 rounded-2xl"
              />
              <p className="font-medium truncate"> Dr. Silas Okeke </p>
            </span>
          </span>
          <span>
            <p className="uppercase mt-4 text-[#7B7488] text-sm">
              Current Cohort
            </p>
            <p className="font-medium"> Nexus Spring 2026 </p>
          </span>
          <span>
            <p className="uppercase mt-4 text-[#7B7488] text-sm">
              Enrolled Date
            </p>
            <p className="font-medium"> Jan 12, 2026 </p>
          </span>
          <span>
            <p className="uppercase mt-4 text-[#7B7488] text-sm">
              Current Course
            </p>
            <p className="font-medium"> Advanced Visual System</p>
          </span>
        </div>
      </div>
    </main>
  );
}
