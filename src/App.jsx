import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ResetPasswordPage from "./features/auth/pages/ResetPasswordPage";
import SignUp from "./features/auth/pages/SignUp";
import AuthenticationOne from "./features/auth/pages/AuthenticationOne";
import Login from "./features/auth/pages/Login";
import CheckInbox from "./features/auth/pages/checkInbox";
import NewPasswordPage from "./features/auth/pages/NewPasswordPage";
import ForgetPasswordPage from "./features/auth/pages/ForgetPasswordPage";
import ResetPasswordAuthPage from "./features/auth/pages/ResetPasswordAuthPage";
import ResetPasswordProtectedRoute from "./features/auth/protectedRoute/ResetPasswordProtectedRoute";
import { AuthLoginProvider } from "./features/auth/context/authLoginContext";
import InstructorDashboardLayout from "./features/Dashboard/layout/InstructorDashboardLayout";
import CourseMaterialForm from "./features/Dashboard/components/InstructorCourseMaterialForm";
import { isOtpVerified, isEmailVerified } from "./features/auth/utils/storage";
import CourseCatalogue from "./features/Dashboard/pages/CourseCatalogue";
import UserProfile from "./features/Dashboard/pages/UserProfile";
import InstructorDashboard from "./features/Dashboard/pages/InstructorDashboard";
import AdminLayout from "./layouts/AdminLayout";
import TeamAllocationPage from "./features/Dashboard/pages/adminpages/teamAllocationPage/TeamAllocationPage";
import LandingPage from "./features/LandingPage/pages/LandingPage";
import UserDashboardLayout from "./features/Dashboard/layout/UserDashboardLayout";
import UserDashboardContent from "./features/Dashboard/components/UserDashboardContent";
import InstructorAssignmentForm from "./features/Dashboard/components/InstructorAssignmentForm";
import InstructorProfile from "./features/Dashboard/pages/InstructorProfile";


function App() {
  return (
    <BrowserRouter>
      <AuthLoginProvider>
        <Routes>     
          {/* Admin Dashboard */}
          <Route path="admin" element={<AdminLayout/>}>
            <Route index element={<TeamAllocationPage/>}/>
          </Route>

          {/* Public Routes */}
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/welcomeback" element={<AuthenticationOne />} />
          <Route path="/check-inbox" element={<CheckInbox />} />
          <Route path="/new-password" element={<NewPasswordPage />} />
          <Route path="/forget-password" element={<ForgetPasswordPage />} />
          <Route path="/course-catalogue" element={<CourseCatalogue />} />

          {/* Instructor Dashboard */}
          <Route path="/instructor-dashboard" element={<InstructorDashboardLayout />}>
            <Route index element={<InstructorDashboard />} />
            <Route path="assignments" element={<InstructorAssignmentForm/>} />
            <Route path="upload" element={<CourseMaterialForm />} />
            <Route path="instructor-profile" element={<InstructorProfile />} />
          </Route>

          {/* User Dashboard */}
          <Route path="/user-dashboard" element={<UserDashboardLayout />}>
            <Route index element={<UserDashboardContent />} />
            <Route path="user-profile" element={<UserProfile />}/>
          </Route>

          {/* Protected Reset Password Routes */}
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
        </Routes>
      </AuthLoginProvider>
    </BrowserRouter>
  );
}

export default App;