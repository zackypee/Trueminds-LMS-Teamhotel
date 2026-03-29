import { Link } from "react-router-dom";
import forwardIcon from '../../../assets/forward-icon.svg';
import backwardIcon from '../../../assets/backward-icon.svg';
import emailIcon from '../../../assets/email-icon.svg';    

export const ResetPasswordForm = () => {    
    return (
        <div className="reset-password-form" role='form'>
            <h2>Reset Your Password</h2>
            <p>Enter your email address and we'll send you instructions to reset your password.</p>
            <form>
                <label htmlFor="email">Email Address</label>
                <div className="input-container">
                  <img src={emailIcon} alt="Email icon" />
                  <input type="email" id="email" name="email" required placeholder="email@example.com" /> 
                </div>
                <button type="submit">
                  Send Reset Link 
                  <img src={forwardIcon} alt="Forward" />
                </button>
            </form>
           <Link to="/">
                <img src={backwardIcon} alt="Back" />
                Back to Login
           </Link>

           <p>Need help? <Link to="/">Contact TalentFlow Support</Link></p>
        </div>
    );
}