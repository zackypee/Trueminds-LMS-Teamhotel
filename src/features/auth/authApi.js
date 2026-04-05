import api from "../../services/api"

export const realauthReqPasswordReset = async (email) => {
  const response =  await api.post("/auth/forget-password",{email})

  return response.data;
}; 

//auth req password reset mock api call
export const authReqPasswordReset = async (email) => {
  // simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // fake validation
  if (!email || !email.includes("@")) {
    return {
      success: false,
      message: "Invalid email address",
      data: null,
    };
  }

  // simulate "email not found"
  if (email === "test@fail.com1") {
    return {
      success: false,
      message: "Email not found",
      data: null,
    };
  }

  // success case
  return {
    success: true,
    message: "OTP sent to your email",
    data: {
      email,
    },
  };
};


export const realverifyResetOtp = async(data) => {

  const response = await api.post("/auth/verify-otp", data);

  return response.data;
}


//veridyResetOtp mock api call
export const verifyResetOtp = async (data) => {
  console.log("Mock OTP request:", data);

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const { otp } = data;

      // SUCCESS CASE
      if (otp === "1234") {
        resolve({
          success: true,
          message: "OTP verified successfully",
          data: {
            userId: "123",
          },
        });
      }

      // INVALID OTP
      else if (otp !== "1234") {
        resolve({
          success: false,
          message: "Invalid OTP",
        });
      }

    }, 1000); // simulate delay
  });
};


export const realresetPassword = async(data) => {

  const response = await api.post("/auth/reset-password", data);

  return response.data;
}

//reset password mock api
export const resetPassword = async (newPasswordData) => {
  console.log("Request payload:", newPasswordData);

  // simulate delay
  await new Promise((resolve) => setTimeout(resolve, 1500));

  const scenario = "success"; 
  // "success" | "apiError" | "networkError"

  if (scenario === "networkError") {
    throw { message: "Network Error" };
  }

  if (scenario === "apiError") {
    throw {
      response: {
        data: {
          message: "Invalid or expired OTP",
        },
      },
    };
  }

  return {
    success: true,
    message: "Password reset successful",
  };
};

