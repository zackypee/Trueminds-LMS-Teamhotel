import React from "react";
import UserProfileView from "../userComponents/UserProfileView";
import UserProfileDetails from "../userComponents/UserProfileDetails";
import useUserProfile from "../userHooks/useUserProfile";
function UserProfile() {
  const { userProfile, loading, error } = useUserProfile();

  return (
    <div className="flex w-full gap-5 p-4">
      <UserProfileView
        userProfile={userProfile}
        loading={loading}
        error={error}
      />
      <UserProfileDetails
        userProfile={userProfile}
        loading={loading}
        error={error}
      />
    </div>
  );
}

export default UserProfile;
