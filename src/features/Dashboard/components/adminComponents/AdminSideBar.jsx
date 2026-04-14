//

import { NavLink } from "react-router-dom";
import teamAllocIcon from "../../../../assets/team-icon.svg";
import userManagementIcon from "../../../../assets/user-management-icon.svg";
import reportsIcon from "../../../../assets/report-icon.svg";
import settingsIcon from "../../../../assets/settings-icon.svg";
import supportIcon from "../../../../assets/support-icon.svg";
import logoutIcon from "../../../../assets/logout-icon.svg";

const AdminSideBar = () => {
  const navItems = [
    { id: "team-allocation", label: "Team Allocation", icon: teamAllocIcon },
    {
      id: "user-management",
      label: "User Management",
      icon: userManagementIcon,
    },
    { id: "reports", label: "Reports", icon: reportsIcon },
    { id: "settings", label: "Settings", icon: settingsIcon },
  ];

  return (
    <aside className="hidden min-[768px]:flex min-[768px]:flex-col min-[768px]:justify-between h-screen bg-[#F8FAFC] w-[256px] px-4 py-6 shadow-md min-[768px]:fixed ">
      {/* Top Section */}
      <div className="flex flex-col gap-8">
        {/* Logo */}
        <div className="nav-header tracking-normal">
          <h1 className="text-[20px] font-bold text-[#0F172A] leading-7">
            Admin Central
          </h1>
          <p className="text-sm text-[#6B7280] leading-4  font-medium">
            Management
          </p>
        </div>

        {/* Nav Links */}
        <nav className="flex flex-col gap-2">
          {navItems?.map((link) => (
            <NavLink
              key={link.id}
              to={`${link.id}`}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2 text-sm font-normal w-full transition-colors ${
                  isActive
                    ? "font-semibold text-[#7C3AED]"
                    : "text-[#6B7280] hover:bg-[#F3EEFF]"
                }`
              }
            >
              <img src={link.icon} alt="" className="size-4.5" />
              {link.label}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* Bottom Section */}
      <div className="flex flex-col gap-4">
        {/* Help Center*/}
        <nav>
          <NavLink
            to="/help-center"
            className={`flex items-center gap-3 px-3 py-2 text-sm font-medium w-full transition-colors
                    `}
          >
            <img src={supportIcon} alt="" className="size-4.5" />
            Help Center
          </NavLink>
        </nav>

        {/* Logout */}
        <button
          className={`flex items-center gap-3 px-3 py-2 text-sm font-medium w-full transition-colors
                `}
        >
          <img src={logoutIcon} alt="" className="w-5 h-5" />
          Logout
        </button>
      </div>
    </aside>
  );
};

export default AdminSideBar;
