import api from "../../services/api"

export const realauthReqPasswordReset = async (email) => {
    const response =  await api.post("/auth/forget-password",{email})

    return response.data;
}

export const authReqPasswordReset = async (email) => {
  // simulate network delay
  await new Promise((resolve) => setTimeout(resolve, 1500));

  // fake validation
  if (!email || !email.includes("1")) {
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