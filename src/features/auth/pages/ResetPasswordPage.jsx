import { ResetPasswordBanner } from "../components/ResetPasswordBanner";
import { ResetPasswordForm } from "../components/ResetPasswordForm";    

export const ResetPasswordPage = () => {
    return (
        <section className="reset-password-page">   
            <ResetPasswordBanner />
            <ResetPasswordForm />
        </section>   
 );
}