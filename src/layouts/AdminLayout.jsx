import { Outlet } from "react-router-dom";
import AdminSidebar from "../features/Dashboard/components/adminComponents/AdminSideBar";
import AdminTopBar from "../features/Dashboard/components/adminComponents/AdminTopBar";

const AdminLayout = () => {
  return (
    <div className="admin-layout flex relative ">
      <AdminSidebar/> 
      <div className="admin-content flex-1  pl-64 relative w-full " >      
        <AdminTopBar/>
        <main className="admin-main p-5 ">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;