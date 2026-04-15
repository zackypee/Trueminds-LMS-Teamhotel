import React from "react";
import Bellicon from "../../../assets/bellicon.png";

export default function Notification() {
  const notifications = [
    {
      id: 1,
      Title: "Assignment Due Tomorrow",
      message:
        "UI/UX Fundamentals - Week 3 project submission is due Friday, March 28 at 11:59 PM. Make sure your Figma file is complete and shared with your mentor before deadline.",
      time: "2 hours ago",
      type: "info",
      button: {
        label: "View Assignment",
        link: "/learner/assignments",
      },
    },
    {
      id: 2,
      Title: "Assignment Due Tomorrow",
      message:
        "UI/UX Fundamentals - Week 3 project submission is due Friday, March 28 at 11:59 PM. Make sure your Figma file is complete and shared with your mentor before deadline.",
      time: "1 day ago",
      type: "success",
      button: {
        label: "View Assignment",
        link: "/learner/assignments",
      },
    },
  ];
  return (
    <div className="p-4">
      <h2 className="text-[36px] font-bold mb-4 bg-[#1E3A5F] p-10 text-white">
        Notifications
      </h2>
      {notifications.length === 0 ? (
        <div className="text-center py-20">
          <p className="text-gray-500 text-lg">
            No notifications at the moment.
          </p>
        </div>
      ) : (
        <ul className="space-y-4">
          <div className="flex justify-between px-12 py-3">
            <span>
              <p className="text-[#6B7280]"> Unread Messages</p>
            </span>
            <span className="flex gap-3">
              <button className=" text-blue-500 font-bold px-2 py-1 rounded text-xs">
                {" "}
                Mark all as read
              </button>
              <button className=" text-[#6B7280] px-2 py-1 rounded text-xs font-bold">
                {" "}
                Clear All
              </button>
            </span>
          </div>
          {notifications.map((notification) => (
            <li
              key={notification.id}
              className={`p-4 rounded-lg shadow ${notification.type === "info" ? "bg-blue-50 text-blue-700" : "bg-green-50 text-green-700"}`}
            >
              <div className="flex justify-between gap-2 items-start">
                <img
                  src={Bellicon}
                  alt="Notification Icon"
                  className="w-10 h-10 mr-4"
                />
                <div>
                  <h3 className="text-lg font-semibold">
                    {notification.Title}
                  </h3>
                  <p className="mt-1 text-sm">{notification.message}</p>
                </div>
                <div className="flex gap-3">
                  <span className="text-xs text-gray-500">
                    {notification.time}
                  </span>
                  <div className="bg-blue rounded-md w-15"></div>
                </div>
              </div>
              {notification.button && (
                <a
                  href={notification.button.link}
                  className={`inline-block text-left mt-4 px-4 py-2 ml-28 rounded ${notification.type === "info" ? " text-blue-700" : " text-green-600"}`}
                >
                  {notification.button.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
