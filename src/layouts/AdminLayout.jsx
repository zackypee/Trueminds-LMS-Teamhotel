import { Outlet } from "react-router-dom";
import {AdminSidebar} from "../components/AdminSidebar";
import {AdminTopbar} from "../components/AdminTopbar";

const AdminLayout = () => {
  return (
    <div className="admin-layout">
        <aside>
            <AdminSidebar />
        </aside>
    
      <div className="admin-content">
            <header>
                <AdminTopbar />
            </header>
            <main className="admin-main">
              <Outlet />
            </main>
      </div>
    </div>
  );
};

export default AdminLayout;