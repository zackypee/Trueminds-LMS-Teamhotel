import { Link } from "react-router-dom";
import forwardIcon from '../../../assets/forward-icon.svg';
import backwardIcon from '../../../assets/backward-icon.svg';
import useVerifyResetOtp from "../hooks/useVerifyResetOtp";
import { Button } from "../../../components/Button";  
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ErrorMessage from "../../../components/ErrorMessage";
import useResetPasswordOtp from "../hooks/useResetPasswordOtp";
import useAuthReqPasswordReset from "../hooks/useAuthReqPasswordReset";



export const ResetPasswordAuthForm = () => {  
    const navigate = useNavigate() ;
    const [inputValError, setInputValError] = useState("");
    const {error, isLoading, handleVerifyResetOtp, clearError} = useVerifyResetOtp();
    const { handleAuthReqPasswordReset } = useAuthReqPasswordReset();

    const {
        otp,
        inputsRef,
        handleChange,
        handleKeyDown,
        combinedOtp,
        resetOtp
    } = useResetPasswordOtp(4);

    const handleSubmit =  async (e) => {
        e.preventDefault();
        clearError();
        const email = sessionStorage.getItem("resetEmail");
        console.log("Email from sessionStorage:", email);


        if (combinedOtp.length < 4) {
         setInputValError("Please enter the complete 4-digit OTP."); 
         return;
        }

        const result = await handleVerifyResetOtp({ otp: combinedOtp, email: email });

        if(result){
            resetOtp();
            navigate("/reset-password");

        }
        
    };

    const errorMessage = inputValError || error;

    
    return (
        <div className="
            Reset-password-auth-container 
            bg-[#F9FAFB] 
            font-[Inter] 
            tracking-normal 
            w-full 
            px-4 
            min-[900px]:w-[50%] 
            lg:w-[45%] 
            flex 
            items-center 
            justify-center 
            py-12
            " 
            role="form"
        >
            <div className="form-container  w-[90%] min-[500px]:w-95 m-auto  ">
                <h2 className=" form-header w-full leading-9.75 font-bold text-center m-auto text-[clamp(1.5rem,5vw,2rem)]  min-[900px]:text-[30px] min-[900px]:text-left text-[#1F2937]">Reset Your Password</h2>
                <p className="form-description text-[16px] leading-6 text-center w-[259.5px] m-auto  min-[500px]:w-full my-[10px_30px] text-[#4A4455] min-[900px]:text-left">Enter the 4-digit OTP sent to your email.</p>
                <form className="otp-form font-[Inter] tracking-normal w-full" onSubmit={handleSubmit}>
                    <label className="label text-[14px] leading-5.25 text-left w-full  text-[#1F2937] " htmlFor="reset-password-otp">OTP</label>
                    <div className="flex justify-between gap-4 mt-2 mb-2">
                        {otp.map((digit, index) => (
                        <input
                            key={index}
                            type="text"
                            inputMode="numeric"
                            maxLength={1}
                            value={digit}
                            ref={(el) => (inputsRef.current[index] = el)}
                            onChange={(e) => {handleChange(e, index); setInputValError("")}}
                            onKeyDown={(e) => handleKeyDown(e, index)}
                            className={`border ${errorMessage ? 'border-red-500' : 'border-[#E5E7EB]'} rounded-sm  text-center w-12.5 h-13.25  focus:outline-none focus:ring-2 focus:ring-[#7C3AED]`}
                        />
                        ))}
                    </div>
                    {<ErrorMessage message={errorMessage} />} 
                    <Button 
                      disabled={isLoading}
                      type="submit" 
                      className=" w-full mt-10 flex gap-2 justify-center py-4 reset-btn-text font-semibold text-[16px] leading-5.25"
                    >
                        {isLoading ? 'Confirming OTP...' : 'Confirm'}
                        <img src={forwardIcon} alt="Forward Icon" />
                    </Button>
                </form>
                <Link to="/" className="goback-link text-[14px] leading-5.25 font-semibold justify-center flex gap-2 m-auto mt-10 mb-7 text-[#7C3AED]">
                    <img src={backwardIcon} alt="Back" />
                    Back to Login
                </Link>
                <p className="resend-otp-link text-center text-[#7B7487] text-[14px] mb-12 leading-5.25 font-semibold"
                >
                    Didn't receive the code? {" "} 
                    <button 
                      type="button" 
                      className="text-[#4A4455]"
                        onClick={async () => {
                            await handleAuthReqPasswordReset(sessionStorage.getItem("resetEmail"));
                            resetOtp();
                        }}
                    > 
                     Resend Code
                    </button>
                </p>
                <p className="support-link text-center text-[#7B7487] text-[14px] leading-5.25 font-semibold">Need help? <Link to="/" className="text-[#4A4455]">Contact TalentFlow Support</Link></p>
          </div>
        </div>
    );
}