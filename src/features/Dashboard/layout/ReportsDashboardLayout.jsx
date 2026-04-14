import React from "react";
import ReportsSidebar from "./ReportsSidebar";
import ReportsNavbar from "./ReportsNavbar";
import { Outlet } from "react-router-dom";

const ReportsDashboardLayout = () => {
  return (
    <div className="flex ml-64">
      <ReportsSidebar />

      <div className="flex-1">
        <ReportsNavbar />

        <div className="p-6">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default ReportsDashboardLayout;
