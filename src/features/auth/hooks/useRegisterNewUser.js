import { registerNewUser } from "../authApi";
import { useState } from "react";

const useRegisterNewUser= () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState("")
    

    const handleRegisterNewUser = async (newUserData) => {
        
        try{
            setIsLoading(true);
            setError(null);
            setMessage("")
           

            const response = await registerNewUser(newUserData);

            if(!response?.success){
                setError(response.message || "Registration Failed, Please, try again.");
                return false
            }
            setMessage(response.message);
            console.log("res:", response);
            return true;
        }catch(err){
            const message = err.response?.data?.message 
            || (err.message === "Network Error" ? "Check your internet connection" : err.message)
            || "Something went wrong, try again.";

            setError(message);
            return false;
        }finally{
            setIsLoading(false);
        }
    }

    const clearError = () => setError(null);

    return {error, isLoading, handleRegisterNewUser, clearError, message};
}

export default useRegisterNewUser;