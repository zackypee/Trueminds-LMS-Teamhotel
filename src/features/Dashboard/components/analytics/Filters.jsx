import React from "react";

const Filters = () => {
  return (
    <div className="flex gap-4 bg-[#0029F50D] p-6 rounded-lg h-27">
      <div>
        <label
          htmlFor="period"
          className="block text-[#4A4455] font-semibold text-[12px] mb-1"
        >
          DATE RANGE
        </label>
        <select
          id="period"
          className="block bg-[#FFFFFF] border border-[#FFFFFF] outline-none ring-0 w-[135.88px] h-9.5 rounded  text-[16px] text-[#001C3B]"
        >
          <option>Last 30 Days</option>
          <option>Last 7 Days</option>
          <option>Last Month</option>
          <option>Last Year</option>
        </select>
      </div>

      <div>
        <label
          htmlFor="department"
          className="block text-[#4A4455] font-semibold text-[12px] mb-1"
        >
          DEPARTMENT
        </label>
        <select
          id="department"
          className="block bg-[#FFFFFF] border border-[#FFFFFF] outline-none ring-0 w-[135.88px] h-9.5 rounded px-4 py-2 text-[16px] text-[#001C3B]"
        >
          <option>All Departments</option>
        </select>
      </div>

      <div className="ml-auto">
        <h2 className="text-[#4A4455] font-bold text-[12px] mb-2">
          QUICK FILTER
        </h2>
        <div className=" flex gap-2">
          <button className="bg-[#0029F5] rounded-xl h-6 w-[60.84px] text-[12px] text-[#FFFFFF] font-semibold">
            Active
          </button>
          <button className="bg-[#0029F50D] border border-[#E5E7EB] rounded-xl h-6 w-[76.13px] text-[12px] text-[#001C3B] font-semibold">
            Archived
          </button>
        </div>
      </div>
    </div>
  );
};

export default Filters;
