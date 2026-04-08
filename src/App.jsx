import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ResetPasswordPage from "./features/auth/pages/ResetPasswordPage";
import SignUp from "./features/auth/pages/SignUp";
import AuthenticationOne from "./features/auth/pages/AuthenticationOne";
import Login from "./features/auth/pages/Login";
import CheckInbox from "./features/auth/pages/CheckInbox";
import ForgetPasswordPage from "./features/auth/pages/ForgetPasswordPage";
import ResetPasswordAuthPage from "./features/auth/pages/ResetPasswordAuthPage";
import ResetPasswordProtectedRoute from "./features/auth/protectedRoute/ResetPasswordProtectedRoute";
import { AuthLoginProvider } from "./features/auth/context/authLoginContext";
import DashboardLayout from "./features/Dashboard/layout/InstructorDashboardLayout";
import AssignmentForm from "./features/Dashboard/components/AssignmentForm";
import InstructorDashboard from "./features/Dashboard/components/InstructorDashboard";
import CourseMaterialForm from "./features/Dashboard/components/CourseMaterialForm";
import { isOtpVerified, isEmailVerified } from "./features/auth/utils/storage";

function App() {
  return (
    <BrowserRouter>
      <AuthLoginProvider>
        <Routes>

          <Route path="/" element={<Login />} />

          {/* Dashboard Layout — nested routes render inside Outlet */}
          <Route path="/dashboard" element={<DashboardLayout />}>
            <Route index element={<InstructorDashboard />} />                {/* /dashboard */}
            <Route path="assignments" element={<AssignmentForm />} />       {/* /dashboard/assignments */}
            <Route path="upload" element={<CourseMaterialForm />} />        {/* /dashboard/upload */}
          </Route>

          <Route
            element={
              <ResetPasswordProtectedRoute
                check={isEmailVerified}
                redirectTo="/forget-password"
              />
            }
          >
            <Route path="/reset-password-auth" element={<ResetPasswordAuthPage />} />
          </Route>

          <Route
            element={
              <ResetPasswordProtectedRoute
                check={() => isOtpVerified() && isEmailVerified()}
                redirectTo="/forget-password"
              />
            }
          >
            <Route path="/reset-password" element={<ResetPasswordPage />} />
          </Route>

          <Route path="/forget-password" element={<ForgetPasswordPage />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/welcomeback" element={<AuthenticationOne />} />
          <Route path="/check-inbox" element={<CheckInbox />} />

        </Routes>
      </AuthLoginProvider>
    </BrowserRouter>
  );
}

export default App;