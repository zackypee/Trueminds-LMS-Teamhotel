import { ResetPasswordBanner } from "../components/ResetPasswordBanner";
import { ResetPasswordAuthForm } from "../components/ResetPasswordAuthForm";

const ResetPasswordAuthPage = () => {
    return (
        <section className="reset-password-auth-page min-h-screen flex flex-col gap-8 min-[900px]:flex-row  min-[900px]:gap-0 ">   
            <ResetPasswordBanner />
            <ResetPasswordAuthForm />
        </section>   
    );
}

export default ResetPasswordAuthPage;