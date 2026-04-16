import { useState } from "react";
import { MdAccessAlarm } from "react-icons/md";
import { MdErrorOutline } from "react-icons/md";
import { LuCloudMoon } from "react-icons/lu";
import { IoFilter } from "react-icons/io5";
import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { BsThreeDotsVertical } from "react-icons/bs";

export default function MyProgress() {
  const [activeTab, setActiveTab] = useState("All Courses");

  const tabs = ["All Courses", "In Progress", "Completed", "Archived"];

  const items = [
    {
      img: "/images/5fe57296eb822668ff279d11a9ff17594b66c628.jpg",
      title:
        "Natural Language Processing (NLP): Teaching computers to understand...",
      name: "Sola Afeni",
      percent: "30% complete",
      lesson: "3/10 lessons",
      status: "In Progress",
    },
    {
      img: "/images/0935f02716268034c807e2ea7e9f8550b717ae2f.jpg",
      title: "Machine Learning Engineering: Building models with Python...",
      name: "Austin Okoro",
      percent: "1% complete",
      lesson: "1/20 lessons",
      status: "In Progress",
    },
    {
      img: "/images/f277d0515cd990bf659a010a8b88a2e1fa3bb68b.jpg",
      title: "Frontend Development HTML, CSS and JavaScript focus",
      name: "Oscar Audu",
      percent: "100% complete",
      lesson: "20/20 lessons",
      status: "Completed",
    },
  ];

  const filteredItems =
    activeTab === "All Courses"
      ? items
      : items.filter((i) => i.status === activeTab);

  return (
    <>
      <div className="sticky top-16  px-5 md:px-10 pt-5 mb-5 pb-2 md:pb-5 bg-[#1E3A5F]">
        <h1 className="font-bold mb-4 text-white text-[24px] md:text-[36px]">
          My Progress
        </h1>
        <div className="flex justify-between md:justify-start md:gap-10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`text-[16px] pb-2 transition-all ${
                activeTab === tab
                  ? "text-white border-b-2 border-white font-semibold"
                  : "text-[#F9FAFB] opacity-70"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="mx-5 md:mx-10 mt-8 mb-20">
        <div className="flex flex-col md:border md:border-[#E5E7EB] shadow-sm md:flex-row md:justify-between">
          <div className="border px-4 py-5 md:border-0 border-[#E5E7EB] rounded">
            <h2 className="font-semibold mb-1 text-[18px] text-[#1F2937]">
              Start a weekly streak
            </h2>
            <p className="text-[13px] md:text-[14px] text-[#6B7280]">
              Let's chip away at your learning goals.
            </p>
          </div>
          <div className="border md:border-0 border-[#E5E7EB] py-4 px-4 md:gap-40 flex items-center justify-between rounded">
            <div className="flex items-center gap-2">
              <LuCloudMoon className="text-[#6B7280] text-2xl" />
              <div className="flex flex-col gap-1">
                <span className="text-[12px] text-[#1F2937]">
                  <strong className="text-lg">0</strong> Weeks
                </span>
                <span className="text-[12px] md:text-[14px] text-[#6B7280]">
                  Current streak
                </span>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full border-5 border-gray-200 flex items-center justify-center">
                <div className="w-6 h-6 rounded-full bg-white border-5 border-[#16A34A]"></div>
              </div>
              <div className="flex flex-col gap-4">
                <div className="flex gap-1 items-center">
                  <p className="w-2 h-2 bg-[#D97706] rounded-full"></p>
                  <p className="text-[12px] md:text-[14px] text-[#1F2937]">
                    <strong>0</strong>/30 course min
                  </p>
                  <MdErrorOutline className="text-[#6B7280] text-lg" />
                </div>
                <div className="flex gap-2 items-center">
                  <p className="w-2 h-2 rounded-full bg-[#16A34A]"></p>
                  <p className="text-[12px] md:text-[14px] text-[#1F2937]">
                    <strong>1</strong>/1 visit
                  </p>
                </div>
                <p className="text-[12px] md:text-[14px] text-[#1F2937]">
                  March 22 - 29
                </p>
              </div>
            </div>
          </div>
        </div>

        <section className="flex gap-4 mt-4 shadow-sm border px-4 py-5 border-[#E5E7EB] rounded">
          <MdAccessAlarm className="text-2xl text-[#1F2937]" />
          <div>
            <h2 className="font-semibold mb-2 md:text-[20px] text-[18px] text-[#1F2937]">
              Schedule learning time
            </h2>
            <p className="text-[13px] text-[#6B7280] md:w-[80%]">
              Learning a little each day adds up. Research shows that students
              who make learning a habit are more likely to reach their goals.
              Set time aside to learn and get reminders using your learning
              scheduler.
            </p>
            <div className="gap-4 flex mt-4">
              <button className="font-semibold rounded text-[#0029F5] py-2 px-4 border-2 border-[#0029F5]">
                Get Started
              </button>
              <button className="text-[#0029F5] font-semibold">Dismiss</button>
            </div>
          </div>
        </section>

        <section className="mt-5">
          <div className="md:flex md:justify-between md:items-center">
            <div className="flex gap-2 md:w-full">
              <div className="flex gap-2 border bg-[#F9FAFB] items-center rounded-4xl px-4 py-2 border-[#E5E5E5]">
                <IoFilter />
                <p className="font-semibold text-[13px] md:text-[14px] text-[#1F2937]">
                  All Filters
                </p>
              </div>
              <div className="flex gap-2 border bg-[#F9FAFB] items-center rounded-4xl px-4 py-2 border-[#E5E5E5]">
                <p className="font-semibold text-[13px] md:text-[14px] text-[#1F2937]">
                  Categories
                </p>
                <RiArrowDropDownLine className="text-2xl" />
              </div>
            </div>
            <div className="flex gap-2 mb-4 border w-full md:flex-row-reverse items-center rounded-lg mt-4 px-4 py-4 border-[#E5E5E5]">
              <CiSearch className="bg-[#F9FAFB] text-2xl" />
              <input
                className="outline-0 w-full"
                type="text"
                placeholder="Search my course"
              />
            </div>
          </div>
          <div className="flex mb-10 md:mb-2 justify-between items-center">
            <p className="text-[13px] md:text-[14px] text-[#1E3A5F]">
              {filteredItems.length} courses
            </p>
            <div className="flex items-center">
              <p className="text-[13px] md:text-[14px] font-semibold text-[#1E3A5F]">
                Recently Accessed
              </p>
              <RiArrowDropDownLine className="text-2xl" />
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 md:gap-4">
          {filteredItems.length > 0 ? (
            filteredItems.map((i) => (
              <div
                key={i.name}
                className="flex relative flex-col gap-4 mt-4 shadow-lg rounded-b-xl"
              >
                <div>
                  <img
                    src={i.img}
                    className="rounded-t-xl w-full h-50 object-cover"
                    alt=""
                  />
                  <div className="bg-white px-3 py-3 rounded absolute top-2 right-5">
                    <BsThreeDotsVertical />
                  </div>
                </div>
                <div className="px-4">
                  <div>
                    <p className="font-semibold text-[14px] md:text-[15px] mb-2 text-[#1F2937]">
                      {i.title}
                    </p>
                    <p className="text-[13px] md:text-[14px] text-[#1F2937] mb-4">
                      {i.name}
                    </p>
                  </div>
                  <div className="w-full h-2 bg-gray-300 rounded-full mb-2">
                    <div
                      className="h-2 bg-[#0D9488] rounded-full "
                      style={{ width: i.percent.split(" ")[0] }}
                    ></div>
                  </div>
                  <div className="flex justify-between items-center">
                    <p className="font-semibold text-[13px] md:text-[14px] text-[#0D9488]">
                      {i.percent}
                    </p>
                    <p className="text-[13px] md:text-[14px] text-[#6B7280]">
                      {i.lesson}
                    </p>
                  </div>
                  <button
                    className={`mb-4 mt-4 py-3 rounded font-semibold text-white w-full ${
                      i.status === "Completed"
                        ? "bg-green-600 hover:bg-green-700"
                        : "bg-[#0029F5] hover:bg-[#1E3A5F]"
                    }`}
                  >
                    {i.status === "Completed"
                      ? "View Certificate"
                      : "Continue Learning"}
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="text-[#6B7280] mt-4 col-span-3 text-center">
              No courses in this category.
            </p>
          )}
        </section>
      </div>
    </>
  );
}
