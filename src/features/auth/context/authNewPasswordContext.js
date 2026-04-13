// import React, { createContext, useState, useContext } from 'react';
// import { resetPasswordAPI } from '../services/authApi';
// import { useNavigate } from 'react-router-dom';

// const AuthNewPasswordContext = createContext();

// export const useAuthNewPassword = () => {
//   const context = useContext(AuthNewPasswordContext);
//   if (!context) {
//     throw new Error('useAuthNewPassword must be used within AuthNewPasswordProvider');
//   }
//   return context;
// };

// export const AuthNewPasswordProvider = ({ children }) => {
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(false);
//   const navigate = useNavigate();

//   const authResetPassword = async (passwordData) => {
//     setLoading(true);
//     setError(null);
//     setSuccess(false);

//     try {
//       // API call to reset password
//       const response = await resetPasswordAPI(passwordData);
      
//       if (response.success) {
//         setSuccess(true);
//         // Redirect to login after 2 seconds
//         setTimeout(() => {
//           navigate('/login');
//         }, 2000);
//         return response;
//       } else {
//         throw new Error(response.message || 'Password reset failed');
//       }
//     } catch (err) {
//       setError(err.message || 'An error occurred. Please try again.');
//       throw err;
//     } finally {
//       setLoading(false);
//     }
//   };

//   const resetState = () => {
//     setError(null);
//     setSuccess(false);
//     setLoading(false);
//   };

//   const value = {
//     loading,
//     error,
//     success,
//     authResetPassword,
//     resetState
//   };

//   return (
//     <AuthNewPasswordContext.Provider value={value}>
//       {children}
//     </AuthNewPasswordContext.Provider>
//   );
// };