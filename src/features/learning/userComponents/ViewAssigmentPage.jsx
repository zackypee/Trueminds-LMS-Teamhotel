import React from "react";

export default function ViewAssignmentsPage() {
  return (
    <div className="min-h-screen bg-[#F8FAFC] px-6 py-10">

      <h1 className="text-2xl font-bold mb-6">Assignments</h1>

      {/* Assignment Card */}
      <div className="bg-white rounded-2xl p-6 shadow-sm max-w-xl">

        <h2 className="text-lg font-semibold mb-2">
          1. Profile Card (HTML)
        </h2>

        <p className="text-sm text-gray-600 mb-4">
          Create a simple profile card using React components.
        </p>

        <div className="mb-4">
          <p className="text-sm font-medium mb-2">Requirements:</p>
          <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
            <li>Your full name</li>
            <li>A profile picture</li>
            <li>A list of your hobbies</li>
            <li>Your education details</li>
          </ul>
        </div>

        <div className="bg-blue-50 border border-[#1E3A5F] rounded-xl p-4">
          <p className="text-sm text-blue-700">
            Expected Outcome: A clean profile card built with Html.
          </p>
        </div>

      </div>
    </div>
  );
}