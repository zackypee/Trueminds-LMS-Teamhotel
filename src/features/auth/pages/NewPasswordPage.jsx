import React from 'react';
import { ResetPasswordBanner } from '../components/ResetPasswordBanner';
import { NewPasswordForm } from '../components/NewPasswordForm';
// import { AuthNewPasswordProvider } from '../context/authNewPasswordContext';
import Footer from '../../../components/Footer';

const NewPasswordPage = () => {
  return (
       <div className="min-h-screen flex flex-col">
        <div className="flex-grow flex flex-col md:flex-row">
          <ResetPasswordBanner />
          <NewPasswordForm />
        </div>
        <Footer />
      </div>
  );
};

export default NewPasswordPage;