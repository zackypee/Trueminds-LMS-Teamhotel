import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authLoginContext";
import { loginUser } from "../authApi";

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
      storeSession(token, user);
      setUser(user);

      return true
    } catch (err) {

      console.log("FULL ERROR:", err); // 👈 add this
      console.log("ERROR DATA:", err.response?.data); // 👈 add this
      console.log("STATUS:", err.response?.status);
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