import { useState } from "react";
import { Outlet } from "react-router-dom";
import UserDashboardNavbar from "../components/UserDashboardNavbar";
import SidebarPanel from "../components/SidebarPanel";

export default function UserDashboardLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="flex flex-col min-h-screen bg-[#F8FAFC]">
      {/* NavBar with toggle function passed */}
      <UserDashboardNavbar onMenuClick={toggleSidebar} />
      
      <div className="flex pt-1">
        {/* Sidebar */}
        <SidebarPanel isOpen={isSidebarOpen} onClose={closeSidebar} />
        
        {/* Main Content */}
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
}