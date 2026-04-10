import { useState } from "react";
// import {verifyResetOtp} from "../authApi";
import { verifyResetOtp } from "../authServices";


const useVerifyResetOtp = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleVerifyResetOtp = async (data) => {
        setIsLoading(true);
        setError(null);
        sessionStorage.removeItem("verifyResetOtp");
        
        try{
            const response = await verifyResetOtp(data);
           
            if(!response?.success){
                throw new Error(response.message || "OTP verification failed");
            }

            sessionStorage.setItem("verifyResetOtp", "true");
            localStorage.setItem("token", response.data.token);
            return true;

        }catch(err){
            const message = err.response?.data?.message 
            || (err.message === "Network Error" ? "Check your internet connection": err.message) 
            || "Something went wrong";

            setError(message);
            sessionStorage.removeItem("verifyResetOtp");
            return false
        }finally{
            setIsLoading(false);
        };


    }

    const clearError = () => setError(null);

    return { error, isLoading, handleVerifyResetOtp, clearError};

}

export default useVerifyResetOtp;
