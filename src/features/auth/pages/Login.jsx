import React from "react";
import { ResetPasswordBanner } from "../components/ResetPasswordBanner";
import { LoginForm } from "../components/LoginForm";
import Footer from "../../../components/Footer";

const Login = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-grow flex flex-col md:flex-row">
        <ResetPasswordBanner />
        <LoginForm />
      </div>
      <Footer />
    </div>
  );
};

export default Login;