import { useState } from "react";
import { logoutUser } from "../authApi";
import { useAuth } from "../context/AuthLoginContext";
import { useNavigate } from "react-router-dom";


const useLogoutUser = () => {
    const { setUser, setError,  } = useAuth();
    const navigate = useNavigate();
    
    const onHandleLogout = async () => {

        try {
             
            const response = await logoutUser();

            if(!response.success){
                setError(response.message || "Logout Failed. Retry!")
            }

            localStorage.removeItem("user");
            localStorage.removeItem("token");

            setUser(null);

            navigate("/login", { replace: true });

        } catch (err) {
            setError(err.message);
    
        }
   
    }

    return {onHandleLogout}
}

export default useLogoutUser;