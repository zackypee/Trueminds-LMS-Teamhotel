import { useState } from "react";
import { Button } from "../../../components/Button";
import google from "../../../assets/google-icon.png";

export const SignUpForm = () => {
  const [role, setRole] = useState("learner");

  return (
    <div className=" w-full md:w-1/2 p-12 bg-[#FFFFFF]">
      <div className="flex flex-col justify-center max-w-100 mx-auto">
        <h2 className="text-[30px] font-bold mb-2 text-[#111827]">
          Create Account
        </h2>
        <p className="text-[#6A6F73] text-[16px] mb-6">
          Start your learning journey with TalentFlow today.
        </p>

        <form className="space-y-4">
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
              className="w-full border border-[#D1D5DB] rounded-md p-3"
            />
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
              className="w-full border border-[#D1D5DB] rounded-md p-3"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="text-[#374151] text-[14px] font-semibold"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              placeholder="Min. 8 characters"
              className="w-full border border-[#D1D5DB] rounded-md p-3"
            />
          </div>

          <p className="text-[#374151] text-[14px] font-semibold">
            What is your Role?
          </p>
          <div className="flex gap-4">
            <button
              type="button"
              onClick={() => setRole("learner")}
              className={`flex-1 border border-[#D1D5DB] w-21.25 h-9 md:w-38.75 md:h-14.75 rounded-md text-[#6B7280] cursor-pointer ${role === "learner" ? "bg-[#7C3AED] text-white border border-[#D1D5DB]" : ""}`}
            >
              Learner
            </button>
            <button
              type="button"
              onClick={() => setRole("instructor")}
              className={`flex-1 border border-[#D1D5DB] w-21.25 h-9 md:w-38.75 md:h-14.75 rounded-md text-[#6B7280] cursor-pointer ${role === "instructor" ? "bg-[#7C3AED] text-white border border-[#D1D5DB]" : ""}`}
            >
              Instructor
            </button>
          </div>

          <label className="hidden md:flex items-center gap-2 text-sm text-[#6A6F73]">
            <input type="checkbox" />
            Send me special offers, personalized recommendations, and learning
            tips.
          </label>

          <Button className="w-full max-sm:h-14">Create Account</Button>

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
            <span className="text-[#7C3AED]">Log in</span>
          </p>

          <p className="hidden md:block mt-5 font-semibold text-sm text-center text-[#6A6F73]">
            By signing up, you agree to our Terms of Use and Privacy Policy.
          </p>
        </form>
      </div>
    </div>
  );
};
