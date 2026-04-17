import React from "react";
import EditPersonalDetails from "./EditPersonalDetails";
import EditProfileDetails from "./EditProfileDetails";
import useUpdateProfile from "../../../globalHooks/useUpdateProfile";
import { useState, useEffect } from "react";
import { uploadToCloudinary } from "../../../globalApi/cloudinaryApi";

export default function UserEditProfileModal({ onClose, userProfile, setRefresh }) {
  const { handleUpdateProfile, updateError, isUpdating } = useUpdateProfile();

  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState(null);
  
  
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);

    if (file) {
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSave = async (formData) => {
    try {
      let avatarUrl = null;

      // Upload image to Cloudinary
      if (imageFile) {
        avatarUrl = await uploadToCloudinary(imageFile);
      }

      // Send ONLY URL to backend 
      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        location: formData.location,
        dob: formData.dob,
        bio: formData.bio,
        avatar: avatarUrl, 
      };

      await handleUpdateProfile(payload);

      setRefresh((prev) => !prev);
      onClose();

    } catch (err) {
      console.error("Update Error:", err.response?.data || err.message);
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

        <EditProfileDetails 
         userProfile={userProfile} 
         preview={preview}
         handleImageChange={handleImageChange}
        /> 

        <EditPersonalDetails
          onSave={handleSave}
          onCancel={onClose} 
          isUpdating={isUpdating} 
          
        />
      </div>
    </div>
  );
}