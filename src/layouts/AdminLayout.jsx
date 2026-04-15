import { Outlet } from "react-router-dom";
<<<<<<< HEAD
=======
import AdminSideBar from "../features/Dashboard/components/adminComponents/AdminSideBar";
>>>>>>> fdd65b7aae5ce9e2a0c3fef9f0935622c584bf55
import AdminTopBar from "../features/Dashboard/components/adminComponents/AdminTopBar";
import AdminSideBar from "../features/Dashboard/components/adminComponents/AdminSideBar";

export const AdminLayout = () => {
  return (
<<<<<<< HEAD
    <div className="admin-layout flex  ">
      <AdminSideBar/> 
      <div className="admin-content flex-1 min-[768px]:pl-64 pt-16 relative" >      
        <AdminTopBar/>
=======
    <div className="admin-layout relative flex  ">
      <AdminSideBar />
      <div className="admin-content flex-1 min-[768px]:pl-64 pt-16 relative">
        <AdminTopBar />
>>>>>>> fdd65b7aae5ce9e2a0c3fef9f0935622c584bf55
        <main className="admin-main p-5 ">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

<<<<<<< HEAD
=======
export default AdminLayout;
>>>>>>> fdd65b7aae5ce9e2a0c3fef9f0935622c584bf55
