// import { resetPasswordAPI } from './authApi';

// export const authService = {
//   async resetPassword(passwordData) {
//     try {
//       const response = await resetPasswordAPI(passwordData);
//       return response;
//     } catch (error) {
//       throw error;
//     }
//   }
// };
import api from "./authApi";

// Validate email and password only !!note this 
const validateInputs = (email, password) => {
  const errors = {};

  if (!email) errors.email = "Email is required";
  if (!password) errors.password = "Password is required";

  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Enter a valid email address";
  }
  if (password && password.length < 6) {
    errors.password = "Password must be at least 6 characters";
  }

  return errors;
};

//check this
const storeSession = (token, user) => {
  sessionStorage.setItem("authToken", token);
  sessionStorage.setItem("user", JSON.stringify(user));
};

export const loginUser = async (email, password) => {
  // Step 1: Validate inputs before hitting the API
  const validationErrors = validateInputs(email, password);
  if (Object.keys(validationErrors).length > 0) {
    const err = new Error("Validation failed");
    err.validationErrors = validationErrors;
    throw err;
  }

  // Step 2: Send email + password to API
  const response = await api.post("/auth/login", { email, password });
  const { token, user } = response.data;

  // Step 3: Store session and return
  storeSession(token, user);
  return { token, user };
};

// zackypee Added resetPassword
export const resetPassword = async (newPasswordData) => {
  const response = await api.post("/auth/reset-password", newPasswordData);
  return response.data; // expects { success: true, message: "..." }
};

//zacky added authReqPasswordReset
export const authReqPasswordReset = async (email) => {
  const response = await api.post("/auth/forgot-password", { email });
  return response.data; // expects { success: true, message: "..." }
};


//zacky added verifyResetOtp
export const verifyResetOtp = async (data) => {
  const response = await api.post("/auth/verify-reset-otp", data);
  return response.data; // expects { success: true, data: { token: "..." } }
};
