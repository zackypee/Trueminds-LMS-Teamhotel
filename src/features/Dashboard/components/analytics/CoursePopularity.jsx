import React, { useState } from "react";
import { Line } from "rc-progress";

const CoursePopularity = () => {
  const courses = [
    { id: 1, name: "Cybersecurity Fundamentals", users: "2.4k", amount: 2400 },
    { id: 2, name: "Advanced React Patterns", users: "1.9k", amount: 1900 },
    { id: 3, name: "Product Leadership 101", users: "1.5k", amount: 1500 },
    { id: 4, name: "Data Science with Python", users: "1.2k", amount: 1200 },
    { id: 5, name: "Effective Communication", users: "900", amount: 900 },
    { id: 6, name: "Project Management Essentials", users: "800", amount: 800 },
    { id: 7, name: "Cloud Computing Basics", users: "1.5k", amount: 1500 },
    { id: 8, name: "AI and Machine Learning", users: "2.1k", amount: 2100 },
  ];

  const [showAll, setShowAll] = useState(false);

  const visibleCourses = showAll ? courses : courses.slice(0, 3);

  return (
    <div
      className={`bg-white p-4 rounded-xl h-103 shadow-sm ${showAll ? "h-170 z-50" : ""}`}
    >
      <h3 className="font-semibold mb-6 text-[20px] text-[#1F2937]">
        Course Popularity
      </h3>

      {visibleCourses.map((course) => (
        <div key={course.id} className="mb-6 flex items-center gap-2 relative">
          <div className="w-10 h-10 bg-[#0029F50D] flex items-center justify-center">
            <span>{course.id}</span>
          </div>
          <div>
            <p className="font-bold text-[#001C3B] text-[14px] mb-3">
              {course.name}
            </p>
            <Line
              percent={(course.amount / 2500) * 100}
              strokeWidth={3}
              strokeColor="#0D9488"
              trailColor="#F9FAFB"
            />
            <span className="text-[12px] text-[#4A4455] font-medium absolute top-3 right-0">
              {course.users} users
            </span>
          </div>
        </div>
      ))}
      <button
        onClick={() => setShowAll(!showAll)}
        className="text-[#0029F5] text-[14px] font-bold mt-7 bg-[#FFFFFF] border border-[#E5E7EB] rounded-sm w-full h-11.5 cursor-pointer"
      >
        {showAll ? "View Less Courses" : "View All Courses"}
      </button>
    </div>
  );
};

export default CoursePopularity;
