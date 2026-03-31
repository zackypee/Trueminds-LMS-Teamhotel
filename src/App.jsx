import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import { ResetPasswordPage } from "./features/auth/pages/ResetPasswordPage";
import SignUp from "./features/auth/pages/SignUp";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
