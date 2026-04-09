import React from 'react'
import { useNavigate } from 'react-router-dom'
import userAvatar from '../../../assets/user-avatar.png'

const mockData = [
  {
    id: 1,
    name: "John Doe",
    email: "john.d@university.edu",
    update: { label: "✓ Completed Module 1", style: "bg-green-50 text-green-600" },
    course: "Advanced React Patterns",
    time: "2 mins ago",
    avatar: userAvatar,
    action: { label: "Profile", style: "text-[#D97706] font-semibold text-sm hover:underline" },
  },
  {
    id: 2,
    name: "Eze Chika",
    email: "ezechika@design.co",
    update: { label: "↑ Submitted Assignment", style: "bg-purple-50 text-[#7C3AED]" },
    course: "UI/UX Masterclass",
    time: "14 mins ago",
    avatar: userAvatar,
    action: { label: "Review", style: "bg-[#F3EEFF] text-[#7C3AED] font-semibold text-sm px-4 py-1.5 rounded-lg hover:bg-[#EDE9FE] transition-colors" },
  },
  {
    id: 3,
    name: "Eze Chika",
    email: "ezechika@design.co",
    update: { label: "↑ Submitted Assignment", style: "bg-purple-50 text-[#7C3AED]" },
    course: "UI/UX Masterclass",
    time: "14 mins ago",
    avatar: userAvatar,
    action: { label: "Review", style: "bg-[#F3EEFF] text-[#7C3AED] font-semibold text-sm px-4 py-1.5 rounded-lg hover:bg-[#EDE9FE] transition-colors" },
  },
   {
    id: 3,
    name: "Eze Chika",
    email: "ezechika@design.co",
    update: { label: "↑ Submitted Assignment", style: "bg-purple-50 text-[#7C3AED]" },
    course: "UI/UX Masterclass",
    time: "14 mins ago",
    avatar: userAvatar,
    action: { label: "Review", style: "bg-[#F3EEFF] text-[#7C3AED] font-semibold text-sm px-4 py-1.5 rounded-lg hover:bg-[#EDE9FE] transition-colors" },
  },
   {
    id: 3,
    name: "Eze Chika",
    email: "ezechika@design.co",
    update: { label: "↑ Submitted Assignment", style: "bg-purple-50 text-[#7C3AED]" },
    course: "UI/UX Masterclass",
    time: "14 mins ago",
    avatar: userAvatar,
    action: { label: "Review", style: "bg-[#F3EEFF] text-[#7C3AED] font-semibold text-sm px-4 py-1.5 rounded-lg hover:bg-[#EDE9FE] transition-colors" },
  },
];

export default function LearningActivityTable() {
  const navigate = useNavigate();

  return (
    <div className='px-4 py-4'>

      {/* Back to Dashboard — mobile only */}
      <button
        onClick={() => navigate("/dashboard")}
        className="md:hidden flex items-center gap-2 text-sm font-semibold text-[#7C3AED] mb-4"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
        </svg>
        Back to Dashboard
      </button>

      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-bold text-[#0F172A]">Learner Activity</h2>
        <button className="text-sm font-semibold text-[#D97706] hover:underline">
          View all activity
        </button>
      </div>

      {/* Mobile Cards — shown on small screens */}
      <div className="flex flex-col gap-3 md:hidden">
        {mockData.map((learner) => (
          <div key={learner.id} className="bg-[#F8FAFC] rounded-xl p-4 flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-gray-200 flex-shrink-0" />
              <div>
                <p className="font-semibold text-[#0F172A] text-sm">{learner.name}</p>
                <p className="text-xs text-[#6B7280]">{learner.email}</p>
              </div>
            </div>
            <span className={`${learner.update.style} text-xs font-semibold px-3 py-1 rounded-full w-fit`}>
              {learner.update.label}
            </span>
            <p className="text-xs text-[#0F172A]">{learner.course}</p>
            <div className="flex items-center justify-between">
              <p className="text-xs text-[#6B7280]">{learner.time}</p>
              <button className={learner.action.style}>{learner.action.label}</button>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop Table — hidden on small screens */}
      <table className="hidden md:table w-full text-sm">
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
              <td className="px-4 py-4">
                <div className="flex items-center gap-3">
                  <img src={userAvatar} alt="" className='rounded-full'/>
                  <div>
                    <p className="font-semibold text-[#0F172A]">{learner.name}</p>
                    <p className="text-xs text-[#6B7280]">{learner.email}</p>
                  </div>
                </div>
              </td>
              <td className="px-4 py-4">
                <span className={`${learner.update.style} text-xs font-semibold px-3 py-1 rounded-full`}>
                  {learner.update.label}
                </span>
              </td>
              <td className="px-4 py-4 text-[#0F172A]">{learner.course}</td>
              <td className="px-4 py-4 text-[#6B7280]">{learner.time}</td>
              <td className="px-4 py-4">
                <button className={learner.action.style}>{learner.action.label}</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  )
}