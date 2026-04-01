import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { ResetPasswordPage } from "./features/auth/pages/ResetPasswordPage";
import SignUp from "./features/auth/pages/SignUp";
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
          <Route path="/" element={<CheckInbox />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
