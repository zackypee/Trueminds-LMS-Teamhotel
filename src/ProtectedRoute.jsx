import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./features/auth/context/AuthLoginContext";

const roleRoutes = {
  admin: "/admin",
  instructor: "/instructor",
  learner: "/learner/dashboard",
};

const ProtectedRoute = ({ allowedRole }) => {
  const { user, loading } = useAuth();

  
  if (loading) return null;

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  if (allowedRole && !allowedRole.includes(user.role)) {
    const redirectPath = roleRoutes[user.role] || "/login";
    return <Navigate to={redirectPath} replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;