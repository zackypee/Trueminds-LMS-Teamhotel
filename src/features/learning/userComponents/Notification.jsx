import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Bellicon from "../../../assets/bellicon.png";
import MessageIcon from "../../../assets/messageicon.png";
import AshBellIcon from "../../../assets/ashbellicon.png";
import AshmessageIcon from "../../../assets/ashmessageicon.png";
import bookIcon from "../../../../src/assets/book-icon.png"
import backIcon from "../../../../src/assets/arrow-back-icon.png"

export default function Notification() {
  const navigate = useNavigate();

  // 1. Move data into state so we can "Clear" or "Mark as Read"
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      Title: "Assignment Due Tomorrow",
      message:
        "UI/UX Fundamentals - Week 3 project submission is due Friday, March 28 at 11:59 PM. Make sure your Figma file is complete and shared with your mentor before deadline.",
      time: "2 hours ago",
      type: "info",
      icon: Bellicon,
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
      icon: Bellicon,
      button: {
        label: "View Assignment",
        link: "/learner/assignments",
      },
    },
    {
      id: 3,
      Title: "New Course Material Available",
      message:
        "New lecture notes and resources have been added to the UI/UX Fundamentals course. Check out the latest materials to stay ahead in your studies.",
      time: "3 days ago",
      type: "info",
      icon: Bellicon,
      button: {
        label: "View Course Material",
        link: "/learner/courses",
      },
    },
    {
      id: 4,
      Title: "Mentor Feedback Received",
      message:
        "Your mentor has provided feedback on your Week 2 assignment. Log in to your dashboard to review the comments and suggestions for improvement.",
      time: "5 days ago",
      type: "success",
      icon: Bellicon,
      button: {
        label: "View Feedback",
        link: "/learner/assignments",
      },
    },
    {
      id: 5,
      Title: "Course Completion Certificate",
      message:
        "Congratulations! You have successfully completed the UI/UX Fundamentals course. Your certificate is now available in your profile.",
      time: "1 week ago",
      type: "success",
      icon: Bellicon,
      button: {
        label: "View Certificate",
        link: "/learner/profile",
      },
    },
    {
      id: 6,
      Title: "Eze Chika sent a message to the team",
      message: "We should have the zoom meeting tomorrow.",
      time: "1 week ago",
      type: "success",
      icon: MessageIcon,
      button: {
        label: "Open Collaboration Hub",
        link: "/learner/profile",
      },
    },
    {
      id: 7,
      Title: "New course added to the catalogue ",
      message:
        "Introduction to Prototyping - This lesson covers component variants and prototype flows in Figma.",
      time: "1 week ago",
      type: "success",
      icon: bookIcon,
      button: {
        label: "Browse Course",
        link: "/learner/profile",
      },
    },
    {
      id: 8,
      Title: "Assignment Submitted Successfully",
      message:
        "Your Week 2 project has been submitted and is currently under review. You will be notified once feedback is available.",
      time: "1 week ago",
      type: "success",
      icon: AshBellIcon,
      button: {
        label: "View Submission",
        link: "/learner/profile",
      },
    },
    {
      id: 9,
      Title: "Ahmed Aminu sent a message to the team",
      message:
        "Hey everyone, are we still meeting on Zoom today at 4PM for the project review? Please confirm so i can send the meeting link.",
      time: "1 week ago",
      type: "success",
      icon: AshmessageIcon,
      button: {
        label: "Open Collaboration Hub",
        link: "/learner/profile",
      },
    },
  ]);

  const clearAll = () => setNotifications([]);

  const markAllRead = () => {
    setNotifications(notifications.map((n) => ({ ...n, unread: false })));
  };

  return (
    <div className="p-4 max-w-full w-full mx-auto">
      {/* Header Section */}
      <h2 className="text-[32px] font-bold mb-6 bg-[#1E3A5F] p-8 text-white">
        Notifications
      </h2>
      <button className="flex gap-2 items-center text-[#0029F5] cursor-pointer mb-4 px-4"
      onClick={()=> {navigate("/learner")}}
      ><span><img src={backIcon} alt="" /></span> Back to Dashboard</button>

      {notifications.length === 0 ? (
        <div className="text-center py-20 bg-gray-50 rounded-lg border-2 border-dashed">
          <p className="text-gray-500 text-lg">
            No notifications at the moment.
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {/* Action Bar */}
          <div className="flex justify-between items-center px-4 py-2">
            <p className="text-[#6B7280] font-medium">
              {notifications.filter((n) => n.unread).length} Unread Messages
            </p>
            <div className="flex gap-4">
              <button
                onClick={markAllRead}
                className="text-blue-600 hover:underline font-semibold text-sm"
              >
                Mark all as read
              </button>
              <button
                onClick={clearAll}
                className="text-red-500 hover:underline font-semibold text-sm"
              >
                Clear All
              </button>
            </div>
          </div>

          {/* Notification List */}
          <ul className="space-y-3">
            {notifications.map((notification) => (
              <li
                key={notification.id}
                className={`p-5 rounded-xl border transition-all ${
                  notification.unread
                    ? "border-l-4 border-l-blue-500 shadow-sm"
                    : "opacity-80"
                } ${
                  notification.type === "info"
                    ? "bg-[#FFFFFF] border-[#E5E7EB]"
                    : "bg-[#FFFFFF] border-[#E5E7EB]"
                }`}
              >
                <div className="flex gap-4">
                  <img
                    src={notification.icon}
                    alt="Icon"
                    className="w-12 h-12 object-contain"
                  />

                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h3
                        className={`text-lg font-bold ${
                          notification.type === "info"
                            ? "text-[#1F2937]"
                            : "text-[#1F2937]"
                        }`}
                      >
                        {notification.Title}
                      </h3>
                      <div>
                        <span className="text-xs text-gray-400 whitespace-nowrap">
                          {notification.time}
                        </span>
                        {notification.unread && (
                          <span className="h-5 w-5 bg-blue-600 rounded-full"></span>
                        )}
                      </div>
                    </div>

                    <p className="text-gray-600 mt-1 text-sm leading-relaxed max-w-2xl">
                      {notification.message}
                    </p>

                    {notification.button && (
                      <button
                        onClick={() => navigate(notification.button.link)}
                        className={`mt-3 font-bold text-sm hover:translate-x-1 transition-transform ${
                          notification.type === "info"
                            ? "text-[#0029F5]"
                            : "text-[#0029F5]"
                        }`}
                      >
                        {notification.button.label} →
                      </button>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
