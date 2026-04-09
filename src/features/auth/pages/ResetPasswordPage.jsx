import { ResetPasswordBanner } from "../components/ResetPasswordBanner";
import { ResetPasswordForm } from "../components/ResetPasswordForm";   

const ResetPasswordPage = () => {
  return (
    <section className="reset-password-page min-h-screen flex flex-col gap-8 min-[900px]:flex-row  min-[900px]:gap-0 ">   
        <ResetPasswordBanner />
        <ResetPasswordForm />
    </section>   
  );
}

export default ResetPasswordPage;