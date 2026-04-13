import { useState } from "react";
import { authReqPasswordReset } from "../authApi";


const useAuthReqPasswordReset =  () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleAuthReqPasswordReset =  async (email) => {  
        try{
           
            setIsLoading(true);
            setError(null);
            sessionStorage.removeItem("forgetPasswordSuccess");
            sessionStorage.removeItem("resetEmail");
            
            const response = await authReqPasswordReset(email);

            if (!response?.success) {
                const message = response.message || "Email Verification Failed";
                setError(message);
                return false;
            }

            sessionStorage.setItem("forgetPasswordSuccess", "true");
            sessionStorage.setItem("resetEmail", email);
            console.log(response.success)

            return true
    
        }catch(err){
            const message = err.response?.data?.message
            || (err.message === "Network Error" ? "Check your internet connection": err.message)
            || "Something went wrong, please try again.";

            setError(message);
            sessionStorage.removeItem("forgetPasswordSuccess");
            sessionStorage.removeItem("resetEmail");
            console.log("Handled error:", {
            status: err.response?.status,
            message,
            });
            return false
        }finally{
            setIsLoading(false);
        }
    }
    const clearError = () => setError(null);
   return {error, isLoading, handleAuthReqPasswordReset, clearError}

}

export default useAuthReqPasswordReset;