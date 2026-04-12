import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { Navigate } from "react-router-dom";
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
import InstructorDashboardLayout from "./layouts/InstructorDashboardLayout";
import AssignmentForm from "./features/Dashboard/components/instructorComponents/InstructorAssignmentForm";
import CourseMaterialForm from "./features/Dashboard/components/instructorComponents/InstructorCourseMaterialForm";
import { isOtpVerified, isEmailVerified } from "./features/auth/utils/storage";
import CourseCatalogue from "./features/Dashboard/pages/userPages/CourseCatalogue";
import UserProfile from "./features/Dashboard/pages/userpages/UserProfile";
import InstructorDashboard from "./features/Dashboard/pages/instructorPages/InstructorDashboard";
import AdminLayout from "./layouts/AdminLayout";
import TeamAllocationPage from "./features/Dashboard/pages/adminpages/teamAllocationPage/TeamAllocationPage";
import LandingPage from "./features/LandingPage/pages/LandingPage";
import UserDashboardLayout from "./layouts/UserDashboardLayout";
import UserDashboard from "./features/Dashboard/pages/userPages/UserDashboard";
import UserDashboardContent from "./features/Dashboard/components/userComponents/UserDashboardContent";
import InstructorProfile from "./features/Dashboard/pages/instructorPages/InstructorProfile";



function App() {
  return (
    <BrowserRouter>
    <AuthLoginProvider>
    <Routes>
      <Route path="/landing" element={<LandingPage />} />
      <Route path="/" element={<Login />} />
      <Route path="/forget-password" element={<ForgetPasswordPage />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/welcome-back" element={<AuthenticationOne />} />
      <Route path="/check-inbox" element={<CheckInbox />} />
      
      

      {/* Protected routes */}
      <Route 
        element={ <ResetPasswordProtectedRoute check={isEmailVerified} 
          redirectTo="/forget-password"/>
        }
      >
        <Route
          path="/reset-password-auth"
          element={<ResetPasswordAuthPage />}
        />
      </Route>

      <Route
        element={<ResetPasswordProtectedRoute check={() => isOtpVerified() && isEmailVerified()}
          redirectTo="/forget-password"/>
        }
      >
        <Route path="/reset-password" element={<ResetPasswordPage />} />
      </Route>

      {/* Admin */}
      <Route path="admin" element={<AdminLayout />}>
        <Route index element={<Navigate to="team-allocation" replace />} />
        
        <Route path="team-allocation" element={<TeamAllocationPage />} />
      </Route>

      {/* Instructor */}
      <Route
        path="instructor"
        element={<InstructorDashboardLayout />}
      >
       <Route index element={<Navigate to="dashboard" replace />} />

        <Route path="dashboard" element={<InstructorDashboard />} />
        <Route path="assignments" element={<AssignmentForm />} />
        <Route path="upload" element={<CourseMaterialForm />} />
        <Route path="profile" element={<InstructorProfile />} />
      </Route>

      {/* User */}
      <Route path="learner" element={<UserDashboardLayout />}>
        <Route index element={<Navigate to="dashboard" replace />} />

        <Route path="dashboard" element={<UserDashboardContent />} />
        <Route path="profile" element={<UserProfile />} />
        <Route path="courses" element={<CourseCatalogue />} />
      </Route>

    </Routes>
    </AuthLoginProvider>
    </BrowserRouter>
  );
}

export default App;
