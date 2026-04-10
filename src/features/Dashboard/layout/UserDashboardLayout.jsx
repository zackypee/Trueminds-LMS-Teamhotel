import { Outlet } from "react-router-dom";
import NavBar from '../features/Dashboard/components/NavBar';
// import SidePanel from "../components/SidePanel";

export default function UserDashboardLayout() {
  return (
    <div className="flex flex-col h-screen">
      {/* NavBar at the top */}
      <NavBar />
      
      <div className="flex flex-1 overflow-hidden">
        {/* Sidebar — always visible */}
        <SidePanel />

        {/* Content — changes based on route */}
        <div className="flex-1 overflow-y-auto bg-gray-50">
          <Outlet />
        </div>
      </div>
    </div>
  );
}