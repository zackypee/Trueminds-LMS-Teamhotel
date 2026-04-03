
export const isOtpVerified = () => sessionStorage.getItem("verifyResetOtp") === "true";

export const isEmailVerified = () => sessionStorage.getItem("forgetPasswordSuccess") === "true";