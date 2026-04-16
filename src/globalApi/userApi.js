import api from "../services/api";

export const getUserProfile = async () => {
  try {
    const response = await api.get("/users/profile");
    console.log("API response for user profile:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error fetching profile:", error);
    throw error; // Rethrow so your hook can catch it
  }
};

export const updateUserApi = async (newData) => {
  try {
    const response = await api.patch("/users/profile", newData);
    return response.data;
  } catch (error) {
    console.error("Update Profile Error:", error);
    throw error; // Pass the error up so your UI can show a notification
  }
};



