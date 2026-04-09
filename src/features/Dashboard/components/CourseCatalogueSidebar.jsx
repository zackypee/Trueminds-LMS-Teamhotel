import React from "react";
import { NavLink } from "react-router-dom";

const CourseCatalogueSidebar = ({ selectedCategory, setCategory }) => {
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
    <div className="mt-20 hidden md:block">
      <div className="md:w-80 w-16 border-r border-[#00000033]  min-h-screen py-4  px-20  flex flex-col">
        {menuItems.map((item) => {
          return (
            <div
              key={item}
              onClick={() => setCategory(item)}
              className={`py-3 cursor-pointer text-[#6B7280] font-normal text-[14px] ${
                selectedCategory === item
                  ? "bg-[#EDE9FE] rounded-sm w-47.25 h-10.75 py-1.5 text-[12px] text-[#7C3AED]"
                  : "hover:bg-gray-100 w-47.25 h-10.75 py-1.5 text-[12px] hover:text-[#7C3AED]"
              }`}
            >
              {item}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CourseCatalogueSidebar;
