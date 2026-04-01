import { useRef, useState } from "react";

export const useResetPasswordOTP = (length = 4) => {
  const inputsRef = useRef([]);
  const [otp, setOtp] = useState(Array(length).fill(""));

  const handleChange = (e, index) => {
    const value = e.target.value;

    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < length - 1) {
      inputsRef.current[index + 1].focus();
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !otp[index] && index > 0) {
      inputsRef.current[index - 1].focus();
    }
  };

  const combinedOtp = otp.join("");

  const resetOtp = () => {
    setOtp(Array(length).fill(""));
    inputsRef.current[0]?.focus();
  };

  return {
    otp,
    inputsRef,
    handleChange,
    handleKeyDown,
    combinedOtp,
    resetOtp,
  };
};