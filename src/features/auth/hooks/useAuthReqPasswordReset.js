import { useState } from "react";
import { authReqPasswordReset } from "../authApi";  

const useAuthReqPasswordReset =  () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleAuthReqPasswordReset =  async (email) => {  
        try{
           
            setIsLoading(true);
            setError(null);
            sessionStorage.removeItem("forgetPasswordSuccess")
            
            const response = await authReqPasswordReset(email);

            if(!response?.success){
                throw new Error(response.message);
            }

            sessionStorage.setItem("forgetPasswordSuccess", response.success);
            sessionStorage.setItem("resetEmail", email);

            return response.success
    
        }catch(err){
            setError(err.message);
            sessionStorage.removeItem("forgetPasswordSuccess")
            return false
        }finally{
            setIsLoading(false);
        }
    }
  return {error, isLoading, handleAuthReqPasswordReset}

}

export default useAuthReqPasswordReset;