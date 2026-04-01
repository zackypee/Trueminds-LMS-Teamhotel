// import { useNavigate } from "react-router-dom";
// import { useAuth } from "../context/authLoginContext";
// import { loginUser } from "../authServices";

// const useLogin = () => {
//   const { setUser, setLoading, setError } = useAuth();
//   const navigate = useNavigate();

//   const authLogin = async (email, password, setFieldErrors) => {
//     setLoading(true);
//     setError(null);

//     try {
//       const { user } = await loginUser(email, password);
//       setUser(user);
//       navigate("/dashboard");
//     } catch (err) {
//       if (err.validationErrors) {
//         // Field-level errors (empty fields, bad format) go back to the form
//         setFieldErrors(err.validationErrors);
//       } else {
//         // API/network errors go to context (shown as general error banner)
//         setError(err.message);
//       }
//     } finally {
//       setLoading(false);
//     }
//   };

//   return { authLogin };
// };

// export default useLogin;