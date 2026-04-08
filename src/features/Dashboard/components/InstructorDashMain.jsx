import React from "react";
import searchIcon from "../../../assets/search-icon.png";
import historyIcon from "../../../assets/history-icon.png";
import cloudIcon from "../../../assets/cloud-icon.png"
import noteIcon from "../../../assets/note-icon.png"
import arrowIcon from "../../../assets/arrow-icon.png"

export default function InstrucDashMain() {
  return (
    <div className="flex flex-col flex-1 bg-white">

      {/* Search Bar */}
      <div className="flex items-center gap-2 border border-[#E5E7EB] rounded-lg px-4 py-2 mx-6 mt-4 max-w-md">
        <img src={searchIcon} alt="search icon" className="w-4 h-4" />
        <input
          type="text"
          placeholder="Search students, courses..."
          className="flex-1 text-sm text-[#6B7280] outline-none placeholder:text-[#6B7280] placeholder:font-semibold placeholder:text-sm"
        />
      </div>

      {/* Main Content */}
      <div className="px-6 py-6 flex flex-col gap-6">

        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-[36px] font-bold text-[#001C3B]">Instructor Dashboard</h1>
            <p className="text-[16px]  text-[#6B7280] mt-1">
              Welcome back, Instructor. Your learners are making great progress today.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-2 text-sm font-medium text-[#7C3AED] shadow-sm py-4 px-4 rounded-lg">
              <img src={historyIcon} alt="" className="w-4 h-4" />
              View History
            </button>
            <button className="bg-[#7C3AED] text-white text-sm font-semibold px-4 py-4 rounded-lg hover:bg-[#6D2ED9] transition-colors">
              Full Report
            </button>
          </div>
        </div>

        {/* Cards + Pending Feedback */}
        <div className="flex gap-4">

          {/* Left — Action Cards + Stats */}
          <div className="flex flex-col gap-6 flex-1">

            {/* Action Cards */}
            <div className="flex gap-4">

              {/* Upload Materials */}
              <div className="flex-1 bg-[#7C3AED] rounded-2xl p-6 flex flex-col gap-4">
                <div className="w-[28.5px] h-[30px] rounded-xl flex items-center justify-center">
                  <img src={cloudIcon} alt="" />
                </div>
                <div>
                  <h2 className="text-white font-extrabold text-[24px]">Upload Materials</h2>
                  <p className="text-[#F9FAFB] text-sm mt-2">
                    Add new videos, PDFs, or interactive lessons to your course library.
                  </p>
                </div>
                <button className="bg-white text-[#630ED4] text-sm font-semibold px-4 py-2 rounded-lg w-fit hover:bg-gray-100 transition-colors">
                  Start Upload
                </button>
              </div>

              {/* Create Assignment */}
              <div className="flex-1 bg-gradient-to-br  from-[#0D9488] to-[#455F87] rounded-2xl p-6 flex flex-col gap-4">
                <div className="w-[28.5px] h-[30px]  rounded-xl flex items-center justify-center">
                  <img src={noteIcon} alt="" />
                </div>
                <div>
                  <h2 className="text-[#F9FAFB] font-extrabold text-[24px]">Create Assignment</h2>
                  <p className="text-[#F9FAFB] text-sm mt-2">
                    Design quizzes, peer reviews, or final projects for your current modules.
                  </p>
                </div>
                <button className="bg-white text-[#455F87] text-sm font-semibold px-4 py-2 rounded-lg w-fit hover:bg-gray-100 transition-colors">
                  Create assignment
                </button>
              </div>

            </div>

            {/* Stats Row */}
            <div className="flex gap-8">
              <div>
                <p className="text-xs font-semibold text-[#64748B] uppercase tracking-wide">Total Students</p>
                <p className="text-2xl font-bold text-[#0F172A] mt-1">
                  1,284 <span className="text-sm font-semibold text-green-500">+12%</span>
                </p>
              </div>
              <div>
                <p className="text-xs font-semibold text-[#6B7280] uppercase tracking-wide">Active Courses</p>
                <p className="text-2xl font-bold text-[#0F172A] mt-1">14</p>
              </div>
              <div>
                <p className="text-xs font-semibold text-[#6B7280] uppercase tracking-wide">Avg. Progress</p>
                <p className="text-2xl font-bold text-[#0F172A] mt-1">
                  68% <span className="text-sm font-semibold text-green-500">+4%</span>
                </p>
              </div>
            </div>

          </div>

          {/* Right — Pending Feedback */}
          <div className="bg-[#FFDBCC] rounded-2xl max-w-[300px] px-6 py-6 flex flex-col gap-4">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-[#D97706] font-semibold text-[24px]  leading-tight">Pending Feedback</p>
                <p className="text-sm text-[#7B2F00] mt-1">12 Assignments waiting</p>
              </div>
              <span className="bg-[#D97706] text-white text-[16px] font-extrabold px-2.5 py-1 rounded-lg">12</span>
            </div>

            {/* Feedback Items */}
            <div className="flex flex-col gap-3">
              <div className="bg-[#ffe9e0] rounded-xl px-4 py-3 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-[#001C3B]">Intro to UX De…</p>
                  <p className="text-xs text-[#351000]">4 submissions from Unit 2</p>
                </div>
                <img src={arrowIcon} alt="" />
              </div>
              <div className="bg-[#ffe9e0] rounded-xl px-4 py-3 flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-[#0F172A]">Python Found…</p>
                  <p className="text-xs text-[#351000]">8 final projects pending</p>
                </div>
                <img src={arrowIcon} alt="" />
              </div>
            </div>

            <button className="bg-[#D97706] text-white text-sm font-semibold py-3 rounded-xl hover:bg-[#B45309] transition-colors w-full mt-auto">
              Grade All Now
            </button>
          </div>

        </div>

       

      </div>
    </div>
  );
}