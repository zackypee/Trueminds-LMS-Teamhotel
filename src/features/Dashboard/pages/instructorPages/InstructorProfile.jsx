import React from "react";
import InstructorProfileSidebar from "../../components/instructorComponents/InstructorProfileSidebar";
import InstructorProfileView from "../../components/instructorComponents/InstructorProfileView";
import InstructorProfileDetails from "../../components/instructorComponents/InstructorProfileDetails";

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