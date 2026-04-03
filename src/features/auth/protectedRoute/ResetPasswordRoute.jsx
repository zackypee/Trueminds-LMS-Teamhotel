import { Navigate, Outlet } from "react-router-dom";

const ResetPasswordRoute = () => {

    const success = sessionStorage.getItem("forgetPasswordSuccess") === "true";
    if (!success) {
        return <Navigate to="/forget-password"  replace/>;
    }

    return <Outlet />;
}

export default ResetPasswordRoute;