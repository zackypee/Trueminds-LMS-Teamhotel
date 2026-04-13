import { useState } from "react";
import { IoMdLink } from "react-icons/io";
import { MdPeopleAlt, MdVideocam } from "react-icons/md";
import { IoGlobeOutline } from "react-icons/io5";
import { PiWarningCircle, PiUploadSimple } from "react-icons/pi";
import { RiDeleteBin6Line } from "react-icons/ri";
import { BsFileEarmarkText } from "react-icons/bs";

function InstructorLiveSession() {
  const [formData, setFormData] = useState({
    sessionIdentity: "",
    platformLink: "",
    schedulingDate: "",
    startTime: "",
  });

  const [files, setFiles] = useState([
    { id: 1, name: "UI_Principles...", size: "2.4 MB" },
  ]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleRemoveFile = (id) => {
    setFiles(files.filter((file) => file.id !== id));
  };

  const handleAddNew = () => {
    const newFile = { id: files.length + 1, name: "New File...", size: "0 MB" };
    setFiles([...files, newFile]);
  };

  const handleLaunchSession = () => {
    console.log("Session launched:", formData);
  };

  const handleSaveDraft = () => {
    console.log("Draft saved:", formData);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* ===== MOBILE LAYOUT ===== */}
      <div className="md:hidden flex flex-col p-6 gap-6">
        {/* Header */}
        <h1 className="text-3xl font-bold text-[#1E3A5F] leading-tight">
          Live Session Setup
        </h1>
        <p className="text-sm text-[#6B7280] -mt-4">
          Design your next mentoring experience. Configure your virtual space
          and materials.
        </p>

        {/* Session Title */}
        <div>
          <label className="block text-sm font-bold text-[#0029FD] mb-2">
            Session Title
          </label>
          <input
            type="text"
            name="sessionIdentity"
            value={formData.sessionIdentity}
            onChange={handleChange}
            placeholder="e.g. Advanced System Architecture"
            className="w-full border border-[#E5E7EB] rounded-xl px-4 py-3 text-sm text-[#1E3A5F] outline-none bg-[#F9FAFB]"
          />
        </div>

        {/* Meeting Link */}
        <div>
          <label className="block text-sm font-bold text-[#0029FD] mb-2">
            Meeting Link
          </label>
          <div className="flex items-center border border-[#E5E7EB] rounded-xl px-4 py-3 bg-[#F9FAFB] gap-3">
            <MdVideocam className="text-[#6B7280] text-lg" />
            <input
              type="text"
              name="platformLink"
              value={formData.platformLink}
              onChange={handleChange}
              placeholder="https://zoom.us/j/..."
              className="flex-1 text-sm text-[#1E3A5F] outline-none bg-transparent"
            />
          </div>
        </div>

        {/* Date and Time */}
        <div className="grid grid-cols-2 gap-3">
          <div>
            <label className="block text-xs font-bold text-[#6B7280] uppercase tracking-wider mb-2">
              Date
            </label>
            <div className="flex items-center border border-[#E5E7EB] rounded-xl px-3 py-3 bg-white gap-2">
              <input
                type="date"
                name="schedulingDate"
                value={formData.schedulingDate}
                onChange={handleChange}
                className="flex-1 text-sm text-[#1E3A5F] outline-none bg-transparent"
              />
            </div>
          </div>
          <div>
            <label className="block text-xs font-bold text-[#6B7280] uppercase tracking-wider mb-2">
              Time
            </label>
            <div className="flex items-center border border-[#E5E7EB] rounded-xl px-3 py-3 bg-white gap-2">
              <input
                type="time"
                name="startTime"
                value={formData.startTime}
                onChange={handleChange}
                className="flex-1 text-sm text-[#1E3A5F] outline-none bg-transparent"
              />
            </div>
          </div>
        </div>

        {/* Pre-reading Materials */}
        <div className="border border-[#E5E7EB] rounded-2xl p-4">
          <h3 className="text-base font-bold text-[#1E3A5F] mb-4">
            Pre-reading Materials
          </h3>

          {/* Upload Zone */}
          <div className="flex flex-col items-center justify-center border-2 border-dashed border-[#E5E7EB] rounded-xl py-8 mb-4 cursor-pointer">
            <PiUploadSimple className="text-3xl text-[#0029FD] mb-2" />
            <p className="text-sm font-medium text-[#1E3A5F]">
              Tap to upload PDF or Slides
            </p>
            <p className="text-xs text-[#6B7280]">Max file size 25MB</p>
          </div>

          {/* Files List */}
          {files.map((file) => (
            <div
              key={file.id}
              className="flex items-center justify-between border border-[#E5E7EB] rounded-xl px-4 py-3 bg-white mb-2"
            >
              <div className="flex items-center gap-3">
                <BsFileEarmarkText className="text-orange-400 text-xl" />
                <p className="text-sm font-medium text-[#1E3A5F]">
                  {file.name}
                </p>
              </div>
              <button onClick={() => handleRemoveFile(file.id)}>
                <RiDeleteBin6Line className="text-red-500 text-lg" />
              </button>
            </div>
          ))}
        </div>

        {/* Finalize Session Button */}
        <button
          onClick={handleLaunchSession}
          className="bg-[#0029FD] text-white text-sm font-bold py-4 rounded-xl hover:bg-blue-800 transition-colors w-full"
        >
          Finalize Session
        </button>

        {/* Save as Draft */}
        <button
          onClick={handleSaveDraft}
          className="text-[#0029FD] text-sm font-bold text-center hover:underline"
        >
          Save as Draft
        </button>
      </div>

      {/* ===== DESKTOP LAYOUT ===== */}
      <div className="hidden md:flex gap-15 p-18 bg-white min-h-screen">
        {/* Left Column */}
        <div className="w-[65%]">
          <p className="text-[#0029FD] text-lg font-semibold mb-8">
            Instructor Studio
          </p>
          <h1 className="text-7xl font-bold text-[#1E3A5F] leading-tight mb-8">
            Set Up Your <br /> Live Session
          </h1>
          <p className="text-[#6B7280] text-xl mb-10 max-w-2xl">
            Design a seamless learning experience. Schedule your session,
            integrate your preferred platform, and prepare your students with
            shared resources.
          </p>

          {/* Form */}
          <div className="flex flex-col gap-6 p-20">
            {/* Session Identity */}
            <div>
              <label className="block text-xl font-medium text-[#6B7280] mb-2">
                Session Identity
              </label>
              <textarea
                name="sessionIdentity"
                value={formData.sessionIdentity}
                onChange={handleChange}
                placeholder="e.g. Advanced UI Mastery: The Editorial Approach"
                className="w-full border border-[#E5E7EB] rounded-xl px-7 py-7 text-lg text-[#1E3A5F] outline-none resize-none h-24 bg-[#F9FAFB]"
              />
            </div>

            {/* Platform Integration */}
            <div>
              <label className="block text-xl font-medium text-[#6B7280] mb-2">
                Platform Integration
              </label>
              <div className="flex items-center border border-[#E5E7EB] rounded-xl px-4 py-3 bg-[#F9FAFB] gap-3">
                <IoMdLink className="text-[#6B7280]" />
                <input
                  type="text"
                  name="platformLink"
                  value={formData.platformLink}
                  onChange={handleChange}
                  placeholder="https://zoom.us/j/session-id"
                  className="flex-1 text-lg text-[#1E3A5F] outline-none bg-transparent p-4"
                />
              </div>
            </div>

            {/* Scheduling Date and Start Time */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xl font-medium text-[#6B7280] mb-2">
                  Scheduling Date
                </label>
                <div className="flex items-center border border-[#E5E7EB] rounded-xl px-4 py-3 bg-[#F9FAFB] gap-3">
                  <input
                    type="date"
                    name="schedulingDate"
                    value={formData.schedulingDate}
                    onChange={handleChange}
                    className="flex-1 text-lg text-[#1E3A5F] outline-none bg-transparent p-4"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xl font-medium text-[#6B7280] mb-2">
                  Start Time
                </label>
                <div className="flex items-center border border-[#E5E7EB] rounded-xl px-4 py-3 bg-[#F9FAFB] gap-3">
                  <input
                    type="time"
                    name="startTime"
                    value={formData.startTime}
                    onChange={handleChange}
                    className="flex-1 text-lg text-[#1E3A5F] outline-none bg-transparent p-4"
                  />
                </div>
              </div>
            </div>

            {/* Session Resources */}
            <div className="bg-[#CCC3D81A] rounded-2xl border border-[#E5E7EB] p-16">
              <div className="flex items-center justify-between mb-10">
                <div>
                  <h3 className="text-xl font-bold text-[#1E3A5F]">
                    Session Resources
                  </h3>
                  <p className="text-base text-[#6B7280]">
                    Pre-readings, slides, or exercise files
                  </p>
                </div>
                <button
                  onClick={handleAddNew}
                  className="text-base text-[#0029FD] font-medium hover:underline"
                >
                  + Add New
                </button>
              </div>
              <div className="grid grid-cols-2 gap-3 mt-4">
                {files.map((file) => (
                  <div
                    key={file.id}
                    className="flex items-center justify-between border border-[#E5E7EB] rounded-xl px-4 py-3 bg-[#F9FAFB]"
                  >
                    <div>
                      <p className="text-lg font-medium text-[#1E3A5F]">
                        {file.name}
                      </p>
                      <p className="text-sm text-[#6B7280]">{file.size}</p>
                    </div>
                    <button
                      onClick={() => handleRemoveFile(file.id)}
                      className="text-[#6B7280] hover:text-red-500 transition-colors text-lg"
                    >
                      ✕
                    </button>
                  </div>
                ))}
                <div className="flex flex-col items-center justify-center border-2 border-dashed border-[#E5E7EB] rounded-xl px-4 py-6 cursor-pointer hover:bg-[#F9FAFB] transition-colors">
                  <p className="text-lg text-[#6B7280]">Drag to upload</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="w-[25%] flex flex-col gap-13 mt-82 items-center">
          {/* Live Preview Card */}
          <div
            className="rounded-2xl p-10"
            style={{ background: "linear-gradient(180deg, #0D9488, #047857)" }}
          >
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 bg-red-500 rounded-full"></span>
              <p className="text-white text-xs font-bold uppercase tracking-widest">
                Live Preview
              </p>
            </div>
            <p className="text-white text-lg font-bold mb-6">
              Session visibility will be public to all enrolled students.
            </p>
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2">
                <MdPeopleAlt className="text-white text-xl" />
                <p className="text-white text-base">42 Students Notified</p>
              </div>
              <div className="flex items-center gap-2">
                <IoGlobeOutline className="text-white text-xl" />
                <p className="text-white text-base">Global Access (English)</p>
              </div>
            </div>
          </div>

          {/* Launch Session Button */}
          <button
            onClick={handleLaunchSession}
            className="bg-[#0029FD] text-white text-base font-bold py-4 rounded-xl hover:bg-blue-800 transition-colors w-90"
          >
            Launch Session
          </button>

          {/* Save as Draft */}
          <button
            onClick={handleSaveDraft}
            className="text-[#0029FD] text-base font-bold py-4 rounded-xl border border-[#E5E7EB] hover:bg-[#F9FAFB] transition-colors w-90"
          >
            Save as Draft
          </button>

          {/* Warning Notice */}
          <div className="bg-[#D5E3FF4D] rounded-xl p-7 flex gap-5 items-center">
            <PiWarningCircle className="text-[#D97706] text-xl shrink-0" />
            <p className="text-base text-[#D97706] max-w-3xs">
              Once launched, an automated notification will be sent to all
              enrolled students with the access link.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstructorLiveSession;
