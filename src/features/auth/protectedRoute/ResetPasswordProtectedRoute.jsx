import { Navigate, Outlet } from "react-router-dom";


const ResetPasswordProtectedRoute = ({check, redirectTo}) => {

    const isAllowed = check();
    if (!isAllowed) return <Navigate to={redirectTo} replace />;
    return <Outlet />;
}


export default ResetPasswordProtectedRoute;