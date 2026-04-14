import { Link, NavLink } from "react-router-dom";
import team from "../../../assets/team.png";
import user from "../../../assets/usermanage.png";
import report from "../../../assets/report.png";
import help from "../../../assets/help.png";
import exit from "../../../assets/exit.png";

const ReportsSidebar = () => {
  return (
    <div className="w-64 h-screen bg-[#FFFFFF] border-r border-[#E5E7EB] p-6 fixed left-0">
      <div className="mb-10">
        <h2 className="text-xl font-semibold  text-[#0F172A]">Admin Central</h2>
        <p className="text-[#64748B] text-[12px] font-medium ">Management </p>
      </div>

      <nav className="flex flex-col gap-4 h-95  font-semibold text-[14px]">
        <NavLink
          to="team"
          className={({ isActive }) =>
            `flex items-center gap-4 ${isActive ? "text-[#0029F5]" : "text-[#6B7280]"}`
          }
        >
          <img src={team} alt="Team" />
          Team Allocation
        </NavLink>

        <NavLink
          to="users"
          className={({ isActive }) =>
            `flex items-center gap-4 ${isActive ? "text-[#0029F5]" : "text-[#6B7280]"}`
          }
        >
          <img src={user} alt="User" />
          User Management
        </NavLink>

        <NavLink
          to="."
          end
          className={({ isActive }) =>
            `flex items-center gap-4 ${isActive ? "text-[#0029F5]" : "text-[#6B7280]"}`
          }
        >
          <img src={report} alt="Report" />
          Reports
        </NavLink>
      </nav>
      <div className=" border-t border-[#E5E7EB] ">
        <div className="flex flex-col gap-4  font-medium text-[12px] text-[#475569] border-t border-[#CCC3D833] p-2">
          <Link className="flex items-center gap-2">
            <img src={help} alt="Help" />
            Help Center
          </Link>
          <Link className="flex items-center gap-2">
            <img src={exit} alt="Exit" />
            Logout
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ReportsSidebar;
