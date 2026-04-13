import { useState } from "react";
import { Outlet } from "react-router-dom";
import UserSidebarPanel from "../features/Dashboard/components/userComponents/UserSidebarPanel";
import UserDashboardNavbar from "../features/Dashboard/components/userComponents/UserDashboardNavBar";
// import SidePanel from "../components/SidePanel";  // ← Add this import
export default function UserDashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="flex flex-col h-screen">
      <UserDashboardNavbar />
      <div className="flex flex-1 overflow-hidden">
        <UserSidebarPanel />
        <div className="flex-1 overflow-y-auto bg-gray-50">
          <Outlet />
        </div>
      </div>
    </div>
  );
}