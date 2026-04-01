import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ResetPasswordPage } from "./features/auth/pages/ResetPasswordPage";
import SignUp from "./features/auth/pages/SignUp";
import AuthenticationOne from "./features/auth/pages/AuthenticationOne";
import Login from "./features/auth/pages/Login";
import CheckInbox from "./features/auth/pages/checkInbox";

function App() {
  return (
    <BrowserRouter>
      <Routes>
         <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/welcomeback" element={<AuthenticationOne />} />
        <Route path="/check-inbox" element={<CheckInbox />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
