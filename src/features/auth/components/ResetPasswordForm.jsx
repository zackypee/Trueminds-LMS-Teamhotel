import { Link } from "react-router-dom";
import forwardIcon from '../../../assets/forward-icon.svg';
import backwardIcon from '../../../assets/backward-icon.svg';
import emailIcon from '../../../assets/email-icon.svg';  
import { Button } from "../../../components/Button";  

export const ResetPasswordForm = () => {    
    return (
        <div className="
            reset-password-form 
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
            h-full
            " role="form"
        >
            <div className="form-container  w-[90%] min-[500px]:w-95 m-auto  ">
                <h2 className=" form-header w-full leading-9.75 font-bold text-center m-auto text-[clamp(1.5rem,5vw,2rem)]  min-[900px]:text-[30px] min-[900px]:text-left text-[#1F2937]">Reset Your Password</h2>
                <p className="form-description text-[16px] leading-6 text-center w-[259.5px] m-auto  min-[500px]:w-full my-[10px_30px] text-[#4A4455] min-[900px]:text-left">Enter your email address and we'll send you instructions to reset your password.</p>
                <form className="reset-form font-[Inter] tracking-normal w-full">
                    <label className="reset-label text-[14px] leading-5.25 text-left w-full  text-[#1F2937] " htmlFor="email">Email Address</label>
                    <div className="input-container relative w-full  mt-2 mb-10" >
                        <img src={emailIcon} alt="Email icon"  className="reset-mail-icon absolute top-[41%] left-[5%] "/>
                        <input type="email" id="email" name="email" required placeholder="email@example.com" 
                        className="reset-input border border-[#E5E7EB] rounded-sm w-full py-4 pl-11" 
                        /> 
                    </div>
                    <Button type="submit" className=" w-full flex gap-2 justify-center py-4 reset-btn-text font-semibold text-[16px] leading-5.25">
                        Send Reset Link 
                        <img src={forwardIcon} alt="Forward Icon" />
                    </Button>
                </form>
                <Link to="/" className="reset-goback-link text-[14px] leading-5.25 font-semibold justify-center flex gap-2 m-auto mt-10 mb-12 text-[#7C3AED]">
                    <img src={backwardIcon} alt="Back" />
                    Back to Login
                </Link>
                <p className="reset-support-link text-center text-[#7B7487] text-[14px] leading-5.25 font-semibold">Need help? <Link to="/" className="text-[#4A4455]">Contact TalentFlow Support</Link></p>
          </div>
        </div>
    );
}