import { Link } from "react-router-dom";
import { useState } from "react";   
import forwardIcon from '../../../assets/forward-icon.svg';
import backwardIcon from '../../../assets/backward-icon.svg';
import lockIcon from '../../../assets/lock-icon.svg';  
import noticeIcon from '../../../assets/notice-icon.svg';
import hidePasswordIcon from '../../../assets/eye-closed-icon.svg';
import showPasswordIcon from '../../../assets/icons8-eye-20.png';
import useResetPassword from "../hooks/useResetPassword";
import { Button } from "../../../components/Button"; 
import inputValidation from "../utils/inputValidation"; 
import { useNavigate } from "react-router-dom";
import ErrorMessage from "../../../components/ErrorMessage";

export const ResetPasswordForm = () => { 
    const [showPassword, setShowPassword] = useState(false) ;
    const [showConfirmPassword, setShowConfirmPassword] = useState(false) ;
    const [formData, setFormData] = useState({password:"", confirmPassword:""});
    const [inputValError, setInputValError] = useState({});
    const {error, isLoading, handleResetPassword, clearError, message} = useResetPassword();
    const navigate = useNavigate();
   

    


    const handleOnChangeFormData = (e) => {
       const { name, value } = e.target;
        setFormData({...formData, [name]:value})

        setInputValError({});
        
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        clearError();
        
        console.log(formData);

        const validationErrors = inputValidation(formData);

        if (Object.keys(validationErrors).length > 0) {
            setInputValError(validationErrors);
            return;
        }

        const email = sessionStorage.getItem("resetEmail");

        if (!email) {
            console.error("No reset email found");
            return;
        }

        const success = await handleResetPassword({
            newPassword: formData.password,
            email,
        });

        if (success) {
            setTimeout(() => {
                navigate("/", { replace: true });   
            }, 1500);

            sessionStorage.removeItem("resetEmail");
            sessionStorage.removeItem("verifyResetOtp");
            sessionStorage.removeItem("forgetPasswordSuccess");
            localStorage.removeItem("token");
        }
        
    };

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState) ;
    }

    const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(prevState => !prevState) ;
    }

    
    
    return (
        <div className="
            reset-password-container
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
                <p className="form-description text-[16px] leading-6 text-center w-[259.5px] m-auto  min-[500px]:w-full my-[10px_30px] text-[#4A4455] min-[900px]:text-left">Enter your new password and confirm it to reset your password.</p>
                
                {message? <p className="text-green-500">{message}</p> : <ErrorMessage message={error} />}
                <form className="reset-form font-[Inter] tracking-normal w-full" onSubmit={(e) => handleSubmit(e)}>
                    <label className="reset-label text-[14px] leading-5.25 text-left w-full  text-[#1F2937] " htmlFor="password">New Password</label>
                    <div className="input-container relative w-full  mt-2 mb-10" >
                        <img src={lockIcon} alt="Lock icon"  className="reset-mail-icon absolute top-[35%] left-[5%] "/>
                       {inputValError.password || inputValError.matchPassword ? <img src={noticeIcon} alt="Notice icon"  className="notice-icon absolute top-[-35%] right-0 "/> : null}
                        <img 
                          src={showPassword ? hidePasswordIcon : showPasswordIcon} 
                          alt={showPassword ? "Hide password Icon" : "Show password"}  
                          className="password-toggle-icon absolute top-[35%] right-[5%] "
                          onClick={togglePasswordVisibility}
                        />
                        <input 
                          type={showPassword ? "text" : "password"} 
                          id="password" 
                          name="password"  
                          placeholder="********" 
                          onChange={handleOnChangeFormData}
                        className="reset-input border border-[#E5E7EB] rounded-sm w-full py-4 pl-11 focus:outline-none focus:ring-2 focus:ring-[#7C3AED]" 
                        /> 
                        <ErrorMessage message={inputValError.password} />
                    </div>

                    <label className="label text-[14px] leading-5.25 text-left w-full  text-[#1F2937] " htmlFor="confirmPassword">Confirm New Password</label>
                    <div className="input-container relative w-full  mt-2 mb-10" >
                        <img src={lockIcon} alt="Lock icon"  className="reset-mail-icon absolute top-[35%] left-[5%] "/>
                        {inputValError.confirmPassword || inputValError.matchPassword ? <img src={noticeIcon} alt="Notice icon"  className="notice-icon absolute top-[-35%] right-0 "/> : null}
                        <img 
                          src={showConfirmPassword ? hidePasswordIcon : showPasswordIcon} 
                          alt={showConfirmPassword ? "Hide password Icon" : "Show password"}  
                          className="password-toggle-icon absolute top-[35%] right-[5%] "
                          onClick={toggleConfirmPasswordVisibility}
                        />
                        
                        <input 
                          type={showConfirmPassword ? "text" : "password"} 
                          id="confirmPassword"
                          name="confirmPassword" 
                          onChange={handleOnChangeFormData}
                          placeholder="********"        
                          className="reset-input border border-[#E5E7EB] rounded-sm w-full py-4 pl-11 focus:outline-none focus:ring-2 focus:ring-[#7C3AED]" 
                        /> 
                        <ErrorMessage message={inputValError.confirmPassword} />
                    </div>
                    <ErrorMessage message={inputValError.matchPassword} />
                    <Button 
                      type="submit" 
                      className=" w-full flex gap-2 justify-center py-4 reset-btn-text font-semibold text-[16px] leading-5.25"
                      disabled={isLoading}
                    >
                        {isLoading ? 'Resetting Password...' : 'Reset Password'}
                        <img src={forwardIcon} alt="Forward Icon" />
                    </Button>
                </form>
                <Link to="/" className="goback-link text-[14px] leading-5.25 font-semibold justify-center flex gap-2 m-auto mt-10 mb-12 text-[#7C3AED]">
                    <img src={backwardIcon} alt="Back" />
                    Back to Login
                </Link>
                <p className="support-link text-center text-[#7B7487] text-[14px] leading-5.25 font-semibold">Need help? <Link to="/" className="text-[#4A4455]">Contact TalentFlow Support</Link></p>
          </div>
        </div>
    );
}