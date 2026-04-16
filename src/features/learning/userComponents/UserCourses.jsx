
import React, { useState } from "react";
import class1 from "../../../assets/class1.png";
import class2 from "../../../assets/class2.png";
import class3 from "../../../assets/class3.png";
import topPick1 from "../../../assets/topPick1.png";
import topPick2 from "../../../assets/topPick2.png";
import topPick3 from "../../../assets/topPick3.png";
import topPick4 from "../../../assets/topPick4.png";
import topPick5 from "../../../assets/topPick5.png";
import topPick6 from "../../../assets/topPick6.png";
import { Line } from "rc-progress";
import { CiBookmark } from "react-icons/ci";
import { FaBookmark } from "react-icons/fa";
import { IoMdStar } from "react-icons/io";
import { MdOutlinePersonOutline } from "react-icons/md";
import { HiClock } from "react-icons/hi2";
import { useNavigate } from "react-router-dom";
import { useSearchQuery } from "../context/SearchContext";

const UserCourses = ({ selectedCategory, allCourses}) => {
  const [bookmarkedCourse, setBookmarkedCourse] = useState(null);
  const {searchQuery} = useSearchQuery();
  const navigate = useNavigate();

  const ongoingClasses = [
    {
      imgg: class1,
      topic:
        "Natural Language Processing (NLP): Teaching computers to understand...",
      tutor: "Sola Afeni",
      percentage: "30",
      totalLessons: "10",
      completeLessons: "3",
    },
    {
      imgg: class2,
      topic: "Machine Learning Engineering: Building models with Python...",
      tutor: "Austin Okoro",
      percentage: "1",
      totalLessons: "20",
      completeLessons: "1",
    },
    {
      imgg: class3,
      topic: "Frontend Development: HTML, CSS and JavaScript focus",
      tutor: "Oscar Audu",
      percentage: "65",
      totalLessons: "20",
      completeLessons: "12",
    },
  ];

  const courses = [
    {
      imgg: topPick1,
      category: "AI Automation",
      title: "Product Design: Beginner’s guide to UI/UX Fundamentals",
      instructor: "John Ameh",
      tools: ["Figma", "Adobe XD", "+5"],
      rating: 4.2,
      students: "7.3k",
      duration: "4hr 24min",
    },
    {
      imgg: topPick2,
      category: "Animation",
      title: "Social Media Content Creation: Be a Content Creator",
      instructor: "Bethel Adeusi",
      tools: ["Canva", "CapCut", "Inshot", "+11"],
      rating: 4.8,
      students: "22k",
      duration: "12hr 34min",
    },
    {
      imgg: topPick3,
      category: "Data Analytics",
      title: "Adobe Creative Cloud: Photoshop, Illustrator, Premiere Pro",
      instructor: "David Gbeyoga",
      tools: ["Photoshop", "Illustrator", "+14"],
      rating: 4.5,
      students: "114k",
      duration: "18hr 24min",
    },
    {
      imgg: topPick4,
      category: "Design",
      title: "Professional Photography: All You Need To Know on Photography",
      instructor: "Muna Ejiro",
      tools: ["Photoshop", "Lightroom", "+8"],
      rating: 4.2,
      students: "7.3k",
      duration: "4hr 24min",
    },
    {
      imgg: topPick5,
      category: "Marketing",
      title: "Digital Marketing: Become a Pro in Marketing",
      instructor: "Dani Oluwatosin",
      tools: ["Canva", "CapCut", "Inshot", "+5"],
      rating: 4.8,
      students: "22k",
      duration: "12hr 34min",
    },
    {
      imgg: topPick6,
      category: "Virtual Assistance",
      title: "Virtual Assistance: Be an Asset for Top CEOs",
      instructor: "James Brown",
      tools: ["HubSpot", "Salesforce", "+9"],
      rating: 4.5,
      students: "114k",
      duration: "18hr 24min",
    },

    {
      imgg: topPick1,
      category: "Cyber Security",
      title: "Product Design: Beginner’s guide to UI/UX Fundamentals",
      instructor: "John Ameh",
      tools: ["Figma", "Adobe XD", "+5"],
      rating: 4.2,
      students: "7.3k",
      duration: "4hr 24min",
    },
    {
      imgg: topPick2,
      category: "Illustration",
      title: "Social Media Content Creation: Be a Content Creator",
      instructor: "Bethel Adeusi",
      tools: ["Canva", "CapCut", "Inshot", "+11"],
      rating: 4.8,
      students: "22k",
      duration: "12hr 34min",
    },
    {
      imgg: topPick3,
      category: "Production & Videography",
      title: "Adobe Creative Cloud: Photoshop, Illustrator, Premiere Pro",
      instructor: "David Gbeyoga",
      tools: ["Photoshop", "Illustrator", "+14"],
      rating: 4.5,
      students: "114k",
      duration: "18hr 24min",
    },
    {
      imgg: topPick4,
      category: "Web Development",
      title: "Professional Photography: All You Need To Know on Photography",
      instructor: "Muna Ejiro",
      tools: ["Photoshop", "Lightroom", "+8"],
      rating: 4.2,
      students: "7.3k",
      duration: "4hr 24min",
    },
    {
      imgg: topPick5,
      category: "Data Science",
      title: "Digital Marketing: Become a Pro in Marketing",
      instructor: "Dani Oluwatosin",
      tools: ["Canva", "CapCut", "Inshot", "+5"],
      rating: 4.8,
      students: "22k",
      duration: "12hr 34min",
    },
    {
      imgg: topPick6,
      category: "Data Analytics",
      title: "Virtual Assistance: Be an Asset for Top CEOs",
      instructor: "James Brown",
      tools: ["HubSpot", "Salesforce", "+9"],
      rating: 4.5,
      students: "114k",
      duration: "18hr 24min",
    },
  ];

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
    <div className="flex-1 px-6 py-10">
      {selectedCategory === "All" && searchQuery === "" && (
        <>
          <h1 className="text-[24px] text-[#000000] font-semibold mb-6">
            Ongoing Classes
          </h1>
          <div className="flex items-center space-between gap-4 mb-8">
            {ongoingClasses.map((cls, index) => (
              <div
                key={index}
                className="w-75  border border-[#E5E7EB] shadow-sm rounded-lg "
              >
                <img
                  src={cls.imgg}
                  alt={cls.topic}
                  className="w-full h-40 rounded-tr-lg rounded-tl-lg"
                />
                <div className="p-4">
                  <h2 className="text-[16px] font-semibold text-[#1F2937] line-clamp-2">
                    {cls.topic}
                  </h2>
                  <p className="text-[#1F2937] font-normal text-[14px] my-3 ">
                    {cls.tutor}
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

      <h1 className="mt-10 text-[24px] font-semibold mb-6 text-[#000000]">
        Top Picks
      </h1>

      <div className="grid grid-cols-3 gap-4">
        {filteredCourses.map((course, index) => (
          <div
            onClick={() => navigate(`../course-details/${index+1}`)}
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

