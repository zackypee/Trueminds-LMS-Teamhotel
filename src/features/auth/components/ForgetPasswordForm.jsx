import { Link } from "react-router-dom";
import { useState } from "react";
import forwardIcon from '../../../assets/forward-icon.svg';
import backwardIcon from '../../../assets/backward-icon.svg';
import emailIcon from '../../../assets/email-icon.svg';  
import { Button } from "../../../components/Button";  
import { useNavigate } from "react-router-dom";
import useAuthReqPasswordReset from "../hooks/useAuthReqPasswordReset";
import  inputValidation  from "../utils/inputValidation";
import ErrorMessage from "../../../components/ErrorMessage";

export const ForgetPasswordForm = () => {    
    const navigate = useNavigate() ;
    const [email, setEmail] = useState("") ;
    const { error, isLoading, handleAuthReqPasswordReset, clearError} = useAuthReqPasswordReset() ;
    const [inputValError, setInputValError] = useState("") ;

    const handleSubmit = async (e) => {
        e.preventDefault() ;
        clearError();
        
        const validationErrors = inputValidation({ email }) ;

        if (Object.keys(validationErrors).length > 0 ) {
            setInputValError(validationErrors.email);
            return;
        }

        const result = await handleAuthReqPasswordReset(email) ;

        if(result){
            navigate("/reset-password-auth") ;
    
        } 

    }

    const errorMessage = inputValError || error;

    return (
        <div className="
            forget-password-container 
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
                <p className="form-description text-[16px] leading-6 text-center w-[259.5px] m-auto  min-[500px]:w-full my-[10px_30px] text-[#4A4455] min-[900px]:text-left">Enter the email associated with your account and we'll send an OTP to reset your password.</p>
                <form className="forget-password-form font-[Inter] tracking-normal w-full" onSubmit={(e) => handleSubmit(e)} noValidate>
                    <label className="label text-[14px] leading-5.25 text-left w-full  text-[#1F2937] " htmlFor="email">Email Address</label>
                    <div className="forget-password-input-container relative w-full  mt-2 mb-2" >
                        <img src={emailIcon} alt="Email icon"  className="reset-mail-icon absolute top-[41%] left-[5%] "/>
                        <input 
                          type="email" 
                          id="email" 
                          name="email" 
                          placeholder="email@example.com" 
                          value={email}
                          onChange={(e) => {setEmail(e.target.value); setInputValError("")}}
                          className={`forget-password-input border ${ errorMessage? 'border-red-500' : `border-[#E5E7EB]`} rounded-sm w-full py-4 pl-11 focus:outline-none focus:ring-2 focus:ring-[#7C3AED]`} 
                        /> 
                    </div>
                    { <ErrorMessage message={errorMessage} />}
                    <Button 
                      type="submit" 
                      disabled={isLoading}
                      className=" w-full flex gap-2 justify-center py-4 reset-btn-text font-semibold text-[16px] leading-5.25 mt-10"
                    >
                        {isLoading ? "Sending OTP..." : "Send OTP"}
                        <img src={forwardIcon} alt="Forward Icon" />
                    </Button>
                </form>
                <Link to="/login" className="goback-link text-[14px] leading-5.25 font-semibold justify-center flex gap-2 m-auto mt-10 mb-12 text-[#7C3AED]">
                    <img src={backwardIcon} alt="Back" />
                    Back to Login
                </Link>
                <p className="support-link text-center text-[#7B7487] text-[14px] leading-5.25 font-semibold">Need help? <Link to="/" className="text-[#4A4455]">Contact TalentFlow Support</Link></p>
          </div>
        </div>
    );
}