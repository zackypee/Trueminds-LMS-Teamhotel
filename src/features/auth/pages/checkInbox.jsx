import { useState } from "react";
import { useNavigate } from "react-router-dom"; 

export default function CheckInbox() {
  const navigate = useNavigate();
  const [code, setCode] = useState("");
  const handleSubmit = (finalCode) => {
    console.log("Submitting code:", finalCode);
    //  login / API call here
  };

  const handleChange = (e) => {
    let value = e.target.value;
    // Remove non-numbers
    value = value.replace(/\D/g, "");
    // Limit to 6 digits
    if (value.length <= 6) {
      setCode(value);
      // Auto submit when 6 digits reached
      if (value.length === 6) {
        handleSubmit(value);
      }
    }
  };

  return (
    <section className="flex flex-col md:flex-row justify-center items-center  h-screen  md:px-20 lg:px-40 py-10 md:py-0 gap-10 md:gap-40">
      <div className="">
        <img
          src="/images/truemind.png"
          alt="image"
          className="w-[400px] mx-auto md:mx-0"
        />
      </div>

      <div className="px-4 flex flex-col items-center">
        <h1 className="font-bold whitespace-nowrap  text-center text-[30px] lg:text-[36px] mb-2 text-[#1F2937]">
          Check Your Inbox
        </h1>

        <div className="flex justify-center md:justify-start">
          <p className="font-normal text-[14px] text-[#6B7280] text-center md:text-center max-w-sm">
            Enter the 6 digit code we sent to
            <span className="text-[#1F2937] font-semibold text-[14px]">
              {" "}
              user.user@emailcom{" "}
            </span>
            to complete your login
          </p>
        </div>

        <div className="flex flex-col gap-4 mt-7 w-full max-w-sm">
          <input
            type="text"
            value={code}
            onChange={handleChange}
            inputMode="numeric"
            className="border rounded font-bold w-full px-2 py-4 border-[#E5E7EB]"
            placeholder="6-digit-code"
          />

          <button className="bg-[#7C3AED] text-white rounded w-full py-4 cursor-pointer">
            Log in
          </button>
        </div>

        <div className="mt-6 md:mt-12 flex flex-col items-center md:items-center gap-8">
          <p className="text-[#7C3AED] text-center md:text-center font-semibold"
              onClick={() => navigate("/")}
          >
            Log into a different account
          </p> 

          <p className="text-center md:text-left font-normal text-[14px] text-[#6B7280]">
            Didn't receive the code?
            <span className="font-bold text-[#1F2937]">Resend code in 10</span>
          </p>
        </div>
      </div>
    </section>
  );
}
