import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import avatar from "../../../assets/avatar-icon.png";
import inputValidation from "../utils/inputValidation";
import useLogin from "../hooks/useLogin";
import { useAuth } from "../context/AuthLoginContext";
import ErrorMessage from "../../../components/ErrorMessage";
import { Button } from "../../../components/Button";






export const LoginForm = () => {
  const {handleAuthLogin} = useLogin();
  const {error, loading} = useAuth();
  const navigate = useNavigate();

  
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const [showPassword, setShowPassword] = useState(false);
  const [inputValError, setInputValError] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData({
      ...formData,
      [id]: value
    });
    if (inputValError[id]) {
      setInputValError({
        ...inputValError,
        [id]: ""
      });
    }
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = inputValidation(formData) ;

    if (Object.keys(validationErrors).length > 0 ) {
        setInputValError(validationErrors);
        return;
    }


    const result = await handleAuthLogin(formData) ;

    if(result){
      navigate("/learner/dashboard", { replace: true })
    } 
  
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
     <div className="w-full md:w-1/2 px-6 md:px-12 py-8 md:py-12">
       <div className="max-w-md mx-auto w-full">
         <h1 className="md:text-[26px] font-bold text-center text-[#1F2937] leading-[29px] mt-10 mb-8 font-inter">
           Login to continue your learning journey
         </h1>

         <div className="flex flex-col items-center mb-8">
           <img 
             src={avatar}
             alt="User avatar"
             className="w-20 h-20 rounded-full mb-4"
           />
           <h2 className="text-[18px] font-bold text-[#0F172A] leading-[28px] mb-2 font-inter">
             Welcome Back, User
           </h2>
           <p className="text-[16px] font-normal text-[#6B7280] font-inter">
             Log in to your account with your credentials
           </p>
         </div>

         <ErrorMessage message={error}/>


         <form onSubmit={handleSubmit} className="space-y-4">
           {inputValError.general && (
             <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-2 rounded-md text-sm">
               {inputValError.general}
             </div>
           )}

           <div>
             <label 
               htmlFor="email" 
               className="text-[14px] font-semibold text-[#1F2937] leading-[21px] mb-1 block font-inter"
             >
               Email Address
             </label>
             <input
               type="email"
               id="email"
               value={formData.email}
               onChange={handleChange}
               placeholder="email@example.com"
               className={`w-full border ${inputValError.email ? 'border-red-500' : 'border-[#D1D5DB]'} rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#06020e] focus:border-transparent`}
             />
             {inputValError.email && (
               <p className="text-red-500 text-xs mt-1">{inputValError.email}</p>
             )}
           </div>
           <div>
             <label 
               htmlFor="password" 
               className="text-[14px] font-semibold text-[#1F2937] leading-[21px] mb-1 block font-inter"
             >
               Password
             </label>
             <div className="relative">
               <input
                 type={showPassword ? "text" : "password"}
                 id="password"
                 value={formData.password}
                 onChange={handleChange}
                placeholder="********"
                 className={`w-full border ${inputValError.password ? 'border-red-500' : 'border-[#D1D5DB]'} rounded-md p-3 pr-10 focus:outline-none focus:ring-2 focus:ring-[#06020e] focus:border-transparent`}
                />
               <button
                 type="button"
                 onClick={togglePasswordVisibility}
                 className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
               >
                 {showPassword ? (
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88" />
                   </svg>
                 ) : (
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                     <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                   </svg>
                 )}
               </button>
             </div>
             {inputValError.password && (
               <p className="text-red-500 text-xs mt-1">{inputValError.password}</p>
             )}
           </div>

           <Button
             type="submit"
             disabled={loading}
             className="w-full bg-[#0029F5] text-white py-3 rounded-md font-semibold hover:bg-[#1E3A5F] cursor-pointer transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
           >
             {loading ? "Logging in..." : "Login"}
           </Button>

           <div className="flex justify-end">
             <button
               type="button"
               onClick={() => navigate("/forget-password")}
               className="text-[14px] font-semibold text-[#0029F5] leading-[21px] hover:underline cursor-pointer"
             >
               Forgot Password?
             </button>
           </div>

           {/* <div className="text-center">
             <button
               type="button"
               onClick={() => navigate("/login-otp")}
               className="text-[14px] font-semibold text-[#7C3AED] leading-[21px] hover:underline cursor-pointer"
             >
               Log in with OTP code
             </button>
            </div>    Zacky commented it out !!!!!  */} 

           <div className="text-center pt-4">
             <span className="text-[14px] font-bold text-[#64748B]">
               Don't have an account?{" "}
             </span>
             <button
               type="button"
               onClick={() => navigate("/sign-up")}
               className="text-[14px] font-bold text-[#182049] hover:underline cursor-pointer mb-30"
             >
               Sign up
             </button>
           </div>
        </form>
      </div>
    </div>
   );
};



