import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { SearchProvider } from "./features/learning/context/SearchContext";
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
import { AuthLoginProvider } from "./features/auth/context/AuthLoginContext";
import InstructorDashboardLayout from "./layouts/InstructorDashboardLayout";
import AssignmentForm from "./features/Dashboard/components/instructorComponents/InstructorAssignmentForm";
import CourseMaterialForm from "./features/Dashboard/components/instructorComponents/InstructorCourseMaterialForm";
import { isOtpVerified, isEmailVerified } from "./features/auth/utils/storage";
import CourseCatalogue from "./features/learning/userPages/CourseCatalogue";
import UserProfile from  "./features/learning/userPages/UserProfile"
import InstructorDashboard from "./features/Dashboard/pages/instructorPages/InstructorDashboard";
import AdminLayout from "./layouts/AdminLayout";
import TeamAllocationPage from "./features/Dashboard/pages/adminpages/teamAllocationPage/TeamAllocationPage";
import LandingPage from "./features/LandingPage/pages/LandingPage";
import UserDashboard from "./features/learning/userPages/UserDashboard";
import CourseLearningLayout from "./layouts/CourseLearningLayout";
import LessonContent from "./features/learning/userComponents/LessonContent";
import AssignmentContent from "./features/learning/userPages/AssignmentContent";
import MyProgress from "./features/learning/userPages/MyProgress";
import CollaborationHub from "./features/learning/userPages/CollaborationHub";


import UserDashboardLayout from "./layouts/UserDashboardLayout";
import CourseOutline from "./features/learning/userPages/CourseOutline";
import InstructorProfile from "./features/Dashboard/pages/instructorPages/InstructorProfile";
import LessonPage from "./features/learning/userPages/LessonPage";
import ProtectedRoute from "./ProtectedRoute";




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
        element={<ResetPasswordProtectedRoute check={isEmailVerified}
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

      {/* LEARNER (PROTECTED) */}
            <Route element={<ProtectedRoute allowedRole={["learner"]} />}>
              <Route path="learner" element={<UserDashboardLayout />}>
                <Route index element={<Navigate to="dashboard" replace />} />
                <Route path="dashboard" element={<UserDashboard />} />
                <Route path="profile" element={<UserProfile />} />
                <Route path="courses" element={<CourseCatalogue />} />
                <Route path="course-details" element={<CourseOutline />} />
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