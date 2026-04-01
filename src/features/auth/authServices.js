// import api from "./authApi";

// const validateInputs = (email, password) => {
//   const errors = {};

//   if (!email) errors.email = "Email is required";
//   if (!password) errors.password = "Password is required";

//   if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
//     errors.email = "Enter a valid email address";
//   }
//   if (password && password.length < 6) {
//     errors.password = "Password must be at least 6 characters";
//   }

//   return errors;
// };

// const storeSession = (token, user) => {
//   sessionStorage.setItem("authToken", token);
//   sessionStorage.setItem("user", JSON.stringify(user));
// };

// export const loginUser = async (email, password) => {
//   // Validate before hitting the API
//   const validationErrors = validateInputs(email, password);
//   if (Object.keys(validationErrors).length > 0) {
//     const err = new Error("Validation failed");
//     err.validationErrors = validationErrors;
//     throw err;
//   }

//   const response = await api.post("/auth/login", { email, password });
//   const { token, user } = response.data;

//   storeSession(token, user);
//   return { token, user };
// };