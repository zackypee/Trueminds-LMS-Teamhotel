import React from "react";
import { SignUpBanner } from "../components/SignUpBanner";
import { SignUpForm } from "../components/SignUpForm";

const SignUp = () => {
  return (
    <section className="min-h-screen flex flex-col md:flex-row">
      <SignUpBanner />
      <SignUpForm />
    </section>
  );
};

export default SignUp;
