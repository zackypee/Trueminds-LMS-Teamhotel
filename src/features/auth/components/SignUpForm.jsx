import { useState } from "react";
import { Button } from "../../../components/Button";
import google from "../../../assets/google-icon.png";
import { IoMdEyeOff } from "react-icons/io";
import { IoEye } from "react-icons/io5";
import useRegisterNewUser from "../hooks/useRegisterNewUser";
import inputValidation from "../utils/inputValidation";
import ErrorMessage from "../../../components/ErrorMessage";
import { Link } from "react-router-dom";

export const SignUpForm = () => {
  const [role, setRole] = useState("learner");
  const [showPassword, setShowPassword] = useState(false);
  const {isLoading, error, handleRegisterNewUser, clearError, message} = useRegisterNewUser();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [inputValError, setInputValError] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

 /* const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.includes("@")) {
      newErrors.email = "Enter a valid email";
    }

    if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };*/

  const handleSubmit = async (e) => {
    e.preventDefault();
    clearError();

    const validationErrors = inputValidation(formData);

    if (Object.keys(validationErrors).length > 0) {
      setInputValError(validationErrors);
      return;
    }
    
    const newUserData = {
      name:formData.name,
      email:formData.email,
      password:formData.password,
      role:role
    };

    const success = await handleRegisterNewUser(newUserData)
    console.log("REGISTER RESULT:", success);

    if (error?.includes("time")) {
      setTimeout(() => {
          navigate("/", { replace: true });   
      }, 1500);
    }

  };

  return (
    <div className=" w-full md:w-1/2 p-12 bg-[#FFFFFF]">
      <div className="flex flex-col justify-center max-w-100 mx-auto">
        <h2 className="text-[30px] font-bold mb-2 text-[#111827]">
          Create Account
        </h2>
        <p className="text-[#6A6F73] text-[16px] mb-6">
          Start your learning journey with TalentFlow today.
        </p>

        {error?.includes("time")? <p className="text-green-500">Account Successfully Created.</p> : <ErrorMessage message={error} />}

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="name"
              className="text-[#374151] text-[14px] font-semibold"
            >
              Full name
            </label>
            <input
              type="text"
              id="name"
              placeholder="John Doe"
              className="w-full border border-[#D1D5DB] rounded-md p-3 outline none focus:ring-1 focus:ring-[#7C3AED]"
              value={formData.name}
              onChange={handleChange}
            />
            {inputValError.name && (
              <p className="text-red-500 text-sm">{inputValError.name}</p>
            )}
          </div>
          <div>
            <label
              htmlFor="email"
              className="text-[#374151] text-[14px] font-semibold"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="email@example.com"
              className="w-full border border-[#D1D5DB] rounded-md p-3 outline none focus:ring-1 focus:ring-[#7C3AED]"
              value={formData.email}
              onChange={handleChange}
            />
            {inputValError.email && (
              <p className="text-red-500 text-sm">{inputValError.email}</p>
            )}
          </div>

          <div className="relative">
            <label
              htmlFor="password"
              className="text-[#374151] text-[14px] font-semibold"
            >
              Password
            </label>
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Min. 8 characters"
              className="w-full border border-[#D1D5DB] rounded-md p-3 outline none focus:ring-1 focus:ring-[#7C3AED]"
              value={formData.password}
              onChange={handleChange}
            />

            <button
              className="absolute top-10 right-5 cursor-pointer"
              type="button"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <IoMdEyeOff /> : <IoEye />}
            </button>
            {inputValError.password && (
              <p className="text-red-500 text-sm">{inputValError.password}</p>
            )}
          </div>

          <p className="text-[#374151] text-[14px] font-semibold">
            What is your Role?
          </p>
          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => setRole("learner")}
              className={`flex-1 border border-[#D1D5DB] w-21.25 h-9 md:w-38.75 md:h-14.75 rounded-md text-[#6B7280] cursor-pointer ${role === "learner" ? "bg-[#0029F5] text-white border border-[#D1D5DB]" : ""}`}
            >
              Learner
            </button>
            <button
              type="button"
              onClick={() => setRole("instructor")}
              className={`flex-1 border border-[#D1D5DB] w-21.25 h-9 md:w-38.75 md:h-14.75 rounded-md text-[#6B7280] cursor-pointer ${role === "instructor" ? "bg-[#0029F5] text-white border border-[#D1D5DB]" : ""}`}
            >
              Instructor
            </button>
          </div>

          <label className="hidden md:flex items-center gap-2 text-sm text-[#6A6F73]">
            <input type="checkbox" />
            Send me special offers, personalized recommendations, and learning
            tips.
          </label>

          <Button 
          className="w-full max-sm:h-14"
          type={"submit"}
          disabled={isLoading}
          >{isLoading? "Creating an account..." : "Create Account"}</Button>

          <div className="flex items-center gap-2">
            <hr className="flex-1 border border-[#D1D5DB]" />
            <span className="text-[#6A6F73] font-semibold text-[14px]">
              Other sign up options
            </span>
            <hr className="flex-1 border border-[#D1D5DB]" />
          </div>

          <button
            type="button"
            className="md:w-49 h-11.5  w-full border border-[#D1D5DB] rounded-sm  flex items-center justify-evenly md:justify-center  md:gap-2 mx-auto text-[14px] text-[#1E3A5F] cursor-pointer font-semibold"
          >
            <img src={google} alt="Google" className="w-6 h-6" />
            Google
          </button>

          <p className="text-sm text-gray-500 text-center font-normal max-sm:mt-10">
            Already have an account?{" "}
            <Link to="/login" className="text-[#7C3AED]">Log in</Link>
          </p>

          <p className="hidden md:block mt-5 font-semibold text-sm text-center text-[#6A6F73]">
            By signing up, you agree to our Terms of Use and Privacy Policy.
          </p>
        </form>
      </div>
    </div>
  );
};
