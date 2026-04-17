import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
//Import Providers Components
import { AuthLoginProvider } from "./features/auth/context/AuthLoginContext";
import { SearchProvider } from "./features/learning/context/SearchContext";

//Import Landing Page Components
import LandingPage from "./features/LandingPage/pages/LandingPage";

//Import Protect Components
import ProtectedRoute from "./ProtectedRoute";

//Import Auth feature Components
import ResetPasswordPage from "./features/auth/pages/ResetPasswordPage";
import SignUp from "./features/auth/pages/SignUp";
import AuthenticationOne from "./features/auth/pages/AuthenticationOne";
import Login from "./features/auth/pages/Login";
import ForgetPasswordPage from "./features/auth/pages/ForgetPasswordPage";
import ResetPasswordAuthPage from "./features/auth/pages/ResetPasswordAuthPage";
import ResetPasswordProtectedRoute from "./features/auth/protectedRoute/ResetPasswordProtectedRoute";
import { isEmailVerified } from "./features/auth/utils/storage";

import CourseLearningLayout from "./layouts/CourseLearningLayout";
import LessonContent from "./features/learning/userComponents/LessonContent";

//Import Learner Components
import UserDashboardLayout from "./layouts/UserDashboardLayout";
import CourseOutline from "./features/learning/userPages/CourseOutline";
import AssignmentContent from "./features/learning/userPages/AssignmentContent";
import MyProgress from "./features/learning/userPages/MyProgress";
import CollaborationHub from "./features/learning/userPages/CollaborationHub";
import LessonPage from "./features/learning/userPages/LessonPage";
import CourseCatalogue from "./features/learning/userPages/CourseCatalogue";
import UserProfile from "./features/learning/userPages/UserProfile";
import UserDashboard from "./features/learning/userPages/UserDashboard";
import UserNotification from "./features/learning/userPages/UserNotification";
//Import Learner Components
import InstructorProfile from "./features/Dashboard/pages/instructorPages/InstructorProfile";
import InstructorDashboard from "./features/Dashboard/pages/instructorPages/InstructorDashboard";
import InstructorDashboardLayout from "./layouts/InstructorDashboardLayout";
import AssignmentForm from "./features/Dashboard/components/instructorComponents/InstructorAssignmentForm";
import CourseMaterialForm from "./features/Dashboard/components/instructorComponents/InstructorCourseMaterialForm";

//Import Admin Components
import { AdminLayout } from "./layouts/AdminLayout";
import Reports from "./features/Dashboard/pages/adminpages/Reports";
import UserManagement from "./features/Dashboard/pages/adminpages/UserManagement";
import TeamAllocationPage from "./features/Dashboard/pages/adminpages/teamAllocationPage/TeamAllocationPage";


function App() {
  return (
    <BrowserRouter>
      <AuthLoginProvider>
        <SearchProvider>
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forget-password" element={<ForgetPasswordPage />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/welcome-back" element={<AuthenticationOne />} />
            <Route path="/notifications" element={<UserNotification />} />

            {/* Protected Reset Password routes */}
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
                  check={isEmailVerified}
                  redirectTo="/forget-password"
                />
              }
            >
              <Route path="/reset-password" element={<ResetPasswordPage />} />
            </Route>

            {/* Admin */}
            <Route path="admin" element={<AdminLayout />}>
              <Route index element={<Navigate to="team-allocation" replace />}/>
              <Route path="team-allocation" element={<TeamAllocationPage />} />
              <Route path="reports" element={<Reports />} />
              <Route path="user-management" element={<UserManagement />} />
            </Route>

            {/* Instructor (Protected) */}
            <Route element={<ProtectedRoute allowedRole={["instructor"]} />}>
              <Route path="instructor" element={<InstructorDashboardLayout />}>
                <Route index element={<Navigate to="dashboard" replace />} />
                <Route path="dashboard" element={<InstructorDashboard />} />
                <Route path="assignments" element={<AssignmentForm />} />
                <Route path="upload" element={<CourseMaterialForm />} />
                <Route path="profile" element={<InstructorProfile />} />
              </Route>
            </Route>

            {/* LEARNER (PROTECTED) */}
            <Route element={<ProtectedRoute allowedRole={["learner"]} />}>
              <Route path="learner" element={<UserDashboardLayout />}>
                <Route index element={<Navigate to="dashboard" replace />} />
                <Route path="dashboard" element={<UserDashboard />} />
                <Route path="profile" element={<UserProfile />} />
                <Route path="courses" element={<CourseCatalogue />} />
                <Route path="course-details/:id" element={<CourseOutline />} />
                <Route path="assignments" element={<AssignmentContent />} />
                <Route path="progress" element={<MyProgress />} />
                <Route path="collaboration" element={<CollaborationHub />} />
                <Route path="course" element={<LessonPage />} />
              </Route>
            </Route>
          </Routes>
        </SearchProvider>
      </AuthLoginProvider>
    </BrowserRouter>
  );
}

export default App;
