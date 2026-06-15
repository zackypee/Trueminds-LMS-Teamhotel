import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";
import { RiMenu3Line } from "react-icons/ri";
import bell from "../../../assets/bell.png";
import profile from "../../../assets/profile.png";

const Navbar = ({ setSearchQuery, onMenuOpen }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="px-6 py-4 bg-[#ffffff] h-16 shadow-[0px_1px_2px_0px_rgba(30,58,138,0.05)] flex items-center justify-between fixed top-0 left-0 right-0 z-40">

      <div className="flex items-center gap-4">
        {/* Hamburger — mobile only */}
        <button
          className="md:hidden text-[#1E3A5F]"
          onClick={onMenuOpen}
        >
          <RiMenu3Line size={24} />
        </button>

        <h1 className="font-bold text-[24px] md:text-[30px] text-[#1E3A5F]">
          Talent<span className="text-[#7C3AED]">Flow</span>
        </h1>

        {/* Search bar — hidden on mobile */}
        <div className="hidden md:flex items-center gap-2 p-2.5 rounded-xl border border-[#E5E7EB] max-w-100 w-full h-13.75">
          <BiSearch className="text-[#6B7280] w-4.5 h-4.5" />
          <input
            type="text"
            placeholder="Search for anything..."
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border-none outline-none placeholder:text-[#6B7280] text-[14px] font-normal w-full"
          />
        </div>
      </div>

      <div className="flex items-center gap-4 md:gap-8">
        {/* Nav links — hidden on mobile */}
        <NavLink
          to="/course-catalogue"
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
          to="/browse"
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

        {/* Bell */}
        <div className="relative inline-block cursor-pointer">
          <img src={bell} alt="Bell" className="h-6 w-6" />
          <span className="absolute -top-0.5 -right-0.5 bg-[#D97706] text-white text-[10px] font-bold rounded-xl h-4 w-4 flex items-center justify-center">
            2
          </span>
        </div>

        {/* Profile */}
        <img
          src={profile}
          alt="Profile"
          className="h-8 w-8 rounded-xl cursor-pointer"
          onClick={() => setIsOpen(true)}
        />
      </div>

      {/* Profile Drawer */}
      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-30 bg-black/20"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed z-40 top-0 right-0 h-full w-62.5 bg-white shadow-lg">
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-600 absolute top-4 right-4"
            >
              ✕
            </button>
            <div className="p-4 mt-10 flex flex-col gap-4 text-[16px] text-[#000000] font-normal">
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
              <Link>Logout</Link>
              <Link>Contact Us</Link>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;