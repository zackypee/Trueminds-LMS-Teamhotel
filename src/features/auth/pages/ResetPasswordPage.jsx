import { ResetPasswordBanner } from "../components/ResetPasswordBanner";
import { ResetPasswordForm } from "../components/ResetPasswordForm";    

export const ResetPasswordPage = () => {
    return (
        <section className="reset-password-page flex h-screen border-2 border-red-500 ">   
            <ResetPasswordBanner />
            <ResetPasswordForm />
        </section>   
 );
}