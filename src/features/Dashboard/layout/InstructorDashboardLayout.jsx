import { Outlet } from "react-router-dom";
import InstrucDashMenuBar from "../components/InstructorDashMenuBar";

export default function DashboardLayout() {
  return (
    <div className="flex h-screen">
      {/* Sidebar — always visible */}
      <InstrucDashMenuBar />

      {/* Content — changes based on route */}
      <div className="flex-1 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
}