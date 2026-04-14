
import { useAuth } from "../context/authLoginContext";
import { loginUser } from "../authApi";
import { storeSession } from "../utils/storage";

const useLogin = () => {
  const { setUser, setLoading, setError } = useAuth();

  const handleAuthLogin = async (userData) => {
    setLoading(true);
    setError(null);

    try {
      const response = await loginUser(userData);

      console.log("res", response);

      if(!response?.success){
        setError(response.message || "Login Failed, Please, try again.");
        return false
      }

      const {token, user} = response.data;
      

      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);
      setUser(user);

      return true
    } catch (err) {

  
      const message = err.response?.data?.message 
      || (err.message === "Network Error" ? "Check your internet connection" : err.message)
      || "Something went wrong, try again.";

      setError(message);
      return false;

    } finally {
      setLoading(false);
    }
  };

  return { handleAuthLogin };
};

export default useLogin;