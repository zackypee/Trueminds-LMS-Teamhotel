import React from "react";
import EditPersonalDetails from "./EditPersonalDetails";
import useUpdateProfile from "../userHooks/useUpdateProfile";
import useUserProfile from "../userHooks/useUserProfile";
import EditProfileDetails from "./EditProfileDetails";

export default function UserEditProfileModal({ onUpdate, onClose }) {
  const { userProfile, fetchUserProfile } = useUserProfile();
  const { updateProfile, isUpdating, updateError } = useUpdateProfile();

  const handleSave = async (formData) => {
    try {
      await updateProfile(formData);
      await fetchUserProfile(); // refresh profile after update
      onClose();                // close modal on success
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <div className="bg-[#F4F6FA] px-4 py-10 md:px-8 md:py-10">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-[#001C3B] leading-tight">Edit Profile</h1>
        <p className="text-sm text-[#455F87] mt-1">
          Manage your professional identity and learning preferences.
        </p>
      </div>
      {updateError && <p className="text-red-500 text-sm mb-4">{updateError}</p>}
      <div className="flex flex-col lg:flex-row gap-5 items-start">
        <EditProfileDetails userProfile={userProfile} />  {/* ✅ pass profile data */}
        <EditPersonalDetails
          onSave={handleSave}
          onCancel={onClose}   //  closes modal on cancel
        />
      </div>
    </div>
  );
}