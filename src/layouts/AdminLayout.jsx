import { Outlet } from "react-router-dom";
import AdminSidebar from "../features/Dashboard/components/adminComponents/AdminSideBar";
import AdminTopBar from "../features/Dashboard/components/adminComponents/AdminTopBar";

const AdminLayout = () => {
  return (
    <div className="admin-layout relative flex  ">
      <AdminSidebar/> 
      <div className="admin-content flex-1 min-[768px]:pl-64 pt-16 relative" >      
        <AdminTopBar/>
        <main className="admin-main p-5 ">
          <Outlet />
        </main>
      </div> 
    </div>
  );
};

export default AdminLayout;