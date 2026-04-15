import React from "react";

export default function NotificationScreen() {
  return (
    <div className="w-full h-96 flex items-center justify-center">
      <h1 className="text-white text-lg text-center bg-[#1E3A5F]">
        Notification
      </h1>

      <div>
        <p> 4 unread notification</p>
        <span>
          <button>Mark all as read</button>
          <button>Clear all</button>
        </span>
      </div>
    </div>
  );
}
