import { useEffect, useState } from "react";
import { getUserProfile } from "../globalApi/userApi";


const useUserProfile = () => {
  const [userProfile, setUserProfile] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUserProfile = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await getUserProfile();
      if (!response.success) {
        setError(response.message || "Failed to fetch user profile");
        return false;
      }

      setUserProfile(response?.data?.user); // Assuming API returns { success: true, data: { user: {...} } }
      return true;
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
      return false;
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserProfile();
  }, []); // Fetch profile on mount

  console.log("Fetched user profile:", userProfile);

  return {
    userProfile,
    loading,
    error,
    
  };
};

export default useUserProfile;
