import React from "react";
import { NavLink } from "react-router-dom";

const UserCourseCatalogueSidebar = ({ selectedCategory, setCategory }) => {
  const menuItems = [
    "All",
    "AI Automation",
    "Animation",
    "Art & Creativity",
    "Cyber Security",
    "Data Analytics",
    "Data Science",
    "Design",
    "Illustration",
    "Marketing",
    "Production & Videography",
    "Virtual Assistance",
    "Web Development",
  ];

  return (
    <div>
      {/* desktop screen */}
      <div className="mt-20 hidden md:block">
        <div className="fixed top-20 left-0 overflow-x-auto border-r border-[#00000033] w-[250px]  max-h-screen py-5 pb-25  px-10  flex flex-col">
          {menuItems.map((item) => {
            return (
              <div
                key={item}
                onClick={() => setCategory(item)}
                className={`py-3 cursor-pointer text-[#6B7280] font-normal text-[14px] ${
                  selectedCategory === item
                    ? "bg-[#f2f4fe] w-47.25  py-1.5 px-4 text-[12px] text-[#0029F5] rounded-sm"
                    : "hover:bg-gray-100 px-2 w-47.25  py-1.5 text-[12px] hover:text-[#0029F5]"
                }`}
              >
                {item}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default UserCourseCatalogueSidebar;
