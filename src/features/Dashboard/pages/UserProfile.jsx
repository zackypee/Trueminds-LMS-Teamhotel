import React from "react";
import UserProfileView from "../components/UserProfileView";
import UserProfileDetails from "../components/UserProfileDetails";
export default function UserProfile() {

  return (
    <div className="flex w-full mt-16 gap-5">
      <UserProfileView />
      <UserProfileDetails />
    </div>
  );
}
