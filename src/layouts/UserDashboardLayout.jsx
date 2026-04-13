import { useState } from "react";
import { Outlet, useLocation } from "react-router-dom";

import UserSidebarPanel from "../features/learning/userComponents/UserSidebarPanel";
import Navbar from "../features/learning/userComponents/Navbar";
import UserDashboardNavbar from "../features/learning/userComponents/UserDashboardNavBar";
// import SidePanel from "../components/SidePanel";  // ← Add this import
export default function UserDashboardLayout() {
  const location = useLocation();
  const courseSideBar = [ "/learner/courses", "/learner/course",]
  const hideSideBar = courseSideBar.includes(location.pathname);
  const sidebarRoutes = [
  "/learner/collaboration",
  "/learner/progress",
];

const adjustSideBar = sidebarRoutes.includes(location.pathname);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="flex flex-col h-screen">
      <Navbar/>
      <div className="flex flex-1 relative ">
        {!hideSideBar &&  <UserSidebarPanel isCollapsed={isCollapsed} adjustSideBar={adjustSideBar} setIsCollapsed={setIsCollapsed} />}
        <div className={`flex-1  bg-gray-50 ${!isCollapsed? `pl-65`: `pl-20`} box-border`}>
          <Outlet />
        </div>
      </div>
    </div>
  );
}