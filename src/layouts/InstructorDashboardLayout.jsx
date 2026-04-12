import { Outlet } from "react-router-dom";
import InstrucDashMenuBar from "../features/Dashboard/components/instructorComponents/InstructorDashMenuBar";

export default function InstructorDashboardLayout() {
  return (
    <div className="flex flex-col md:flex-row h-screen">
      {/* Sidebar — always visible */}
      <InstrucDashMenuBar />

      {/* Content — changes based on route */}
      <div className="flex-1 overflow-y-auto">
        <Outlet />
      </div>
    </div>
  );
}