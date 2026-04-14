import { Outlet } from "react-router-dom";
import AdminTopBar from "../features/Dashboard/components/adminComponents/AdminTopBar";
import AdminSideBar from "../features/Dashboard/components/adminComponents/AdminSideBar";

export const AdminLayout = () => {
  return (
    <div className="admin-layout flex  ">
      <AdminSideBar/> 
      <div className="admin-content flex-1 min-[768px]:pl-64 pt-16 relative" >      
        <AdminTopBar/>
        <main className="admin-main p-5 ">
          <Outlet />
        </main>
      </div> 
    </div>
  );
};

