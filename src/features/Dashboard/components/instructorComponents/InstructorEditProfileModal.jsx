// import React from "react";
// import InstructorEditPersonalDetails from "./InstructorEditPersonalDetails"
// import InstructorEditProfileDetails from "./InstructorEditProfileDetails"
// import useUpdateProfile from "../../../../globalHooks/useUpdateProfile";
// import { useState, useEffect } from "react";
// import { uploadToCloudinary } from "../../../../globalApi/cloudinaryApi";

// export default function InstructorEditProfileModal({ onClose, userProfile, setRefresh }) {
//   const { handleUpdateProfile, updateError, isUpdating } = useUpdateProfile();

//   const [imageFile, setImageFile] = useState(null);
//   const [preview, setPreview] = useState(null);
  
  
//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     setImageFile(file);

//     if (file) {
//       setPreview(URL.createObjectURL(file));
//     }
//   };

//   const handleSave = async (formData) => {
//     try {
//       let avatarUrl = null;

//       // Upload image to Cloudinary
//       if (imageFile) {
//         avatarUrl = await uploadToCloudinary(imageFile);
//       }

//       // Send ONLY URL to backend 
//       const payload = {
//         name: formData.name,
//         email: formData.email,
//         phone: formData.phone,
//         location: formData.location,
//         dob: formData.dob,
//         bio: formData.bio,
//         avatar: avatarUrl, 
//       };

//       await handleUpdateProfile(payload);

//       setRefresh((prev) => !prev);
//       onClose();

//     } catch (err) {
//       console.error("Update Error:", err.response?.data || err.message);
//     }
//   };

//   return (
//     <div className="bg-[#F4F6FA] px-4 py-10 md:px-8 md:py-10">
//       <div className="mb-6">
//         <h1 className="text-2xl font-bold text-[#001C3B] leading-tight">Edit Profile</h1>
//         <p className="text-sm text-[#455F87] mt-1">
//           Manage your professional identity and learning preferences.
//         </p>
//       </div>
//       {updateError && <p className="text-red-500 text-sm mb-4">{updateError}</p>}
//       <div className="flex flex-col lg:flex-row gap-5 items-start"> 

//         <InstructorEditProfileDetails 
//          userProfile={userProfile} 
//          preview={preview}
//          handleImageChange={handleImageChange}
//         /> 

//         <InstructorEditPersonalDetails
//           onSave={handleSave}
//           onCancel={onClose} 
//           isUpdating={isUpdating} 
          
//         />
//       </div>
//     </div>
//   );
// }

import React, { useState } from "react";
import InstructorEditPersonalDetails from "./InstructorEditPersonalDetails";
import InstructorEditProfileDetails from "./InstructorEditProfileDetails";
import useUpdateProfile from "../../../../globalHooks/useUpdateProfile";
import { uploadToCloudinary } from "../../../../globalApi/cloudinaryApi";

export default function InstructorEditProfileModal({ onClose, userProfile, setRefresh }) {
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

      if (imageFile) {
        avatarUrl = await uploadToCloudinary(imageFile);
      }

      const payload = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        location: formData.location,
        dob: formData.dob,
        bio: formData.bio,
        avatar: avatarUrl || userProfile.avatar, // prevent null overwrite
      };

      await handleUpdateProfile(payload);

      setRefresh((prev) => !prev);
      onClose();
    } catch (err) {
      console.error("Update Error:", err.response?.data || err.message);
    }
  };

  return (
    /*  THIS IS THE IMPORTANT PART */
    <div
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
      onClick={onClose} // click outside closes modal
    >
      {/* STOP CLICK FROM CLOSING WHEN CLICKING INSIDE */}
      <div
        className="bg-[#F4F6FA] w-full max-w-4xl px-4 py-10 md:px-8 md:py-10 rounded-xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-xl font-bold"
        >
          ✕
        </button>

        {/* HEADER */}
        <div className="mb-6">
          <h1 className="text-2xl font-bold text-[#001C3B]">
            Edit Profile
          </h1>
          <p className="text-sm text-[#455F87] mt-1">
            Manage your professional identity and learning preferences.
          </p>
        </div>

        {/* ERROR */}
        {updateError && (
          <p className="text-red-500 text-sm mb-4">{updateError}</p>
        )}

        {/* CONTENT */}
        <div className="flex flex-col lg:flex-row gap-5 items-start">
          <InstructorEditProfileDetails
            userProfile={userProfile}
            preview={preview}
            handleImageChange={handleImageChange}
          />

          <InstructorEditPersonalDetails
            onSave={handleSave}
            onCancel={onClose}
            isUpdating={isUpdating}
          />
        </div>
      </div>
    </div>
  );
}