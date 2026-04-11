import React from "react";
import InstructorProfileSidebar from "../components/InstructorProfileSidebar";
import InstructorProfileView from "../components/InstructorProfileView";
import InstructorProfileDetails from "../components/InstructorProfileDetails";

export default function InstructorProfile() {
  const [activeLink, setActiveLink] = React.useState("Dashboard");

  return (
    <div className="flex w-full gap-5">
      <div className="md:grid grid-cols-2">
          <InstructorProfileView />
          <InstructorProfileDetails />
        </div>
      
    </div>
  );
}