import React from "react";
import EditPersonalDetails from "./EditPersonalDetails";
import EditProfileDetails from "./EditProfileDetails";
import useUpdateProfile from "../../../globalHooks/useUpdateProfile";
import { useState, useEffect } from "react";

export default function UserEditProfileModal({ onClose, userProfile, setRefresh }) {
  const { handleUpdateProfile, updateError, isUpdating } = useUpdateProfile();

  const [imageFile, setImageFile] = useState(null);
   const [preview, setPreview] = useState(null);

  // Load image from localStorage on mount
  useEffect(() => {
    const savedImage = localStorage.getItem("profileImage");

    if (savedImage) {
      setPreview(savedImage);
    }
  }, []);
  
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    if (file){
     const reader = new FileReader();

      reader.onloadend = () => {
        const base64 = reader.result;

        // save to localStorage
        localStorage.setItem("profileImage", base64);

        // update preview
        setPreview(base64);

      }

      reader.readAsDataURL(file);

    }

  };

  const handleSave = async (formData) => {
    try {
      
      const data = new FormData();

      data.append("name", formData.name)
      data.append("email", formData.email);
      data.append("phone", formData.phone);
      data.append("location", formData.location);
      data.append("dob", formData.dob);
      data.append("bio", formData.bio);
      if (imageFile) {
        data.append("avatar", imageFile); 
      }

      await handleUpdateProfile(data);
      setRefresh(prev=>!prev)
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