import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./features/auth/context/authLoginContext";

const roleRoutes = {
  admin: "/admin",
  instructor: "/instructor-dashboard",
  learner: "/dashboard",
};

const ProtectedRoute = ({allowedRole}) =>{

    const {user} = useAuth();

    if(!user){
       return <Navigate to="/" replace />
    }

    if(allowedRole && !(allowedRole=== user.role)){
        const redirectPath = roleRoutes[user.role] || "/";
       return <Navigate to={redirectPath} replace/>
    }

   return <Outlet/>

}