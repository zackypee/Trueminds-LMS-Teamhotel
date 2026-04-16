// import { useEffect, useState } from "react";
// import { getUserProfile } from "../userApi";
// import { updateUserApi } from "../userApi";

// const useUserProfile = () => {
//   const [userProfile, setUserProfile] = useState({});
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const fetchUserProfile = async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       const response = await getUserProfile();
//       if (!response.success) {
//         setError(response.message || "Failed to fetch user profile");
//         return false;
//       }

//       setUserProfile(response?.data?.user); // Assuming API returns { success: true, data: { user: {...} } }
//       return true;
//     } catch (err) {
//       setError(err.response?.data?.message || "Something went wrong");
//       return false;
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchUserProfile();
//   }, []); // Fetch profile on mount

//   console.log("Fetched user profile:", userProfile);

//   const handleUpdate = async (formattedData) => {
//     try {
//       const updatedUser = await updateUserApi(formattedData);
//       // Success! Now update the local state so the UI reflects changes immediately
//       setUserProfile(updatedUser.data.user);
//       return { success: true, data: updatedUser.data };
//     } catch (err) {
//       const errorMessage =
//         err.response?.data?.message || "Failed to update profile";
//       setError(errorMessage);
//       return { success: false, error: errorMessage };
//     }
//   };

//   return {
//     userProfile,
//     loading,
//     error,
//     handleUpdate, // Expose the update function to the component
//   };
// };

// export default useUserProfile;

import { useEffect, useState } from "react";
import { getUserProfile } from "../globalApi/userApi";



const useUserProfile = () => {
  const [userProfile, setUserProfile] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [refresh, setRefresh] = useState(false)
  const fetchUserProfile = async () => {


    setLoading(true);
    setError(null);
    try {
      const response = await getUserProfile();
      setUserProfile(response?.data?.user || response.user);
    } catch (err) {
      setError(err.response?.data?.message || "Failed to fetch profile");

    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUserProfile();

  }, [refresh]);

  return { userProfile, loading, error, fetchUserProfile, setRefresh };
};

export default useUserProfile;