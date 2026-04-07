import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authLoginContext";
import { loginUser } from "../authServices";

const useLogin = () => {
  const { setUser, setLoading, setError } = useAuth();
  const navigate = useNavigate();

  const authLogin = async (email, password, setFieldErrors) => {
    setLoading(true);
    setError(null);

    try {
      const { user } = await loginUser(email, password);
      setUser(user);
      navigate("/dashboard"); // redirect straight to dashboard on success
    } catch (err) {
      if (err.validationErrors) {
        // Empty fields or bad format → show under the input
        setFieldErrors(err.validationErrors);
      } else {
        // Wrong credentials or network error → show general banner
        setError(err.message);
      }
    } finally {
      setLoading(false);
    }
  };

  return { authLogin };
};

export default useLogin;