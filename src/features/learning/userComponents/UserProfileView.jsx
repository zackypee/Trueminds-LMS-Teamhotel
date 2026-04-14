import React from "react";
import ProfileImage from "../../../assets/profileimage.jpg"; // Import a profile image
import ProfileLogo from "../../../assets/profilelogo.png"; // Import a profile image
import PencilImage from "../../../assets/pencil.png"; // Import a pencil icon for editing
import { useAuth } from "../../auth/context/authLoginContext";

export default function UserProfileView() {

  const {user}= useAuth();
  const userData = {
    name: "Chika Okafor",
    id: "UI/2026/050",
    email: "chikaokafor91@gmail.com",
    phone: "+234 812 345 6789",
    location: "Lagos, Nigeria",
    dob: "14 october 1998",
    bio: "Passionate UI/UX designer focused on creating accessible and delightful digital experiences. Currently honing skills in user research and motion design.",
    profileImage: ProfileImage,
    role: "UI/UX Designer",
    status: "Learner Intern",
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
    <main className="max-w-full w-full flex flex-col gap-6 py-10 px-6 md:py-15 md:px-10 bg-[#ffffff] rounded-3xl">
      {/* Profile Header Section: Centered on mobile, row on desktop */}
      <div className="flex flex-col md:flex-col items-center md:items-start gap-6">
        <img
          src={userData.profileImage}
          alt={userData.name}
          className="w-24 h-24 md:w-35 md:h-35 rounded-full object-cover border-4 border-white shadow-sm"
        />

        <div className="text-center md:text-left flex-1">
          {/* Reduced font size for mobile, 5xl for desktop */}
          <h1 className="text-3xl md:text-5xl font-bold mb-4">{user.name}</h1>

          {/* Responsive Button: full width on mobile, auto width on desktop */}
          <button className="bg-[#7C3AED] rounded-md  py-3 px-4 w-full  flex justify-center items-center gap-3 mb-5 text-white uppercase font-medium hover:bg-[#6D28D9] transition-colors">
            <span>
              <img src={PencilImage} alt="" aria-hidden="true" />
            </span>
            Edit Profile
          </button>

          {/* Badges: Wrap on small screens */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2 text-xs md:text-sm font-semibold">
            <p className="text-gray-600 bg-[#EDE5F5] px-4 py-2 rounded-full">
              {user.id}
            </p>
            <p className="text-gray-600 bg-[#E9DDFF] px-4 py-2 rounded-full">
              {userData.status}
            </p>
            <p className="text-gray-600 bg-[#BB9EFF] px-4 py-2 rounded-full">
              {userData.role}
            </p>
          </div>
        </div>
      </div>

      <hr className="border-gray-200" />

      {/* Personal Details Section */}
      <div>
        <span className="flex items-center gap-4 mb-5">
          <img
            src={ProfileLogo}
            alt=""
            className="w-8 h-8 bg-[#F3EBFA] p-1.5 rounded-md"
          />
          <h2 className="font-semibold text-lg">Personal Details</h2>
        </span>

        {/* Responsive Grid: 1 column on mobile, 2 columns on tablets/desktop */}
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-6">
          <DetailItem label="Email Address" value={user.email} />
          <DetailItem label="Phone Number" value={userData.phone} />
          <DetailItem label="Location" value={userData.location} />
          <DetailItem label="Date of Birth" value={userData.dob} />
        </div>

        <div className="mt-8">
          <p className="uppercase text-xs font-bold text-[#7B7488] mb-2 tracking-wider">
            Bio:
          </p>
          <p className="text-gray-700 leading-relaxed">{userData.bio}</p>
        </div>
      </div>
    </main>
  );
}
