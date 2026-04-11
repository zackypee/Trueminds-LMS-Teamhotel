import React from "react";
<<<<<<< HEAD:src/features/Dashboard/pages/UserProfile.jsx
import UserProfileView from "../components/UserProfileView";
import UserProfileDetails from "../components/UserProfileDetails";
=======
import ProfileSidebar from "../../components/userComponents/UserProfileSidebar";
import ProfileView from "../../components/userComponents/UserProfileView";
import ProfileDetails from "../../components/userComponents/UserProfileDetails";
>>>>>>> f5902d212f54aae8d8830c1138dbdbb01b6c7d9d:src/features/Dashboard/pages/userPages/UserProfile.jsx
export default function UserProfile() {

  return (
    <div className="flex w-full mt-16 gap-5">
      <UserProfileView />
      <UserProfileDetails />
    </div>
  );
}
