import React from "react";
import ProfileSidebar from "../components/ProfileSidebar";
import ProfileView from "../components/ProfileView";
import ProfileDetails from "../components/ProfileDetails";
export default function Profile() {
  return (
    <div className="flex w-full gap-5">
      <ProfileSidebar />
      <div className="grid grid-cols-2">
        <ProfileView />
        <ProfileDetails />
      </div>
    </div>
  );
}
