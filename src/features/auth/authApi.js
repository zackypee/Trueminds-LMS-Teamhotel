import api from "../../services/api";

//login user 
export const loginUser = async (userData) => {
  const response = await api.post("/auth/login", userData);
  return response.data;
};

export const logoutUser = async (data) => {
  const response = await api.post("auth/logout", data)
  return response.data;
}

//Register new user 
export const registerNewUser = async (newUserData) => {
  const response = await api.post("/auth/register", newUserData);
  return response.data
};

// resetPassword
export const resetPassword = async (newPasswordData) => {
  const response = await api.post("/auth/reset-password", newPasswordData);
  return response.data
};

//authReqPasswordReset
export const authReqPasswordReset = async (email) => {
  const response = await api.post("/auth/forgot-password", { email: email });
  return response.data; 

};

//verifyResetOtp
export const verifyResetOtp = async (data) => {
  const response = await api.post("/auth/verify-reset-otp", data);
  return response.data; 
};
