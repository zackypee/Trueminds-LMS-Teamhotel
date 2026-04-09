// // API Base Configuration
// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:3000/api';

// // Helper function for API calls
// const apiCall = async (endpoint, options = {}) => {
//   const token = localStorage.getItem('authToken');
  
//   const defaultHeaders = {
//     'Content-Type': 'application/json',
//     ...(token && { 'Authorization': `Bearer ${token}` }),
//   };

//   const config = {
//     ...options,
//     headers: {
//       ...defaultHeaders,
//       ...options.headers,
//     },
//   };

//   try {
//     const response = await fetch(`${API_BASE_URL}${endpoint}`, config);
//     const data = await response.json();

//     if (!response.ok) {
//       throw new Error(data.message || 'Something went wrong');
//     }

//     return data;
//   } catch (error) {
//     throw error;
//   }
// };

// // Reset Password API
// export const resetPasswordAPI = async (passwordData) => {
//   // Get the reset token from URL or storage
//   const urlParams = new URLSearchParams(window.location.search);
//   const token = urlParams.get('token');
  
//   if (!token) {
//     throw new Error('Reset token is missing. Please request a new password reset link.');
//   }

//   return apiCall('/auth/reset-password', {
//     method: 'POST',
//     body: JSON.stringify({
//       token,
//       password: passwordData.password,
//       confirmPassword: passwordData.confirmPassword
//     }),
//   });
// };

// // Request Password Reset (Send OTP)
// export const requestPasswordResetAPI = async (email) => {
//   return apiCall('/auth/forgot-password', {
//     method: 'POST',
//     body: JSON.stringify({ email }),
//   });
// };

// // Verify OTP
// export const verifyOTPAPI = async (email, otp) => {
//   return apiCall('/auth/verify-otp', {
//     method: 'POST',
//     body: JSON.stringify({ email, otp }),
//   });
// };