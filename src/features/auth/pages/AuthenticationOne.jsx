import React from "react";
import AuthenticationOneImage from "../../../assets/AuthenticationOne Image.png";
import UserLogo from "../../../assets/userlogo.png";

export default function AuthenticationOne() {
  return (
    <div className="min-h-screen w-full flex flex-col lg:flex-row bg-[#F3F4F6]">
      {/* Left Side: Brand/Image Section (Hidden on small mobile, or shown as a header) */}
      <div className="hidden lg:flex lg:w-1/2 items-center justify-center p-12 ">
        <div className="max-w-xl w-full">
          <img
            src={AuthenticationOneImage}
            alt="LMS Learning"
            className="w-full h-auto object-contain rounded-2xl shadow-2xl transition-transform duration-700 hover:scale-[1.02]"
          />
        </div>
      </div>

      {/* Right Side: Logic Section */}
      <div className="flex-1 flex flex-col justify-center items-center px-6 py-12 lg:px-16">
        {/* Mobile Logo (Only shows when the left panel is hidden) */}
        <div className="lg:hidden mb-8">
          <img
            src={AuthenticationOneImage}
            alt="LMS"
            className="w-48 h-auto object-contain"
          />
        </div>

        {/* Main Content Card */}
        <div className="w-full max-w-[440px] bg-white lg:bg-transparent p-8 lg:p-0 rounded-2xl shadow-xl lg:shadow-none">
          {/* Header & Avatar */}
          <div className="flex flex-col items-center space-y-6 text-center">
            <h1 className="text-2xl md:text-3xl lg:text-4xl font-extrabold text-gray-900 tracking-tight leading-tight">
              Log in to continue your learning journey
            </h1>

            <div className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-orange-600 to-orange-400 rounded-full blur opacity-30 group-hover:opacity-60 transition duration-300"></div>
              <img
                src={UserLogo}
                alt="User Logo"
                className="relative w-24 h-24 rounded-full border-4 border-white object-cover shadow-md"
              />
            </div>

            <div className="space-y-2">
              <p className="font-bold text-gray-800 text-xl">
                Welcome Back, User
              </p>
              <p className="text-gray-500 text-sm leading-relaxed max-w-[320px] mx-auto">
                We'll email{" "}
                <span className="text-gray-900 font-semibold underline decoration-orange-300">
                  User.user@email.com
                </span>{" "}
                a code for a secure passwordless log-in.
              </p>
            </div>
          </div>

          {/* Action Area */}
          <div className="mt-10 space-y-4">
            <button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-bold py-4 px-6 rounded-xl shadow-lg shadow-orange-200 transition-all active:scale-[0.98]">
              Continue
            </button>

            <button className="w-full text-sm text-blue-600 hover:text-blue-800 font-semibold transition-colors">
              Log in to a different account
            </button>
          </div>

          {/* Footer */}
          <div className="mt-8 pt-8 border-t border-gray-200 text-center">
            <p className="text-gray-600 text-sm font-medium">
              Don't have an account?
              <span className="text-orange-600 font-bold cursor-pointer hover:text-orange-700 ml-1 transition-colors">
                Sign up
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
