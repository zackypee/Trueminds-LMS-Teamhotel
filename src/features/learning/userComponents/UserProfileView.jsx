import React, { useState } from "react";
import ProfileImage from "../../../assets/profileimage.jpg";
import ProfileLogo from "../../../assets/profilelogo.png";
import PencilImage from "../../../assets/pencil.png";
import personIcon from "../../../assets/person-icon.png";
import { enrollDateFormat } from "../../../globalUtils/utils";

export default function UserProfileView({ handleModalOpen, userProfile }) {
  const defaultProfile = {
    image: ProfileImage,
    name: "John Doe",
    id: "123456",
    status: "UI/UX Design",
    role: "Learner Intern",
    number: "+234 812 345 6789",
    dob: "January 1, 1990",
    location: "Lagos, Nigeria",
    bio: "Passionate UI/UX designer focused on creating accessible and delightful digital experiences. Currently honing skills in user research and motion design.",
  };

  function DetailItem({ label, value }) {
    return (
      <div>
        <p className="uppercase text-xs font-bold text-[#7B7488] tracking-wider">
          {label}:
        </p>
        <p className="font-medium text-gray-800 break-words truncate">
          {value}
        </p>
      </div>
    );
  }
  return (
    <main className="max-w-full w-full flex flex-col gap-6 py-10 px-6 md:py-15 md:px-10 bg-white rounded-3xl">
      {/* Profile Header Section: Centered on mobile, row on desktop */}
      <div className="flex flex-col md:flex-col items-center md:items-start gap-6">
        <img
          src={defaultProfile?.image}
          alt={userProfile?.name}
          className="w-24 h-24 md:w-35 md:h-35 rounded-full object-cover border-4 border-white shadow-sm"
        />

        <div className="text-center md:text-left flex-1">
          {/* Reduced font size for mobile, 5xl for desktop */}
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            {userProfile.name}
          </h1>

          {/* Responsive Button: full width on mobile, auto width on desktop */}
          <button
            onClick={handleModalOpen}
            className="bg-[#0029F5] rounded-md  py-3 px-4 w-full  flex justify-center items-center gap-3 mb-5 text-white uppercase font-medium hover:bg-[#1E3A5F] transition-colors cursor-pointer"
          >
            <span>
              <img src={PencilImage} alt="" aria-hidden="true" />
            </span>
            Edit Profile
          </button>

          {/* Badges: Wrap on small screens */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 text-xs md:text-sm font-semibold">
            <p className="text-gray-600 bg-[#f2f4fe] px-4 py-2 rounded-full truncate">
              {userProfile.id}
            </p>
            <p className="text-gray-600 bg-[#f2f4fe] px-4 py-2 rounded-full">
              {defaultProfile.role}
            </p>
            <p className="text-gray-600 bg-[#f2f4fe] px-4 py-2 rounded-full">
              {defaultProfile.status}
            </p>
          </div>
        </div>
      </div>

      <hr className="border-gray-200" />

      {/* Personal Details Section */}
      <div>
        <span className="flex items-center gap-4 mb-5">
          <img
            src={personIcon}
            alt=""
            className="w-8 h-8 p-1.5 rounded-md"
          />
          <h2 className="font-semibold text-lg">Personal Details</h2>
        </span>

        {/* Responsive Grid: 1 column on mobile, 2 columns on tablets/desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-6">
          <DetailItem label="Email Address" value={userProfile.email} />
          <DetailItem label="Phone Number" value={defaultProfile.number} />
          <DetailItem label="Location" value={defaultProfile.location} />
          <DetailItem label="Date of Birth" value={defaultProfile.dob} />
        </div>

        <div className="mt-8">
          <p className="uppercase text-xs font-bold text-[#7B7488] mb-2 tracking-wider">
            Bio:
          </p>
          <p className="text-gray-700 leading-relaxed">{defaultProfile.bio}</p>
        </div>
      </div>
    </main>
  );
}
