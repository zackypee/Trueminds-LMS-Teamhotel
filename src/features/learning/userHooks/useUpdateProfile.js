import { useState } from "react";
import { updateUserApi } from "../userApi";

export default function useUpdateProfile() {
  const [isUpdating, setIsUpdating] = useState(false);
  const [updateError, setUpdateError] = useState(null);

  const updateProfile = async (newData) => {
    setIsUpdating(true);
    setUpdateError(null);
    try {
      const data = await updateUserApi(newData);
       return data;
    } catch (err) {
      setUpdateError(err.message || "Failed to update profile");
      throw err;
    } finally {
      setIsUpdating(false);
    }
  };

  return { updateProfile, isUpdating, updateError };
}