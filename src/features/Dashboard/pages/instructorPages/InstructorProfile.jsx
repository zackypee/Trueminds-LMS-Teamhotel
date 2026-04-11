import React from "react";
import InstructorProfileSidebar from "../../components/instructorComponents/InstructorProfileSidebar";
import InstructorProfileView from "../../components/instructorComponents/InstructorProfileView";
import InstructorProfileDetails from "../../components/instructorComponents/InstructorProfileDetails";

export default function InstructorProfile() {
  const [activeLink, setActiveLink] = React.useState("Dashboard");

  return (
    <div className="flex w-full gap-5">
      <InstructorProfileSidebar
        activeLink={activeLink}
        setActiveLink={setActiveLink}
      />

      {activeLink === "Profile" ? (
        <div className="md:grid grid-cols-2">
          <InstructorProfileView />
          <InstructorProfileDetails />
        </div>
      ) : (
        <div className="w-full h-96 flex items-center justify-center">
          <p className="text-gray-500 text-lg text-center">
            Select "Profile" from the sidebar to view details.
          </p>
        </div>
      )}
    </div>
  );
}
