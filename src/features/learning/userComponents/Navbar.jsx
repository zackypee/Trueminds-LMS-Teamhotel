import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";
import bell from "../../../assets/bell.png";
import profile from "../../../assets/profile.png";
import { useSearchQuery } from "../context/SearchContext";
import useLogoutUser from "../../auth/hooks/useLogoutUser";

const Navbar = ({ onMenuClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const { setSearchQuery } = useSearchQuery();
  const { onHandleLogout } = useLogoutUser();

  return (
    <nav className="px-6 py-4 bg-[#ffffff] h-16 shadow-[0px_1px_2px_0px_rgba(30,58,138,0.05)] flex items-center justify-between fixed left-0 right-0 z-2">
      <div className="flex items-center gap-6">

        {/* Hamburger - mobile only */}
        <button
          onClick={onMenuClick}
          className="lg:hidden flex flex-col gap-1.5 p-1"
        >
          <span className="block w-6 h-0.5 bg-gray-600"></span>
          <span className="block w-6 h-0.5 bg-gray-600"></span>
          <span className="block w-6 h-0.5 bg-gray-600"></span>
        </button>

        <h1 className="font-bold text-[30px] text-[#1E3A5F]">
          Talent<span className="text-[#7C3AED]">Flow</span>
        </h1>
        <div className="hidden md:flex items-center gap-2 p-2.5 rounded-xl border border-[#E5E7EB] max-w-100 w-full h-13.75">
          <BiSearch className="text-[#6B7280] w-4.5 h-4.5" />
          <input
            type="text"
            placeholder="Search for anything..."
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border-none outline-none placeholder:text-[#6B7280] text-[14px] font-normal"
          />
        </div>
      </div>

      <div className="flex items-center gap-8">
        <NavLink
          to="dashboard"
          className={({ isActive }) =>
            `hidden md:block text-[14px] font-normal ${
              isActive
                ? "text-[#7C3AED] border-b-2 border-[#7C3AED] pb-1 font-semibold"
                : "text-[#475569]"
            }`
          }
          end
        >
          My Learning
        </NavLink>

        <NavLink
          to="courses"
          className={({ isActive }) =>
            `hidden md:block text-[14px] font-normal ${
              isActive
                ? "text-[#7C3AED] border-b-2 border-[#7C3AED] pb-1 font-semibold"
                : "text-[#475569]"
            }`
          }
        >
          Browse
        </NavLink>

        <div className="relative inline-block cursor-pointer">
          <img src={bell} alt="Bell" className="h-6 w-6 text-gray-600" />
          <span className="absolute -top-0.5 -right-0.5 bg-[#D97706] text-white text-[10px] font-bold rounded-xl h-4 w-4 flex items-center justify-center">
            2
          </span>
        </div>

        <img
          src={profile}
          alt="Profile"
          className="h-8 w-8 rounded-xl cursor-pointer"
          onClick={() => setIsOpen(true)}
        />
      </div>

      {isOpen && (
        <div
          className={`fixed z-30 top-0 right-0 h-175 w-62.5 bg-white shadow-lg transform transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-600 absolute top-4 right-4"
          >
            ✕
          </button>
          <div className="p-4 mt-5 flex flex-col gap-4 text-[16px] text-[#000000] font-normal">
            <Link>My Profile</Link>
            <Link>Notifications</Link>
            <Link className="flex items-center justify-between">
              <p>Messages</p>
              <span className="bg-[#E8651A] text-white text-[16px] font-bold rounded-xl h-6 w-6 flex items-center justify-center">
                2
              </span>
            </Link>
            <Link>My dashboard</Link>
            <Link>My learning Progress</Link>
            <Link>View team</Link>
            <Link>Collaboration hub</Link>
            <Link>View Course Catalogue</Link>
            <Link>Account Settings</Link>
            <Link>Language</Link>
            <Link>Help and Support</Link>
            <Link onClick={onHandleLogout}>Logout</Link>
            <Link>Contact Us</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;