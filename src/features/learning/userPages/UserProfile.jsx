import React from "react";
import UserProfileView from "../userComponents/UserProfileView";
import UserProfileDetails from "../userComponents/UserProfileDetails";
import useUserProfile from "../../../globalHooks/useUserProfile";
import LoadingState from "../../../components/LoadingState";
import ErrorMessage from "../../../components/ErrorMessage";

function UserProfile() {
  const { userProfile, loading, error } = useUserProfile();
 
  if(loading){
   return (
     <LoadingState/>
    )
  }

  if(error){
   return (
     <ErrorMessage message={error} className="flex items-center justify-center h-full bg-white"/>
    )
  }

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
