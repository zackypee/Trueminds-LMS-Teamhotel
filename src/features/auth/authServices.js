import api from "./authApi";

// Validate email and password only
const validateInputs = (email, password) => {
  const errors = {};

  if (!email) errors.email = "Email is required";
  if (!password) errors.password = "Password is required";

  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Enter a valid email address";
  }
  if (password && password.length < 6) {
    errors.password = "Password must be at least 6 characters";
  }

  return errors;
};

const storeSession = (token, user) => {
  sessionStorage.setItem("authToken", token);
  sessionStorage.setItem("user", JSON.stringify(user));
};

export const loginUser = async (email, password) => {
  // Step 1: Validate inputs before hitting the API
  const validationErrors = validateInputs(email, password);
  if (Object.keys(validationErrors).length > 0) {
    const err = new Error("Validation failed");
    err.validationErrors = validationErrors;
    throw err;
  }

  // Step 2: Send email + password to API
  const response = await api.post("/auth/login", { email, password });
  const { token, user } = response.data;

  // Step 3: Store session and return
  storeSession(token, user);
  return { token, user };
};


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

// // ✅ Mock credentials — test with these
// const MOCK_USER = {
//   email: "user@example.com",
//   password: "password123",
// };

// export const loginUser = async (email, password) => {
//   // Step 1: Validate inputs
//   const validationErrors = validateInputs(email, password);
//   if (Object.keys(validationErrors).length > 0) {
//     const err = new Error("Validation failed");
//     err.validationErrors = validationErrors;
//     throw err;
//   }

//   // Step 2: Simulate network delay
//   await new Promise((resolve) => setTimeout(resolve, 1000));

//   // Step 3: Check mock credentials
//   if (email !== MOCK_USER.email || password !== MOCK_USER.password) {
//     throw new Error("Invalid email or password. Please try again.");
//   }

//   // Step 4: Return mock response
//   const mockResponse = {
//     token: "mock-jwt-token-xyz123",
//     user: {
//       id: 1,
//       name: "John Doe",
//       email: email,
//       role: "student",
//     },
//   };

//   storeSession(mockResponse.token, mockResponse.user);
//   return mockResponse;
// };