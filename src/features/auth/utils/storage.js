export const isOtpVerified = () => sessionStorage.getItem("verifyResetOtp") === "true";
export const isEmailVerified = () => sessionStorage.getItem("forgetPasswordSuccess") === "true";
export const storeSession = (token, user) => {
  localStorage.setItem("token", token);
  localStorage.setItem("user", JSON.stringify(user));
};

