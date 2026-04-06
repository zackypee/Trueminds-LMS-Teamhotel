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

            if(!response?.success){
                throw new Error(response.message);
            }

            sessionStorage.setItem("forgetPasswordSuccess", "true");
            sessionStorage.setItem("resetEmail", email);

            return true
    
        }catch(err){
            const message = response?.data?.message
            || (err.message === "Network Error"? err.message : err.message)
            || "Something went wrong, please try again.";

            setError(message);
            sessionStorage.removeItem("forgetPasswordSuccess");
            sessionStorage.removeItem("resetEmail");
            return false
        }finally{
            setIsLoading(false);
        }
    }
    const clearError = () => setError(null);
   return {error, isLoading, handleAuthReqPasswordReset, clearError}

}

export default useAuthReqPasswordReset;