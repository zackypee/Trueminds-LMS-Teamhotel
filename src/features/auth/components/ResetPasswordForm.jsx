import { Link } from "react-router-dom";
import forwardIcon from '../../../assets/forward-icon.svg';
import backwardIcon from '../../../assets/backward-icon.svg';
import emailIcon from '../../../assets/email-icon.svg';  
import { Button } from "../../../components/Button";  

export const ResetPasswordForm = () => {    
    return (
        <div className="reset-password-form bg-[#F9FAFB]  font-[Inter] tracking-normal w-full px-4 min-[900px]:w-[50%] lg:w-[45%] py-15" role='form'>
            <h2 className=" form-header w-[90%] leading-[39px] font-[700] text-center m-auto text-[clamp(1.5rem,5vw,2rem)] min-[500px]:w-[380px] min-[900px]:text-[30px] min-[900px]:text-left ">Reset Your Password</h2>
            <p className="form-description text-[16px] leading-[22.75px] text-center w-[259.5px] m-auto  min-[500px]:w-[380px] my-[10px_30px] text-[#4A4455] min-[900px]:text-left">Enter your email address and we'll send you instructions to reset your password.</p>
            <form className="reset-form font-[Inter] tracking-normal w-[100%] min-[500px]:w-[380px] m-auto">
                <label className="reset-label text-[14px] leading-[21px] text-left w-full m-auto  text-[#1F2937] " htmlFor="email">Email Address</label>
                <div className="input-container relative w-full m-auto  mt-2 mb-10" >
                  <img src={emailIcon} alt="Email icon"  className="reset-mail-icon absolute top-[41%] left-[5%] "/>
                  <input type="email" id="email" name="email" required placeholder="email@example.com" 
                  className="reset-input border-1 border-[#E5E7EB] rounded-sm w-full py-4 pl-11" 
                  /> 
                </div>
                <Button type="submit" className=" w-full flex gap-2 justify-center py-4 reset-btn-text font-[600] text-[16px] leading-[21px]">
                  Send Reset Link 
                  <img src={forwardIcon} alt="Forward" />
                </Button>
            </form>
           <Link to="/" className="reset-goback-link text-[14px] leading-[21px] font-[600] justify-center flex gap-2 m-auto mt-10 mb-12 text-[#7C3AED]">
                <img src={backwardIcon} alt="Back" />
                Back to Login
           </Link>

           <p className="reset-support-link text-center text-[#7B7487] text-[14px] leading-[21px] font-[600]">Need help? <Link to="/" className="text-[#4A4455]">Contact TalentFlow Support</Link></p>
        </div>
    );
}