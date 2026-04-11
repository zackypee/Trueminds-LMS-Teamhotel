import React from "react";
import UserProfileView from "../../components/userComponents/UserProfileView";
import UserProfileDetails from "../../components/userComponents/UserProfileDetails";
export default function UserProfile() {

  return (
    <div className="flex w-full mt-16 gap-5">
      <UserProfileView />
      <UserProfileDetails />
    </div>
  );
}
