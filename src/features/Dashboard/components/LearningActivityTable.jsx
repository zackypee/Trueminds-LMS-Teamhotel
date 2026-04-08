import React from 'react'

const mockData = [
  {
    id: 1,
    name: "John Doe",
    email: "john.d@university.edu",
    update: {
      label: "✓ Completed Module 1",
      style: "bg-green-50 text-green-600",
    },
    course: "Advanced React Patterns",
    time: "2 mins ago",
    action: {
      label: "Profile",
      style: "text-[#D97706] font-semibold text-sm hover:underline",
    },
  },
  {
    id: 2,
    name: "Eze Chika",
    email: "ezechika@design.co",
    update: {
      label: "↑ Submitted Assignment",
      style: "bg-purple-50 text-[#7C3AED]",
    },
    course: "UI/UX Masterclass",
    time: "14 mins ago",
    action: {
      label: "Review",
      style: "bg-[#F3EEFF] text-[#7C3AED] font-semibold text-sm px-4 py-1.5 rounded-lg hover:bg-[#EDE9FE] transition-colors",
    },
  },
  {
    id: 3,
    name: "Eze Chika",
    email: "ezechika@design.co",
    update: {
      label: "↑ Submitted Assignment",
      style: "bg-purple-50 text-[#7C3AED]",
    },
    course: "UI/UX Masterclass",
    time: "14 mins ago",
    action: {
      label: "Review",
      style: "bg-[#F3EEFF] text-[#7C3AED] font-semibold text-sm px-4 py-1.5 rounded-lg hover:bg-[#EDE9FE] transition-colors",
    },
  },
];

export default function LearningActivityTable() {
  return (
    <div className='flex px-4 py-4'>
      <div className="w-full">

        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-[#0F172A]">Learner Activity</h2>
          <button className="text-sm font-semibold text-[#D97706] hover:underline">
            View all activity
          </button>
        </div>

        {/* Table */}
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-[#F8FAFC] text-[#6B7280] text-xs font-medium">
              <th className="text-left px-4 py-3">Learner</th>
              <th className="text-left px-4 py-3">Update</th>
              <th className="text-left px-4 py-3">Course</th>
              <th className="text-left px-4 py-3">Time</th>
              <th className="text-left px-4 py-3">Action</th>
            </tr>
          </thead>
          <tbody>
            {mockData.map((learner) => (
              <tr key={learner.id} className="border-b border-[#F1F5F9]">

                {/* Learner */}
                <td className="px-4 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-200" />
                    <div>
                      <p className="font-semibold text-[#0F172A]">{learner.name}</p>
                      <p className="text-xs text-[#6B7280]">{learner.email}</p>
                    </div>
                  </div>
                </td>

                {/* Update */}
                <td className="px-4 py-4">
                  <span className={`${learner.update.style} text-xs font-semibold px-3 py-1 rounded-full`}>
                    {learner.update.label}
                  </span>
                </td>

                {/* Course */}
                <td className="px-4 py-4 text-[#0F172A]">{learner.course}</td>

                {/* Time */}
                <td className="px-4 py-4 text-[#6B7280]">{learner.time}</td>

                {/* Action */}
                <td className="px-4 py-4">
                  <button className={learner.action.style}>
                    {learner.action.label}
                  </button>
                </td>

              </tr>
            ))}
          </tbody>
        </table>

      </div>
    </div>
  )
}