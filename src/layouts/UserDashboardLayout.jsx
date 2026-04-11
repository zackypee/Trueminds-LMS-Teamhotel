import { Outlet } from "react-router-dom";
import SidebarPanel from "../features/Dashboard/components/userComponents/UserSidebarPanel";
import UserDashboardNavbar from "../features/Dashboard/components/userComponents/UserDashboardNavBar";
// import SidePanel from "../components/SidePanel";  // ← Add this import

export default function UserDashboardLayout() {
  
  return (
    <div className="flex flex-col h-screen">
      <UserDashboardNavbar />
      <div className="flex flex-1 overflow-hidden">
        <SidebarPanel />
        <div className="flex-1 overflow-y-auto bg-gray-50">
          <Outlet />
        </div>
      </div>
    </div>
  );
}