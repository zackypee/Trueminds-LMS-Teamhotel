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
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/welcomeback" element={<AuthenticationOne />} />
        <Route path="/check-inbox" element={<CheckInbox />} />
        <Route path="/new-password" element={<NewPasswordPage />} />
      </Routes>

      <AuthLoginProvider>
        <Routes>
          <Route path="admin" element={<AdminLayout/>}>
            <Route index element={<TeamAllocationPage/>}/>
          </Route>

          {/* Dashboard Layout — nested routes render inside Outlet */}
          <Route
            path="/instructor-dashboard"
            element={<InstructorDashboardLayout />}
          >
            <Route index element={<InstructorDashboard />} /> {/* /dashboard */}
            <Route path="assignments" element={<AssignmentForm />} />{" "}
            {/* /dashboard/assignments */}
            <Route path="upload" element={<CourseMaterialForm />} />{" "}
            {/* /dashboard/upload */}
          </Route>

          <Route path="/dashboard" element={<UserDashboardLayout />}>
            <Route index element={<UserDashboardContent />} />
          </Route>

          <Route path="/course-catalogue" element={<CourseCatalogue />} />
          <Route
            element={
              <ResetPasswordProtectedRoute
                check={isEmailVerified}
                redirectTo="/forget-password"
              />
            }
          >
            <Route
              path="/reset-password-auth"
              element={<ResetPasswordAuthPage />}
            />
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
          <Route path="/landing" element={<LandingPage />} />
        </Routes>
      </AuthLoginProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        {/* <Route path="/instructor-dashboard" element={<InstructorDashboard />} /> */}

        <Route
          element={
            <ResetPasswordProtectedRoute
              check={isEmailVerified}
              redirectTo="/forget-password"
            />
          }
        >
          <Route
            path="/reset-password-auth"
            element={<ResetPasswordAuthPage />}
          />
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
        <Route path="/welcome-back" element={<AuthenticationOne />} />
        <Route path="/check-inbox" element={<CheckInbox />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/instructor-profile" element={<InstructorProfile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
