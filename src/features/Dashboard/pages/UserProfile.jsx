import React from "react";
import ProfileSidebar from "../components/UserProfileSidebar";
import ProfileView from "../components/UserProfileView";
import ProfileDetails from "../components/UserProfileDetails";
export default function UserProfile() {
  const [activeLink, setActiveLink] = React.useState("Dashboard");

  return (
    <div className="flex w-full gap-5">
      <ProfileSidebar activeLink={activeLink} setActiveLink={setActiveLink} />

      {activeLink === "Profile" ? (
        <div className="md:grid grid-cols-2">
          <ProfileView />
          <ProfileDetails />
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
