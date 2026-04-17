import React from 'react'
import editProfileImg from '../../../assets/edit-profile-img.png'
import { enrollDateFormat } from '../../../globalUtils/utils'
import { useState } from 'react'

const CameraIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/>
    <circle cx="12" cy="13" r="4"/>
  </svg>
)



export default function EditProfileDetails({ userProfile, handleImageChange, preview }) {

  

  const enrollDate = enrollDateFormat(userProfile.created_at)

  const programData = [
    { label: 'Assigned Mentor', value: 'Tunde Adeyemi' },
    { label: 'Cohort Group', value: 'Design Alpha-24' },
    { label: 'Enrolled Date', value: enrollDate },
  ]
  return (
    <div className="w-full lg:w-72 flex-shrink-0 flex flex-col gap-5">

      {/* ── Photo Card ── */}
      <div className="bg-white rounded-2xl p-6 flex flex-col items-center gap-3 shadow-sm">
        <div className="relative w-28 h-28">
          {/* Profile Image */}
          <img
            src={preview || editProfileImg}
            alt={userProfile?.name || "User"}
            className="w-28 h-28 rounded-full object-cover ring-4 ring-white shadow"
          />

          {/* Camera Button */}
          <label
            htmlFor="profile-upload"
            className="absolute bottom-1 right-1 bg-blue-600 hover:bg-blue-700 transition rounded-xl p-2 shadow cursor-pointer flex items-center justify-center"
          >
            <CameraIcon />
          </label>

          {/* Hidden Input */}
          <input
            id="profile-upload"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />
        </div>

        <div className="text-center">
          <p className="font-semibold text-[#001C3B] text-base">
            {userProfile?.name || "N/A"}
          </p>
          <p className="text-sm text-gray-500 mt-0.5">
            {userProfile?.location || "N/A"}
          </p>
        </div>

        <button
          type="button"
          className="w-full rounded-xl border border-gray-200 py-2.5 px-4 text-sm font-medium text-[#1F2937] hover:bg-gray-50 transition"
        >
          Upload New Photo
        </button>
      </div>

      {/* ── Program Status Card ── */}
      <div className="bg-white rounded-2xl p-5 shadow-sm">
        <p className="text-[10px] font-semibold text-[#8A9BBB] uppercase tracking-widest mb-4">
          Program Status
        </p>
        <div className="flex flex-col gap-2.5">
          {programData.map(({ label, value }) => (
            <div
              key={label}
              className="flex items-center justify-between bg-[#F4F6FA] rounded-xl px-4 py-3"
            >
              <span className="text-sm text-[#6B7A95]">{label}</span>
              <span className="text-sm font-semibold text-[#001C3B]">{value}</span>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}