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
import { BiSearch } from "react-icons/bi";

const UserCourses = ({ selectedCategory, setCategory }) => {
  const [bookmarkedCourse, setBookmarkedCourse] = useState(null);
  const { searchQuery, setSearchQuery } = useSearchQuery();
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

  const filteredCourses = courses.filter((course) => {
    const matchesCategory =
      selectedCategory === "All" || course.category === selectedCategory;

    const matchesSearch =
      course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      <div className=" p-6 hidden md:block md:flex-1  ">
        {selectedCategory === "All" && searchQuery === "" && (
          <>
            <h1 className="text-[24px] text-[#000000] font-semibold mb-6">
              Ongoing Classes
            </h1>
            <div className="flex gap-4 mb-8 overflow-x-auto md:overflow-visible no-scrollbar">
              {ongoingClasses.map((cls, index) => (
                <div
                  key={index}
                  className="min-w-70 md:w-75 border border-[#E5E7EB] shadow-sm rounded-lg "
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
                      className="bg-[#7C3AED] w-full h-10 text-[#FFFFFF] text-[14px] font-semibold rounded-md cursor-pointer"
                    >
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
              onClick={() => navigate("../course-details")}
              key={index}
              className=" bg-[#FFFFFF] w-75 h-90  border border-[#E5E7EB] shadow-sm rounded-lg cursor-pointer mt-5 "
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
                    setBookmarkedCourse(
                      bookmarkedCourse === index ? null : index,
                    )
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
                    className={` text-[#1F2937] font-semibold text-[14px] p-2.5 rounded-2xl mr-2  ${idx !== course.tools.length - 1 ? "bg-[#EDE9FE]" : ""}`}
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

      {/* mobile screen */}
      <div className="md:hidden">
        {/* Sticky Header (Search + Tabs) */}
        <div className="sticky top-0 z-50 bg-white px-4 pt-4 pb-3 border-b border-[#E5E7EB]">
          {/* Search */}
          <div className="flex items-center gap-2 p-2.5 rounded-lg bg-[#F9FAFB] border border-[#E5E7EB] h-13.75">
            <BiSearch className="text-[#6B7280] w-4.5 h-4.5" />
            <input
              type="text"
              value={searchQuery}
              placeholder="Search for courses..."
              onChange={(e) => setSearchQuery(e.target.value)}
              className="border-none outline-none placeholder:text-[#6B7280] text-[14px] font-normal w-full bg-transparent"
            />
          </div>

          {/* Categories Tabs */}
          <div className="flex gap-2 overflow-x-auto no-scrollbar mt-3">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => {
                  setCategory(item);
                }}
                className={`whitespace-nowrap px-4 py-2 rounded-xl text-[14px] font-medium transition-all duration-200 ${
                  selectedCategory === item
                    ? "bg-[#0029F5] text-[#FFFFFF]"
                    : "bg-[#0029F50D] text-[#6B7280]"
                }`}
              >
                {item === "All" ? "All Courses" : item}
              </button>
            ))}
          </div>
        </div>

        <div className="px-4 mt-4">
          {/* Ongoing Classes */}
          {selectedCategory === "All" && searchQuery === "" && (
            <>
              <div className="flex items-center gap-40 mb-3">
                <h1 className="text-[18px] font-semibold text-[#1F2937]">
                  Ongoing Classes
                </h1>
                <span className="text-[12px] text-[#4F46E5] font-medium cursor-pointer">
                  See All
                </span>
              </div>

              <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
                {ongoingClasses.map((cls, index) => (
                  <div
                    key={index}
                    className="w-75 bg-white border border-[#E5E7EB] rounded-lg shadow-sm"
                  >
                    <img
                      src={cls.imgg}
                      alt={cls.topic}
                      className="w-full h-36 rounded-t-lg"
                    />

                    <div className="p-3">
                      <h2 className="text-[14px] font-semibold text-[#1F2937] line-clamp-2">
                        {cls.topic}
                      </h2>

                      <p className="text-[12px] text-[#6B7280] mt-1">
                        {cls.tutor}
                      </p>

                      <Line
                        percent={cls.percentage}
                        strokeWidth={2}
                        strokeColor="#0D9488"
                        trailColor="#F3F4F6"
                        className="mt-2"
                      />

                      <p className="text-[12px] text-[#0D9488] font-medium mt-1">
                        {cls.percentage}% completed
                      </p>

                      <button
                        onClick={() => navigate("../course")}
                        className="mt-3 w-full bg-[#0029F5] text-white text-[13px] font-medium py-2 rounded-md"
                      >
                        Continue Learning
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}

          {/* Top Picks */}
          <h1 className="mt-6 text-[18px] font-semibold text-[#1F2937]">
            Top Picks
          </h1>

          <div className="flex flex-col gap-4 mt-3 ml-5">
            {filteredCourses.map((course, index) => (
              <div
                key={index}
                onClick={() => navigate("../course-details")}
                className="bg-white border border-[#E5E7EB] rounded-lg shadow-sm overflow-hidden w-75 h-90"
              >
                <img
                  src={course.imgg}
                  alt={course.title}
                  className="w-full h-40"
                />

                <div className="p-3 relative">
                  <h2 className="text-[14px] font-semibold text-[#1F2937] line-clamp-2">
                    {course.title}
                  </h2>

                  {/* Bookmark */}
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setBookmarkedCourse(
                        bookmarkedCourse === index ? null : index,
                      );
                    }}
                    className="absolute top-3 right-3"
                  >
                    {bookmarkedCourse === index ? (
                      <FaBookmark size={16} />
                    ) : (
                      <CiBookmark size={16} />
                    )}
                  </button>

                  <p className="text-[12px] text-[#6B7280] mt-2">
                    {course.instructor}
                  </p>

                  {/* Tools */}
                  <div className="mt-2 flex flex-wrap gap-1">
                    {course.tools.slice(0, 2).map((tool, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] px-2 py-1 bg-[#EDE9FE] rounded-full"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="flex items-center justify-between mt-3 text-[12px] text-[#6B7280]">
                    <span className="flex items-center gap-1">
                      <IoMdStar /> {course.rating}
                    </span>
                    <span className="flex items-center gap-1">
                      <MdOutlinePersonOutline /> {course.students}
                    </span>
                    <span className="flex items-center gap-1">
                      <HiClock /> {course.duration}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <p className="text-gray-500 mt-4">No courses found</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UserCourses;
