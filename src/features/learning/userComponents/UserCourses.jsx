
import React, { useState, useEffect } from "react";
import { Line } from "rc-progress";
import { CiBookmark } from "react-icons/ci";
import { FaBookmark } from "react-icons/fa";
import { IoMdStar } from "react-icons/io";
import { MdOutlinePersonOutline } from "react-icons/md";
import { HiClock } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { useSearchQuery } from "../context/SearchContext";
import { courses } from "../lessonsData";

const UserCourses = ({ selectedCategory, allCourses}) => {
  const [bookmarkedCourse, setBookmarkedCourse] = useState(null);
  const [ongoingCourses, setOngoingCourses] = useState([]);
  const {searchQuery} = useSearchQuery();
  const navigate = useNavigate();

  useEffect(() => {
    const storedCourses = JSON.parse(localStorage.getItem("ongoingCourses")) || [];
    setOngoingCourses(storedCourses);
  }, []);



  const availableCourses = courses;

  const filteredCourses = availableCourses.filter((course) => {
    const matchesCategory =
      selectedCategory === "All" || course.category === selectedCategory;

    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="flex-1 pr-8 py-10">
      {selectedCategory === "All" && searchQuery === "" && (
        <>
        {ongoingCourses.length > 0 && (
        <> 
          <h1 className="text-[24px] text-[#000000] font-semibold mb-6">
            Ongoing Classes
          </h1>
          <div className="flex items-center space-between gap-4 mb-8">
            {ongoingCourses.map((cls, index) => (
              <div
                key={index}
                className="w-75  border border-[#E5E7EB] shadow-sm rounded-lg "
              >
                <img
                  src={cls.imgg}
                  alt={cls.title}
                  className="w-full h-40 rounded-tr-lg rounded-tl-lg"
                />
                <div className="p-4">
                  <h2 className="text-[16px] font-semibold text-[#1F2937] line-clamp-2">
                    {cls.title}
                  </h2>
                  <p className="text-[#1F2937] font-normal text-[14px] my-3 ">
                    {cls.instructor}
                  </p>
                  <Line
                    percent={cls.percentage}
                    strokeWidth={2}
                    strokeColor="#0D9488"
                    trailColor="#F3F4F6"
                    className="mb-2"
                  />
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[#0D9488] font-semibold text-[14px]">
                      {cls.percentage}% complete
                    </span>
                    <span className="text-[#6B7280] font-normal text-[14px] ">
                      {cls.completeLessons}/{cls.totalLessons} lessons
                    </span>
                  </div>
                  <button
                  onClick={() => navigate("../course")}
                  className="bg-[#0029F5] w-full h-10 text-[#FFFFFF] text-[14px] font-semibold rounded-md cursor-pointer">
                    Continue Learning
                  </button>
                </div>
              </div>
            ))}
          </div>
        </>
        )}
        </>
      )}

      <h1 className="mt-10 text-[24px] font-semibold mb-6 text-[#000000]">
        Top Picks
      </h1>

      <div className="grid grid-cols-3 gap-4">
        {filteredCourses.map((course, index) => (
          <div
            onClick={() => {
              navigate(`../course-details/${course.id}`);
              
            }}
            key={index}
            className=" bg-[#FFFFFF] w-75 h-90 border border-[#E5E7EB] shadow-sm rounded-lg cursor-pointer mt-5 "
          >
            <img
              src={course.imgg}
              alt={course.title}
              className="w-full h-39.25 rounded-tr-lg rounded-tl-lg"
            />
            <div className="p-4 relative">
              <h2 className="text-[16px] font-semibold text-[#1F2937] w-59.25 line-clamp-2">
                {course.title}
              </h2>
              <button
                onClick={() =>
                  setBookmarkedCourse(bookmarkedCourse === index ? null : index)
                }
                className="absolute top-3 right-3 "
              >
                {bookmarkedCourse === index ? (
                  <FaBookmark size={20} />
                ) : (
                  <CiBookmark size={20} />
                )}
              </button>
              <p className="text-[#1F2937] font-normal text-[14px] mt-3 mb-5 ">
                {course.instructor}
              </p>
              {course.tools.map((tool, idx) => (
                <span
                  key={idx}
                  className={` text-[#1F2937] font-semibold text-[14px] p-2.5 rounded-lg mr-2  ${idx !== course.tools.length - 1 ? "bg-[#f2f4fe]" : ""}`}
                >
                  {tool}
                </span>
              ))}
              <div className="flex items-center justify-between mt-6 text-[14px] font-semibold ">
                <p className="flex items-center gap-2">
                  <IoMdStar /> <span>{course.rating}</span>
                </p>
                <p className="flex items-center gap-2">
                  <MdOutlinePersonOutline /> <span>{course.students}</span>
                </p>
                <p className="flex items-center gap-2">
                  <HiClock /> <span>{course.duration}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      {filteredCourses.length === 0 && (
        <p className="text-gray-500">No courses found</p>
      )}
    </div>
  );
};


export default UserCourses;

