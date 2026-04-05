import { useState } from "react";
import { resetPassword } from "../authApi";


const useResetPassword = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState("")
    

    const handleResetPassword = async (newPasswordData) => {
        
        try{
            setIsLoading(true);
            setError(null);
            setMessage("")
            sessionStorage.removeItem("resetPasswordSuccess");

            const response = await resetPassword(newPasswordData);

            if(!response?.success){
                throw new Error(response.message || "Password Reset Failed, Please try again");
            }

            sessionStorage.setItem("resetPasswordSuccess", "true");
            setMessage(response.message);
            return true;
        }catch(err){
            const message = err.response?.data?.message 
            || (err.message === "Network Error" ? "Check your internet connection" : err.message)
            || "Something went wrong, try again.";

            setError(message);
            sessionStorage.removeItem("resetPasswordSuccess");
            return false;
        }finally{
            setIsLoading(false);
        }
    }

    const clearError = () => setError(null);

    return {error, isLoading, handleResetPassword, clearError, message};
}

export default useResetPassword;