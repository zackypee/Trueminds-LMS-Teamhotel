import { ResetPasswordBanner } from "../components/ResetPasswordBanner";
import { ForgetPasswordForm } from "../components/ForgetPasswordForm";

const ForgetPasswordPage = () => {
    return (
        <section className="forget-password-page min-h-screen flex flex-col gap-8 min-[900px]:flex-row  min-[900px]:gap-0 ">
            <ResetPasswordBanner />
            <ForgetPasswordForm /> 
        </section>
    );
}  

export default ForgetPasswordPage;