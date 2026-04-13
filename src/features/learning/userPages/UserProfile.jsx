import React from "react";
import UserProfileView from "../userComponents/UserProfileView";
import UserProfileDetails from "../userComponents/UserProfileDetails";
function UserProfile() {

  return (
    <div className="flex w-full mt-16 gap-5 p-4">
      <UserProfileView />
      <UserProfileDetails  />
    </div>
  );
}


export default UserProfile;
