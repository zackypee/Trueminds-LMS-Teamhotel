import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import UserSidebarPanel from "../features/learning/userComponents/UserSidebarPanel";
import Navbar from "../features/learning/userComponents/Navbar";

export default function UserDashboardLayout() {
  const location = useLocation();
  const courseSideBar = ["/learner/courses", "/learner/course"];
  const hideSideBar = courseSideBar.includes(location.pathname);
  const sidebarRoutes = ["/learner/collaboration", "/learner/progress"];
  const adjustSideBar = sidebarRoutes.includes(location.pathname);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <div className="flex flex-col h-screen">
      <Navbar onMenuClick={toggleSidebar} />
      <div className="flex flex-1 relative mt-16">
        {!hideSideBar && (
          <UserSidebarPanel
            isOpen={isSidebarOpen}
            onClose={closeSidebar}
            isCollapsed={isCollapsed}
            setIsCollapsed={setIsCollapsed}
            adjustSideBar={adjustSideBar}
          />
        )}
        <div className={`flex-1 bg-gray-50 box-border transition-all duration-300 ${!hideSideBar ? (isCollapsed ? 'lg:pl-20' : 'lg:pl-64') : ''}`}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}