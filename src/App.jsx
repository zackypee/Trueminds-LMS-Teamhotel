<<<<<<< HEAD
=======
import { useState } from "react";
>>>>>>> d4b21c9705404d114561b94945f29dca362aa738
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { ResetPasswordPage } from "./features/auth/pages/ResetPasswordPage";
import SignUp from "./features/auth/pages/SignUp";
<<<<<<< HEAD
import Login from "./features/auth/pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
      </Routes>
    </BrowserRouter>
=======
import AuthenticationOne from "./features/auth/pages/AuthenticationOne";
import CheckInbox from "./features/auth/pages/checkInbox";


function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/reset-password" element={<ResetPasswordPage />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/login" element={<AuthenticationOne />} />
          <Route path="/check-inbox" element={<CheckInbox />} />
        </Routes>
      </BrowserRouter>
    </div>
>>>>>>> d4b21c9705404d114561b94945f29dca362aa738
  );
}

export default App;