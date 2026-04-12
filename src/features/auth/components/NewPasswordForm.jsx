import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const NewPasswordForm = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    newPassword: '',
    confirmPassword: ''
  });
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const [passwordStrength, setPasswordStrength] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  // Check if we have a token in the URL (for demo purposes)
  const [hasValidToken, setHasValidToken] = useState(true);

  useEffect(() => {
    // Check for token in URL (optional - for demo flow)
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    
    // For demo: if no token, we can still show the form, but show a warning
    if (!token) {
      console.log('No reset token found. For demo purposes, we\'ll still allow reset.');
      // In a real app, you'd redirect to request reset page
    }
    
    return () => {
      // Cleanup if needed
    };
  }, []);

  const checkPasswordStrength = (password) => {
    if (password.length === 0) return '';
    if (password.length < 8) return 'weak';
    
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumbers = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);
    
    const strengthCount = [hasUpperCase, hasLowerCase, hasNumbers, hasSpecialChar].filter(Boolean).length;
    
    if (strengthCount >= 3 && password.length >= 8) {
      return 'strong';
    } else if (strengthCount >= 2 && password.length >= 8) {
      return 'medium';
    } else {
      return 'weak';
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
    
    if (errors[id]) {
      setErrors({
        ...errors,
        [id]: ''
      });
    }
    
    if (id === 'newPassword') {
      const strength = checkPasswordStrength(value);
      setPasswordStrength(strength);
    }
    
    if (id === 'newPassword' && errors.confirmPassword) {
      setErrors({
        ...errors,
        confirmPassword: ''
      });
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.newPassword) {
      newErrors.newPassword = 'Password is required';
    } else if (formData.newPassword.length < 8) {
      newErrors.newPassword = 'Password must be at least 8 characters';
    }
    
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.newPassword !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Mock API call 
  const mockResetPasswordAPI = async (passwordData) => {
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Validate password
    if (passwordData.password !== passwordData.confirmPassword) {
      throw new Error('Passwords do not match');
    }
    
    if (passwordData.password.length < 8) {
      throw new Error('Password must be at least 8 characters');
    }
    
    // Check password strength 
    const strength = checkPasswordStrength(passwordData.password);
    if (strength === 'weak') {
      throw new Error('Please use a stronger password (mix of letters, numbers, and symbols)');
    }
    
    // Simulate successful reset
    console.log('Password reset successful! New password:', passwordData.password);
    
    return {
      success: true,
      message: 'Password reset successfully'
    };
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setLoading(true);
    setError(null);
    
    try {
      // Call mock API
      const result = await mockResetPasswordAPI({
        password: formData.newPassword,
        confirmPassword: formData.confirmPassword
      });
      
      if (result.success) {
        setSuccess(true);
        // Redirect to login after 2 seconds
        setTimeout(() => {
          navigate('/login');
        }, 2000);
      }
    } catch (err) {
      setError(err.message || 'An error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const toggleNewPasswordVisibility = () => {
    setShowNewPassword(!showNewPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  // Success message
  if (success) {
    return (
      <div className="w-full md:w-1/2 px-6 md:px-12 py-8 md:py-12">
        <div className="max-w-md mx-auto w-full text-center">
          <div className="bg-green-50 border border-green-200 rounded-lg p-8 mb-6">
            <svg className="w-16 h-16 text-green-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
            </svg>
            <h3 className="text-xl font-bold text-green-800 mb-2">Password Reset Successful!</h3>
            <p className="text-green-600">Your password has been reset successfully.</p>
            <p className="text-green-600 mt-2">Redirecting to login page...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full md:w-1/2 px-6 md:px-12 py-8 md:py-12">
      <div className="max-w-md mx-auto w-full">
        <h1 className="md:text-[26px] font-bold text-[#1F2937] leading-[29px] mt-10 mb-2 font-inter">
          Reset Password
        </h1>
        <p className="text-[16px] font-normal text-[#6B7280] font-inter">
          Enter the email associated with tour account and we'll send the OTP to reset your password
        </p>

        {/* Demo Info Box - Remove this when API is ready */}
        <div className="bg-blue-50 border border-blue-200 rounded-md p-3 mb-6 mt-6">
          <p className="text-sm text-blue-700">
            <strong>Demo Mode:</strong> No API required. Any password with 8+ characters will work.
            <br />
            <span className="text-xs">Password strength indicator will show weak/medium/strong based on complexity.</span>
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-2 rounded-md text-sm">
              {error}
            </div>
          )}

          {/* New Password Field */}
          <div>
            <label 
              htmlFor="newPassword" 
              className="text-[14px] font-semibold text-[#1F2937] leading-[21px] mb-1 mt-10 block font-inter"
            >
              New Password
            </label>
            <div className="relative">
              <input
                type={showNewPassword ? "text" : "password"}
                id="newPassword"
                value={formData.newPassword}
                onChange={handleChange}
                placeholder="********"
                className={`w-full border ${errors.newPassword ? 'border-red-500' : 'border-[#D1D5DB]'} rounded-md p-3 pr-10 focus:outline-none focus:ring-2 focus:ring-[#06020e] focus:border-transparent`}
              />
              <button
                type="button"
                onClick={toggleNewPasswordVisibility}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showNewPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.773 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )}
              </button>
            </div>
            
            {/* Password Strength Indicator */}
            {formData.newPassword && (
              <div className="mt-2">
                <div className="flex items-center gap-2">
                  <div className="flex-1 h-1 rounded-full bg-gray-200 overflow-hidden">
                    <div 
                      className={`h-full transition-all duration-300 ${
                        passwordStrength === 'strong' ? 'w-full bg-green-500' :
                        passwordStrength === 'medium' ? 'w-2/3 bg-yellow-500' :
                        passwordStrength === 'weak' ? 'w-1/3 bg-red-500' : 'w-0'
                      }`}
                    />
                  </div>
                  <span className={`text-xs font-medium ${
                    passwordStrength === 'strong' ? 'text-green-600' :
                    passwordStrength === 'medium' ? 'text-yellow-600' :
                    passwordStrength === 'weak' ? 'text-red-600' : 'text-gray-500'
                  }`}>
                    {passwordStrength === 'strong' ? 'Strong' :
                     passwordStrength === 'medium' ? 'Medium' :
                     passwordStrength === 'weak' ? 'Weak' : ''}
                  </span>
                </div>
                {passwordStrength === 'weak' && formData.newPassword.length >= 8 && (
                  <p className="text-red-500 text-xs mt-1">
                    Weak password. Add uppercase, numbers, or special characters to make it stronger.
                  </p>
                )}
                {passwordStrength === 'medium' && (
                  <p className="text-yellow-600 text-xs mt-1">
                    Medium strength. Add special characters for stronger password.
                  </p>
                )}
                {passwordStrength === 'strong' && (
                  <p className="text-green-600 text-xs mt-1">
                    Strong password! Good job.
                  </p>
                )}
              </div>
            )}
            
            {errors.newPassword && (
              <p className="text-red-500 text-xs mt-1">{errors.newPassword}</p>
            )}
          </div>

          {/* Confirm Password Field */}
          <div>
            <label 
              htmlFor="confirmPassword" 
              className="text-[14px] font-semibold text-[#1F2937] leading-[21px] mb-1 block font-inter"
            >
              Confirm Password
            </label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                id="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="********"
                className={`w-full border ${errors.confirmPassword ? 'border-red-500' : 'border-[#D1D5DB]'} rounded-md p-3 pr-10 focus:outline-none focus:ring-2 focus:ring-[#06020e] focus:border-transparent`}
              />
              <button
                type="button"
                onClick={toggleConfirmPasswordVisibility}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
              >
                {showConfirmPassword ? (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                  </svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.773 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )}
              </button>
            </div>
            {errors.confirmPassword && (
              <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>
            )}
          </div>

          {/* Reset Password Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#7C3AED] text-white py-4 mt-10 rounded-md font-semibold hover:bg-[#6D2ED9] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 cursor-pointer"
          >
            {loading ? (
              <>
                <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Resetting...
              </>
            ) : (
              <>
                Reset Password
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </>
            )}
          </button>

          {/* Back to Login Link */}
            <div className="text-center pt-5
            ">
            <button
                type="button"
                onClick={() => navigate('/login')}
                className="text-[14px] mb-30 font-semibold text-[#7C3AED] leading-[21px] hover:underline cursor-pointer inline-flex items-center gap-2"
            >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                </svg>
                Back to Log in
            </button>
            </div>
        </form>
      </div>
    </div>
  );
};