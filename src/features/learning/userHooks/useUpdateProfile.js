import { useState } from "react";
import { updateUserApi } from "../userApi"; // Import the real API function we discussed

export default function useUpdateProfile() {
  const [isUpdating, setIsUpdating] = useState(false);
  const [updateError, setUpdateError] = useState(null);

  const updateProfile = async (newData) => {
    setIsUpdating(true);
    setUpdateError(null);
    try {
      const response = await updateUserApi(newData);
      if (!response) {
        throw new Error("Update failed");
      }
      return { success: true, data: response.data };
    } catch (err) {
      setUpdateError(err.message || "Failed to update profile");
      return { success: false, error: err.message };
    } finally {
      setIsUpdating(false);
    }
  };

  return { updateProfile, isUpdating, updateError };
}
